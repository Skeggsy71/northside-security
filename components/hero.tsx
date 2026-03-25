import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 to-navy-900">
      <div className="grid-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[4px] text-cta">
          Perth&apos;s Northern Suburbs
        </span>
        <h1 className="mb-4 text-5xl font-black uppercase leading-none text-white md:text-7xl">
          Protection That Works.{" "}
          <span className="text-cta">Always.</span>
        </h1>
        <p className="mb-8 max-w-lg text-lg text-slate-400">
          Licensed CCTV &amp; alarm installations designed to deter intruders —
          not just record them. From $1,490 installed.
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
