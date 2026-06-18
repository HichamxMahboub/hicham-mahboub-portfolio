import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const metadataBase = new URL(siteConfig.url);
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hicham Mahboub",
    "junior full-stack internship",
    "ESI engineering student",
    "ISITD",
    "Information Systems and Digital Transformation",
    "full-stack developer portfolio",
    "backend API portfolio",
    "dashboard portfolio",
    "data analytics portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "ASP.NET Core",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "portfolio",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/My-pdp.png",
        alt: "Hicham Mahboub portfolio profile image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/My-pdp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} bg-[#080a0f] font-sans text-slate-100 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
