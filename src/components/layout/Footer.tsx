import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { LogoIcon, LogoText } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon size={36} />
              <LogoText variant="light" />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Ihr zuverlässiger Notdienst-Vermittler in Wien und Umgebung. Wir sind 24 Stunden am Tag, 7 Tage die Woche für Sie im Einsatz. Schnelle Hilfe bei Rohrbrüchen, Stromausfällen und mehr.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Schnelllinks</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Startseite</Link></li>
              <li><Link href="/leistungen" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Unsere Leistungen</Link></li>
              <li><Link href="/privatkunden" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Für Privatkunden</Link></li>
              <li><Link href="/hausverwaltungen" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Für Hausverwaltungen</Link></li>
              <li><Link href="/ueber-uns" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Über uns</Link></li>
              <li><Link href="/impressum" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">24/7 Notruf:</span>
                  <a href="tel:06766166646" className="text-primary-foreground/80 hover:text-white font-bold transition-colors">0676 61 666 46</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">WhatsApp Notfall:</span>
                  <a href="https://wa.me/436766166646" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white font-bold transition-colors">+43 676 61 666 46</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/50 shrink-0 mt-0.5" />
                <a href="mailto:office@notprofi24.at" className="text-primary-foreground/70 hover:text-white text-sm transition-colors">office@notprofi24.at</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/50 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">Heiligenstädter Straße 152<br />1190 Wien</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Unsere Notdienste</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">Installateur Notdienst</li>
              <li className="text-primary-foreground/70 text-sm">Elektriker Notdienst</li>
              <li className="text-primary-foreground/70 text-sm">Dachdecker Notdienst</li>
              <li className="text-primary-foreground/70 text-sm">Schlosser Notdienst</li>
              <li className="text-primary-foreground/70 text-sm">Glaser Notdienst</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Notprofi24. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-primary-foreground/70 hover:text-white text-sm underline underline-offset-4 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-primary-foreground/70 hover:text-white text-sm underline underline-offset-4 transition-colors">Datenschutz</Link>
            <Link href="/kontakt" className="text-primary-foreground/70 hover:text-white text-sm underline underline-offset-4 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
