'use client';

import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Award,
  Users,
  Globe,
  Code2,
} from 'lucide-react';

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Target,
    title: 'Engineering Precision',
    description: 'Every system we build is designed with rigorous attention to architecture, performance, and maintainability.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    description: 'We apply cutting-edge research in AI, distributed systems, and automation to solve complex real-world problems.',
  },
  {
    icon: Shield,
    title: 'Production-First',
    description: 'We build for production from day one — scalable, secure, and resilient under real-world conditions.',
  },
  {
    icon: Zap,
    title: 'Velocity & Quality',
    description: 'Rapid iteration without compromising code quality. We ship fast, reliably, and with comprehensive test coverage.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Founded in Tunisia',
    description: 'Trucept Consulting was established with a mission to deliver world-class AI and software engineering services.',
  },
  {
    year: '2022',
    title: 'First Enterprise AI Deployments',
    description: 'Delivered production ML systems for document intelligence and predictive analytics across multiple industries.',
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Expanded operations to serve clients across North Africa, the Middle East, and Europe with systems architecture consulting.',
  },
  {
    year: '2024',
    title: 'Academic & Enterprise Partnerships',
    description: 'Partnered with UCL, Abu Dhabi University, and University of Basel on advanced AI research and engineering projects.',
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* ======== HERO ======== */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/8 dark:bg-blue-600/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-400/6 dark:bg-indigo-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Built by Engineers,
              <br />
              <span className="text-gradient-hero">For Engineers</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are a team of senior engineers, ML researchers, and systems architects who build
              intelligent, production-grade platforms for organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======== MISSION ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Advancing Organizations Through
                <span className="text-gradient"> Intelligent Systems</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Trucept Consulting exists to bridge the gap between cutting-edge AI research
                and production-ready engineering. We work with enterprises and research institutions
                to build systems that are not only technically sophisticated but operationally resilient.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our approach combines deep technical expertise in machine learning, distributed systems,
                and cloud architecture with a rigorous engineering methodology. Every project we take on
                is designed, built, and deployed to production standards.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: 'Engineering Excellence', value: 'First Principle' },
                  { icon: Users, label: 'Team', value: 'Senior Engineers' },
                  { icon: Globe, label: 'Reach', value: 'Tunisia · UAE · EU' },
                  { icon: Code2, label: 'Approach', value: 'Production-First' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-3" />
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======== VALUES ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              What Drives Our Engineering
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-500 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 dark:from-blue-500/20 to-indigo-100 dark:to-indigo-500/20 border border-blue-200 dark:border-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TIMELINE ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Growth Through Engineering
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 dark:from-blue-500/30 via-slate-200 dark:via-slate-800 to-slate-200/0 dark:to-slate-800/0" />

            <div className="space-y-10">
              {timeline.map((event, i) => (
                <FadeIn key={event.year} delay={i * 0.12}>
                  <div className="relative pl-14">
                    <div className="absolute left-[12px] top-1 w-[15px] h-[15px] rounded-full border-2 border-blue-400 dark:border-blue-500/50 bg-white dark:bg-[#0a0a0f]" />
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest">{event.year}</span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-1 mb-2">{event.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{event.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 dark:from-blue-600/8 dark:via-transparent dark:to-indigo-600/8" />
        <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0a0f]/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Build Something
              <span className="text-gradient"> Exceptional</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              {"Let's discuss how our engineering expertise can accelerate your next project."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
