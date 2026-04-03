const BRAND_COLOR = "#AF7E2D";
const BRAND_BG = "#FFF8ED";
const TEXT_DARK = "#171717";
const TEXT_MUTED = "#6B7280";
const BORDER = "#E5E7EB";
const CARD_BG = "#FFFFFF";

interface EmailLayoutOptions {
  previewText: string;
  title: string;
}

interface InfoRow {
  label: string;
  value: string;
}

export interface ContactNotificationTemplateData {
  email: string;
  message?: string;
  name: string;
  phone?: string;
  service?: string;
  sourceLabel: string;
  submittedAt: string;
  website?: string;
}

export interface CareerNotificationTemplateData {
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
  sourceLabel: string;
  submittedAt: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeValue(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "N/A";
}

function renderLink(value?: string) {
  const normalized = normalizeValue(value);

  if (normalized === "N/A") {
    return normalized;
  }

  const escapedValue = escapeHtml(normalized);
  return `<a href="${escapedValue}" style="color: ${BRAND_COLOR}; text-decoration: none;">${escapedValue}</a>`;
}

function renderInfoRows(rows: InfoRow[]) {
  return rows
    .map(({ label, value }) => {
      return `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid ${BORDER}; width: 180px; vertical-align: top; color: ${TEXT_MUTED}; font-size: 14px; font-weight: 600;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid ${BORDER}; color: ${TEXT_DARK}; font-size: 14px; line-height: 1.6;">
            ${value}
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderMessageBlock(label: string, value?: string) {
  return `
    <div style="margin-top: 24px;">
      <div style="color: ${TEXT_MUTED}; font-size: 14px; font-weight: 600; margin-bottom: 10px;">
        ${escapeHtml(label)}
      </div>
      <div style="background: ${CARD_BG}; border: 1px solid ${BORDER}; border-radius: 14px; padding: 16px; color: ${TEXT_DARK}; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
        ${escapeHtml(normalizeValue(value))}
      </div>
    </div>
  `;
}

function renderEmailLayout({ previewText, title }: EmailLayoutOptions, content: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="margin: 0; padding: 0; background: ${BRAND_BG}; font-family: Arial, Helvetica, sans-serif; color: ${TEXT_DARK};">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          ${escapeHtml(previewText)}
        </div>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: ${BRAND_BG}; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background: ${CARD_BG}; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 30px rgba(23, 23, 23, 0.08);">
                <tr>
                  <td style="padding: 28px 32px; background: linear-gradient(135deg, ${TEXT_DARK}, ${BRAND_COLOR}); color: #FFFFFF;">
                    <div style="font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.8; margin-bottom: 10px;">
                      VISS International
                    </div>
                    <div style="font-size: 28px; line-height: 1.3; font-weight: 700;">
                      ${escapeHtml(title)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 32px;">
                    ${content}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 28px; color: ${TEXT_MUTED}; font-size: 12px; line-height: 1.6;">
                    Email nay duoc gui tu he thong website VISS. Vui long khong reply truc tiep vao dia chi gui mail neu khong can thiet.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export function renderContactNotificationTemplate(data: ContactNotificationTemplateData) {
  const rows: InfoRow[] = [
    { label: "Nguon form", value: escapeHtml(normalizeValue(data.sourceLabel)) },
    { label: "Ho ten", value: escapeHtml(normalizeValue(data.name)) },
    { label: "Email", value: escapeHtml(normalizeValue(data.email)) },
    { label: "So dien thoai", value: escapeHtml(normalizeValue(data.phone)) },
    { label: "Website", value: renderLink(data.website) },
    { label: "Dich vu quan tam", value: escapeHtml(normalizeValue(data.service)) },
    { label: "Thoi gian gui", value: escapeHtml(normalizeValue(data.submittedAt)) },
  ];

  const content = `
    <div style="margin-bottom: 20px; color: ${TEXT_MUTED}; font-size: 14px; line-height: 1.7;">
      He thong vua ghi nhan mot contact submission moi tu website VISS.
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${renderInfoRows(rows)}
    </table>
    ${renderMessageBlock("Noi dung", data.message)}
  `;

  return renderEmailLayout(
    {
      previewText: `New contact from ${data.name}`,
      title: "Thong bao Contact Moi",
    },
    content
  );
}

export function renderCareerNotificationTemplate(data: CareerNotificationTemplateData) {
  const rows: InfoRow[] = [
    { label: "Nguon form", value: escapeHtml(normalizeValue(data.sourceLabel)) },
    { label: "Ho ten", value: escapeHtml(normalizeValue(data.name)) },
    { label: "Email", value: escapeHtml(normalizeValue(data.email)) },
    { label: "So dien thoai", value: escapeHtml(normalizeValue(data.phone)) },
    { label: "Vi tri ung tuyen", value: escapeHtml(normalizeValue(data.jobTitle)) },
    { label: "Job slug", value: escapeHtml(normalizeValue(data.jobSlug)) },
    { label: "Locale", value: escapeHtml(normalizeValue(data.locale)) },
    { label: "LinkedIn", value: renderLink(data.linkedin) },
    { label: "Portfolio", value: renderLink(data.portfolio) },
    { label: "Ten file CV", value: escapeHtml(normalizeValue(data.cvFileName)) },
    { label: "CV URL", value: renderLink(data.cvUrl) },
    { label: "Thoi gian gui", value: escapeHtml(normalizeValue(data.submittedAt)) },
  ];

  const content = `
    <div style="margin-bottom: 20px; color: ${TEXT_MUTED}; font-size: 14px; line-height: 1.7;">
      He thong vua ghi nhan mot career application moi tu website VISS.
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${renderInfoRows(rows)}
    </table>
  `;

  return renderEmailLayout(
    {
      previewText: `New career application from ${data.name}`,
      title: "Thong bao Ung Tuyen Moi",
    },
    content
  );
}
