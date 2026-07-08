import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-section">
          <div className="section-container">
            <span className="section-kicker">Error 404</span>
            <h1>Página no encontrada.</h1>
            <p className="section-intro">
              La página que buscas no existe o cambió de dirección. Puedes
              volver al inicio para explorar el catálogo completo.
            </p>
            <Link className="button button-primary" href="/">
              <ArrowLeft size={20} aria-hidden="true" />
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
