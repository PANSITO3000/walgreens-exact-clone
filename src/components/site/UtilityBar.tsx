import { MapPin, Newspaper, Star, User, ListChecks, Pill, ShoppingCart } from "lucide-react";

const linkClass =
  "inline-flex items-center gap-1.5 text-[13px] font-medium text-ink hover:underline underline-offset-2";

export function UtilityBar() {
  return (
    <div className="hidden md:block bg-surface border-b border-border">
      <div className="container-shell h-10 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <a href="#" className={linkClass}><MapPin className="h-3.5 w-3.5 text-brand" />Find a store</a>
          <a href="#" className={linkClass}><Newspaper className="h-3.5 w-3.5 text-brand" />Weekly Ad</a>
          <a href="#" className={linkClass}><Star className="h-3.5 w-3.5 text-brand" />myRewards</a>
        </nav>
        <nav className="flex items-center gap-6">
          <a href="#" className={linkClass}><User className="h-3.5 w-3.5" />Account</a>
          <a href="#" className={linkClass}><ListChecks className="h-3.5 w-3.5" />Lists</a>
          <a href="#" className={linkClass}><Pill className="h-3.5 w-3.5" />Pharmacy</a>
          <a href="#" className={linkClass}><ShoppingCart className="h-3.5 w-3.5" />Cart</a>
        </nav>
      </div>
    </div>
  );
}
