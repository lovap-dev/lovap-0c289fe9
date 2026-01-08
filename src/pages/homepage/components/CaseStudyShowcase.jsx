import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

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
      image: 'https://cafeuribe.com/images/galeria/logo_tasa_cafe_uribe.jpeg',
      website: 'https://cafeuribe.com',
      testimonial: `"El cambio fue enorme. Pasamos de tener una página que no nos representaba a contar con un sitio web que realmente refleja quiénes somos y lo que ofrecemos. Ahora nuestros clientes nos perciben como una empresa seria, cercana e innovadora."`,
      clientName: 'Álvaro Javier Uribe',
      clientRole: 'Fundador y Gerente General'
    },
    {
      id: 2,
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
      id: 3,
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
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-background">
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
              {caseStudies?.map((caseStudy, index) => (
                <button
                  key={caseStudy?.id}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCase === index
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-gilroy font-bold text-secondary">{caseStudy?.client}</div>
                    <div className="text-sm text-text-secondary">{caseStudy?.industry}</div>
                    <div className="text-xs text-gray-300 font-medium">{caseStudy?.service}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-card-elevated overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={currentCase?.image}
                  alt={`Caso de estudio ${currentCase?.client}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="AlertCircle" size={20} className="text-error mr-2" />
                        Desafío
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {currentCase?.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="text-warning mr-2" />
                        Solución
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {currentCase?.solution}
                      </p>
                    </div>

                  </div>

                  <div className="space-y-6 flex flex-col justify-end">
                    <div className="space-y-3">
                      <Button
                        variant="default"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                        className="bg-primary text-primary-foreground hover:bg-accent"
                      >
                        Solicitar Caso Similar
                      </Button>
                      {currentCase?.website && (
                        <Button
                          asChild
                          variant="secondary"
                          fullWidth
                          iconName="ExternalLink"
                          iconPosition="left"
                          className=""
                        >
                          <a href={currentCase?.website} target="_blank" rel="noopener noreferrer">
                            Ver sitio web
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-muted rounded-xl p-6">
                    <h4 className="text-lg font-gilroy font-bold text-secondary mb-4 flex items-center">
                      <Icon name="MessageSquare" size={20} className="text-gray-500 mr-2" />
                      Testimonio
                    </h4>
                    <blockquote className="text-text-secondary italic leading-relaxed mb-4">
                      {currentCase?.testimonial}
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary flex items-center flex-wrap">
                          <span>{currentCase?.clientName}</span>
                        </div>
                        <div className="text-sm text-text-secondary">{currentCase?.clientRole}</div>
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