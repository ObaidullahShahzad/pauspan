export interface CaseStudyPoint {
  title: string;
  description: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  year: string;
  category: string;
  result: string;
  image: string;
  accentColor: string;
  gradient: string;
  services: string[];
  industry: string[];
  technologies: string[];
  tags: string[];
  overview: string;
  challenge: string;
  capabilities: CaseStudyPoint[];
  approach: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  outcomes: CaseStudyPoint[];
  liveUrl?: string;
  video?: string;
  extraLinks?: { label: string; url: string }[];
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "pauspan-erp",
    title: "Pauspan ERP",
    eyebrow: "Unified Business Suite",
    headline: "Running an entire business — finance, stock, sales, production and HR — from one connected dashboard.",
    year: "2026",
    category: "ERP Platform",
    result: "8 Modules, One Ledger",
    image: "/project/pauspan-erp-dashboard.png",
    video: "/project/pauspan-erp-demo.mp4",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-blue-400/10 to-transparent",
    services: [
      "ERP Product Engineering",
      "Full-Stack Development",
      "Role-Based Access Architecture",
      "Tax Compliance Integration",
      "UX & UI Design",
    ],
    industry: ["Enterprise Software", "Accounting & Finance", "Manufacturing", "Distribution & Retail"],
    technologies: [
      "React 19",
      "Vite",
      "Framer Motion",
      "REST API Architecture",
      "Role-Based Auth",
      "FBR e-Invoicing API",
    ],
    tags: ["ERP", "Accounting", "SaaS"],
    overview:
      "Pauspan ERP is a modern business suite that unifies financial accounting, inventory, sales, purchase, manufacturing and human resources behind a single login. Every module writes to the same ledger, so a manager, an accountant and a warehouse lead are always looking at the same numbers — across more than 40 document and report types.",
    challenge:
      "Growing businesses end up running finance in one tool, stock in another and payroll in a spreadsheet. Reconciling them is manual, slow and error-prone, and the same data gets re-keyed at every handoff. The product had to collapse all of that into one suite without becoming the kind of heavy, unusable enterprise software it was meant to replace — and while meeting local tax-authority e-invoicing rules.",
    capabilities: [
      {
        title: "Financial Accounting Core",
        description:
          "Chart of accounts, journal vouchers, cash book, bank accounts, account ledgers and trial balance — always in sync with every other module.",
      },
      {
        title: "Multi-Warehouse Inventory",
        description:
          "Stock across locations with categories, units and item groups, backed by real-time item ledgers and live stock valuation.",
      },
      {
        title: "Connected Sales & Purchase Cycles",
        description:
          "Quotation to order, delivery, invoice and return on the sales side; purchase requests through receipt notes and invoices on the other — one pipeline, no re-keying.",
      },
      {
        title: "Manufacturing & Production",
        description:
          "Bill of materials, work orders and production entries for teams that make what they sell, posting straight into stock and costing.",
      },
      {
        title: "Per-User Form Authorization",
        description:
          "Every screen maps to a form code, so each employee is granted exactly the modules they need — enforced per user, with session auto-expiry on unattended logins.",
      },
      {
        title: "FBR e-Invoicing Compliance",
        description:
          "A live tax-authority integration plus a dedicated API test console keep invoicing and reporting aligned as requirements change.",
      },
    ],
    approach:
      "We built Pauspan ERP as a product, not a project. The architecture puts a single shared ledger at the center and treats each department as a module on top of it, which is what keeps finance, sales, purchase and stock from drifting apart. The interface is a React 19 and Vite workspace tuned for data-dense screens — fast tables, light and dark themes, and motion used only where it clarifies state. Access control was designed in from the first commit: form-level authorization, session countdowns and a one-click re-login that never loses in-progress work.",
    testimonial: {
      quote:
        "Pauspan ERP started from one question: why should a growing business run finance in one tool, stock in another, and payroll in a spreadsheet? Every module in the suite writes to the same ledger, so the numbers a manager sees in the morning are the numbers the accountant closes the month with.",
      author: "Pauspan Product Team",
      role: "Builders of Pauspan ERP",
    },
    outcomes: [
      {
        title: "One Login Across Departments",
        description:
          "Eight business modules replaced a stack of disconnected tools, with a single daily dashboard as the entry point for every role.",
      },
      {
        title: "No Re-Keying Between Cycles",
        description:
          "Documents move through a connected pipeline, so sales, purchase and accounting stay reconciled without manual data entry.",
      },
      {
        title: "Compliance Without Extra Work",
        description:
          "Built-in e-invoicing and tax reporting removed a recurring month-end scramble from the finance team's workload.",
      },
      {
        title: "Access Control That Scales",
        description:
          "Form-level permissions let the suite onboard new staff and whole departments without opening up the books to everyone.",
      },
    ],
    liveUrl: "https://erp.pauspan.com",
    extraLinks: [{ label: "Visit Product", url: "https://apps.digicare.com.pk" }],
  },
  {
    slug: "cold-ai",
    title: "Cold AI",
    eyebrow: "B2B Sales Intelligence",
    headline: "An AI-powered sales agent dashboard that turns cold outreach into a managed, data-driven pipeline.",
    year: "2026",
    category: "AI SaaS",
    result: "AI-Driven Outreach",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-indigo-300/10 to-transparent",
    services: [
      "AI Product Engineering",
      "Full-Stack Development",
      "SaaS Architecture",
      "Dashboard UX & UI Design",
    ],
    industry: ["B2B Sales", "Sales Technology", "Artificial Intelligence"],
    technologies: ["Next.js", "React.js", "Generative AI", "REST APIs", "Tailwind CSS"],
    tags: ["AI Agent", "SaaS", "B2B"],
    overview:
      "Cold AI is a B2B sales intelligence product built around an AI-powered sales agent dashboard. It gives sales teams one workspace to run outbound outreach and track how it performs, with an AI agent handling the repetitive work.",
    challenge:
      "Outbound sales depends on research, personalization, and follow-up that take hours per lead and rarely scale with a small team. The product needed to automate that work with AI while keeping the human in control, and present it in a dashboard that stays fast and clear as activity grows.",
    capabilities: [
      {
        title: "AI Sales Agent",
        description:
          "An agent that supports outbound prospecting and outreach so reps spend their time on conversations instead of preparation.",
      },
      {
        title: "Centralized Sales Dashboard",
        description:
          "A single workspace to monitor outreach activity, leads, and performance without switching between tools.",
      },
      {
        title: "Intelligence-Led Targeting",
        description:
          "Data-driven insights help teams focus on the accounts and messages most likely to convert.",
      },
      {
        title: "Fast, Responsive Interface",
        description:
          "A polished Next.js frontend with a themed design system that stays quick and readable on data-heavy screens.",
      },
    ],
    approach:
      "We built Cold AI as a SaaS product from the ground up, pairing a Next.js and React dashboard with AI-driven agent workflows. The interface was designed around daily sales operations, with clear states, quick loading, and a consistent visual system so teams can act on insights immediately.",
    testimonial: {
      quote:
        "Cold AI was built on a simple idea: sales teams should spend their time talking to buyers, not preparing for them. The agent handles the groundwork and the dashboard keeps the whole pipeline in view.",
      author: "Pauspan Product Team",
      role: "Builders of Cold AI",
    },
    outcomes: [
      {
        title: "Less Manual Prospecting",
        description:
          "AI-assisted workflows reduce the repetitive research and outreach preparation that slows sales teams down.",
      },
      {
        title: "One View of the Pipeline",
        description:
          "A single dashboard replaces scattered tools for tracking outreach and results.",
      },
      {
        title: "Scalable Outbound Process",
        description:
          "Small teams can run structured, repeatable outreach without growing headcount at the same rate.",
      },
      {
        title: "Production-Ready SaaS Foundation",
        description:
          "A modern, themed codebase ready to extend with new agent capabilities and integrations.",
      },
    ],
    liveUrl: "https://coldai.pauspan.com",
  },
  {
    slug: "influenceher",
    title: "InfluenceHer",
    eyebrow: "Creator Economy Platform",
    headline: "Scaling digital creators into six-figure brands with AI and Web3 incentives.",
    year: "2026",
    category: "Creator Economy",
    result: "6-Figure Creator Growth",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-emerald-400/10 to-transparent",
    services: [
      "AI Platform Development",
      "Full-Stack Development",
      "Web3 Integration",
      "Predictive Analytics",
      "MVP Strategy",
    ],
    industry: ["Creator Economy", "Web3", "Marketing Technology"],
    technologies: [
      "Generative AI",
      "Predictive Modeling",
      "Python FastAPI",
      "React.js",
      "Smart Contracts",
      "API Engineering",
    ],
    tags: ["AI Platform", "Web3", "MarTech"],
    overview:
      "InfluenceHer is a next-generation ecosystem designed to scale content creators, specifically in the digital subscription space, into high-earning personal brands. The platform merges professional marketing funnels with a Web3-based incentive model, the $INFLU token, to create a sustainable loop of growth for creators and investors.",
    challenge:
      "Many digital creators struggle to scale their earnings because they lack professional business infrastructure. The client needed a platform that could automate sophisticated marketing funnels, manage creator workflows, optimize audience conversions, and handle large-scale creator data inside a shared tokenized economy.",
    capabilities: [
      {
        title: "AI-Powered Marketing Funnels",
        description:
          "Intelligent systems designed to automate and optimize audience conversion funnels for maximum creator revenue.",
      },
      {
        title: "Web3 Incentive Model",
        description:
          "A smart contract layer for the $INFLU token, connecting creators, investors, and the platform through a shared growth loop.",
      },
      {
        title: "Automated Creator Management",
        description:
          "A robust backend for complex data workflows, content scheduling, and performance tracking without manual oversight.",
      },
      {
        title: "Predictive Revenue Analytics",
        description:
          "Custom AI models that analyze engagement data to forecast earnings potential and provide strategic growth recommendations.",
      },
    ],
    approach:
      "We developed the complete technical infrastructure for the InfluenceHer MVP, focusing on the intersection of AI, Web3, and creator tools. The team designed generative AI models for marketing and management automation, built a FastAPI backend for data workflows, delivered a responsive React.js creator interface, and deployed the smart contract layer for the $INFLU ecosystem.",
    testimonial: {
      quote:
        "This team's ability to execute on a vision that combines the creator economy, predictive AI, and Web3 is simply unmatched. They understood the deep technical requirements from day one and built an MVP that exceeded all our expectations.",
      author: "Jessica Chen",
      role: "Chief Executive Officer at InfluenceHer",
    },
    outcomes: [
      {
        title: "Accelerated Creator Growth",
        description:
          "The platform gives creators a professional-grade ecosystem for breaking through income plateaus.",
      },
      {
        title: "Sustainable Ecosystem",
        description:
          "AI-driven automation and token incentives created a scalable growth loop across creators, the platform, and holders.",
      },
      {
        title: "Technology Gap Closed",
        description:
          "The product bridges raw creator content with the business tooling required for professional growth.",
      },
      {
        title: "Aligned Stakeholder Success",
        description:
          "The tokenized model created a revenue-driven environment where creators, the platform, and investors benefit together.",
      },
    ],
  },
  {
    slug: "chef-colin",
    title: "Chef Colin",
    eyebrow: "Culinary Education Platform",
    headline: "Elevating culinary branding with a high-performance training and educational platform.",
    year: "2026",
    category: "EdTech",
    result: "Scalable Course Revenue",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-orange-300/10 to-transparent",
    services: [
      "Full Stack Development",
      "UX & UI Design",
      "Performance Optimization",
      "MVP Strategy",
      "API Integration",
    ],
    industry: ["Culinary Arts", "EdTech", "E-Learning", "Personal Branding"],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Vercel", "Custom APIs"],
    tags: ["Next.js", "Education", "Performance"],
    overview:
      "Chef Colin is a premium digital hub designed to showcase culinary identity, signature techniques, and professional training courses. The platform works as both a personal brand showcase and a comprehensive educational portal.",
    challenge:
      "The client needed to move beyond social channels and establish a definitive professional brand. The platform had to host specialized training courses and culinary techniques while preserving a premium visual aesthetic and reliably delivering heavy educational video content.",
    capabilities: [
      {
        title: "Premium Brand Showcase",
        description:
          "A minimalist, highly optimized frontend that highlights high-resolution culinary visuals without sacrificing speed.",
      },
      {
        title: "Educational Course Management",
        description:
          "A backend system engineered to securely host, manage, and deliver specialized culinary training content.",
      },
      {
        title: "Responsive Digital Portfolio",
        description:
          "Fluid UI components that maintain a polished viewing experience across mobile and desktop devices.",
      },
      {
        title: "Seamless API Integrations",
        description:
          "Custom API connections for enrollments, course progression tracking, and automated payment processing.",
      },
    ],
    approach:
      "We engineered the Chef Colin platform from the ground up with a fast Next.js and React.js frontend, a scalable Node.js backend, and a clean MVP strategy that balanced premium visual presentation with practical educational functionality. The final Vercel deployment was optimized for speed, clarity, and audience retention.",
    testimonial: {
      quote:
        "Partnering with this agency was the best decision for my digital brand. They completely understood the balance between premium visual design and the heavy backend functionality required for an educational platform.",
      author: "Chef Colin",
      role: "Founder and Head Culinary Instructor",
    },
    outcomes: [
      {
        title: "Effective Course Monetization",
        description:
          "The infrastructure helped the client sell and scale specialized culinary training programs.",
      },
      {
        title: "Elevated Brand Authority",
        description:
          "A dedicated digital platform established a more professional and authoritative presence.",
      },
      {
        title: "Streamlined Student Experience",
        description:
          "The optimized educational portal improved audience retention and course completion flow.",
      },
      {
        title: "Scalable Business Growth",
        description:
          "The high-performance foundation allows the online education business to scale without technical limits.",
      },
    ],
    liveUrl: "https://chef-colin.vercel.app/",
  },
  {
    slug: "safari-coin",
    title: "Safari Coin",
    eyebrow: "Web3 Discovery Platform",
    headline: "Guiding users through the crypto jungle with AI-powered discovery.",
    year: "2026",
    category: "Web3",
    result: "AI-Guided Discovery",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-teal-300/10 to-transparent",
    services: [
      "AI Model Training",
      "Full-Stack Development",
      "Web3 Integration",
      "Product Strategy",
      "NLP Tokenization",
    ],
    industry: ["Web3", "Fintech", "Artificial Intelligence"],
    technologies: [
      "Generative AI NLP",
      "Python FastAPI",
      "React.js",
      "Web3.js",
      "API Integration",
      "Tailwind CSS",
    ],
    tags: ["Web3.js", "AI", "Fintech"],
    overview:
      "Safari Coin is a Web3 discovery platform designed to turn the complex crypto market into a guided, exploratory experience. The product helps beginners and experienced traders track market activity and discover new digital assets through a themed, approachable interface.",
    challenge:
      "The crypto ecosystem is overwhelming and difficult to navigate for the average user. The client needed a digital guide that could simplify token discovery and real-time market tracking while ingesting large amounts of blockchain data and presenting it in a clear, engaging, and useful way.",
    capabilities: [
      {
        title: "AI-Powered Digital Guide",
        description:
          "Fine-tuned NLP models summarize complex market trends and explain new digital assets in plain language.",
      },
      {
        title: "Real-Time Market Tracking",
        description:
          "A high-performance backend ingests and processes live blockchain data for immediate user access.",
      },
      {
        title: "Guided Discovery Experience",
        description:
          "A jungle-safari-themed frontend turns asset discovery into an approachable exploration flow.",
      },
      {
        title: "Scalable Web3 Ecosystem",
        description:
          "A ground-up architecture built to support the $SAFARI token ecosystem and its growing community.",
      },
    ],
    approach:
      "We built the complete Safari Coin technical foundation with FastAPI for real-time data ingestion, React.js and Tailwind CSS for the themed frontend, and specialized NLP models for the digital guide. The MVP strategy prioritized the most vital tracking and discovery tools first so the community could launch around real utility.",
    testimonial: {
      quote:
        "This team did more than just build a platform; they brought a creative vision to life. Their expertise in both AI implementation and Web3 development was critical.",
      author: "David Chen",
      role: "Founder of Safari Coin",
    },
    outcomes: [
      {
        title: "Simplified User Onboarding",
        description:
          "Guided journeys and AI summaries reduced the learning curve for beginners entering crypto.",
      },
      {
        title: "Enhanced Discovery Process",
        description:
          "The platform transformed complex market navigation into a simple, guided user journey.",
      },
      {
        title: "Unified Community Hub",
        description:
          "Safari Coin became a functional discovery hub for a growing Web3 community.",
      },
      {
        title: "Efficient Expert Tools",
        description:
          "Real-time tracking tools gave experienced traders faster access to useful market data.",
      },
    ],
    liveUrl: "https://safari-coin.vercel.app/",
  },
  {
    slug: "cynq-ai",
    title: "CYNQ AI",
    eyebrow: "Predictive DeFi System",
    headline: "Replacing emotion-based trading with automated, data-driven predictive systems.",
    year: "2026",
    category: "DeFi + AI",
    result: "Automated Market Intelligence",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-cyan-300/10 to-transparent",
    services: [
      "AI Model Integration",
      "MVP Development",
      "Full-Stack Architecture",
      "Product Design",
    ],
    industry: ["Decentralized Finance", "Artificial Intelligence", "Web3"],
    technologies: ["Next.js", "FastAPI", "Web3.js", "Python", "Tailwind CSS", "NLP"],
    tags: ["AI/ML", "Python", "DeFi"],
    overview:
      "CYNQ AI is an advanced decentralized finance platform built to optimize how users interact with cryptocurrency markets. The platform acts as a smart trading brain, analyzing on-chain data, market trends, and social sentiment to generate predictive forecasts and automated trade signals.",
    challenge:
      "Crypto markets are volatile and heavily influenced by emotional decision making. The client needed a secure decentralized system capable of processing massive datasets, powering automated trading bots, identifying cross-chain arbitrage opportunities, and executing without latency or human error.",
    capabilities: [
      {
        title: "Predictive Price Forecasting",
        description:
          "Custom neural networks analyze historical and live market data to forecast token movement.",
      },
      {
        title: "Automated Trade Execution",
        description:
          "Secure Web3 integrations allow trading bots to operate continuously without manual input.",
      },
      {
        title: "Real-Time Sentiment Analysis",
        description:
          "NLP algorithms scan social platforms to determine public market sentiment and momentum.",
      },
      {
        title: "Cross-Chain Arbitrage Detection",
        description:
          "Automated smart contract workflows identify and respond to price inefficiencies across blockchain networks.",
      },
    ],
    approach:
      "We built the CYNQ AI ecosystem around seamless orchestration between predictive AI models and blockchain execution. The team trained models for live on-chain trend processing, implemented NLP tokenization for sentiment analysis, built a scalable FastAPI backend, and paired it with a dynamic Next.js frontend for risk analysis and continuous market monitoring.",
    testimonial: {
      quote:
        "Working with Pauspan was a massive turning point for CYNQ AI. They completely grasped the complex intersection of DeFi infrastructure and predictive machine learning.",
      author: "Marcus Vance",
      role: "Chief Technology Officer at CYNQ AI",
    },
    outcomes: [
      {
        title: "Minimized Manual Intervention",
        description:
          "Users can capitalize on opportunities and arbitrage setups through automated systems.",
      },
      {
        title: "Institutional-Grade Access",
        description:
          "High-performance DeFi tooling became available beyond enterprise hedge fund environments.",
      },
      {
        title: "Improved Efficiency",
        description:
          "Automation removed emotional trading errors and reduced execution latency.",
      },
      {
        title: "Enhanced Platform Engagement",
        description:
          "Data-driven insights increased user trust and daily active engagement.",
      },
    ],
    liveUrl: "https://cynq-ai.vercel.app/en",
  },
  {
    slug: "beks-media",
    title: "Beks Media",
    eyebrow: "AI Media Workflow Platform",
    headline: "Scaling viral video production with AI-driven workflow automation.",
    year: "2026",
    category: "Media Automation",
    result: "Faster Video Delivery",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-sky-300/10 to-transparent",
    services: [
      "AI Data Analytics",
      "Full-Stack Development",
      "AI Model Training",
      "Product Strategy",
    ],
    industry: ["Digital Media", "Content Creation", "Marketing Technology"],
    technologies: [
      "Python FastAPI",
      "React.js",
      "Whisper",
      "GPT",
      "Computer Vision",
      "AWS S3",
      "PostgreSQL",
    ],
    tags: ["AI Workflow", "AWS", "Media"],
    overview:
      "Beks Media is a high-growth content agency focused on scaling brands through viral short-form video content across TikTok, Reels, and Shorts. We engineered an AI-integrated dashboard to automate complex video workflows and manage high-volume client deliveries.",
    challenge:
      "The agency faced a severe scaling bottleneck while managing hundreds of clients and thousands of heavy video files manually. They needed a centralized hub where creators could upload raw content and receive AI-optimized hooks, captions, edits, and project updates.",
    capabilities: [
      {
        title: "Automated Transcription and Scene Detection",
        description:
          "Computer vision and NLP models scan raw footage to accelerate the editing process.",
      },
      {
        title: "Centralized Client Dashboard",
        description:
          "A secure portal for file management, asset tracking, and high-volume project coordination.",
      },
      {
        title: "Viral Script Generation",
        description:
          "NLP integrations use trending market data to generate high-retention hooks and captions.",
      },
      {
        title: "Scalable Cloud Infrastructure",
        description:
          "AWS S3 and PostgreSQL infrastructure handles massive video storage without backend latency.",
      },
    ],
    approach:
      "We architected the end-to-end Beks Media platform around their operational pipeline. The backend uses Whisper and GPT for transcription and scripting automation, while AWS S3 and PostgreSQL support secure large-media processing. React.js and FastAPI power a premium client portal with reliable API integrations.",
    testimonial: {
      quote:
        "This team completely transformed how our agency operates. Their deep understanding of both full stack architecture and complex AI model training allowed us to eliminate massive operational bottlenecks.",
      author: "Sarah Jenkins",
      role: "Director of Operations at Beks Media",
    },
    outcomes: [
      {
        title: "Accelerated Delivery Pipelines",
        description:
          "Workflow automation reduced the time from raw footage upload to final video delivery.",
      },
      {
        title: "Increased Audience Retention",
        description:
          "AI-optimized hooks and captions contributed to stronger viewer retention for creators.",
      },
      {
        title: "Premium Client Experience",
        description:
          "The dashboard created a professional interface for high-ticket client relationships.",
      },
      {
        title: "Frictionless Operational Scaling",
        description:
          "The agency can grow its client base without sacrificing quality or delivery reliability.",
      },
    ],
    liveUrl: "http://beks-media.vercel.app/",
  },
  {
    slug: "re-morph",
    title: "Re-Morph",
    eyebrow: "Solana Perpetual Trading Platform",
    headline: "Enhancing decentralized perpetual trading with AI-powered predictive intelligence.",
    year: "2026",
    category: "DeFi + Web3",
    result: "Low-Latency Trading Insights",
    image:
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=1200&h=760&fit=crop&q=80",
    accentColor: "#C8FF00",
    gradient: "from-[#C8FF00]/20 via-violet-300/10 to-transparent",
    services: [
      "AI Model Development",
      "Full-Stack Development",
      "Web3 Architecture",
      "API & SDK Integration",
    ],
    industry: ["Decentralized Finance", "Web3", "Artificial Intelligence"],
    technologies: [
      "Python FastAPI",
      "React.js",
      "AI Model Wrapping",
      "Solana Web3.js",
      "Raydium SDK",
      "Tailwind CSS",
    ],
    tags: ["Solana", "AI", "DeFi"],
    overview:
      "Re-Morph is an advanced DeFi ecosystem built to elevate decentralized perpetual trading on Solana. By integrating with Raydium perpetual liquidity pools, the platform provides AI-powered insights, dynamic risk management, and real-time market analysis.",
    challenge:
      "Perpetual trading is high-risk and volatile, and most decentralized exchanges lack predictive intelligence for managing leverage. The client needed a low-latency platform that could ingest high-volume Raydium trading data while applying AI layers for actionable, real-time insights.",
    capabilities: [
      {
        title: "AI Orchestration Layer",
        description:
          "Predictive models monitor market volatility and provide real-time risk assessments and trading signals.",
      },
      {
        title: "High-Speed Solana Architecture",
        description:
          "A backend optimized for the speed and low-latency demands of the Solana network.",
      },
      {
        title: "Dynamic Risk Management",
        description:
          "Institutional-grade analytics help users avoid liquidations during volatile market swings.",
      },
      {
        title: "Complex Data Visualizations",
        description:
          "A responsive frontend displays heavy charting and live data for ETH/USDC and other perpetual pairs.",
      },
    ],
    approach:
      "We built the Re-Morph full-stack infrastructure with a secure connection to Raydium perpetual trading endpoints, a specialized AI orchestration layer, a FastAPI backend, Solana Web3.js integration, and React.js data visualizations optimized for institutional-grade performance.",
    testimonial: {
      quote:
        "This team possesses an unparalleled understanding of both Web3 infrastructure and advanced AI model integration. They built a highly complex, low-latency trading platform that performs flawlessly under the massive data loads of the Solana network.",
      author: "Julian Hayes",
      role: "Co-Founder and Lead Strategist at Re-Morph",
    },
    outcomes: [
      {
        title: "Democratized Leverage Trading",
        description:
          "AI-driven insights reduce the complexity of perpetual trading for everyday users.",
      },
      {
        title: "Institutional-Grade Analytics",
        description:
          "High-tier predictive tools and data models are available to the decentralized Web3 community.",
      },
      {
        title: "Enhanced Risk Management",
        description:
          "Data-backed environments improve trading efficiency and help prevent unnecessary liquidations.",
      },
      {
        title: "Increased Trader Retention",
        description:
          "Reliable, low-latency market intelligence increased trust and platform retention.",
      },
    ],
    liveUrl: "https://re-morph.vercel.app/",
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudyData {
  const currentIndex = CASE_STUDIES.findIndex((caseStudy) => caseStudy.slug === slug);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % CASE_STUDIES.length;

  return CASE_STUDIES[nextIndex];
}
