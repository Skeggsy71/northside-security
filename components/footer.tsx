import Link from "next/link";
import { Shield } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-wide text-white">
                NORTH SIDE SECURITY
              </span>
            </div>
            <p className="text-sm text-slate-400">{BUSINESS.tagline}</p>
            <p className="mt-2 text-xs text-slate-500">WA Police Licensed · Fully Insured</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</h3>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white">{link.label}</Link>
              ))}
              <Link href="/contact" className="text-sm text-cta hover:text-amber-400">Free Site Check</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href={BUSINESS.phoneHref} className="hover:text-white">{BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
              <p>{BUSINESS.hours}</p>
              <p className="text-xs text-slate-500">{BUSINESS.area}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-white">Facebook</a>
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} North Side Services Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
