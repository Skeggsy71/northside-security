import type { Metadata } from "next";
import { SERVICE_DETAILS } from "@/lib/constants";
import { ServiceDetailSection } from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Security Services — North Side Security Perth",
  description: "CCTV systems, alarm systems, intercoms & network installation. WA Police Licensed, fully insured. Serving Joondalup, Wanneroo & surrounds.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[4px] text-cta">Our Services</span>
      <h1 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">What We Install</h1>
      <p className="mb-12 max-w-2xl text-slate-400">
        Professional security and network installations for homes and businesses
        across Perth&apos;s northern suburbs. Every system is built to last, supported locally,
        and backed by our WA Police Licence.
      </p>
      {SERVICE_DETAILS.map((service) => (
        <ServiceDetailSection key={service.id} service={service} />
      ))}
    </div>
  );
}
