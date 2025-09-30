import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProcessFAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar de 2 a 4 semanas, mientras que proyectos más complejos con funcionalidades personalizadas pueden requerir de 8 a 12 semanas. Durante la fase de análisis, establecemos un cronograma detallado específico para tu proyecto."
    },
    {
      id: "item-2",
      question: "¿Qué información necesitan para comenzar?",
      answer: "Para iniciar, necesitamos entender tus objetivos de negocio, público objetivo, competencia, y cualquier requisito específico de funcionalidad. También es útil tener acceso a tu identidad de marca (logos, colores, fuentes) y contenido existente. Durante nuestra primera reunión, te guiaremos sobre toda la información necesaria."
    },
    {
      id: "item-3",
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, ofrecemos diferentes planes de soporte y mantenimiento post-lanzamiento. Esto incluye actualizaciones de seguridad, corrección de errores, actualizaciones de contenido, y mejoras continuas. Nuestro equipo está disponible 24/7 para resolver cualquier problema crítico que pueda surgir."
    },
    {
      id: "item-4",
      question: "¿El sitio web será responsive y optimizado para móviles?",
      answer: "Absolutamente. Todos nuestros sitios web son desarrollados con un enfoque mobile-first, asegurando una experiencia perfecta en todos los dispositivos. Realizamos pruebas exhaustivas en múltiples tamaños de pantalla y navegadores para garantizar compatibilidad total."
    },
    {
      id: "item-5",
      question: "¿Puedo hacer cambios al sitio web yo mismo después del lanzamiento?",
      answer: "Sí, implementamos sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar contenido fácilmente sin conocimientos técnicos. Además, proporcionamos capacitación completa y documentación para que tu equipo pueda gestionar el sitio de manera independiente."
    },
    {
      id: "item-6",
      question: "¿Qué pasa si necesito funcionalidades adicionales en el futuro?",
      answer: "Diseñamos todos nuestros sitios web con escalabilidad en mente. Puedes agregar nuevas funcionalidades en cualquier momento. Nuestro equipo evaluará tus necesidades y proporcionará una propuesta para implementar las nuevas características de manera eficiente."
    },
    {
      id: "item-7",
      question: "¿Incluyen servicios de SEO y marketing digital?",
      answer: "Sí, todos nuestros sitios web incluyen optimización SEO básica desde el inicio. También ofrecemos servicios avanzados de SEO, estrategias de contenido, y campañas de marketing digital como servicios adicionales para maximizar la visibilidad y el éxito de tu sitio web."
    },
    {
      id: "item-8",
      question: "¿Qué métodos de pago aceptan y cómo funcionan los pagos?",
      answer: "Aceptamos múltiples métodos de pago incluyendo transferencias bancarias, tarjetas de crédito, y PayPal. Típicamente, estructuramos los pagos en hitos: 40% al inicio del proyecto, 40% en la entrega del diseño aprobado, y 20% final al lanzamiento. Podemos ajustar el esquema según las necesidades de tu proyecto."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proceso de desarrollo web
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contáctanos directamente
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFAQ;
