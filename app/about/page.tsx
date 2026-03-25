import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About North Side Security — Perth's Trusted Installer",
  description: "Locally owned Perth security company. WA Police Licensed, fully insured. Clean installs, fair pricing, ongoing local support.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[4px] text-cta">About Us</span>
      <h1 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">About North Side Security</h1>
      <p className="mb-12 text-lg text-slate-400">{BUSINESS.tagline}</p>

      <div className="space-y-12">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Who We Are</h2>
          <p className="text-slate-400">North Side Security is a locally owned Perth security company specialising in residential and light commercial security installations across Perth&apos;s northern suburbs. We&apos;re not a franchise or a call centre — we&apos;re local technicians who install, configure, and support every system ourselves.</p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Our Approach</h2>
          <p className="text-slate-400">We believe in recommending the minimum system required to achieve real protection — nothing more, nothing less. Too many security companies rush installs, use cheap hardware, and disappear when you need support. We do the opposite: clean installs, quality equipment, and ongoing local support from the technician who knows your system.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-xl border border-border bg-navy-900/50 p-6">
            <Shield className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold text-white">WA Police Licensed</h3>
              <p className="mt-1 text-sm text-slate-400">Security Agent Licence issued by WA Police. We operate legally and professionally under the Security and Related Activities (Control) Act.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border border-border bg-navy-900/50 p-6">
            <ShieldCheck className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold text-white">Fully Insured</h3>
              <p className="mt-1 text-sm text-slate-400">Public liability insurance covers every installation. Your property and our workmanship are protected.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 rounded-xl border border-border bg-navy-900/50 p-6">
          <MapPin className="h-8 w-8 shrink-0 text-cta" />
          <div>
            <h3 className="font-bold text-white">Service Area</h3>
            <p className="mt-1 text-slate-400">We cover Perth&apos;s northern suburbs — Joondalup, Wanneroo, and surrounding areas north of the Swan River. If you&apos;re in the northern corridor, we&apos;re your local team.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block rounded-md bg-cta px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400">Book Your Free Site Check →</Link>
        </div>
      </div>
    </div>
  );
}
