"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Meridian Finance",
    category: "Strategy + Brand",
    desc: "Complete rebrand and digital transformation for a $50M fintech firm, resulting in 3x revenue growth.",
    gradient: "from-blue-600 via-violet-600 to-purple-700",
    tags: ["Strategy", "Branding", "Web"],
    result: "+300% Revenue",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Nova Health",
    category: "Product Design",
    desc: "Redesigning a healthcare platform for 1M+ patients with a focus on accessibility and conversion.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tags: ["UX/UI", "Product", "Mobile"],
    result: "+150% Signups",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Apex Studio",
    category: "Growth Marketing",
    desc: "Multi-channel growth strategy that took an indie studio from 0 to 50K users in 6 months.",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    tags: ["Marketing", "Growth", "Social"],
    result: "50K Users",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Stratos AI",
    category: "Digital Transformation",
    desc: "End-to-end AI integration and operations overhaul for a B2B SaaS scaling from seed to Series A.",
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    tags: ["Tech", "AI", "Ops"],
    result: "Series A",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&q=80",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".project-card", {
          y: 80,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 75%" 
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-5">
              OUR WORK
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
              Work That <span className="accent-text">Speaks</span>
            </h2>
          </div>
          <Button variant="outline" href="/projects" className="shrink-0">
            View All Projects
            <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, category, desc, gradient, tags, result, image }) => (
            <div
              key={title}
              className="project-card group glass-card rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-400 cursor-pointer !opacity-100"
            >
              {/* Image area */}
              <div
                className={`relative h-64 bg-gradient-to-br ${gradient} overflow-hidden`}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Always-on dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Bottom metadata */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <div className="text-xs text-white/70 font-medium">{category}</div>
                  <div className="bg-accent text-obsidian text-xs font-bold px-3 py-1 rounded-full">
                    {result}
                  </div>
                </div>
                {/* View Case Study on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <ExternalLink className="text-white" size={12} />
                  <span className="text-white text-xs font-medium">Case Study</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
