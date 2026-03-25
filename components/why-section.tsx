import { WHY_ITEMS } from "@/lib/constants";

export function WhySection() {
  return (
    <section className="bg-navy-900/30 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-xs font-bold uppercase tracking-[4px] text-cta">Why North Side?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
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
