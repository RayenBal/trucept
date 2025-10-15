import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trucept Consulting SARL - AI, Security & Automation",
    template: "%s | Trucept Consulting"
  },
  description: "Engineering Intelligence. Securing Innovation. Trucept Consulting empowers organizations with intelligent automation, secure infrastructures, and research-grade AI solutions. Based in La Marsa, Tunisia.",
  keywords: [
    "AI consulting",
    "machine learning",
    "cybersecurity",
    "DevSecOps",
    "automation",
    "Tunisia",
    "La Marsa",
    "scientific computing",
    "climate AI",
    "voice AI",
    "FinTech"
  ],
  authors: [{ name: "Mohamed Rayen Balghouthi" }],
  creator: "Trucept Consulting SARL",
  publisher: "Trucept Consulting SARL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://truceptconsulting.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truceptconsulting.com",
    title: "Trucept Consulting SARL - AI, Security & Automation",
    description: "Engineering Intelligence. Securing Innovation. Empowering organizations with intelligent automation, secure infrastructures, and research-grade AI solutions.",
    siteName: "Trucept Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trucept Consulting - AI, Security & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucept Consulting SARL - AI, Security & Automation",
    description: "Engineering Intelligence. Securing Innovation. Empowering organizations with intelligent automation, secure infrastructures, and research-grade AI solutions.",
    images: ["/og-image.jpg"],
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
      { url: "/trucept_logo.svg", type: "image/svg+xml" },
      { url: "/trucept_logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
