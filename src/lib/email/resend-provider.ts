import { Resend } from "resend";

export interface EmailPayload {
  html: string;
  replyTo?: string;
  subject: string;
  to: string[];
}

let resendClient: Resend | null = null;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export async function sendEmail({ html, replyTo, subject, to }: EmailPayload) {
  const from = process.env.EMAIL_FROM;

  if (!from) {
    throw new Error("EMAIL_FROM is missing");
  }

  const resend = getResendClient();

  const result = await resend.emails.send({
    from,
    html,
    replyTo,
    subject,
    to,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}
