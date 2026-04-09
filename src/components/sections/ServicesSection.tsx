"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Layers, Zap, BarChart3, Globe, Palette, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Strategy Consulting",
    desc: "Deep market analysis and tailored strategy frameworks that align with your vision and accelerate sustainable growth.",
    tags: ["Market Research", "Roadmapping", "OKRs"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Palette,
    title: "Brand Development",
    desc: "Crafting memorable identities that resonate with your audience and set you apart in competitive landscapes.",
    tags: ["Identity", "Visual Systems", "Guidelines"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    desc: "End-to-end digital solutions that modernize your operations and unlock new channels for value creation.",
    tags: ["Tech Stack", "Integration", "Automation"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    desc: "Data-driven campaigns and growth loops engineered to maximize acquisition, retention, and lifetime value.",
    tags: ["Performance", "SEO", "Campaigns"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Zap,
    title: "Product Design",
    desc: "User-obsessed product experiences that convert visitors into loyal customers through intuitive, delightful design.",
    tags: ["UX/UI", "Prototyping", "Testing"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Operations & Scale",
    desc: "Streamlined processes, robust systems, and scalable infrastructure to support your growth without friction.",
    tags: ["Processes", "Systems", "Scaling"],
    color: "from-accent/20 to-accent/10",
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=380&fit=crop&q=80",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".service-card", {
          y: 60,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        gsap.from(".services-heading", {
          y: 40,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="services-heading text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
            SERVICES
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6">
            Everything You Need to{" "}
            <span className="accent-text">Scale Up</span>
          </h2>
          <p className="text-text-dim leading-relaxed">
            Comprehensive service solutions engineered to drive measurable outcomes 
            across every dimension of your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags, color, accent, image }) => (
            <div
              key={title}
              className="service-card group glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-400 relative !opacity-100 card-3d cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark gradient overlay to keep dark tech feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                {/* Icon badge in corner */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}20`, color: accent, backdropFilter: 'blur(8px)', border: `1px solid ${accent}30` }}
                >
                  <Icon size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl`}
                />

                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-lg text-text mb-2 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-5">{desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ background: `${accent}10`, color: accent, borderColor: `${accent}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
                    style={{ color: accent }}
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
