import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function FloatingContactActions() {
  return (
    <div className="floating-actions">
      <a
        className="floating-action phone"
        href={`tel:${contact.phoneRaw}`}
        aria-label="Llamar a Tek Products"
      >
        <Phone size={22} aria-hidden="true" />
      </a>
      <a
        className="floating-action whatsapp"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Enviar WhatsApp a Tek Products"
      >
        <MessageCircle size={23} aria-hidden="true" />
      </a>
    </div>
  );
}
