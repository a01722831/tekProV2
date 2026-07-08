import Link from "next/link";
import { Leaf, MessageCircle, Phone } from "lucide-react";
import { SocialIcon } from "@/components/social-icon";
import { contact, navLinks, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark footer" aria-hidden="true">
              <Leaf size={21} strokeWidth={2.4} />
            </span>
            <span>{contact.brand}</span>
          </div>
          <p>
            Materiales ecológicos para construir espacios durables, limpios y
            de bajo mantenimiento.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2>Secciones</h2>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div>
          <h2>Redes</h2>
          <div className="footer-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <SocialIcon network={social.label} size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2>Contacto</h2>
          <div className="footer-links">
            <a href={`tel:${contact.phoneRaw}`}>
              <Phone size={16} aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tek Products Monterrey. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
