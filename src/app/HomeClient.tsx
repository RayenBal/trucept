'use client';

import Layout from '@/components/Layout';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Brain,
  Code2,
  Database,
  Shield,
  Cpu,
  Workflow,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  BarChart3,
  Globe,
} from 'lucide-react';

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ─── Fade-in wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Services Data ─── */
const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Custom ML pipelines, NLP systems, and predictive models designed for real-world production environments.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Full-stack development with modern frameworks. Scalable, maintainable systems architected for growth.',
    gradient: 'from-indigo-500 to-purple-400',
  },
  {
    icon: Cpu,
    title: 'Systems Architecture',
    description:
      'Distributed system design, microservices, and cloud-native infrastructure that scales with your organization.',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'End-to-end data pipelines, real-time streaming, and warehouse architecture for analytics at scale.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description:
      'Intelligent workflow orchestration, RPA integration, and business process optimization through technology.',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    icon: Shield,
    title: 'Security & DevOps',
    description:
      'Zero-trust architecture, CI/CD pipelines, infrastructure as code, and comprehensive security auditing.',
    gradient: 'from-red-500 to-rose-400',
  },
];

/* ─── Case Studies ─── */
const caseStudies = [
  {
    tag: 'Natural Language Processing',
    title: 'AI-Powered Document Intelligence Platform',
    description:
      'Built an end-to-end NLP pipeline for automated document classification, entity extraction, and semantic search across 2M+ academic records.',
    metrics: ['97.3% accuracy', '60x faster processing', '2M+ documents indexed'],
    gradient: 'from-blue-600/20 to-indigo-600/20 dark:from-blue-600/20 dark:to-indigo-600/20',
    lightGradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200 dark:border-blue-500/20',
  },
  {
    tag: 'Predictive Analytics',
    title: 'Real-Time Forecasting Engine',
    description:
      'Designed and deployed a time-series forecasting system using ensemble ML models for demand prediction and resource optimization.',
    metrics: ['94% forecast accuracy', 'Sub-200ms latency', '35% cost reduction'],
    gradient: 'from-purple-600/20 to-pink-600/20 dark:from-purple-600/20 dark:to-pink-600/20',
    lightGradient: 'from-purple-50 to-pink-50',
    border: 'border-purple-200 dark:border-purple-500/20',
  },
  {
    tag: 'Cloud Architecture',
    title: 'Enterprise Microservices Migration',
    description:
      'Architected a full migration from monolithic legacy systems to a cloud-native microservices platform with zero-downtime deployment.',
    metrics: ['99.99% uptime', '12x throughput gain', '40% infra savings'],
    gradient: 'from-emerald-600/20 to-teal-600/20 dark:from-emerald-600/20 dark:to-teal-600/20',
    lightGradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200 dark:border-emerald-500/20',
  },
];

/* ─── Client Logos ─── */
const clients = [
  { name: 'UCL', abbr: 'University College London' },
  { name: 'Abu Dhabi University', abbr: 'ADU' },
  { name: 'University of Basel', abbr: 'Universitat Basel' },
];

/* ─── Process Steps ─── */
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'Deep-dive into your technical landscape, business requirements, and architectural constraints.',
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'System blueprints, technology selection, and detailed implementation roadmaps.',
  },
  {
    step: '03',
    title: 'Engineering & Build',
    description: 'Agile development with CI/CD, automated testing, and continuous integration to production.',
  },
  {
    step: '04',
    title: 'Deploy & Optimize',
    description: 'Production deployment, performance monitoring, and iterative optimization for peak efficiency.',
  },
];

/* ─── Page ─── */
export default function HomePage() {
  return (
    <Layout>
      {/* ======== HERO ======== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/8 dark:bg-indigo-600/6 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-400/5 dark:bg-purple-600/4 rounded-full blur-[160px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(100,100,100,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              AI Systems · Software Engineering · Architecture
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Engineering Intelligent
              <br />
              <span className="text-gradient-hero">Systems</span> for the Future
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              We architect and build production-grade AI systems, custom software platforms, and
              scalable infrastructure for organizations that demand engineering excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-base hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {['Python', 'TypeScript', 'PyTorch', 'Kubernetes', 'AWS', 'Next.js', 'PostgreSQL', 'Docker'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* ======== CORE SERVICES ======== */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">What We Build</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Full-Spectrum Engineering
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From machine learning research to production deployment — we cover the
              entire engineering lifecycle.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group relative h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-500">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>

                  <div className="mt-6 flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ENGINEERING AUTHORITY - Stats ======== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-white/90 dark:bg-[#0a0a0f]/90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Track Record</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Built for Scale, Measured by Impact
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: '+', label: 'Projects Delivered' },
              { value: 99, suffix: '%', label: 'Client Retention' },
              { value: 15, suffix: '+', label: 'Enterprise Clients' },
              { value: 3, suffix: '', label: 'Continents Served' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.15}>
                <div className="text-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/20">
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-3">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CLIENT REFERENCES - Logo Carousel ======== */}
      <section className="py-20 relative border-t border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
              Trusted by Leading Institutions
            </p>
          </FadeIn>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent z-10" />

            <div className="flex animate-scroll-left">
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center"
                >
                  <div className="flex items-center space-x-3 px-8 py-5 rounded-xl border border-slate-200 dark:border-slate-800/40 bg-slate-50 dark:bg-slate-900/20">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 dark:from-blue-500/20 to-indigo-100 dark:to-indigo-500/20 border border-blue-200 dark:border-blue-500/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold text-sm">{client.name}</p>
                      <p className="text-slate-500 text-xs">{client.abbr}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CASE STUDIES ======== */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Case Studies</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Engineering That Delivers Results
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.title} delay={i * 0.15}>
                <div
                  className={`relative p-8 md:p-10 rounded-2xl border ${study.border} bg-gradient-to-br ${study.lightGradient} dark:bg-gradient-to-br ${study.gradient} backdrop-blur-sm hover:scale-[1.01] transition-transform duration-500`}
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 rounded-full bg-blue-50 dark:bg-blue-500/5 mb-5">
                    {study.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">{study.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl">{study.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {study.metrics.map((m) => (
                      <div
                        key={m}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                      >
                        <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PROCESS ======== */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d14] dark:to-[#0a0a0f]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              From Concept to Production
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.12}>
                <div className="relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors duration-500 group">
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-800/60 group-hover:text-blue-100 dark:group-hover:text-blue-500/20 transition-colors duration-500 absolute top-6 right-8">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 dark:from-blue-600/10 dark:via-indigo-600/5 dark:to-purple-600/10" />
        <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0a0f]/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Ready to build?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              {"Let's Engineer Your"}
              <br />
              <span className="text-gradient">Next Breakthrough</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              {"Whether you're scaling an AI platform, migrating infrastructure, or building from scratch — we're ready."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
