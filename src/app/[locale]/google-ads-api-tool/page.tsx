import { Metadata } from "next";
import Link from "next/link";

import { companyProfile } from "@/lib/company-profile";

type Locale = "vi" | "en";

type Props = {
  params: Promise<{ locale: string }>;
};

type Copy = {
  title: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  identityTitle: string;
  identityItems: { label: string; value: string }[];
  purposeTitle: string;
  purposeBody: string;
  featureTitle: string;
  features: { title: string; body: string }[];
  governanceTitle: string;
  governance: string[];
  reviewTitle: string;
  reviewItems: string[];
  privacyLabel: string;
  termsLabel: string;
  contactLabel: string;
};

const copies: Record<Locale, Copy> = {
  vi: {
    title: "Lumina Google Ads Reporting & Operations Dashboard",
    eyebrow: "Google Ads API client",
    description:
      "Công cụ nội bộ do Lumina Media Agency vận hành để đọc dữ liệu, tổng hợp báo cáo và hỗ trợ tối ưu các tài khoản Google Ads đã được khách hàng ủy quyền trong MCC của công ty.",
    metaDescription:
      "Mô tả công cụ nội bộ Lumina Google Ads Reporting & Operations Dashboard, mục đích sử dụng Google Ads API, dữ liệu xử lý và cam kết bảo mật.",
    identityTitle: "Thông tin đơn vị vận hành",
    identityItems: [
      { label: "Pháp nhân", value: companyProfile.displayNameVi },
      { label: "Tên thương mại", value: companyProfile.brandName },
      { label: "Website", value: companyProfile.domain },
      { label: "API contact email", value: companyProfile.apiContactEmail },
      { label: "Địa chỉ", value: companyProfile.addressVi },
    ],
    purposeTitle: "Mục đích sử dụng API",
    purposeBody:
      "Dashboard chỉ phục vụ hoạt động quản lý, báo cáo và tối ưu chiến dịch Google Ads cho các khách hàng đã có thỏa thuận dịch vụ với Lumina Media Agency. Công cụ không phải nền tảng tự phục vụ công khai, không cho thuê, bán lại hoặc chuyển nhượng tài khoản Google Ads.",
    featureTitle: "Các chức năng sử dụng Google Ads API",
    features: [
      {
        title: "Báo cáo hiệu quả chiến dịch",
        body: "Đọc dữ liệu campaign, ad group, keyword, cost, conversion, CPA, ROAS và các chỉ số hiệu quả bằng GoogleAdsService.Search/SearchStream.",
      },
      {
        title: "Theo dõi ngân sách và cảnh báo vận hành",
        body: "Tổng hợp chi tiêu, trạng thái chiến dịch và biến động hiệu suất để đội ngũ nội bộ kiểm tra hằng ngày.",
      },
      {
        title: "Tối ưu chiến dịch được ủy quyền",
        body: "Hỗ trợ phân tích dữ liệu phục vụ điều chỉnh campaign, ad group, keyword, ngân sách và nội dung quảng cáo khi khách hàng cho phép.",
      },
      {
        title: "Báo cáo khách hàng",
        body: "Xuất báo cáo định kỳ cho các tài khoản quảng cáo đã được liên kết hợp lệ với MCC của Lumina Media Agency.",
      },
    ],
    governanceTitle: "Quản trị dữ liệu và bảo mật",
    governance: [
      "Chỉ truy cập dữ liệu Google Ads của tài khoản đã ủy quyền hoặc đã liên kết hợp lệ với MCC của công ty.",
      "Không bán, chia sẻ hoặc sử dụng dữ liệu Google Ads cho bên thứ ba không liên quan.",
      "Developer token, OAuth client secret và refresh token được lưu như thông tin bí mật, giới hạn quyền truy cập nội bộ.",
      "Khi khách hàng chấm dứt dịch vụ, Lumina Media Agency sẽ ngừng truy cập tài khoản liên quan và xử lý dữ liệu theo chính sách bảo mật.",
    ],
    reviewTitle: "Thông tin dành cho Google Ads API review",
    reviewItems: [
      "Use case chính: reporting và campaign operations cho tài khoản production đã được ủy quyền.",
      "Người dùng công cụ: nhân sự nội bộ Lumina Media Agency, không mở đăng ký tự do cho người ngoài.",
      "Email API cần được theo dõi thường xuyên để Google có thể liên hệ khi review hồ sơ.",
    ],
    privacyLabel: "Chính sách bảo mật",
    termsLabel: "Điều khoản dịch vụ",
    contactLabel: "Liên hệ",
  },
  en: {
    title: "Lumina Google Ads Reporting & Operations Dashboard",
    eyebrow: "Google Ads API client",
    description:
      "An internal tool operated by Lumina Media Agency to retrieve data, prepare reports, and support optimization for Google Ads accounts authorized by clients under the company's manager account.",
    metaDescription:
      "Overview of Lumina Google Ads Reporting & Operations Dashboard, Google Ads API use case, processed data, and data protection commitments.",
    identityTitle: "Operating entity",
    identityItems: [
      { label: "Legal entity", value: companyProfile.legalNameEn },
      { label: "Business name", value: companyProfile.brandName },
      { label: "Website", value: companyProfile.domain },
      { label: "API contact email", value: companyProfile.apiContactEmail },
      { label: "Address", value: companyProfile.addressEn },
    ],
    purposeTitle: "API usage purpose",
    purposeBody:
      "The dashboard is used only for management, reporting, and optimization of Google Ads campaigns for clients that have a service agreement with Lumina Media Agency. It is not a public self-service platform and is not used to rent, resell, or transfer Google Ads accounts.",
    featureTitle: "Google Ads API functionality",
    features: [
      {
        title: "Campaign performance reporting",
        body: "Retrieves campaign, ad group, keyword, cost, conversion, CPA, ROAS, and performance metrics using GoogleAdsService.Search/SearchStream.",
      },
      {
        title: "Budget monitoring and operations alerts",
        body: "Aggregates spend, campaign status, and performance changes for internal daily review.",
      },
      {
        title: "Authorized campaign optimization",
        body: "Supports data analysis for campaign, ad group, keyword, budget, and ad content updates when authorized by the client.",
      },
      {
        title: "Client reporting",
        body: "Exports scheduled reports for advertising accounts that are validly linked to Lumina Media Agency's manager account.",
      },
    ],
    governanceTitle: "Data governance and security",
    governance: [
      "Access is limited to Google Ads data from accounts that are authorized or validly linked to the company's manager account.",
      "Google Ads data is not sold, shared, or used for unrelated third parties.",
      "Developer tokens, OAuth client secrets, and refresh tokens are treated as secrets with restricted internal access.",
      "When a client ends the service, Lumina Media Agency stops accessing the related account and handles retained data according to its privacy policy.",
    ],
    reviewTitle: "Information for Google Ads API review",
    reviewItems: [
      "Primary use case: reporting and campaign operations for authorized production accounts.",
      "Tool users: Lumina Media Agency employees only; public self-service sign-up is not available.",
      "The API contact email must be monitored regularly so Google can reach the team during review.",
    ],
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
    contactLabel: "Contact",
  },
};

function getCopy(locale: string): Copy {
  return copies[locale === "en" ? "en" : "vi"];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || companyProfile.domain;

  return {
    title: `${copy.title} - ${companyProfile.brandName}`,
    description: copy.metaDescription,
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/google-ads-api-tool`,
        en: `${baseUrl}/en/google-ads-api-tool`,
      },
    },
  };
}

export default async function GoogleAdsApiToolPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "vi";
  const copy = getCopy(currentLocale);

  return (
    <div className="w-full bg-black text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-semibold uppercase text-[#AF7E2D]">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-[880px] text-[38px] font-semibold leading-tight md:text-[58px]">
              {copy.title}
            </h1>
            <p className="max-w-[760px] text-[18px] font-light leading-[1.75] text-white/78">
              {copy.description}
            </p>
          </div>

          <div className="rounded-[8px] border border-white/12 bg-white/[0.04] p-6">
            <h2 className="mb-6 text-[24px] font-semibold">{copy.identityTitle}</h2>
            <dl className="flex flex-col gap-4">
              {copy.identityItems.map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4">
                  <dt className="text-sm font-semibold uppercase text-white/50">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[16px] leading-relaxed text-white">
                    {item.label === "API contact email" ? (
                      <a className="text-[#D9A84F] hover:text-white" href={`mailto:${item.value}`}>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9EF] text-black">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-12 px-5 py-16 md:py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="text-[32px] font-semibold leading-tight md:text-[46px]">
              {copy.purposeTitle}
            </h2>
            <p className="text-[18px] font-light leading-[1.8] text-black/75">
              {copy.purposeBody}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[30px] font-semibold md:text-[42px]">{copy.featureTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.features.map((feature) => (
                <article key={feature.title} className="rounded-[8px] border border-black/12 bg-white p-6">
                  <h3 className="text-[22px] font-semibold">{feature.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.75] text-black/70">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-[30px] font-semibold leading-tight md:text-[42px]">
              {copy.governanceTitle}
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {copy.governance.map((item) => (
                <p key={item} className="border-t border-white/10 pt-4 text-[17px] leading-[1.75] text-white/76">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-[#AF7E2D]/40 bg-[#AF7E2D]/10 p-6">
            <h2 className="text-[28px] font-semibold leading-tight">{copy.reviewTitle}</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {copy.reviewItems.map((item) => (
                <li key={item} className="border-t border-white/10 pt-4 text-[17px] leading-[1.7] text-white/82">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${currentLocale}/privacy-policy`}
                className="rounded-[8px] bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#F1DEBD]"
              >
                {copy.privacyLabel}
              </Link>
              <Link
                href={`/${currentLocale}/terms-of-service`}
                className="rounded-[8px] border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {copy.termsLabel}
              </Link>
              <Link
                href={`/${currentLocale}/contact`}
                className="rounded-[8px] border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {copy.contactLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
