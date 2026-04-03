import {
  renderCareerNotificationTemplate,
  renderContactNotificationTemplate,
} from "@/lib/email-templates";
import { sendEmail } from "@/lib/email/resend-provider";

interface ContactNotificationInput {
  email: string;
  message?: string;
  name: string;
  phone?: string;
  service?: string;
  source: string;
  submittedAt: string;
  website?: string;
}

interface CareerNotificationInput {
  cvFileName?: string;
  cvUrl?: string;
  email: string;
  jobSlug?: string;
  jobTitle?: string;
  linkedin?: string;
  locale?: string;
  name: string;
  phone?: string;
  portfolio?: string;
  source: string;
  submittedAt: string;
}

const CONTACT_SOURCE_LABELS: Record<string, string> = {
  "careers-link-contact": "Careers Link Contact",
  "google-ads-contact": "Google Ads Contact",
  "homepage-contact": "Homepage Contact",
  "rent-ads-contact": "Rent Ads Contact",
  "tiktok-ads-contact": "TikTok Ads Contact",
  "tiktok-shop-ops-contact": "TikTok Shop Ops Contact",
  "training-contact": "Training Contact",
};

const CAREER_SOURCE_LABELS: Record<string, string> = {
  "career-apply-modal": "Career Apply Modal",
};

function parseRecipients(value?: string) {
  return (
    value
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? []
  );
}

function getRequiredProvider() {
  const provider = process.env.EMAIL_PROVIDER;

  if (provider !== "resend") {
    throw new Error("EMAIL_PROVIDER must be set to resend");
  }

  return provider;
}

function getContactRecipients() {
  const recipients = parseRecipients(process.env.EMAIL_TO_CONTACT);

  if (recipients.length === 0) {
    throw new Error("EMAIL_TO_CONTACT is missing");
  }

  return recipients;
}

function getCareerRecipients() {
  const careerRecipients = parseRecipients(process.env.EMAIL_TO_CAREER);
  return careerRecipients.length > 0 ? careerRecipients : getContactRecipients();
}

function isValidReplyTo(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getReplyTo(value: string) {
  return isValidReplyTo(value) ? value : undefined;
}

function getContactSourceLabel(source: string) {
  return CONTACT_SOURCE_LABELS[source] ?? source;
}

function getCareerSourceLabel(source: string) {
  return CAREER_SOURCE_LABELS[source] ?? source;
}

export async function sendContactNotification(input: ContactNotificationInput) {
  getRequiredProvider();

  const sourceLabel = getContactSourceLabel(input.source);
  const subject = `[VISS Contact] ${sourceLabel} - ${input.name}`;
  const html = renderContactNotificationTemplate({
    email: input.email,
    message: input.message,
    name: input.name,
    phone: input.phone,
    service: input.service,
    sourceLabel,
    submittedAt: input.submittedAt,
    website: input.website,
  });

  return sendEmail({
    html,
    replyTo: getReplyTo(input.email),
    subject,
    to: getContactRecipients(),
  });
}

export async function sendCareerNotification(input: CareerNotificationInput) {
  getRequiredProvider();

  const sourceLabel = getCareerSourceLabel(input.source);
  const position = input.jobTitle?.trim() || "Career Application";
  const subject = `[VISS Career] ${position} - ${input.name}`;
  const html = renderCareerNotificationTemplate({
    cvFileName: input.cvFileName,
    cvUrl: input.cvUrl,
    email: input.email,
    jobSlug: input.jobSlug,
    jobTitle: input.jobTitle,
    linkedin: input.linkedin,
    locale: input.locale,
    name: input.name,
    phone: input.phone,
    portfolio: input.portfolio,
    sourceLabel,
    submittedAt: input.submittedAt,
  });

  return sendEmail({
    html,
    replyTo: getReplyTo(input.email),
    subject,
    to: getCareerRecipients(),
  });
}
