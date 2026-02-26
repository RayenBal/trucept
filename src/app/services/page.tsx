'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Factory, Bot, CloudCog,
  BarChart2, Cpu, Shield,
  Workflow, Server, Lock,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import Layout from '@/components/Layout';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' as const },
});

const services = [
  {
    icon: Factory,
    category: 'Paper Industry Consulting',
    tagline: 'Operational excellence for modern mills and converters.',
    bullets: [
      'End-to-end operational diagnostics & benchmarking',
      'Lean transformation & OEE uplift programmes',
      'Digitised SOPs, training, and knowledge capture',
    ],
    extras: [BarChart2, Workflow],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-300',
    shadow: 'hover:shadow-blue-100',
  },
  {
    icon: Bot,
    category: 'AI & Automation',
    tagline: 'Intelligent systems from prototype to production.',
    bullets: [
      'Computer-vision quality control on the production line',
      'Predictive maintenance & asset reliability models',
      'Demand/supply forecasting and MLOps enablement',
    ],
    extras: [Cpu],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'hover:border-indigo-300',
    shadow: 'hover:shadow-indigo-100',
  },
  {
    icon: CloudCog,
    category: 'Cloud & DevSecOps',
    tagline: 'Resilient, secure delivery at enterprise scale.',
    bullets: [
      'Secure CI/CD pipelines and Kubernetes orchestration',
      'Infrastructure as Code and cloud cost optimisation',
      'Policy as Code, SAST/DAST, and compliance automation',
    ],
    extras: [Server, Lock],
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-300',
    shadow: 'hover:shadow-violet-100',
  },
  {
    icon: Shield,
    category: 'Security & Compliance',
    tagline: 'Industrial-grade security, built in — not bolted on.',
    bullets: [
      'ISO 27001 alignment and compliance gap analysis',
      'OT/IT network segmentation and identity controls',
      'Incident response planning and security automation',
    ],
    extras: [Lock],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-300',
    shadow: 'hover:shadow-emerald-100',
  },
  {
    icon: Server,
    category: 'Cloud Optimisation',
    tagline: 'Cost-aware architectures and reliable observability.',
    bullets: [
      'Cloud cost audit, FinOps, and right-sizing',
      'SRE, observability stack, and SLA governance',
      'Zero-downtime migrations and serverless patterns',
    ],
    extras: [BarChart2],
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'hover:border-sky-300',
    shadow: 'hover:shadow-sky-100',
  },
  {
    icon: Workflow,
    category: 'Process Intelligence',
    tagline: 'Data-driven insights that unlock hidden efficiency.',
    bullets: [
      'Real-time OEE dashboards and KPI telemetry',
      'Waste, energy, and throughput analytics',
      'Digital twin proof-of-concepts for major assets',
    ],
    extras: [Cpu, BarChart2],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'hover:border-orange-300',
    shadow: 'hover:shadow-orange-100',
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)} className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-500/30 bg-blue-500/10">
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Services
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Premium consulting for paper &amp; packaging. Practical programmes, measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Service Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Six practice areas, all focused on delivering real operational advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.category}
                {...fadeUp(i * 0.07)}
                className={`group relative p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${s.border} ${s.shadow}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.bg} group-hover:scale-105 transition-transform`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{s.category}</h3>
                <p className={`text-xs font-semibold mb-4 ${s.color}`}>{s.tagline}</p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${s.color}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Engagement Model</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Rapid diagnostic to map current state, pain points, and highest-impact opportunities.' },
              { step: '02', title: 'Strategy', desc: 'Prioritised roadmap with clear business cases, ownership, and timelines.' },
              { step: '03', title: 'Execution', desc: 'Agile delivery with embedded quality gates, security reviews, and stakeholder cadences.' },
              { step: '04', title: 'Optimise', desc: 'Performance tuning, knowledge transfer, and ongoing advisory to sustain results.' },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                {...fadeUp(i * 0.1)}
                className="relative text-center p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{phase.desc}</p>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-slate-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/12 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to accelerate transformation?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Partner with Trucept Consulting to implement secure, efficient, and data-driven paper operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/25"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
