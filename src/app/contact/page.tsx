'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail, Phone, MapPin, Send, Clock, Globe,
  CheckCircle2, AlertCircle, Calendar, MessageCircle,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { useState } from 'react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+21628221389';
const WHATSAPP_TEXT = encodeURIComponent('Hello Trucept Consulting, I would like to schedule a consultation.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${WHATSAPP_TEXT}`;
const CALENDLY_LINK = process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  }

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
              Let&apos;s Talk
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Engage Our Consulting Team
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tell us about your objectives. We&apos;ll propose a diagnostic and a pragmatic roadmap — usually within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout: Info + Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Contact Info */}
            <motion.div {...fadeUp(0)} className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">Contact</p>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Get in Touch</h2>
                <p className="text-slate-500 leading-relaxed">
                  Global presence with local execution. Our team responds within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@truceptconsulting.com' },
                  { icon: Phone, label: 'Phone', value: '+216 28 221 389' },
                  { icon: MapPin, label: 'Locations', value: 'Tunisia · UAE' },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri: 9:00–18:00 CET' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
                      <p className="text-slate-800 font-medium text-sm mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Locations visual */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold text-sm">Where We Operate</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Tunisia', 'UAE'].map((loc) => (
                    <span key={loc} className="px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-xs font-medium border border-blue-500/20">
                      {loc}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                  Senior architects and engineers leading every engagement — wherever you are.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Send us a Message</h3>
                <p className="text-slate-500 text-sm mb-8">Expect a response within one business day.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                    <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50 border border-green-200 text-green-800">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">Your message has been sent. We&apos;ll be in touch shortly.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </a>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                        <Calendar className="w-4 h-4" /> Schedule a Call
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form action={onSubmit} className="space-y-5">
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" className="rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" className="rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john.doe@company.com" className="rounded-xl border-slate-200 focus:border-blue-500" required />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-sm font-medium text-slate-700">Company <span className="text-slate-400 font-normal">(Optional)</span></Label>
                      <Input id="company" name="company" placeholder="Your Company" className="rounded-xl border-slate-200 focus:border-blue-500" />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Project inquiry / Consultation request" className="rounded-xl border-slate-200 focus:border-blue-500" required />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message</Label>
                      <Textarea id="message" name="message" placeholder="Briefly describe your needs and goals..." className="rounded-xl min-h-[130px] border-slate-200 focus:border-blue-500" required />
                    </div>

                    {error && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                      </motion.div>
                    )}

                    <Button type="submit" className="w-full rounded-xl py-6 text-base bg-blue-600 hover:bg-blue-500 font-semibold" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Common Questions</h2>
            <p className="text-slate-500">Quick answers before we speak.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical engagement take?',
                a: 'Simple AI implementations typically take 2–4 weeks. Comprehensive enterprise programmes can run 3–6 months. We provide detailed timelines during our initial consultation.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes — we offer support packages including monitoring, regular reviews, security patches, and performance tuning. Our team stays engaged beyond delivery.',
              },
              {
                q: 'What industries do you serve beyond paper?',
                a: 'While we specialise in paper & packaging, our AI and DevSecOps practices extend to manufacturing, logistics, energy, and public sector organisations.',
              },
              {
                q: 'How is data security handled?',
                a: 'Security is embedded in every deliverable. We apply ISO 27001 principles, end-to-end encryption, strict access controls, and conduct regular security reviews across all engagements.',
              },
            ].map((faq, i) => (
              <motion.div key={faq.q} {...fadeUp(i * 0.07)} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 transition-colors">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
