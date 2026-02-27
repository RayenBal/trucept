import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Trucept Consulting — AI Systems & Software Engineering',
  description:
    'Trucept Consulting designs and builds intelligent systems, automation platforms, and scalable software for enterprises. Expertise in AI, machine learning, cloud architecture, and full-stack engineering.',
  openGraph: {
    title: 'Trucept Consulting — AI Systems & Software Engineering',
    description:
      'We design and build intelligent systems, automation platforms, and scalable software. AI, ML, cloud architecture, and full-stack engineering.',
    url: 'https://www.truceptconsulting.com/',
  },
  twitter: {
    title: 'Trucept Consulting — AI Systems & Software Engineering',
    description:
      'We design and build intelligent systems, automation platforms, and scalable software. AI, ML, cloud architecture, and full-stack engineering.',
  },
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeClient />;
}
