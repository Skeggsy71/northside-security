import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { PACKAGES, INCLUSIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CCTV Packages & Pricing — North Side Security",
  description: "CCTV camera packages from $1,490 installed. 6MP HD cameras, NVR, remote viewing included. Compare 2, 4, 6 & 8 camera systems.",
};

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[4px] text-cta">Packages & Pricing</span>
      <h1 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">CCTV Camera Packages</h1>
      <p className="mb-12 max-w-2xl text-slate-400">Essential tier — professional installation, configuration, and training included in every package. All prices are starting-from and include GST.</p>

      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:border-cta hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:scale-[1.02] ${pkg.popular ? "border-cta bg-cta/5 shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "border-border bg-navy-900/50"}`}>
            {pkg.popular && <span className="absolute -top-3 left-4 rounded-full bg-cta px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-950">Most Popular</span>}
            <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
            <p className="my-2 text-3xl font-black text-white">From {pkg.price}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>{pkg.cameras}</p>
              <p>{pkg.nvr} NVR</p>
              <p>{pkg.storage} storage</p>
            </div>
            <Link href="/contact" className="mt-auto block rounded-md bg-cta py-3 text-center text-sm font-bold uppercase text-navy-950 transition-colors hover:bg-amber-400 pt-6">Get a Quote</Link>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-bold text-white">What&apos;s Included in Every Package</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {INCLUSIONS.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-4 w-4 shrink-0 text-trust" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-navy-900/30 p-6">
          <span className="mb-2 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-bold uppercase text-accent">Coming Soon</span>
          <h3 className="mb-2 text-lg font-bold text-white">Premium CCTV Packages</h3>
          <p className="text-sm text-slate-400">Higher resolution cameras, ColorVu night vision, and expanded NVR capacity for larger properties.</p>
        </div>
        <div className="rounded-xl border border-border bg-navy-900/30 p-6">
          <span className="mb-2 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-bold uppercase text-accent">Coming Soon</span>
          <h3 className="mb-2 text-lg font-bold text-white">Secure+ CCTV Packages</h3>
          <p className="text-sm text-slate-400">NDAA-compliant cameras for government and enterprise sites requiring strict security standards.</p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-navy-900/50 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold text-white">Not Sure Which Package?</h2>
        <p className="mb-6 text-slate-400">Book a free site check and we&apos;ll recommend the right system for your property.</p>
        <Link href="/contact" className="inline-block rounded-md bg-cta px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400">Book Free Site Check →</Link>
      </div>
    </div>
  );
}
