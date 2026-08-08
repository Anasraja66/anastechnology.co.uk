export const seoServices = [
  // Core AI & Tech
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "We turn your data into smart decisions. Automate workflows, uncover insights, and enhance user experience with AI solutions made for your goals.",
    icon: "Brain",
    keywords: ["AI solutions UK", "Machine learning development", "Custom AI models", "Enterprise AI automation"]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Transform your business operations with intelligent AI automation. Reduce manual workload, eliminate errors, and scale your productivity exponentially.",
    icon: "Bot",
    keywords: ["AI workflow automation", "Business process automation AI", "Intelligent automation UK"]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Deploy autonomous multi-agent AI systems that don't just chat, but take action. Build AI teams that handle complex, multi-step tasks independently.",
    icon: "Network",
    keywords: ["Agentic AI development", "Autonomous AI agents", "Multi-agent systems", "AI workforce"]
  },
  {
    id: "deep-tech",
    title: "Deep Tech",
    description: "Pioneering the future with Deep Tech. From complex algorithm design to quantum computing research and advanced biotechnology integrations.",
    icon: "Cpu",
    keywords: ["Deep tech consulting", "Quantum computing software", "Advanced algorithms", "R&D technology UK"]
  },
  
  // Software Development
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive, fast, and visually stunning — we deliver web apps and sites that perform flawlessly across all devices and platforms.",
    icon: "Monitor",
    keywords: ["Custom web development", "React JS development UK", "Full-stack web apps", "Enterprise web solutions"]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "iOS, Android, or cross-platform — we build apps that feel great and function better, delivering performance in every tap.",
    icon: "Smartphone",
    keywords: ["Mobile app development", "iOS app development UK", "Android apps", "React Native development"]
  },
  {
    id: "shopify-ecommerce",
    title: "Shopify & E-Commerce",
    description: "Launch powerful online stores that sell. We build sleek, secure Shopify and custom e-commerce sites that are fast, scalable, and built to convert.",
    icon: "ShoppingCart",
    keywords: ["Shopify development UK", "Custom e-commerce platforms", "WooCommerce", "B2B e-commerce solutions"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Make every number count. Our dashboards and analytics tools turn raw data into clear actions and business growth.",
    icon: "BarChart",
    keywords: ["Business intelligence", "Data analytics consulting", "Big data solutions", "Power BI integration"]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Architecture",
    description: "Move your infrastructure to the cloud securely. We specialize in AWS, Azure, and Google Cloud scalable architectures.",
    icon: "Cloud",
    keywords: ["Cloud migration services", "AWS consulting UK", "Azure architecture", "Cloud security"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Create pixel-perfect, user-centric designs that engage customers and maximize conversions.",
    icon: "Palette",
    keywords: ["UI/UX design agency", "User experience design", "Web design UK", "App interface design"]
  },
  
  // Marketing & Growth
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "End-to-end digital growth strategies. From SEO to PPC, we ensure your brand dominates the digital landscape and drives revenue.",
    icon: "TrendingUp",
    keywords: ["Digital marketing agency UK", "Growth hacking", "Online marketing services", "Performance marketing"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Build a cult-like following. We manage and grow your brand on LinkedIn, Twitter, Instagram, and TikTok with high-converting content.",
    icon: "Share2",
    keywords: ["Social media management", "B2B LinkedIn marketing", "Brand building", "Social media agency UK"]
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Rank #1 on Google. Our technical, on-page, and off-page SEO strategies guarantee massive organic traffic growth.",
    icon: "Search",
    keywords: ["SEO agency UK", "Search engine optimization", "Technical SEO", "Organic traffic growth"]
  },
  {
    id: "content-strategy",
    title: "Content Strategy & Copywriting",
    description: "Words that sell. We craft compelling copy and scalable content strategies that position you as an industry authority.",
    icon: "PenTool",
    keywords: ["Content marketing", "B2B copywriting", "SEO content strategy", "Authority building"]
  },

  // Additional Micro-Services (For 40+ total pages scaling)
  ...Array.from({ length: 26 }).map((_, i) => ({
    id: `enterprise-solution-${i + 1}`,
    title: `Enterprise Tech Solution ${i + 1}`,
    description: `Customized, scalable, and secure enterprise technology solution designed to optimize your workflow and drive digital transformation.`,
    icon: "Briefcase",
    keywords: [`Enterprise solution ${i + 1}`, "B2B tech", "Scalable architecture"]
  }))
];
