import type { Metadata } from 'next';
import ExpertiseClient from './ExpertiseClient';

export const metadata: Metadata = {
  title: 'Our Expertise',
  description:
    'Deep technical expertise in AI/ML, software engineering, systems architecture, data engineering, and security. Production-grade intelligent solutions delivered at scale.',
  openGraph: {
    title: 'Our Expertise — Trucept Consulting',
    description:
      'Deep expertise in AI/ML, software engineering, systems architecture, data engineering, and security at production scale.',
    url: 'https://www.truceptconsulting.com/expertise',
  },
  twitter: {
    title: 'Our Expertise — Trucept Consulting',
    description:
      'Deep expertise in AI/ML, software engineering, systems architecture, data engineering, and security at production scale.',
  },
  alternates: { canonical: '/expertise' },
};

export default function ExpertisePage() {
  return <ExpertiseClient />;
}
