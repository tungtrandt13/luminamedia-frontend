import { Metadata } from "next";
import Link from "next/link";

import { companyProfile } from "@/lib/company-profile";

type Locale = "vi" | "en";

type Props = {
  params: Promise<{ locale: string }>;
};

type Section = {
  title: string;
  body: string[];
};

type Copy = {
  title: string;
  description: string;
  metaDescription: string;
  updatedLabel: string;
  sections: Section[];
  contactTitle: string;
  contactBody: string;
  apiToolLabel: string;
};

const copies: Record<Locale, Copy> = {
  vi: {
    title: "Chính sách bảo mật",
    description:
      "Chính sách này mô tả cách Lumina Media Agency thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu khi cung cấp dịch vụ quảng cáo, thương mại điện tử và khi vận hành công cụ Google Ads API nội bộ.",
    metaDescription:
      "Chính sách bảo mật của Lumina Media Agency, bao gồm dữ liệu Google Ads, OAuth, thông tin khách hàng và cách liên hệ về quyền riêng tư.",
    updatedLabel: "Cập nhật lần cuối: 11/06/2026",
    sections: [
      {
        title: "Thông tin chúng tôi thu thập",
        body: [
          "Thông tin liên hệ do khách hàng gửi qua website như họ tên, email, số điện thoại, website, dịch vụ quan tâm và nội dung yêu cầu tư vấn.",
          "Thông tin phục vụ triển khai dịch vụ như mục tiêu kinh doanh, ngân sách truyền thông, website/landing page, ngành hàng và tài liệu khách hàng chủ động cung cấp.",
          "Dữ liệu Google Ads được khách hàng ủy quyền, bao gồm thông tin tài khoản quảng cáo, chiến dịch, nhóm quảng cáo, từ khóa, ngân sách, chi phí, chuyển đổi và chỉ số hiệu quả.",
        ],
      },
      {
        title: "Mục đích sử dụng dữ liệu",
        body: [
          "Liên hệ, tư vấn, báo giá và triển khai dịch vụ theo yêu cầu của khách hàng.",
          "Quản lý, báo cáo và tối ưu chiến dịch Google Ads cho các tài khoản đã được khách hàng ủy quyền hoặc liên kết hợp lệ với MCC của Lumina Media Agency.",
          "Cải thiện chất lượng dịch vụ, xử lý sự cố vận hành và đáp ứng các yêu cầu tuân thủ từ nền tảng quảng cáo liên quan.",
        ],
      },
      {
        title: "Google Ads API và OAuth",
        body: [
          "Lumina Media Agency chỉ truy cập dữ liệu Google Ads khi khách hàng hoặc tài khoản được ủy quyền đã cấp quyền hợp lệ.",
          "Developer token, OAuth client secret, refresh token và các thông tin xác thực khác được xem là bí mật, giới hạn quyền truy cập nội bộ và không công khai trên website hoặc trong mã nguồn phía client.",
          "Dữ liệu lấy từ Google Ads API không được bán, cho thuê, chuyển nhượng hoặc sử dụng cho bên thứ ba không liên quan.",
        ],
      },
      {
        title: "Lưu trữ và bảo vệ dữ liệu",
        body: [
          "Chúng tôi áp dụng biện pháp kiểm soát truy cập, phân quyền nội bộ và quy trình vận hành phù hợp để giảm rủi ro mất mát, truy cập trái phép hoặc sử dụng sai mục đích.",
          "Dữ liệu được lưu giữ trong thời gian cần thiết để cung cấp dịch vụ, đáp ứng nghĩa vụ pháp lý, kế toán hoặc giải quyết tranh chấp liên quan.",
          "Khi khách hàng ngừng sử dụng dịch vụ, Lumina Media Agency sẽ dừng truy cập tài khoản liên quan và xử lý dữ liệu còn lưu theo thỏa thuận dịch vụ hoặc yêu cầu hợp lệ của khách hàng.",
        ],
      },
      {
        title: "Chia sẻ dữ liệu",
        body: [
          "Chúng tôi không bán dữ liệu cá nhân hoặc dữ liệu Google Ads của khách hàng.",
          "Dữ liệu có thể được chia sẻ với nhà cung cấp hạ tầng, email, lưu trữ hoặc công cụ vận hành cần thiết để cung cấp dịch vụ, với phạm vi giới hạn theo mục đích xử lý.",
          "Chúng tôi có thể tiết lộ thông tin khi được yêu cầu bởi pháp luật, cơ quan có thẩm quyền hoặc để bảo vệ quyền và lợi ích hợp pháp của Lumina Media Agency và khách hàng.",
        ],
      },
      {
        title: "Quyền của khách hàng",
        body: [
          "Khách hàng có thể yêu cầu truy cập, chỉnh sửa, cập nhật hoặc xóa thông tin cá nhân trong phạm vi pháp luật cho phép.",
          "Khách hàng có thể thu hồi quyền truy cập Google Ads bằng cách hủy liên kết tài khoản hoặc thông báo cho Lumina Media Agency để chúng tôi dừng xử lý dữ liệu liên quan.",
        ],
      },
    ],
    contactTitle: "Liên hệ về quyền riêng tư",
    contactBody:
      "Nếu bạn có câu hỏi về chính sách này hoặc việc xử lý dữ liệu Google Ads, vui lòng liên hệ qua email API chính thức của công ty.",
    apiToolLabel: "Xem mô tả Google Ads API Tool",
  },
  en: {
    title: "Privacy Policy",
    description:
      "This policy explains how Lumina Media Agency collects, uses, stores, and protects data when providing advertising, e-commerce services, and operating its internal Google Ads API tool.",
    metaDescription:
      "Lumina Media Agency privacy policy covering Google Ads data, OAuth, customer information, and privacy contact details.",
    updatedLabel: "Last updated: June 11, 2026",
    sections: [
      {
        title: "Information we collect",
        body: [
          "Contact information submitted through the website, such as full name, email, phone number, website, service interest, and consultation request details.",
          "Service delivery information such as business objectives, media budget, website or landing page, industry, and documents voluntarily provided by customers.",
          "Authorized Google Ads data, including ad account information, campaigns, ad groups, keywords, budgets, costs, conversions, and performance metrics.",
        ],
      },
      {
        title: "How we use data",
        body: [
          "To contact, consult, quote, and provide services requested by customers.",
          "To manage, report on, and optimize Google Ads campaigns for accounts authorized by customers or validly linked to Lumina Media Agency's manager account.",
          "To improve service quality, resolve operational issues, and respond to compliance requests from related advertising platforms.",
        ],
      },
      {
        title: "Google Ads API and OAuth",
        body: [
          "Lumina Media Agency accesses Google Ads data only when the customer or authorized account has granted valid permission.",
          "Developer tokens, OAuth client secrets, refresh tokens, and other credentials are treated as secrets, restricted internally, and never exposed on the website or client-side code.",
          "Data retrieved from the Google Ads API is not sold, rented, transferred, or used for unrelated third parties.",
        ],
      },
      {
        title: "Data retention and protection",
        body: [
          "We apply access controls, internal permissioning, and operational processes designed to reduce the risk of loss, unauthorized access, or misuse.",
          "Data is retained only as long as needed to provide services, meet legal or accounting obligations, or resolve related disputes.",
          "When a customer ends the service, Lumina Media Agency stops accessing the related account and handles retained data according to the service agreement or valid customer request.",
        ],
      },
      {
        title: "Data sharing",
        body: [
          "We do not sell customer personal data or Google Ads data.",
          "Data may be shared with infrastructure, email, storage, or operations providers only where necessary to provide the service and within a limited processing scope.",
          "We may disclose information when required by law, competent authorities, or to protect the legal rights and interests of Lumina Media Agency and its customers.",
        ],
      },
      {
        title: "Customer rights",
        body: [
          "Customers may request access, correction, updates, or deletion of personal information where permitted by law.",
          "Customers may revoke Google Ads access by unlinking the account or notifying Lumina Media Agency so we can stop processing related data.",
        ],
      },
    ],
    contactTitle: "Privacy contact",
    contactBody:
      "For questions about this policy or our handling of Google Ads data, contact the company's official API email address.",
    apiToolLabel: "View Google Ads API Tool overview",
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
        vi: `${baseUrl}/vi/privacy-policy`,
        en: `${baseUrl}/en/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "vi";
  const copy = getCopy(currentLocale);

  return (
    <div className="w-full bg-black text-white">
      <section className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 py-16 md:py-24">
        <div className="max-w-[860px]">
          <p className="text-sm font-semibold uppercase text-[#AF7E2D]">{copy.updatedLabel}</p>
          <h1 className="mt-5 text-[38px] font-semibold leading-tight md:text-[58px]">{copy.title}</h1>
          <p className="mt-6 text-[18px] font-light leading-[1.8] text-white/76">{copy.description}</p>
        </div>

        <div className="grid gap-5">
          {copy.sections.map((section) => (
            <section key={section.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-[25px] font-semibold leading-tight">{section.title}</h2>
              <div className="mt-5 flex flex-col gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-[1.8] text-white/76">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-[8px] border border-[#AF7E2D]/40 bg-[#AF7E2D]/10 p-6">
          <h2 className="text-[25px] font-semibold">{copy.contactTitle}</h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-white/76">{copy.contactBody}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${companyProfile.apiContactEmail}`}
              className="rounded-[8px] bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#F1DEBD]"
            >
              {companyProfile.apiContactEmail}
            </a>
            <Link
              href={`/${currentLocale}/google-ads-api-tool`}
              className="rounded-[8px] border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {copy.apiToolLabel}
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
