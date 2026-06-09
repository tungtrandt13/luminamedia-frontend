/**
 * Mock data cho trang "Đào tạo" (Training) - Google Ads CONVERSION
 * Bám sát bản thiết kế Figma Lumina Media Agency – node 263:1409.
 * Dùng cho route `/[locale]/training` (hoặc tương đương).
 */

export interface TrainingCourseItem {
    id: number;
    title: string;
    icon: string; // 'basic' | 'advanced' | 'internal'
    list: string[];
}

export interface TrainingPageData {
    training_hero: {
        title: string;
        description: string;
        cta_text: string;
        image: string;
    };
    training_courses: {
        title: string;
        highlighted_text: string;
        items: TrainingCourseItem[];
        cta_text: string;
    };
    training_gallery: {
        title: string;
        highlighted_text: string;
        images: string[];
    };
    training_instructor: {
        title: string;
        name: string;
        role: string;
        details: string[];
        quote: string;
        image: string;
    };
    training_contact: {
        title: string;
        description: string;
        cta_text: string;
        fields: {
            name: string;
            phone: string;
            email: string;
            course_interest: string;
            message: string;
        };
        course_options: { value: string; label: string }[];
    };
}

export const trainingMockData: Record<'vi' | 'en', TrainingPageData> = {
    vi: {
        training_hero: {
            title: "Google Ads CONVERSION",
            description:
                "Không dạy chạy Google Ads theo lý thuyết. Chương trình Google Ads CONVERSION tại Lumina Media Agency được thiết kế từ thực tế vận hành TMĐT đa quốc gia, giúp bạn hiểu đúng bản chất chuyển đổi, làm chủ dữ liệu và tạo ra doanh thu thật từ quảng cáo.",
            cta_text: "Đăng ký tư vấn miễn phí",
            image: "/images/training/hero-bg.png",
        },
        training_courses: {
            title: "Các khoá học",
            highlighted_text: "Google Ads Conversion",
            items: [
                {
                    id: 1,
                    title: "Cơ bản",
                    icon: "basic",
                    list: [
                        "Tổng quan Google Ads & tư duy chuyển đổi",
                        "Thiết lập tài khoản, chiến dịch Search đúng chuẩn",
                        "Nghiên cứu từ khóa & target khách hàng",
                        "Làm quen Display, Video, Performance Max",
                        "Remarketing & xử lý quảng cáo không hiệu quả",
                    ],
                },
                {
                    id: 2,
                    title: "Nâng cao",
                    icon: "advanced",
                    list: [
                        "Khai thác Google Display Network (GDN) hiệu quả",
                        "Chiến lược giảm CPA – tăng tỷ lệ chuyển đổi",
                        "Tối ưu & scale chiến dịch theo dữ liệu",
                        "Kỹ thuật hạn chế đơn ảo, tăng đơn chất lượng",
                        "Phân tích báo cáo để ra quyết định nhanh",
                    ],
                },
                {
                    id: 3,
                    title: "Đào tạo nội bộ",
                    icon: "internal",
                    list: [
                        "Phân tích mô hình & mục tiêu doanh nghiệp",
                        "Cung cấp tài khoản Google Ads uy tín, ổn định",
                        "Xây dựng chiến lược Google Ads phù hợp từng giai đoạn",
                        "Phân tích insight khách hàng & hành trình chuyển đổi",
                        "Tối ưu landing page, website, nội dung quảng cáo",
                    ],
                },
            ],
            cta_text: "Đăng ký ngay",
        },
        training_gallery: {
            title: "Hình ảnh các khoá học tại",
            highlighted_text: "Lumina Media Agency",
            images: [
                "/images/training/gallery-1.png",
                "/images/training/gallery-2.png",
                "/images/training/gallery-3.png",
            ],
        },
        training_instructor: {
            title: "Thông tin giảng viên",
            name: "Đỗ Hữu Biên",
            role: "Founder & CEO LUMINA MEDIA AGENCY",
            details: [
                "Trên 10 năm kinh nghiệm chạy quảng cáo Google",
                "Thiết kế lộ trình đào tạo từ cơ bản đến nâng cao",
                "Xây dựng bộ tài liệu & quy trình chuẩn hóa đào tạo đội ngũ Marketing nội bộ",
                "Mentor trực tiếp cho các học viên đạt kết quả tăng trưởng doanh thu bền vững sau đào tạo",
                "Phát triển cộng đồng học viên Digital Marketing hỗ trợ & cập nhật kiến thức liên tục",
            ],
            quote: "“Quảng cáo chỉ thực sự hiệu quả khi nó gắn liền với mục tiêu kinh doanh, được đo lường bằng dữ liệu rõ ràng và được tối ưu liên tục bằng tư duy chiến lược, chứ không phải cảm tính.”",
            image: "/images/about/team-member-1.png",
        },
        training_contact: {
            title: 'Đăng ký tư vấn khoá học <span class="text-[#AF7E2D]">Google Ads</span>',
            description: 'Để lại thông tin để đội ngũ Lumina Media Agency tư vấn lộ trình học Google Ads phù hợp nhất với bạn.',
            cta_text: 'Gửi đăng ký',
            fields: {
                name: 'Họ và tên',
                phone: 'Số điện thoại',
                email: 'Email',
                course_interest: 'Khoá học quan tâm',
                message: 'Bạn cần hỗ trợ điều gì?',
            },
            course_options: [
                { value: 'basic', label: 'Cơ bản' },
                { value: 'advanced', label: 'Nâng cao' },
                { value: 'internal', label: 'Đào tạo nội bộ' },
            ],
        },
    },
    en: {
        training_hero: {
            title: "Google Ads CONVERSION",
            description:
                "We don't teach Google Ads in theory. The Google Ads CONVERSION program at Lumina Media Agency is designed from actual multinational e-commerce operations, helping you truly understand conversion, master data, and generate real revenue from ads.",
            cta_text: "Register for free consultation",
            image: "/images/training/hero-bg.png",
        },
        training_courses: {
            title: "Courses",
            highlighted_text: "Google Ads Conversion",
            items: [
                {
                    id: 1,
                    title: "Basic",
                    icon: "basic",
                    list: [
                        "Google Ads overview & conversion mindset",
                        "Setting up proper Search campaigns & accounts",
                        "Keyword research & targeting customers",
                        "Getting familiar with Display, Video, Performance Max",
                        "Remarketing & handling ineffective ads",
                    ],
                },
                {
                    id: 2,
                    title: "Advanced",
                    icon: "advanced",
                    list: [
                        "Effectively exploiting Google Display Network (GDN)",
                        "Strategies to reduce CPA – increase conversion rate",
                        "Optimizing & scaling campaigns based on data",
                        "Techniques to limit fake orders, increase quality orders",
                        "Analyzing reports for fast decision making",
                    ],
                },
                {
                    id: 3,
                    title: "Internal Training",
                    icon: "internal",
                    list: [
                        "Analyzing business models & objectives",
                        "Providing reputable, stable Google Ads accounts",
                        "Building suitable Google Ads strategies for each stage",
                        "Analyzing customer insights & conversion journey",
                        "Optimizing landing pages, websites, ad content",
                    ],
                },
            ],
            cta_text: "Register now",
        },
        training_gallery: {
            title: "Course pictures at",
            highlighted_text: "Lumina Media Agency",
            images: [
                "/images/training/gallery-1.png",
                "/images/training/gallery-2.png",
                "/images/training/gallery-3.png",
            ],
        },
        training_instructor: {
            title: "Instructor Information",
            name: "Do Huu Bien",
            role: "Founder & CEO LUMINA MEDIA AGENCY",
            details: [
                "Over 10 years of experience running Google advertising",
                "Designing training roadmaps from basic to advanced",
                "Building documents & standardized training processes for internal Marketing teams",
                "Directly mentoring students to achieve sustainable revenue growth after training",
                "Developing a supportive Digital Marketing student community & continuously updating knowledge",
            ],
            quote: "“Advertising is only truly effective when it is associated with business goals, measured by clear data, and continuously optimized with strategic thinking, not feelings.”",
            image: "/images/training/instructor.png",
        },
        training_contact: {
            title: 'Register for <span class="text-[#AF7E2D]">Google Ads</span> course consultation',
            description: 'Leave your information and the Lumina Media Agency team will advise you on the best Google Ads learning path.',
            cta_text: 'Submit registration',
            fields: {
                name: 'Full name',
                phone: 'Phone number',
                email: 'Email',
                course_interest: 'Course of interest',
                message: 'What do you need help with?',
            },
            course_options: [
                { value: 'basic', label: 'Basic' },
                { value: 'advanced', label: 'Advanced' },
                { value: 'internal', label: 'Internal Training' },
            ],
        },
    },
};
