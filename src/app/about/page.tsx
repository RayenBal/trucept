import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Trucept Consulting — an AI systems and software engineering consultancy building intelligent infrastructure, automation platforms, and data-driven solutions for enterprises worldwide.',
  openGraph: {
    title: 'About Trucept Consulting',
    description:
      'AI systems and software engineering consultancy building intelligent infrastructure and automation for enterprises worldwide.',
    url: 'https://www.truceptconsulting.com/about',
  },
  twitter: {
    title: 'About Trucept Consulting',
    description:
      'AI systems and software engineering consultancy building intelligent infrastructure and automation for enterprises worldwide.',
  },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
