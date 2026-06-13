import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pharmacy.jpg";

export function HeroSection() {
  return (
    <section className="container-shell pt-6 pb-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[650px]">
        <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-brand font-semibold text-[14px] tracking-wide uppercase mb-4">
            New for members
          </p>
          <h1 className="text-[38px] lg:text-[56px] font-bold leading-[1.05] tracking-tight text-ink">
            Healthcare, pharmacy &amp;
            <br className="hidden lg:block" /> everyday essentials
            <br className="hidden lg:block" /> all in one place.
          </h1>
          <p className="mt-6 text-[18px] lg:text-[20px] text-ink-soft max-w-xl leading-relaxed">
            Refill prescriptions in seconds, book a same-day vaccine, and shop thousands of
            wellness essentials with free pickup in as little as 30 minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="h-[52px] px-7 rounded-full bg-brand text-white font-semibold text-[15px] inline-flex items-center gap-2 transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02] shadow-sm">
              Refill a prescription
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="h-[52px] px-7 rounded-full bg-white border border-ink text-ink font-semibold text-[15px] transition-all duration-200 hover:bg-surface hover:scale-[1.02]">
              Schedule a vaccine
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-ink-soft">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Free same-day pickup</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" />24/7 pharmacist chat</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" />FSA &amp; HSA accepted</span>
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-in fade-in duration-500">
          <div className="relative overflow-hidden rounded-3xl aspect-[5/4] lg:aspect-[6/5] bg-surface">
            <img
              src={heroImg}
              alt="Family shopping at Wellgrove pharmacy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={1024}
            />
            <div className="absolute left-5 bottom-5 bg-white rounded-2xl shadow-lg px-5 py-4 max-w-[260px]">
              <p className="text-[11px] font-semibold text-brand uppercase tracking-wide">Members save</p>
              <p className="mt-1 text-[18px] font-bold text-ink leading-tight">Up to 30% off vitamins &amp; supplements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
