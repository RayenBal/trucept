'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+21628221389';
const WHATSAPP_TEXT = encodeURIComponent('Hello Trucept Consulting, I would like to discuss a project.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${WHATSAPP_TEXT}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Glass Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl'
            : 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center ring-1 ring-white/20">
                <Image
                  src="/trucept_logo.png"
                  alt="Trucept Consulting"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
                  Trucept Consulting
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase">SARL</span>
              </div>
            </Link>

            {/* Center Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-white bg-blue-600/20 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/25"
              >
                Get in Touch
              </Link>
              <button
                className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
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
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-white bg-blue-600/20 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 text-center transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

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
              aria-label="Chat on WhatsApp"
              className="fixed bottom-6 right-20 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              aria-label="Scroll to top"
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Dark Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + Tagline */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image
                    src="/trucept_logo.png"
                    alt="Trucept Consulting"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-white text-base">Trucept Consulting</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Precision consulting for the paper &amp; packaging industry. We modernize operations with
                automation, cloud, and data-driven intelligence.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Tunisia · UAE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>contact@truceptconsulting.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>+216 28 221 389</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Paper Industry Consulting',
                  'AI & Automation',
                  'Cloud & DevSecOps',
                  'Security & Compliance',
                ].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="hover:text-white transition-colors duration-200">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
              <div className="space-y-3 text-sm">
                <p>Mon–Fri: 9:00–18:00 CET</p>
                <p>contact@truceptconsulting.com</p>
                <p>+216 28 221 389</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors mt-2"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Trucept Consulting SARL — All Rights Reserved</p>
            <p>Crafted for performance and security</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
