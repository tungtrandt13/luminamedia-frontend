"use client";

import { useState, useEffect } from "react";
import SuccessModal from "@/components/shared/SuccessModal";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobSlug?: string;
  locale?: string;
}

export function ApplyModal({
  isOpen,
  onClose,
  jobTitle,
  jobSlug = "",
  locale = "vi",
}: ApplyModalProps) {
  const isEN = locale === "en";
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("job_title", jobTitle);
    formData.append("job_slug", jobSlug);
    formData.append("locale", locale);
    formData.append("source", "career-apply-modal");

    try {
      const res = await fetch("/api/career-apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(
          errData.error || (isEN ? "Failed to submit application" : "Gửi đơn ứng tuyển thất bại")
        );
      }

      setSuccess(true);
      setFileName("");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : isEN ? "An error occurred" : "Đã có lỗi xảy ra"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] animate-[fadeIn_0.2s_ease-out]" 
        onClick={onClose}
      />

      {/* Modal — bottom sheet on mobile, centered card on desktop */}
      <div className="relative z-10 w-full md:max-w-[800px] max-h-[92dvh] md:max-h-[90vh] bg-white rounded-t-[20px] md:rounded-[16px] shadow-2xl flex flex-col animate-[slideUp_0.3s_ease-out] md:animate-[scaleIn_0.25s_ease-out]">
        {/* Drag handle — mobile only */}
        <div className="flex md:hidden justify-center pt-[10px] pb-[4px]">
          <div className="w-[36px] h-[4px] rounded-full bg-gray-300" />
        </div>

        {/* Header — sticky */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 md:px-[60px] pt-4 md:pt-[48px] pb-3 md:pb-0 bg-white rounded-t-[20px] md:rounded-t-[16px]">
          <h2 className="font-sans font-semibold text-[24px] md:text-[40px] text-[#AF7E2D] tracking-tight">
            {isEN ? "Apply now" : "Ứng tuyển ngay"}
          </h2>
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors active:scale-95"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable form area */}
        <div className="overflow-y-auto overscroll-contain px-5 md:px-[60px] pb-5 md:pb-[48px] pt-4 md:pt-[24px]">
          {/* Job title badge */}
          <div className="mb-4 md:mb-6">
            <span className="inline-block text-[13px] md:text-[14px] font-medium text-[#AF7E2D] bg-[#AF7E2D]/8 px-3 py-1.5 rounded-full">
              {jobTitle}
            </span>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-[14px] md:gap-[20px] w-full" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="w-full">
              <input 
                name="name"
                type="text" 
                placeholder={isEN ? "Full name*" : "Họ và tên*"} 
                className="w-full bg-[#f6f6f6] text-gray-900 placeholder-gray-400 rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[14px] md:py-[20px] outline-none focus:ring-2 focus:ring-[#AF7E2D]/40 focus:bg-white font-sans text-[15px] md:text-[16px] transition-all"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-[20px] w-full">
              <input 
                name="email"
                type="email" 
                placeholder="Email*" 
                className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-400 rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[14px] md:py-[20px] outline-none focus:ring-2 focus:ring-[#AF7E2D]/40 focus:bg-white font-sans text-[15px] md:text-[16px] transition-all"
                required
              />
              <input 
                name="phone"
                type="tel" 
                placeholder={isEN ? "Phone number*" : "Số điện thoại*"} 
                className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-400 rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[14px] md:py-[20px] outline-none focus:ring-2 focus:ring-[#AF7E2D]/40 focus:bg-white font-sans text-[15px] md:text-[16px] transition-all"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-[20px] w-full">
              <input 
                name="linkedin"
                type="url" 
                placeholder="LinkedIn Profile" 
                className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-400 rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[14px] md:py-[20px] outline-none focus:ring-2 focus:ring-[#AF7E2D]/40 focus:bg-white font-sans text-[15px] md:text-[16px] transition-all"
              />
              <input 
                name="portfolio"
                type="url" 
                placeholder="Link Portfolio" 
                className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-400 rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[14px] md:py-[20px] outline-none focus:ring-2 focus:ring-[#AF7E2D]/40 focus:bg-white font-sans text-[15px] md:text-[16px] transition-all"
              />
            </div>

            {/* Upload Row */}
            <div className="w-full">
              <label className="flex items-center gap-3 w-full border-2 border-dashed border-gray-300 bg-[#fafafa] rounded-[10px] md:rounded-[12px] px-4 md:px-[24px] py-[16px] md:py-[24px] cursor-pointer hover:border-[#AF7E2D]/40 hover:bg-[#AF7E2D]/[0.03] transition-all group">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-[10px] bg-[#AF7E2D]/10 flex items-center justify-center group-hover:bg-[#AF7E2D]/15 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AF7E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans font-medium text-[14px] md:text-[15px] text-gray-700 truncate">
                    {fileName
                      ? fileName
                      : (isEN ? "Upload your CV" : "Tải CV của bạn")}
                  </span>
                  {!fileName && (
                    <span className="font-sans text-[12px] md:text-[13px] text-gray-400">
                      {isEN ? "DOC, DOCX, PDF — max 5MB" : "DOC, DOCX, PDF — tối đa 5MB"}
                    </span>
                  )}
                </div>
                <input 
                  name="cv"
                  type="file" 
                  className="hidden" 
                  accept=".doc,.docx,.pdf" 
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </label>
            </div>

            {error && (
              <p className="text-[13px] md:text-[14px] text-red-600 bg-red-50 px-3 py-2 rounded-[8px]">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div className="mt-2 md:mt-[20px]">
              <button 
                type="submit"
                disabled={loading}
                className="flex flex-row justify-center items-center w-full md:w-auto px-[40px] py-[16px] md:py-[20px] min-w-[202px] border border-[#AF7E2D] rounded-[10px] md:rounded-[8px] bg-[#AF7E2D] md:bg-white transition-all duration-300 md:hover:bg-[#AF7E2D] group disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                <span className="font-sans font-semibold md:font-medium text-[15px] md:text-[16px] leading-[19px] text-white md:text-[#AF7E2D] md:group-hover:text-white transition-colors">
                  {loading ? (isEN ? "Submitting..." : "Đang gửi...") : (isEN ? "Apply now" : "Ứng tuyển ngay")}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <SuccessModal 
        isOpen={success} 
        onClose={() => {
          setSuccess(false);
          onClose();
        }}
        title={isEN ? "Your application was" : "Bạn đã gửi"}
        highlightText={isEN ? "sent successfully" : "thành công"}
        subtitle={isEN ? "HR will contact you within 2 business days." : "HR sẽ liên hệ trong 2 ngày làm việc."}
        buttonText={isEN ? "Close" : "Đóng"}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
