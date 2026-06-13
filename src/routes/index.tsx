import { createFileRoute } from "@tanstack/react-router";
import { UtilityBar } from "@/components/site/UtilityBar";
import { MainNavbar } from "@/components/site/MainNavbar";
import { HeroSection } from "@/components/site/HeroSection";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { DealsGrid } from "@/components/site/DealsGrid";
import { ServicesSection } from "@/components/site/ServicesSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wellgrove Pharmacy — Healthcare, pharmacy & everyday essentials" },
      { name: "description", content: "Refill prescriptions, book vaccines, and shop wellness essentials with free same-day pickup at Wellgrove Pharmacy." },
      { property: "og:title", content: "Wellgrove Pharmacy" },
      { property: "og:description", content: "Healthcare, pharmacy & everyday essentials all in one place." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <UtilityBar />
      <MainNavbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <DealsGrid />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
