'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { useState } from 'react';

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
    } catch (e: any) {
      setError(e.message || 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Engage Our Consulting Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your objectives. We’ll propose a diagnostic and a pragmatic roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display text-2xl font-semibold text-foreground">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Expect a response within one business day.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitted ? (
                    <div className="flex items-center p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Your message has been sent. We’ll be in touch shortly.
                    </div>
                  ) : (
                    <form action={onSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" name="firstName" placeholder="John" className="rounded-xl" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" name="lastName" placeholder="Doe" className="rounded-xl" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john.doe@company.com" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" name="company" placeholder="Your Company" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" placeholder="Project Inquiry" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Briefly describe your needs and goals..." className="rounded-xl min-h-[120px]" required />
                      </div>
                      {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">{error}</div>
                      )}
                      <Button type="submit" className="w-full rounded-xl py-6 text-lg" disabled={isSubmitting}>
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display text-2xl font-semibold text-foreground">
                    Get in Touch
                  </CardTitle>
                  <CardDescription>
                    Global presence with local execution.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">contact@truceptconsulting.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+216 28 221 389</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Locations</p>
                        <p className="text-muted-foreground">Canada · Tunisia · UAE</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Mon–Fri: 9:00–18:00 CET</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Trusted Delivery</h3>
                    <p className="text-sm text-muted-foreground">Senior architects and engineers leading every engagement.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple AI implementations can take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and performance optimization. Our support team is available to ensure your systems run smoothly."
              },
              {
                question: "What industries do you serve?",
                answer: "We work across diverse industries including healthcare, finance, climate science, retail, manufacturing, and research institutions. Our solutions are adaptable to any sector that can benefit from AI and automation."
              },
              {
                question: "How do you ensure data security?",
                answer: "Security is paramount in everything we do. We follow ISO 27001 standards, implement end-to-end encryption, conduct regular security audits, and maintain strict access controls. All our solutions are built with security-first principles."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}