import { motion } from "framer-motion";
import { Wrench, Zap, Hammer, Key, Grid2X2, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Leistungen() {
  const services = [
    {
      id: "installateur",
      title: "Installateur Notdienst",
      icon: <Wrench className="w-12 h-12 text-secondary" />,
      description: "Ein Rohrbruch oder ein Heizungsausfall im Winter duldend keinen Aufschub. Wir vermitteln sofort kompetente Installateure.",
      features: ["Wasserrohrbruch & Leckagen", "Heizungsausfall & Kesselschäden", "Verstopfte Abflüsse & Kanäle", "Gasgebrechen (sofortige Sicherung)"]
    },
    {
      id: "elektriker",
      title: "Elektriker Notdienst",
      icon: <Zap className="w-12 h-12 text-secondary" />,
      description: "Stromausfall oder verschmorte Leitungen sind nicht nur ärgerlich, sondern lebensgefährlich. Schnelle und sichere Behebung durch Fachbetriebe.",
      features: ["Kompletter oder teilweiser Stromausfall", "Kurzschlüsse & defekte Sicherungen", "Verschmorte Steckdosen oder Kabel", "Ausfall von Kühl- oder Gefrieranlagen"]
    },
    {
      id: "dachdecker",
      title: "Dachdecker Notdienst",
      icon: <Hammer className="w-12 h-12 text-secondary" />,
      description: "Ein undichtes Dach nach einem Sturm kann gewaltige Folgeschäden nach sich ziehen. Schnelle Notabdichtungen schützen Ihr Eigentum.",
      features: ["Sturmschäden & abgedeckte Dächer", "Akute Undichtheiten & Wassereintritt", "Defekte Dachfenster nach Hagel", "Lose Dachziegel (Gefahr in Verzug)"]
    },
    {
      id: "schlosser",
      title: "Schlosser Notdienst",
      icon: <Key className="w-12 h-12 text-secondary" />,
      description: "Ausgesperrt oder der Schlüssel ist abgebrochen? Wir vermitteln seriöse Schlosser, die Ihnen schnell und schonend die Tür öffnen.",
      features: ["Zugefallene Türen (beschädigungsfreie Öffnung)", "Abgebrochene Schlüssel im Zylinder", "Einbruchschäden & Notverriegelung", "Defekte Schließanlagen"]
    },
    {
      id: "glaser",
      title: "Glaser Notdienst",
      icon: <Grid2X2 className="w-12 h-12 text-secondary" />,
      description: "Zerbrochene Fensterscheiben oder Auslagen sind ein hohes Sicherheits- und Verletzungsrisiko. Sofortige Notverglasung bietet Schutz.",
      features: ["Glasbruch durch Sturm oder Unfall", "Einbruchschäden an Fenstern/Türen", "Notverglasung zur Sicherung", "Zerstörte Schaufenster"]
    }
  ];

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Unsere Notdienste im Detail
          </motion.h1>
          <motion.p 
            className="text-xl text-primary-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Für jeden Notfall den richtigen Experten. Wir vermitteln schnell und zuverlässig geprüfte Fachbetriebe in Wien und Umgebung.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 flex flex-col md:flex-row gap-10 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-muted p-6 rounded-2xl shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-4">Häufige Einsatzgründe:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="font-medium text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-border flex items-center gap-4">
                    <span className="font-semibold text-muted-foreground uppercase text-sm tracking-wider">Soforthilfe anfordern:</span>
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold" asChild>
                      <a href="tel:06766166646">
                        <Phone className="w-4 h-4 mr-2" /> 0676 61 666 46
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
