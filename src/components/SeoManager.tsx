import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://notprofi24.at";

const seo: Record<string, { title: string; description: string; robots?: string }> = {
  "/": {
    title: "24/7 Notdienst-Vermittlung Wien | Notprofi24",
    description: "Notprofi24 vermittelt rund um die Uhr passende Fachbetriebe für Installateur-, Elektriker-, Dachdecker-, Schlosser- und Glaser-Notfälle in Wien und Umgebung."
  },
  "/leistungen": {
    title: "Notdienste in Wien: Installateur, Elektriker & mehr | Notprofi24",
    description: "Notprofi24 vermittelt Fachbetriebe für Rohrbruch, Heizungsausfall, Stromausfall, Dachschäden, Türöffnungen und Glasbruch in Wien und Umgebung."
  },
  "/privatkunden": {
    title: "24/7 Notdienst für Privatkunden in Wien | Notprofi24",
    description: "Schnelle Notdienst-Vermittlung für Privatkunden: Wir vermitteln passende regionale Fachbetriebe für dringende Probleme rund um Haus und Wohnung."
  },
  "/hausverwaltungen": {
    title: "Notdienst für Hausverwaltungen in Wien | Notprofi24",
    description: "Notprofi24 unterstützt Hausverwaltungen bei der Koordination dringender Einsätze und vermittelt passende Fachbetriebe für mehrere Gewerke."
  },
  "/ueber-uns": {
    title: "Über Notprofi24 | Notdienst-Vermittlung Wien",
    description: "Erfahren Sie mehr über Notprofi24 und unsere Vermittlung passender Fachbetriebe für dringende Notfälle in Wien und Umgebung."
  },
  "/kontakt": {
    title: "Kontakt & 24/7 Hotline | Notprofi24 Wien",
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
      description: "Notprofi24 vermittelt passende Fachbetriebe für dringende Notfälle rund um Gebäude und Haustechnik.",
      robots: "noindex,follow"
    };

    const canonical = SITE_URL + (path === "/" ? "/" : path);
    document.title = page.title;

    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[name="robots"]', "content", page.robots ?? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", canonical);
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
