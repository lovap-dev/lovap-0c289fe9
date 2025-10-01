import React from 'react';

const ProcessBenefits = () => {
  const benefits = [
    {
      image: 'cronograma_garantizado.png',
      title: 'Cronograma Garantizado',
      description: 'Cumplimos los plazos prometidos o trabajamos sin costo adicional',
    },
    {
      image: 'calidad_asegurada.png',
      title: 'Calidad Asegurada',
      description: '30 días de garantía con revisiones ilimitadas incluidas',
    },
    {
      image: 'equipo_dedicado.png',
      title: 'Equipo Dedicado',
      description: 'Profesionales multidisciplinarios asignados exclusivamente a tu proyecto',
    },
    {
      image: 'soporte_24.png',
      title: 'Soporte 24/7',
      description: 'Comunicación directa con el equipo durante todo el proceso',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-gilroy font-bold text-secondary">
            Beneficios de Nuestro Proceso
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-card rounded-2xl p-6 shadow-card">
              <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={`/images/${benefit.image}`}
                  alt={benefit.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-gilroy font-semibold text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-primary/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBenefits;
