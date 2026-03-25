import Link from "next/link";
import Image from "next/image";
import type { ServiceDetail as ServiceDetailType } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const SERVICE_ICONS: Record<string, string> = {
  cctv: "/icons/security_systems.png",
  alarms: "/icons/alarm_monitoring.png",
};

export function ServiceDetailSection({ service }: { service: ServiceDetailType }) {
  const iconSrc = SERVICE_ICONS[service.id];
  return (
    <section id={service.id} className="scroll-mt-20 border-b border-border py-16 last:border-b-0">
      <div className="flex items-center gap-3 mb-4">
        {iconSrc ? (
          <Image src={iconSrc} alt={service.title} width={40} height={40} className="shrink-0" />
        ) : (
          <service.icon className="h-6 w-6 text-accent" />
        )}
        <h2 className="text-2xl font-black uppercase text-white">{service.title}</h2>
        {service.comingSoon && (
          <span className="rounded bg-cta/10 px-2 py-0.5 text-xs font-bold uppercase text-cta">Coming Soon</span>
        )}
      </div>
      <p className="mb-6 max-w-2xl text-slate-400">{service.description}</p>
      {service.features.length > 0 && (
        <ul className="mb-8 grid gap-2 md:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-trust" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={service.comingSoon ? `/contact?interest=${service.id}` : "/contact"}
        className="inline-block rounded-md bg-cta px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
      >
        {service.ctaText || "Book Free Site Check"} →
      </Link>
    </section>
  );
}
