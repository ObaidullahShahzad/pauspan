import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import {
  CASE_STUDIES,
  getCaseStudy,
  getNextCaseStudy,
  type CaseStudyData,
  type CaseStudyPoint,
} from "@/data/case-studies";

type ProjectPageProps = {
  params: {
    casestudy: string;
  };
};

export function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({
    casestudy: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getCaseStudy(params.casestudy);

  if (!project) {
    return {
      title: "Case Study Not Found | Pauspan",
    };
  }

  return {
    title: `${project.title} Case Study | Pauspan`,
    description: project.headline,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = getCaseStudy(params.casestudy);

  if (!project) {
    notFound();
  }

  const nextProject = getNextCaseStudy(project.slug);

  return (
    <div className="min-h-screen bg-obsidian pt-20 text-white">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Sparkles size={13} />
                {project.eyebrow}
              </div>

              <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
                {project.headline}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-white"
                >
                  Build Something Similar <ArrowRight size={16} />
                </Link>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    Visit Live Project <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProjectSnapshot project={project} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <Image
              src={project.image}
              alt={`${project.title} project visual`}
              fill
              priority
              unoptimized
              className="object-cover brightness-[0.82]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                  Project Result
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-white">
                  {project.result}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/75 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <DetailGroup
                  icon={Calendar}
                  label="Year"
                  items={[project.year]}
                />
                <DetailGroup
                  icon={Building2}
                  label="Industry"
                  items={project.industry}
                />
                <DetailGroup
                  icon={Layers}
                  label="Services"
                  items={project.services}
                />
                <DetailGroup
                  icon={Code2}
                  label="Technologies"
                  items={project.technologies}
                />
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-8">
              <TextPanel
                eyebrow="Overview"
                title="What We Built"
                body={project.overview}
              />

              <TextPanel
                eyebrow="The Challenge"
                title="The Problem Behind the Product"
                body={project.challenge}
              />

              <CaseStudyGrid
                eyebrow="Core Platform Capabilities"
                items={project.capabilities}
              />

              <TextPanel
                eyebrow="Engineering Approach"
                title="How the System Came Together"
                body={project.approach}
              />

              <TestimonialBlock project={project} />

              <OutcomeSection items={project.outcomes} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.025] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-300 hover:border-accent/35 md:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                Next Case Study
              </p>
              <h2 className="font-display text-3xl font-bold text-white">
                {nextProject.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {nextProject.headline}
              </p>
            </div>

            <div className="flex items-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectSnapshot({ project }: { project: CaseStudyData }) {
  const items = [
    {
      icon: Calendar,
      label: "Year",
      value: project.year,
    },
    {
      icon: Target,
      label: "Category",
      value: project.category,
    },
    {
      icon: Award,
      label: "Outcome",
      value: project.result,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
      {items.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-md"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon size={18} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
            {label}
          </p>
          <p className="mt-2 text-sm font-bold leading-snug text-white">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

function DetailGroup({
  icon: Icon,
  label,
  items,
}: {
  icon: typeof Calendar;
  label: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon size={18} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
          {label}
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium leading-relaxed text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TextPanel({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 lg:p-9">
      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white">{title}</h2>
      <p className="mt-5 text-base leading-relaxed text-white/62">{body}</p>
    </section>
  );
}

function CaseStudyGrid({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: CaseStudyPoint[];
}) {
  return (
    <section>
      <div className="mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-accent/30"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Zap size={16} className="text-accent" />
            </div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialBlock({ project }: { project: CaseStudyData }) {
  return (
    <section className="rounded-2xl border border-accent/20 bg-accent/10 p-7 lg:p-9">
      <p className="mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
        Client Impact & Review
      </p>
      <blockquote className="font-display text-2xl font-semibold leading-snug text-white">
        &quot;{project.testimonial.quote}&quot;
      </blockquote>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="font-bold text-white">{project.testimonial.author}</p>
        <p className="mt-1 text-sm text-white/55">{project.testimonial.role}</p>
      </div>
    </section>
  );
}

function OutcomeSection({ items }: { items: CaseStudyPoint[] }) {
  return (
    <section>
      <div className="mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
          Outcome and Business Impact
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-accent/30"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
