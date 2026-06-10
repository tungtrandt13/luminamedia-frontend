export type ComplianceLocale = "vi" | "en";

export type ComplianceSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CompliancePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  updatedLabel: string;
  sections: ComplianceSection[];
  cta?: {
    label: string;
    href: string;
  };
};

export const companyIdentity = {
  name: "Lumina Media Agency Trading & Service Co., Ltd",
  director: "RATBUHOM CHUTAMAT",
  address: "RM 1006, 10/F., PO YIP BLDG 23 HING YIP STREET, KWUN TONG - HONGKONG",
  email: "support@luminamedia.me",
  phone: "(+84) 356 107 047",
};

export const privacyContent: Record<ComplianceLocale, CompliancePageContent> = {
  vi: {
    metaTitle: "Chính sách bảo mật - Lumina Media Agency",
    metaDescription:
      "Chính sách bảo mật của Lumina Media Agency về dữ liệu liên hệ, dữ liệu dịch vụ quảng cáo và dữ liệu Google Ads khi khách hàng cấp quyền.",
    eyebrow: "Privacy Policy",
    title: "Chính sách bảo mật",
    description:
      "Trang này giải thích cách Lumina Media Agency thu thập, sử dụng và bảo vệ thông tin khi khách hàng liên hệ, sử dụng dịch vụ quảng cáo hoặc cấp quyền truy cập dữ liệu Google Ads.",
    updatedLabel: "Cập nhật: Tháng 6/2026",
    sections: [
      {
        title: "Đơn vị phụ trách",
        paragraphs: [
          `${companyIdentity.name} là đơn vị cung cấp dịch vụ quảng cáo, truyền thông số và vận hành chiến dịch cho khách hàng doanh nghiệp.`,
          `Director: ${companyIdentity.director}. Địa chỉ: ${companyIdentity.address}. Email liên hệ: ${companyIdentity.email}. Điện thoại: ${companyIdentity.phone}.`,
        ],
      },
      {
        title: "Thông tin chúng tôi thu thập",
        bullets: [
          "Thông tin khách hàng gửi qua form liên hệ, bao gồm tên, email, số điện thoại, website và nội dung yêu cầu.",
          "Thông tin về nhu cầu dịch vụ, ngân sách dự kiến, kênh quảng cáo quan tâm và lịch sử tư vấn nếu khách hàng cung cấp.",
          "Dữ liệu Google Ads chỉ được truy cập khi khách hàng hoặc người quản trị tài khoản cấp quyền hợp lệ.",
        ],
      },
      {
        title: "Cách chúng tôi sử dụng dữ liệu Google Ads",
        paragraphs: [
          "Khi khách hàng cấp quyền, dữ liệu Google Ads được sử dụng để lập báo cáo, phân tích hiệu quả chiến dịch, theo dõi ngân sách, nhấp chuột, chuyển đổi và trạng thái chiến dịch.",
          "Dữ liệu này chỉ phục vụ việc vận hành, tối ưu và báo cáo trong phạm vi dịch vụ đã được khách hàng đồng ý.",
        ],
      },
      {
        title: "Chia sẻ dữ liệu",
        bullets: [
          "Chúng tôi không bán, cho thuê, trao đổi hoặc resell dữ liệu Google Ads cho bên thứ ba.",
          "Chúng tôi không sử dụng dữ liệu Google Ads để xây dựng sản phẩm dữ liệu riêng biệt ngoài phạm vi dịch vụ đã thỏa thuận.",
          "Nhân sự nội bộ chỉ được truy cập dữ liệu khi cần thiết để thực hiện dịch vụ cho khách hàng.",
        ],
      },
      {
        title: "Liên hệ về quyền riêng tư",
        paragraphs: [
          `Mọi yêu cầu về truy cập, cập nhật hoặc xóa thông tin có thể gửi về ${companyIdentity.email}.`,
        ],
      },
    ],
  },
  en: {
    metaTitle: "Privacy Policy - Lumina Media Agency",
    metaDescription:
      "Lumina Media Agency privacy policy for contact data, advertising service data, and Google Ads data accessed with customer authorization.",
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "This page explains how Lumina Media Agency collects, uses, and protects information when customers contact us, use advertising services, or authorize access to Google Ads data.",
    updatedLabel: "Updated: June 2026",
    sections: [
      {
        title: "Responsible business",
        paragraphs: [
          `${companyIdentity.name} provides advertising, digital media, and campaign operations services for business customers.`,
          `Director: ${companyIdentity.director}. Address: ${companyIdentity.address}. Contact email: ${companyIdentity.email}. Phone: ${companyIdentity.phone}.`,
        ],
      },
      {
        title: "Information we collect",
        bullets: [
          "Information submitted through contact forms, including name, email, phone number, website, and service request details.",
          "Service requirements, expected budget, advertising channels of interest, and consultation history when provided by the customer.",
          "Google Ads data only when a customer or account administrator grants valid authorization.",
        ],
      },
      {
        title: "How we use Google Ads data",
        paragraphs: [
          "When customers authorize access, Google Ads data is used to prepare reports, analyze campaign performance, monitor budget, clicks, conversions, and campaign status.",
          "This data is used only for campaign operations, optimization, and reporting within the scope of services agreed with the customer.",
        ],
      },
      {
        title: "Data sharing",
        bullets: [
          "We do not sell, rent, exchange, or resell Google Ads data to third parties.",
          "We do not use Google Ads data to build separate data products outside the agreed service scope.",
          "Internal staff may access customer data only when required to provide the contracted service.",
        ],
      },
      {
        title: "Privacy contact",
        paragraphs: [
          `Requests to access, update, or delete information can be sent to ${companyIdentity.email}.`,
        ],
      },
    ],
  },
};

export const termsContent: Record<ComplianceLocale, CompliancePageContent> = {
  vi: {
    metaTitle: "Điều khoản dịch vụ - Lumina Media Agency",
    metaDescription:
      "Điều khoản sử dụng website và dịch vụ quảng cáo của Lumina Media Agency.",
    eyebrow: "Terms of Service",
    title: "Điều khoản dịch vụ",
    description:
      "Các điều khoản này áp dụng cho việc sử dụng website và các dịch vụ tư vấn, triển khai, vận hành quảng cáo của Lumina Media Agency.",
    updatedLabel: "Cập nhật: Tháng 6/2026",
    sections: [
      {
        title: "Phạm vi dịch vụ",
        paragraphs: [
          "Lumina Media Agency cung cấp dịch vụ tư vấn, thiết lập, vận hành và báo cáo hiệu quả các chiến dịch quảng cáo số, bao gồm Google Ads khi khách hàng có nhu cầu.",
        ],
      },
      {
        title: "Thông tin khách hàng",
        bullets: [
          "Khách hàng chịu trách nhiệm cung cấp thông tin chính xác về doanh nghiệp, website, sản phẩm, ngân sách và tài khoản quảng cáo.",
          "Khách hàng cần bảo đảm có quyền hợp lệ khi cấp quyền truy cập vào tài khoản Google Ads hoặc Google Ads Manager Account.",
        ],
      },
      {
        title: "Sử dụng dữ liệu quảng cáo",
        paragraphs: [
          "Dữ liệu quảng cáo được sử dụng để thực hiện dịch vụ đã thỏa thuận, bao gồm báo cáo, phân tích, theo dõi ngân sách và tối ưu hiệu quả chiến dịch.",
          "Chúng tôi không bán hoặc chia sẻ dữ liệu Google Ads cho bên thứ ba ngoài phạm vi thực hiện dịch vụ cho khách hàng.",
        ],
      },
      {
        title: "Giới hạn cam kết",
        paragraphs: [
          "Kết quả quảng cáo phụ thuộc vào ngân sách, thị trường, sản phẩm, landing page, tài khoản quảng cáo và chính sách của từng nền tảng. Lumina Media Agency không cam kết một kết quả tuyệt đối nếu không được ghi rõ trong thỏa thuận dịch vụ.",
        ],
      },
      {
        title: "Thông tin liên hệ",
        paragraphs: [
          `${companyIdentity.name}. Director: ${companyIdentity.director}. Address: ${companyIdentity.address}. Email: ${companyIdentity.email}. Phone: ${companyIdentity.phone}.`,
        ],
      },
    ],
  },
  en: {
    metaTitle: "Terms of Service - Lumina Media Agency",
    metaDescription:
      "Terms for using Lumina Media Agency website and advertising services.",
    eyebrow: "Terms of Service",
    title: "Terms of Service",
    description:
      "These terms apply to the use of this website and Lumina Media Agency consulting, advertising setup, campaign operations, and reporting services.",
    updatedLabel: "Updated: June 2026",
    sections: [
      {
        title: "Service scope",
        paragraphs: [
          "Lumina Media Agency provides consulting, setup, campaign operations, and performance reporting for digital advertising campaigns, including Google Ads when requested by customers.",
        ],
      },
      {
        title: "Customer information",
        bullets: [
          "Customers are responsible for providing accurate business, website, product, budget, and advertising account information.",
          "Customers must ensure they have proper authority when granting access to Google Ads accounts or Google Ads Manager Accounts.",
        ],
      },
      {
        title: "Use of advertising data",
        paragraphs: [
          "Advertising data is used to provide the agreed services, including reporting, analysis, budget monitoring, and campaign optimization.",
          "We do not sell or share Google Ads data with third parties outside the scope of delivering services to the customer.",
        ],
      },
      {
        title: "Performance limitations",
        paragraphs: [
          "Advertising results depend on budget, market conditions, products, landing pages, advertising accounts, and platform policies. Lumina Media Agency does not guarantee absolute results unless expressly stated in a service agreement.",
        ],
      },
      {
        title: "Contact information",
        paragraphs: [
          `${companyIdentity.name}. Director: ${companyIdentity.director}. Address: ${companyIdentity.address}. Email: ${companyIdentity.email}. Phone: ${companyIdentity.phone}.`,
        ],
      },
    ],
  },
};

export const googleAdsApiContent: Record<ComplianceLocale, CompliancePageContent> = {
  vi: {
    metaTitle: "Google Ads API Usage - Lumina Media Agency",
    metaDescription:
      "Mô tả cách Lumina Media Agency sử dụng Google Ads API và Google Ads Manager Account để báo cáo và vận hành chiến dịch.",
    eyebrow: "Google Ads API Usage",
    title: "Google Ads API và MCC Reporting",
    description:
      "Lumina Media Agency sử dụng Google Ads API cho dashboard vận hành nội bộ, kết nối với Google Ads Manager Account để hỗ trợ báo cáo và tối ưu chiến dịch cho khách hàng được quản lý hợp lệ.",
    updatedLabel: "Cập nhật: Tháng 6/2026",
    cta: {
      label: "Liên hệ tư vấn Google Ads",
      href: "/services/google-ads#contact",
    },
    sections: [
      {
        title: "Mục đích sử dụng",
        paragraphs: [
          "Google Ads API được sử dụng cho hệ thống nội bộ của Lumina Media Agency nhằm hỗ trợ nhân sự được phân quyền theo dõi và báo cáo hiệu quả quảng cáo.",
          "Công cụ kết nối với Google Ads Manager Account (MCC) của công ty để truy xuất các tài khoản khách hàng đã được cấp quyền hợp lệ.",
        ],
      },
      {
        title: "Dữ liệu được truy xuất",
        bullets: [
          "Danh sách client accounts và account hierarchy trong Manager Account.",
          "Trạng thái campaign, ad group, keyword và các thành phần liên quan đến vận hành chiến dịch.",
          "Chỉ số báo cáo như spend, impressions, clicks, conversions, CTR, CPC và CPA.",
        ],
      },
      {
        title: "Người dùng công cụ",
        paragraphs: [
          "Công cụ chỉ phục vụ nhân sự nội bộ được phân quyền của Lumina Media Agency. Khách hàng có thể yêu cầu báo cáo hoặc tư vấn dựa trên dữ liệu chiến dịch của tài khoản đã cấp quyền.",
        ],
      },
      {
        title: "Giới hạn sử dụng dữ liệu",
        bullets: [
          "Dữ liệu Google Ads không được bán, resell hoặc chia sẻ cho bên thứ ba.",
          "Dữ liệu chỉ được dùng để vận hành, theo dõi, báo cáo và tối ưu chiến dịch trong phạm vi dịch vụ đã thỏa thuận.",
          "Mọi truy cập API phải tuân thủ chính sách Google Ads API và quyền truy cập của tài khoản khách hàng.",
        ],
      },
    ],
  },
  en: {
    metaTitle: "Google Ads API Usage - Lumina Media Agency",
    metaDescription:
      "How Lumina Media Agency uses the Google Ads API and Google Ads Manager Account for reporting and campaign operations.",
    eyebrow: "Google Ads API Usage",
    title: "Google Ads API and MCC Reporting",
    description:
      "Lumina Media Agency uses the Google Ads API for an internal operations dashboard connected to our Google Ads Manager Account to support authorized campaign reporting and optimization for managed customers.",
    updatedLabel: "Updated: June 2026",
    cta: {
      label: "Contact Google Ads consulting",
      href: "/services/google-ads#contact",
    },
    sections: [
      {
        title: "Purpose of use",
        paragraphs: [
          "The Google Ads API is used by Lumina Media Agency's internal system to help authorized staff monitor and report advertising performance.",
          "The tool connects to the company's Google Ads Manager Account (MCC) to retrieve customer accounts that have been validly authorized.",
        ],
      },
      {
        title: "Data accessed",
        bullets: [
          "Client accounts and account hierarchy under the Manager Account.",
          "Campaign, ad group, keyword, and related operational status.",
          "Reporting metrics such as spend, impressions, clicks, conversions, CTR, CPC, and CPA.",
        ],
      },
      {
        title: "Tool users",
        paragraphs: [
          "The tool is used only by authorized internal staff of Lumina Media Agency. Customers may request reporting or consultation based on campaign data from accounts they have authorized.",
        ],
      },
      {
        title: "Data use limits",
        bullets: [
          "Google Ads data is not sold, resold, or shared with third parties.",
          "Data is used only for campaign operations, monitoring, reporting, and optimization within the agreed service scope.",
          "All API access must comply with Google Ads API policies and the customer's account permissions.",
        ],
      },
    ],
  },
};

export function resolveComplianceLocale(locale: string): ComplianceLocale {
  return locale === "en" ? "en" : "vi";
}
