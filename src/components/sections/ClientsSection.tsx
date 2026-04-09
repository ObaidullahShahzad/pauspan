"use client";
import { useEffect, useRef } from "react";
import { Zap } from "lucide-react";

const clients = [
  "Meridian Finance", "Nova Health", "Apex Studio", "Stratos AI",
  "Clearify", "Bloom Agency", "Taskflow", "NovaTech",
  "ScaleUp Inc", "Contra", "PerspectiveAI", "ZW Branding",
  "Velara", "Pinkfly", "Bala Academy", "RecruitPilot",
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".clients-heading", {
          y: 30,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 85%" 
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden border-y border-glass-border">


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="clients-heading text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs text-text-dim mb-4">
            <Zap size={12} className="text-accent" />
            Trusted by 100+ businesses worldwide
            <Zap size={12} className="text-accent" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
            Brands That <span className="accent-text">Trust</span> Us
          </h2>
        </div>

        {/* Marquee row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10" />
          <div className="flex gap-4 animate-marquee w-max">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-xl text-sm text-text-dim hover:text-text hover:border-white/15 transition-all duration-200 cursor-default whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 (reverse) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10" />
          <div className="flex gap-4 animate-marquee-reverse w-max">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-xl text-sm text-text-dim hover:text-text hover:border-accent/20 hover:text-accent transition-all duration-200 cursor-default whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
