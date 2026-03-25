import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MobileCTABar } from "@/components/mobile-cta-bar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "North Side Security — Perth CCTV & Alarm Installation",
  description:
    "Licensed CCTV, alarm & network installation for Perth's northern suburbs. Professional installs, no subscriptions. Book a free site check.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-navy-950 font-sans text-slate-300 antialiased">
        <Nav />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
        <Analytics />
      </body>
    </html>
  );
}
