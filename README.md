# Trucept Consulting SARL - Official Website

A world-class corporate website for Trucept Consulting SARL, built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, elegant interface with Apple × Palantir × McKinsey aesthetic
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Built with Next.js App Router for optimal performance
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Animations**: Subtle framer-motion animations for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Animations**: framer-motion
- **Icons**: lucide-react
- **Fonts**: Inter + DM Serif Display
- **Deployment**: Vercel-ready

## 🎨 Design System

### Colors
- **Primary**: #0A84FF (Accent Blue)
- **Background**: #F8F9FA (Off-white)
- **Foreground**: #0A0A0A (Charcoal Gray)
- **Muted**: #6B7280 (Soft Gray)

### Typography
- **Headings**: DM Serif Display
- **Body**: Inter (sans-serif)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About page with founder bio
│   ├── contact/page.tsx        # Contact form and company details
│   ├── expertise/page.tsx      # Services and expertise areas
│   ├── projects/page.tsx       # Portfolio and case studies
│   ├── globals.css            # Global styles and design system
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Homepage with hero section
├── components/
│   ├── Layout.tsx             # Reusable layout component
│   └── ui/                    # shadcn/ui components
└── lib/
    └── utils.ts               # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trucept-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Environment Variables
No environment variables required for basic functionality.

## 🎯 Pages Overview

### Homepage (`/`)
- Hero section with animated particles
- Company tagline and CTA buttons
- Features preview
- Statistics section
- Call-to-action

### Expertise (`/expertise`)
- 2x2 grid of service cards
- AI & ML, DevSecOps, Cybersecurity, Scientific Research
- Process methodology
- Technology stack

### Projects (`/projects`)
- Portfolio showcase with case studies
- AI-Powered Paleoclimate Platform
- Medjerda Rainfall Forecasting System
- MenuOttawa Voice AI
- UAE Elite Financial Advisor

### About (`/about`)
- Founder biography (Mohamed Rayen Balghouthi)
- Company philosophy (Innovation × Integrity × Impact)
- Strategic partnerships
- Mission statement

### Contact (`/contact`)
- Contact form with validation
- Company details and location
- Business hours and response time
- FAQ section

## 🔧 Customization

### Updating Company Information
- Edit contact details in `src/components/Layout.tsx`
- Update founder bio in `src/app/about/page.tsx`
- Modify company description in `src/app/layout.tsx`

### Adding New Projects
- Add project objects to the `projects` array in `src/app/projects/page.tsx`
- Include title, description, technologies, and partners

### Styling Changes
- Modify design system variables in `src/app/globals.css`
- Update color palette and typography as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Comprehensive metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Canonical URLs

## 🎨 Animation Guidelines

- Subtle fade-in animations on scroll
- Hover effects with 200ms transitions
- No harsh or distracting animations
- Performance-optimized with framer-motion

## 📞 Support

For technical support or questions about the website:
- **Email**: contact@truceptconsulting.com
- **Phone**: +216 28 221 389
- **Location**: La Marsa, Tunisia

## 📄 License

© 2025 Trucept Consulting SARL – All Rights Reserved

---

**Built with ❤️ by Trucept Consulting SARL**