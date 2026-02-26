'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Cloud, Shield, FlaskConical, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' as const },
});

const domains = [
  {
    id: 'ai',
    label: 'AI & ML',
    icon: Brain,
    intro:
      'We build production-grade AI systems that generate measurable operational advantage. From computer-vision quality inspection on the line to predictive maintenance models, our ML practice bridges research and real-world deployment.',
    skills: [
      'Deep Learning & Neural Networks',
      'Computer Vision (Defect Detection)',
      'Predictive Maintenance Models',
      'Natural Language Processing',
      'Forecasting & Demand Planning',
      'Anomaly Detection Systems',
      'MLOps & Model Lifecycle',
      'Edge AI Deployment',
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'FastAPI', 'MLflow', 'ONNX'],
  },
  {
    id: 'devsecops',
    label: 'DevSecOps',
    icon: Cloud,
    intro:
      'We design and implement end-to-end DevSecOps pipelines that let engineering teams ship faster without compromising on security or reliability. From CI/CD architecture to Kubernetes orchestration and policy-as-code — we build platforms that scale.',
    skills: [
      'CI/CD Pipeline Architecture',
      'Kubernetes & Container Orchestration',
      'Infrastructure as Code (IaC)',
      'Policy as Code (OPA/Rego)',
      'GitOps & Platform Engineering',
      'Observability & SRE',
      'SAST/DAST Integration',
      'Zero-downtime Deployment',
    ],
    tech: ['GitHub Actions', 'ArgoCD', 'Terraform', 'Helm', 'Kubernetes', 'Prometheus', 'Grafana', 'Vault'],
  },
  {
    id: 'security',
    label: 'Cybersecurity',
    icon: Shield,
    intro:
      'Security embedded in every layer — not patched on afterwards. We combine industrial OT/IT expertise with modern cybersecurity practices to protect critical infrastructure, meet compliance requirements, and prepare teams for incident response.',
    skills: [
      'Threat Modelling & Risk Assessment',
      'ISO 27001 / NIST Alignment',
      'OT/IT Network Segmentation',
      'Identity & Access Management',
      'Penetration Testing',
      'SIEM & Incident Response',
      'Security Architecture Review',
      'Compliance Auditing',
    ],
    tech: ['Wazuh', 'OpenSCAP', 'Falco', 'Vault', 'Keycloak', 'Snyk', 'Trivy', 'Burp Suite'],
  },
  {
    id: 'paper',
    label: 'Paper Industry',
    icon: Factory,
    intro:
      'Fifteen years of deep domain expertise in paper, pulp, and packaging operations. We speak the language of the mill floor — OEE, TAPPI, SCADA, and lean manufacturing — while bringing the tools of the digital age to unlock hidden efficiency.',
    skills: [
      'OEE Analysis & Uplift',
      'Lean / Six Sigma Transformation',
      'PLC/SCADA Systems',
      'Process Flow Optimisation',
      'Digital SOPs & Knowledge Capture',
      'Energy & Waste Analytics',
      'Asset Reliability Management',
      'Mill Benchmarking',
    ],
    tech: ['TAPPI Standards', 'SAP PM', 'Wonderware', 'OSIsoft PI', 'Power BI', 'MATLAB', 'Ignition SCADA', 'Python'],
  },
  {
    id: 'research',
    label: 'Research & Data',
    icon: FlaskConical,
    intro:
      'Applied research and data engineering at the intersection of industrial systems and advanced analytics. We support organisations in building rigorous data pipelines, publishing findings, and leveraging scientific computing for competitive insight.',
    skills: [
      'Scientific Computing',
      'Climate & Environmental AI',
      'Data Pipeline Architecture',
      'Statistical Modelling',
      'Data Lake / Warehouse Design',
      'Research Publication Support',
      'Geospatial Analytics',
      'Time-Series Analysis',
    ],
    tech: ['Python', 'R', 'Apache Spark', 'dbt', 'Airflow', 'Snowflake', 'PostgreSQL', 'Jupyter'],
  },
];

export default function ExpertisePage() {
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
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-500/30 bg-blue-500/10">
              Deep Domain Knowledge
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Our Expertise
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Five practice domains. One consistent standard: research-grade precision delivered to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Practice Areas</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Domains We Master</h2>
          </motion.div>

          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto">
              {domains.map((d) => (
                <TabsTrigger
                  key={d.id}
                  value={d.id}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=inactive]:bg-white data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:border-blue-300 transition-all"
                >
                  <d.icon className="w-4 h-4" />
                  {d.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {domains.map((d) => (
              <TabsContent key={d.id} value={d.id}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  {/* Intro */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 p-8 rounded-2xl bg-slate-950 text-white">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5 border border-blue-500/20">
                        <d.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{d.label}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{d.intro}</p>
                    </div>
                  </div>

                  {/* Skills + Tech */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Skill bars */}
                    <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {d.skills.map((skill, idx) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                          >
                            <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {d.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 hover:bg-blue-100 transition-colors cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Methodology</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Approach</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep understanding of your challenges, constraints, and strategic goals.' },
              { step: '02', title: 'Strategy', desc: 'Solution architecture and a prioritised implementation roadmap.' },
              { step: '03', title: 'Execution', desc: 'Agile delivery with continuous integration, testing, and feedback loops.' },
              { step: '04', title: 'Optimisation', desc: 'Performance tuning, security hardening, and ongoing advisory.' },
            ].map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.1)} className="text-center p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to leverage our expertise?</h2>
            <p className="text-slate-400 text-lg">
              Let's explore how our domain knowledge can accelerate your transformation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/25"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
