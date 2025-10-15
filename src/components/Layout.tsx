'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import SmoothScrollProvider from './SmoothScrollProvider';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+21628221389';
const WHATSAPP_TEXT = encodeURIComponent('Hello Trucept Consulting, I would like to discuss a project.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${WHATSAPP_TEXT}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
                <Link href="/" className="flex items-center space-x-3 group" onClick={() => setMobileOpen(false)}>
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

                {/* CTA + Mobile Menu */}
                <div className="flex items-center space-x-2 md:space-x-4">
                  <motion.div className="hidden md:block" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.button 
                    className="md:hidden text-slate-600 hover:text-primary p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle menu"
                    onClick={() => setMobileOpen((v) => !v)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md"
                >
                  <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-3 rounded-lg text-sm font-medium ${
                          pathname === item.href ? 'text-primary bg-blue-50' : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="block mt-2 px-3 py-3 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Floating Actions */}
        <AnimatePresence>
          {showTop && (
            <>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-50 mr-16 p-3 rounded-full bg-green-500 text-white shadow-medium hover:bg-green-600"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-medium hover:bg-primary/90"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

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
                  Precision consulting for the paper & packaging industry. We modernize operations with automation, cloud, and data-driven intelligence.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Canada · Tunisia · UAE</span>
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
                  <li>Paper Industry Consulting</li>
                  <li>AI & Machine Learning</li>
                  <li>DevSecOps & Automation</li>
                  <li>Cloud Optimization</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Trucept Consulting SARL – All Rights Reserved
              </p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Crafted for performance and security
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScrollProvider>
  );
}