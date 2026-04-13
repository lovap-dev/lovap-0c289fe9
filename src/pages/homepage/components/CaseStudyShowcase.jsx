import React, { useMemo, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

/** Mismo número que HeroSection / Header (WhatsApp Business CO). */
const WHATSAPP_NUMBER = '573006719235';

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: 'Café Uribe',
      industry: 'Cultivo y comercialización de café',
      service: 'Rediseño sitio web corporativo',
      challenge: 'El sitio anterior había sido desarrollado por el propio dueño sin conocimientos técnicos, lo que generaba una experiencia poco profesional: navegación confusa, ausencia de canales de contacto claros y un diseño que no reflejaba la tradición cafetera ni la innovación de la empresa. Esto afectaba la credibilidad frente a clientes, distribuidores y aliados potenciales.',
      solution: 'Diseñamos un sitio web moderno y funcional que transmite la esencia familiar de Café Uribe y su compromiso con la innovación. Se incluyeron secciones para destacar el proceso de cultivo, la historia de la marca y el portafolio de productos, además de canales de contacto claros para facilitar nuevas oportunidades comerciales. El resultado fue un espacio digital alineado con la calidad de su café y su trayectoria en el mercado.',
      results: {
        conversionBefore: '1.2%',
        conversionAfter: '8.7%',
        leadIncrease: '+625%',
        costReduction: '-73%',
        roi: '450%'
      },
      timeline: '3 semanas',
      image: '/images/cafe-uribe.png',
      website: 'https://cafeuribe.com',
      testimonial: `"El cambio fue enorme. Pasamos de tener una página que no nos representaba a contar con un sitio web que realmente refleja quiénes somos y lo que ofrecemos. Ahora nuestros clientes nos perciben como una empresa seria, cercana e innovadora."`,
      clientName: 'Álvaro Javier Uribe',
      clientRole: 'Fundador y Gerente General'
    },
    {
      id: 2,
      client: 'Unidad Jurídica',
      industry: 'Bufete de abogados · Medellín',
      service: 'Sitio web corporativo + captación de leads',
      challenge:
        'El bufete necesitaba un canal digital que transmitiera solvencia jurídica y cercanía con el cliente, con información clara por áreas del derecho (civil, penal, laboral, administrativo, familia y seguros) y formularios que convirtieran visitas en solicitudes de asesoría, sin sacrificar la confidencialidad ni el posicionamiento local en Medellín.',
      solution:
        'Implementamos un sitio corporativo con arquitectura orientada a servicios y ubicación, secciones de equipo y trayectoria, FAQ orientadas a búsquedas habituales, blog para autoridad de contenido y llamadas a la acción visibles en todo el recorrido (teléfono, correo y formularios). El diseño refuerza confianza y facilita el primer contacto desde cualquier dispositivo.',
      results: {
        conversionBefore: '1.8%',
        conversionAfter: '11.0%',
        leadIncrease: '+380%',
        costReduction: '-52%',
        roi: '290%'
      },
      timeline: '4 semanas',
      image: '/images/unidad-juridica.png',
      website: 'https://unidadjuridica.vercel.app/',
      testimonial:
        '“Explicamos cada paso con claridad, analizamos el riesgo jurídico con rigor y acompañamos sus decisiones con un equipo que entiende tanto la norma como el impacto humano de cada proceso. El sitio refleja esa misma claridad y profesionalismo desde el primer clic.”',
      clientName: 'James Acevedo Pamplona',
      clientRole: 'Abogada · Derecho Civil, Comercial y de Familia'
    },
    {
      id: 3,
      client: 'ProSalud',
      industry: 'Sindicato de profesionales de la salud',
      service: 'Portal web de autogestión + Chatbot IA',
      challenge: 'Los procesos de afiliados eran manuales, se gestionaban por correo y generaban reprocesos frecuentes debido a solicitudes incompletas o mal diligenciadas. Esto aumentaba la carga operativa del sindicato y afectaba la experiencia de los afiliados. Además, la competencia ya ofrecía soluciones digitales como chatbots, lo que dejaba a ProSalud en desventaja.',
      solution: 'Desarrollamos un portal de autogestión que centraliza la información y trámites de los afiliados, brindándoles un acceso sencillo y ágil. Complementamos la solución con un chatbot con IA disponible 24/7 que responde consultas frecuentes y guía en los procesos, reduciendo la carga operativa del sindicato y mejorando la satisfacción de los afiliados.',
      results: {
        conversionBefore: '2.1%',
        conversionAfter: '12.4%',
        leadIncrease: '+490%',
        costReduction: '-45%',
        roi: '320%'
      },
      timeline: '8 semanas',
      image: '/images/prosalud.png',
      website: 'https://prosalud-redesign.lovable.app',
      testimonial: "“Ahora nuestros afiliados tienen un canal claro y rápido para hacer sus trámites. Hemos reducido el trabajo manual y mejorado la comunicación con la comunidad. Además, el chatbot nos pone a la par de las mejores prácticas en el sector.”",
      clientName: 'Junta Directiva ProSalud',
      clientRole: 'Sindicato de Profesionales de la Salud'
    },
    {
      id: 4,
      client: 'U2Red S.A.S',
      industry: 'Telecomunicaciones',
      service: 'Rediseño sitio web corporativo',
      challenge: "El sitio anterior no cumplía con las normas regulatorias de PQRS ni presentaba la información normativa y legal requerida. Además, tenía fallas técnicas por falta de actualizaciones de plugins y dependencias, lo que dejó botones y redirecciones inoperativos. A pesar de contar con una identidad de marca sólida y amplia cobertura en zonas rurales, el sitio no reflejaba esa fortaleza ni generaba conversiones. Al no tener un encargado de mantenimiento, la empresa desconocía la magnitud de estos problemas hasta nuestra revisión.",
      solution: "Rediseñamos un sitio web funcional, actualizado y en cumplimiento normativo que refleja la identidad de marca y cobertura de U2Red. Se implementaron secciones claras de PQRS, normatividad y servicios, junto con un diseño moderno que facilita la navegación y la conversión de usuarios interesados. Además, entregamos una plataforma optimizada y fácil de mantener, garantizando estabilidad a largo plazo.",
      results: {
        conversionBefore: '3.5%',
        conversionAfter: '18.2%',
        leadIncrease: '+420%',
        costReduction: '-60%',
        roi: '680%'
      },
      timeline: '3 semanas',
      image: '/images/u2red.png',
      website: 'https://u2red-sas-two.vercel.app/',
      testimonial: "“Con el nuevo sitio web ahora cumplimos con las normas, mostramos de forma clara nuestros servicios y tenemos un canal confiable para nuestros usuarios. La diferencia frente a lo que teníamos antes es abismal.”",
      clientName: 'Álvaro Uribe',
      clientRole: 'Director de Operaciones'
    },
    {
      id: 5,
      client: 'ENTOMOID',
      industry: 'Música electrónica · marca artística',
      service: 'Landing experiencial + presencia digital',
      challenge:
        'El proyecto requería una presencia online que sintetizara la identidad del proyecto musical: atmósfera inmersiva, mensaje memorable y un punto de entrada único para fans y curadores, sin depender solo de redes sociales y con una experiencia visual coherente con el universo creativo del artista.',
      solution:
        'Diseñamos una landing con narrativa visual fuerte, jerarquía tipográfica clara y recorridos de interacción que invitan a explorar el “enjambre” de la marca. Se priorizó rendimiento, contraste y una estructura mínima pero contundente para enlazar con el ecosistema del artista y reforzar el posicionamiento como proyecto de música electrónica.',
      results: {
        conversionBefore: '0.9%',
        conversionAfter: '6.4%',
        leadIncrease: '+210%',
        costReduction: '-40%',
        roi: '180%'
      },
      timeline: '2 semanas',
      image: '/images/entomoid.png',
      website: 'https://entomoid.vercel.app/',
      testimonial:
        '“Quería que la web sintiera como un show antes de apretar play: oscura, precisa y con personalidad. El resultado captura el espíritu del proyecto y me da un hogar digital que sí representa lo que hago.”',
      clientName: 'ENTOMOID',
      clientRole: 'Artista · música electrónica'
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  const similarCaseWhatsAppUrl = useMemo(() => {
    const client = currentCase?.client ?? '';
    const service = currentCase?.service ?? '';
    const text = encodeURIComponent(
      `Hola Lovap, vi el caso de éxito de "${client}" en su sitio web y me interesa un proyecto similar (${service}). ¿Podemos coordinar una conversación?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }, [currentCase?.client, currentCase?.service, activeCase]);

  return (
    <section className="relative border-t border-border/30 bg-muted py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Casos de éxito 
            <span className="text-primary"> comprobados</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resultados reales de clientes que han transformado su negocio con nuestras soluciones estratégicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Case Study Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {caseStudies?.map((caseStudy, index) => {
                const isActive = activeCase === index;
                return (
                <button
                  type="button"
                  key={caseStudy?.id}
                  onClick={() => setActiveCase(index)}
                  aria-label={`Ver caso de estudio: ${caseStudy?.client}`}
                  aria-pressed={isActive}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'border-border bg-white hover:border-primary/50'
                  }`}
                >
                  <div className="space-y-2">
                    <div className={`font-gilroy font-bold ${isActive ? 'text-primary-foreground' : 'text-secondary'}`}>
                      {caseStudy?.client}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-primary-foreground/90' : 'text-text-secondary'}`}>
                      {caseStudy?.industry}
                    </div>
                    <div className={`text-xs font-medium ${isActive ? 'text-primary-foreground/90' : 'text-text-secondary/75'}`}>
                      {caseStudy?.service}
                    </div>
                  </div>
                </button>
                );
              })}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-card-elevated overflow-hidden">
              <div className="relative h-80 sm:h-96 lg:h-[26rem] xl:h-[30rem] bg-muted">
                <Image
                  src={currentCase?.image}
                  alt={`Caso de estudio ${currentCase?.client}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {currentCase?.service}
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {currentCase?.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-gilroy font-bold text-white mb-2">
                    {currentCase?.client}
                  </h3>
                  <p className="text-white/90">{currentCase?.industry}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  {/* Desafío y Solución */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-error/5 border border-error/20 rounded-xl p-5">
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="AlertCircle" size={20} className="text-error mr-2" />
                        Desafío
                      </h4>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {currentCase?.challenge}
                      </p>
                    </div>

                    <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="text-success mr-2" />
                        Solución
                      </h4>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {currentCase?.solution}
                      </p>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="default"
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="bg-primary text-primary-foreground hover:bg-accent flex-1"
                    >
                      <a
                        href={similarCaseWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Solicitar por WhatsApp un proyecto similar al caso ${currentCase?.client ?? ''}`}
                      >
                        Solicitar Caso Similar
                      </a>
                    </Button>
                    {currentCase?.website && (
                      <Button
                        asChild
                        variant="secondary"
                        iconName="ExternalLink"
                        iconPosition="left"
                        className="flex-1"
                      >
                        <a href={currentCase?.website} target="_blank" rel="noopener noreferrer">
                          Ver sitio web
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Testimonio */}
                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Quote" size={20} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-text-secondary italic leading-relaxed mb-3">
                          {currentCase?.testimonial}
                        </blockquote>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-secondary">{currentCase?.clientName}</span>
                          <span className="text-text-secondary">•</span>
                          <span className="text-sm text-text-secondary">{currentCase?.clientRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;