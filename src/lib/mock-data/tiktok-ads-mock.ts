export interface TiktokAdsHero {
    title: string;
    description: string;
    cta_text: string;
    image?: string;
}

export interface TiktokAdsWhyUsPoint {
    id: number;
    title: string;
    description?: string;
}

export interface TiktokAdsWhyUs {
    title: string;
    points: TiktokAdsWhyUsPoint[];
    image?: string;
}

export interface TiktokAdsGrowthCard {
    id: number;
    title: string;
    points: string[];
}

export interface TiktokAdsGrowth {
    title: string;
    cards: TiktokAdsGrowthCard[];
}

export interface TiktokAdsProcessStep {
    id: number;
    step_number: string;
    title: string;
    description: string;
}

export interface TiktokAdsProcess {
    title: string;
    steps: TiktokAdsProcessStep[];
}

export interface TiktokAdsTestimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

export interface TiktokAdsTestimonials {
    title: string;
    reviews: TiktokAdsTestimonial[];
}

export interface TiktokAdsContact {
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

export interface TiktokAdsPageData {
    tiktok_hero: TiktokAdsHero;
    tiktok_why_us: TiktokAdsWhyUs;
    tiktok_growth: TiktokAdsGrowth;
    tiktok_process: TiktokAdsProcess;
    tiktok_testimonials: TiktokAdsTestimonials;
    tiktok_contact: TiktokAdsContact;
}

export const mockTiktokAdsPageData: Record<string, TiktokAdsPageData> = {
    vi: {
        tiktok_hero: {
            title: "Dịch vụ quảng cáo Tiktok Ads",
            description: "Hãy để VISSECOM đồng hành cùng doanh nghiệp bạn trong hành trình chinh phục TikTok.\nVới kinh nghiệm triển khai TikTok Ads cho nhiều ngành hàng, VISSECOM xây dựng chiến lược quảng cáo toàn diện, từ tăng nhận diện thương hiệu đến tối ưu chuyển đổi và tăng trưởng GMV bền vững.",
            cta_text: "Đăng ký ngay"
        },
        tiktok_why_us: {
            title: "Tại sao nên chọn VISSCOM",
            points: [
                {
                    id: 1,
                    title: "Đối tác TikTok Ads chính thức",
                    description: "Cấp tài khoản TikTok Ads Agency Hạn mức cao, đa tiền tệ Quản lý & theo dõi minh bạch"
                },
                { id: 2, title: "Hỗ trợ chính sách & phê duyệt" },
                { id: 3, title: "Chiến lược & ngân sách hiệu quả" },
                { id: 4, title: "Ưu đãi & ad credit" },
                { id: 5, title: "Hỗ trợ TikTok Shop & KOL/KOC" },
                { id: 6, title: "Hỗ trợ Creative & Livestream" }
            ]
        },
        tiktok_growth: {
            title: "VISSCOM giúp bạn giải quyết toàn bộ bài toán Tiktok Ads",
            cards: [
                {
                    id: 1,
                    title: "Chuyên môn vững – Chiến lược rõ",
                    points: [
                        "Tư vấn định hướng nội dung & creative",
                        "Duy trì hoạt động quảng cáo liên tục",
                        "Tối ưu hiệu suất quảng cáo theo dữ liệu"
                    ]
                },
                {
                    id: 2,
                    title: "Triển khai bài bản – tối ưu liên tục",
                    points: [
                        "Thiết lập chiến dịch chuẩn ngay từ đầu",
                        "Theo dõi, đánh giá và cải thiện định kỳ",
                        "Giảm rủi ro – tăng hiệu quả đầu tư"
                    ]
                },
                {
                    id: 3,
                    title: "Đồng hành tăng trưởng dài hạn",
                    points: [
                        "Đồng hành Scale cùng doanh nghiệp",
                        "Chiến lược mở rộng khi hòa vốn",
                        "Hướng tới tăng trưởng bền vững"
                    ]
                }
            ]
        },
        tiktok_process: {
            title: "Quy trình triển khai TikTok Ads\ntại VISSECOM",
            steps: [
                {
                    id: 1,
                    step_number: "01",
                    title: "Tiếp nhận thông tin & mục tiêu quảng cáo",
                    description: "Thu thập brief, ngành hàng, mục tiêu và ngân sách dự kiến."
                },
                {
                    id: 2,
                    step_number: "02",
                    title: "Tư vấn chiến lược & đánh giá khả năng triển khai",
                    description: "Phân tích sản phẩm, thị trường và đề xuất hướng chạy phù hợp."
                },
                {
                    id: 3,
                    step_number: "03",
                    title: "Cấp tài khoản quảng cáo TikTok/Google Ads đối tác",
                    description: "Thiết lập tài khoản Agency theo đúng nhu cầu doanh nghiệp."
                },
                {
                    id: 4,
                    step_number: "04",
                    title: "Thiết lập hình thức thanh toán & ngân sách",
                    description: "Hỗ trợ top-up, kiểm soát chi tiêu và phân bổ ngân sách hiệu quả."
                },
                {
                    id: 5,
                    step_number: "05",
                    title: "Thiết lập & tối ưu chiến dịch",
                    description: "Hỗ trợ kỹ thuật, cấu trúc chiến dịch và tối ưu ban đầu."
                },
                {
                    id: 6,
                    step_number: "06",
                    title: "Theo dõi – đánh giá – báo cáo định kỳ",
                    description: "Giám sát hiệu suất, phân tích dữ liệu và báo cáo minh bạch."
                },
                {
                    id: 7,
                    step_number: "07",
                    title: "Tối ưu & mở rộng quy mô",
                    description: "Đề xuất giải pháp scale dựa trên hiệu quả thực tế."
                }
            ]
        },
        tiktok_testimonials: {
            title: "Khách hàng nói gì về VISS International",
            reviews: [
                {
                    id: 1,
                    quote: "“VISSECOM không chỉ chạy TikTok Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 2,
                    quote: "“VISSECOM không chỉ chạy TikTok Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 3,
                    quote: "“VISSECOM không chỉ chạy TikTok Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                }
            ]
        },
        tiktok_contact: {
            title: "Trình tăng trưởng doanh thu và Leads với quảng cáo Tiktok tại VISSCOM",
            description: "VISSECOM đồng hành cùng doanh nghiệp xây dựng chiến lược TikTok Ads bài bản, tối ưu ngân sách và mở rộng tăng trưởng bền vững theo dữ liệu. Tiếp cận đúng khách hàng mục tiêu Tối ưu chi phí & hiệu suất quảng cáo Đội ngũ chuyên gia TikTok Ads của VISSECOM",
            cta_text: "Đăng ký tư vấn miễn phí",
            fields: {
                name: "Họ và tên",
                phone: "Số điện thoại",
                website: "Link website",
                email: "Email",
                service_interest: "Sản phẩm dịch vụ bạn đang muốn quảng cáo là gì?",
                message: "Bạn cần hỗ trợ điều gì?"
            }
        }
    },
    en: {
        tiktok_hero: {
            title: "Tiktok Ads Service",
            description: "Let VISSECOM accompany your business on the journey to conquer TikTok.\nWith experience implementing TikTok Ads for many industries, VISSECOM builds comprehensive advertising strategies, from increasing brand awareness to optimizing conversions and sustainable GMV growth.",
            cta_text: "Register now"
        },
        tiktok_why_us: {
            title: "Why choose VISSCOM",
            points: [
                {
                    id: 1,
                    title: "Official TikTok Ads Partner",
                    description: "High limit Agency TikTok Ads account, multi-currency transparent management & tracking"
                },
                { id: 2, title: "Policy & approval support" },
                { id: 3, title: "Effective strategy & budget" },
                { id: 4, title: "Offers & ad credit" },
                { id: 5, title: "TikTok Shop & KOL/KOC support" },
                { id: 6, title: "Creative & Livestream support" }
            ]
        },
        tiktok_growth: {
            title: "VISSCOM helps you solve all TikTok Ads problems",
            cards: [
                {
                    id: 1,
                    title: "Solid expertise - Clear strategy",
                    points: [
                        "Content & creative direction consulting",
                        "Maintain continuous advertising activities",
                        "Optimize ad performance based on data"
                    ]
                },
                {
                    id: 2,
                    title: "Methodical deployment - Continuous optimization",
                    points: [
                        "Set up standard campaigns from the beginning",
                        "Track, evaluate and improve periodically",
                        "Reduce risks - increase investment efficiency"
                    ]
                },
                {
                    id: 3,
                    title: "Long-term growth companionship",
                    points: [
                        "Accompanying Scale with businesses",
                        "Expansion strategy when breaking even",
                        "Aiming for sustainable growth"
                    ]
                }
            ]
        },
        tiktok_process: {
            title: "TikTok Ads implementation process\nat VISSECOM",
            steps: [
                {
                    id: 1,
                    step_number: "01",
                    title: "Receive information & advertising goals",
                    description: "Collect briefs, industries, goals and expected budgets."
                },
                {
                    id: 2,
                    step_number: "02",
                    title: "Strategic consulting & deployment feasibility assessment",
                    description: "Analyze products, markets and propose suitable running directions."
                },
                {
                    id: 3,
                    step_number: "03",
                    title: "Grant TikTok/Google Ads partner advertising account",
                    description: "Set up Agency account according to business needs."
                },
                {
                    id: 4,
                    step_number: "04",
                    title: "Set up payment method & budget",
                    description: "Support top-up, control spending and allocate budget effectively."
                },
                {
                    id: 5,
                    step_number: "05",
                    title: "Set up & optimize campaigns",
                    description: "Technical support, campaign structure and initial optimization."
                },
                {
                    id: 6,
                    step_number: "06",
                    title: "Track - evaluate - report periodically",
                    description: "Monitor performance, analyze data and report transparently."
                },
                {
                    id: 7,
                    step_number: "07",
                    title: "Optimize & scale",
                    description: "Propose scale solutions based on actual efficiency."
                }
            ]
        },
        tiktok_testimonials: {
            title: "What customers say about VISS International",
            reviews: [
                {
                    id: 1,
                    quote: "“VISSECOM not only runs TikTok Ads but also acts as a growth partner. The team clearly understands business goals and always optimizes based on actual data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 2,
                    quote: "“VISSECOM not only runs TikTok Ads but also acts as a growth partner. The team clearly understands business goals and always optimizes based on actual data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 3,
                    quote: "“VISSECOM not only runs TikTok Ads but also acts as a growth partner. The team clearly understands business goals and always optimizes based on actual data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                }
            ]
        },
        tiktok_contact: {
            title: "Increase revenue and Leads with Tiktok ads at VISSCOM",
            description: "VISSECOM accompanies businesses to build structured TikTok Ads strategies, optimize budgets, and expand sustainable growth driven by data. Reach the right target audience Optimize advertising costs & performance VISSECOM's team of TikTok Ads experts",
            cta_text: "Submit request",
            fields: {
                name: "Full Name",
                phone: "Phone Number",
                website: "Website Link",
                email: "Email",
                service_interest: "What products/services do you want to advertise?",
                message: "What do you need help with?"
            }
        }
    }
};
