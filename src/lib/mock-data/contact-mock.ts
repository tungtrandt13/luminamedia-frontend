export interface ContactPageData {
  title: string;
  description: string;
  cta_text: string;
}

export const contactMockData: Record<"vi" | "en", ContactPageData> = {
  vi: {
    title: "Hãy để Lumina Media Agency hiểu hơn về bạn",
    description:
      "Vui lòng liên hệ với chúng tôi qua Hotline/ Email hoặc để lại thông tin tại biểu mẫu. Đội ngũ Lumina Media Agency sẽ liên hệ và tư vấn cho bạn trong thời gian sớm nhất.",
    cta_text: "Tôi muốn tư vấn ngay",
  },
  en: {
    title: "Let Lumina Media Agency understand you better",
    description:
      "Please contact us via hotline / email or leave your information in the form. The Lumina Media Agency team will reach out and consult you as soon as possible.",
    cta_text: "I want a consultation now",
  },
};

