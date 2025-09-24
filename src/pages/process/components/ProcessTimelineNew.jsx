import React from 'react';
import { Timeline } from '../../../components/ui/timeline';

const ProcessTimelineNew = () => {
  const data = [
    {
      title: "1. Descubrimiento",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Analizamos las necesidades de tu negocio, los objetivos del proyecto y el perfil de tus usuarios. 
            Esta etapa nos permite entender el problema a fondo y definir el camino correcto para construir la solución ideal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Actividades Clave</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Análisis de objetivos de negocio</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Investigación de usuarios target</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Auditoría de competencia</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Entregables</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Brief de proyecto detallado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Personas y user journey</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Análisis competitivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Planeación",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Organizamos la información en un plan de trabajo claro. Definimos tiempos, entregables y la arquitectura del proyecto, 
            asegurando que cada paso tenga un propósito y esté alineado con tu visión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Estrategia</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Arquitectura de información</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cronograma detallado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Especificaciones técnicas</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Documentación</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Wireframes del sitio</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Flujos de usuario</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Plan de contenidos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. Diseño",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Creamos la identidad visual y la experiencia de usuario. El diseño no solo debe verse bien, 
            sino guiar al usuario de manera intuitiva para lograr conversiones efectivas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">UI/UX Design</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Diseño visual completo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Prototipo interactivo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Sistema de design tokens</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Optimización</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Testing de usabilidad</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimización conversión</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. Desarrollo",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Convertimos el diseño en un sitio web funcional, ágil y seguro. 
            Implementamos las últimas tecnologías y buenas prácticas para garantizar escalabilidad y rendimiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Tecnologías</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>React / Next.js</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Optimización</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>SEO técnico avanzado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Seguridad web</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "5. Testing",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Realizamos pruebas exhaustivas para garantizar que todo funcione perfectamente en todos los dispositivos y navegadores.
            La calidad es nuestra prioridad antes del lanzamiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Pruebas Técnicas</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cross-browser testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Responsive testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Performance testing</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Quality Assurance</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Functional testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Security testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accessibility testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "6. Lanzamiento",
      content: (
        <div>
          <p className="text-text-secondary text-sm md:text-base font-normal mb-8 leading-relaxed">
            Publicamos tu proyecto y te acompañamos en el proceso de lanzamiento. 
            Además, ofrecemos soporte y mejoras continuas para que tu sitio web siempre esté optimizado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Despliegue</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Configuración de hosting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Setup de analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Monitoreo en vivo</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card-elevated transition-all duration-300">
              <h4 className="font-gilroy font-semibold text-secondary mb-3">Soporte Continuo</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Capacitación del equipo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mantenimiento técnico</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimización continua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
};

export default ProcessTimelineNew;