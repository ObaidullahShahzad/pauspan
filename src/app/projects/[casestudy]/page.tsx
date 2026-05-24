"use client";

import React, { useEffect, useRef } from "react";
import { notFound, useParams } from "next/navigation";
import {
    ArrowLeft,
    Sparkles,
    Calendar,
    Building2,
    Mail,
    Phone,
    MapPin,
    User,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    Layers,
    Target,
    Code2,
    Zap,
    Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy, CaseStudyData } from "../../../data/case-studies";

const caseImages: Record<string, string> = {
    "personal-branding-resume": "/project/agenccy.png",
    "agency-platform": "/project/brand.png",
    "project-docs": "/project/projectdoc.png",
    "product-brochure": "/project/broucher.png",
    "correspondence": "/project/corporaate.png",
    "corporate-identity": "/project/brandd.png",
};
const fallbackImage = "/projects/img.jpg";

function ResumeSection({
    data,
    accent,
}: {
    data: NonNullable<CaseStudyData["resumeData"]>;
    accent: string;
}) {
    return (
        <div className="space-y-12">
            <div
                className="reveal opacity-0 p-8 rounded-2xl border bg-[#09090b]/40 backdrop-blur-md shadow-2xl transition-all duration-500"
                style={{ borderColor: `${accent}20`, boxShadow: `0 20px 40px -15px ${accent}15` }}
            >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                    <div>
                        <h3 className="text-3xl font-black text-white tracking-tight">Your Name</h3>
                        <p className="text-sm mt-2 font-medium tracking-wide" style={{ color: accent }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </p>
                    </div>
                    <div className="text-left sm:text-right text-xs text-zinc-400 space-y-2.5 font-light">
                        <div className="flex items-center gap-2 sm:justify-end">
                            <MapPin size={12} style={{ color: accent }} />
                            123 Your Street
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                            <MapPin size={12} style={{ color: accent }} />
                            Your City, ST 12345
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                            <Phone size={12} style={{ color: accent }} />
                            (123) 456-7890
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                            <Mail size={12} style={{ color: accent }} />
                            no_reply@example.com
                        </div>
                    </div>
                </div>
            </div>

            <div className="reveal opacity-0 space-y-6">
                <p
                    className="text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-2"
                    style={{ color: accent }}
                >
                    <span className="w-4 h-px" style={{ backgroundColor: accent }} /> Experience
                </p>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/20 hover:bg-zinc-900/30 transition-all duration-300 space-y-3 group shadow-lg"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <p className="text-white font-semibold text-base group-hover:text-white transition-colors">
                                    Company, Location — Job Title
                                </p>
                                <p className="text-[10px] text-zinc-400 font-mono bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.05] inline-block w-fit">
                                    {idx === 0 ? "MONTH 20XX - PRESENT" : "MONTH 20XX - MONTH 20XX"}
                                </p>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="reveal opacity-0 space-y-6">
                <p
                    className="text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-2"
                    style={{ color: accent }}
                >
                    <span className="w-4 h-px" style={{ backgroundColor: accent }} /> Education
                </p>
                <div className="space-y-4">
                    {[1, 2].map((_, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/15 transition-all duration-300 space-y-3 shadow-lg"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <p className="text-white font-semibold text-base">
                                    School Name, Location — Degree
                                </p>
                                <p className="text-[10px] text-zinc-500 font-mono">MONTH 20XX - MONTH 20XX</p>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt ut laoreet dolore.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="reveal opacity-0 space-y-6">
                    <p
                        className="text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-2"
                        style={{ color: accent }}
                    >
                        <span className="w-4 h-px" style={{ backgroundColor: accent }} /> Projects
                    </p>
                    <div className="p-6 rounded-xl bg-[#09090b]/80 border border-white/[0.04] space-y-3 shadow-lg">
                        <p className="text-white font-semibold text-base">Project Name — Detail</p>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="reveal opacity-0 space-y-6">
                    <p
                        className="text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-2"
                        style={{ color: accent }}
                    >
                        <span className="w-4 h-px" style={{ backgroundColor: accent }} /> Skills
                    </p>
                    <div className="p-6 rounded-xl bg-[#09090b]/80 border border-white/[0.04] shadow-lg">
                        <ul className="text-zinc-400 text-sm space-y-3 font-light">
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                                Consectetuer adipiscing elit.
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                                Sed diam nonummy nibh euismod.
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                                Laoreet dolore magna aliquam erat.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectBriefSection({
    data,
    accent,
}: {
    data: NonNullable<CaseStudyData["projectBriefData"]>;
    accent: string;
}) {
    return (
        <div className="space-y-8">
            <div
                className="reveal opacity-0 p-8 rounded-2xl bg-[#09090b]/80 border transition-all duration-500 shadow-xl"
                style={{ borderColor: `${accent}15` }}
            >
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{data.name}</h3>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-zinc-400 text-xs pt-1">
                        <span className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                            <User size={12} style={{ color: accent }} /> {data.author}
                        </span>
                        <span className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                            <Building2 size={12} style={{ color: accent }} /> {data.company}
                        </span>
                        <span className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                            <Calendar size={12} style={{ color: accent }} /> {data.date}
                        </span>
                    </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.05]">
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{data.overview}</p>
                </div>
            </div>

            <div className="reveal opacity-0 p-8 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] space-y-5 shadow-xl">
                <p
                    className="text-xs uppercase tracking-[0.2em] font-extrabold flex items-center gap-2"
                    style={{ color: accent }}
                >
                    Target Goals
                </p>
                <ul className="space-y-4">
                    {data.goals.map((goal: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 group">
                            <span
                                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono font-bold text-black mt-0.5 transition-transform group-hover:scale-110"
                                style={{ background: accent }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
                                {goal}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="reveal opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] space-y-3 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.2em] font-extrabold" style={{ color: accent }}>
                        Specifications
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{data.specifications}</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] space-y-3 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.2em] font-extrabold text-zinc-500">Details</p>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{data.specsDetail}</p>
                </div>
            </div>
        </div>
    );
}

function BrochureSection({
    data,
    accent,
}: {
    data: NonNullable<CaseStudyData["brochureData"]>;
    accent: string;
}) {
    return (
        <div className="space-y-8">
            <div
                className="reveal opacity-0 p-8 rounded-2xl bg-[#09090b]/80 border transition-all duration-500 shadow-xl"
                style={{ borderColor: `${accent}15` }}
            >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">
                            Product Brochure
                        </p>
                        <h3 className="text-2xl font-bold text-white mt-1.5 tracking-tight">{data.company}</h3>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono bg-white/[0.04] border border-white/[0.05] px-3 py-1.5 rounded-lg">
                        {data.date}
                    </span>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.05]">
                    <p className="text-xs uppercase tracking-[0.2em] mb-3 font-bold" style={{ color: accent }}>
                        Product Overview
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{data.productOverview}</p>
                </div>
            </div>

            <div className="reveal opacity-0 space-y-4">
                {data.sections.map((section: { title: string; content: string }, i: number) => (
                    <div
                        key={i}
                        className="p-6 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/10 transition-all duration-300 space-y-3 group shadow-lg"
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                            <p
                                className="text-xs font-bold uppercase tracking-[0.15em]"
                                style={{ color: accent }}
                            >
                                {section.title}
                            </p>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CorrespondenceSection({
    data,
    accent,
}: {
    data: NonNullable<CaseStudyData["correspondenceData"]>;
    accent: string;
}) {
    const paragraphs = [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
    ];

    return (
        <div className="space-y-8">
            <div className="reveal opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                    className="p-6 rounded-2xl bg-[#09090b]/80 border space-y-4 shadow-lg"
                    style={{ borderColor: `${accent}15` }}
                >
                    <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: accent }}>
                        Sender
                    </p>
                    <div className="space-y-2 font-light text-sm">
                        <p className="text-white font-semibold text-base">Your Name</p>
                        <p className="text-zinc-400 text-xs font-light">123 Your Street, City, ST 12345</p>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs pt-2 border-t border-white/[0.03]">
                            <Mail size={12} style={{ color: accent }} />
                            no_reply@example.com
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] space-y-4 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">Recipient</p>
                    <div className="space-y-1 font-light text-sm">
                        <p className="text-white font-semibold text-base">Ronny Reader</p>
                        <p className="text-xs font-medium" style={{ color: accent }}>
                            CEO, Company Name
                        </p>
                        <p className="text-zinc-400 text-xs font-light">123 Address St, Anytown</p>
                    </div>
                </div>
            </div>

            <div
                className="reveal opacity-0 p-8 rounded-2xl bg-[#09090b]/60 border space-y-6 shadow-xl"
                style={{ borderColor: `${accent}10` }}
            >
                <p className="text-white font-medium text-base">Dear Ms. Reader,</p>
                <div className="space-y-5">
                    {paragraphs.map((para, i) => (
                        <p key={i} className="text-zinc-400 text-sm leading-relaxed font-light">
                            {para}
                        </p>
                    ))}
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.05] flex justify-between items-end">
                    <div className="space-y-1.5">
                        <p className="text-zinc-400 text-sm font-light">Sincerely,</p>
                        <p className="text-white font-bold text-base mt-4">Your Name</p>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-mono">4th September 20XX</p>
                </div>
            </div>
        </div>
    );
}

function ProcessTimeline({ accent }: { accent: string }) {
    const steps = [
        { icon: Target, label: "Discovery", desc: "Research & requirements gathering" },
        { icon: Layers, label: "Architecture", desc: "System design & planning" },
        { icon: Code2, label: "Development", desc: "Implementation & iteration" },
        { icon: Zap, label: "Optimization", desc: "Performance tuning & polish" },
        { icon: Award, label: "Delivery", desc: "Launch & post-release support" },
    ];

    return (
        <div className="reveal opacity-0 space-y-4 pt-6 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-zinc-500">
                Project Process
            </p>
            <div className="space-y-0">
                {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isLast = i === steps.length - 1;
                    return (
                        <div key={i} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                                    style={{ borderColor: `${accent}30`, backgroundColor: `${accent}10` }}
                                >
                                    <Icon size={13} style={{ color: accent }} />
                                </div>
                                {!isLast && (
                                    <div className="w-px flex-1 my-1" style={{ backgroundColor: `${accent}15` }} />
                                )}
                            </div>
                            <div className="pb-5">
                                <p
                                    className="text-white text-xs font-semibold leading-none mb-1 group-hover:text-white transition-colors"
                                    style={{ marginTop: "6px" }}
                                >
                                    {step.label}
                                </p>
                                <p className="text-zinc-500 text-[11px] font-light leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function OutcomeStats({ accent, result }: { accent: string; result: string }) {
    const stats = [
        { label: "Client Satisfaction", value: "98%" },
        { label: "On-time Delivery", value: "100%" },
        { label: "Performance Score", value: result },
    ];

    return (
        <div className="reveal opacity-0 space-y-4 pt-6 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-zinc-500">
                Key Outcomes
            </p>
            <div className="grid grid-cols-1 gap-3">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between px-4 py-3 rounded-xl border bg-[#09090b]/60 transition-all duration-300 hover:border-white/10"
                        style={{ borderColor: `${accent}15` }}
                    >
                        <p className="text-zinc-400 text-[11px] font-light">{stat.label}</p>
                        <p className="text-sm font-black tracking-tight" style={{ color: accent }}>
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TechStack({ tags, accent }: { tags: string[]; accent: string }) {
    return (
        <div className="reveal opacity-0 space-y-4 pt-6 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-zinc-500">
                Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1.5 bg-[#09090b] text-zinc-400 border border-white/[0.04] text-[9px] font-bold rounded-md uppercase tracking-wider transition-all duration-300 cursor-default"
                        onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => {
                            const el = e.currentTarget;
                            el.style.backgroundColor = accent;
                            el.style.color = "#000";
                            el.style.borderColor = accent;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => {
                            const el = e.currentTarget;
                            el.style.backgroundColor = "#09090b";
                            el.style.color = "";
                            el.style.borderColor = "rgba(255,255,255,0.04)";
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Deliverables({ accent }: { accent: string }) {
    const items = [
        "Fully responsive layout across all breakpoints",
        "Optimized asset pipeline with lazy loading",
        "Accessible semantic HTML structure",
        "Custom animation system with GSAP",
        "Production-ready deployment configuration",
        "Comprehensive documentation & handoff",
    ];

    return (
        <div className="reveal opacity-0 space-y-4 pt-6 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-zinc-500">
                Deliverables
            </p>
            <ul className="space-y-2.5">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 group">
                        <CheckCircle2
                            size={13}
                            className="flex-shrink-0 mt-0.5 transition-colors duration-300"
                            style={{ color: accent }}
                        />
                        <span className="text-zinc-500 text-[11px] font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProjectMeta({ year, accent }: { year: string; accent: string }) {
    return (
        <div className="reveal opacity-0 space-y-4 pt-6 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-zinc-500">
                Project Timeline
            </p>
            <div className="grid grid-cols-2 gap-3">
                <div
                    className="p-4 rounded-xl border bg-[#09090b]/60 space-y-1.5"
                    style={{ borderColor: `${accent}15` }}
                >
                    <p className="text-[9px] uppercase tracking-wider text-zinc-600 font-bold flex items-center gap-1.5">
                        <Calendar size={10} style={{ color: accent }} /> Year
                    </p>
                    <p className="text-white font-black text-base tracking-tight">{year}</p>
                </div>
                <div
                    className="p-4 rounded-xl border bg-[#09090b]/60 space-y-1.5"
                    style={{ borderColor: `${accent}15` }}
                >
                    <p className="text-[9px] uppercase tracking-wider text-zinc-600 font-bold flex items-center gap-1.5">
                        <Clock size={10} style={{ color: accent }} /> Duration
                    </p>
                    <p className="text-white font-black text-base tracking-tight">6 Weeks</p>
                </div>
            </div>
        </div>
    );
}

export default function ProjectDetailPage() {
    const params = useParams();
    const casestudy = params?.casestudy as string;
    const mainRef = useRef<HTMLDivElement>(null);

    const project = getCaseStudy(casestudy);

    useEffect(() => {
        if (!project) return;

        let ctx: { revert: () => void } | undefined;

        const initGSAP = async () => {
            try {
                const { default: gsap } = await import("gsap");
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
                    gsap.fromTo(
                        ".reveal",
                        { y: 25, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: "power2.out" }
                    );
                    gsap.to(".parallax-content", {
                        y: -30,
                        scrollTrigger: {
                            trigger: ".parallax-container",
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    });
                }, mainRef);
            } catch (error) {
                console.error("GSAP initialization failed:", error);
            }
        };

        initGSAP();
        return () => ctx?.revert();
    }, [casestudy, project]);

    if (!project) {
        notFound();
        return null;
    }

    const accent = project.accentColor;
    const dynamicBackgroundGradient = project.gradient || "from-[#C8FF00]/10 to-transparent";
    const heroImage = caseImages[casestudy] ?? fallbackImage;

    return (
        <main
            ref={mainRef}
            key={casestudy}
            className="min-h-screen bg-[#030303] text-white selection:bg-[#C8FF00] selection:text-black tracking-tight antialiased overflow-x-hidden"
        >
            <div
                className={`fixed -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br ${dynamicBackgroundGradient} opacity-[0.07] blur-[180px] pointer-events-none rounded-full z-0`}
            />

            <div className="w-full border-b border-white/[0.05] bg-[#030303]/40 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
                    <Link
                        href="/projects"
                        className="group px-4 py-2 rounded-full border flex items-center gap-2.5 transition-all duration-300 text-white"
                        style={{ borderColor: "rgba(255,255,255,0.18)", backgroundColor: "rgba(9,9,11,0.85)" }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            const el = e.currentTarget;
                            el.style.backgroundColor = "#ffffff";
                            el.style.color = "#000000";
                            el.style.borderColor = "#ffffff";
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            const el = e.currentTarget;
                            el.style.backgroundColor = "rgba(9,9,11,0.85)";
                            el.style.color = "#ffffff";
                            el.style.borderColor = "rgba(255,255,255,0.18)";
                        }}
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Back to Projects</span>
                    </Link>

                    <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold hidden sm:block">
                        Case Study Showcase
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

                    <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-0 py-4">
                        <div className="space-y-5">
                            <div
                                className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border text-[10px] font-bold tracking-[0.15em] uppercase"
                                style={{ color: accent, borderColor: `${accent}25` }}
                            >
                                <Sparkles size={10} className="animate-pulse" />
                                {project.year} Architectural Study
                            </div>

                            <h1 className="reveal opacity-0 text-4xl sm:text-5xl font-black leading-[1.1] tracking-tighter bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                                {project.title}
                            </h1>

                            <p
                                className="reveal opacity-0 text-xs font-bold tracking-[0.2em] uppercase"
                                style={{ color: accent }}
                            >
                                {project.subtitle}
                            </p>

                            <p className="reveal opacity-0 text-zinc-400 text-sm font-light leading-relaxed max-w-md">
                                {project.overview}
                            </p>
                        </div>

                        <div className="reveal opacity-0 grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/[0.06]">
                            <div className="space-y-1 py-2">
                                <span className="text-zinc-500 uppercase text-[9px] font-extrabold tracking-wider">
                                    Metrics
                                </span>
                                <p className="text-xl font-black tracking-tight" style={{ color: accent }}>
                                    {project.result}
                                </p>
                            </div>
                            <div className="space-y-1 py-2">
                                <span className="text-zinc-500 uppercase text-[9px] font-extrabold tracking-wider">
                                    Discipline
                                </span>
                                <p className="text-sm font-bold tracking-tight text-zinc-300 truncate">
                                    {project.category}
                                </p>
                            </div>
                        </div>

                        <ProjectMeta year={project.year} accent={accent} />
                        <ProcessTimeline accent={accent} />
                        <OutcomeStats accent={accent} result={project.result} />
                        <Deliverables accent={accent} />
                        <TechStack tags={project.tags} accent={accent} />

                        <div className="reveal opacity-0 pt-6 border-t border-white/[0.06] mt-6">
                            <a
                                href={project.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl border"
                                style={{
                                    backgroundColor: `${accent}10`,
                                    borderColor: `${accent}40`,
                                    color: "#fff",
                                }}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = accent;
                                    el.style.color = "#000";
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = `${accent}10`;
                                    el.style.color = "#fff";
                                }}
                            >
                                Launch Production Site
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-10 parallax-container">
                        <div
                            className="aspect-[16/10] rounded-2xl bg-[#09090b] border overflow-hidden relative group shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]"
                            style={{ borderColor: `${accent}15` }}
                        >
                            <Image
                                src={heroImage}
                                alt={project.title}
                                fill
                                unoptimized
                                className="object-cover object-center scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 brightness-[0.85] group-hover:brightness-100"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[3px]"
                                style={{
                                    background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
                                }}
                            />
                        </div>

                        <div className="reveal opacity-0 p-8 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/10 transition-all duration-300 space-y-4 shadow-xl parallax-content">
                            <div
                                className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em]"
                                style={{ color: accent }}
                            >
                                <div
                                    className="w-1.5 h-1.5 rounded-full animate-ping"
                                    style={{ background: accent }}
                                />
                                The Structural Challenge
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                Overcoming Ecosystem Complexity
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{project.challenge}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="reveal opacity-0 p-6 sm:p-8 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/10 transition-all duration-300 space-y-3 group shadow-lg">
                                <h4
                                    className="text-xs font-bold uppercase tracking-wider"
                                    style={{ color: accent }}
                                >
                                    01 / Strategy Formulation
                                </h4>
                                <p className="text-zinc-400 text-xs leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                                    Comprehensive high fidelity optimization pipelines mapping deep multi-tiered user
                                    intent pathways seamlessly.
                                </p>
                            </div>
                            <div className="reveal opacity-0 p-6 sm:p-8 rounded-2xl bg-[#09090b]/80 border border-white/[0.04] hover:border-white/10 transition-all duration-300 space-y-3 group shadow-lg">
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider transition-colors duration-300">
                                    02 / Clean Implementation
                                </h4>
                                <p className="text-zinc-400 text-xs leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                                    Engineered modular components utilizing Next.js structural paradigms powered with
                                    beautiful performance visuals.
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            {(project.type === "resume" || project.type === "agency") &&
                                project.resumeData && (
                                    <ResumeSection data={project.resumeData} accent={accent} />
                                )}
                            {(project.type === "project-brief" || project.type === "corporate") &&
                                project.projectBriefData && (
                                    <ProjectBriefSection data={project.projectBriefData} accent={accent} />
                                )}
                            {project.type === "brochure" && project.brochureData && (
                                <BrochureSection data={project.brochureData} accent={accent} />
                            )}
                            {project.type === "correspondence" && project.correspondenceData && (
                                <CorrespondenceSection data={project.correspondenceData} accent={accent} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}