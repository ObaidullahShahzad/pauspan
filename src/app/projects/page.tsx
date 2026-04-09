"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Strategy", "Branding", "Digital", "Product", "Growth"];

const projects = [
  { title: "Meridian Finance", category: "Strategy", result: "+300% Revenue", desc: "Complete rebrand and digital transformation for a $50M fintech firm. Rearchitected their go-to-market strategy and rebuilt their digital presence from the ground up.", gradient: "from-blue-600 via-violet-600 to-purple-700", tags: ["Strategy", "Branding", "Web"], year: "2024" },
  { title: "Nova Health", category: "Product", result: "+150% Signups", desc: "Redesigning a healthcare platform serving 1M+ patients. We redesigned the complete user journey, reducing drop-off by 60% and doubling signups.", gradient: "from-emerald-500 via-teal-600 to-cyan-700", tags: ["UX/UI", "Product", "Mobile"], year: "2024" },
  { title: "Apex Studio", category: "Growth", result: "50K Users", desc: "A multi-channel growth strategy that took an indie studio from 0 to 50,000 users in 6 months through targeted content and community building.", gradient: "from-orange-500 via-red-500 to-pink-600", tags: ["Marketing", "Growth", "Social"], year: "2023" },
  { title: "Stratos AI", category: "Digital", result: "Series A", desc: "End-to-end AI integration and operations overhaul for a B2B SaaS, positioning them for their successful Series A raise.", gradient: "from-indigo-500 via-blue-600 to-cyan-600", tags: ["Tech", "AI", "Ops"], year: "2024" },
  { title: "Bloom Agency", category: "Branding", result: "3x Clients", desc: "Full brand identity and positioning work for a boutique creative agency. New visual system tripled their inbound inquiries within 90 days.", gradient: "from-pink-500 via-rose-500 to-red-600", tags: ["Branding", "Identity", "Strategy"], year: "2023" },
  { title: "Clearify SaaS", category: "Product", result: "4.9★ Rating", desc: "Product design overhaul for a project management tool. User satisfaction scores jumped from 3.2 to 4.9 stars following redesign.", gradient: "from-cyan-500 via-sky-600 to-blue-700", tags: ["Product", "UX/UI", "Design"], year: "2023" },
  { title: "Taskflow", category: "Strategy", result: "$2M ARR", desc: "Growth strategy and product positioning that helped Taskflow hit $2M ARR within 18 months of launch.", gradient: "from-yellow-500 via-amber-500 to-orange-600", tags: ["Strategy", "Growth", "Ops"], year: "2024" },
  { title: "PerspectiveAI", category: "Digital", result: "10x Scale", desc: "Digital transformation project that automated 80% of their manual workflows, allowing them to scale 10x without adding headcount.", gradient: "from-violet-600 via-purple-600 to-fuchsia-700", tags: ["Digital", "AI", "Automation"], year: "2024" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        gsap.from(".projects-hero > *", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    initGSAP();
  }, []);

  useEffect(() => {
    const animate = async () => {
      try {
        const { default: gsap } = await import("gsap");
        gsap.fromTo(
          ".project-item",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
          }
        );
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    animate();
  }, [active]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="projects-hero max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              OUR WORK
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-6">
              Work That <span className="accent-text">Moves</span> the Needle
            </h1>
            <p className="text-text-dim text-xl leading-relaxed">
              Real projects. Real results. Every case study represents a partnership built on trust, craft, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section ref={sectionRef} className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-accent text-obsidian font-bold shadow-[0_0_20px_rgba(200,255,0,0.3)]"
                    : "glass-card text-text-dim hover:text-text hover:border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ title, result, desc, gradient, tags, year }) => (
              <div
                key={title}
                className="project-item glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-400 group cursor-pointer"
              >
                <div className={`relative h-48 bg-gradient-to-br ${gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-5xl text-white/15 group-hover:text-white/25 transition-colors">
                      {title[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <ExternalLink className="text-white" size={18} />
                    <span className="text-white text-sm">View Case Study</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-obsidian text-xs font-bold px-3 py-1 rounded-full">
                    {result}
                  </div>
                  <div className="absolute top-4 left-4 text-white/60 text-xs">{year}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-text mb-2 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-subtle text-text-dim">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-xs text-accent font-medium hover:gap-3 transition-all">
                    Read Case Study <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-glass-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-text mb-6">
            Want to Be Our Next <span className="accent-text">Success Story?</span>
          </h2>
          <p className="text-text-dim mb-10">Let&apos;s discuss your project and see how we can deliver similar results for your business.</p>
          <Button variant="primary" size="lg" href="/contact">
            Start a Conversation <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
