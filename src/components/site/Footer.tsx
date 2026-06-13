import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const columns = [
  { title: "Pharmacy", links: ["Refill prescriptions", "Transfer a prescription", "Auto refills", "Pharmacy chat", "Save on medications"] },
  { title: "Health Services", links: ["Schedule a vaccine", "COVID-19 testing", "Travel clinic", "Healthcare clinic", "Lab testing"] },
  { title: "Customer Service", links: ["Help center", "Contact us", "Store locator", "Shipping & delivery", "Returns"] },
  { title: "Company", links: ["About Wellgrove", "Careers", "Newsroom", "Investors", "Sustainability"] },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-shell py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-[14px] font-bold text-ink mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-ink-soft hover:text-ink hover:underline underline-offset-2">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-8 w-8 rounded-full bg-brand text-white font-bold">W</span>
            <span className="text-[15px] font-bold tracking-tight text-ink">
              wellgrove<span className="text-brand">.</span>
            </span>
            <span className="text-[12px] text-ink-soft ml-3">© {new Date().getFullYear()} Wellgrove Pharmacy. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-ink-soft">
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-brand"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
