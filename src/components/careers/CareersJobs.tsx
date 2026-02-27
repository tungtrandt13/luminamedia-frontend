"use client";

import { useMemo, useState } from "react";
import type { CareersJob } from "@/lib/mock-data/careers-mock";

function ChevronButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="grid place-items-center size-[42px] md:size-[50px] rounded-full bg-[#AF7E2D] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === "next" ? "rotate-180" : ""}
      >
        <path
          d="M14.5 5L7.5 12L14.5 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function JobCard({ job }: { job: CareersJob }) {
  return (
    <div className="bg-black text-white rounded-[16px] px-[20px] md:px-[30px] py-[22px] md:py-[29px] h-full md:h-[295px] flex flex-col">
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-[#AF7E2D] text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.3]">
          {job.title}
        </h3>
        <p className="text-[#838383] text-[12px] md:text-[14px] leading-[1.15] font-normal tracking-[-0.42px] text-right whitespace-pre-line font-mono">
          {job.company}
        </p>
      </div>

      <div className="mt-[18px] md:mt-[24px] h-px w-full bg-white/10" />

      <div className="mt-[18px] md:mt-[24px] grid grid-cols-1 sm:grid-cols-2 gap-[18px] md:gap-[56px] text-[14px] md:text-[16px] font-medium text-white/95">
        <div className="whitespace-pre-line">
          <p className="mb-2">
            Lương: {job.salary}
            {"\n"}Kinh nghiệm: {job.experience}
          </p>
          <p>Hạn nộp hồ sơ: {job.deadline}</p>
        </div>
        <div className="whitespace-pre-line">
          <p className="mb-2">Địa điểm: {job.location}</p>
          <p>Hạn nộp hồ sơ: {job.deadline}</p>
        </div>
      </div>
    </div>
  );
}

export default function CareersJobs({ title, jobs }: { title: string; jobs: CareersJob[] }) {
  const [page, setPage] = useState(0);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(jobs.length / pageSize));

  const visibleJobs = useMemo(() => {
    const start = page * pageSize;
    return jobs.slice(start, start + pageSize);
  }, [jobs, page]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <section className="w-full bg-[#FFF8ED] text-black">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.1] opacity-80">
            {title}
          </h2>
          <div className="flex items-center gap-[9px]">
            <ChevronButton
              direction="prev"
              disabled={!canPrev}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            />
            <ChevronButton
              direction="next"
              disabled={!canNext}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            />
          </div>
        </div>

        <div className="mt-[40px] md:mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-[30px] flex items-center justify-center gap-[10px]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`size-[10px] rounded-full transition-colors ${
                i === page ? "bg-[#AF7E2D]" : "bg-black/15 hover:bg-black/30"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

