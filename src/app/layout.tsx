import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransitionProvider from "./providers/PageTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trucept Consulting – AI Systems & Software Engineering",
    template: "%s | Trucept Consulting",
  },
  description:
    "Trucept Consulting is an advanced AI systems architecture and software engineering consultancy. We build intelligent infrastructure, automation platforms, and data-driven systems for enterprises.",
  keywords: [
    "AI Consulting",
    "Software Engineering",
    "Systems Architecture",
    "Machine Learning",
    "Automation",
    "Trucept Consulting",
  ],
  authors: [{ name: "Mohamed Rayen Balghouthi" }],
  creator: "Trucept Consulting SARL",
  publisher: "Trucept Consulting SARL",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://www.truceptconsulting.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.truceptconsulting.com/",
    title: "Trucept Consulting – AI Systems & Software Engineering",
    description:
      "Advanced AI systems architecture and software engineering consultancy.",
    siteName: "Trucept Consulting",
    images: [
      { url: "/og-cover.jpg", width: 1200, height: 630, alt: "Trucept Consulting" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucept Consulting – AI Systems & Software Engineering",
    description: "Advanced AI systems architecture and software engineering consultancy.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-trucept.ico?v=999", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=999", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=999", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png?v=999", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png?v=999", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=999",
  },
  manifest: "/site.webmanifest?v=999",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Trucept Consulting',
              url: 'https://www.truceptconsulting.com',
              logo: 'https://www.truceptconsulting.com/android-chrome-512x512.png',
              description:
                'AI systems architecture and software engineering consultancy. We build intelligent infrastructure, automation platforms, and data-driven systems for enterprises.',
              foundingDate: '2023',
              founder: {
                '@type': 'Person',
                name: 'Mohamed Rayen Balghouthi',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+216-28-221-389',
                contactType: 'customer service',
                email: 'contact@truceptconsulting.com',
                availableLanguage: ['English', 'French', 'Arabic'],
              },
              sameAs: [],
              areaServed: 'Worldwide',
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Software Engineering',
                'Cloud Architecture',
                'Data Engineering',
                'DevSecOps',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
