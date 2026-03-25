import type { Metadata } from "next";
import { Suspense } from "react";
import { BUSINESS } from "@/lib/constants";
import { SiteCheckForm } from "@/components/site-check-form";

export const metadata: Metadata = {
  title: "Book a Free Site Check — North Side Security",
  description: "Book your free security site check. We'll visit your property and recommend the right CCTV or alarm system. Call 0437 745 101.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[4px] text-cta">Contact Us</span>
      <h1 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">Book Your Free Security Site Check</h1>
      <p className="mb-12 max-w-2xl text-slate-400">Tell us your name, number, and suburb. We&apos;ll call within 24 hours to arrange a free, no-obligation visit to your property.</p>

      <div className="grid gap-12 md:grid-cols-2">
        <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-navy-900/50" />}>
          <SiteCheckForm />
        </Suspense>

        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">Prefer to Call?</h2>
            <a href={BUSINESS.phoneHref} className="text-3xl font-black text-white hover:text-accent">{BUSINESS.phone}</a>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">Email</h2>
            <a href={`mailto:${BUSINESS.email}`} className="text-accent hover:text-blue-400">{BUSINESS.email}</a>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">Hours</h2>
            <p className="text-slate-300">{BUSINESS.hours}</p>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">Service Area</h2>
            <p className="text-slate-400">{BUSINESS.area}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
