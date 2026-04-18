import { motion } from "framer-motion";
import { Link } from "wouter";
import { BadgeCheck, Award, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UeberUns() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex justify-center mb-6"
          >
            <BadgeCheck className="w-20 h-20 text-secondary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Über Notprofi24
          </motion.h1>
          <motion.p 
            className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ihr ruhender Pol im Notfall. Wir bringen Ordnung ins Chaos und vermitteln kompetente Hilfe, wenn Sie sie am dringendsten brauchen.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Unsere Mission: Sicherheit und schnelle Hilfe in Wien.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Notprofi24 wurde aus einer einfachen Erkenntnis heraus gegründet: In einem Notfall – sei es ein Rohrbruch mitten in der Nacht oder eine zugefallene Tür – sind Menschen gestresst, überfordert und anfällig für unseriöse Anbieter.
                </p>
                <p>
                  Wir haben es uns zur Aufgabe gemacht, einen sicheren Hafen zu schaffen. Eine zentrale Nummer, die man mit ruhigem Gewissen wählen kann, weil man weiß: <strong>Hier wird mir ehrlich, schnell und kompetent geholfen.</strong>
                </p>
                <p>
                  Wir sind nicht selbst die Handwerker vor Ort. Wir sind die Vermittler, die Koordinatoren, die Dispatcher. Wir filtern den Markt und arbeiten exklusiv mit streng geprüften, regionalen Meisterbetrieben zusammen. So garantieren wir hohe Qualität und schützen unsere Kunden vor Wucherpreisen.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform translate-x-4 -translate-y-4 -z-10" />
              <img 
                src="/images/team-confidence.jpg" 
                alt="Vertrauensvolles Team" 
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Unsere Werte</h2>
            <p className="text-lg text-muted-foreground">
              Diese Prinzipien leiten unser tägliches Handeln und die Auswahl unserer Partnerbetriebe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Zuverlässigkeit</h3>
              <p className="text-muted-foreground">24/7 bedeutet bei uns wirklich 24/7. Wir sind immer erreichbar und sorgen dafür, dass Hilfe so schnell wie möglich eintrifft.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Qualität</h3>
              <p className="text-muted-foreground">Wir vermitteln nur qualifizierte Fachkräfte. Die Arbeit muss fachgerecht, sauber und nachhaltig ausgeführt werden.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparenz</h3>
              <p className="text-muted-foreground">Keine versteckten Kosten, klare Kommunikation. Wir und unsere Partner spielen mit offenen Karten, auch in Notsituationen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Sie möchten Teil unseres Netzwerks werden?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir suchen stets zuverlässige Fachbetriebe (Installateure, Elektriker, Schlosser, etc.) in Wien, die unseren hohen Qualitätsansprüchen genügen.
          </p>
          <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link href="/kontakt">Kontakt für Partnerbetriebe</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
