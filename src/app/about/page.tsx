'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Zap, Award, Users, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

export default function AboutPage() {
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
              About Trucept
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering Intelligence. Securing Innovation. Empowering organizations 
              with intelligent automation, secure infrastructures, and research-grade AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image/Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Mohamed Rayen Balghouthi
                    </h3>
                    <p className="text-muted-foreground">Founder & Lead Engineer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Meet the Founder
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mohamed Rayen Balghouthi is a visionary engineer and researcher with a passion for 
                  bridging the gap between cutting-edge AI research and real-world applications. 
                  With extensive experience in machine learning, cybersecurity, and scientific computing, 
                  he founded Trucept Consulting to democratize access to enterprise-grade AI solutions.
                </p>
                <p>
                  His work spans multiple domains, from climate science and environmental monitoring 
                  to financial technology and voice AI systems. Rayen's commitment to excellence and 
                  innovation has established Trucept as a trusted partner for organizations seeking 
                  to leverage AI for competitive advantage.
                </p>
                <p>
                  Under his leadership, Trucept has delivered over 50 successful projects, published 
                  15+ research papers, and established strategic partnerships with leading institutions 
                  including UCL, ADU, and Karwisoft AI.
                </p>
              </div>
              
              {/* Expertise Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                {[
                  "AI Research", "Cybersecurity", "DevSecOps", "Scientific Computing", 
                  "Climate AI", "Voice AI", "FinTech", "Research Collaboration"
                ].map((expertise) => (
                  <Badge key={expertise} variant="outline" className="text-xs">
                    {expertise}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              Our Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovation × Integrity × Impact — The three pillars that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver breakthrough solutions.",
                color: "text-blue-500",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We maintain the highest standards of security, ethics, and transparency in all our work, building trust through consistent delivery.",
                color: "text-green-500",
                bgColor: "bg-green-500/10"
              },
              {
                icon: Zap,
                title: "Impact",
                description: "We measure success by the tangible value we create for our clients, from improved efficiency to breakthrough discoveries.",
                color: "text-purple-500",
                bgColor: "bg-purple-500/10"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-all duration-300 border-border">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
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
              Strategic Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading institutions and organizations worldwide to deliver 
              cutting-edge solutions and advance the field of AI and cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Karwisoft AI",
                location: "Canada",
                description: "Collaborative AI research and development, focusing on climate science and environmental monitoring solutions.",
                icon: Globe,
                color: "text-blue-500"
              },
              {
                name: "University College London (UCL)",
                location: "United Kingdom",
                description: "Academic research partnership in machine learning, climate modeling, and scientific computing applications.",
                icon: Award,
                color: "text-purple-500"
              },
              {
                name: "Abu Dhabi University (ADU)",
                location: "United Arab Emirates",
                description: "Joint research initiatives in AI applications for environmental science and sustainable technology development.",
                icon: Users,
                color: "text-green-500"
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-lg transition-all duration-300 border-border">
                  <div className={`w-12 h-12 ${partner.color} bg-current/10 rounded-xl flex items-center justify-center mb-4`}>
                    <partner.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {partner.location}
                  </p>
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
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
              Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Trucept Consulting empowers organizations with intelligent automation, secure 
              infrastructures, and research-grade AI solutions that drive measurable impact — 
              from data to decision. We believe in the transformative power of technology to 
              solve humanity's greatest challenges while maintaining the highest standards of 
              security, ethics, and excellence.
            </p>
            <div className="pt-8">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Engineering Intelligence. Securing Innovation.
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}