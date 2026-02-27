'use client';

import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Cloud,
  Database,
  BarChart3,
  Workflow,
  Tag,
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

const projects = [
  {
    icon: Brain,
    category: 'AI / NLP',
    title: 'Document Intelligence Platform',
    client: 'Academic Research Institution',
    description:
      'End-to-end NLP system for automated document classification, entity extraction, and semantic search across 2M+ academic publications. Built with transformer models, vector databases, and a real-time inference API.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Pinecone', 'Docker'],
    metrics: [
      { label: 'Classification Accuracy', value: '97.3%' },
      { label: 'Processing Speed', value: '60x faster' },
      { label: 'Documents Indexed', value: '2M+' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    lightGradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    iconGradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: BarChart3,
    category: 'Predictive Analytics',
    title: 'Real-Time Forecasting Engine',
    client: 'Enterprise Operations',
    description:
      'Time-series forecasting system using ensemble ML models for demand prediction and operational resource optimization. Deployed as a microservice with sub-200ms inference latency.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'Kafka', 'Kubernetes'],
    metrics: [
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Inference Latency', value: '<200ms' },
      { label: 'Cost Reduction', value: '35%' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    lightGradient: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    iconGradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: Cloud,
    category: 'Cloud Architecture',
    title: 'Enterprise Microservices Migration',
    client: 'Financial Services',
    description:
      'Full architectural migration from a monolithic legacy system to a cloud-native microservices platform. Implemented zero-downtime deployment strategies, service mesh, and comprehensive observability.',
    tech: ['Go', 'Kubernetes', 'Terraform', 'Istio', 'Prometheus'],
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Throughput Gain', value: '12x' },
      { label: 'Infra Cost Savings', value: '40%' },
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    lightGradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
    iconGradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Workflow,
    category: 'Automation',
    title: 'Intelligent Workflow Platform',
    client: 'University Research Lab',
    description:
      'Custom workflow orchestration platform automating multi-step research data processing pipelines. Features parallel execution, fault tolerance, and a visual pipeline builder for non-technical researchers.',
    tech: ['TypeScript', 'Next.js', 'Python', 'Airflow', 'PostgreSQL'],
    metrics: [
      { label: 'Pipeline Automation', value: '85%' },
      { label: 'Processing Time', value: '-70%' },
      { label: 'Active Users', value: '200+' },
    ],
    gradient: 'from-orange-500/20 to-amber-500/20',
    lightGradient: 'from-orange-500/10 to-amber-500/10',
    border: 'border-orange-500/20',
    iconGradient: 'from-orange-500 to-amber-400',
  },
  {
    icon: Database,
    category: 'Data Engineering',
    title: 'Real-Time Analytics Infrastructure',
    client: 'E-Commerce Platform',
    description:
      'Streaming data pipeline and analytics warehouse serving real-time business intelligence dashboards. Handles 50K+ events per second with sub-second query latency for interactive exploration.',
    tech: ['Kafka', 'Flink', 'ClickHouse', 'dbt', 'Grafana'],
    metrics: [
      { label: 'Event Throughput', value: '50K/sec' },
      { label: 'Query Latency', value: '<1 sec' },
      { label: 'Data Freshness', value: 'Real-time' },
    ],
    gradient: 'from-indigo-500/20 to-blue-500/20',
    lightGradient: 'from-indigo-500/10 to-blue-500/10',
    border: 'border-indigo-500/20',
    iconGradient: 'from-indigo-500 to-blue-400',
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      {/* ======== HERO ======== */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/8 dark:bg-blue-600/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-400/6 dark:bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Projects &
              <br />
              <span className="text-gradient-hero">Case Studies</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A selection of production systems we have designed, built, and deployed
              for clients across industries and continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======== PROJECT CARDS ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className={`p-8 md:p-10 rounded-2xl border ${project.border} bg-gradient-to-br ${project.gradient} backdrop-blur-sm hover:scale-[1.005] transition-transform duration-500`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.iconGradient} flex items-center justify-center shadow-lg shrink-0`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-full bg-blue-500/5">
                          <Tag className="w-3 h-3" />
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500">{project.client}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech + Metrics */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tech Stack */}
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 rounded-lg bg-white/60 dark:bg-slate-800/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Results</p>
                      <div className="grid grid-cols-3 gap-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center p-3 rounded-lg bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{m.value}</p>
                            <p className="text-[10px] text-slate-500 mt-1">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
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
              Your Project Could Be
              <span className="text-gradient"> Next</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              {"We're always looking for ambitious engineering challenges. Let's discuss what we can build together."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
