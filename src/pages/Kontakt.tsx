import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, AlertCircle } from "lucide-react";

export default function Kontakt() {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Kontakt
          </motion.h1>
          <motion.p className="text-xl text-primary-foreground/80 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Wir sind rund um die Uhr für Sie da. Wählen Sie den schnellsten Weg für Ihr Anliegen.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-2xl mb-12 max-w-4xl mx-auto flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-secondary shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Haben Sie einen akuten Notfall?</h3>
              <p className="text-muted-foreground">
                Bei akuten Notfällen bitte <strong>sofort anrufen oder WhatsApp nutzen</strong>. Schicken Sie uns gerne auch Fotos des Schadens direkt per WhatsApp – das beschleunigt die Hilfe erheblich.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6"><Phone className="w-10 h-10" /></div>
              <h2 className="text-2xl font-bold text-primary mb-2">24/7 Notruf-Hotline</h2>
              <p className="text-muted-foreground mb-8">Der schnellste Weg zur Hilfe. Ein Disponent nimmt Ihren Anruf sofort entgegen.</p>
              <a href="tel:06766166646" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold text-2xl py-4 px-8 rounded-full w-full transition-colors">0676 61 666 46</a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-6"><MessageCircle className="w-10 h-10" /></div>
              <h2 className="text-2xl font-bold text-primary mb-2">WhatsApp Notfall</h2>
              <p className="text-muted-foreground mb-8">Senden Sie uns schnell und unkompliziert Details oder Fotos Ihres Schadens.</p>
              <a href="https://wa.me/436766166646" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xl py-4 px-8 rounded-full w-full transition-colors">Chat öffnen</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
              <iframe title="Notprofi24 Standort Wien" src="https://www.openstreetmap.org/export/embed.html?bbox=16.34,48.24,16.40,48.28&layer=mapnik&marker=48.259,16.368" className="w-full h-64 border-0" loading="lazy" />
              <div className="p-6 flex items-start gap-4">
                <div className="bg-muted p-3 rounded-xl shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Unternehmenssitz</h3>
                  <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                    Heiligenstädter Straße 152<br />1190 Wien, Österreich<br />
                    <span className="text-xs mt-1 block">(Kein Kundenempfang vor Ort)</span>
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex items-start gap-4 h-fit">
              <div className="bg-muted p-3 rounded-xl shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold text-primary mb-1">Allgemeine Anfragen</h3>
                <p className="text-sm text-muted-foreground mb-2">Für Verwaltungsfragen (keine Notfälle!)</p>
                <a href="mailto:office@notprofi24.at" className="text-primary font-medium hover:underline">office@notprofi24.at</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
