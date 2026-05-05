import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Next.js Dashboard",
  description: "A modern Next.js app with DnD, SWR, and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans"
        suppressHydrationWarning
      >
        <NextTopLoader color="#3b82f6" showSpinner={false} />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
