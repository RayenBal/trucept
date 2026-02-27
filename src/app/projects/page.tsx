import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Explore our portfolio of production AI systems, cloud migrations, data platforms, and automation solutions delivered for clients across industries worldwide.',
  openGraph: {
    title: 'Projects & Case Studies — Trucept Consulting',
    description:
      'Production AI systems, cloud migrations, data platforms, and automation solutions delivered for clients worldwide.',
    url: 'https://www.truceptconsulting.com/projects',
  },
  twitter: {
    title: 'Projects & Case Studies — Trucept Consulting',
    description:
      'Production AI systems, cloud migrations, data platforms, and automation solutions delivered for clients worldwide.',
  },
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
