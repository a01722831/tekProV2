const whatsappText =
  "Hola, me interesa recibir información sobre productos ecológicos para mi proyecto.";

export const contact = {
  brand: "Tek Products Monterrey",
  phoneRaw: "+528182800859",
  phoneDisplay: "+52 81 8280 0859",
  whatsappHref: `https://wa.me/528182800859?text=${encodeURIComponent(
    whatsappText
  )}`,
  serviceArea: "Monterrey y área metropolitana"
};

export const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Productos", href: "/#productos" },
  { label: "Preguntas frecuentes", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" }
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    isPlaceholder: true
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    isPlaceholder: true
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    isPlaceholder: true
  }
];

export const aboutCards = [
  {
    title: "Nuestra identidad",
    body: "Somos una empresa comprometida con el cuidado del medio ambiente, dedicada a la comercialización de materiales ecológicos y sostenibles."
  },
  {
    title: "Nuestro objetivo",
    body: "Proveer productos ecológicos para la construcción que cumplan altos estándares de durabilidad, seguridad y estética, promoviendo la cultura del reciclaje de plástico, aluminio y madera."
  },
  {
    title: "Nuestra misión",
    body: "Transformar residuos plásticos en bienes útiles y duraderos para darle un respiro al planeta."
  }
];

export const materialFeatures = [
  "No requiere mantenimiento frecuente.",
  "Vida útil más larga que materiales tradicionales.",
  "No tóxico y sin emisión de gases tóxicos.",
  "Resistente a salitre, ácidos y solventes.",
  "Puede trabajarse con herramientas similares a las usadas para madera."
];

export const faqs = [
  {
    question: "¿Qué es el WPC?",
    answer:
      "Es un compuesto de madera y polímero reciclado que ofrece apariencia cálida, alta resistencia y bajo mantenimiento para aplicaciones arquitectónicas."
  },
  {
    question: "¿Los productos requieren mantenimiento?",
    answer:
      "La mayoría de las soluciones están pensadas para reducir mantenimiento. En general basta limpieza periódica, aunque cada producto tiene recomendaciones específicas."
  },
  {
    question: "¿Pueden usarse en exterior?",
    answer:
      "Sí. Varias líneas están diseñadas para terrazas, fachadas, jardines y vialidad. La selección final depende de exposición, carga y tipo de instalación."
  },
  {
    question: "¿Se instalan como madera?",
    answer:
      "Muchos materiales se pueden cortar, perforar y fijar con herramientas similares a las usadas para madera, siguiendo la ficha técnica de cada sistema."
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Comparte medidas, fotos del área y el producto de interés por WhatsApp o llamada. Con esa información se puede orientar la selección y preparar una propuesta."
  }
];
