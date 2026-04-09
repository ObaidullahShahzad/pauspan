"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Dark tech images for the marquee scroller
const marqueeImages = [
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", label: "Strategy" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80", label: "Development" },
  { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&q=80", label: "AI & Tech" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80", label: "Global Reach" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80", label: "Analytics" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&q=80", label: "Design" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80", label: "Infrastructure" },
  { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=300&fit=crop&q=80", label: "AI" },
];

const stats = [
  { value: "200+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "5★", label: "Average Rating", icon: Sparkles },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 1, duration: 0.6 })
        .from(".hero-title span", { y: 60, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.3")
        .from(".hero-desc", { y: 20, opacity: 1, duration: 0.6 }, "-=0.4")
        .from(".hero-buttons", { y: 20, opacity: 1, duration: 0.6 }, "-=0.3")
        .from(".hero-stats .stat-item", { y: 20, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".marquee-container", { x: 60, opacity: 1, duration: 0.8 }, "-=0.7");

      // Parallax on scroll
      gsap.to(".hero-title", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    };

    initGSAP();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-accent border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Premium Service Solutions
              <Sparkles size={12} />
            </div>

            {/* Headline */}
            <h1
              ref={titleRef}
              className="hero-title font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight overflow-hidden"
            >
              <span className="block text-text">We Deliver</span>
              <span className="block gradient-text">Excellence</span>
              <span className="block text-text">That Lasts</span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-text-dim text-lg leading-relaxed max-w-md">
              Pauspan crafts premium service experiences that elevate your brand, 
              accelerate growth, and create lasting competitive advantage.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start a Project
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/projects">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats flex flex-wrap gap-8 pt-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="stat-item flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-text">{value}</div>
                    <div className="text-xs text-text-dim">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Vertical marquee image scroller */}
          <div className="marquee-container relative h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
            {/* Fade masks */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-obsidian to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-obsidian to-transparent z-10 pointer-events-none" />

            {/* Two columns side by side */}
            <div className="flex gap-4 h-full">
              {/* Column 1: scroll up */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-[marquee-vert_20s_linear_infinite]">
                  {[...marqueeImages, ...marqueeImages].map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 h-52 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-cover"
                        sizes="200px"
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

              {/* Column 2: scroll down (reverse) */}
              <div className="flex-1 overflow-hidden mt-16">
                <div className="flex flex-col gap-4 animate-[marquee-vert-rev_25s_linear_infinite]">
                  {[...marqueeImages.slice().reverse(), ...marqueeImages.slice().reverse()].map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 h-52 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-cover"
                        sizes="200px"
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
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
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
