import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Home, Wrench, UserRound, Building2, Info, Mail, ChevronRight } from "lucide-react";
import { LogoIcon, LogoText } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Startseite", icon: Home },
  { href: "/leistungen", label: "Leistungen", icon: Wrench },
  { href: "/privatkunden", label: "Privatkunden", icon: UserRound },
  { href: "/hausverwaltungen", label: "Hausverwaltungen", icon: Building2 },
  { href: "/ueber-uns", label: "Über uns", icon: Info },
  { href: "/kontakt", label: "Kontakt", icon: Mail },
];

export function Navbar() {
  const [location, navigate] = useLocation();
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = window.scrollY > 20;
        setIsScrolled(prev => prev === next ? prev : next);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow,padding] duration-200 ${isScrolled ? "bg-white border-border shadow-sm py-3" : "bg-primary border-transparent py-4 text-white"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(event) => { event.preventDefault(); setIsMobileMenuOpen(false); if (location === "/") { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); } else { navigate("/"); window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), 0); } }} className="flex items-center gap-3 group">
            <LogoIcon variant={isScrolled ? "dark" : "light"} size={36} />
            <LogoText variant={isScrolled ? "dark" : "light"} />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return <li key={link.href}><Link href={link.href} className={`text-sm font-medium transition-colors hover:text-secondary ${isActive ? "text-secondary font-semibold" : isScrolled ? "text-foreground/80" : "text-white/90"}`}>{link.label}</Link></li>;
              })}
            </ul>
            <div className={`flex items-center gap-4 border-l pl-6 ${isScrolled ? "border-border" : "border-white/20"}`}>
              <div className="flex flex-col items-end">
                <span className={`text-xs font-semibold uppercase tracking-wider ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>24/7 Notruf</span>
                <a href="tel:06766166646" className={`text-lg font-bold flex items-center gap-2 hover:text-secondary transition-colors ${isScrolled ? "text-primary" : "text-white"}`}><Phone className="w-4 h-4" />0676 61 666 46</a>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <a href="tel:06766166646" className={`p-2 rounded-full ${isScrolled ? "bg-primary text-white" : "bg-white text-primary"}`}><Phone className="w-5 h-5" /></a>
            <button onClick={() => setIsMobileMenuOpen(v => !v)} className={`p-2 focus:outline-none ${isScrolled ? "text-primary" : "text-white"}`} aria-label="Menü öffnen oder schließen">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
          <nav className="p-4 sm:p-5">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors ${isActive ? "bg-primary/5 text-primary" : "text-foreground hover:bg-muted/70"}`}
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-secondary text-primary" : "bg-muted text-primary"}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`flex-1 text-base font-semibold ${isActive ? "text-primary" : ""}`}>{link.label}</span>
                      <ChevronRight className={`h-5 w-5 transition-transform group-hover:translate-x-0.5 ${isActive ? "text-secondary" : "text-muted-foreground/60"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
