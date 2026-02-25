import type { HomepageData } from "@/lib/strapi";

/**
 * Mock data cho trang Homepage, bám sát bản thiết kế Figma VISSCOM.
 * Dùng cho route `/[locale]/mock` để có thể chạy độc lập không cần Strapi.
 */
export const homepageMockData: Record<'vi' | 'en', HomepageData> = {
  vi: {
    hp_hero: {
      headline: "Khởi nguồn từ đam mê thương mại điện tử – VISS International vươn mình chinh phục thị trường toàn cầu",
      cta_text: "Liên hệ ngay",
      cta_url: "#contact",
      background: {
        data: {
          attributes: {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
          },
        },
      },
    },
    hp_journey: {
      title: "Hành trình từ năm 2020 vươn ra Thị trường toàn cầu",
      subtitle: "Câu chuyện thương hiệu",
      quote: "Phát triển thương hiệu bền vững tại mỗi quốc gia là mục tiêu chúng tôi theo đuổi.",
      body: [
        {
          id: 1,
          text: "VISS International được thành lập năm 2020 từ niềm đam mê thương mại điện tử và khát vọng chinh phục thị trường quốc tế.",
        },
        {
          id: 2,
          text: "Trải qua hành trình 4 năm không ngừng nỗ lực, VISS tự hào là đối tác chiến lược của nhiều thương hiệu lớn về vận hành và phát triển kênh eCommerce tại thị trường Việt Nam cũng như khu vực Đông Nam Á (Thái Lan, Malaysia, Philippines, Singapore).",
        },
      ],
      cta_text: "Tìm hiểu thêm",
      cta_url: "#about",
    },
    hp_partners: {
      title: "VISS International – Đối tác của các thương hiệu và doanh nghiệp quốc tế",
      logos: {
        data: [
          {
            id: 1,
            attributes: {
              url: "/images/partners/logo-tokyolife.png",
              name: "TOKYOLIFE",
            },
          },
          {
            id: 2,
            attributes: {
              url: "/images/partners/logo-behomemall.png",
              name: "BEHOME MALL",
            },
          },
          {
            id: 3,
            attributes: {
              url: "/images/partners/logo-komlife.png",
              name: "KOMLIFE",
            },
          },
          {
            id: 4,
            attributes: {
              url: "/images/partners/logo-bepxanh.png",
              name: "Bếp An Lành Xanh",
            },
          },
        ],
      },
    },
    hp_featured_projects: {
      title: "Dự án nổi bật",
      description: "Khám phá các dự án tiêu biểu mà chúng tôi đã đồng hành cùng thương hiệu vươn ra xa hơn.",
      projects: [
        {
          id: 1,
          market_tag: "TH",
          category: "FMCG – THỊ TRƯỜNG THÁI LAN",
          title: "Tăng trưởng 180% doanh thu nhờ tối ưu E-commerce đa kênh",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-th.png",
              },
            },
          },
          metrics: [
            { id: 1, value: "180", label: "Doanh thu online" },
            { id: 2, value: "120", label: "Lượng đơn hàng" },
          ],
          url: "#",
        },
        {
          id: 2,
          market_tag: "MY",
          category: "ĐỒ BẾP GIA DỤNG – MALAYSIA",
          title: "Mở rộng thị trường với chiến lược Digital Marketing & Marketplace",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-my.png",
              },
            },
          },
          metrics: [
            { id: 3, value: "150", label: "Traffic gian hàng" },
            { id: 4, value: "95", label: "Tỷ lệ chuyển đổi" },
          ],
          url: "#",
        },
        {
          id: 3,
          market_tag: "JP",
          category: "FMCG – NHẬT BẢN",
          title: "Tăng trưởng 180% doanh thu nhờ tối ưu E-commerce đa kênh",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-jp.png",
              },
            },
          },
          metrics: [
            { id: 5, value: "180", label: "Doanh thu online" },
            { id: 6, value: "120", label: "Lượng đơn hàng" },
          ],
          url: "#",
        },
      ],
      cta_text: "Xem tất cả dự án",
      cta_url: "#projects",
    },
    hp_services: {
      title: "Các dịch vụ của VISS International",
      description: "Giải pháp thương mại điện tử toàn diện cho doanh nghiệp của bạn.",
      services: [
        {
          id: 1,
          title: "Dịch vụ quảng cáo Google\n(Google Ads)",
          description: "Tăng trưởng khách hàng & doanh thu với Search, GDN, YouTube.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-speaker.svg",
              },
            },
          },
          features: [
            { id: 1, text: "Chiến lược theo\nmục tiêu KPI" },
            { id: 2, text: "Tối ưu tài khoản\n& ngân sách" },
            { id: 3, text: "Giảm CPA – tăng ROAS" },
            { id: 4, text: "Tối ưu landing page" },
          ],
        },
        {
          id: 2,
          title: "Thuê tài khoản Google Ads\nInvoice",
          description: "Giải pháp tài khoản Invoice an toàn cho ngân sách lớn.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-docs.svg",
              },
            },
          },
          features: [
            { id: 5, text: "Tài khoản chính chủ, hạn\nmức cao" },
            { id: 6, text: "Thanh toán sau,\nxuất hóa đơn" },
            { id: 7, text: "Chạy ổn định, hạn chế khóa" },
            { id: 8, text: "Hỗ trợ kỹ thuật nhanh" },
          ],
        },
        {
          id: 3,
          title: "Thuê TikTok Ads – Hoàn\ntiền tín dụng",
          description: "Tài khoản TikTok Ads hoàn tiền trực tiếp từ TikTok.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-tiktok.svg",
              },
            },
          },
          features: [
            { id: 9, text: "Hoàn tiền 5–15%\nmỗi tháng" },
            { id: 10, text: "Tài khoản\nkhông giới hạn" },
            { id: 11, text: "Hoàn tín dụng trực tiếp" },
            { id: 12, text: "Hỗ trợ kháng lỗi" },
          ],
        },
        {
          id: 4,
          title: "Xây dựng & vận hành\nTikTok Shop",
          description: "Giải pháp tăng trưởng doanh thu từ TikTok Shop.\nKết hợp KOC lớn",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-shop.svg",
              },
            },
          },
          features: [
            { id: 13, text: "Livestream\nbán hàng" },
            { id: 14, text: "Doanh thu\n1–5 tỷ/phiên" },
            { id: 15, text: "Vận hành trọn gói" },
            { id: 16, text: "Hỗ trợ kết hợp KOC lớn" },
          ],
        },
      ],
      cta_text: "Xem chi tiết dịch vụ",
      cta_url: "#services",
    },
    hp_why_us: {
      title: "VISSER Tận tâm &\nChuyên nghiệp",
      description: "Đội ngũ Digital Marketing & E-commerce với kinh nghiệm triển khai thực chiến tại nhiều thị trường quốc tế và đa dạng ngành hàng.",
      primary_cta_text: "Tìm hiểu thêm",
      primary_cta_url: "#",
      secondary_cta_text: "Trở thành VISSER",
      secondary_cta_url: "#",
      stats: [
        { id: 1, value: "5+", label: "Năm kinh nghiệm" },
        { id: 2, value: "10+", label: "Thị trường quốc tế" },
        { id: 3, value: "100+", label: "Dự án triển khai" },
        { id: 4, value: "1000+", label: "Chiến dịch quảng cáo" },
      ],
      image: {
        data: {
          attributes: {
            url: "/images/hp-visser.png",
          },
        },
      },
    },
    hp_contact: {
      title: "Hãy để VISS International\nhiểu hơn về bạn",
      description: "VISS International luôn sẵn sàng lắng nghe và cùng bạn xây dựng giải pháp quảng cáo & thương mại điện tử phù hợp với mục tiêu kinh doanh.",
      cta_text: "Gửi thông tin",
      cta_url: "#",
    },
  },
  en: {
    hp_hero: {
      headline: "Born from e-commerce passion – VISS International reaches out to conquer the global market",
      cta_text: "Contact us now",
      cta_url: "#contact",
      background: {
        data: {
          attributes: {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
          },
        },
      },
    },
    hp_journey: {
      title: "The journey from 2020 reaching out to the global market",
      subtitle: "Brand story",
      quote: "Sustainable brand development in every country is the goal we pursue.",
      body: [
        {
          id: 1,
          text: "VISS International was established in 2020 from a passion for e-commerce and the aspiration to conquer the international market.",
        },
        {
          id: 2,
          text: "Through a 4-year journey of continuous effort, VISS is proud to be a strategic partner of many major brands in operating and developing eCommerce channels in the Vietnam market as well as Southeast Asia (Thailand, Malaysia, Philippines, Singapore).",
        },
      ],
      cta_text: "Learn more",
      cta_url: "#about",
    },
    hp_partners: {
      title: "VISS International – Partner of international brands and businesses",
      logos: {
        data: [
          {
            id: 1,
            attributes: {
              url: "/images/partners/logo-tokyolife.png",
              name: "TOKYOLIFE",
            },
          },
          {
            id: 2,
            attributes: {
              url: "/images/partners/logo-behomemall.png",
              name: "BEHOME MALL",
            },
          },
          {
            id: 3,
            attributes: {
              url: "/images/partners/logo-komlife.png",
              name: "KOMLIFE",
            },
          },
          {
            id: 4,
            attributes: {
              url: "/images/partners/logo-bepxanh.png",
              name: "Bếp An Lành Xanh",
            },
          },
        ],
      },
    },
    hp_featured_projects: {
      title: "Featured Projects",
      description: "Discover the typical projects we have accompanied brands to go further.",
      projects: [
        {
          id: 1,
          market_tag: "TH",
          category: "FMCG – THAILAND MARKET",
          title: "180% revenue growth thanks to multi-channel E-commerce optimization",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-th.png",
              },
            },
          },
          metrics: [
            { id: 1, value: "180", label: "Online Revenue" },
            { id: 2, value: "120", label: "Total Orders" },
          ],
          url: "#",
        },
        {
          id: 2,
          market_tag: "MY",
          category: "KITCHENWARE – MALAYSIA",
          title: "Market expansion with Digital Marketing & Marketplace strategy",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-my.png",
              },
            },
          },
          metrics: [
            { id: 3, value: "150", label: "Store Traffic" },
            { id: 4, value: "95", label: "Conversion Rate" },
          ],
          url: "#",
        },
        {
          id: 3,
          market_tag: "JP",
          category: "FMCG – JAPAN",
          title: "180% revenue growth thanks to multi-channel E-commerce optimization",
          description: "",
          image: {
            data: {
              attributes: {
                url: "/images/projects/project-jp.png",
              },
            },
          },
          metrics: [
            { id: 5, value: "180", label: "Online Revenue" },
            { id: 6, value: "120", label: "Total Orders" },
          ],
          url: "#",
        },
      ],
      cta_text: "View all projects",
      cta_url: "#projects",
    },
    hp_services: {
      title: "Services of VISS International",
      description: "Comprehensive e-commerce solutions for your business.",
      services: [
        {
          id: 1,
          title: "Google Advertising Services\n(Google Ads)",
          description: "Growth in customers & revenue with Search, GDN, YouTube.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-speaker.svg",
              },
            },
          },
          features: [
            { id: 1, text: "Strategy according to\nKPI goals" },
            { id: 2, text: "Account & budget\noptimization" },
            { id: 3, text: "Decrease CPA – increase ROAS" },
            { id: 4, text: "Landing page optimization" },
          ],
        },
        {
          id: 2,
          title: "Rent Google Ads Invoice\nAccount",
          description: "Safe Invoice account solution for large budgets.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-docs.svg",
              },
            },
          },
          features: [
            { id: 5, text: "Official account, high\nlimit" },
            { id: 6, text: "Postpaid,\nissue invoice" },
            { id: 7, text: "Stable operation, limit bans" },
            { id: 8, text: "Fast technical support" },
          ],
        },
        {
          id: 3,
          title: "Rent TikTok Ads – Credit\nCashback",
          description: "TikTok Ads account with direct cashback from TikTok.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-tiktok.svg",
              },
            },
          },
          features: [
            { id: 9, text: "5–15% cashback\nevery month" },
            { id: 10, text: "Unlimited\naccounts" },
            { id: 11, text: "Direct credit cashback" },
            { id: 12, text: "Appeal support" },
          ],
        },
        {
          id: 4,
          title: "Build & Operate\nTikTok Shop",
          description: "Revenue growth solution from TikTok Shop.\nCombine large KOCs.",
          icon: {
            data: {
              attributes: {
                url: "/images/services/icon-shop.svg",
              },
            },
          },
          features: [
            { id: 13, text: "Sales\nLivestream" },
            { id: 14, text: "Revenue\n1–5 billion/session" },
            { id: 15, text: "Full package operation" },
            { id: 16, text: "Large KOC combination support" },
          ],
        },
      ],
      cta_text: "View service details",
      cta_url: "#services",
    },
    hp_why_us: {
      title: "Dedicated & Professional\nVISSER",
      description: "Digital Marketing & E-commerce team with practical implementation experience in many international markets and diverse industries.",
      primary_cta_text: "Learn more",
      primary_cta_url: "#",
      secondary_cta_text: "Become a VISSER",
      secondary_cta_url: "#",
      stats: [
        { id: 1, value: "5+", label: "Years of experience" },
        { id: 2, value: "10+", label: "International markets" },
        { id: 3, value: "100+", label: "Projects deployed" },
        { id: 4, value: "1000+", label: "Ad campaigns" },
      ],
      image: {
        data: {
          attributes: {
            url: "/images/hp-visser.png",
          },
        },
      },
    },
    hp_contact: {
      title: "Let VISS International\nunderstand you better",
      description: "VISS International is always ready to listen and work with you to build advertising & e-commerce solutions tailored to your business goals.",
      cta_text: "Submit",
      cta_url: "#",
    },
  },
};
