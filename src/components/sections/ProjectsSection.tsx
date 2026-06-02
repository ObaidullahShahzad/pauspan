"use client";

import { useEffect, useRef } from "react";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Layers,
  Palette,
  Shield,
  Zap,
  type LucideProps,
} from "lucide-react";
import { CASE_STUDIES, type CaseStudyData } from "@/data/case-studies";

const PROJECT_ICONS: Record<string, ComponentType<LucideProps>> = {
  influenceher: Globe,
  "chef-colin": Zap,
  "safari-coin": BarChart3,
  "cynq-ai": Layers,
  "re-morph": Palette,
  "beks-media": Shield,
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const initAnimations = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.set(".project-card", { opacity: 0, y: 30 });
          gsap.to(".project-card", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }, sectionRef);
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };

    initAnimations();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[10px] font-bold tracking-widest text-[#C8FF00] border border-white/20 mb-6 uppercase">
            Our Portfolios
          </span>

          <h2 className="font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-[-0.03em] leading-[0.95] mb-6">
            Featured <span className="text-[#C8FF00]">Case Studies</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Latest AI, Web3, education, media, and DeFi projects built to turn complex ideas into high-performing digital products.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              Icon={PROJECT_ICONS[project.slug] ?? Layers}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#C8FF00]/40 hover:bg-[#C8FF00] hover:text-black"
          >
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  Icon,
}: {
  project: CaseStudyData;
  Icon: ComponentType<LucideProps>;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group flex flex-col bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 relative h-full hover:border-[#C8FF00]/30 hover:-translate-y-1"
    >
      <article className="flex h-full flex-col">
        <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={`${project.title} case study preview`}
            fill
            unoptimized
            className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-500" />

          <div
            className="absolute top-5 left-5 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md z-20 border border-white/10 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
            style={{
              background: `${project.accentColor}20`,
              color: project.accentColor,
            }}
          >
            <Icon size={22} />
          </div>

          <div className="absolute top-5 right-5 rounded-full bg-[#C8FF00] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
            {project.year}
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow transition-colors duration-500 group-hover:bg-[#1e2303]">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8FF00]">
            {project.eyebrow}
          </div>

          <h3 className="font-display font-bold text-xl text-white mb-3 transition-colors duration-500 group-hover:text-[#C8FF00]">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500">
            {project.headline}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase font-bold tracking-tighter px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 group-hover:border-[#C8FF00]/30 group-hover:text-white transition-all duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-[#C8FF00] group-hover:gap-3 transition-all duration-300">
              View Case Study <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
