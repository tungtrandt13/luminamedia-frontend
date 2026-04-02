"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";
import type { CareersApplySection, CareersJob } from "@/lib/mock-data/careers-mock";
import SuccessModal from "@/components/shared/SuccessModal";
import { ApplyModal } from "@/components/careers/ApplyModal";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["600", "700", "800"],
});

function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72V7.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C22 7.99 21.27 6 17 6H7C2.73 6 2 7.99 2.3 10.43l.75 8C3.26 20.39 3.98 22 8 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V5.2C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6M12 18v-5M9.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 21h18M5 21V7.8c0-.56 0-.84.11-1.05.1-.2.27-.36.61-.68l4.63-4.36c.43-.4.64-.61.88-.68.21-.06.43-.06.64 0 .24.07.45.28.88.68l4.63 4.36c.34.32.51.48.61.68.11.21.11.49.11 1.05V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21v-6h6v6M9 10h.01M15 10h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 font-sans font-semibold text-[32px] leading-[40px] text-[#AF7E2D]">
      {children}
    </h3>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="list-inside list-disc space-y-3">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="text-[16px] leading-relaxed text-[#d4d4d4]">
          {item}
        </li>
      ))}
    </ul>
  );
}


interface Props {
  job: CareersJob;
  relatedJobs: CareersJob[];
  applyFormData: CareersApplySection;
  locale: string;
}

export default function CareerDetailClient({ job, relatedJobs, applyFormData, locale }: Props) {
  const isEN = locale === "en";
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const companyLabel = job.company.replace("\n", " ").replace(/\s+/g, " ").trim();

  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e2e1]">
      <div className="mx-auto max-w-7xl px-6 py-[100px] md:px-8">
        <section className="flex flex-col items-start gap-[20px]">
          <div className="font-sans font-semibold text-[20px] leading-[24px] text-[#AF7E2D]">
            {isEN ? "Careers" : "Tuyển dụng"}
          </div>
          <h1 className="font-sans font-semibold text-[36px] md:text-[56px] leading-[1.2] md:leading-[68px] text-white">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-y-[24px] mt-[32px] w-full">
            <div className="flex flex-col gap-[8px] min-w-[200px] mr-[100px]">
              <span className="font-semibold text-[20px] leading-[24px] text-[#CFA842]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {isEN ? "Location" : "Địa điểm"}
              </span>
              <span className="font-semibold text-[32px] leading-[40px] text-[#FFFFFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {job.location || (isEN ? "Hanoi" : "Hà Nội")}
              </span>
            </div>
            <div className="flex flex-col gap-[8px] min-w-[280px] mr-[100px]">
              <span className="font-semibold text-[20px] leading-[24px] text-[#CFA842]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {isEN ? "Company" : "Công ty"}
              </span>
              <span className="font-semibold text-[32px] leading-[40px] text-[#FFFFFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {companyLabel || "Viss International"}
              </span>
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[20px] leading-[24px] text-[#CFA842]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {isEN ? "Type" : "Hình thức"}
              </span>
              <span className="font-semibold text-[32px] leading-[40px] text-[#FFFFFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {job.type || (isEN ? "Full-time" : "Toàn thời gian")}
              </span>
            </div>
          </div>
        </section>
      </div>

      {job.description && (
        <div className="bg-[#FFF8ED] w-full">
          <div className="mx-auto max-w-7xl px-6 py-[100px] md:px-8 flex flex-col items-start gap-[40px]">
            <p className="font-sans font-semibold text-[24px] md:text-[32px] leading-snug md:leading-[40px] text-[#000000] max-w-full">
              {job.description}
            </p>
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="flex justify-center items-center px-[40px] py-[20px] gap-[10px] w-auto min-w-[160px] h-[59px] border border-[#AF7E2D] rounded-[8px] transition-colors duration-300 hover:bg-[#AF7E2D] group"
            >
              <span className="font-sans font-medium text-[16px] leading-[19px] text-center text-[#AF7E2D] group-hover:text-[#FFF8ED] transition-colors">
                {isEN ? "Apply" : "Ứng tuyển"}
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 py-[100px] md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[88px] w-full">
          <div className="flex flex-col items-start gap-[40px] w-full max-w-[752px]">
            {job.responsibilities && job.responsibilities.length > 0 && (
              <section className="w-full">
                <DetailHeading>{isEN ? "Description" : "Mô tả công việc"}</DetailHeading>
                <SimpleList items={job.responsibilities} />
              </section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <section className="w-full">
                <DetailHeading>{isEN ? "Requirements" : "Yêu cầu"}</DetailHeading>
                <SimpleList items={job.requirements} />
              </section>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <section className="w-full flex flex-col justify-center items-start gap-[20px] px-[24px] py-[40px] md:px-[40px] md:py-[60px] bg-[#111111] rounded-[16px]">
                <h3 className="font-sans font-semibold text-[32px] leading-[40px] text-[#AF7E2D]">{isEN ? "Benefits" : "Quyền lợi"}</h3>
                <SimpleList items={job.benefits} />
              </section>
            )}

            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8c8c8c] transition-colors hover:text-[#AF7E2D] mt-8"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M19 12H5M5 12l7-7M5 12l7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isEN ? "Back to all positions" : "Quay lại danh sách vị trí"}
            </Link>
          </div>

          <aside className="flex flex-col items-start gap-[56px] w-full lg:w-[400px] shrink-0">
            <div className="lg:sticky lg:top-28 w-full block">
              {relatedJobs.length > 0 && (
                <div className="w-full flex flex-col items-start gap-[56px]">
                  <h4 className="font-sans font-semibold text-[40px] leading-[52px] text-white">
                    {isEN ? "Related jobs" : "Công việc liên quan"}
                  </h4>
                  <div className="flex flex-col items-start gap-[24px] w-full">
                    {relatedJobs.map((job) => (
                      <div key={job.id} className="w-full flex flex-col gap-[24px]">
                        <Link href={`/${locale}/careers/${job.slug}`} className="group flex flex-row items-center justify-between w-full">
                          <h5 className="font-sans font-semibold text-[20px] leading-[24px] text-white transition-colors group-hover:text-[#AF7E2D] pr-4">
                            {job.title}
                          </h5>
                          <span className="font-mono font-normal text-[14px] leading-[16px] text-[#838383] whitespace-nowrap text-right tracking-tight">
                            {job.location}
                          </span>
                        </Link>
                        <div className="w-full h-px bg-[#D9D9D9] opacity-30" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Full width bottom cream banner */}
      <div className="bg-[#FFF8ED] text-[#000000]">
        <div className="mx-auto max-w-7xl px-6 py-[100px] md:px-8">
          <div className="flex flex-col items-start gap-[24px] w-full">
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-snug md:leading-[52px] text-[#000000] max-w-[680px]">
              {applyFormData.subtitle?.includes('.') 
                ? applyFormData.subtitle.split('.')[0] + '.' 
                : (isEN ? "We value all applications." : "Chúng tôi trân trọng sự quan tâm và ứng tuyển của mọi ứng viên.")}
            </h2>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[32px] w-full">
              <p className="font-sans font-light text-[18px] md:text-[20px] leading-relaxed md:leading-[27px] text-[#000000] max-w-[714px]">
                {applyFormData.subtitle?.includes('.') 
                  ? applyFormData.subtitle.substring(applyFormData.subtitle.indexOf('.') + 1).trim() || applyFormData.subtitle 
                  : applyFormData.subtitle || (isEN 
                    ? "If you haven't found a suitable position, you can apply for an open position. We will contact you as soon as suitable positions become available." 
                    : "Nếu chưa tìm được vị trí phù hợp, bạn có thể ứng tuyển với vị trí mở. Chúng tôi sẽ liên hệ với bạn ngay khi chúng tôi có những vị trí thích hợp.")}
              </p>
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(true)}
                className="flex flex-row justify-center items-center px-[40px] py-[20px] gap-[10px] w-auto whitespace-nowrap min-w-[202px] h-[59px] border border-[#AF7E2D] rounded-[8px] transition-colors duration-300 hover:bg-[#AF7E2D] group shrink-0"
              >
                <span className="font-sans font-medium text-[16px] leading-[19px] text-[#AF7E2D] group-hover:text-[#FFF8ED] transition-colors">
                  {applyFormData.cta_text || (isEN ? "Apply now" : "Ứng tuyển ngay")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        jobTitle={job.title} 
        jobSlug={job.slug}
        locale={locale}
      />
    </div>
  );
}
