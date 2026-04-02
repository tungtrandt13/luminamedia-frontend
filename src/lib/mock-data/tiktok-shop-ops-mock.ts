export interface TiktokShopOpsHero {
  title: string;
  description: string;
  cta_text: string;
  image: string;
}

export interface TiktokShopOpsAbout {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface TiktokShopOpsSolutionStep {
  id: number;
  step_number: string;
  title: string;
  bullets: string[];
}

export interface TiktokShopOpsSolution {
  title: string;
  description: string;
  steps: TiktokShopOpsSolutionStep[];
}

export interface TiktokShopOpsCaseMetric {
  label: string;
  value: string;
}

export interface TiktokShopOpsCaseStudy {
  id: number;
  country_code: string;
  title: string;
  description: string;
  image?: string;
  metric_primary: TiktokShopOpsCaseMetric;
  metric_secondary: TiktokShopOpsCaseMetric;
}

export interface TiktokShopOpsCaseStudies {
  title: string;
  description: string;
  items: TiktokShopOpsCaseStudy[];
}

export interface TiktokShopOpsContact {
  title: string;
  description: string;
  benefits: string[];
  cta_text: string;
  fields: {
    name: string;
    phone: string;
    tiktok_link: string;
    email: string;
    service_interest: string;
  };
}

export interface TiktokShopOpsPageData {
  hero: TiktokShopOpsHero;
  about: TiktokShopOpsAbout;
  solution: TiktokShopOpsSolution;
  case_studies: TiktokShopOpsCaseStudies;
  contact: TiktokShopOpsContact;
}

export const mockTiktokShopOpsPageData: Record<string, TiktokShopOpsPageData> = {
  vi: {
    hero: {
      title: "Dịch vụ Vận hành Gian hàng TikTok Shop",
      description:
        "VISSECOM đồng hành xây dựng gian hàng chuẩn TikTok, tối ưu từ nội dung, quảng cáo đến vận hành để tăng trưởng bền vững.",
      cta_text: "Đăng ký tư vấn miễn phí",
      image: "/images/services/tiktok-shop-ops-hero.png",
    },
    about: {
      title: "Về VISSCOM",
      paragraphs: [
        "VISSECOM là đối tác đồng hành của TikTok tại Việt Nam, chuyên tư vấn và triển khai các giải pháp quảng cáo & bán hàng trên hệ sinh thái TikTok.",
        "Với sự am hiểu sâu về TikTok Ads, TikTok Shop và các chính sách nền tảng, VISSECOM hỗ trợ doanh nghiệp xây dựng gian hàng chính thống, vận hành chiến dịch hiệu quả và mở rộng doanh thu bền vững trên TikTok.",
      ],
      images: [
        "/images/services/tiktok-shop-ops-about.png",
        "/images/services/tiktok-shop-ops-about.png",
        "/images/services/tiktok-shop-ops-about.png",
      ],
    },
    solution: {
      title: "Giải pháp thương mại vận hành Tiktok shop toàn diện cùng Visscom",
      description:
        "VISSECOM đồng hành cùng doanh nghiệp từ xây dựng nền tảng đến tăng trưởng doanh thu, giúp TikTok Shop vận hành hiệu quả, tối ưu chi phí và sẵn sàng scale.",
      steps: [
        {
          id: 1,
          step_number: "01",
          title: "Xây dựng gian hàng",
          bullets: [
            "Tư vấn định hướng gian hàng đúng chuẩn TikTok",
            "Hỗ trợ mở gian hàng & xử lý các yêu cầu từ nền tảng",
            "Chuẩn hoá cấu trúc gian hàng ngay từ đầu",
          ],
        },
        {
          id: 2,
          step_number: "02",
          title: "Tối ưu gian hàng",
          bullets: [
            "Tối ưu giao diện & bố cục theo từng giai đoạn",
            "Chuẩn hoá sản phẩm, nội dung theo thuật toán TikTok",
            "Nâng cao trải nghiệm & tỷ lệ chuyển đổi",
          ],
        },
        {
          id: 3,
          step_number: "03",
          title: "Lên kế hoạch Marketing",
          bullets: [
            "Xây dựng kế hoạch marketing theo tháng",
            "Triển khai livestream, affiliate, ưu đãi bán hàng",
            "Booking KOL/KOC phù hợp với ngành hàng",
          ],
        },
        {
          id: 4,
          step_number: "04",
          title: "Triển khai quảng cáo",
          bullets: [
            "Đánh giá & tối ưu hiệu suất quảng cáo liên tục",
            "Phân bổ ngân sách theo mục tiêu kinh doanh",
            "Báo cáo kết quả & đề xuất hướng tối ưu tiếp theo",
          ],
        },
        {
          id: 5,
          step_number: "05",
          title: "Chăm sóc khách hàng",
          bullets: [
            "Hỗ trợ phản hồi khách hàng nhanh chóng",
            "Giải đáp thắc mắc, xử lý đánh giá & phản hồi mua hàng",
            "Xây dựng hình ảnh thương hiệu chuyên nghiệp",
          ],
        },
        {
          id: 6,
          step_number: "06",
          title: "Thống kê & báo cáo",
          bullets: [
            "Báo cáo dữ liệu minh bạch, dễ theo dõi",
            "Theo dõi & điều chỉnh chiến dịch theo tuần/tháng",
            "Đánh giá hiệu quả & tối ưu linh hoạt theo mục tiêu",
          ],
        },
      ],
    },
    case_studies: {
      title: "Dự án đã triển khai",
      description:
        "VISSECOM đã đồng hành cùng 1.000+ doanh nghiệp và chủ shop trong quá trình xây dựng – vận hành – tăng trưởng TikTok Shop một cách bài bản và bền vững.",
      items: [
        {
          id: 1,
          country_code: "TH",
          title: "FMCG – THỊ TRƯỜNG THÁI LAN",
          description:
            "Tăng trưởng 180% doanh thu nhờ tối ưu E-commerce đa kênh",
          metric_primary: {
            label: "Doanh thu online",
            value: "180%",
          },
          metric_secondary: {
            label: "Lượng đơn hàng",
            value: "120%",
          },
        },
        {
          id: 2,
          country_code: "MY",
          title: "ĐỒ BẾP GIA DỤNG – MALAYSIA",
          description:
            "Mở rộng thị trường với chiến lược Digital Marketing & Marketplace",
          metric_primary: {
            label: "Traffic gian hàng",
            value: "150%",
          },
          metric_secondary: {
            label: "Tỷ lệ chuyển đổi",
            value: "95%",
          },
        },
        {
          id: 3,
          country_code: "JP",
          title: "FMCG – NHẬT BẢN",
          description:
            "Tăng trưởng 180% doanh thu nhờ tối ưu E-commerce đa kênh",
          metric_primary: {
            label: "Doanh thu online",
            value: "180%",
          },
          metric_secondary: {
            label: "Lượng đơn hàng",
            value: "120%",
          },
        },
      ],
    },
    contact: {
      title: "Đăng ký tư vấn miễn phí cùng VISSCOM",
      description:
        "Nhận tư vấn chiến lược vận hành & quảng cáo TikTok phù hợp với mô hình kinh doanh của bạn.",
      benefits: [
        "Định hướng triển khai TikTok Shop bài bản",
        "Tối ưu chi phí quảng cáo & ngân sách vận hành",
        "Giải pháp tăng trưởng GMV bền vững",
        "Đồng hành trực tiếp bởi đội ngũ chuyên gia TikTok",
      ],
      cta_text: "Đăng ký tư vấn miễn phí",
      fields: {
        name: "Họ và tên",
        phone: "Số điện thoại",
        tiktok_link: "Link kênh Tiktok (nếu có)",
        email: "Email",
        service_interest: "Sản phẩm dịch vụ bạn đang muốn quảng cáo là gì?",
      },
    },
  },
  en: {
    hero: {
      title: "TikTok Shop Store Operation Service",
      description:
        "VISSECOM helps you build a TikTok-standard store, optimizing from content and advertising to operations for sustainable growth.",
      cta_text: "Get a free consultation",
      image: "/images/services/tiktok-shop-ops-hero.png",
    },
    about: {
      title: "About VISSCOM",
      paragraphs: [
        "VISSECOM is a TikTok partner in Vietnam, specializing in consulting and implementing advertising and sales solutions on the TikTok ecosystem.",
        "With deep expertise in TikTok Ads, TikTok Shop and platform policies, VISSECOM supports businesses in building official stores, running effective campaigns and sustainably scaling revenue on TikTok.",
      ],
      images: [
        "/images/services/tiktok-shop-ops-about.png",
        "/images/services/tiktok-shop-ops-about.png",
        "/images/services/tiktok-shop-ops-about.png",
      ],
    },
    solution: {
      title: "End-to-end TikTok Shop commerce operations with Visscom",
      description:
        "VISSECOM accompanies businesses from building the foundation to growing revenue, helping TikTok Shops operate efficiently, optimize costs and be ready to scale.",
      steps: [
        {
          id: 1,
          step_number: "01",
          title: "Store setup",
          bullets: [
            "Consult on setting up a TikTok-compliant store",
            "Support store creation and handle platform requirements",
            "Standardize store structure from the beginning",
          ],
        },
        {
          id: 2,
          step_number: "02",
          title: "Store optimization",
          bullets: [
            "Optimize interface and layout by growth stage",
            "Standardize products and content for the TikTok algorithm",
            "Improve user experience and conversion rate",
          ],
        },
        {
          id: 3,
          step_number: "03",
          title: "Marketing planning",
          bullets: [
            "Build monthly marketing plans",
            "Run livestreams, affiliate campaigns and sales promotions",
            "Book KOLs/KOCs that fit your category",
          ],
        },
        {
          id: 4,
          step_number: "04",
          title: "Ads execution",
          bullets: [
            "Continuously monitor and optimize ad performance",
            "Allocate budget according to business objectives",
            "Report results and propose next optimization steps",
          ],
        },
        {
          id: 5,
          step_number: "05",
          title: "Customer care",
          bullets: [
            "Support fast responses to customers",
            "Handle questions, reviews and purchase feedback",
            "Build a professional brand image",
          ],
        },
        {
          id: 6,
          step_number: "06",
          title: "Analytics & reporting",
          bullets: [
            "Provide transparent, easy-to-read data reports",
            "Track and adjust campaigns weekly/monthly",
            "Evaluate effectiveness and flexibly optimize to goals",
          ],
        },
      ],
    },
    case_studies: {
      title: "Implemented projects",
      description:
        "VISSECOM has partnered with 1,000+ businesses and shop owners to build, operate and grow TikTok Shops in a structured and sustainable way.",
      items: [
        {
          id: 1,
          country_code: "TH",
          title: "FMCG – Thailand market",
          description:
            "180% revenue growth thanks to optimized multi-channel E-commerce",
          metric_primary: {
            label: "Online revenue",
            value: "180%",
          },
          metric_secondary: {
            label: "Order volume",
            value: "120%",
          },
        },
        {
          id: 2,
          country_code: "MY",
          title: "Home & kitchen appliances – Malaysia",
          description:
            "Market expansion with Digital Marketing and Marketplace strategy",
          metric_primary: {
            label: "Store traffic",
            value: "150%",
          },
          metric_secondary: {
            label: "Conversion rate",
            value: "95%",
          },
        },
        {
          id: 3,
          country_code: "JP",
          title: "FMCG – Japan",
          description:
            "180% revenue growth thanks to optimized multi-channel E-commerce",
          metric_primary: {
            label: "Online revenue",
            value: "180%",
          },
          metric_secondary: {
            label: "Order volume",
            value: "120%",
          },
        },
      ],
    },
    contact: {
      title: "Get a free consultation with VISSCOM",
      description:
        "Receive advice on TikTok operations and ad strategy tailored to your business model.",
      benefits: [
        "Structured TikTok Shop rollout guidance",
        "Optimized ad costs and operating budget",
        "Sustainable GMV growth solutions",
        "Hands-on support from TikTok experts at VISSECOM",
      ],
      cta_text: "Get a free consultation",
      fields: {
        name: "Full Name",
        phone: "Phone Number",
        tiktok_link: "TikTok channel link (if any)",
        email: "Email",
        service_interest: "What products/services do you want to advertise?",
      },
    },
  },
};
