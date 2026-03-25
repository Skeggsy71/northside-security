import { TRUST_BADGES } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-navy-900/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-3 md:gap-8">
        {TRUST_BADGES.map((badge) => (
          <div key={badge.title} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
              <badge.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{badge.title}</p>
              <p className="text-xs text-slate-500">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
