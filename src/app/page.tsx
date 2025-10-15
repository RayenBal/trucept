'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import LocomotiveScrollProvider from '@/components/LocomotiveScrollProvider';
import Image from 'next/image';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <LocomotiveScrollProvider>
      <Layout>
        {/* Hero */}
        <section 
          ref={containerRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-light pattern-waves"
          data-scroll-section
        >
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent"
              style={{ y, x: mousePosition.x * 20 }}
            />
            <div className="absolute inset-0 pattern-grid opacity-30" />
          </div>

          <motion.div 
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ opacity, scale }}
            data-scroll
            data-scroll-speed="0.5"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="flex justify-center"
              >
                <div className="w-28 h-28 rounded-2xl flex items-center justify-center shadow-strong animate-pulse-glow overflow-hidden bg-white">
                  <Image src="/trucept_logo.png" alt="Trucept Consulting" width={96} height={96} className="object-contain" priority />
                </div>
              </motion.div>

              <div className="space-y-6">
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-slate-900">
                  Consulting for the Paper & Packaging Industry
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  We modernize paper operations with automation, process optimization, and digital transformation — backed by AI, cloud, and DevSecOps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl">
                    <Link href="/services" className="flex items-center">
                      Explore Services
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl">
                    <Link href="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  title: 'Paper Industry Consulting',
                  desc: 'End-to-end assessments, process excellence, and ROI-focused transformation.'
                },{
                  title: 'AI & Automation',
                  desc: 'Predictive insights, intelligent QC, and automated workflows.'
                },{
                  title: 'Cloud & DevSecOps',
                  desc: 'Secure, scalable platforms with continuous delivery and governance.'
                }].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-soft">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Link href="#capabilities" className="flex flex-col items-center cursor-pointer group">
              <span className="text-sm text-slate-500 mb-3 group-hover:text-primary transition-colors">Our Capabilities</span>
              <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center group-hover:border-primary transition-colors">
                <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-3 bg-slate-400 rounded-full mt-2 group-hover:bg-primary transition-colors" />
              </div>
            </Link>
          </motion.div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass-subtle shadow-soft mb-6">
                <Sparkles className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm font-medium text-slate-700">Core Capabilities</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-4">Operational Excellence, Delivered</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">From mill floor to enterprise systems, we design secure, scalable, and efficient operations for paper and packaging leaders.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                icon: Sparkles, title: 'Process Optimization', desc: 'Lean optimization, line balancing, OEE uplift, and digitized SOPs.'
              },{
                icon: Shield, title: 'Secure Automation', desc: 'PLC/SCADA hardening, identity controls, and resilient infrastructure.'
              },{
                icon: Zap, title: 'Intelligent Systems', desc: 'Vision QC, predictive maintenance, and AI-assisted planning.'
              }].map((f, index) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group relative">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-soft hover:shadow-strong transition-all duration-500">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <f.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{f.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Let’s build the future of paper services</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Start with a diagnostic. We’ll identify the highest-impact initiatives and deliver a clear roadmap.</p>
              <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6 rounded-xl">
                <Link href="/contact">Book a Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </LocomotiveScrollProvider>
  );
}