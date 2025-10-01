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
      answer: "Depende de la complejidad y funcionalidades. Un sitio básico suele requerir 2-3 semanas. Proyectos con funciones personalizadas, integraciones o diseño a medida pueden demorar 4-8 semanas. En la fase inicial (análisis), definimos un cronograma ajustado para tu caso."
    },
    /*{
      id: "item-2",
      question: "¿Qué información necesitan para comenzar?",
      answer: "Para arrancar necesitamos conocer tus objetivos de negocio, público objetivo y competencia. También cualquier idea de funciones especiales que quieras incluir. Si ya tienes identidad visual (logo, paleta, tipografía) o contenido, será muy útil. En nuestra primera reunión te guiaremos paso a paso."
    },*/
    {
      id: "item-3",
      question: "¿Cuántas revisiones están incluidas antes del lanzamiento?",
      answer: "Incluimos un número de revisiones suficientes para asegurar que el diseño refleje exactamente lo que buscas — normalmente 2-3 rondas de ajustes mayores, más pequeñas correcciones sin costo. Si se requieren cambios importantes después de aprobaciones, evaluamos si entran en el alcance original o se cotizan aparte."
    },
    {
      id: "item-4",
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, contamos con planes de soporte y mantenimiento post-lanzamiento. Esto incluye actualización de seguridad, corrección de errores, mejoras de contenido y ajustes donde sea necesario. En casos críticos, brindamos respuesta rápida — nuestro objetivo es que tu sitio funcione siempre al máximo."
    },
    /*{
      id: "item-5",
      question: "¿El sitio web será responsive y compatible en todos los dispositivos?",
      answer: "Absolutamente. Desarrollamos con enfoque mobile-first, verificando la compatibilidad en distintos dispositivos, tamaños de pantalla y navegadores modernos. También probamos rendimiento para asegurar carga rápida y buena experiencia de usuario en móviles."
    },*/
    {
      id: "item-6",
      question: "¿Puedo hacer cambios al sitio web yo mismo después del lanzamiento?",
      answer: "Nuestros desarrollos son 100% a medida y no utilizamos CMS tradicionales. Esto significa que no tendrás un panel de edición estándar que dependa de tu administración ni actualizaciones manuales, pero sí contarás con nuestro equipo para realizar cualquier ajuste o mejora que necesites de forma rápida y segura. De esta manera garantizamos calidad, estabilidad y que cada cambio se implemente siguiendo buenas prácticas de desarrollo."
    },
    {
      id: "item-7",
      question: "¿Qué pasa si necesito funcionalidades nuevas en el futuro?",
      answer: "Diseñamos pensando en escalabilidad. Puedes agregar nuevas funciones cuando lo necesites. Evaluamos tus nuevos requerimientos y ofrecemos una propuesta para implementarlas de forma eficiente, asegurando compatibilidad con lo ya construido."
    },
    {
      id: "item-8",
      question: "¿Incluyen servicios de SEO y marketing digital?",
      answer: "Sí, todos los proyectos incluyen SEO básico: optimización de метa etiquetas, estructura de URL limpia, buenas prácticas de rendimiento y palabras clave iniciales. Además, ofrecemos servicios avanzados de SEO, estrategia de contenidos y campañas de marketing digital como servicios adicionales para ampliar la visibilidad."
    },
    {
      id: "item-9",
      question: "¿Cómo se estructura el pago del proyecto?",
      answer: "Generalmente trabajamos por hitos: ~50 % al inicio y 50 % restante al entregar y lanzar el proyecto. Si prefieres otra estructura o estás trabajando con una organización, podemos adaptarla según lo acordado."
    },
    {
      id: "item-10",
      question: "¿Cómo es el proceso de comunicación durante el proyecto?",
      answer: "Mantenemos reuniones regulares para revisar avances, compartir prototipos y obtener retroalimentación. Usamos herramientas de gestión de proyectos donde puedas ver el estado, comentar y aprobar entregables. Queremos que estés involucrado y te sientas parte del proceso."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-8 md:px-10 lg:px-12 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Preguntas <span className="text-accent">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proceso de desarrollo web
          </p>
        </div>

        {/* Flat list with dividers and no extra margins */}
        <Accordion type="single" collapsible className="w-full divide-y divide-border">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className=""
            >
              <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
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
