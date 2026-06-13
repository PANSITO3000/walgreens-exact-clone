import vitamins from "@/assets/deal-vitamins.jpg";
import beauty from "@/assets/deal-beauty.jpg";
import household from "@/assets/deal-household.jpg";
import snacks from "@/assets/deal-snacks.jpg";

const deals = [
  { img: vitamins, badge: "30% off", title: "Wellgrove Multivitamin Gummies", price: "$12.99", was: "$18.49" },
  { img: beauty,   badge: "Buy 1 Get 1", title: "Glow+ Skincare Essentials", price: "$24.99", was: "$34.99" },
  { img: household,badge: "Save $3", title: "Ultra Soft Bath Tissue 12pk", price: "$9.49", was: "$12.49" },
  { img: snacks,   badge: "2 for $5", title: "Hydrate & Snack Bundle", price: "$2.79", was: "$3.99" },
];

export function DealsGrid() {
  return (
    <section className="bg-[oklch(0.985_0_0)] border-y border-border">
      <div className="container-shell py-14">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-brand font-semibold text-[13px] uppercase tracking-wide">This week only</p>
            <h2 className="mt-1 text-[28px] lg:text-[34px] font-bold tracking-tight text-ink">
              Weekly deals you'll love
            </h2>
          </div>
          <a href="#" className="hidden sm:inline text-[14px] font-semibold text-ink underline-offset-4 hover:underline">
            See all deals →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map((d) => (
            <article
              key={d.title}
              className="group bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square bg-surface overflow-hidden">
                <img src={d.img} alt={d.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {d.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-semibold text-ink leading-snug min-h-[2.5em] line-clamp-2">{d.title}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[18px] font-bold text-ink">{d.price}</span>
                  <span className="text-[13px] text-ink-soft line-through">{d.was}</span>
                </div>
                <button className="mt-4 w-full h-10 rounded-full bg-ink text-white text-[13px] font-semibold transition hover:bg-brand">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
