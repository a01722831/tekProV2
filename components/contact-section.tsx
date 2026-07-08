import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SocialIcon } from "@/components/social-icon";
import { contact, socialLinks } from "@/data/site";

export function ContactSection() {
  return (
    <section className="page-section contact-section" id="contacto">
      <div className="section-container contact-grid">
        <div>
          <span className="section-kicker">
            <Send size={18} aria-hidden="true" />
            Contacto
          </span>
          <h2>Cuéntanos sobre tu proyecto.</h2>
          <p>
            Te ayudamos a elegir el material adecuado para exterior, interior,
            remodelación, obra nueva o aplicaciones comerciales.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Enviar WhatsApp
            </a>
            <a className="button button-secondary" href={`tel:${contact.phoneRaw}`}>
              <Phone size={20} aria-hidden="true" />
              Llamar ahora
            </a>
          </div>
        </div>

        <address className="contact-card">
          <a href={`tel:${contact.phoneRaw}`}>
            <Phone size={20} aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>
          <span>
            <MapPin size={20} aria-hidden="true" />
            <span>{contact.serviceArea}</span>
          </span>
          <div className="contact-socials">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <SocialIcon network={social.label} size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </address>
      </div>
    </section>
  );
}
