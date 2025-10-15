import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import PageTransitionProvider from "./providers/PageTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trucept Consulting – Paper & Packaging Consulting",
    template: "%s | Trucept Consulting",
  },
  description:
    "Premium consulting for the paper and packaging industry. We modernize operations with automation, AI, cloud, and DevSecOps for measurable outcomes.",
  keywords: [
    "paper consulting",
    "packaging consulting",
    "automation",
    "process optimization",
    "DevSecOps",
    "cloud",
    "AI",
  ],
  authors: [{ name: "Mohamed Rayen Balghouthi" }],
  creator: "Trucept Consulting SARL",
  publisher: "Trucept Consulting SARL",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://truceptconsulting.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truceptconsulting.com",
    title: "Trucept Consulting – Paper & Packaging Consulting",
    description:
      "Premium consulting for the paper and packaging industry. We modernize operations with automation, AI, cloud, and DevSecOps for measurable outcomes.",
    siteName: "Trucept Consulting",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Trucept Consulting" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucept Consulting – Paper & Packaging Consulting",
    description:
      "Premium consulting for the paper and packaging industry. We modernize operations with automation, AI, cloud, and DevSecOps for measurable outcomes.",
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
