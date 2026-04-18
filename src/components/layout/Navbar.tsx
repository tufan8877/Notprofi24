import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { LogoIcon, LogoText } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/privatkunden", label: "Privatkunden" },
  { href: "/hausverwaltungen", label: "Hausverwaltungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-primary border-transparent py-4 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <LogoIcon variant={isScrolled ? "dark" : "light"} size={36} />
            <LogoText variant={isScrolled ? "dark" : "light"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-secondary ${
                        isActive
                          ? "text-secondary font-semibold"
                          : isScrolled ? "text-foreground/80" : "text-white/90"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l pl-6 border-white/20">
              <div className="flex flex-col items-end">
                <span className={`text-xs font-semibold uppercase tracking-wider ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                  24/7 Notruf
                </span>
                <a 
                  href="tel:06766166646" 
                  className={`text-lg font-bold flex items-center gap-2 hover:text-secondary transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
                >
                  <Phone className="w-4 h-4" />
                  0676 61 666 46
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <a 
              href="tel:06766166646" 
              className={`p-2 rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
          <nav className="flex flex-col p-4">
            <ul className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-2 text-lg font-medium border-b border-border/50 ${
                        isActive ? "text-primary font-bold" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Jetzt anrufen
              </span>
              <a 
                href="tel:06766166646" 
                className="text-2xl font-bold text-primary flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                0676 61 666 46
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
