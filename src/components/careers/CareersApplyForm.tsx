"use client";

import { useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  fields: {
    name: string;
    phone: string;
    cv_link: string;
    email: string;
    message: string;
  };
}

export default function CareersApplyForm({ title, subtitle, ctaText, fields }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const cvLink = String(formData.get("cv_link") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const payload = {
      name,
      phone,
      email,
      message: `Careers apply\nCV: ${cvLink || "(none)"}\n\n${message}`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gửi thông tin thất bại");
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đã có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="careers-apply" className="w-full bg-black text-white">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px] text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#AF7E2D] italic">
            Cảm ơn bạn!
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-white/70 font-light">
            Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.
          </p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-8 text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Gửi thông tin khác
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="careers-apply" className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[120px]">
          <div className="w-full lg:w-[505px]">
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.3] whitespace-pre-wrap">
              <span className="text-white">{title}</span>
              {"\n"}
              <span className="text-[#939292]">{subtitle}</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-[608px] flex flex-col gap-[12px]">
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <input
                required
                name="name"
                type="text"
                placeholder={fields.name}
                className="w-full h-[51px] rounded-[16px] bg-[#DBE0EC] px-[19px] py-[14px] text-[16px] font-medium text-black outline-none focus:ring-2 focus:ring-[#AF7E2D] placeholder:text-[#939292]"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder={fields.phone}
                className="w-full h-[51px] rounded-[16px] bg-[#DBE0EC] px-[23px] py-[14px] text-[16px] font-medium text-black outline-none focus:ring-2 focus:ring-[#AF7E2D] placeholder:text-[#939292]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <input
                name="cv_link"
                type="url"
                placeholder={fields.cv_link}
                className="w-full h-[51px] rounded-[16px] bg-[#DBE0EC] px-[19px] py-[14px] text-[16px] font-medium text-black outline-none focus:ring-2 focus:ring-[#AF7E2D] placeholder:text-[#939292]"
              />
              <input
                required
                name="email"
                type="email"
                placeholder={fields.email}
                className="w-full h-[51px] rounded-[16px] bg-[#DBE0EC] px-[23px] py-[14px] text-[16px] font-medium text-black outline-none focus:ring-2 focus:ring-[#AF7E2D] placeholder:text-[#939292]"
              />
            </div>
            <textarea
              name="message"
              placeholder={fields.message}
              className="w-full h-[120px] md:h-[160px] rounded-[16px] bg-[#DBE0EC] px-[19px] py-[18px] text-[16px] font-medium text-black outline-none focus:ring-2 focus:ring-[#AF7E2D] placeholder:text-[#939292] resize-none"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              disabled={loading}
              type="submit"
              className="mt-6 inline-flex w-fit items-center justify-center border border-white px-[40px] py-[20px] rounded-[8px] text-white font-medium text-[16px] hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >
              {loading ? "Đang gửi..." : ctaText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

