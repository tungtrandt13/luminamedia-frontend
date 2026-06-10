import Link from "next/link";

import { googleAdsApiContent, resolveComplianceLocale } from "@/lib/compliance-content";

type Props = {
  locale: string;
};

export default function AdsApiUsage({ locale }: Props) {
  const currentLocale = resolveComplianceLocale(locale);
  const isEN = currentLocale === "en";
  const content = googleAdsApiContent[currentLocale];

  const highlights = isEN
    ? [
        "Connects to our Google Ads Manager Account (MCC) for authorized customer accounts.",
        "Retrieves account hierarchy, campaign status, and reporting metrics.",
        "Supports internal reporting, monitoring, and campaign optimization only.",
        "Google Ads data is not sold, resold, or shared with third parties.",
      ]
    : [
        "Kết nối với Google Ads Manager Account (MCC) cho các tài khoản khách hàng đã được cấp quyền.",
        "Truy xuất account hierarchy, trạng thái chiến dịch và các chỉ số báo cáo.",
        "Chỉ phục vụ báo cáo, theo dõi và tối ưu chiến dịch nội bộ.",
        "Dữ liệu Google Ads không được bán, resell hoặc chia sẻ cho bên thứ ba.",
      ];

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 py-[60px] md:py-[90px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[100px]">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#AF7E2D]">
            {content.eyebrow}
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.2] md:text-[44px]">
            {content.title}
          </h2>
          <p className="text-[16px] font-light leading-[1.75] text-[#D8D8D8] md:text-[18px]">
            {content.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${currentLocale}/google-ads-api`}
              className="rounded-[8px] bg-[#AF7E2D] px-5 py-3 text-center text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              {isEN ? "View API usage details" : "Xem chi tiết API usage"}
            </Link>
            <Link
              href={`/${currentLocale}/services/google-ads#contact`}
              className="rounded-[8px] border border-white/25 px-5 py-3 text-center text-[15px] font-medium text-white transition-colors hover:border-[#AF7E2D] hover:text-[#AF7E2D]"
            >
              {isEN ? "Contact Google Ads team" : "Liên hệ đội ngũ Google Ads"}
            </Link>
          </div>
        </div>

        <div className="flex flex-col border-t border-white/15">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/15 py-5"
            >
              <span className="text-[18px] font-semibold text-[#AF7E2D]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[16px] font-light leading-[1.7] text-[#D8D8D8]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
