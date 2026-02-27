'use client';

import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Workflow,
  Shield,
  ArrowRight,
  CheckCircle2,
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

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning Systems',
    description:
      'We design, train, and deploy production ML models — from NLP and computer vision to recommendation engines and anomaly detection.',
    capabilities: [
      'Custom model development & fine-tuning',
      'NLP pipelines & document intelligence',
      'Predictive analytics & forecasting',
      'MLOps & model monitoring',
      'RAG systems & LLM integration',
    ],
    gradient: 'from-blue-500 to-cyan-400',
    border: 'border-blue-200 dark:border-blue-500/20',
  },
  {
    icon: Code2,
    title: 'Custom Software Engineering',
    description:
      'Full-stack development of enterprise platforms, SaaS products, and internal tools using modern frameworks and best practices.',
    capabilities: [
      'Full-stack web & mobile development',
      'API design & microservices',
      'Real-time systems & WebSocket',
      'Performance optimization',
      'Code review & technical audits',
    ],
    gradient: 'from-indigo-500 to-purple-400',
    border: 'border-indigo-200 dark:border-indigo-500/20',
  },
  {
    icon: Cpu,
    title: 'Systems Architecture',
    description:
      'Distributed system design, cloud-native architecture, and scalability planning for high-throughput production environments.',
    capabilities: [
      'Distributed systems design',
      'Cloud-native architecture',
      'Event-driven & streaming systems',
      'High-availability design',
      'Architecture reviews & migration plans',
    ],
    gradient: 'from-purple-500 to-pink-400',
    border: 'border-purple-200 dark:border-purple-500/20',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'End-to-end data infrastructure — from ingestion pipelines and transformation to warehousing and real-time analytics.',
    capabilities: [
      'ETL/ELT pipeline development',
      'Data warehouse architecture',
      'Real-time streaming (Kafka, Flink)',
      'Data lake design & governance',
      'Analytics & BI integration',
    ],
    gradient: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-200 dark:border-emerald-500/20',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description:
      'Intelligent workflow automation, RPA, and business process optimization that eliminates manual operations at scale.',
    capabilities: [
      'Workflow orchestration platforms',
      'RPA design & deployment',
      'Document processing automation',
      'Integration middleware',
      'Process mining & optimization',
    ],
    gradient: 'from-orange-500 to-amber-400',
    border: 'border-orange-200 dark:border-orange-500/20',
  },
  {
    icon: Shield,
    title: 'Security & DevOps',
    description:
      'Zero-trust security architecture, CI/CD pipeline engineering, and infrastructure as code for compliant, automated deployments.',
    capabilities: [
      'CI/CD pipeline engineering',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Container orchestration (K8s)',
      'Security auditing & pen testing',
      'Compliance & governance automation',
    ],
    gradient: 'from-red-500 to-rose-400',
    border: 'border-red-200 dark:border-red-500/20',
  },
];

const techStack = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'Go', 'Rust', 'Java'] },
  { category: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'scikit-learn'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Vercel', 'DigitalOcean'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Three.js'] },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* ======== HERO ======== */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-400/8 dark:bg-blue-600/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/6 dark:bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Engineering Services
              <br />
              <span className="text-gradient-hero">End to End</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From AI research and model deployment to cloud infrastructure and security —
              we deliver comprehensive engineering solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======== SERVICE CARDS ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-[#0a0a0f] dark:via-[#0d0d15] dark:to-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className={`p-8 md:p-10 rounded-2xl border ${service.border} bg-white dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-500`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Capabilities</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{cap}</span>
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

      {/* ======== TECH STACK ======== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0f]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Technology</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Our Engineering Stack
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/20">
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 rounded-lg bg-slate-50 dark:bg-slate-800/40"
                      >
                        {item}
                      </span>
                    ))}
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
              Need a Custom
              <span className="text-gradient"> Engineering Solution</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              {"Tell us about your technical challenge. We'll scope the project, recommend the right approach, and deliver production-ready results."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/25"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
