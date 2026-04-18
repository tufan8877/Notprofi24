import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MessageCircle, Home, Clock, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privatkunden() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/family-home.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-2xl mb-8">
              <Home className="w-8 h-8 text-primary" />
            </div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Schnelle Hilfe für Ihr Zuhause.
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-foreground/80 mb-10 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Ein Notfall im eigenen Heim ist Stress pur. Wir nehmen Ihnen diesen Stress ab. Ein Anruf bei uns, und der passende Profi ist auf dem Weg.
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
                  Jetzt anrufen
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Keine endlose Suche nach Handwerkern mehr.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Mitten in der Nacht platzt ein Rohr. Der Strom fällt aus und die Gefriertruhe taut ab. Sie haben sich ausgesperrt. In solchen Momenten haben Sie keine Zeit, stundenlang das Internet nach verfügbaren Handwerkern zu durchsuchen und zig Nummern durchzuwählen, nur um die Mailbox zu erreichen.
                </p>
                <p>
                  <strong className="text-foreground">Genau hier setzen wir an.</strong> Notprofi24 ist Ihr zentraler Ansprechpartner für alle Notfälle rund ums Haus in Wien und Umgebung.
                </p>
                <p>
                  Wir haben ein starkes Netzwerk an geprüften, regionalen Fachbetrieben, die sofort einsatzbereit sind. Sie schildern uns Ihr Problem – wir kümmern uns um den Rest.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-2xl">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Zeitsparend</h3>
                  <p className="text-sm text-muted-foreground">Ein Anruf bei uns ersetzt die mühsame Suche. Wir kontaktieren sofort den richtigen Profi.</p>
                </div>
                <div className="bg-muted p-6 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Sicher</h3>
                  <p className="text-sm text-muted-foreground">Wir vermitteln nur seriöse, geprüfte Fachbetriebe aus der Region.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-6 translate-y-6 -z-10" />
              <img 
                src="/images/family-home.jpg" 
                alt="Glückliche Familie in einem sicheren Zuhause" 
                className="rounded-3xl shadow-xl object-cover w-full h-[600px]"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                <HeartHandshake className="w-10 h-10 text-secondary mb-3" />
                <h4 className="font-bold text-lg mb-1">Entspannen Sie sich.</h4>
                <p className="text-sm text-muted-foreground">Wir haben Ihr Problem im Griff. Schnell und professionell.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-4">Schicken Sie uns ein Foto per WhatsApp</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ein Bild sagt oft mehr als tausend Worte. Senden Sie uns einfach ein kurzes Video oder Foto des Schadens (z.B. der leckenden Leitung oder des defekten Schlosses) per WhatsApp. So kann der Techniker sofort die richtigen Ersatzteile einpacken.
          </p>
          <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold rounded-full h-14 px-8 text-lg" asChild>
            <a href="https://wa.me/436766166646" target="_blank" rel="noopener noreferrer">
              WhatsApp Notfall Chat öffnen
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
