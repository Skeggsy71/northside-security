import Link from "next/link";
import { PACKAGES } from "@/lib/constants";

export function PricingSnapshot() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-[4px] text-cta">CCTV Packages</h2>
      <p className="mb-8 text-slate-400">Essential tier — professional installation included.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className={`relative rounded-lg border p-5 transition-all duration-300 hover:border-cta hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:scale-[1.02] ${pkg.popular ? "border-cta bg-cta/5 shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "border-border bg-navy-900/50"}`}>
            {pkg.popular && <span className="absolute -top-2.5 left-3 rounded-full bg-cta px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-navy-950">Popular</span>}
            <p className="text-sm text-slate-400">{pkg.name}</p>
            <p className="my-1 text-2xl font-black text-white">{pkg.price}</p>
            <p className="text-xs text-slate-500">{pkg.cameras} · {pkg.nvr}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/packages" className="text-sm font-medium text-accent hover:text-blue-400">View all packages & inclusions →</Link>
      </div>
    </section>
  );
}
