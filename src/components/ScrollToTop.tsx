import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;

      const scrollToAnchor = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        attempts += 1;
        if (attempts < 10) {
          window.setTimeout(scrollToAnchor, 50);
        }
      };

      window.setTimeout(scrollToAnchor, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
