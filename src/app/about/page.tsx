'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Award, Users, Globe, Target, Lightbulb, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' as const },
});

const timelineEvents = [
  { year: '2018', title: 'Founded', desc: 'Trucept Consulting established in Tunis, focusing on industrial process excellence for regional paper mills.' },
  { year: '2020', title: 'Digital Expansion', desc: 'Launched AI & Automation practice. First computer-vision QC deployment in a packaging plant.' },
  { year: '2022', title: 'UAE Presence', desc: 'Opened operations in the UAE. Expanded cloud and DevSecOps advisory services across the GCC.' },
  { year: '2024', title: 'Research Partnerships', desc: 'Strategic research collaborations with UCL and Abu Dhabi University in AI and environmental science.' },
  { year: '2025', title: 'Scaled Impact', desc: '50+ projects delivered. 98% client retention rate. Recognised as a leading boutique consulting firm in MENA.' },
];

export default function AboutPage() {
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
              About Trucept
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Engineering Intelligence.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Securing Innovation.
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A boutique consulting firm helping paper &amp; packaging leaders modernize operations with
              AI, cloud infrastructure, and industrial automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="relative">
                <div className="w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border border-slate-700">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Mohamed Rayen Balghouthi</h3>
                      <p className="text-slate-400 text-sm mt-1">Founder &amp; Lead Engineer</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                      {['AI Research', 'DevSecOps', 'Industrial IoT', 'Cloud Architecture'].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-medium border border-blue-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="space-y-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">Our Story</p>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Meet the Founder</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Mohamed Rayen Balghouthi is a visionary engineer with deep expertise spanning machine
                  learning, cybersecurity, and industrial automation. He founded Trucept Consulting to
                  bring enterprise-grade AI and operational excellence to the paper &amp; packaging sector.
                </p>
                <p>
                  His research spans climate science, environmental monitoring, fintech, and voice AI
                  systems. Under his leadership, Trucept has delivered 50+ successful projects and
                  established strategic partnerships with leading institutions including UCL and Abu Dhabi
                  University.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: '50+ Projects', icon: CheckCircle },
                  { label: 'Tunisia · UAE', icon: Globe },
                  { label: 'UCL Partnership', icon: Award },
                  { label: '98% Retention', icon: Target },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Values</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Innovation × Integrity × Impact — the three pillars behind everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'We push the boundaries of what\'s possible, constantly exploring new technologies and methodologies to deliver breakthrough solutions for our clients.',
                color: 'text-blue-600',
                bg: 'bg-blue-50 group-hover:bg-blue-100',
              },
              {
                icon: Shield,
                title: 'Integrity',
                desc: 'We maintain the highest standards of security, ethics, and transparency. Trust is built through consistent, honest delivery — not promises.',
                color: 'text-indigo-600',
                bg: 'bg-indigo-50 group-hover:bg-indigo-100',
              },
              {
                icon: Zap,
                title: 'Impact',
                desc: 'We measure success by tangible outcomes. Every engagement targets measurable improvements in efficiency, cost, quality, or risk reduction.',
                color: 'text-violet-600',
                bg: 'bg-violet-50 group-hover:bg-violet-100',
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.1)}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${v.bg}`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Company History</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  {...fadeUp(i * 0.08)}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md -translate-x-1/2 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white transition-colors duration-200">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{event.year}</span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{event.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Collaborations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Strategic Partnerships</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              We collaborate with leading institutions to advance the frontiers of applied AI and
              industrial technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'University College London (UCL)',
                location: 'United Kingdom',
                desc: 'Academic research in machine learning, climate modelling, and scientific computing applications.',
                icon: Award,
              },
              {
                name: 'Abu Dhabi University (ADU)',
                location: 'UAE',
                desc: 'Joint initiatives in AI for environmental science and sustainable technology development.',
                icon: Users,
              },
              {
                name: 'Global Research Labs',
                location: 'Worldwide',
                desc: 'Collaborative AI research across climate science, industrial IoT, and environmental monitoring.',
                icon: Globe,
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp(i * 0.1)}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-blue-600 font-semibold mb-3 uppercase tracking-wider">{p.location}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">Where We Operate</p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-700 text-base font-medium">
              {['Tunisia', 'UAE'].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-slate-50">
                  <Globe className="w-4 h-4 text-blue-600" /> {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/12 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div {...fadeUp()}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to work together?</h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Let's discuss your challenges. We'll craft a diagnostic and roadmap tailored to your organisation.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/25"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
