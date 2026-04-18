import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Wrench, 
  Zap, 
  Hammer, 
  Key, 
  Grid2X2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    { icon: <Wrench className="w-10 h-10 mb-4 text-secondary" />, title: "Installateur", desc: "Rohrbruch, Wasserschaden, Heizungsausfall" },
    { icon: <Zap className="w-10 h-10 mb-4 text-secondary" />, title: "Elektriker", desc: "Stromausfall, Sicherungsprobleme, Kurzschluss" },
    { icon: <Hammer className="w-10 h-10 mb-4 text-secondary" />, title: "Dachdecker", desc: "Sturmschäden, Undichte Dächer, Ziegel" },
    { icon: <Key className="w-10 h-10 mb-4 text-secondary" />, title: "Schlosser", desc: "Ausgesperrt, Defekte Schlösser, Einbruchschutz" },
    { icon: <Grid2X2 className="w-10 h-10 mb-4 text-secondary" />, title: "Glaser", desc: "Glasbruch, Fensterreparatur, Notverglasung" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-burst-pipe.png')" }}
        />
        
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase">24/7 Notdienst-Vermittlung Wien</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Notfall? <br/>
                <span className="text-secondary">Wir sind sofort für Sie da.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light">
                24 Stunden, 7 Tage die Woche – Ihr zuverlässiger Notdienst-Vermittler in Wien und Umgebung. Ein Anruf genügt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" asChild>
                  <a href="tel:06766166646">
                    <Phone className="mr-2 h-6 w-6" />
                    0676 61 666 46
                  </a>
                </Button>
                <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" asChild>
                  <a href="https://wa.me/436766166646" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    WhatsApp Notfall
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  In 30-45 Min vor Ort
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  Geprüfte Fachbetriebe
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b py-8 shadow-sm relative z-30 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-border">
            <div className="flex flex-col items-center justify-center p-4">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <span className="font-bold text-lg">24/7 Service</span>
              <span className="text-sm text-muted-foreground">Immer erreichbar</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <span className="font-bold text-lg">Schnelle Hilfe</span>
              <span className="text-sm text-muted-foreground">Kurze Wartezeiten</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <ShieldCheck className="w-8 h-8 text-primary mb-2" />
              <span className="font-bold text-lg">Geprüfte Profis</span>
              <span className="text-sm text-muted-foreground">Höchste Qualität</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <ThumbsUp className="w-8 h-8 text-primary mb-2" />
              <span className="font-bold text-lg">Transparent</span>
              <span className="text-sm text-muted-foreground">Klare Abläufe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Unsere Notdienste</h2>
            <p className="text-lg text-muted-foreground">
              Wir vermitteln Ihnen schnell und unkompliziert den passenden Experten für Ihr Problem. Egal um welche Uhrzeit.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-xl hover:border-secondary/50 transition-all duration-300 group border-border/50 bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full group" asChild>
              <Link href="/leistungen">
                Alle Leistungen im Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">So einfach funktioniert's</h2>
            <p className="text-lg text-primary-foreground/80">
              Im Notfall zählt jede Minute. Unser Prozess ist darauf ausgelegt, Ihnen schnellstmöglich zu helfen. Ohne Stress, ohne Warteschleifen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4">Kontakt aufnehmen</h3>
              <p className="text-primary-foreground/80">Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir sind rund um die Uhr erreichbar.</p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-secondary/30 border-t-2 border-dashed border-secondary/50" />
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4">Notfall schildern</h3>
              <p className="text-primary-foreground/80">Beschreiben Sie kurz Ihr Problem. Wir vermitteln sofort den passenden Fachbetrieb aus Ihrer Nähe.</p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-secondary/30 border-t-2 border-dashed border-secondary/50" />
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4">Profi kommt sofort</h3>
              <p className="text-primary-foreground/80">Ein kompetenter Techniker macht sich auf den Weg zu Ihnen und behebt den Schaden fachgerecht.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-primary">Für Privatkunden</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Rohrbruch am Wochenende? Stromausfall mitten in der Nacht? Wir lassen Sie nicht im Dunkeln stehen. Schnelle, zuverlässige Hilfe für Ihr Zuhause.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> 24/7 Soforthilfe</li>
                  <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> Keine langen Warteschleifen</li>
                  <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> Geprüfte regionale Partner</li>
                </ul>
                <Button variant="outline" size="lg" className="rounded-full bg-white hover:bg-muted" asChild>
                  <Link href="/privatkunden">Mehr erfahren</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-white rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Grid2X2 className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Für Hausverwaltungen</h2>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Ihr verlässlicher Partner für die Koordination von Notfällen in Ihren Objekten. Professionelle Abwicklung, lückenlose Dokumentation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> Ein Ansprechpartner für alle Gewerke</li>
                  <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> Entlastung Ihres Teams</li>
                  <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-secondary" /> Professionelle Dokumentation</li>
                </ul>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white/30 hover:bg-white/10" asChild>
                  <Link href="/hausverwaltungen">Mehr erfahren</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Brauchen Sie sofort Hilfe?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Zögern Sie nicht. Unsere Disponenten sind jetzt erreichbar und organisieren umgehend den passenden Experten für Ihren Notfall in Wien.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl h-16 px-10 rounded-full shadow-lg hover:-translate-y-1 transition-transform" asChild>
              <a href="tel:06766166646">
                <Phone className="mr-3 h-6 w-6" />
                0676 61 666 46
              </a>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xl h-16 px-10 rounded-full shadow-lg hover:-translate-y-1 transition-transform" asChild>
              <a href="https://wa.me/436766166646" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp senden
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
