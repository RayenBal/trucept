import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransitionProvider from "./providers/PageTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trucept Consulting – Paper & Packaging Consulting",
    template: "%s | Trucept Consulting",
  },
  description:
    "Trucept Consulting provides Paper and Packaging Consulting, Automation, and AI Solutions for industrial efficiency and sustainability.",
  keywords: [
    "Paper Consulting",
    "Packaging Consulting",
    "Automation",
    "AI Solutions",
    "Industrial Consulting",
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
    title: "Trucept Consulting – Paper & Packaging Consulting",
    description:
      "Experts in Paper & Packaging Consulting, Automation, and AI Solutions.",
    siteName: "Trucept Consulting",
    images: [
      { url: "/og-cover.jpg", width: 1200, height: 630, alt: "Trucept Consulting" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucept Consulting – Paper & Packaging Consulting",
    description: "Experts in Paper & Packaging Consulting, Automation, and AI Solutions.",
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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
