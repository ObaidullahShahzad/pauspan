"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// CONSTANTS & CONFIGURATIONS
// ==========================================

const MARQUEE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", label: "Next.js & React" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80", label: "AI & GPT LLMs" },
  { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&q=80", label: "Cloud (AWS/Azure)" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80", label: "Digital Strategy" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80", label: "Data Analytics" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&q=80", label: "UI/UX Design" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80", label: "Tech Stack" },
  { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=300&fit=crop&q=80", label: "Machine Learning" },
];

const STATS_DATA = [
  { value: "50+", label: "Modern Tech Tools", icon: Zap },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "24/7", label: "Tech Support", icon: Cpu },
];

// ==========================================
// MAIN HERO SECTION COMPONENT
// ==========================================

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let ctx: any;

    const initAnimations = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      setIsReady(true);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo(".hero-title span", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.3")
          .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .fromTo(".hero-buttons", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
          .fromTo(".stat-item", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
          .fromTo(".marquee-container", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.7");

        gsap.to(".hero-title", {
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }, heroRef);
    };

    initAnimations();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Dynamic Background with Radial Glow and Grid Overlay */}
      <div className="absolute inset-0 bg-obsidian -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-accent border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Digital Transformation &amp; Strategy
              <Sparkles size={12} />
            </div>

            {/* ✅ HEADING — Image 1 style:
                - Mixed case (not ALL CAPS)
                - font-black (heavy like Image 1)
                - leading-[0.95] tight
                - tracking-[-0.02em]
                - teeno lines same size (text-6xl sm:text-7xl lg:text-8xl)
                - middle line: gradient-text (lime color)
            */}
            <h1 className="hero-title font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] overflow-hidden">
              <span className="block text-text">We Craft</span>
              <span className="block gradient-text">Digital</span>
              <span className="block text-text">Excellence</span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-white/80 text-lg leading-relaxed max-w-md">
              Pauspan leverages a premium tech stack—from{" "}
              <span className="text-text">Next.js</span> to{" "}
              <span className="text-text">AI/LLMs</span>—to build scalable
              solutions that transform businesses.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start a Project <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/projects">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {STATS_DATA.map(({ value, label, icon: Icon }) => (
                <div key={label} className="stat-item flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-text">{value}</div>
                    <div className="text-xs text-white/80">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Marquee */}
          <div className="marquee-container relative h-[600px] lg:h-[750px] overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-obsidian to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-obsidian to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 h-full p-4 bg-[#050505]">
              <MarqueeColumn items={MARQUEE_IMAGES} />
              <MarqueeColumn items={MARQUEE_IMAGES} reverse />
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS */}
      <style jsx global>{`
        .hero-badge,
        .hero-title span,
        .hero-desc,
        .hero-buttons,
        .stat-item,
        .marquee-container {
          opacity: 0;
        }
        @keyframes marquee-vert {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-vert-rev {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

// ==========================================
// SUB-COMPONENT: INFINITE MARQUEE COLUMN
// ==========================================

function MarqueeColumn({ items, reverse = false }: { items: typeof MARQUEE_IMAGES; reverse?: boolean }) {
  const list = reverse ? [...items].reverse() : items;

  return (
    <div className={`flex-1 overflow-hidden ${reverse ? "pt-20" : ""}`}>
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `${reverse ? "marquee-vert-rev" : "marquee-vert"} 40s linear infinite`,
        }}
      >
        {[...list, ...list].map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 h-64 rounded-xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="glass-card rounded-lg px-3 py-1.5 text-xs font-medium text-white">
                {img.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}