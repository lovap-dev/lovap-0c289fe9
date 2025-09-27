"use client";
import React from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 bg-card/50 backdrop-blur-sm max-w-xs w-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" key={i}>
                  <div className="text-sm leading-relaxed text-foreground/90 mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      {image && <AvatarImage src={image} alt={name} />}
                      <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold text-sm">
                        {getInitials(name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="text-sm leading-5 text-muted-foreground tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "El proceso fue transparente desde el día uno. Cada fase estaba bien definida y nos mantenían informados del progreso. El resultado superó nuestras expectativas.",
    image: "", // No image, will use initials
    name: "María González",
    role: "Directora de Marketing",
  },
  {
    text: "La metodología de 6 fases nos dio total confianza. Sabíamos exactamente qué esperar en cada etapa y el cronograma se cumplió al pie de la letra.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Carlos Rodríguez",
    role: "Gerente General",
  },
  {
    text: "Excelente comunicación durante todo el proyecto. Las entregas parciales nos permitieron dar feedback temprano y ajustar detalles antes del lanzamiento.",
    image: "", // No image, will use initials
    name: "Ana Martínez",
    role: "CEO",
  },
  {
    text: "La fase de descubrimiento fue clave para entender realmente nuestras necesidades. No solo nos dieron una web, sino una solución integral de negocio.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "Diego Herrera",
    role: "Director Comercial",
  },
  {
    text: "El soporte post-lanzamiento ha sido excepcional. Cualquier duda o ajuste menor lo resuelven en horas, no en días como otras agencias.",
    image: "", // No image, will use initials
    name: "Laura Jiménez",
    role: "Coordinadora Digital",
  },
  {
    text: "Nos entregaron no solo la web sino toda la documentación técnica y training del equipo. Realmente se nota que piensan a largo plazo.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Roberto Silva",
    role: "CTO",
  },
  {
    text: "La fase de testing fue muy rigurosa. Probaron cada funcionalidad en múltiples dispositivos y navegadores antes del lanzamiento oficial.",
    image: "", // No image, will use initials
    name: "Patricia Morales",
    role: "Product Manager",
  },
  {
    text: "Desde el primer wireframe hasta el lanzamiento, todo estuvo perfectamente planificado. Es la primera vez que un proyecto web se entrega a tiempo y en presupuesto.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Fernando López",
    role: "Director de Operaciones",
  },
  {
    text: "La calidad del código y la optimización SEO fueron impecables. Nuestro sitio carga súper rápido y ya estamos viendo mejores rankings en Google.",
    image: "", // No image, will use initials
    name: "Sofía Ramírez",
    role: "Especialista SEO",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 relative overflow-hidden">

      <div className="container z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Testimonios
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-bold tracking-tight mt-6 text-center text-secondary">
            Experiencias de Nuestros Clientes
          </h2>
          <p className="text-center mt-4 text-lg text-text-primary/70 leading-relaxed">
            Descubre lo que dicen nuestros clientes sobre nuestro proceso de desarrollo y los resultados obtenidos.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;