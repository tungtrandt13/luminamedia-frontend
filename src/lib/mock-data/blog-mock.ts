/**
 * Mock data for Blog pages (listing + detail),
 * matching Figma design: node-id 792-1409 (listing), 798-1791 (detail).
 */

export interface BlogAuthor {
  id: number;
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  coverImage: string;
  category: string;
  categoryColor?: string; // hex color for tag background
  author: BlogAuthor;
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  content?: string; // HTML content for detail page
  hasCaseStudy?: boolean;
  toc?: { id: string; label: string; level: number }[]; // Table of Contents
  relatedIds?: number[]; // IDs of related posts
}

export interface BlogPageData {
  hero: {
    title: string;
    subtitle?: string;
    cta_text: string;
    image: string;
  };
  latest: {
    title: string;
    posts: BlogPost[];
  };
  related: {
    title: string;
    posts: BlogPost[];
  };
}

// ── Individual Post Data ──────────────────────────────────

const author: BlogAuthor = {
  id: 1,
  name: 'Alex',
  avatar: 'https://i.pravatar.cc/150?img=33',
  role: 'Marketing Specialist',
};

export const blogPosts: Record<'vi' | 'en', BlogPost[]> = {
  vi: [
    {
      id: 1,
      slug: 'how-to-do-b2b-keyword-research',
      title: 'How to do B2B Keyword Research',
      subtitle: 'Chiến lược từ khóa hiệu quả cho doanh nghiệp B2B',
      excerpt:
        'Trong thị trường B2B, việc nghiên cứu từ khóa đòi hỏi một cách tiếp cận khác biệt so với B2C. Bài viết này sẽ hướng dẫn bạn các bước cụ thể để tìm và phân tích từ khóa phù hợp.',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'WITH CASE STUDY',
      categoryColor: '#AF7E2D',
      author,
      publishedAt: '2024-12-15',
      readingTime: 8,
      hasCaseStudy: true,
      relatedIds: [2, 3, 4],
      toc: [
        { id: 'intro', label: 'Giới thiệu', level: 2 },
        { id: 'what-is-b2b-kw', label: 'B2B Keyword Research là gì?', level: 2 },
        { id: 'keyword-types', label: 'Các loại từ khóa trong B2B', level: 2 },
        { id: 'step-1', label: 'Bước 1: Xác định chủ đề cốt lõi', level: 2 },
        { id: 'step-2', label: 'Bước 2: Brainstorm từ khóa', level: 2 },
        { id: 'step-3', label: 'Bước 3: Phân tích đối thủ', level: 2 },
        { id: 'step-4', label: 'Bước 4: Đánh giá & lọc từ khóa', level: 2 },
        { id: 'step-5', label: 'Bước 5: Phân bổ từ khóa', level: 2 },
        { id: 'conclusion', label: 'Kết luận', level: 2 },
      ],
      content: `
<h2 id="intro">Giới thiệu</h2>
<p>Nghiên cứu từ khóa B2B là một quá trình chiến lược giúp doanh nghiệp xác định những cụm từ mà khách hàng mục tiêu (các doanh nghiệp, tổ chức) sử dụng khi tìm kiếm giải pháp, sản phẩm hoặc dịch vụ trên Google. Khác với thị trường B2C, chu kỳ mua hàng B2B dài hơn, quyết định mua thường do nhiều người đưa ra, và ngôn ngữ tìm kiếm mang tính chuyên môn cao hơn.</p>

<h2 id="what-is-b2b-kw">B2B Keyword Research là gì?</h2>
<p>B2B Keyword Research là quá trình tìm kiếm, phân tích và lựa chọn các từ khóa mà các doanh nghiệp (thay vì cá nhân) sử dụng khi tìm kiếm giải pháp kinh doanh. Mục tiêu không chỉ là thu hút lượt truy cập, mà là thu hút đúng người ra quyết định — Decision Maker.</p>
<p>Ví dụ, một doanh nghiệp B2B trong lĩnh vực phần mềm ERP sẽ tìm kiếm "best ERP software for manufacturing" thay vì "buy ERP software".</p>

<h2 id="keyword-types">Các loại từ khóa trong B2B</h2>
<p><strong>Từ khóa thông tin (Informational):</strong> "how to optimize supply chain", "what is CRM software". Được sử dụng ở giai đoạn đầu của hành trình khách hàng (Awareness).</p>
<p><strong>Từ khóa so sánh (Comparison):</strong> "SAP vs Oracle ERP", "HubSpot vs Salesforce pricing". Được sử dụng ở giai đoạn Consideration.</p>
<p><strong>Từ khóa chuyển đổi (Transactional/Commercial):</strong> "ERP software demo", "request Salesforce pricing". Được sử dụng ở giai đoạn Decision.</p>
<p><strong>Từ khóa thương hiệu (Brand):</strong> "VISS International Google Ads services", "VISS Google Ads case study".</p>

<h2 id="step-1">Bước 1: Xác định chủ đề cốt lõi</h2>
<p>Trước khi tìm từ khóa, bạn cần hiểu rõ:</p>
<ul>
  <li>Doanh nghiệp của bạn giải quyết vấn đề gì?</li>
  <li>Khách hàng mục tiêu là ai? (Doanh nghiệp lớn, vừa, hay nhỏ?)</li>
  <li>Ngành nào? (Manufacturing, Healthcare, Finance, Tech...)</li>
  <li>Họ đang ở giai đoạn nào trong hành trình mua hàng?</li>
</ul>

<h2 id="step-2">Bước 2: Brainstorm từ khóa</h2>
<p>Sử dụng các công cụ như:</p>
<ul>
  <li><strong>Google Keyword Planner:</strong> Miễn phí, dữ liệu từ Google</li>
  <li><strong>SEMrush / Ahrefs:</strong> Phân tích đối thủ, объём tìm kiếm, độ khó</li>
  <li><strong>AnswerThePublic:</strong> Tìm các câu hỏi phổ biến</li>
  <li><strong>AlsoAsked:</strong> Tìm các câu hỏi liên quan theo cấu trúc Pillar</li>
</ul>
<p>Tạo danh sách các seed keywords (từ khóa gốc) dựa trên:</p>
<ul>
  <li>Sản phẩm/dịch vụ chính của bạn</li>
  <li>Vấn đề mà khách hàng đang gặp phải</li>
  <li>Thuật ngữ chuyên ngành của ngành khách hàng</li>
</ul>

<h2 id="step-3">Bước 3: Phân tích đối thủ</h2>
<p>Xem đối thủ đang ranking cho những từ khóa nào:</p>
<ul>
  <li>Dùng SEMrush/Ahrefs để xem organic keywords của đối thủ</li>
  <li>Tìm các khoảng trống (gaps) — từ khóa mà đối thủ không cover</li>
  <li>Đánh giá chất lượng nội dung của đối thủ cho từng từ khóa</li>
</ul>

<h2 id="step-4">Bước 4: Đánh giá & lọc từ khóa</h2>
<p>Các tiêu chí để đánh giá:</p>
<ul>
  <li><strong>Search Volume:</strong> Khối lượng tìm kiếm đủ lớn không?</li>
  <li><strong>Keyword Difficulty (KD):</strong> Độ khó để ranking có phù hợp với nguồn lực không?</li>
  <li><strong>Intent:</strong> Ý định tìm kiếm có phù hợp với mục tiêu kinh doanh?</li>
  <li><strong>CPC:</strong> Giá click quảng cáo cho thấy giá trị thương mại</li>
  <li><strong>Relevance:</strong> Từ khóa có liên quan trực tiếp đến giải pháp của bạn?</li>
</ul>

<h2 id="step-5">Bước 5: Phân bổ từ khóa</h2>
<p>Sau khi có danh sách từ khóa đã lọc:</p>
<ul>
  <li><strong>Pillar Page:</strong> Trang chính cho topic rộng ("B2B Keyword Research Guide")</li>
  <li><strong>Cluster Content:</strong> Các bài viết nhỏ hơn link về pillar page ("B2B SEO best practices", "B2B content marketing strategy")</li>
  <li>Phân bổ từ khóa chính (primary keyword) và từ khóa phụ (secondary keyword) cho mỗi trang</li>
</ul>

<h2 id="conclusion">Kết luận</h2>
<p>Nghiên cứu từ khóa B2B không phải là một lần làm xong — đây là một quá trình liên tục. Thị trường thay đổi, đối thủ cạnh tranh, và hành vi tìm kiếm của khách hàng cũng thay đổi. Hãy đặt lịch review từ khóa định kỳ (ít nhất mỗi quý) để đảm bảo chiến lược của bạn luôn được tối ưu.</p>
<p>Liên hệ VISS International để được tư vấn chiến lược Google Ads và B2B Keyword Research phù hợp với doanh nghiệp của bạn.</p>
      `,
    },
    {
      id: 2,
      slug: 'google-ads-roas-optimization',
      title: 'Tối ưu ROAS cho Google Ads 2024',
      excerpt:
        'Hướng dẫn chi tiết cách tối ưu Return on Ad Spend (ROAS) trong các chiến dịch Google Ads, giúp doanh nghiệp tối đa hóa hiệu quả chi tiêu quảng cáo.',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: 'Google Ads',
      categoryColor: '#4285F4',
      author,
      publishedAt: '2024-12-10',
      readingTime: 6,
      relatedIds: [1, 3, 4],
    },
    {
      id: 3,
      slug: 'tiktok-ads-for-ecommerce',
      title: 'TikTok Ads cho E-commerce: Chiến lược bán hàng hiệu quả',
      excerpt:
        'Khám phá cách sử dụng TikTok Ads để tăng doanh số bán hàng trực tuyến. Hướng dẫn từ cơ bản đến nâng cao cho người mới bắt đầu.',
      coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      category: 'TikTok Ads',
      categoryColor: '#FF0050',
      author,
      publishedAt: '2024-12-05',
      readingTime: 7,
      relatedIds: [1, 2, 5],
    },
    {
      id: 4,
      slug: 'seo-on-page-2024',
      title: 'SEO On-Page: Hướng dẫn tối ưu chi tiết 2024',
      excerpt:
        'Tìm hiểu cách tối ưu SEO On-Page từ tiêu đề, meta description, heading, hình ảnh đến internal link để đạt thứ hạng cao trên Google.',
      coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      category: 'SEO',
      categoryColor: '#34A853',
      author,
      publishedAt: '2024-11-28',
      readingTime: 10,
      relatedIds: [1, 5],
    },
    {
      id: 5,
      slug: 'facebook-ads-remarketing',
      title: 'Facebook Ads Remarketing: Tăng chuyển đổi gấp 3 lần',
      excerpt:
        'Chiến lược remarketing trên Facebook Ads giúp tăng tỷ lệ chuyển đổi đáng kể, đưa khách hàng quay lại và hoàn tất mua hàng.',
      coverImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      category: 'Facebook Ads',
      categoryColor: '#1877F2',
      author,
      publishedAt: '2024-11-20',
      readingTime: 5,
      relatedIds: [2, 6],
    },
    {
      id: 6,
      slug: 'content-marketing-b2b',
      title: 'Content Marketing cho B2B: Xây dựng chiến lược nội dung',
      excerpt:
        'Hướng dẫn xây dựng chiến lược content marketing hiệu quả cho doanh nghiệp B2B, từ nghiên cứu đối tượng đến phân phối nội dung.',
      coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      category: 'Content',
      categoryColor: '#E37400',
      author,
      publishedAt: '2024-11-15',
      readingTime: 9,
      relatedIds: [1, 4],
    },
    {
      id: 7,
      slug: 'email-marketing-automation',
      title: 'Email Marketing Automation: Tự động hóa quy trình tiếp thị',
      excerpt:
        'Khám phá cách sử dụng email marketing automation để nurture leads, tăng doanh thu và tiết kiệm thời gian cho đội ngũ marketing.',
      coverImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
      category: 'Email Marketing',
      categoryColor: '#9C27B0',
      author,
      publishedAt: '2024-11-10',
      readingTime: 6,
      relatedIds: [5, 6],
    },
  ],
  en: [
    {
      id: 1,
      slug: 'how-to-do-b2b-keyword-research',
      title: 'How to do B2B Keyword Research',
      subtitle: 'Effective keyword strategy for B2B businesses',
      excerpt:
        'In the B2B market, keyword research requires a different approach compared to B2C. This article will guide you through specific steps to find and analyze the right keywords.',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'WITH CASE STUDY',
      categoryColor: '#AF7E2D',
      author,
      publishedAt: '2024-12-15',
      readingTime: 8,
      hasCaseStudy: true,
      relatedIds: [2, 3],
      toc: [
        { id: 'intro', label: 'Introduction', level: 2 },
        { id: 'what-is-b2b-kw', label: 'What is B2B Keyword Research?', level: 2 },
        { id: 'keyword-types', label: 'Types of Keywords in B2B', level: 2 },
        { id: 'step-1', label: 'Step 1: Identify Core Topics', level: 2 },
        { id: 'step-2', label: 'Step 2: Brainstorm Keywords', level: 2 },
        { id: 'step-3', label: 'Step 3: Analyze Competitors', level: 2 },
        { id: 'step-4', label: 'Step 4: Evaluate & Filter Keywords', level: 2 },
        { id: 'step-5', label: 'Step 5: Distribute Keywords', level: 2 },
        { id: 'conclusion', label: 'Conclusion', level: 2 },
      ],
      content: `
<h2 id="intro">Introduction</h2>
<p>B2B keyword research is a strategic process that helps businesses identify the phrases their target customers (businesses, organizations) use when searching for solutions, products, or services on Google. Unlike the B2C market, B2B purchase cycles are longer, purchase decisions often involve multiple stakeholders, and search language carries higher professional terminology.</p>

<h2 id="what-is-b2b-kw">What is B2B Keyword Research?</h2>
<p>B2B Keyword Research is the process of finding, analyzing, and selecting keywords that businesses (rather than individuals) use when searching for business solutions. The goal is not just to attract traffic, but to attract the right decision-makers.</p>
<p>For example, a B2B business in the ERP software industry will search for "best ERP software for manufacturing" instead of "buy ERP software".</p>

<h2 id="keyword-types">Types of Keywords in B2B</h2>
<p><strong>Informational Keywords:</strong> "how to optimize supply chain", "what is CRM software". Used at the early stage of the customer journey (Awareness).</p>
<p><strong>Comparison Keywords:</strong> "SAP vs Oracle ERP", "HubSpot vs Salesforce pricing". Used at the Consideration stage.</p>
<p><strong>Transactional/Commercial Keywords:</strong> "ERP software demo", "request Salesforce pricing". Used at the Decision stage.</p>
<p><strong>Brand Keywords:</strong> "VISS International Google Ads services", "VISS Google Ads case study".</p>

<h2 id="step-1">Step 1: Identify Core Topics</h2>
<p>Before finding keywords, you need to clearly understand:</p>
<ul>
  <li>What problem does your business solve?</li>
  <li>Who is your target customer? (Large, medium, or small business?)</li>
  <li>Which industry? (Manufacturing, Healthcare, Finance, Tech...)</li>
  <li>What stage are they in the buying journey?</li>
</ul>

<h2 id="step-2">Step 2: Brainstorm Keywords</h2>
<p>Use tools such as:</p>
<ul>
  <li><strong>Google Keyword Planner:</strong> Free, data from Google</li>
  <li><strong>SEMrush / Ahrefs:</strong> Competitor analysis, search volume, difficulty</li>
  <li><strong>AnswerThePublic:</strong> Find popular questions</li>
  <li><strong>AlsoAsked:</strong> Find related questions in Pillar structure</li>
</ul>
<p>Create a list of seed keywords based on:</p>
<ul>
  <li>Your main products/services</li>
  <li>Problems your customers are facing</li>
  <li>Industry terminology of your target customers</li>
</ul>

<h2 id="step-3">Step 3: Analyze Competitors</h2>
<p>See what keywords competitors are ranking for:</p>
<ul>
  <li>Use SEMrush/Ahrefs to view competitors' organic keywords</li>
  <li>Find gaps — keywords competitors don't cover</li>
  <li>Evaluate the quality of competitors' content for each keyword</li>
</ul>

<h2 id="step-4">Step 4: Evaluate & Filter Keywords</h2>
<p>Criteria for evaluation:</p>
<ul>
  <li><strong>Search Volume:</strong> Is the search volume large enough?</li>
  <li><strong>Keyword Difficulty (KD):</strong> Is the ranking difficulty appropriate for your resources?</li>
  <li><strong>Intent:</strong> Does the search intent match your business goals?</li>
  <li><strong>CPC:</strong> Ad click price indicates commercial value</li>
  <li><strong>Relevance:</strong> Is the keyword directly related to your solution?</li>
</ul>

<h2 id="step-5">Step 5: Distribute Keywords</h2>
<p>After having a filtered keyword list:</p>
<ul>
  <li><strong>Pillar Page:</strong> Main page for broad topic ("B2B Keyword Research Guide")</li>
  <li><strong>Cluster Content:</strong> Smaller articles linking to pillar page ("B2B SEO best practices", "B2B content marketing strategy")</li>
  <li>Assign primary and secondary keywords to each page</li>
</ul>

<h2 id="conclusion">Conclusion</h2>
<p>B2B keyword research is not a one-time task — it's an ongoing process. Markets change, competitors compete, and customer search behavior also changes. Schedule keyword reviews periodically (at least quarterly) to ensure your strategy is always optimized.</p>
<p>Contact VISS International for Google Ads and B2B Keyword Research strategy consulting tailored to your business.</p>
      `,
    },
    {
      id: 2,
      slug: 'google-ads-roas-optimization',
      title: 'Google Ads ROAS Optimization 2024',
      excerpt:
        'Detailed guide on optimizing Return on Ad Spend (ROAS) in Google Ads campaigns, helping businesses maximize advertising spend efficiency.',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: 'Google Ads',
      categoryColor: '#4285F4',
      author,
      publishedAt: '2024-12-10',
      readingTime: 6,
      relatedIds: [1, 3],
    },
    {
      id: 3,
      slug: 'tiktok-ads-for-ecommerce',
      title: 'TikTok Ads for E-commerce: Effective Selling Strategy',
      excerpt:
        'Discover how to use TikTok Ads to increase online sales. A comprehensive guide from beginner to advanced level.',
      coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      category: 'TikTok Ads',
      categoryColor: '#FF0050',
      author,
      publishedAt: '2024-12-05',
      readingTime: 7,
      relatedIds: [1, 2],
    },
    {
      id: 4,
      slug: 'seo-on-page-2024',
      title: 'SEO On-Page: Complete Optimization Guide 2024',
      excerpt:
        'Learn how to optimize SEO On-Page from titles, meta descriptions, headings, images to internal links for higher Google rankings.',
      coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      category: 'SEO',
      categoryColor: '#34A853',
      author,
      publishedAt: '2024-11-28',
      readingTime: 10,
      relatedIds: [1, 5],
    },
    {
      id: 5,
      slug: 'facebook-ads-remarketing',
      title: 'Facebook Ads Remarketing: Triple Your Conversions',
      excerpt:
        'Remarketing strategies on Facebook Ads that significantly increase conversion rates, retarget customers and drive purchase completion.',
      coverImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      category: 'Facebook Ads',
      categoryColor: '#1877F2',
      author,
      publishedAt: '2024-11-20',
      readingTime: 5,
      relatedIds: [2, 6],
    },
    {
      id: 6,
      slug: 'content-marketing-b2b',
      title: 'B2B Content Marketing: Building a Content Strategy',
      excerpt:
        'Guide to building an effective content marketing strategy for B2B businesses, from audience research to content distribution.',
      coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      category: 'Content',
      categoryColor: '#E37400',
      author,
      publishedAt: '2024-11-15',
      readingTime: 9,
      relatedIds: [1, 4],
    },
    {
      id: 7,
      slug: 'email-marketing-automation',
      title: 'Email Marketing Automation: Streamline Your Marketing',
      excerpt:
        'Discover how to use email marketing automation to nurture leads, boost revenue, and save time for your marketing team.',
      coverImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
      category: 'Email Marketing',
      categoryColor: '#9C27B0',
      author,
      publishedAt: '2024-11-10',
      readingTime: 6,
      relatedIds: [5, 6],
    },
  ],
};

// ── Blog Listing Mock Data ─────────────────────────────────

export const blogListingMockData: Record<'vi' | 'en', BlogPageData> = {
  vi: {
    hero: {
      title: 'How to do B2B Keyword Research',
      subtitle: 'Chiến lược từ khóa hiệu quả cho doanh nghiệp B2B',
      cta_text: 'Read more',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    },
    latest: {
      title: 'Latest Post',
      posts: blogPosts.vi,
    },
    related: {
      title: 'Related',
      posts: blogPosts.vi,
    },
  },
  en: {
    hero: {
      title: 'How to do B2B Keyword Research',
      subtitle: 'Effective keyword strategy for B2B businesses',
      cta_text: 'Read more',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    },
    latest: {
      title: 'Latest Post',
      posts: blogPosts.en,
    },
    related: {
      title: 'Related',
      posts: blogPosts.en,
    },
  },
};

// ── Helper Functions ──────────────────────────────────────

export function getBlogPostBySlug(slug: string, locale: 'vi' | 'en'): BlogPost | undefined {
  return blogPosts[locale].find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, locale: 'vi' | 'en'): BlogPost[] {
  if (!post.relatedIds) return [];
  return post.relatedIds
    .map((id) => blogPosts[locale].find((p) => p.id === id))
    .filter((p): p is BlogPost => p !== undefined);
}

export function buildRelatedPostsFromRaw(rawRelated: any[]): BlogPost[] {
  if (!rawRelated || rawRelated.length === 0) return [];
  return rawRelated.map((r: any): BlogPost => ({
    id: r.id,
    slug: r.slug || '',
    title: r.title || '',
    subtitle: r.subtitle || '',
    excerpt: r.excerpt || '',
    coverImage: getStrapiMedia(r.coverImage) || '',
    category: r.category || 'Article',
    categoryColor: r.categoryColor || '#AF7E2D',
    hasCaseStudy: r.hasCaseStudy || false,
    publishedAt: r.publishedAt || '',
    readingTime: r.readingTime || 5,
    author: {
      id: 1,
      name: r.author?.name || 'Author',
      avatar: getStrapiMedia(r.author?.avatar) || '',
      role: r.author?.role || '',
    },
    relatedIds: [],
  }));
}
