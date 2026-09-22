import { Key, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SchlosserNotdienst() {
  return <div className="w-full pb-24">
    <section className="bg-primary text-white py-20 px-4 md:px-6"><div className="container mx-auto max-w-4xl text-center">
      <Key className="w-14 h-14 text-secondary mx-auto mb-5" />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Schlosser Notdienst in Wien & Umgebung</h1>
      <p className="text-xl text-primary-foreground/80 leading-relaxed">Ausgesperrt oder ein Schloss ist defekt? Notprofi24 vermittelt rund um die Uhr einen passenden Schlosser-Fachbetrieb in Wien und Umgebung.</p>
    </div></section>
    <section className="py-16"><div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-5">Schlosser-Vermittlung bei dringenden Fällen</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">Wenn eine Tür zugefallen, ein Schlüssel abgebrochen oder eine Verriegelung defekt ist, können Sie Ihre Anfrage direkt an Notprofi24 richten. Wir vermitteln einen geeigneten Partnerbetrieb.</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">{["Zugefallene oder versperrte Türen","Abgebrochene Schlüssel im Zylinder","Einbruchschäden & Notverriegelung","Defekte Schlösser & Schließanlagen"].map(x=><div key={x} className="flex gap-3 items-start bg-muted/50 rounded-xl p-4"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/><span className="font-medium">{x}</span></div>)}</div>
      <h2 className="text-2xl font-bold text-primary mb-4">Passenden Fachbetrieb vermitteln lassen</h2><p className="text-lg text-muted-foreground leading-relaxed mb-8">Notprofi24 koordiniert die Anfrage. Art, Aufwand und Durchführung der Türöffnung oder Reparatur werden vom vermittelten Fachbetrieb vor Ort beurteilt.</p>
      <div className="flex flex-col sm:flex-row gap-4"><Button size="lg" className="rounded-full bg-primary text-white" asChild><a href="tel:06766166646"><Phone className="mr-2 w-5 h-5"/>0676 61 666 46</a></Button><Button size="lg" variant="outline" className="rounded-full" asChild><Link href="/leistungen">Alle Notdienste</Link></Button></div>
    </div></section>
  </div>;
}