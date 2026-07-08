"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { faqs } from "@/data/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="page-section faq-section" id="faq">
      <div className="section-container faq-grid">
        <div>
          <span className="section-kicker">
            <CircleHelp size={18} aria-hidden="true" />
            Preguntas frecuentes
          </span>
          <h2>Respuestas rápidas para elegir mejor.</h2>
          <p className="section-intro">
            Si tienes medidas, fotos del área o una idea inicial, podemos
            ayudarte a definir el material más conveniente para tu proyecto.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <article className="faq-item" key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={isOpen ? "is-open" : ""}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`faq-answer ${isOpen ? "is-open" : ""}`}
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
