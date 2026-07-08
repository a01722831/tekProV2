"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { SocialIcon } from "@/components/social-icon";
import { contact, navLinks, socialLinks } from "@/data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <Link className="brand-link" href="/#inicio" onClick={() => setIsOpen(false)}>
        <span className="brand-mark" aria-hidden="true">
          <Leaf size={22} strokeWidth={2.4} />
        </span>
        <span>{contact.brand}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-socials">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={`Abrir ${social.label}`}
            rel="noreferrer"
            target="_blank"
          >
            <SocialIcon network={social.label} size={17} />
          </a>
        ))}
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-panel ${isOpen ? "is-open" : ""}`} id="mobile-nav-panel">
        <nav aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
