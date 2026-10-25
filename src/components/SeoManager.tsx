import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://notprofi24.at";

const seo: Record<string, { title: string; description: string; robots?: string }> = {
  "/": {
    title: "24/7 Notdienst-Vermittlung Wien & Umgebung | Notprofi24",
    description: "24/7 Notdienst-Vermittlung in Wien und Umgebung: Notprofi24 kontaktiert passende Fachbetriebe bei dringenden Problemen mit Installateur, Elektriker, Dachdecker oder Schlosser."
  },
  "/leistungen": {
    title: "Notdienste Wien & Umgebung: Installateur, Elektriker | Notprofi24",
    description: "Fachbetriebe bei Rohrbruch, Heizungsausfall, Stromausfall, Dachschaden oder Türnotfall: Notprofi24 vermittelt Notdienst-Hilfe in Wien und Umgebung."
  },
  "/installateur-notdienst-wien": {
    title: "Installateur Notdienst Wien & Umgebung | Notprofi24",
    description: "24/7 Installateur-Notdienst-Vermittlung in Wien und Umgebung bei Rohrbruch, Leckagen, Heizungsausfall und verstopften Abflüssen."
  },
  "/elektriker-notdienst-wien": {
    title: "Elektriker Notdienst Wien & Umgebung | Notprofi24",
    description: "24/7 Elektriker-Notdienst-Vermittlung in Wien und Umgebung bei Stromausfall, Kurzschluss, Sicherungsproblemen und dringenden Elektro-Störungen."
  },
  "/dachdecker-notdienst-wien": {
    title: "Dachdecker Notdienst Wien & Umgebung | Notprofi24",
    description: "Dachdecker-Notdienst-Vermittlung in Wien und Umgebung bei Sturmschäden, Undichtheiten, Wassereintritt und beschädigten Dachziegeln."
  },
  "/schlosser-notdienst-wien": {
    title: "Schlosser Notdienst Wien & Umgebung | Notprofi24",
    description: "24/7 Schlosser-Notdienst-Vermittlung in Wien und Umgebung bei zugefallenen Türen, defekten Schlössern und abgebrochenen Schlüsseln."
  },
  "/privatkunden": {
    title: "24/7 Notdienst für Privatkunden in Wien & Umgebung | Notprofi24",
    description: "24/7 Notdienst-Vermittlung für Privatkunden in Wien und Umgebung. Ein Anruf genügt: Notprofi24 kontaktiert passende Fachbetriebe für dringende Fälle."
  },
  "/hausverwaltungen": {
    title: "Notdienst für Hausverwaltungen Wien & Umgebung | Notprofi24",
    description: "Notdienst-Koordination für Hausverwaltungen in Wien und Umgebung: Notprofi24 nimmt Notfälle entgegen, kontaktiert passende Fachbetriebe und dokumentiert Einsätze."
  },
  "/ueber-uns": {
    title: "Über Notprofi24 | Notdienst-Vermittlung Wien & Umgebung",
    description: "Erfahren Sie mehr über Notprofi24 und unsere Vermittlung passender Fachbetriebe für dringende Notfälle in Wien und Umgebung."
  },
  "/kontakt": {
    title: "Kontakt & 24/7 Hotline | Notprofi24 Wien & Umgebung",
    description: "Kontaktieren Sie Notprofi24 telefonisch oder per WhatsApp. Wir sind rund um die Uhr für Notdienst-Anfragen erreichbar."
  },
  "/impressum": {
    title: "Impressum | Notprofi24",
    description: "Impressum und Anbieterinformationen von Notprofi24."
  },
  "/datenschutz": {
    title: "Datenschutz | Notprofi24",
    description: "Datenschutzerklärung von Notprofi24.",
    robots: "noindex,follow"
  }
};

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export function SeoManager() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("#")[0] || "/";
    const page = seo[path] ?? {
      title: "Notprofi24 | 24/7 Notdienst-Vermittlung",
      description: "24/7 Notdienst-Vermittlung in Wien und Umgebung. Notprofi24 kontaktiert passende Fachbetriebe für dringende Probleme rund um Gebäude und Haustechnik.",
      robots: "noindex,follow"
    };

    const canonical = SITE_URL + (path === "/" ? "/" : path);
    document.title = page.title;

    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[name="robots"]', "content", page.robots ?? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", `${SITE_URL}/opengraph.jpg`);
    setMeta('meta[name="twitter:image"]', "content", `${SITE_URL}/opengraph.jpg`);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [location]);

  return null;
}
