'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';
import SmoothScrollProvider from './SmoothScrollProvider';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background">
        {/* Dynamic Professional Header */}
        <motion.header 
          ref={headerRef}
          className="sticky top-0 z-50 border-b border-slate-200/50 shadow-soft"
          style={{ 
            opacity: headerOpacity,
            backdropFilter: `blur(${headerBlur}px)`,
            scale: headerScale
          }}
        >
          <div className="bg-white/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Professional Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                  <motion.div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image src="/trucept_logo.png" alt="Trucept Consulting" width={40} height={40} className="object-contain" priority />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      Trucept Consulting
                    </span>
                    <span className="text-xs text-slate-500 -mt-1">SARL</span>
                  </div>
                </Link>

                {/* Clean Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                          pathname === item.href
                            ? 'text-primary bg-blue-50'
                            : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <motion.button 
                    className="text-slate-600 hover:text-primary p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image src="/trucept_logo.png" alt="Trucept Consulting" width={32} height={32} className="object-contain" />
                  </div>
                  <span className="font-display text-xl font-semibold text-foreground">
                    Trucept Consulting SARL
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Engineering Intelligence. Securing Innovation. Empowering organizations with 
                  intelligent automation, secure infrastructures, and research-grade AI solutions.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>La Marsa, Tunisia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@truceptconsulting.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+216 28 221 389</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>AI & Machine Learning</li>
                  <li>DevSecOps & Automation</li>
                  <li>Cybersecurity Engineering</li>
                  <li>Scientific Research</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Trucept Consulting SARL – All Rights Reserved
              </p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Founded by Mohamed Rayen Balghouthi
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScrollProvider>
  );
}