import Image from "next/image";
import { WHY_ITEMS } from "@/lib/constants";

const WHY_ICONS: Record<string, string> = {
  "Clean, Professional Installs": "/icons/clean_install.png",
  "No Ongoing Subscriptions": "/icons/no_subscriptions.png",
  "Your Technician, Your Support": "/icons/local_technician.png",
  "Fair, Transparent Pricing": "/icons/fair_pricing.png",
};

export function WhySection() {
  return (
    <section className="bg-navy-900/30 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-xs font-bold uppercase tracking-[4px] text-cta">Why North Side?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <Image
                src={WHY_ICONS[item.title]}
                alt={item.title}
                width={48}
                height={48}
                className="shrink-0"
              />
              <div>
                <h3 className="mb-1 font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
