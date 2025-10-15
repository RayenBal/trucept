'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Shield, Zap, Server, Workflow } from 'lucide-react';
import Layout from '@/components/Layout';

export default function ServicesPage() {
  const services = [
    {
      title: 'Paper Industry Consulting',
      description: 'End-to-end diagnostics, process optimization, and modernization for mills and converters.',
      bullets: ['Operational diagnostics', 'Lean & OEE uplift', 'Digital SOPs & training', 'Benchmarking & ROI cases'],
      icon: Workflow,
    },
    {
      title: 'AI Solutions',
      description: 'Computer vision QC, predictive maintenance, and demand/supply forecasting.',
      bullets: ['Vision-based defect detection', 'Predictive maintenance', 'Forecasting & planning', 'MLOps enablement'],
      icon: Sparkles,
    },
    {
      title: 'DevSecOps & Automation',
      description: 'Secure CI/CD, infrastructure as code, and automated governance for resilient delivery.',
      bullets: ['CI/CD pipelines', 'Kubernetes & IaC', 'Policy as code', 'Security automation'],
      icon: Zap,
    },
    {
      title: 'Cloud Optimization',
      description: 'Cost-aware architectures, observability, and performance tuning across vendors.',
      bullets: ['Cloud cost optimization', 'Observability & SRE', 'Serverless & microservices', 'Zero-downtime migrations'],
      icon: Server,
    },
    {
      title: 'Security & Compliance',
      description: 'Threat modeling, hardening, and compliance frameworks tailored to industrial systems.',
      bullets: ['ISO 27001 alignment', 'Identity & access', 'Network segmentation', 'Incident readiness'],
      icon: Shield,
    },
  ];

  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-6">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Premium consulting for paper & packaging. Practical programs, measurable outcomes.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((s, index) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}>
                <Card className="h-full border-border hover:shadow-strong transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-5">{s.description}</p>
                    <div className="space-y-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Ready to accelerate transformation?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Partner with Trucept Consulting to implement secure, efficient, and data-driven paper operations.</p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl hover:bg-primary-foreground/90 transition-colors duration-200">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}


