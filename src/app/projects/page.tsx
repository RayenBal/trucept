'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const projects = [
  {
    title: "AI-Powered Paleoclimate Platform",
    description: "Advanced climate modeling platform developed in collaboration with Karwisoft AI, UCL, and ADU. Features deep learning models for paleoclimate reconstruction and predictive analytics.",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Climate Science", "Deep Learning", "Research"],
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    partners: ["Karwisoft AI", "UCL", "ADU"],
    status: "Active",
    link: "#"
  },
  {
    title: "Medjerda Rainfall Forecasting System",
    description: "LSTM & Transformer-based hydrological prediction system for the Medjerda River basin. Provides accurate rainfall forecasting with 95% precision for flood management.",
    image: "/api/placeholder/600/400",
    tags: ["LSTM", "Transformers", "Hydrology", "Forecasting"],
    technologies: ["Python", "PyTorch", "PostgreSQL", "Docker"],
    partners: ["Tunisian Water Authority"],
    status: "Deployed",
    link: "#"
  },
  {
    title: "MenuOttawa Voice AI",
    description: "AI-powered voice ordering system for restaurants using VAPI AI. Enables seamless voice-based menu navigation and order placement with natural language processing.",
    image: "/api/placeholder/600/400",
    tags: ["Voice AI", "NLP", "Restaurant Tech", "Automation"],
    technologies: ["VAPI AI", "Node.js", "WebRTC", "MongoDB"],
    partners: ["MenuOttawa"],
    status: "Live",
    link: "#"
  },
  {
    title: "UAE Elite Financial Advisor",
    description: "AI-driven investment guidance platform using Mistral API & Coqui TTS. Provides personalized financial advice with voice interaction and real-time market analysis.",
    image: "/api/placeholder/600/400",
    tags: ["FinTech", "AI Advisor", "Voice AI", "Investment"],
    technologies: ["Mistral API", "Coqui TTS", "FastAPI", "React"],
    partners: ["UAE Elite Financial"],
    status: "Production",
    link: "#"
  }
];

export default function ProjectsPage() {
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
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of innovative solutions that combine cutting-edge AI, 
              security, and automation to solve real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                          <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === 'Live' || project.status === 'Production' ? 'default' : 'secondary'}
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </motion.button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Partners */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Partners</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner) => (
                          <span key={partner} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Project Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions have delivered measurable results across diverse industries 
              and use cases worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed", description: "Across 4 continents" },
              { number: "95%", label: "Accuracy Rate", description: "Average model performance" },
              { number: "24/7", label: "System Uptime", description: "Production reliability" },
              { number: "15+", label: "Research Papers", description: "Published collaborations" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage AI, security, and automation 
              to solve your unique challenges and drive innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl hover:bg-primary-foreground/90 transition-colors duration-200"
            >
              Get Started Today
              <ExternalLink className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}