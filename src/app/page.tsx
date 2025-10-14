'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap, Brain, ChevronDown, Cpu, Settings, Lock } from 'lucide-react';
import Layout from '@/components/Layout';
import LocomotiveScrollProvider from '@/components/LocomotiveScrollProvider';

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

  // Mouse tracking for parallax effect
  useEffect(() => {
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
        {/* Cinematic Hero Section */}
        <section 
          ref={containerRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-light pattern-waves"
          data-scroll-section
        >
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            {/* Animated gradient overlay with parallax */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent"
              style={{ 
                y,
                x: useTransform(() => mousePosition.x * 20),
              }}
            />
            
            {/* Professional grid pattern */}
            <div className="absolute inset-0 pattern-grid opacity-30" />
            
            {/* Floating geometric elements with mouse parallax */}
            <motion.div
              className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full shadow-soft"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: useTransform(() => mousePosition.x * 30),
                y: useTransform(() => mousePosition.y * 20),
              }}
            />
            
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg shadow-soft"
              animate={{
                rotate: [0, -180, -360],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: useTransform(() => mousePosition.x * -25),
                y: useTransform(() => mousePosition.y * 15),
              }}
            />
            
            <motion.div
              className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full shadow-soft"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                x: useTransform(() => mousePosition.x * 15),
                y: useTransform(() => mousePosition.y * -10),
              }}
            />
          </div>

          {/* Cinematic Hero Content */}
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
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-16"
            >
              {/* Trucept Logo Motion Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                className="flex justify-center mb-8"
              >
                <div className="w-24 h-24 bg-gradient-trucept rounded-2xl flex items-center justify-center shadow-strong animate-pulse-glow">
                  <Brain className="w-12 h-12 text-white" />
        </div>
              </motion.div>

              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-soft"
              >
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full mr-4"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-slate-700">Industrial & AI Consulting for Smarter, Safer Operations</span>
              </motion.div>

              {/* Cinematic Animated Headline */}
              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight"
                >
                  <motion.span 
                    className="block text-slate-900"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    Engineering
                  </motion.span>
                  <motion.span 
                    className="block text-gradient-cinematic"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    Intelligence
                  </motion.span>
                  <motion.span 
                    className="block text-slate-700 text-5xl md:text-6xl lg:text-7xl mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    Securing Innovation
                  </motion.span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                  className="max-w-5xl mx-auto"
                >
                  <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed mb-8 font-light">
                    Where Automation Meets AI
                  </p>
                  <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-4xl mx-auto">
                    We modernize industrial systems using automation, AI, and secure digital transformation 
                    to deliver smarter, safer, and more efficient operations.
                  </p>
                </motion.div>
              </div>

              {/* Cinematic CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-16"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button asChild size="lg" className="text-lg px-12 py-6 rounded-2xl bg-gradient-trucept hover:shadow-strong transition-all duration-500 hover-lift-cinematic">
                    <Link href="/expertise" className="flex items-center">
                      <span>Discover Our Expertise</span>
                      <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg" className="text-lg px-12 py-6 rounded-2xl border-2 border-slate-300 hover:border-primary hover:text-primary transition-all duration-500 shadow-soft hover:shadow-medium hover-lift-cinematic">
                    <Link href="/contact">
                      Start Your Project
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Executive Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.2 }}
                className="pt-20 border-t border-slate-200/50"
              >
                <p className="text-sm text-slate-500 mb-12 font-medium">Trusted by industry leaders worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-16">
                  {['UCL', 'ADU', 'Karwisoft AI', 'Fortune 500'].map((partner, index) => (
                    <motion.div
                      key={partner}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.4 + (index * 0.15) }}
                      className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors duration-500 cursor-pointer hover-scale-subtle"
                      whileHover={{ scale: 1.1 }}
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        {/* Sophisticated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const nextSection = document.getElementById('capabilities');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm text-slate-500 mb-3 group-hover:text-primary transition-colors">
              Explore Our Capabilities
            </span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center group-hover:border-primary transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-slate-400 rounded-full mt-2 group-hover:bg-primary transition-colors"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sophisticated Interactive Capabilities Section */}
      <section id="capabilities" className="py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full glass-subtle shadow-soft mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary mr-3" />
              <span className="text-sm font-medium text-slate-700">Core Capabilities</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight"
            >
              <span className="block">Engineering the</span>
              <span className="block text-gradient-intelligence animate-gradient-shift">
                Future of AI
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            >
              We architect intelligent systems that transform industrial operations, 
              secure critical infrastructure, and push the boundaries of automation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence",
                description: "Advanced ML models and AI systems that learn, adapt, and evolve with your industrial operations.",
                features: ["Deep Learning", "Computer Vision", "Predictive Analytics", "Neural Networks"],
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Fortress-grade security solutions that protect critical infrastructure with military-grade precision.",
                features: ["Zero Trust Architecture", "Threat Intelligence", "Incident Response", "Security Automation"],
                gradient: "from-emerald-500 to-green-500",
                bgGradient: "from-emerald-50 to-green-50",
                borderColor: "border-emerald-200"
              },
              {
                icon: Zap,
                title: "DevSecOps",
                description: "Seamless integration of development, security, and operations for bulletproof infrastructure.",
                features: ["CI/CD Pipelines", "Kubernetes", "Infrastructure as Code", "Automated Security"],
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-50 to-violet-50",
                borderColor: "border-purple-200"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border-2 ${feature.borderColor} shadow-soft hover:shadow-strong transition-all duration-500 hover-lift-smooth`}>
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-medium`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 text-center mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-slate-500 group-hover:text-slate-700 transition-colors"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3`} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Hover overlay effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Impact Section */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Proven Impact</span>
              <span className="block text-3xl md:text-4xl text-gray-300 mt-2">Across Industries</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and innovation in every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                number: "50+", 
                label: "Enterprise Projects", 
                description: "Delivered with precision",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                number: "15+", 
                label: "Research Publications", 
                description: "Advancing the field",
                icon: "📚",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: "100%", 
                label: "Client Satisfaction", 
                description: "Exceeding expectations",
                icon: "⭐",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                number: "24/7", 
                label: "Global Support", 
                description: "Always available",
                icon: "🌍",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className={`font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's build something extraordinary together. Get in touch to discuss how we can 
              help you leverage AI, security, and automation for measurable impact.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
    </div>
      </section>
      </Layout>
    </LocomotiveScrollProvider>
  );
}