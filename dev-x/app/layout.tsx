import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeveloperX Portfolio",
    template: "%s | DeveloperX",
  },
  description: "Modern personal portfolio built with Next.js, Chakra UI, and Supabase",
  keywords: [
    "DeveloperX",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Chakra UI",
    "Frontend Engineer",
    "Full‑stack Developer",
  ],
  authors: [{ name: "DeveloperX" }],
  creator: "DeveloperX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developerx.example.com",
    siteName: "DeveloperX Portfolio",
    title: "DeveloperX Portfolio",
    description: "Modern personal portfolio built with Next.js, Chakra UI, and Supabase",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeveloperX Portfolio",
    description: "Modern personal portfolio built with Next.js, Chakra UI, and Supabase",
    creator: "@developerx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
