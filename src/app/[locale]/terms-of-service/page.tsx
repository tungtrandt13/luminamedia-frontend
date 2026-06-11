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
  privacyLabel: string;
};

const copies: Record<Locale, Copy> = {
  vi: {
    title: "Điều khoản dịch vụ",
    description:
      "Các điều khoản này áp dụng cho dịch vụ tư vấn, triển khai quảng cáo, thương mại điện tử và các công cụ báo cáo nội bộ do Lumina Media Agency vận hành.",
    metaDescription:
      "Điều khoản dịch vụ của Lumina Media Agency cho hoạt động quảng cáo, thương mại điện tử và công cụ Google Ads API nội bộ.",
    updatedLabel: "Cập nhật lần cuối: 11/06/2026",
    sections: [
      {
        title: "Đơn vị cung cấp dịch vụ",
        body: [
          `${companyProfile.displayNameVi} vận hành website ${companyProfile.domain} và cung cấp các dịch vụ truyền thông, quảng cáo, thương mại điện tử theo thỏa thuận với khách hàng.`,
          `Thông tin liên hệ chính thức: ${companyProfile.apiContactEmail}; địa chỉ: ${companyProfile.addressVi}; số điện thoại: ${companyProfile.phone}.`,
        ],
      },
      {
        title: "Phạm vi dịch vụ",
        body: [
          "Lumina Media Agency cung cấp tư vấn chiến lược, triển khai chiến dịch quảng cáo, báo cáo hiệu quả, tối ưu landing page và hỗ trợ vận hành thương mại điện tử.",
          "Các phạm vi công việc, ngân sách, KPI, quyền truy cập tài khoản và trách nhiệm của mỗi bên sẽ được xác nhận trong báo giá, hợp đồng hoặc phụ lục dịch vụ riêng.",
        ],
      },
      {
        title: "Google Ads API và tài khoản quảng cáo",
        body: [
          "Công cụ Lumina Google Ads Reporting & Operations Dashboard chỉ được sử dụng cho tài khoản Google Ads đã được khách hàng ủy quyền hoặc liên kết hợp lệ với MCC của Lumina Media Agency.",
          "Lumina Media Agency không bán, cho thuê, chuyển nhượng tài khoản Google Ads hoặc quyền truy cập Google Ads API cho bên thứ ba.",
          "Khách hàng chịu trách nhiệm đảm bảo sản phẩm, website, nội dung quảng cáo và phương thức thanh toán tuân thủ chính sách Google Ads và pháp luật áp dụng.",
        ],
      },
      {
        title: "Trách nhiệm của khách hàng",
        body: [
          "Cung cấp thông tin chính xác, đầy đủ và cập nhật về doanh nghiệp, sản phẩm, website, mục tiêu quảng cáo, ngân sách và quyền truy cập cần thiết.",
          "Không yêu cầu Lumina Media Agency triển khai nội dung gây hiểu nhầm, vi phạm chính sách nền tảng, vi phạm quyền sở hữu trí tuệ hoặc pháp luật.",
          "Phối hợp kịp thời khi cần xác minh doanh nghiệp, xác minh nhà quảng cáo, phê duyệt nội dung hoặc xử lý cảnh báo từ nền tảng.",
        ],
      },
      {
        title: "Dữ liệu và bảo mật",
        body: [
          "Việc xử lý dữ liệu cá nhân, dữ liệu website và dữ liệu Google Ads được thực hiện theo Chính sách bảo mật của Lumina Media Agency.",
          "Khách hàng cần quản lý quyền truy cập tài khoản của mình và thông báo ngay cho Lumina Media Agency nếu phát hiện rủi ro bảo mật hoặc truy cập không hợp lệ.",
        ],
      },
      {
        title: "Giới hạn trách nhiệm",
        body: [
          "Lumina Media Agency nỗ lực triển khai dịch vụ chuyên nghiệp, minh bạch và dựa trên dữ liệu, nhưng không cam kết chắc chắn về doanh thu, lợi nhuận, tỷ lệ phê duyệt quảng cáo hoặc kết quả kinh doanh cụ thể.",
          "Hiệu quả quảng cáo có thể bị ảnh hưởng bởi sản phẩm, thị trường, ngân sách, website, chính sách nền tảng, cạnh tranh và các yếu tố ngoài phạm vi kiểm soát trực tiếp của Lumina Media Agency.",
        ],
      },
      {
        title: "Thay đổi điều khoản",
        body: [
          "Lumina Media Agency có thể cập nhật các điều khoản này khi dịch vụ, quy trình vận hành hoặc yêu cầu tuân thủ thay đổi.",
          "Phiên bản mới sẽ có hiệu lực khi được công bố trên website, trừ khi hợp đồng riêng với khách hàng quy định khác.",
        ],
      },
    ],
    contactTitle: "Liên hệ",
    contactBody:
      "Nếu bạn có câu hỏi về điều khoản dịch vụ hoặc quyền truy cập Google Ads API, vui lòng liên hệ email chính thức của công ty.",
    privacyLabel: "Chính sách bảo mật",
  },
  en: {
    title: "Terms of Service",
    description:
      "These terms apply to consulting, advertising, e-commerce services, and internal reporting tools operated by Lumina Media Agency.",
    metaDescription:
      "Lumina Media Agency terms of service for advertising, e-commerce operations, and the internal Google Ads API tool.",
    updatedLabel: "Last updated: June 11, 2026",
    sections: [
      {
        title: "Service provider",
        body: [
          `${companyProfile.legalNameEn} operates ${companyProfile.domain} and provides media, advertising, and e-commerce services under agreements with customers.`,
          `Official contact: ${companyProfile.apiContactEmail}; address: ${companyProfile.addressEn}; phone: ${companyProfile.phone}.`,
        ],
      },
      {
        title: "Service scope",
        body: [
          "Lumina Media Agency provides strategy consulting, advertising campaign operations, performance reporting, landing page optimization, and e-commerce operations support.",
          "Scope of work, budgets, KPIs, account access, and each party's responsibilities are confirmed in separate quotations, contracts, or service appendices.",
        ],
      },
      {
        title: "Google Ads API and advertising accounts",
        body: [
          "Lumina Google Ads Reporting & Operations Dashboard is used only for Google Ads accounts that are authorized by customers or validly linked to Lumina Media Agency's manager account.",
          "Lumina Media Agency does not sell, rent, transfer, or resell Google Ads accounts or Google Ads API access to third parties.",
          "Customers are responsible for ensuring that their products, websites, ad content, and payment methods comply with Google Ads policies and applicable law.",
        ],
      },
      {
        title: "Customer responsibilities",
        body: [
          "Provide accurate, complete, and updated information about the business, products, website, advertising objectives, budgets, and required access permissions.",
          "Do not request Lumina Media Agency to run misleading content, violate platform policies, infringe intellectual property rights, or breach applicable law.",
          "Cooperate promptly when business verification, advertiser verification, content approval, or platform warning remediation is required.",
        ],
      },
      {
        title: "Data and security",
        body: [
          "Personal data, website data, and Google Ads data are handled according to Lumina Media Agency's Privacy Policy.",
          "Customers should manage access permissions to their own accounts and notify Lumina Media Agency immediately if they detect a security risk or unauthorized access.",
        ],
      },
      {
        title: "Limitation of responsibility",
        body: [
          "Lumina Media Agency aims to provide professional, transparent, data-informed services, but does not guarantee specific revenue, profit, ad approval rates, or business outcomes.",
          "Advertising performance may be affected by product quality, market conditions, budget, website experience, platform policies, competition, and factors outside Lumina Media Agency's direct control.",
        ],
      },
      {
        title: "Changes to these terms",
        body: [
          "Lumina Media Agency may update these terms when services, operating processes, or compliance requirements change.",
          "The updated version becomes effective when published on the website unless a separate customer contract states otherwise.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "For questions about these terms or Google Ads API access, contact the company's official email address.",
    privacyLabel: "Privacy Policy",
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
        vi: `${baseUrl}/vi/terms-of-service`,
        en: `${baseUrl}/en/terms-of-service`,
      },
    },
  };
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "vi";
  const copy = getCopy(currentLocale);

  return (
    <div className="w-full bg-[#FFF9EF] text-black">
      <section className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 py-16 md:py-24">
        <div className="max-w-[860px]">
          <p className="text-sm font-semibold uppercase text-[#8A611F]">{copy.updatedLabel}</p>
          <h1 className="mt-5 text-[38px] font-semibold leading-tight md:text-[58px]">{copy.title}</h1>
          <p className="mt-6 text-[18px] font-light leading-[1.8] text-black/72">{copy.description}</p>
        </div>

        <div className="grid gap-5">
          {copy.sections.map((section) => (
            <section key={section.title} className="rounded-[8px] border border-black/10 bg-white p-6">
              <h2 className="text-[25px] font-semibold leading-tight">{section.title}</h2>
              <div className="mt-5 flex flex-col gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-[1.8] text-black/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-[8px] border border-black/10 bg-black p-6 text-white">
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
              href={`/${currentLocale}/privacy-policy`}
              className="rounded-[8px] border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {copy.privacyLabel}
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
