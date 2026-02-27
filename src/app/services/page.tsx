import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI & machine learning, full-stack software engineering, cloud architecture, data engineering, and DevSecOps. End-to-end technical consulting and delivery for enterprises.',
  openGraph: {
    title: 'Services — Trucept Consulting',
    description:
      'AI & machine learning, full-stack engineering, cloud architecture, data engineering, and DevSecOps services for enterprises.',
    url: 'https://www.truceptconsulting.com/services',
  },
  twitter: {
    title: 'Services — Trucept Consulting',
    description:
      'AI & machine learning, full-stack engineering, cloud architecture, data engineering, and DevSecOps services for enterprises.',
  },
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
