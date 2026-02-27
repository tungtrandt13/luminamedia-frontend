export interface CareersHero {
  title: string;
  description: string;
  cta_text: string;
  image: string;
}

export interface CareersJob {
  id: number;
  title: string;
  company: string;
  salary: string;
  experience: string;
  location: string;
  deadline: string;
}

export interface CareersJobsSection {
  title: string;
  jobs: CareersJob[];
}

export interface CareersBenefitsSection {
  title: string;
  description: string;
  details_title: string;
  details: string[];
}

export interface CareersCoreValue {
  id: number;
  title: string;
  description: string;
}

export interface CareersCoreValuesSection {
  title: string;
  values: CareersCoreValue[];
}

export interface CareersApplySection {
  title: string;
  subtitle: string;
  cta_text: string;
  fields: {
    name: string;
    phone: string;
    cv_link: string;
    email: string;
    message: string;
  };
}

export interface CareersPageData {
  hero: CareersHero;
  jobs: CareersJobsSection;
  benefits: CareersBenefitsSection;
  core_values: CareersCoreValuesSection;
  apply: CareersApplySection;
}

export const careersMockData: Record<"vi" | "en", CareersPageData> = {
  vi: {
    hero: {
      title: "Cùng VISS International bứt phá thị trường toàn cầu",
      description:
        "VISS International tìm kiếm những cá nhân dám làm, dám thử và dám chịu trách nhiệm. Nơi bạn học nhanh, làm thật và tạo kết quả thực trên thị trường toàn cầu.",
      cta_text: "Đăng ký tư vấn miễn phí",
      // Hero image for careers page (export from Figma and save to this path)
      image: "/images/careers/hero.jpg",
    },
    jobs: {
      title: "Các vị trí đang tuyển",
      jobs: [
        {
          id: 1,
          title: "Marketing Executive",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "20 – 28 triệu",
          experience: "5 – 10 năm",
          location: "Hà Nội",
          deadline: "30/09/2025",
        },
        {
          id: 2,
          title: "Performance Marketing",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "18 – 25 triệu",
          experience: "3 – 6 năm",
          location: "Hà Nội",
          deadline: "15/10/2025",
        },
        {
          id: 3,
          title: "Content Creator",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "12 – 18 triệu",
          experience: "2 – 4 năm",
          location: "Hà Nội",
          deadline: "30/10/2025",
        },
        {
          id: 4,
          title: "Account Executive",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "15 – 22 triệu",
          experience: "2 – 5 năm",
          location: "Hà Nội",
          deadline: "05/11/2025",
        },
        {
          id: 5,
          title: "Business Development",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "15 – 30 triệu",
          experience: "3 – 8 năm",
          location: "Hà Nội",
          deadline: "20/11/2025",
        },
        {
          id: 6,
          title: "Designer",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "12 – 20 triệu",
          experience: "2 – 5 năm",
          location: "Hà Nội",
          deadline: "30/11/2025",
        },
        {
          id: 7,
          title: "HR Executive",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "12 – 18 triệu",
          experience: "2 – 4 năm",
          location: "Hà Nội",
          deadline: "15/12/2025",
        },
        {
          id: 8,
          title: "Operation Executive",
          company: "CÔNG TY TNHH\nVISS INTERNATIONAL",
          salary: "12 – 18 triệu",
          experience: "1 – 3 năm",
          location: "Hà Nội",
          deadline: "31/12/2025",
        },
      ],
    },
    benefits: {
      title: "Lợi ích khi làm việc tại VISS International",
      description:
        "VISS International lấy con người làm trung tâm, xây dựng chính sách đãi ngộ minh bạch – công bằng – cạnh tranh.\n\nChúng tôi tạo môi trường làm việc trẻ trung, được trao quyền, nhiều cơ hội phát triển và thăng tiến lâu dài cùng tổ chức.",
      details_title: "Chi tiết đãi ngộ",
      details: [
        "Thu nhập cạnh tranh, linh hoạt theo vị trí và năng lực",
        "Thưởng theo hiệu quả & dự án, thưởng lễ Tết, lương tháng 13",
        "Phụ cấp theo chính sách công ty",
        "Phúc lợi đầy đủ: BHXH, BHYT theo Luật Lao động",
        "Chế độ làm việc linh hoạt, có ngày làm việc online",
        "Cơ hội đồng hành dài hạn: tham gia đầu tư dự án, ESOP/cổ phần",
        "Hoạt động nội bộ: team building, nghỉ dưỡng, phúc lợi hằng năm",
        "Thử việc: theo quy định công ty",
      ],
    },
    core_values: {
      title: "Đi theo giá trị cốt lõi",
      values: [
        {
          id: 1,
          title: "Phát triển con người",
          description:
            "Tạo môi trường học tập, đào tạo kỹ năng, chia sẻ kinh nghiệm để cùng nhau vươn xa và đạt đến sự xuất sắc.",
        },
        {
          id: 2,
          title: "Biết ơn & Ghi nhận",
          description:
            "Trân trọng mọi đóng góp. Lời cảm ơn và ghi nhận chân thành là nền tảng của sự gắn kết đội ngũ.",
        },
        {
          id: 3,
          title: "Thẳng thắn",
          description:
            "Nói thẳng vào vấn đề, lắng nghe không phán xét, phản biện vì sự thật và mục tiêu chung.",
        },
        {
          id: 4,
          title: "Tốc độ",
          description:
            "Hành động nhanh, triển khai nhanh, thử nghiệm nhanh. Sai nhanh – sửa nhanh – cải tiến liên tục.",
        },
        {
          id: 5,
          title: "Chủ động",
          description:
            "Làm việc với tâm thế làm chủ, tự chịu trách nhiệm, chủ động giải pháp và hỗ trợ đồng đội.",
        },
        {
          id: 6,
          title: "Dám nghĩ lớn, dám làm nhỏ",
          description:
            "Nuôi dưỡng khát vọng toàn cầu, bắt đầu từ hành động nhỏ, quyết liệt và thực tế.",
        },
      ],
    },
    apply: {
      title: "Hãy để lại thông tin và nhu cầu của bạn.",
      subtitle: "Đội ngũ VISSECOM sẽ liên hệ và hỗ trợ trong thời gian sớm nhất.",
      cta_text: "Đăng ký",
      fields: {
        name: "Họ và tên",
        phone: "Số điện thoại",
        cv_link: "Link CV",
        email: "Email",
        message: "Nội dung",
      },
    },
  },
  en: {
    hero: {
      title: "Join VISS International to break into global markets",
      description:
        "VISS International is looking for people who dare to do, dare to try, and take ownership. A place where you learn fast, execute for real, and create real outcomes in global markets.",
      cta_text: "Get a free consultation",
      image: "/images/careers/hero.png",
    },
    jobs: {
      title: "Open positions",
      jobs: [
        {
          id: 1,
          title: "Marketing Executive",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$800 – $1,100",
          experience: "5 – 10 years",
          location: "Hanoi",
          deadline: "30/09/2025",
        },
        {
          id: 2,
          title: "Performance Marketing",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$750 – $1,000",
          experience: "3 – 6 years",
          location: "Hanoi",
          deadline: "15/10/2025",
        },
        {
          id: 3,
          title: "Content Creator",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$500 – $750",
          experience: "2 – 4 years",
          location: "Hanoi",
          deadline: "30/10/2025",
        },
        {
          id: 4,
          title: "Account Executive",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$650 – $900",
          experience: "2 – 5 years",
          location: "Hanoi",
          deadline: "05/11/2025",
        },
        {
          id: 5,
          title: "Business Development",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$650 – $1,200",
          experience: "3 – 8 years",
          location: "Hanoi",
          deadline: "20/11/2025",
        },
        {
          id: 6,
          title: "Designer",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$500 – $900",
          experience: "2 – 5 years",
          location: "Hanoi",
          deadline: "30/11/2025",
        },
        {
          id: 7,
          title: "HR Executive",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$500 – $750",
          experience: "2 – 4 years",
          location: "Hanoi",
          deadline: "15/12/2025",
        },
        {
          id: 8,
          title: "Operation Executive",
          company: "VISS INTERNATIONAL\nCO., LTD",
          salary: "$500 – $750",
          experience: "1 – 3 years",
          location: "Hanoi",
          deadline: "31/12/2025",
        },
      ],
    },
    benefits: {
      title: "Benefits of working at VISS International",
      description:
        "We put people at the center, building transparent, fair and competitive policies.\n\nYou will work in a young, empowered environment with long-term growth and advancement opportunities.",
      details_title: "Compensation details",
      details: [
        "Competitive income, flexible based on role and capability",
        "Performance & project bonuses, holiday bonuses, 13th-month salary",
        "Allowances according to company policy",
        "Full benefits: social and health insurance per labor law",
        "Flexible working policy, including remote days",
        "Long-term partnership: project investment, ESOP/shares",
        "Internal activities: team building, retreats, annual benefits",
        "Probation: per company policy",
      ],
    },
    core_values: {
      title: "Live by our core values",
      values: [
        {
          id: 1,
          title: "People development",
          description:
            "Build a learning environment with training, skill development and shared experience to reach excellence together.",
        },
        {
          id: 2,
          title: "Gratitude & recognition",
          description:
            "We value contributions. Sincere gratitude and recognition are the foundation of team bonding.",
        },
        {
          id: 3,
          title: "Candor",
          description:
            "Be direct, listen without judgment, and debate for truth and shared goals.",
        },
        {
          id: 4,
          title: "Speed",
          description:
            "Move fast, ship fast, test fast. Fail fast – fix fast – improve continuously.",
        },
        {
          id: 5,
          title: "Proactivity",
          description:
            "Work with ownership, take responsibility, proactively solve problems and support teammates.",
        },
        {
          id: 6,
          title: "Think big, start small",
          description:
            "Nurture global ambition, start with small actions, execute decisively and pragmatically.",
        },
      ],
    },
    apply: {
      title: "Leave your info and needs.",
      subtitle: "Our team will contact and support you as soon as possible.",
      cta_text: "Submit",
      fields: {
        name: "Full name",
        phone: "Phone number",
        cv_link: "CV link",
        email: "Email",
        message: "Message",
      },
    },
  },
};

