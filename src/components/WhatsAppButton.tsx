import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/436766166646"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Notprofi24 per WhatsApp kontaktieren" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#128C3E] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Notfall</span>
    </a>
  );
}
