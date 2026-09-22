import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { resumeData } from "@/data/resumeData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${resumeData.name} - ${resumeData.title}`,
  description: `${resumeData.name} - ${resumeData.title}. ${resumeData.headline}`,
  keywords: [
    "John Robert Cruda",
    "Rob Cruda",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: resumeData.name, url: "https://github.com/jcruda" }],
  creator: resumeData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jcruda.dev",
    title: `${resumeData.name} - ${resumeData.title}`,
    description: resumeData.headline,
    siteName: `${resumeData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${resumeData.name} - ${resumeData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.name} - ${resumeData.title}`,
    description: resumeData.headline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen selection:bg-purple-200 selection:text-purple-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
