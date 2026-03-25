import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-black uppercase text-white">Ready to Secure Your Property?</h2>
        <p className="mb-8 text-slate-400">
          Book a free, no-obligation security site check. We&apos;ll visit your property,
          assess your needs, and recommend the right system — no pressure, no upselling.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-cta px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
        >
          Book Your Free Site Check →
        </Link>
      </div>
    </section>
  );
}
