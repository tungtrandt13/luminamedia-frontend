import type { AboutPageData } from "@/lib/strapi";

/**
 * Mock data cho trang About Us, bám sát bản thiết kế Figma Lumina Media Agency.
 * Dùng cho route `/[locale]/about` để có thể chạy độc lập không cần Strapi.
 */
export const aboutUsMockData: Record<'vi' | 'en', AboutPageData> = {
    vi: {
        about_hero: {
            title: "Về Lumina Media Agency",
            headline: 'Hành trình 5 năm\nvươn ra <span class="text-[#AF7E2D]">thị trường\nquốc tế</span>',
            bg_image: "/images/about/about-hero-bg.png"
        },
        about_story: {
            subtitle: "Câu chuyện thương hiệu",
            title: 'Tiên phong mở rộng\nthị trường quốc tế với\n<span class="text-[#AF7E2D]">niềm tin phát triển\nbền vững</span>',
            description: "Ngay từ những ngày đầu, Lumina Media Agency lựa chọn con đường kinh doanh quốc tế, tập trung vào sản phẩm FMCG và đồ bếp gia dụng mang chất lượng quốc tế. Chúng tôi tin rằng tăng trưởng bền vững được xây dựng từ sản phẩm tốt – hệ thống vững – con người mạnh.\n\nLumina Media Agency kiên định phát triển với tư duy dài hạn, vận hành bài bản, minh bạch tài chính và lấy con người làm trọng tâm, tạo nền tảng để mở rộng thị trường và thích ứng toàn cầu.\n\n<b>Lumina Media Agency hướng đến trở thành</b>",
            commitments: [
                "Doanh nghiệp thương mại điện tử quốc tế phát triển bền vững dựa trên giá trị con người",
                "Nơi mỗi thành viên làm việc với tinh thần chủ động – trách nhiệm – dám nghĩ lớn, dám làm"
            ]
        },
        about_philosophy: {
            title: "Thị trường – Doanh nghiệp – Con người cùng phát triển bền vững",
            principles: [
                { label: "Thị trường", value: "WIN" },
                { label: "Doanh nghiệp", value: "WIN" },
                { label: "Con người", value: "WIN" }
            ],
            images: [
                "/images/about/phi-bg-aura.png"
            ]
        },
        about_core_values: {
            title: "Sứ mệnh giá trị cốt lõi",
            values: [
                {
                    id: 1,
                    title: "Phát triển con người",
                    description: "Tạo môi trường học tập, đào tạo kỹ năng, chia sẻ kinh nghiệm để cùng nhau vươn xa và đạt đến sự xuất sắc."
                },
                {
                    id: 2,
                    title: "Biết ơn & Ghi nhận",
                    description: "Trân trọng mọi đóng góp. Lời cảm ơn và ghi nhận chân thành là nền tảng của sự gắn kết đội ngũ."
                },
                {
                    id: 3,
                    title: "Thẳng thắn",
                    description: "Nói thẳng vào vấn đề, lắng nghe không phán xét, phản biện vì sự thật và mục tiêu chung."
                },
                {
                    id: 4,
                    title: "Tốc độ",
                    description: "Hành động nhanh, triển khai nhanh, thử nghiệm nhanh. Sai nhanh – sửa nhanh – cải tiến liên tục."
                },
                {
                    id: 5,
                    title: "Chủ động",
                    description: "Làm việc với tâm thế làm chủ, tự chịu trách nhiệm, chủ động giải pháp và hỗ trợ đồng đội."
                },
                {
                    id: 6,
                    title: "Dám nghĩ lớn, dám làm nhỏ",
                    description: "Nuôi dưỡng khát vọng toàn cầu, bắt đầu từ hành động nhỏ, quyết liệt và thực tế."
                }
            ]
        },
        about_team: {
            title: "Được dẫn dắt bởi các chuyên gia",
            members: [
                {
                    id: 1,
                    name: "Đỗ Hữu Biên",
                    role: "Founder & Growth Strategist",
                    avatar: "/images/about/team-member-1.png"
                },
                {
                    id: 2,
                    name: "Đào Công Được",
                    role: "Leader CVC2",
                    avatar: "/images/about/team-member-2.png"
                },
                {
                    id: 3,
                    name: "Nguyễn Duy Long",
                    role: "Leader VML02",
                    avatar: "/images/about/team-member-3.png"
                },
                {
                    id: 4,
                    name: "Nguyễn Khắc Duy",
                    role: "Leader VSE03",
                    avatar: "/images/about/team-member-4.png"
                }
            ]
        },
        about_testimonials: {
            title: "Khách hàng nói gì về\nLumina Media Agency",
            reviews: [
                {
                    id: 1,
                    quote: "“Lumina Media Agency có đội ngũ trẻ, chủ động và làm việc rất trách nhiệm. Quá trình phối hợp rõ ràng, phản hồi nhanh và luôn tập trung vào hiệu quả thực tế cho doanh nghiệp.”",
                    author: "Mr. Minh Hoàng",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: ""
                },
                {
                    id: 2,
                    quote: "Chúng tôi đánh giá cao tư duy vận hành và khả năng thích ứng thị trường quốc tế của Lumina Media Agency. Mọi hạng mục đều được triển khai bài bản và minh bạch.",
                    author: "Ms. Thu Trang",
                    role: "Business Development Manager – Retail Group",
                    avatar: ""
                },
                {
                    id: 3,
                    quote: "Lumina Media Agency không chỉ triển khai công việc mà còn đồng hành tư vấn, giúp đội ngũ nội bộ hiểu rõ hơn về thị trường và hướng phát triển dài hạn.",
                    author: "Mr. Đức Anh",
                    role: "Founder – Online Brand",
                    avatar: ""
                }
            ]
        },
        about_contact: {
            title: "Hãy để Lumina Media Agency\nhiểu hơn về bạn",
            description: "Lumina Media Agency luôn sẵn sàng lắng nghe và cùng bạn xây dựng giải pháp quảng cáo & thương mại điện tử phù hợp với mục tiêu kinh doanh.",
            cta_text: "Gửi thông tin"
        }
    },
    en: {
        about_hero: {
            title: "About Lumina Media Agency",
            headline: 'A 5-year journey\nreaching out to the\n<span class="text-[#AF7E2D]">international market</span>',
            bg_image: "/images/about/about-hero-bg.png"
        },
        about_story: {
            subtitle: "Brand story",
            title: 'Pioneering international\nmarket expansion with\n<span class="text-[#AF7E2D]">belief in sustainable\ndevelopment</span>',
            description: "From the early days, Lumina Media Agency chose the international business path, focusing on FMCG products and household kitchenware of international quality. We believe sustainable growth is built on good products – a strong system – capable people.\n\nLumina Media Agency consistently develops with long-term thinking, systematic operation, financial transparency, and a people-centric approach, creating a foundation for market expansion and global adaptation.\n\n<b>Lumina Media Agency aims to become</b>",
            commitments: [
                "A sustainable international e-commerce enterprise based on human values",
                "A place where every member works with a proactive spirit - responsibility - dare to think big, dare to do"
            ]
        },
        about_philosophy: {
            title: "Market - Enterprise - People growing sustainably together",
            principles: [
                { label: "Market", value: "WIN" },
                { label: "Enterprise", value: "WIN" },
                { label: "People", value: "WIN" }
            ],
            images: [
                "/images/about/phi-bg-aura.png",
                "/images/about/phi-bg-aura.png"
            ]
        },
        about_core_values: {
            title: "Mission & Core Values",
            values: [
                {
                    id: 1,
                    title: "People Development",
                    description: "Create a learning environment, train skills, and share experiences to reach further and achieve excellence together."
                },
                {
                    id: 2,
                    title: "Gratitude & Recognition",
                    description: "Appreciate all contributions. Sincere thanks and recognition are the foundation of team cohesion."
                },
                {
                    id: 3,
                    title: "Straightforwardness",
                    description: "Speak directly to the point, listen without judgment, argue for the truth and common goals."
                },
                {
                    id: 4,
                    title: "Speed",
                    description: "Act fast, deploy fast, test fast. Fail fast - fix fast - continuously improve."
                },
                {
                    id: 5,
                    title: "Proactiveness",
                    description: "Work with an ownership mindset, take self-responsibility, proactively address solutions and support teammates."
                },
                {
                    id: 6,
                    title: "Think big, act small",
                    description: "Nurture global aspirations, starting from small, decisive, and practical actions."
                }
            ]
        },
        about_team: {
            title: "Led by Experts",
            members: [
                {
                    id: 1,
                    name: "Do Huu Bien",
                    role: "Founder & Growth Strategist",
                    avatar: "/images/about/team-member-1.png"
                },
                {
                    id: 2,
                    name: "Dao Cong Duoc",
                    role: "Leader CVC2",
                    avatar: "/images/about/team-member-2.png"
                },
                {
                    id: 3,
                    name: "Nguyen Duy Long",
                    role: "Leader VML02",
                    avatar: "/images/about/team-member-3.png"
                },
                {
                    id: 4,
                    name: "Nguyen Khac Duy",
                    role: "Leader VSE03",
                    avatar: "/images/about/team-member-4.png"
                }
            ]
        },
        about_testimonials: {
            title: "What Clients Say About\nLumina Media Agency",
            reviews: [
                {
                    id: 1,
                    quote: "\"Lumina Media Agency has a young, proactive, and highly accountable team. The coordination process is clear, feedback is fast, and they always focus on practical efficiency for the business.\"",
                    author: "Mr. Minh Hoang",
                    role: "E-commerce Manager – FMCG Brand",
                    avatar: ""
                },
                {
                    id: 2,
                    quote: "We highly value Lumina Media Agency's operational mindset and ability to adapt to international markets. All items are deployed methodically and transparently.",
                    author: "Ms. Thu Trang",
                    role: "Business Development Manager – Retail Group",
                    avatar: ""
                },
                {
                    id: 3,
                    quote: "Lumina Media Agency not only implements work but also accompanies in consulting, helping the internal team better understand the market and long-term development direction.",
                    author: "Mr. Duc Anh",
                    role: "Founder – Online Brand",
                    avatar: ""
                }
            ]
        },
        about_contact: {
            title: "Let Lumina Media Agency\nbetter understand you",
            description: "Lumina Media Agency is always ready to listen and build advertising & e-commerce solutions tailored to your business goals.",
            cta_text: "Submit Infomation"
        }
    }
};
