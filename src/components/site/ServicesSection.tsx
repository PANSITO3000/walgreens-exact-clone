import { ArrowRight } from "lucide-react";
import rx from "@/assets/service-rx.jpg";
import vaccine from "@/assets/service-vaccine.jpg";
import pickup from "@/assets/service-pickup.jpg";

const services = [
  { img: rx, eyebrow: "Pharmacy", title: "Prescription refills in 60 seconds", desc: "Refill, transfer, or set up auto-refill from your phone. Most ready for pickup the same day.", cta: "Refill now" },
  { img: vaccine, eyebrow: "Health", title: "Schedule a vaccine today", desc: "Flu, COVID-19, shingles and more — book free same-day appointments at your nearest store.", cta: "Find appointments" },
  { img: pickup, eyebrow: "Convenience", title: "Free same-day pickup", desc: "Order online and pick up in as little as 30 minutes. Curbside and drive-thru available.", cta: "Shop now" },
];

export function ServicesSection() {
  return (
    <section className="container-shell py-16">
      <div className="max-w-2xl mb-10">
        <p className="text-brand font-semibold text-[13px] uppercase tracking-wide">Services</p>
        <h2 className="mt-1 text-[28px] lg:text-[34px] font-bold tracking-tight text-ink">
          More ways to take care of you
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article
            key={s.title}
            className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden bg-surface">
              <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-brand">{s.eyebrow}</p>
              <h3 className="mt-2 text-[22px] font-bold leading-tight text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed flex-1">{s.desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink group">
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
