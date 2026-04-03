import { NextResponse } from "next/server";
import { sendCareerNotification } from "@/lib/notification-service";

const STRAPI_API_URL =
  process.env.STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "http://localhost:1337";

const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const MAX_CV_SIZE = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

function hasAllowedExtension(fileName: string) {
  const lowerCaseFileName = fileName.toLowerCase();
  return ALLOWED_CV_EXTENSIONS.some((extension) => lowerCaseFileName.endsWith(extension));
}

function toAbsoluteUrl(url?: string | null) {
  if (!url) {
    return undefined;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return new URL(url, STRAPI_API_URL).toString();
}

export async function POST(request: Request) {
  try {
    if (!STRAPI_API_TOKEN) {
      console.error("Career Apply API Error: STRAPI_API_TOKEN is missing");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const jobTitle = String(formData.get("job_title") || "").trim();
    const jobSlug = String(formData.get("job_slug") || "").trim();
    const locale = String(formData.get("locale") || "").trim();
    const linkedin = String(formData.get("linkedin") || "").trim();
    const portfolio = String(formData.get("portfolio") || "").trim();
    const source = String(formData.get("source") || "career-apply-modal").trim();
    const cvFile = formData.get("cv");
    const submittedAt = new Date().toISOString();
    let cvFileName: string | undefined;
    let cvUrl: string | undefined;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    let cvFileId: number | null = null;

    if (cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_SIZE) {
        return NextResponse.json({ error: "CV file must be under 5MB" }, { status: 400 });
      }

      const isAllowedMimeType = ALLOWED_CV_TYPES.has(cvFile.type);
      const isAllowedFileName = hasAllowedExtension(cvFile.name);

      if (!isAllowedMimeType || !isAllowedFileName) {
        return NextResponse.json(
          { error: "Only PDF, DOC and DOCX files are allowed" },
          { status: 400 }
        );
      }

      const uploadForm = new FormData();
      uploadForm.append("files", cvFile, cvFile.name);

      const uploadRes = await fetch(`${STRAPI_API_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        console.error("Strapi upload error:", await uploadRes.text());
        return NextResponse.json({ error: "Failed to upload CV" }, { status: 500 });
      }

      const uploadData = await uploadRes.json();
      cvFileId = uploadData[0]?.id ?? null;
      cvFileName = uploadData[0]?.name || cvFile.name;
      cvUrl = toAbsoluteUrl(uploadData[0]?.url);
    }

    const payload: {
      data: {
        name: string;
        email: string;
        phone: string;
        job_title: string;
        job_slug: string;
        locale: string;
        linkedin: string;
        portfolio: string;
        submitted_at: string;
        cv?: number;
      };
    } = {
      data: {
        name,
        email,
        phone,
        job_title: jobTitle,
        job_slug: jobSlug,
        locale,
        linkedin,
        portfolio,
        submitted_at: submittedAt,
      },
    };

    if (cvFileId) {
      payload.data.cv = cvFileId;
    }

    const entryRes = await fetch(`${STRAPI_API_URL}/api/career-applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    if (!entryRes.ok) {
      const errorText = await entryRes.text();
      console.error("Strapi career application error:", errorText);
      return NextResponse.json({ error: "Failed to create application" }, { status: entryRes.status });
    }

    const data = await entryRes.json();

    try {
      await sendCareerNotification({
        cvFileName,
        cvUrl,
        email,
        jobSlug,
        jobTitle,
        linkedin,
        locale,
        name,
        phone,
        portfolio,
        source,
        submittedAt,
      });
    } catch (error) {
      console.error("Career notification failed", {
        error: error instanceof Error ? error.message : String(error),
        recipientType: "career",
        source,
        submitterEmail: email,
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Career Apply API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
