export interface CareersHero {
  title: string;
  description: string;
  cta_text: string;
  image: string;
}

export interface CareersJob {
  id: number;
  slug: string;
  title: string;
  company: string;
  salary: string;
  experience: string;
  location: string;
  deadline: string;
  type?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
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
      title: "Cùng Lumina Media Agency bứt phá thị trường toàn cầu",
      description:
        "Lumina Media Agency tìm kiếm những cá nhân dám làm, dám thử và dám chịu trách nhiệm. Nơi bạn học nhanh, làm thật và tạo kết quả thực trên thị trường toàn cầu.",
      cta_text: "Đăng ký tư vấn miễn phí",
      // Hero image for careers page (export from Figma and save to this path)
      image: "/images/careers/hero.jpg",
    },
    jobs: {
      title: "Các vị trí đang tuyển",
      jobs: [
        {
          id: 1,
          slug: "marketing-executive",
          title: "Marketing Executive",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "20 – 28 triệu",
          experience: "5 – 10 năm",
          location: "Hà Nội",
          deadline: "30/09/2025",
          type: "Toàn thời gian",
          description: "Lumina Media Agency đang tìm kiếm Marketing Executive tài năng, có khả năng xây dựng và triển khai chiến lược marketing tổng thể cho các thị trường quốc tế. Bạn sẽ là cầu nối giữa dữ liệu thị trường và các chiến dịch sáng tạo, trực tiếp chịu trách nhiệm về hiệu quả tăng trưởng thương hiệu.",
          responsibilities: [
            "Lên kế hoạch và triển khai chiến lược marketing đa kênh (Digital, Content, Brand)",
            "Phân tích thị trường, đối thủ cạnh tranh và hành vi người dùng để đề xuất giải pháp phù hợp",
            "Quản lý ngân sách marketing, tối ưu chi phí và đo lường ROI",
            "Phối hợp với đội Sales để xây dựng pipeline và nâng cao chất lượng lead",
            "Báo cáo kết quả, đề xuất cải tiến theo chu kỳ",
          ],
          requirements: [
            "5 – 10 năm kinh nghiệm Marketing, ưu tiên ngành B2B hoặc thương mại quốc tế",
            "Thành thạo các công cụ: Google Analytics, Meta Ads, HubSpot hoặc tương đương",
            "Tư duy chiến lược, khả năng phân tích số liệu và trình bày thuyết phục",
            "Tiếng Anh giao tiếp tốt (đọc hiểu tài liệu, viết email chuyên nghiệp)",
            "Chủ động, có tinh thần ownership cao",
          ],
          benefits: [
            "Thu nhập 20 – 28 triệu VNĐ/tháng (thỏa thuận theo năng lực)",
            "Thưởng hiệu suất quý / năm, lương tháng 13",
            "BHXH, BHYT đầy đủ theo Luật Lao động",
            "Làm việc linh hoạt, có ngày remote",
            "Cơ hội ESOP / tham gia đầu tư dự án",
          ],
        },
        {
          id: 2,
          slug: "performance-marketing",
          title: "Performance Marketing",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "18 – 25 triệu",
          experience: "3 – 6 năm",
          location: "Hà Nội",
          deadline: "15/10/2025",
          type: "Toàn thời gian",
          description: "Bạn sẽ phụ trách toàn bộ hệ sinh thái quảng cáo trả phí — từ Google Ads, Meta Ads đến TikTok Ads — với mục tiêu tối ưu chi phí chuyển đổi và mở rộng tệp khách hàng tiềm năng cho các dịch vụ của Lumina Media Agency.",
          responsibilities: [
            "Lên kế hoạch và quản lý toàn bộ chiến dịch quảng cáo paid media",
            "Tối ưu CPA, ROAS theo từng giai đoạn và mục tiêu kinh doanh",
            "Phân tích dữ liệu chuyển đổi, xây dựng báo cáo A/B testing",
            "Phối hợp với Content & Design để sản xuất creative hiệu quả",
            "Theo dõi xu hướng thuật toán và cập nhật chiến lược kịp thời",
          ],
          requirements: [
            "3 – 6 năm kinh nghiệm vận hành quảng cáo Google, Meta, TikTok",
            "Thành thạo Google Ads, Meta Business Manager, TikTok Ads Manager",
            "Hiểu sâu về tracking pixel, GA4, conversion API",
            "Tư duy số liệu, thành thạo Excel/Sheets",
            "Chủ động đề xuất và thử nghiệm ý tưởng mới",
          ],
          benefits: [
            "Thu nhập 18 – 25 triệu VNĐ/tháng",
            "Thưởng performance theo KPI chiến dịch",
            "Môi trường học hỏi nhanh, tiếp cận ngân sách quảng cáo thực",
            "BHXH, BHYT đầy đủ",
            "Lịch làm việc linh hoạt",
          ],
        },
        {
          id: 3,
          slug: "content-creator",
          title: "Content Creator",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "12 – 18 triệu",
          experience: "2 – 4 năm",
          location: "Hà Nội",
          deadline: "30/10/2025",
          type: "Toàn thời gian",
          description: "Bạn là người kể chuyện thương hiệu — biến những số liệu khô khan và dịch vụ phức tạp thành nội dung hấp dẫn, dễ tiêu thụ trên đa nền tảng. Từ bài viết dài đến short-form video, bạn có khả năng định hình giọng nói của Lumina Media Agency.",
          responsibilities: [
            "Sản xuất nội dung đa dạng: blog, social media, script video, email",
            "Nghiên cứu từ khóa và tối ưu SEO cho nội dung",
            "Phối hợp với đội Design để tạo visual content phù hợp",
            "Đề xuất ý tưởng chủ đề nội dung theo trend và nhu cầu khách hàng",
            "Theo dõi hiệu suất nội dung và cải tiến liên tục",
          ],
          requirements: [
            "2 – 4 năm kinh nghiệm sáng tạo nội dung",
            "Viết tốt cả tiếng Việt và tiếng Anh",
            "Hiểu biết cơ bản về SEO Content",
            "Có portfolio nội dung đa dạng",
            "Tư duy sáng tạo, nhạy bén với xu hướng",
          ],
          benefits: [
            "Thu nhập 12 – 18 triệu VNĐ/tháng",
            "Môi trường sáng tạo, tự do thử nghiệm",
            "BHXH, BHYT đầy đủ",
            "Cơ hội phát triển lên vị trí Content Lead",
          ],
        },
        {
          id: 4,
          slug: "account-executive",
          title: "Account Executive",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "15 – 22 triệu",
          experience: "2 – 5 năm",
          location: "Hà Nội",
          deadline: "05/11/2025",
          type: "Toàn thời gian",
          description: "Bạn là người trực tiếp xây dựng và duy trì quan hệ với khách hàng doanh nghiệp. Vai trò này đòi hỏi khả năng tư vấn chuyên sâu, thấu hiểu nhu cầu và chuyển đổi cơ hội thành hợp đồng thực sự.",
          responsibilities: [
            "Tìm kiếm, tiếp cận và xây dựng quan hệ khách hàng B2B",
            "Tư vấn, demo và thuyết trình giải pháp cho đối tác tiềm năng",
            "Quản lý pipeline CRM và báo cáo tiến độ deals",
            "Hỗ trợ onboarding khách hàng mới và chăm sóc sau ký hợp đồng",
            "Phối hợp với đội Marketing để tối ưu nguồn lead",
          ],
          requirements: [
            "2 – 5 năm kinh nghiệm Sales/Account Management B2B",
            "Kỹ năng giao tiếp và đàm phán tốt",
            "Thành thạo CRM (HubSpot, Salesforce hoặc tương đương)",
            "Tiếng Anh tốt là lợi thế",
            "Mục tiêu rõ ràng, tư duy kết quả",
          ],
          benefits: [
            "Lương cứng 15 – 22 triệu + commission không giới hạn",
            "Thưởng theo doanh số và hiệu suất team",
            "BHXH, BHYT đầy đủ",
            "Lộ trình thăng tiến rõ ràng",
          ],
        },
        {
          id: 5,
          slug: "business-development",
          title: "Business Development",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "15 – 30 triệu",
          experience: "3 – 8 năm",
          location: "Hà Nội",
          deadline: "20/11/2025",
          type: "Toàn thời gian",
          description: "Vai trò Business Development tại Lumina Media Agency không đơn thuần là bán hàng — bạn là người định hình hướng tăng trưởng mới, khám phá thị trường tiềm năng và xây dựng quan hệ đối tác chiến lược ở phạm vi quốc tế.",
          responsibilities: [
            "Nghiên cứu và đề xuất cơ hội thị trường mới trong và ngoài nước",
            "Xây dựng quan hệ đối tác chiến lược với các doanh nghiệp, tổ chức liên quan",
            "Phát triển và thực thi kế hoạch kinh doanh theo từng thị trường mục tiêu",
            "Phối hợp với ban lãnh đạo trong các quyết định mở rộng và M&A",
            "Báo cáo định kỳ về tình hình thị trường và tiến độ triển khai",
          ],
          requirements: [
            "3 – 8 năm kinh nghiệm Business Development hoặc Strategic Partnerships",
            "Mạng lưới quan hệ trong lĩnh vực marketing, thương mại quốc tế",
            "Tư duy chiến lược, khả năng nhìn xa và hành động cụ thể",
            "Tiếng Anh thành thạo (đọc, viết, thuyết trình)",
            "Chịu được áp lực và làm việc độc lập hiệu quả",
          ],
          benefits: [
            "Thu nhập 15 – 30 triệu (thỏa thuận theo kinh nghiệm)",
            "Commission / bonus khi đạt mốc partnership",
            "Cơ hội ESOP và đồng hành dài hạn",
            "BHXH, BHYT đầy đủ",
          ],
        },
        {
          id: 6,
          slug: "designer",
          title: "Designer",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "12 – 20 triệu",
          experience: "2 – 5 năm",
          location: "Hà Nội",
          deadline: "30/11/2025",
          type: "Toàn thời gian",
          description: "Bạn là người biến ý tưởng thành hình ảnh — từ thiết kế landing page, banner quảng cáo đến bộ nhận diện thương hiệu cho các thị trường nước ngoài. Bạn không chỉ đẹp mà còn hiểu marketing.",
          responsibilities: [
            "Thiết kế visual cho các kênh digital: social, landing page, email, ads",
            "Xây dựng và duy trì bộ nhận diện thương hiệu nhất quán",
            "Phối hợp với Content và Marketing để đảm bảo hiệu quả truyền thông",
            "Tạo template, hệ thống thiết kế tái sử dụng",
            "Đề xuất ý tưởng sáng tạo chủ động",
          ],
          requirements: [
            "2 – 5 năm kinh nghiệm thiết kế UI/UX hoặc Graphic Design",
            "Thành thạo Figma, Adobe Creative Suite",
            "Portfolio đa dạng — ưu tiên có dự án digital marketing",
            "Hiểu biết về nguyên tắc UX và conversion design",
            "Cầu thị, chịu feedback và cải tiến nhanh",
          ],
          benefits: [
            "Thu nhập 12 – 20 triệu VNĐ/tháng",
            "Môi trường sáng tạo, nhiều dự án đa dạng",
            "BHXH, BHYT đầy đủ",
            "Phát triển lên Design Lead",
          ],
        },
        {
          id: 7,
          slug: "hr-executive",
          title: "HR Executive",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "12 – 18 triệu",
          experience: "2 – 4 năm",
          location: "Hà Nội",
          deadline: "15/12/2025",
          type: "Toàn thời gian",
          description: "HR Executive tại Lumina Media Agency không chỉ tuyển dụng — bạn là người xây dựng văn hóa tổ chức, đảm bảo đội ngũ hoạt động hiệu quả và mỗi thành viên đều cảm thấy được ghi nhận.",
          responsibilities: [
            "Tuyển dụng: đăng tin, sàng lọc, phỏng vấn và onboarding nhân sự",
            "Quản lý hồ sơ, hợp đồng và hệ thống BHXH, BHYT",
            "Tổ chức các hoạt động nội bộ, team building",
            "Hỗ trợ xây dựng chính sách đánh giá hiệu suất và lương thưởng",
            "Theo dõi chỉ số nhân sự và báo cáo định kỳ",
          ],
          requirements: [
            "2 – 4 năm kinh nghiệm HR Generalist",
            "Hiểu rõ Luật Lao động Việt Nam",
            "Kỹ năng giao tiếp và xây dựng quan hệ tốt",
            "Cẩn thận, có tinh thần trách nhiệm cao",
            "Tiếng Anh cơ bản là lợi thế",
          ],
          benefits: [
            "Thu nhập 12 – 18 triệu VNĐ/tháng",
            "BHXH, BHYT đầy đủ",
            "Môi trường làm việc trẻ trung, bình đẳng",
            "Thưởng Tết và lương tháng 13",
          ],
        },
        {
          id: 8,
          slug: "operation-executive",
          title: "Operation Executive",
          company: "CÔNG TY TNHH\nLUMINA MEDIA AGENCY",
          salary: "12 – 18 triệu",
          experience: "1 – 3 năm",
          location: "Hà Nội",
          deadline: "31/12/2025",
          type: "Toàn thời gian",
          description: "Bạn là người đảm bảo guồng máy vận hành của Lumina Media Agency hoạt động trơn tru — từ quy trình nội bộ đến điều phối giữa các bộ phận, giúp đội ngũ tập trung vào những việc tạo ra giá trị lớn nhất.",
          responsibilities: [
            "Theo dõi và tối ưu quy trình vận hành nội bộ",
            "Điều phối công việc liên phòng ban",
            "Hỗ trợ triển khai dự án, theo dõi tiến độ và báo cáo",
            "Đề xuất cải tiến quy trình theo hướng hiệu quả và tự động hóa",
            "Xử lý các công việc hành chính, hậu cần theo yêu cầu",
          ],
          requirements: [
            "1 – 3 năm kinh nghiệm Operations hoặc Project Coordination",
            "Tư duy hệ thống, có khả năng tổ chức tốt",
            "Thành thạo Google Workspace và các công cụ quản lý dự án",
            "Giao tiếp rõ ràng, phối hợp hiệu quả",
            "Chủ động, linh hoạt trong môi trường thay đổi nhanh",
          ],
          benefits: [
            "Thu nhập 12 – 18 triệu VNĐ/tháng",
            "BHXH, BHYT đầy đủ",
            "Học hỏi đa lĩnh vực trong môi trường startup quốc tế",
            "Thưởng Tết và lương tháng 13",
          ],
        },
      ],
    },
    benefits: {
      title: "Lợi ích khi làm việc tại Lumina Media Agency",
      description:
        "Lumina Media Agency lấy con người làm trung tâm, xây dựng chính sách đãi ngộ minh bạch – công bằng – cạnh tranh.\n\nChúng tôi tạo môi trường làm việc trẻ trung, được trao quyền, nhiều cơ hội phát triển và thăng tiến lâu dài cùng tổ chức.",
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
      subtitle: "Đội ngũ Lumina Media Agency sẽ liên hệ và hỗ trợ trong thời gian sớm nhất.",
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
      title: "Join Lumina Media Agency to break into global markets",
      description:
        "Lumina Media Agency is looking for people who dare to do, dare to try, and take ownership. A place where you learn fast, execute for real, and create real outcomes in global markets.",
      cta_text: "Get a free consultation",
      image: "/images/careers/hero.png",
    },
    jobs: {
      title: "Open positions",
      jobs: [
        {
          id: 1,
          slug: "marketing-executive",
          title: "Marketing Executive",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$800 – $1,100",
          experience: "5 – 10 years",
          location: "Hanoi",
          deadline: "30/09/2025",
          type: "Full-time",
          description: "Lumina Media Agency is looking for a talented Marketing Executive to build and execute integrated marketing strategies across international markets. You will bridge market data with creative campaigns and own brand growth outcomes.",
          responsibilities: [
            "Plan and execute multi-channel marketing strategies (Digital, Content, Brand)",
            "Analyze market conditions, competitors and user behavior to propose suitable solutions",
            "Manage marketing budget, optimize costs and measure ROI",
            "Collaborate with Sales to build pipeline and improve lead quality",
            "Report on results and propose improvements on a regular cycle",
          ],
          requirements: [
            "5 – 10 years of marketing experience, preferably in B2B or international trade",
            "Proficient in: Google Analytics, Meta Ads, HubSpot or equivalent",
            "Strategic thinking, strong data analysis and persuasive presentation skills",
            "Good English – reading documents, writing professional emails",
            "Proactive with high ownership mindset",
          ],
          benefits: [
            "Salary $800 – $1,100/month (negotiable based on capability)",
            "Quarterly/annual performance bonuses, 13th-month salary",
            "Full social and health insurance",
            "Flexible working schedule including remote days",
            "ESOP / project investment opportunity",
          ],
        },
        {
          id: 2,
          slug: "performance-marketing",
          title: "Performance Marketing",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$750 – $1,000",
          experience: "3 – 6 years",
          location: "Hanoi",
          deadline: "15/10/2025",
          type: "Full-time",
          description: "You will own the entire paid media ecosystem — from Google Ads and Meta Ads to TikTok Ads — with the goal of optimizing CPA and expanding qualified leads for Lumina Media Agency's services.",
          responsibilities: [
            "Plan and manage all paid media campaigns",
            "Optimize CPA and ROAS according to business goals",
            "Analyze conversion data and build A/B testing reports",
            "Collaborate with Content & Design to produce effective creatives",
            "Monitor algorithm trends and update strategies accordingly",
          ],
          requirements: [
            "3 – 6 years running Google, Meta, TikTok ad campaigns",
            "Proficient in Google Ads, Meta Business Manager, TikTok Ads Manager",
            "Deep understanding of pixel tracking, GA4, Conversion API",
            "Data-driven mindset, proficient in Excel/Sheets",
            "Proactively propose and test new ideas",
          ],
          benefits: [
            "Salary $750 – $1,000/month",
            "Performance bonus tied to campaign KPIs",
            "Fast-learning environment with real ad budget exposure",
            "Full social and health insurance",
            "Flexible working schedule",
          ],
        },
        {
          id: 3,
          slug: "content-creator",
          title: "Content Creator",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$500 – $750",
          experience: "2 – 4 years",
          location: "Hanoi",
          deadline: "30/10/2025",
          type: "Full-time",
          description: "You are the brand's storyteller — turning complex services and raw data into compelling, digestible content across multiple platforms. From long-form articles to short-form video scripts, you will shape Lumina Media Agency's brand voice.",
          responsibilities: [
            "Produce diverse content: blogs, social media, video scripts, emails",
            "Research keywords and optimize content for SEO",
            "Coordinate with Design to create matching visual content",
            "Proactively pitch content topics based on trends and customer needs",
            "Monitor content performance and iterate",
          ],
          requirements: [
            "2 – 4 years of content creation experience",
            "Strong writing in both Vietnamese and English",
            "Basic understanding of SEO Content",
            "Diverse content portfolio",
            "Creative mindset, sharp trend awareness",
          ],
          benefits: [
            "Salary $500 – $750/month",
            "Creative environment with freedom to experiment",
            "Full social and health insurance",
            "Growth path to Content Lead",
          ],
        },
        {
          id: 4,
          slug: "account-executive",
          title: "Account Executive",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$650 – $900",
          experience: "2 – 5 years",
          location: "Hanoi",
          deadline: "05/11/2025",
          type: "Full-time",
          description: "You directly build and maintain relationships with enterprise clients. This role demands deep consultative skills, understanding needs and converting opportunities into actual contracts.",
          responsibilities: [
            "Source, approach and build B2B client relationships",
            "Consult, demo and present solutions to potential partners",
            "Manage CRM pipeline and report on deal progress",
            "Support new client onboarding and post-contract care",
            "Collaborate with Marketing to optimize lead sources",
          ],
          requirements: [
            "2 – 5 years of B2B Sales/Account Management experience",
            "Strong communication and negotiation skills",
            "Proficient with CRM tools (HubSpot, Salesforce or equivalent)",
            "Good English is a plus",
            "Results-driven mindset",
          ],
          benefits: [
            "Base salary $650 – $900 + unlimited commission",
            "Performance and team revenue bonuses",
            "Full social and health insurance",
            "Clear career advancement path",
          ],
        },
        {
          id: 5,
          slug: "business-development",
          title: "Business Development",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$650 – $1,200",
          experience: "3 – 8 years",
          location: "Hanoi",
          deadline: "20/11/2025",
          type: "Full-time",
          description: "Business Development at Lumina Media Agency goes beyond sales — you define new growth directions, explore potential markets and build strategic partnerships at an international scale.",
          responsibilities: [
            "Research and propose new market opportunities domestically and internationally",
            "Develop strategic partnerships with relevant businesses and organizations",
            "Build and execute business plans for each target market",
            "Support leadership in expansion decisions",
            "Provide regular market intelligence and implementation reports",
          ],
          requirements: [
            "3 – 8 years of Business Development or Strategic Partnerships experience",
            "Network in marketing, international trade",
            "Strategic thinking with ability to see big picture and act concretely",
            "Fluent English (reading, writing, presenting)",
            "Comfortable with pressure, effective independent worker",
          ],
          benefits: [
            "Salary $650 – $1,200 (negotiable based on experience)",
            "Commission/bonus when partnership milestones are reached",
            "ESOP opportunity for long-term journey",
            "Full social and health insurance",
          ],
        },
        {
          id: 6,
          slug: "designer",
          title: "Designer",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$500 – $900",
          experience: "2 – 5 years",
          location: "Hanoi",
          deadline: "30/11/2025",
          type: "Full-time",
          description: "You turn ideas into visuals — from landing page designs and ad banners to full brand identity systems for international markets. You're not just beautiful, you understand marketing.",
          responsibilities: [
            "Design visuals for all digital channels: social, landing pages, email, ads",
            "Build and maintain a consistent brand identity system",
            "Collaborate with Content and Marketing for effective communication",
            "Create reusable templates and design systems",
            "Proactively pitch creative ideas",
          ],
          requirements: [
            "2 – 5 years of UI/UX or Graphic Design experience",
            "Proficient in Figma, Adobe Creative Suite",
            "Diverse portfolio — digital marketing projects preferred",
            "Understanding of UX principles and conversion design",
            "Open to feedback and fast iteration",
          ],
          benefits: [
            "Salary $500 – $900/month",
            "Creative environment with diverse projects",
            "Full social and health insurance",
            "Growth path to Design Lead",
          ],
        },
        {
          id: 7,
          slug: "hr-executive",
          title: "HR Executive",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$500 – $750",
          experience: "2 – 4 years",
          location: "Hanoi",
          deadline: "15/12/2025",
          type: "Full-time",
          description: "HR Executive at Lumina Media Agency does more than recruit — you build organizational culture, ensure the team operates efficiently and every member feels recognized.",
          responsibilities: [
            "Recruitment: post jobs, screen applications, interview and onboard new hires",
            "Manage personnel records, contracts and insurance",
            "Organize internal activities and team building",
            "Support building performance evaluation and compensation policies",
            "Track HR metrics and provide regular reports",
          ],
          requirements: [
            "2 – 4 years of HR Generalist experience",
            "Sound knowledge of Vietnamese Labor Law",
            "Strong interpersonal and relationship-building skills",
            "Careful, highly responsible",
            "Basic English is a plus",
          ],
          benefits: [
            "Salary $500 – $750/month",
            "Full social and health insurance",
            "Young, equal working environment",
            "Tet bonus and 13th-month salary",
          ],
        },
        {
          id: 8,
          slug: "operation-executive",
          title: "Operation Executive",
          company: "LUMINA MEDIA AGENCY\nCO., LTD",
          salary: "$500 – $750",
          experience: "1 – 3 years",
          location: "Hanoi",
          deadline: "31/12/2025",
          type: "Full-time",
          description: "You ensure the operational engine of Lumina Media Agency runs smoothly — from internal processes to cross-department coordination, freeing the team to focus on highest-value activities.",
          responsibilities: [
            "Monitor and optimize internal operational processes",
            "Coordinate work across departments",
            "Support project execution and track progress",
            "Propose process improvements toward efficiency and automation",
            "Handle administrative and logistics tasks as needed",
          ],
          requirements: [
            "1 – 3 years of Operations or Project Coordination experience",
            "Systems thinking, strong organizational skills",
            "Proficient with Google Workspace and project management tools",
            "Clear communication and effective collaboration",
            "Proactive and flexible in a fast-changing environment",
          ],
          benefits: [
            "Salary $500 – $750/month",
            "Full social and health insurance",
            "Multi-disciplinary learning in an international startup",
            "Tet bonus and 13th-month salary",
          ],
        },
      ],
    },
    benefits: {
      title: "Benefits of working at Lumina Media Agency",
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

