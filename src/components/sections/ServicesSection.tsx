"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Layers,
  Smartphone,
} from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: BrainCircuit,
    title: "AI Transformation",
    summary:
      "Intelligent automation and machine learning solutions that modernize operations and unlock new enterprise value.",
    description:
      "We evaluate your existing infrastructure and identify high-impact opportunities for artificial intelligence integration. Our specialists develop and deploy custom AI models that streamline workflows, enhance decision making, and provide a definitive competitive edge in your market.",
    features: [
      "AI readiness assessment",
      "Process automation and optimization",
      "Custom machine learning models",
      "Data strategy and infrastructure",
      "Team training and AI adoption",
    ],
  },
  {
    num: "02",
    icon: Code2,
    title: "Web Development",
    summary:
      "High-performance web applications engineered for scalability, security, and exceptional user experiences.",
    description:
      "We build robust digital platforms tailored to your specific business requirements. From complex enterprise portals to dynamic customer-facing applications, our development team utilizes modern tech stacks to deliver fast, secure, and fully responsive web solutions.",
    features: [
      "Custom web application development",
      "Enterprise portal engineering",
      "Frontend and backend architecture",
      "API development and integration",
      "Performance and security optimization",
    ],
  },
  {
    num: "03",
    icon: Bot,
    title: "AI SaaS",
    summary:
      "Cloud-based artificial intelligence software designed to solve specific industry challenges at scale.",
    description:
      "We conceptualize, build, and deploy Artificial Intelligence Software as a Service products. By combining scalable cloud infrastructure with advanced AI capabilities, we deliver subscription-based platforms that generate recurring revenue and solve complex user problems natively.",
    features: [
      "AI product conceptualization",
      "Cloud architecture design",
      "Multi-tenant SaaS development",
      "AI feature integration",
      "Continuous deployment and scaling",
    ],
  },
  {
    num: "04",
    icon: Layers,
    title: "MVP Design & Development",
    summary:
      "Rapid prototyping and lean development to validate your product ideas and accelerate time to market.",
    description:
      "We help startups and enterprises launch Minimum Viable Products quickly and efficiently. Our process focuses on core functionalities that solve primary user needs, allowing you to gather market feedback, attract investors, and iterate based on real user data.",
    features: [
      "Product strategy and scoping",
      "Wireframing and rapid prototyping",
      "Core feature development",
      "User testing and validation",
      "Post-launch iteration roadmap",
    ],
  },
  {
    num: "05",
    icon: Smartphone,
    title: "Mobile App Development",
    summary:
      "Native and cross-platform mobile applications designed to engage users and drive business growth on any device.",
    description:
      "We engineer intuitive mobile experiences for iOS and Android platforms. Our mobile development process prioritizes seamless performance, intuitive user interfaces, and robust backend architectures to ensure your app scales effortlessly as your user base grows.",
    features: [
      "iOS and Android native development",
      "Cross-platform mobile solutions",
      "Mobile UI and UX design",
      "App store optimization and launch",
      "Ongoing maintenance and support",
    ],
  },
];

export default function ServicesSection() {
  return (
  <section id="services" className="py-24 bg-obsidian relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-[400px_minmax(0,1fr)] gap-16">
      
      {/* Sticky Left Side */}
      <div className="hidden lg:block relative">
        <div className="sticky top-32">
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[10px] font-bold tracking-widest text-[#C8FF00] border border-white/20 mb-6 uppercase">
              Pauspan Services
            </span>

            <h2 className="font-black text-6xl text-white leading-[0.95] mb-6">
              What We Do{" "}
              <span className="text-[#C8FF00]">
                Best
              </span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed">
              Five core service areas staffed by technology specialists
              dedicated to delivering measurable business value and
              future-ready digital products.
            </p>

            <div className="mt-10 border border-white/10 bg-white/[0.035] rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] font-black text-[#C8FF00] mb-4">
                Pauspan
              </p>

               <p className="text-white/80 text-sm leading-relaxed">
                We craft extraordinary digital solutions that transform
                businesses. Premium engineering, impeccable execution,
                measurable results.
              </p>
            </div>
          </motion.header>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[10px] font-bold tracking-widest text-[#C8FF00] border border-white/20 mb-6 uppercase">
          Pauspan Services
        </span>

        <h2 className="font-black text-5xl text-white leading-[0.95] mb-6">
          What We Do <span className="text-[#C8FF00]">Best</span>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-12">
          Five core service areas staffed by technology specialists
          dedicated to delivering measurable business value and
          future-ready digital products.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>

    </div>
  </div>
</section>
  );
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
      className="group border border-white/10 bg-white/[0.035] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#C8FF00]/35 hover:bg-[#11160a]"
    >
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-[220px_1fr]">
        <div className="flex xl:block items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C8FF00]/20 bg-[#C8FF00]/10 text-[#C8FF00] transition-transform duration-300 group-hover:scale-105">
            <Icon size={26} />
          </div>

          <div className="xl:mt-6 min-w-0">
            <p className="font-display text-5xl font-black leading-none text-[#C8FF00]/35">
              {service.num}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white group-hover:text-[#C8FF00] transition-colors duration-300">
              {service.title}
            </h3>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold leading-snug text-white">
            {service.summary}
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
            {service.description}
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-[#C8FF00]/75"
                />
                <span className="text-sm leading-relaxed text-white/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#C8FF00] transition-all duration-300 group-hover:gap-3"
          >
            Get started with {service.title} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
