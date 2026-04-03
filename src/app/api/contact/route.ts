import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/notification-service";

const STRAPI_API_URL =
  process.env.STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, source, website } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const strapiRes = await fetch(`${STRAPI_API_URL}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          phone,
          message,
          service,
          website,
          submitted_at: new Date().toISOString(),
        },
      }),
    });

    if (!strapiRes.ok) {
      const errorData = await strapiRes.json();
      console.error("Strapi submission error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit to Strapi" },
        { status: strapiRes.status }
      );
    }

    const data = await strapiRes.json();

    try {
      await sendContactNotification({
        email: String(email),
        message: typeof message === "string" ? message : undefined,
        name: String(name),
        phone: typeof phone === "string" ? phone : undefined,
        service: typeof service === "string" ? service : undefined,
        source: typeof source === "string" && source.trim() ? source : "unknown-contact",
        submittedAt: new Date().toISOString(),
        website: typeof website === "string" ? website : undefined,
      });
    } catch (error) {
      console.error("Contact notification failed", {
        error: error instanceof Error ? error.message : String(error),
        recipientType: "contact",
        source: typeof source === "string" ? source : "unknown-contact",
        submitterEmail: String(email),
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
