export interface RentAdsHero {
    title: string;
    headline: string;
    description: string;
    cta_text: string;
}

export interface RentAdsPricingTier {
    id: number;
    fee_percentage: string;
    budget_range: string;
}

export interface RentAdsPricing {
    title: string;
    description: string;
    tiers: RentAdsPricingTier[];
    benefits_title: string;
    benefits: string[];
}

export interface RentAdsWhyUsCard {
    id: number;
    title: string;
    points: string[];
}

export interface RentAdsWhyUs {
    title: string;
    cards: RentAdsWhyUsCard[];
}

export interface RentAdsAdvantages {
    title: string;
    description: string;
    points: string[];
}

export interface RentAdsProcessStep {
    id: number;
    step_number: string;
    title: string;
    description: string;
}

export interface RentAdsProcess {
    title: string;
    steps: RentAdsProcessStep[];
}

export interface RentAdsTestimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

export interface RentAdsTestimonials {
    title: string;
    reviews: RentAdsTestimonial[];
}

export interface RentAdsContact {
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

export interface RentAdsPageData {
    rent_hero: RentAdsHero;
    rent_pricing: RentAdsPricing;
    rent_why_us: RentAdsWhyUs;
    rent_advantages: RentAdsAdvantages;
    rent_process: RentAdsProcess;
    rent_testimonials: RentAdsTestimonials;
    rent_contact: RentAdsContact;
}

export const mockRentAdsPageData: Record<string, RentAdsPageData> = {
    vi: {
        rent_hero: {
            title: "Google Partner Account by VISSECOM",
            headline: "Giải pháp Tài khoản\nQuảng cáo Google uy tín",
            description: "Triển khai Google Ads ổn định, an toàn và sẵn sàng scale\nvới hệ thống tài khoản đạt chuẩn đối tác Google.",
            cta_text: "Nhận báo giá"
        },
        rent_pricing: {
            title: "Bảng giá thuê dịch vụ Thuê tài khoản Google Ads tại VISSECOM",
            description: "VISSECOM cung cấp tài khoản Google Ads đối tác với quy trình minh bạch, đã xác minh nhà quảng cáo và phù hợp cho nhiều mô hình kinh doanh. Giải pháp được thiết kế nhằm giúp doanh nghiệp vận hành ổn định, kiểm soát chi phí và mở rộng quảng cáo an toàn.",
            tiers: [
                { id: 1, fee_percentage: "5%", budget_range: "<200 triệu" },
                { id: 2, fee_percentage: "4%", budget_range: "200 - 499 triệu" },
                { id: 3, fee_percentage: "3%", budget_range: "500 - 999 triệu" },
                { id: 4, fee_percentage: "2%", budget_range: ">1 tỷ" }
            ],
            benefits_title: "Quyền lợi khi sử dụng dịch vụ\ntại VISSECOM:",
            benefits: [
                "Miễn phí thiết lập & mở tài khoản",
                "Hỗ trợ xử lý các vấn đề vận hành tài khoản",
                "Xuất hóa đơn VAT đầy đủ, rõ ràng",
                "Theo dõi chi phí & đối soát minh bạch"
            ]
        },
        rent_why_us: {
            title: "Vì sao nên dùng tài khoản\nGoogle ads đối tác từ VISSCOM",
            cards: [
                { id: 1, title: "Vận hành\nổn định", points: ["Giảm rủi ro gián đoạn chiến dịch", "Duy trì hoạt động quảng cáo liên tục"] },
                { id: 2, title: "Kiểm soát\nchi phí", points: ["Chủ động ngân sách quảng cáo", "Hạn chế chi phí phát sinh"] },
                { id: 3, title: "Hiệu suất\nbền vững", points: ["Dữ liệu liền mạch cho máy học", "Phân phối & chuyển đổi tốt hơn"] },
                { id: 4, title: "Dễ dàng\nmở rộng", points: ["Scale ngân sách linh hoạt", "Phù hợp tăng trưởng dài hạn"] }
            ]
        },
        rent_advantages: {
            title: "Ưu điểm của tài khoản Google Ads đối tác tại VISSECOM",
            description: "Giải pháp tài khoản Google Ads do VISSECOM cung cấp giúp doanh nghiệp triển khai quảng cáo ổn định, minh bạch và tối ưu hiệu quả vận hành trong suốt quá trình tăng trưởng.",
            points: [
                "Vận hành ổn định",
                "Xác minh đầy đủ",
                "Minh bạch chi phí",
                "Chủ động ngân sách",
                "Hỗ trợ nhanh",
                "Ưu điểm 6",
                "Ưu điểm 7"
            ]
        },
        rent_process: {
            title: "Quy trình thuê tài khoản Google Ads tại VISSECOM",
            steps: [
                {
                    id: 1,
                    step_number: "01",
                    title: "Cung cấp thông tin doanh nghiệp & website",
                    description: "Khách hàng gửi domain chính, link website/landing page và thông tin sản phẩm dự kiến quảng cáo."
                },
                {
                    id: 2,
                    step_number: "02",
                    title: "VISSECOM kiểm tra & đánh giá tính phù hợp",
                    description: "Đội ngũ VISSECOM rà soát website, nội dung và sản phẩm theo chính sách Google Ads."
                },
                {
                    id: 3,
                    step_number: "03",
                    title: "Xác nhận gói dịch vụ & ngân sách",
                    description: "Khách hàng lựa chọn gói dịch vụ phù hợp và tiến hành thanh toán theo thỏa thuận."
                },
                {
                    id: 4,
                    step_number: "04",
                    title: "Hoàn thiện website theo khuyến nghị",
                    description: "Khách hàng cập nhật website/landing page theo hướng dẫn để đáp ứng yêu cầu quảng cáo."
                },
                {
                    id: 5,
                    step_number: "05",
                    title: "Nạp tiền & Lên chiến dịch",
                    description: "Khách hàng nạp ngân sách vào tài khoản và tiến hành cài đặt các chiến dịch quảng cáo."
                },
                {
                    id: 6,
                    step_number: "06",
                    title: "Kích hoạt tài khoản & bắt đầu quảng cáo",
                    description: "Tài khoản được kích hoạt, sẵn sàng triển khai Google Ads và theo dõi hiệu quả."
                }
            ]
        },
        rent_testimonials: {
            title: "Khách hàng nói gì về\nVISS International",
            reviews: [
                {
                    id: 1,
                    quote: "“VISSECOM không chỉ chạy Google Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 2,
                    quote: "“VISSECOM không chỉ chạy Google Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 3,
                    quote: "“VISSECOM không chỉ chạy Google Ads mà còn đồng hành như một đối tác tăng trưởng. Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu dựa trên dữ liệu thực.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                }
            ]
        },
        rent_contact: {
            title: "Bắt đầu tối ưu Google Ads cùng VISSECOM",
            description: "Chia sẻ mục tiêu kinh doanh của bạn Đội ngũ VISSECOM sẽ lắng nghe, phân tích và đề xuất hướng triển khai Google Ads phù hợp với giai đoạn tăng trưởng của doanh nghiệp.",
            cta_text: "Gửi yêu cầu",
            fields: {
                name: "Họ và tên",
                phone: "Số điện thoại",
                website: "Link website",
                email: "Email",
                service_interest: "Dịch vụ quan tâm",
                message: "Bạn cần hỗ trợ điều gì?"
            }
        }
    },
    en: {
        rent_hero: {
            title: "Google Partner Account by VISSECOM",
            headline: "Reputable Google Ads\nAccount Solution",
            description: "Deploy Google Ads stably, safely, and ready to scale\nwith an account system that meets Google Partner standards.",
            cta_text: "Get a Quote"
        },
        rent_pricing: {
            title: "Google Ads Account Rental Pricing at VISSECOM",
            description: "VISSECOM provides Google Ads Partner accounts with a transparent process, verified advertisers, suitable for various business models. The solution is designed to help businesses operate stably, control costs, and scale advertising safely.",
            tiers: [
                { id: 1, fee_percentage: "5%", budget_range: "<200 million" },
                { id: 2, fee_percentage: "4%", budget_range: "200 - 499 million" },
                { id: 3, fee_percentage: "3%", budget_range: "500 - 999 million" },
                { id: 4, fee_percentage: "2%", budget_range: ">1 billion" }
            ],
            benefits_title: "Benefits of using services\nat VISSECOM:",
            benefits: [
                "Free account setup & opening",
                "Support handling account operational issues",
                "Full and clear VAT invoice issuance",
                "Transparent cost tracking & reconciliation"
            ]
        },
        rent_why_us: {
            title: "Why use a partner Google Ads\naccount from VISSCOM",
            cards: [
                { id: 1, title: "Stable\nOperation", points: ["Reduce campaign disruption risk", "Maintain continuous ad operation"] },
                { id: 2, title: "Cost\nControl", points: ["Proactive ad budget", "Limit incurred costs"] },
                { id: 3, title: "Sustainable\nPerformance", points: ["Seamless data for machine learning", "Better delivery & conversion"] },
                { id: 4, title: "Easy to\nScale", points: ["Flexible budget scaling", "Suitable for long-term growth"] }
            ]
        },
        rent_advantages: {
            title: "Advantages of partner Google Ads account at VISSECOM",
            description: "The Google Ads account solution provided by VISSECOM helps businesses deploy stable, transparent advertising and optimize operational efficiency throughout the growth process.",
            points: [
                "Stable operation",
                "Full verification",
                "Transparent costs",
                "Proactive budget",
                "Fast support",
                "Advantage 6",
                "Advantage 7"
            ]
        },
        rent_process: {
            title: "Google Ads account rental process at VISSECOM",
            steps: [
                {
                    id: 1,
                    step_number: "01",
                    title: "Provide business information & website",
                    description: "Customers send the main domain, website/landing page link, and information about the products expected to be advertised."
                },
                {
                    id: 2,
                    step_number: "02",
                    title: "VISSECOM reviews & evaluates suitability",
                    description: "VISSECOM team reviews the website, content, and products according to Google Ads policies."
                },
                {
                    id: 3,
                    step_number: "03",
                    title: "Confirm service package & budget",
                    description: "Customers choose a suitable service package and make payment according to the agreement."
                },
                {
                    id: 4,
                    step_number: "04",
                    title: "Complete the website according to recommendations",
                    description: "Customers update the website/landing page according to instructions to meet advertising requirements."
                },
                {
                    id: 5,
                    step_number: "05",
                    title: "Fund & Create Campaigns",
                    description: "Customers top up budget to the account and proceed with launching campaigns."
                },
                {
                    id: 6,
                    step_number: "06",
                    title: "Activate account & start advertising",
                    description: "The account is activated, ready to deploy Google Ads and track performance."
                }
            ]
        },
        rent_testimonials: {
            title: "What customers say about\nVISS International",
            reviews: [
                {
                    id: 1,
                    quote: "“VISSECOM not only runs Google Ads but also accompanies as a growth partner. The team clearly understands business goals and always optimizes based on real data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 2,
                    quote: "“VISSECOM not only runs Google Ads but also accompanies as a growth partner. The team clearly understands business goals and always optimizes based on real data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                },
                {
                    id: 3,
                    quote: "“VISSECOM not only runs Google Ads but also accompanies as a growth partner. The team clearly understands business goals and always optimizes based on real data.”",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: "/images/testimonial-avatar.svg"
                }
            ]
        },
        rent_contact: {
            title: "Start optimizing Google Ads with VISSECOM",
            description: "Share your business goals. VISSECOM team will listen, analyze and propose a Google Ads deployment direction suitable for your business's growth stage.",
            cta_text: "Submit request",
            fields: {
                name: "Full Name",
                phone: "Phone Number",
                website: "Website Link",
                email: "Email",
                service_interest: "Service of Interest",
                message: "How can we help you?"
            }
        }
    }
};
