import { Hammer, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function DachdeckerNotdienst() {
  return <div className="w-full pb-24">
    <section className="bg-primary text-white py-20 px-4 md:px-6"><div className="container mx-auto max-w-4xl text-center">
      <Hammer className="w-14 h-14 text-secondary mx-auto mb-5" />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Dachdecker Notdienst in Wien & Umgebung</h1>
      <p className="text-xl text-primary-foreground/80 leading-relaxed">Bei Sturmschäden, akuten Undichtheiten oder beschädigten Dachziegeln vermittelt Notprofi24 einen passenden Dachdecker-Fachbetrieb.</p>
    </div></section>
    <section className="py-16"><div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-5">Vermittlung bei akuten Dachschäden</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">Ein beschädigtes Dach kann zu weiteren Schäden am Gebäude führen. Notprofi24 nimmt Ihre Anfrage auf und vermittelt einen geeigneten Partnerbetrieb in Wien und Umgebung.</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">{["Sturmschäden & abgedeckte Dächer","Akute Undichtheiten & Wassereintritt","Beschädigte Dachfenster nach Unwetter","Lose oder beschädigte Dachziegel"].map(x=><div key={x} className="flex gap-3 items-start bg-muted/50 rounded-xl p-4"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/><span className="font-medium">{x}</span></div>)}</div>
      <h2 className="text-2xl font-bold text-primary mb-4">Ein Ansprechpartner für Ihre Anfrage</h2><p className="text-lg text-muted-foreground leading-relaxed mb-8">Sie schildern uns den Schaden und wir kümmern uns um die Vermittlung. Die Beurteilung der erforderlichen Maßnahmen und die Ausführung übernimmt der jeweilige Dachdecker-Fachbetrieb.</p>
      <div className="flex flex-col sm:flex-row gap-4"><Button size="lg" className="rounded-full bg-primary text-white" asChild><a href="tel:06766166646"><Phone className="mr-2 w-5 h-5"/>0676 61 666 46</a></Button><Button size="lg" variant="outline" className="rounded-full" asChild><Link href="/leistungen">Alle Notdienste</Link></Button></div>
    </div></section>
  </div>;
}