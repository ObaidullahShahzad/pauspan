"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, SlidersHorizontal } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(CASE_STUDIES.map((project) => project.category))),
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return CASE_STUDIES;
    }

    return CASE_STUDIES.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const initAnimations = async () => {
      try {
        const { default: gsap } = await import("gsap");

        ctx = gsap.context(() => {
          gsap.fromTo(
            ".projects-hero > *",
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
            }
          );
        }, containerRef);
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };

    initAnimations();
    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    const animateCards = async () => {
      try {
        const { default: gsap } = await import("gsap");

        gsap.fromTo(
          ".project-list-card",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.45,
            ease: "power2.out",
          }
        );
      } catch (error) {
        console.error("GSAP card animation failed:", error);
      }
    };

    animateCards();
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian pt-20">
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="projects-hero max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6 uppercase tracking-widest">
              Our Work
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Case Studies Built for <span className="accent-text">Real Outcomes</span>
            </h1>

            <p className="text-white/80 text-xl leading-relaxed max-w-2xl">
              Explore the latest Pauspan projects across AI platforms, creator tools, Web3 ecosystems, educational products, and media workflow automation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              <SlidersHorizontal size={14} className="text-accent" />
              Filter Projects
            </div>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-accent text-black shadow-[0_0_20px_rgba(200,255,0,0.28)]"
                      : "border border-white/10 bg-white/5 text-white/60 hover:border-accent/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-list-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-accent/35"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} case study`}
                    fill
                    unoptimized
                    className="object-cover brightness-[0.72] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-md">
                    {project.year}
                  </div>

                  <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                    {project.category}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                      {project.result}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {project.eyebrow}
                  </p>

                  <h2 className="font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {project.headline}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 text-sm font-bold text-accent inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    Read Case Study <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
