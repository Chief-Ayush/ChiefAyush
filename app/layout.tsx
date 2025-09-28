import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClassicStarField from "@/components/ThreeBackground";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Ayush Attarde - Backend Specialist & AI/ML Enthusiast",
  description: "Portfolio of Ayush Attarde, a passionate Backend Specialist and AI/ML enthusiast. Showcasing expertise in scalable systems, microservices, and machine learning integration.",
  keywords: ["Backend Developer", "AI", "Machine Learning", "Microservices", "Node.js", "Python", "Portfolio"],
  authors: [{ name: "Ayush Attarde" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetBrainsMono.variable} font-monaco antialiased`}>
        <ClassicStarField />
        {children}
      </body>
    </html>
  );
}
