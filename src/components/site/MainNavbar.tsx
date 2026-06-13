import { useState } from "react";
import { Menu, X, User, Pill, ShoppingCart } from "lucide-react";
import { SearchBar } from "./SearchBar";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 shrink-0" aria-label="Wellgrove Pharmacy">
      <span className="grid place-items-center h-9 w-9 rounded-full bg-brand text-white font-bold text-lg">W</span>
      <span className="text-[22px] font-bold tracking-tight text-ink leading-none">
        wellgrove<span className="text-brand">.</span>
      </span>
    </a>
  );
}

const navLink = "inline-flex flex-col items-center gap-0.5 text-[12px] font-medium text-ink hover:text-brand transition-colors";

export function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-shell h-[72px] flex items-center gap-6">
        <Logo />

        <div className="hidden md:flex flex-1 max-w-[760px] mx-auto">
          <SearchBar />
        </div>

        <nav className="hidden md:flex items-center gap-7 ml-auto">
          <a href="#" className={navLink}><User className="h-5 w-5" />Account</a>
          <a href="#" className={navLink}><Pill className="h-5 w-5" />Prescriptions</a>
          <a href="#" className={navLink + " relative"}>
            <span className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-1.5 grid place-items-center h-4 min-w-4 px-1 rounded-full bg-brand text-white text-[10px] font-semibold">2</span>
            </span>
            Cart
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto grid place-items-center h-10 w-10 rounded-full hover:bg-surface"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="md:hidden container-shell pb-3">
        <SearchBar />
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3 animate-in fade-in">
          <a href="#" className="block text-sm font-medium">Account</a>
          <a href="#" className="block text-sm font-medium">Prescriptions</a>
          <a href="#" className="block text-sm font-medium">Cart</a>
          <a href="#" className="block text-sm font-medium">Find a store</a>
          <a href="#" className="block text-sm font-medium">Weekly Ad</a>
        </div>
      )}
    </header>
  );
}
