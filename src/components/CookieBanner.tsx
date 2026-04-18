import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6 md:bottom-4 md:left-4 md:right-auto md:max-w-lg"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-border p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-primary text-lg">Datenschutzhinweis</h3>
              </div>
              <button
                onClick={decline}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Diese Website verwendet technisch notwendige Cookies, um die Funktionalität der Seite sicherzustellen. Weitere Informationen finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-primary underline hover:no-underline font-medium">
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                Akzeptieren
              </button>
              <button
                onClick={decline}
                className="flex-1 bg-muted hover:bg-muted/80 text-foreground font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
