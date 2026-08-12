import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Recycle, ShieldCheck } from "lucide-react";
import { contact } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-overlay" />
      <div className="section-container hero-content">
        <div className="hero-logo-slot">
          <Image
            src="/images/branding/OficialLogo.png"
            alt="Logotipo de Tek Products"
            fill
            priority
            sizes="(max-width: 840px) 207px, 213px"
          />
        </div>
        <h1>Soluciones ecológicas para construir tus ideas.</h1>
        <p>
          Materiales sostenibles, durables y de bajo mantenimiento para decks,
          pergolados, fachadas, plafones, jardines, muros y acabados
          arquitectónicos.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            Contáctanos
          </a>
          <Link className="button button-secondary" href="/#productos">
            <ArrowDown size={20} aria-hidden="true" />
            Ver productos
          </Link>
        </div>
        <ul className="hero-proof" aria-label="Ventajas principales">
          <li>
            <Recycle size={18} aria-hidden="true" />
            Materiales reciclados
          </li>
          <li>
            <ShieldCheck size={18} aria-hidden="true" />
            Bajo mantenimiento
          </li>
        </ul>
      </div>
    </section>
  );
}
