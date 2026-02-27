import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Trucept Consulting. Tell us about your AI, software engineering, or cloud architecture challenge and we will respond within 24 hours.',
  openGraph: {
    title: 'Contact Trucept Consulting',
    description:
      'Have an engineering challenge? Tell us about your project and we will respond within 24 hours.',
    url: 'https://www.truceptconsulting.com/contact',
  },
  twitter: {
    title: 'Contact Trucept Consulting',
    description:
      'Have an engineering challenge? Tell us about your project and we will respond within 24 hours.',
  },
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
