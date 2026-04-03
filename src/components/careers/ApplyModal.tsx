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

    const formData = new FormData(e.currentTarget);
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
      e.currentTarget.reset();
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 transition-opacity" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[800px] bg-white rounded-[16px] p-[60px] shadow-2xl flex flex-col gap-[32px]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-[24px] right-[24px] text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Title */}
        <h2 className="font-sans font-semibold text-[32px] md:text-[40px] text-[#AF7E2D] tracking-tight">
          {isEN ? "Apply now" : "Ứng tuyển ngay"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-[20px] w-full" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="w-full">
            <input 
              name="name"
              type="text" 
              placeholder={isEN ? "Full name*" : "Họ và tên*"} 
              className="w-full bg-[#f6f6f6] text-gray-900 placeholder-gray-500 rounded-[12px] px-[24px] py-[20px] outline-none focus:ring-1 focus:ring-[#AF7E2D] font-sans text-[16px]"
              required
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <input 
              name="email"
              type="email" 
              placeholder="Email*" 
              className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-500 rounded-[12px] px-[24px] py-[20px] outline-none focus:ring-1 focus:ring-[#AF7E2D] font-sans text-[16px]"
              required
            />
            <input 
              name="phone"
              type="tel" 
              placeholder={isEN ? "Phone number*" : "Số điện thoại*"} 
              className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-500 rounded-[12px] px-[24px] py-[20px] outline-none focus:ring-1 focus:ring-[#AF7E2D] font-sans text-[16px]"
              required
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <input 
              name="linkedin"
              type="url" 
              placeholder="LinkedIn Profile" 
              className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-500 rounded-[12px] px-[24px] py-[20px] outline-none focus:ring-1 focus:ring-[#AF7E2D] font-sans text-[16px]"
            />
            <input 
              name="portfolio"
              type="url" 
              placeholder="Link Portfolio" 
              className="flex-1 bg-[#f6f6f6] text-gray-900 placeholder-gray-500 rounded-[12px] px-[24px] py-[20px] outline-none focus:ring-1 focus:ring-[#AF7E2D] font-sans text-[16px]"
            />
          </div>

          {/* Upload Row */}
          <div className="w-full">
            <label className="flex flex-col md:flex-row items-center justify-center gap-[12px] w-full bg-[#dcdcdc] rounded-[12px] px-[24px] py-[28px] cursor-pointer hover:bg-[#d0d0d0] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span className="font-sans font-medium text-[16px] text-gray-500">
                {fileName
                  ? fileName
                  : (isEN
                    ? "Upload your CV (DOC, DOCX, PDF — max 5MB)"
                    : "Tải CV của bạn (chấp nhận DOC, DOCX, PDF — tối đa 5MB)")}
              </span>
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
            <p className="text-[14px] text-red-600">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <div className="mt-[20px] flex justify-start">
            <button 
              type="submit"
              disabled={loading}
              className="flex flex-row justify-center items-center px-[40px] py-[20px] w-auto min-w-[202px] h-[59px] border border-[#AF7E2D] rounded-[8px] bg-white transition-colors duration-300 hover:bg-[#AF7E2D] group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-sans font-medium text-[16px] leading-[19px] text-[#AF7E2D] group-hover:text-white transition-colors">
                {loading ? (isEN ? "Submitting..." : "Đang gửi...") : (isEN ? "Apply now" : "Ứng tuyển ngay")}
              </span>
            </button>
          </div>
        </form>
      </div>

      <SuccessModal 
        isOpen={success} 
        onClose={() => {
          setSuccess(false);
          onClose();
        }} 
      />
    </div>
  );
}
