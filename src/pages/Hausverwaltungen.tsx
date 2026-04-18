import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, Building2, ClipboardCheck, Users, HeadphonesIcon, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hausverwaltungen() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/apartment-building.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-2xl mb-8">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Der zuverlässige Partner für Hausverwaltungen.
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-foreground/80 mb-10 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Lagern Sie das Notdienst-Management aus. Wir koordinieren Einsätze schnell, professionell und transparent. Ein Ansprechpartner für alle Gewerke.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full h-14 px-8" asChild>
                <a href="tel:06766166646">
                  <Phone className="mr-2 h-5 w-5" />
                  Kooperation besprechen
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -translate-x-6 translate-y-6 -z-10" />
              <img 
                src="/images/apartment-building.jpg" 
                alt="Modernes Wohnhaus in Wien" 
                className="rounded-3xl shadow-xl object-cover w-full h-[600px]"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Entlasten Sie Ihr Team im Notfall.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Als Hausverwaltung kennen Sie das Problem: Außerhalb der Bürozeiten, an Wochenenden oder Feiertagen melden Mieter dringende Gebrechen. Ihr Team muss Notdienste abtelefonieren, Verfügbarkeiten prüfen und den Einsatz koordinieren.
                </p>
                <p>
                  <strong>Notprofi24 übernimmt diese Aufgabe komplett für Sie.</strong>
                </p>
                <p>
                  Sie oder Ihre Mieter rufen direkt unsere Hotline an. Wir erfassen den Schaden, vermitteln umgehend den passenden, geprüften Fachbetrieb aus unserem Netzwerk und stellen sicher, dass der Schaden schnellstmöglich behoben wird.
                </p>
              </div>
            </div>
          </div>

          {/* Advantages Grid */}
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Ihre Vorteile auf einen Blick</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-3xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HeadphonesIcon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">Ein zentraler Kontakt</h4>
              <p className="text-muted-foreground leading-relaxed">Egal ob Installateur, Elektriker oder Schlosser benötigt wird – Sie haben nur eine Nummer, die Sie wählen müssen. Wir organisieren das entsprechende Gewerk.</p>
            </div>
            
            <div className="bg-muted p-8 rounded-3xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">Geprüftes Netzwerk</h4>
              <p className="text-muted-foreground leading-relaxed">Wir arbeiten ausschließlich mit zertifizierten, seriösen Meisterbetrieben zusammen. Keine schwarzen Schafe, keine überzogenen Preise, hohe Fachkompetenz.</p>
            </div>
            
            <div className="bg-muted p-8 rounded-3xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ClipboardCheck className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">Saubere Dokumentation</h4>
              <p className="text-muted-foreground leading-relaxed">Sie erhalten nach jedem Einsatz eine transparente Rückmeldung und saubere Dokumentation für Ihre Unterlagen und die Abrechnung mit Eigentümern.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Building className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interesse an einer Partnerschaft?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 font-light">
            Lassen Sie uns darüber sprechen, wie wir Ihre Verwaltung entlasten und Ihren Mietern ein Höchstmaß an Sicherheit bieten können.
          </p>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 h-14 px-8 text-lg" asChild>
            <Link href="/kontakt">
              Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
