import React from 'react';
import { Timeline } from '../../../components/ui/timeline';

const ProcessTimelineNew = () => {
  const baseImageClass =
    "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full " +
    "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)," +
    "_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)," +
    "_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

  const Img = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={baseImageClass}
    />
  );

  const data = [
    {
      title: "1. Descubrimiento",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Analizamos las necesidades de tu negocio, los objetivos del proyecto
            y el perfil de tus usuarios. Esta etapa nos permite entender el
            problema a fondo y definir el camino correcto para construir la
            solución ideal.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
            />
            <Img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2. Planeación",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Organizamos la información en un plan de trabajo claro. Definimos
            tiempos, entregables y la arquitectura del proyecto, asegurando que
            cada paso tenga un propósito y esté alineado con tu visión.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
            />
            <Img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
            />
          </div>
        </div>
      ),
    },
    {
      title: "3. Diseño",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Creamos la identidad visual y la experiencia de usuario. El diseño
            no solo debe verse bien, sino guiar al usuario de manera intuitiva
            para lograr conversiones efectivas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
            />
            <Img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
            />
            <Img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
            />
            <Img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
            />
          </div>
        </div>
      ),
    },
    {
      title: "4. Desarrollo",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Convertimos el diseño en un sitio web funcional, ágil y seguro.
            Implementamos las últimas tecnologías y buenas prácticas para
            garantizar escalabilidad y rendimiento.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
            />
            <Img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
            />
          </div>
        </div>
      ),
    },
    {
      title: "5. Lanzamiento",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Publicamos tu proyecto y te acompañamos en el proceso de lanzamiento.
            Además, ofrecemos soporte y mejoras continuas para que tu sitio web
            siempre esté optimizado.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
            />
            <Img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default ProcessTimelineNew;