'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Cloud, Shield, FlaskConical, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const expertiseAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    description: "Predictive analytics, anomaly detection, and applied deep learning models for real-world intelligence.",
    features: [
      "Deep Learning & Neural Networks",
      "Computer Vision & NLP",
      "Predictive Analytics",
      "Anomaly Detection Systems",
      "MLOps & Model Deployment"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Cloud,
    title: "DevSecOps & Automation",
    description: "End-to-end CI/CD pipelines, Kubernetes orchestration, and infrastructure resilience.",
    features: [
      "CI/CD Pipeline Design",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "Cloud Security Automation",
      "Monitoring & Observability"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Shield,
    title: "Cybersecurity Engineering",
    description: "Penetration testing, incident response, and security automation aligned with ISO 27001.",
    features: [
      "Penetration Testing",
      "Security Architecture",
      "Incident Response",
      "Compliance Auditing",
      "Security Automation"
    ],
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: FlaskConical,
    title: "Scientific Research & Data Systems",
    description: "Applied AI for climate, environment, and scientific discovery with research-grade precision.",
    features: [
      "Climate & Environmental AI",
      "Scientific Computing",
      "Data Pipeline Architecture",
      "Research Collaboration",
      "Publication Support"
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }
];

export default function ExpertisePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
              Our Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with deep domain expertise to deliver 
              solutions that drive measurable impact across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                      <area.icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <CardTitle className="font-serif text-2xl font-semibold text-foreground">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic methodology that ensures every project delivers 
              maximum value while maintaining the highest standards of quality and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your challenges, goals, and technical requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Design comprehensive solution architecture and implementation roadmap."
              },
              {
                step: "03",
                title: "Execution",
                description: "Agile development with continuous integration and quality assurance."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Performance tuning, security hardening, and ongoing support."
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest tools and frameworks to build robust, scalable, 
              and secure solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Python", "TensorFlow", "PyTorch", "Kubernetes", "Docker", "AWS",
              "Azure", "GCP", "React", "Next.js", "Node.js", "PostgreSQL",
              "MongoDB", "Redis", "Elasticsearch", "Prometheus", "Grafana", "Terraform"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}