/**
 * Mock data cho trang "Dịch vụ quảng cáo Google" (Google Ads),
 * bám sát bản thiết kế Figma VISSCOM – node 105:546.
 * Dùng cho route `/[locale]/services/google-ads` (hoặc tương đương).
 */

// ── Types ──────────────────────────────────────────────────

export interface AdsServiceItem {
    id: number;
    title: string;
    features: string[];
}

export interface AdsWhyUsPoint {
    id: number;
    text: string;
}

export interface AdsPackage {
    id: number;
    title: string;
    items: string[];
}

export interface AdsTestimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

export interface AdsContactForm {
    title: string;
    description: string;
    cta_text: string;
    fields: {
        name: string;
        phone: string;
        website: string;
        email: string;
        service_interest: string;
        message: string;
    };
}

export interface GoogleAdsPageData {
    ads_hero: {
        title: string;
        description: string;
        cta_text: string;
        image: string;
    };
    ads_services: {
        title: string;
        items: AdsServiceItem[];
    };
    ads_why_us: {
        title: string;
        highlighted_text: string;
        points: AdsWhyUsPoint[];
        image: string;
    };
    ads_packages: {
        title: string;
        packages: AdsPackage[];
    };
    ads_testimonials: {
        title: string;
        reviews: AdsTestimonial[];
    };
    ads_contact: AdsContactForm;
}

// ── Mock Data ──────────────────────────────────────────────

export const googleAdsMockData: Record<'vi' | 'en', GoogleAdsPageData> = {
    vi: {
        // ─── 1. Hero ───────────────────────────────────────
        ads_hero: {
            title: "Dịch vụ quảng cáo\nGoogle",
            description:
                "VISS International là agency tập trung vào chiến lược Google Ads lấy chuyển đổi làm trung tâm, đồng hành cùng doanh nghiệp bán lẻ trong hành trình tăng trưởng đơn hàng và mở rộng quy mô kinh doanh.",
            cta_text: "Đặt lịch tư vấn",
            image: "/images/services/google-ads-hero.png",
        },

        // ─── 2. Các dịch vụ ────────────────────────────────
        ads_services: {
            title: "Các dịch vụ của chúng tôi",
            items: [
                {
                    id: 1,
                    title: "Google display network (GDN)",
                    features: [
                        "Phủ thương hiệu rộng khắp hệ sinh thái Google",
                        "Tối ưu hiển thị để tạo chuyển đổi thực",
                        "Gia tăng doanh số cho thương hiệu mỗi ngày",
                    ],
                },
                {
                    id: 2,
                    title: "Quảng cáo youtube",
                    features: [
                        "Tiếp cận khách hàng bằng video hiệu quả",
                        "Tăng nhận diện & thúc đẩy hành động mua",
                        "Tối ưu quảng cáo theo mục tiêu doanh thu",
                    ],
                },
                {
                    id: 3,
                    title: "Google shopping",
                    features: [
                        "Đưa sản phẩm nổi bật trên Google Search",
                        "Tối ưu chi phí & ROAS cho thương mại điện tử",
                        "Tăng trưởng số lượng đơn hàng bền vững",
                    ],
                },
                {
                    id: 4,
                    title: "Google search",
                    features: [
                        "Tiếp cận khách hàng đang có nhu cầu mua",
                        "Tối ưu chuyển đổi từ từ khóa tìm kiếm",
                        "Gia tăng đơn hàng cho thương hiệu nhanh chóng",
                    ],
                },
                {
                    id: 5,
                    title: "Cho thuê tài khoản google partner",
                    features: [
                        "Chi phí dịch vụ cạnh tranh",
                        "Phê duyệt nhanh chóng, hoạt động ổn định",
                        "Luôn hỗ trợ khách hàng liên tục 24/7",
                    ],
                },
                {
                    id: 6,
                    title: "Tối ưu landing page",
                    features: [
                        "Đột phá mạnh mẽ tỷ lệ chuyển đổi tối ưu nhất",
                        "Cải thiện trải nghiệm người dùng toàn diện",
                        "Sẵn sàng scale quảng cáo trên đa kênh",
                    ],
                },
            ],
        },

        // ─── 3. Tại sao chọn VISSCOM ──────────────────────
        ads_why_us: {
            title: "Tại sao nên\nchọn ",
            highlighted_text: "VISSCOM",
            points: [
                { id: 1, text: "Triển khai Google Ads đúng chiến lược" },
                { id: 2, text: "Tối ưu dựa trên dữ liệu & KPIs" },
                { id: 3, text: "Đồng hành để bứt phá tăng trưởng" },
            ],
            image: "/images/services/ads-why-us.png",
        },

        // ─── 4. Gói dịch vụ ───────────────────────────────
        ads_packages: {
            title: "Lựa chọn gói dịch vụ  Google Ads cùng VISSCOM",
            packages: [
                {
                    id: 1,
                    title: "Quản trị tài khoản Google ads",
                    items: [
                        "Ngân sách tối thiểu:\ntừ 15 triệu / tháng",
                        "Quản lý & tối ưu tài khoản Google Ads chuyên sâu",
                        "Tập trung chuyển đổi, CPA, ROAS",
                        "Phù hợp doanh nghiệp vừa & nhỏ",
                        "Báo cáo định kỳ giúp theo dõi hiệu quả quảng cáo minh bạch",
                    ],
                },
                {
                    id: 2,
                    title: "Google Ads\ntrọn gói",
                    items: [
                        "Ngân sách tối thiểu: liên hệ",
                        "Xây dựng chiến lược Google Ads toàn diện",
                        "Triển khai đa kênh: Search, Display, Shopping, YouTube",
                        "Tối ưu theo KPIs, doanh thu & tăng trưởng dài hạn",
                        "Phù hợp doanh nghiệp lớn, eCommerce, scale mạnh",
                    ],
                },
                {
                    id: 3,
                    title: "Thuê tài khoản\nGoogle Ads",
                    items: [
                        "Phí thuê tài khoản: 3% – 5%",
                        "Cung cấp tài khoản Google Ads uy tín, ổn định",
                        "Phê duyệt nhanh, hạn chế rủi ro",
                        "Hỗ trợ kỹ thuật & vận hành",
                        "Phù hợp doanh nghiệp cần chạy nhanh, ngân sách lớn",
                    ],
                },
            ],
        },

        // ─── 5. Testimonials ──────────────────────────────
        ads_testimonials: {
            title: "Khách hàng nói gì về\nVISS International",
            reviews: [
                {
                    id: 1,
                    quote: "\u201CChiến dịch Google Ads được triển khai bài bản, minh bạch và bám sát KPIs. VISSECOM giúp chúng tôi cải thiện rõ rệt chuyển đổi và doanh thu.\u201D",
                    author: "Mr. Nguyễn Hoàng Long",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/services/google-ads-testimonial-1.png",
                },
                {
                    id: 2,
                    quote: "\u201CTừ khi hợp tác với VISSECOM, chiến dịch Google Ads ổn định hơn và dễ scale. Đội ngũ phản hồi nhanh, chủ động đề xuất giải pháp phù hợp từng giai đoạn.\u201D",
                    author: "Mr. Lê Quốc Bảo",
                    role: "E-commerce Manager – Thương hiệu tiêu dùng",
                    avatar: "/images/services/google-ads-testimonial-2.png",
                },
                {
                    id: 3,
                    quote: "\u201CĐiểm chúng tôi đánh giá cao nhất là tư duy performance và khả năng scale. VISSECOM luôn chủ động đề xuất giải pháp mới để tối ưu hiệu quả lâu dài.\u201D",
                    author: "Ms. Lê Thu Hương",
                    role: "Founder – Thương hiệu bán lẻ online",
                    avatar: "/images/services/google-ads-testimonial-3.png",
                },
            ],
        },

        // ─── 6. CTA Contact ──────────────────────────────
        ads_contact: {
            title: 'Bắt đầu tối ưu Google Ads cùng <span class="text-[#AF7E2D]">VISSECOM</span>',
            description:
                "Chia sẻ mục tiêu kinh doanh của bạn\nĐội ngũ VISSECOM sẽ lắng nghe, phân tích và đề xuất hướng triển khai Google Ads phù hợp với giai đoạn tăng trưởng của doanh nghiệp.",
            cta_text: "Gửi",
            fields: {
                name: "Họ và tên",
                phone: "Số điện thoại",
                website: "Link website",
                email: "Email",
                service_interest: "Dịch vụ quan tâm",
                message: "Bạn cần hỗ trợ điều gì?",
            },
        },
    },

    en: {
        // ─── 1. Hero ───────────────────────────────────────
        ads_hero: {
            title: "Google\nAdvertising Services",
            description:
                "VISS International is an agency focused on conversion-centered Google Ads strategy, partnering with retail businesses on their journey to grow orders and expand business scale.",
            cta_text: "Book a Consultation",
            image: "/images/services/google-ads-hero.png",
        },

        // ─── 2. Our Services ──────────────────────────────
        ads_services: {
            title: "Our Services",
            items: [
                {
                    id: 1,
                    title: "Google Display Network (GDN)",
                    features: [
                        "Expand brand presence across Google's ecosystem",
                        "Optimize display to drive real conversions",
                        "Increase daily brand sales",
                    ],
                },
                {
                    id: 2,
                    title: "YouTube Advertising",
                    features: [
                        "Reach customers with effective video ads",
                        "Boost awareness & drive purchase actions",
                        "Optimize campaigns for revenue targets",
                    ],
                },
                {
                    id: 3,
                    title: "Google Shopping",
                    features: [
                        "Showcase products prominently on Google Search",
                        "Optimize costs & ROAS for e-commerce",
                        "Achieve sustainable order growth",
                    ],
                },
                {
                    id: 4,
                    title: "Google Search",
                    features: [
                        "Reach customers with buying intent",
                        "Optimize conversions from search keywords",
                        "Rapidly increase brand orders",
                    ],
                },
                {
                    id: 5,
                    title: "Google Partner Account Rental",
                    features: [
                        "Competitive service pricing",
                        "Fast approval, stable operation",
                        "24/7 continuous customer support",
                    ],
                },
                {
                    id: 6,
                    title: "Landing Page Optimization",
                    features: [
                        "Breakthrough conversion rate optimization",
                        "Comprehensive user experience improvement",
                        "Ready to scale ads across multiple channels",
                    ],
                },
            ],
        },

        // ─── 3. Why Choose VISSCOM ────────────────────────
        ads_why_us: {
            title: "Why choose\n",
            highlighted_text: "VISSCOM",
            points: [
                { id: 1, text: "Deploy Google Ads with the right strategy" },
                { id: 2, text: "Optimize based on data & KPIs" },
                { id: 3, text: "Partner for breakthrough growth" },
            ],
            image: "/images/services/google-ads-why-us.png",
        },

        // ─── 4. Service Packages ──────────────────────────
        ads_packages: {
            title: "Choose a Google Ads service package with VISSCOM",
            packages: [
                {
                    id: 1,
                    title: "Google Ads Account Management",
                    items: [
                        "Minimum budget:\nfrom 15 million / month",
                        "In-depth Google Ads account management & optimization",
                        "Focus on conversions, CPA, ROAS",
                        "Suitable for small & medium businesses",
                        "Regular reporting for transparent ad performance tracking",
                    ],
                },
                {
                    id: 2,
                    title: "All-in-One\nGoogle Ads",
                    items: [
                        "Minimum budget: contact us",
                        "Build a comprehensive Google Ads strategy",
                        "Multi-channel deployment: Search, Display, Shopping, YouTube",
                        "Optimize for KPIs, revenue & long-term growth",
                        "Suitable for large enterprises, eCommerce, heavy scaling",
                    ],
                },
                {
                    id: 3,
                    title: "Google Ads\nAccount Rental",
                    items: [
                        "Account rental fee: 3% – 5%",
                        "Provide trusted, stable Google Ads accounts",
                        "Fast approval, reduced risk",
                        "Technical & operational support",
                        "Suitable for businesses needing fast launch with large budgets",
                    ],
                },
            ],
        },

        // ─── 5. Testimonials ──────────────────────────────
        ads_testimonials: {
            title: "What clients say about\nVISS International",
            reviews: [
                {
                    id: 1,
                    quote: "\u201CThe Google Ads campaign was deployed methodically, transparently and closely aligned with KPIs. VISSECOM helped us significantly improve conversions and revenue.\u201D",
                    author: "Mr. Nguyen Hoang Long",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/services/review-avatar-1.png",
                },
                {
                    id: 2,
                    quote: "\u201CSince partnering with VISSECOM, Google Ads campaigns have been more stable and easier to scale. The team responds quickly and proactively proposes suitable solutions for each phase.\u201D",
                    author: "Mr. Le Quoc Bao",
                    role: "E-commerce Manager – Consumer Brand",
                    avatar: "/images/services/review-avatar-2.png",
                },
                {
                    id: 3,
                    quote: "\u201CWhat we value most is the performance mindset and scaling capability. VISSECOM always proactively proposes new solutions for long-term effectiveness.\u201D",
                    author: "Ms. Le Thu Huong",
                    role: "Founder – Online Retail Brand",
                    avatar: "/images/services/review-avatar-3.png",
                },
            ],
        },

        // ─── 6. CTA Contact ──────────────────────────────
        ads_contact: {
            title: 'Start optimizing Google Ads with <span class="text-[#AF7E2D]">VISSECOM</span>',
            description:
                "Share your business goals\nThe VISSECOM team will listen, analyze and propose Google Ads implementation strategies suitable for your business growth stage.",
            cta_text: "Submit",
            fields: {
                name: "Full name",
                phone: "Phone number",
                website: "Website URL",
                email: "Email",
                service_interest: "Service of interest",
                message: "What do you need help with?",
            },
        },
    },
};
