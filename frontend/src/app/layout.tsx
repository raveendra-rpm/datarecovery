import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Providers from "@/components/Providers";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import { SITE_URL } from "@/lib/seo";

// Drop weight 400 — Montserrat is only used for headings; body text uses Open Sans
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  weight: ["600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Best Data Recovery Services in Bangalore | Data Storage Solutions",
  description: "Expert data recovery services in Bangalore. Recover data from hard disk, SSD, RAID, laptop and more. 22+ years experience. Call +91 9880872536.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Data Storage Solutions - Expert Data Recovery",
    description: "Expert data recovery services in Bangalore. Recover data from hard disk, SSD, RAID, laptop and more. 22+ years experience.",
    url: "/",
    siteName: "Data Storage Solutions",
    images: [
      {
        url: "/images/data_recovery_logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blogs/feed.xml",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Data Recovery Services in Bangalore",
    description: "Expert data recovery services with a Class 100 Clean Room.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${montserrat.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans overflow-x-hidden"
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
