import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechPremi - Free Web Tools & Applications | Rent Agreement Generator, Dice Roller, AI Assistant",
  description: "Discover amazing free web tools at TechPremi. Generate rent agreements, roll digital dice, get AI audits, and more. No registration required, 100% free and secure.",
  keywords: "free web tools, rent agreement generator, digital dice roller, AI audit assistant, online tools, free applications, legal documents, web utilities",
  authors: [{ name: "TechPremi" }],
  creator: "TechPremi",
  publisher: "TechPremi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techpremi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TechPremi - Free Web Tools & Applications",
    description: "Discover amazing free web tools at TechPremi. Generate rent agreements, roll digital dice, get AI audits, and more.",
    url: 'https://techpremi.com',
    siteName: 'TechPremi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechPremi - Free Web Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechPremi - Free Web Tools & Applications",
    description: "Discover amazing free web tools at TechPremi. Generate rent agreements, roll digital dice, get AI audits, and more.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
