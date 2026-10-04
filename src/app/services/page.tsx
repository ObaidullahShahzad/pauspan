"use client";

import { useEffect, useRef } from "react";
import { Zap, BarChart3, Receipt, Globe, Layers, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
// ==========================================
// DATA ARCHITECTURE LAYER CONFIGURATIONS
// ==========================================

const SERVICES_DATA_CONFIG = [
  {
    icon: Zap,
    title: "AI Transformation",
    shortDesc: "Intelligent automation and machine learning solutions that modernize operations and unlock new enterprise value.",
    longDesc: "We evaluate your existing infrastructure and identify high-impact opportunities for artificial intelligence integration. Our specialists develop and deploy custom AI models that streamline workflows, enhance decision making, and provide a definitive competitive edge in your market.",
    features: ["AI readiness assessment", "Process automation and optimization", "Custom machine learning models", "Data strategy and infrastructure", "Team training and AI adoption"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Receipt,
    title: "POS, ERP & Accounting",
    shortDesc: "Unified point-of-sale, ERP, and accounting software that runs sales, stock, and finance from one connected system.",
    longDesc: "We build business management software that replaces disconnected tools with a single source of truth. From retail point-of-sale to full ERP suites with financial accounting, inventory, purchasing, manufacturing, and HR, every module posts to the same ledger so your numbers always agree.",
    features: ["Point-of-sale and billing systems", "ERP suites across sales, purchase, and stock", "Financial accounting and reporting", "Role-based access and tax compliance", "Data migration and team onboarding"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Globe,
    title: "Web Development",
    shortDesc: "High-performance web applications engineered for scalability, security, and exceptional user experiences.",
    longDesc: "We build robust digital platforms tailored to your specific business requirements. From complex enterprise portals to dynamic customer-facing applications, our development team utilizes modern tech stacks to deliver fast, secure, and fully responsive web solutions.",
    features: ["Custom web application development", "Enterprise portal engineering", "Frontend and backend architecture", "API development and integration", "Performance and security optimization"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: BarChart3,
    title: "AI SaaS",
    shortDesc: "Cloud-based artificial intelligence software designed to solve specific industry challenges at scale.",
    longDesc: "We conceptualize, build, and deploy Artificial Intelligence Software as a Service products. By combining scalable cloud infrastructure with advanced AI capabilities, we deliver subscription-based platforms that generate recurring revenue and solve complex user problems natively.",
    features: ["AI product conceptualization", "Cloud architecture design", "Multi-tenant SaaS development", "AI feature integration", "Continuous deployment and scaling"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Layers,
    title: "MVP Design & Development",
    shortDesc: "Rapid prototyping and lean development to validate your product ideas and accelerate time to market.",
    longDesc: "We help startups and enterprises launch Minimum Viable Products quickly and efficiently. Our process focuses on core functionalities that solve primary user needs, allowing you to gather market feedback, attract investors, and iterate based on real user data.",
    features: ["Product strategy and scoping", "Wireframing and rapid prototyping", "Core feature development", "User testing and validation", "Post-launch iteration roadmap"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Shield,
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile applications designed to engage users and drive business growth on any device.",
    longDesc: "We engineer intuitive mobile experiences for iOS and Android platforms. Our mobile development process prioritizes seamless performance, intuitive user interfaces, and robust backend architectures to ensure your app scales effortlessly as your user base grows.",
    features: ["iOS and Android native development", "Cross-platform mobile solutions", "Mobile UI and UX design", "App store optimization and launch", "Ongoing maintenance and support"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
]

// ==========================================
// APP DIRECTORY CORE SERVICES PAGE COMPONENT
// ==========================================

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Create a GSAP context for proper cleanup
        ctx = gsap.context(() => {

          // Hero animation — fromTo so end state is always visible
          gsap.fromTo(
            ".services-hero > *",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            }
          );

          // Service cards animation — fromTo with ScrollTrigger
          gsap.fromTo(
            ".service-detail-card",
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".services-grid",
                start: "top 80%",
              },
            }
          );

        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };

    initGSAP();

    // Cleanup on unmount to prevent memory leaks / stale animations
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Presentation Layout */}
      <section ref={heroRef} className="pt-12 pb-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="services-hero max-w-3xl [&>*]:opacity-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              SERVICES
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-8">
              What We Do <span className="accent-text">Best</span>
            </h1>
            <p className="text-text-dim text-xl leading-relaxed max-w-xl mb-10">
              Six core service areas staffed by technology specialists dedicated to delivering measurable business value and future-ready digital products.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/projects">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Operational Metric Matrix Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 services-grid">
          <div className="space-y-8">
            {SERVICES_DATA_CONFIG.map(({ icon: Icon, title, shortDesc, longDesc, features, color, gradient }, i) => (
              <div
                key={title}
                className="service-detail-card opacity-0 glass-card rounded-2xl p-8 lg:p-12 hover:border-white/15 transition-all duration-300 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Meta Informational Deck */}
                    <div className="lg:w-80 shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        style={{ background: `${color}20`, color }}
                      >
                        <Icon size={26} />
                      </div>
                      <div
                        className="text-5xl font-display font-bold mb-4 opacity-10"
                        style={{ color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h2 className="font-display font-bold text-2xl text-text mb-3">
                        {title}
                      </h2>
                      <p className="text-text-dim text-sm leading-relaxed">
                        {shortDesc}
                      </p>
                    </div>

                    {/* Right Features Breakdown Matrix */}
                    <div className="flex-1">
                      <p className="text-text-dim leading-relaxed mb-8">
                        {longDesc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((f) => (
                          <div key={f} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 size={16} style={{ color }} />
                            <span className="text-text-dim">{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                          style={{ color }}
                        >
                          Get started with {title} <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}