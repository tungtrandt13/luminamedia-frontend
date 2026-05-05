export interface TelegramPayload {
  text: string;
}

function getTelegramConfig() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token) {
    return null;
  }

  if (!chatId) {
    console.warn("[Telegram] TELEGRAM_CHAT_ID is not set, skipping Telegram notification");
    return null;
  }

  return { token, chatId };
}

function escapeMarkdown(text: string): string {
  return text
    .replace(/_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/~/g, "\\~")
    .replace(/`/g, "\\`")
    .replace(/>/g, "\\>")
    .replace(/#/g, "\\#")
    .replace(/\+/g, "\\+")
    .replace(/-/g, "\\-")
    .replace(/=/g, "\\=")
    .replace(/\|/g, "\\|")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\./g, "\\.")
    .replace(/!/g, "\\!");
}

export async function sendTelegramMessage(text: string): Promise<void> {
  const config = getTelegramConfig();

  if (!config) {
    return;
  }

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: escapeMarkdown(text),
      parse_mode: "MarkdownV2",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Telegram API error: ${response.status} - ${JSON.stringify(errorData)}`
    );
  }
}

export function buildContactTelegramText(input: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
  sourceLabel: string;
  website?: string;
  submittedAt: string;
}): string {
  const lines = [
    `📩 *New Contact Submission*`,
    ``,
    `🔖 *Source:* ${input.sourceLabel}`,
    `👤 *Name:* ${input.name}`,
    `📧 *Email:* ${input.email}`,
  ];

  if (input.phone) {
    lines.push(`📱 *Phone:* ${input.phone}`);
  }

  if (input.service) {
    lines.push(`🛒 *Service:* ${input.service}`);
  }

  if (input.website) {
    lines.push(`🌐 *Website:* ${input.website}`);
  }

  if (input.message) {
    lines.push(``);
    lines.push(`💬 *Message:*`);
    lines.push(`${input.message}`);
  }

  lines.push(``);
  lines.push(`🕐 *Submitted:* ${input.submittedAt}`);

  return lines.join("\n");
}

export function buildCareerTelegramText(input: {
  name: string;
  email: string;
  phone: string;
  jobTitle?: string;
  jobSlug?: string;
  linkedin?: string;
  portfolio?: string;
  cvFileName?: string;
  cvUrl?: string;
  sourceLabel: string;
  submittedAt: string;
}): string {
  const lines = [
    `📋 *New Career Application*`,
    ``,
    `🔖 *Source:* ${input.sourceLabel}`,
    `👤 *Name:* ${input.name}`,
    `📧 *Email:* ${input.email}`,
    `📱 *Phone:* ${input.phone}`,
  ];

  if (input.jobTitle) {
    lines.push(`💼 *Position:* ${input.jobTitle}`);
  }

  if (input.linkedin) {
    lines.push(`🔗 *LinkedIn:* ${input.linkedin}`);
  }

  if (input.portfolio) {
    lines.push(`🎨 *Portfolio:* ${input.portfolio}`);
  }

  if (input.cvFileName) {
    lines.push(`📎 *CV:* ${input.cvFileName}`);
    if (input.cvUrl) {
      lines.push(`   🔗 ${input.cvUrl}`);
    }
  }

  lines.push(``);
  lines.push(`🕐 *Submitted:* ${input.submittedAt}`);

  return lines.join("\n");
}
