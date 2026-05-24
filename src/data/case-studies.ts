// ============================================================
// CASE STUDIES DATA — 6 Unique Projects
// Place this file at: src/data/case-studies.ts
// ============================================================

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  result: string;
  gradient: string;
  accentColor: string;
  tags: string[];
  link: string;
  challenge: string;
  overview: string;
  type: "resume" | "project-brief" | "brochure" | "correspondence" | "corporate" | "agency";

  resumeData?: {
    name: string;
    tagline: string;
    contact: { address: string; city: string; phone: string; email: string };
    skills: string;
    experience: {
      period: string;
      company: string;
      location: string;
      role: string;
      points: string[];
    }[];
    education: {
      period: string;
      institution: string;
      location: string;
      degree: string;
      desc: string;
    }[];
    awards: string[];
  };

  projectBriefData?: {
    name: string;
    date: string;
    author: string;
    company: string;
    overview: string;
    goals: string[];
    specifications: string;
    specsDetail: string;
    milestones: { title: string; desc: string }[];
  };

  brochureData?: {
    company: string;
    date: string;
    productOverview: string;
    sections: { title: string; content: string }[];
    details: string;
  };

  correspondenceData?: {
    senderName: string;
    senderAddress: string;
    senderCity: string;
    senderPhone: string;
    senderEmail: string;
    date: string;
    recipientName: string;
    recipientTitle: string;
    recipientCompany: string;
    recipientAddress: string;
    recipientCity: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
  };
}

export const CASE_STUDIES: CaseStudyData[] = [
  // ─────────────────────────────────────────────
  // 1 — Personal Branding Resume
  // ─────────────────────────────────────────────
  {
    slug: "personal-branding-resume",
    title: "Personal Branding",
    subtitle: "Resume & Identity Design",
    year: "2026",
    category: "Branding",
    result: "+340% Reach",
    gradient: "from-[#C8FF00]/10 to-transparent",
    accentColor: "#C8FF00",
    tags: ["Branding", "Identity", "Typography", "Print"],
    link: "#",
    challenge:
      "The client needed a personal brand identity that stood out in a saturated market — combining elegant typography with a bold visual language that communicated authority and creativity simultaneously.",
    overview:
      "A comprehensive personal branding project encompassing resume design, visual identity, and professional presence. We built a system that is immediately recognizable yet versatile across digital and print media.",
    type: "resume",
    resumeData: {
      name: "Alex Morgan",
      tagline: "Creative Director & Brand Strategist",
      contact: {
        address: "123 Design Street",
        city: "New York, NY 10001",
        phone: "(212) 555-0190",
        email: "alex@example.com",
      },
      skills:
        "Brand strategy, visual identity systems, typography, print design, digital marketing, creative direction, motion graphics, and cross-platform campaign development.",
      experience: [
        {
          period: "JAN 2023 — PRESENT",
          company: "Studio Noir",
          location: "New York",
          role: "Creative Director",
          points: [
            "Led brand identity redesigns for 12+ Fortune 500 clients.",
            "Grew agency revenue by 68% through strategic positioning.",
            "Built and mentored a 15-person creative team.",
          ],
        },
        {
          period: "MAR 2020 — DEC 2022",
          company: "Apex Creative",
          location: "Brooklyn",
          role: "Senior Designer",
          points: [
            "Delivered 40+ brand identity projects across diverse industries.",
            "Established the agency's first in-house motion design practice.",
          ],
        },
        {
          period: "JUN 2018 — FEB 2020",
          company: "Freelance",
          location: "Remote",
          role: "Brand Consultant",
          points: [
            "Worked with 25+ startups to build cohesive visual identities.",
            "Specialized in typographic systems and color language.",
            "Delivered end-to-end brand guidelines and asset libraries.",
          ],
        },
      ],
      education: [
        {
          period: "SEP 2014 — MAY 2018",
          institution: "Parsons School of Design",
          location: "New York",
          degree: "BFA in Communication Design",
          desc: "Graduated with honors. Thesis focused on typographic identity systems and their psychological impact on brand perception.",
        },
      ],
      awards: [
        "D&AD Yellow Pencil — Brand Identity, 2025",
        "Communication Arts Award of Excellence, 2024",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 2 — Agency Platform
  // ─────────────────────────────────────────────
  {
    slug: "agency-platform",
    title: "Agency Platform",
    subtitle: "Full-Stack Web Application",
    year: "2025",
    category: "Development",
    result: "2.4x Conversion",
    gradient: "from-blue-500/10 to-transparent",
    accentColor: "#60A5FA",
    tags: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
    link: "#",
    challenge:
      "A growing creative agency needed a digital platform that matched their premium positioning — fast, animated, and built to convert visitors into clients while showcasing a diverse portfolio.",
    overview:
      "End-to-end development of a high-performance agency website with custom CMS integration, complex GSAP animations, and a conversion-optimized project showcase system.",
    type: "agency",
    resumeData: {
      name: "Jordan Lee",
      tagline: "Full-Stack Developer & Technical Lead",
      contact: {
        address: "456 Tech Avenue",
        city: "San Francisco, CA 94105",
        phone: "(415) 555-0142",
        email: "jordan@agencyplatform.io",
      },
      skills:
        "Next.js, React, TypeScript, Node.js, PostgreSQL, GSAP, Tailwind CSS, AWS, Docker, CI/CD pipelines, performance optimization.",
      experience: [
        {
          period: "FEB 2024 — PRESENT",
          company: "Vertex Labs",
          location: "San Francisco",
          role: "Technical Lead",
          points: [
            "Architected scalable Next.js platform serving 500K+ monthly visitors.",
            "Reduced page load times by 60% through code splitting and edge caching.",
            "Led a team of 8 engineers across frontend and backend tracks.",
          ],
        },
        {
          period: "AUG 2021 — JAN 2024",
          company: "Digital Forge",
          location: "Remote",
          role: "Senior Developer",
          points: [
            "Built 30+ client websites with complex animation and CMS integrations.",
            "Introduced TypeScript across the entire codebase, reducing bugs by 45%.",
          ],
        },
        {
          period: "MAY 2019 — JUL 2021",
          company: "StartupKit",
          location: "Austin",
          role: "Frontend Engineer",
          points: [
            "Developed reusable component library used across 15+ products.",
            "Implemented real-time features using WebSocket and Redis.",
          ],
        },
      ],
      education: [
        {
          period: "SEP 2015 — MAY 2019",
          institution: "UC Berkeley",
          location: "California",
          degree: "BS in Computer Science",
          desc: "Specialization in Human-Computer Interaction and distributed systems. Dean's List, 2017–2019.",
        },
      ],
      awards: [
        "Awwwards Site of the Day — Agency Platform, 2025",
        "GitHub Arctic Code Vault Contributor, 2024",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 3 — Project Docs
  // ─────────────────────────────────────────────
  {
    slug: "project-docs",
    title: "Project Docs",
    subtitle: "Documentation & Planning System",
    year: "2025",
    category: "Strategy",
    result: "3x Efficiency",
    gradient: "from-emerald-500/10 to-transparent",
    accentColor: "#34D399",
    tags: ["Documentation", "Strategy", "Planning", "Systems"],
    link: "#",
    challenge:
      "A mid-size firm was struggling with inconsistent project documentation causing miscommunication and delays. We designed a standardized framework that scaled across all departments.",
    overview:
      "Creation of a comprehensive project documentation system including briefs, specifications, milestone tracking, and stakeholder reporting templates — all built on a unified design language.",
    type: "project-brief",
    projectBriefData: {
      name: "Unified Docs Framework",
      date: "09.04.2025",
      author: "Sam Rivera",
      company: "Clarity Systems",
      overview:
        "A standardized documentation framework built to streamline project initiation, execution, and delivery. Designed for agencies and product teams managing multiple concurrent workstreams, this system reduces onboarding time and eliminates ambiguity at every project phase.",
      goals: [
        "Establish a single source of truth for all project documentation.",
        "Reduce project kickoff preparation time by 60%.",
        "Create scalable templates usable across departments and client types.",
        "Enable seamless handoffs between teams with zero context loss.",
      ],
      specifications:
        "The framework is built on a modular architecture — each document type (brief, spec, milestone tracker) is self-contained yet interconnected. Teams can adopt the full system or implement individual modules independently.",
      specsDetail:
        "All templates are available in Notion, Figma, and Google Docs formats. Each module includes instructional tooltips, sample data, and version control guidelines. The system supports multilingual adaptation and custom branding.",
      milestones: [
        {
          title: "Discovery & Audit",
          desc: "Audit of existing documentation across 6 departments, identifying gaps and pain points through 20+ stakeholder interviews.",
        },
        {
          title: "Framework Design",
          desc: "Design and prototype of core document templates with iterative feedback cycles and three rounds of user testing.",
        },
        {
          title: "System Build",
          desc: "Full implementation in Notion and Figma with custom automations, database linking, and role-based access controls.",
        },
        {
          title: "Rollout & Training",
          desc: "Company-wide rollout with live training sessions, video documentation, and a dedicated internal support channel.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 4 — Product Brochure
  // ─────────────────────────────────────────────
  {
    slug: "product-brochure",
    title: "Product Brochure",
    subtitle: "Print & Digital Marketing Collateral",
    year: "2024",
    category: "Print Design",
    result: "+89% Inquiries",
    gradient: "from-orange-500/10 to-transparent",
    accentColor: "#FB923C",
    tags: ["Print", "Editorial", "Marketing", "Layout"],
    link: "#",
    challenge:
      "A premium product line lacked materials that matched its quality positioning. Existing brochures felt generic and failed to communicate the product's craftsmanship and value.",
    overview:
      "Design and production of a flagship product brochure — a 24-page editorial-style publication combining luxury photography direction, refined typography, and persuasive copywriting.",
    type: "brochure",
    brochureData: {
      company: "Artura Co.",
      date: "September 04, 2024",
      productOverview:
        "Artura's flagship collection represents the intersection of artisanal craft and modern utility. Each product is designed to outlast trends — built with precision materials, thoughtful ergonomics, and a commitment to zero-waste manufacturing. This brochure introduces the full 2024 product line to retail partners and end consumers.",
      sections: [
        {
          title: "Craftsmanship",
          content:
            "Every piece in the Artura collection is hand-finished by master craftspeople with decades of experience. Our atelier employs traditional techniques alongside modern precision tooling, ensuring consistency without sacrificing the warmth of the handmade.",
        },
        {
          title: "Materials",
          content:
            "We source exclusively from certified sustainable suppliers. Our primary materials — full-grain leather, solid walnut, and brushed brass — are selected for longevity and natural beauty that improves with age.",
        },
        {
          title: "Design Philosophy",
          content:
            "Less, but better. Every element earns its place. We design for the 20-year owner — creating objects that become more meaningful as they accumulate the patina of a well-lived life.",
        },
      ],
      details:
        "The full Artura 2024 collection is available through authorized retail partners and directly via artura.co. Custom commissions are accepted for corporate gifting and interior specification projects. Lead time for standard orders is 4–6 weeks; custom pieces require 12–16 weeks. All products include a lifetime craftsmanship guarantee and complimentary restoration service.",
    },
  },

  // ─────────────────────────────────────────────
  // 5 — Correspondence
  // ─────────────────────────────────────────────
  {
    slug: "correspondence",
    title: "Correspondence",
    subtitle: "Executive Communication Design",
    year: "2024",
    category: "Communication",
    result: "98% Response Rate",
    gradient: "from-purple-500/10 to-transparent",
    accentColor: "#A78BFA",
    tags: ["Communication", "Copy", "Strategy", "B2B"],
    link: "#",
    challenge:
      "A C-suite executive was struggling to get responses to partnership outreach. Open rates were high but reply rates were under 8% — the messaging lacked persuasive structure and personal resonance.",
    overview:
      "Strategic redesign of executive communication templates and outreach sequences, combining behavioral psychology principles with refined prose to dramatically improve engagement.",
    type: "correspondence",
    correspondenceData: {
      senderName: "Taylor Whitmore",
      senderAddress: "789 Executive Plaza, Suite 400",
      senderCity: "Chicago, IL 60601",
      senderPhone: "(312) 555-0178",
      senderEmail: "taylor@whitmore-partners.com",
      date: "4th March 2024",
      recipientName: "Alexandra Chen",
      recipientTitle: "CEO",
      recipientCompany: "Meridian Ventures",
      recipientAddress: "100 Innovation Drive",
      recipientCity: "Boston, MA 02110",
      salutation: "Dear Ms. Chen,",
      paragraphs: [
        "I am writing following our brief exchange at the SaaS Summit last month, where you shared your perspective on the shifting landscape of early-stage B2B investment. Your comments about the undervalued role of distribution strategy in portfolio companies stayed with me — it is precisely the gap our firm has built its thesis around.",
        "Whitmore Partners has spent the last six years partnering with Series A and B companies to architect go-to-market systems that compound over time. Our portfolio includes four companies that achieved category leadership within 24 months of engagement — not through increased spend, but through strategic repositioning and operational clarity.",
        "I would welcome the opportunity to explore whether there is a meaningful intersection between your current portfolio needs and our work. I will keep this brief — 20 minutes at your convenience.",
      ],
      closing: "With respect and anticipation,",
    },
  },

  // ─────────────────────────────────────────────
  // 6 — Corporate Identity
  // ─────────────────────────────────────────────
  {
    slug: "corporate-identity",
    title: "Corporate Identity",
    subtitle: "Brand System & Visual Language",
    year: "2024",
    category: "Identity",
    result: "4.8★ Client Score",
    gradient: "from-rose-500/10 to-transparent",
    accentColor: "#FB7185",
    tags: ["Identity", "Branding", "Guidelines", "Systems"],
    link: "#",
    challenge:
      "A recently merged corporation was operating with three conflicting visual identities across its divisions, eroding brand trust and creating confusion in the market.",
    overview:
      "Complete corporate identity unification — from brand audit and competitive analysis through to a comprehensive 80-page brand guidelines document, asset library, and implementation roadmap.",
    type: "project-brief",
    projectBriefData: {
      name: "Unified Corporate Identity System",
      date: "11.09.2024",
      author: "Morgan Blake",
      company: "Nexus Group",
      overview:
        "A full-scale corporate identity consolidation project undertaken following the merger of three established brands into the Nexus Group. The project encompassed brand strategy, visual identity design, tone of voice development, and a company-wide implementation program touching 1,200+ employees across 14 offices.",
      goals: [
        "Create a unified visual identity that honors each legacy brand while building a cohesive new whole.",
        "Develop a flexible brand system that works across print, digital, environmental, and merchandise.",
        "Produce a comprehensive brand guidelines document for internal and agency use.",
        "Achieve full brand rollout across all touchpoints within 6 months.",
      ],
      specifications:
        "The identity system is built on a modular grid architecture that allows consistent application at any scale — from business cards to building signage. The primary wordmark exists in three variants to accommodate all use cases.",
      specsDetail:
        "Deliverables include: primary and secondary logo suites, full color system, typography stack with licensing, iconography library (200+ icons), photography and illustration style guides, motion and animation principles, and environmental/wayfinding guidelines.",
      milestones: [
        {
          title: "Brand Audit & Research",
          desc: "Comprehensive audit of all three legacy identities, competitive landscape analysis, and 40+ stakeholder interviews to extract brand values and vision.",
        },
        {
          title: "Strategy & Positioning",
          desc: "Development of brand architecture, positioning statement, core values framework, and tone of voice guidelines — approved by the executive board.",
        },
        {
          title: "Visual Identity Design",
          desc: "Iterative design of the full visual identity system through three presentation rounds, incorporating feedback from marketing, legal, and leadership.",
        },
        {
          title: "Guidelines & Handoff",
          desc: "Production of the 80-page brand guidelines document, asset library, and team training workshops across all 14 offices.",
        },
      ],
    },
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}