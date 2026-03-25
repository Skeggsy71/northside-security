import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

const SERVICE_ICONS: Record<string, string> = {
  cctv: "/icons/security_systems.png",
  alarms: "/icons/alarm_monitoring.png",
  network: "/icons/network_wifi.png",
  intercoms: "/icons/intercoms.png",
};

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-xs font-bold uppercase tracking-[4px] text-cta">Our Services</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => {
          const iconSrc = SERVICE_ICONS[service.id];
          return (
            <Link
              key={service.id}
              href={service.comingSoon ? "#" : `/services#${service.id}`}
              className="group flex items-center gap-4 rounded-lg border-l-2 border-accent bg-navy-900/50 p-5 transition-colors hover:bg-navy-900"
            >
              {iconSrc ? (
                <Image
                  src={iconSrc}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="shrink-0"
                />
              ) : (
                <service.icon className="h-6 w-6 shrink-0 text-accent" />
              )}
              <div>
                <p className="font-bold text-white group-hover:text-accent">
                  {service.title}
                  {service.comingSoon && (
                    <span className="ml-2 rounded bg-navy-900 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-500">Coming Soon</span>
                  )}
                </p>
                <p className="text-sm text-slate-400">{service.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
