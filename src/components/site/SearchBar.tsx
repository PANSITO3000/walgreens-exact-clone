import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="relative w-full"
    >
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft" />
      <input
        type="search"
        placeholder="Search products, prescriptions and more"
        className="h-12 w-full rounded-full border border-border bg-white pl-12 pr-28 text-[15px] text-ink placeholder:text-ink-soft outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 rounded-full bg-brand px-5 text-[13px] font-semibold text-white transition hover:bg-brand-hover"
      >
        Search
      </button>
    </form>
  );
}
