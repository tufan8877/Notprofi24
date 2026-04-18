import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/436766166646"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -5 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">WhatsApp Notfall</span>
      
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
    </motion.a>
  );
}
