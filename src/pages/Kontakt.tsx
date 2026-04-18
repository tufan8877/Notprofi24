import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, AlertCircle, Send, CheckCircle } from "lucide-react";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            className="text-xl text-primary-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Wir sind rund um die Uhr für Sie da. Wählen Sie den schnellsten Weg für Ihr Anliegen.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Emergency Alert Box */}
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-2xl mb-12 max-w-4xl mx-auto flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-secondary shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Haben Sie einen akuten Notfall?</h3>
              <p className="text-muted-foreground">
                Bei akuten Notfällen bitte <strong>sofort anrufen oder WhatsApp nutzen</strong>. Schicken Sie uns gerne auch Fotos des Schadens direkt per WhatsApp – das beschleunigt die Hilfe erheblich.
              </p>
            </div>
          </div>

          {/* Phone + WhatsApp Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">24/7 Notruf-Hotline</h2>
              <p className="text-muted-foreground mb-8">
                Der schnellste Weg zur Hilfe. Ein Disponent nimmt Ihren Anruf sofort entgegen.
              </p>
              <a
                href="tel:06766166646"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold text-2xl py-4 px-8 rounded-full w-full transition-colors"
              >
                0676 61 666 46
              </a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">WhatsApp Notfall</h2>
              <p className="text-muted-foreground mb-8">
                Senden Sie uns schnell und unkompliziert Details oder Fotos Ihres Schadens.
              </p>
              <a
                href="https://wa.me/436766166646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xl py-4 px-8 rounded-full w-full transition-colors"
              >
                Chat öffnen (+43 676 61 666 46)
              </a>
            </div>
          </div>

          {/* Contact Form + Map side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-2">Allgemeine Anfrage</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Kein Notfall? Schreiben Sie uns – wir melden uns schnellstmöglich.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Nachricht gesendet!</h3>
                  <p className="text-muted-foreground">
                    Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr vollständiger Name"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="phone">
                      Telefonnummer *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ihre Rufnummer"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="service">
                      Bereich
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="installateur">Installateur</option>
                      <option value="elektriker">Elektriker</option>
                      <option value="dachdecker">Dachdecker</option>
                      <option value="schlosser">Schlosser</option>
                      <option value="glaser">Glaser</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="message">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
                    <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a> zu.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="flex flex-col gap-6">
              {/* OpenStreetMap embed */}
              <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex-1">
                <iframe
                  title="Notprofi24 Standort Wien"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=16.34,48.24,16.40,48.28&layer=mapnik&marker=48.259,16.368"
                  className="w-full h-64 lg:h-80 border-0"
                  loading="lazy"
                />
                <div className="p-6 flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unternehmenssitz</h3>
                    <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                      Heiligenstädter Straße 152<br />
                      1190 Wien, Österreich<br />
                      <span className="text-xs mt-1 block">(Kein Kundenempfang vor Ort)</span>
                    </address>
                  </div>
                </div>
              </div>

              {/* Email info */}
              <div className="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-start gap-4">
                <div className="bg-muted p-3 rounded-xl shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Allgemeine Anfragen</h3>
                  <p className="text-sm text-muted-foreground mb-1">Für Verwaltungsfragen (keine Notfälle!)</p>
                  <a href="mailto:office@notprofi24.at" className="text-primary font-medium hover:underline text-sm">
                    office@notprofi24.at
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
