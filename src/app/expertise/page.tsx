'use client';

import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Shield,
  ArrowRight,
  ChevronRight,
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

const domains = [
  {
    id: 'ai',
    icon: Brain,
    label: 'AI & ML',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'We build production ML systems that go beyond prototypes — from research to deployment at scale.',
    areas: [
      { title: 'Natural Language Processing', detail: 'Document intelligence, semantic search, text classification, named entity recognition, and conversational AI using transformer architectures.' },
      { title: 'Predictive Modeling', detail: 'Time-series forecasting, demand prediction, risk scoring, and anomaly detection with ensemble methods and deep learning.' },
      { title: 'Computer Vision', detail: 'Object detection, image classification, OCR pipelines, and visual inspection systems for industrial and academic applications.' },
      { title: 'LLM Engineering', detail: 'RAG architectures, fine-tuning, prompt engineering, and production-grade LLM-powered applications with guardrails and monitoring.' },
    ],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'engineering',
    icon: Code2,
    label: 'Engineering',
    title: 'Software Engineering & Development',
    description:
      'Modern software systems built with clean architecture, comprehensive testing, and production-first mindset.',
    areas: [
      { title: 'Full-Stack Development', detail: 'Enterprise web applications and SaaS platforms using React, Next.js, Node.js, Python, and Go with TypeScript throughout.' },
      { title: 'API & Microservices', detail: 'RESTful and GraphQL APIs, event-driven microservices, API gateway design, and service mesh architecture.' },
      { title: 'Real-Time Systems', detail: 'WebSocket applications, live dashboards, streaming data processing, and low-latency communication systems.' },
      { title: 'Mobile Engineering', detail: 'Cross-platform mobile applications using React Native and Flutter with native performance and offline-first architecture.' },
    ],
    gradient: 'from-indigo-500 to-purple-400',
  },
  {
    id: 'architecture',
    icon: Cpu,
    label: 'Architecture',
    title: 'Systems Architecture & Design',
    description:
      'Scalable, resilient system design for organizations that need infrastructure to match their ambitions.',
    areas: [
      { title: 'Distributed Systems', detail: 'Event sourcing, CQRS, saga patterns, and distributed consensus for systems that handle millions of transactions.' },
      { title: 'Cloud-Native Design', detail: 'Serverless architecture, container orchestration, multi-region deployment, and auto-scaling strategies on AWS, GCP, and Azure.' },
      { title: 'Data Architecture', detail: 'Data mesh, lake house architecture, real-time streaming with Kafka, and unified analytics platforms.' },
      { title: 'Migration & Modernization', detail: 'Monolith-to-microservices migration, platform re-architecture, and legacy system modernization with zero-downtime strategies.' },
    ],
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    id: 'data',
    icon: Database,
    label: 'Data',
    title: 'Data Engineering & Analytics',
    description:
      'End-to-end data infrastructure that turns raw data into actionable intelligence at enterprise scale.',
    areas: [
      { title: 'Pipeline Engineering', detail: 'ETL/ELT pipeline development with Apache Airflow, dbt, and custom orchestration for reliable data transformation.' },
      { title: 'Real-Time Analytics', detail: 'Streaming analytics with Apache Kafka, Flink, and Spark Structured Streaming for sub-second insights.' },
      { title: 'Data Warehousing', detail: 'Modern warehouse design on Snowflake, BigQuery, and Redshift with optimized query patterns and cost management.' },
      { title: 'BI & Visualization', detail: 'Custom analytics dashboards, embedded reporting, and self-service BI platforms for data-driven decision making.' },
    ],
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'security',
    icon: Shield,
    label: 'Security',
    title: 'Security & DevOps Engineering',
    description:
      'Zero-trust security, automated compliance, and robust CI/CD infrastructure for regulated environments.',
    areas: [
      { title: 'DevSecOps', detail: 'Security-first CI/CD pipelines, automated vulnerability scanning, SAST/DAST integration, and supply chain security.' },
      { title: 'Infrastructure as Code', detail: 'Terraform, Pulumi, and CloudFormation for reproducible, version-controlled infrastructure with drift detection.' },
      { title: 'Platform Engineering', detail: 'Internal developer platforms, golden paths, service catalogs, and self-service infrastructure provisioning.' },
      { title: 'Compliance Automation', detail: 'GDPR, SOC2, and ISO 27001 compliance automation with continuous monitoring and audit trail generation.' },
    ],
    gradient: 'from-red-500 to-rose-400',
  },
];

export default function ExpertisePage() {
  const [active, setActive] = useState(0);
  const domain = domains[active];

  return (
    <Layout>
      {/* ======== HERO ======== */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-400/8 dark:bg-indigo-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Expertise</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Deep Technical
              <br />
              <span className="text-gradient-hero">Expertise</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Five core engineering domains, each backed by years of production experience
              and real-world project delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======== DOMAIN TABS ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {domains.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === i
                      ? 'bg-blue-50 dark:bg-blue-600/20 text-blue-700 dark:text-white border border-blue-200 dark:border-blue-500/30'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <d.icon className="w-4 h-4" />
                  {d.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
          >
            <div className="mb-10 text-center">
              <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${domain.gradient} items-center justify-center mb-5 shadow-lg`}>
                <domain.icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">{domain.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{domain.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {domain.areas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-500 group"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{area.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-600/8 dark:via-transparent dark:to-purple-600/8" />
        <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0a0f]/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Have a Technical
              <span className="text-gradient"> Challenge</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              {"Let's explore how our expertise can solve your specific engineering problems."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
