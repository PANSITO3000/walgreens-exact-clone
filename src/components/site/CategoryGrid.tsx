import { Pill, Camera, Syringe, Sparkles, HeartPulse, Leaf } from "lucide-react";

const items = [
  { icon: Pill, title: "Pharmacy", desc: "Refills & transfers" },
  { icon: Camera, title: "Photo", desc: "Prints in 1 hour" },
  { icon: Syringe, title: "Vaccines", desc: "Same-day booking" },
  { icon: Sparkles, title: "Beauty", desc: "Top brands daily" },
  { icon: HeartPulse, title: "Health", desc: "OTC essentials" },
  { icon: Leaf, title: "Wellness", desc: "Vitamins & more" },
];

export function CategoryGrid() {
  return (
    <section className="container-shell pb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <a
            key={title}
            href="#"
            className="group rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-ink/20"
          >
            <div className="h-11 w-11 rounded-full bg-brand/10 text-brand grid place-items-center mb-4 transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-[13px] text-ink-soft">{desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
