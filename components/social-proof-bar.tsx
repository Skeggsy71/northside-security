import Image from "next/image";
import { TRUST_BADGES } from "@/lib/constants";

const BADGE_ICONS: Record<string, string> = {
  "WA Police Licensed": "/icons/wa_police_licensed.png",
  "Fully Insured": "/icons/fully_insured.png",
  "No Lock-in": "/icons/no_lockin.png",
};

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-navy-900/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-3 md:gap-8">
        {TRUST_BADGES.map((badge) => (
          <div key={badge.title} className="flex items-center gap-3">
            <Image
              src={BADGE_ICONS[badge.title]}
              alt={badge.title}
              width={48}
              height={48}
              className="shrink-0"
            />
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
