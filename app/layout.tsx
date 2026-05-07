import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700", "800", "900"],
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
  description: "Expert data recovery services in Bangalore. Recover data from hard disk, SSD, RAID, laptop and more. 20+ years experience. Call +91 9880872536.",
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
        className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
