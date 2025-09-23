import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const offices = [
    {
      id: 'madrid',
      city: 'Madrid',
      country: 'España',
      isHeadquarters: true,
      address: 'Calle Serrano 123, 4º Planta\n28006 Madrid, España',
      phone: '+34 900 123 456',
      email: 'madrid@lovapcorporate.com',
      hours: 'Lun-Vie: 9:00-18:00 CET\nSáb: 10:00-14:00 CET',
      timezone: 'CET (UTC+1)',
      lat: 40.4168,
      lng: -3.7038,
      services: ['Desarrollo Web', 'Consultoría Estratégica', 'Diseño UX/UI', 'E-commerce'],
      team: '12 especialistas'
    },
    {
      id: 'barcelona',
      city: 'Barcelona',
      country: 'España',
      isHeadquarters: false,
      address: 'Passeig de Gràcia 85, 2º\n08008 Barcelona, España',
      phone: '+34 900 123 457',
      email: 'barcelona@lovapcorporate.com',
      hours: 'Lun-Vie: 9:00-18:00 CET\nSáb: 10:00-14:00 CET',
      timezone: 'CET (UTC+1)',
      lat: 41.3851,
      lng: 2.1734,
      services: ['Desarrollo Web', 'Marketing Digital', 'Branding', 'SEO'],
      team: '8 especialistas'
    },
    {
      id: 'valencia',
      city: 'Valencia',
      country: 'España',
      isHeadquarters: false,
      address: 'Calle Colón 45, 3º\n46004 Valencia, España',
      phone: '+34 900 123 458',
      email: 'valencia@lovapcorporate.com',
      hours: 'Lun-Vie: 9:00-18:00 CET',
      timezone: 'CET (UTC+1)',
      lat: 39.4699,
      lng: -0.3763,
      services: ['Desarrollo Web', 'Aplicaciones Móviles', 'Integración API'],
      team: '6 especialistas'
    }
  ];

  const handleGetDirections = (office) => {
    const query = encodeURIComponent(office?.address?.replace('\n', ', '));
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleCallOffice = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailOffice = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MapPin" size={16} />
            <span>Nuestras Oficinas</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-6">
            Estamos Cerca de Ti en
            <span className="text-primary block">Toda España</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Con oficinas estratégicamente ubicadas en las principales ciudades españolas, ofrecemos atención personalizada y soporte local para todos nuestros clientes.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices?.map((office) => (
            <div
              key={office?.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                office?.isHeadquarters ? 'ring-2 ring-primary ring-opacity-20' : ''
              }`}
            >
              {/* Map */}
              <div className="h-48 relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office?.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office?.lat},${office?.lng}&z=14&output=embed`}
                  className="border-0"
                />
                {office?.isHeadquarters && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Sede Principal
                  </div>
                )}
              </div>

              {/* Office Info */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-gilroy font-bold text-secondary">
                      {office?.city}
                    </h3>
                    <p className="text-sm text-text-secondary">{office?.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{office?.team}</div>
                    <div className="text-xs text-text-secondary">Equipo local</div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div className="text-sm text-text-secondary whitespace-pre-line">
                      {office?.address}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-text-secondary">{office?.phone}</div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-text-secondary">{office?.email}</div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div className="text-sm text-text-secondary whitespace-pre-line">
                      {office?.hours}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" size={16} className="text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-text-secondary">{office?.timezone}</div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-secondary mb-2">Servicios Disponibles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office?.services?.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => handleCallOffice(office?.phone)}
                  >
                    Llamar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Navigation"
                    iconPosition="left"
                    onClick={() => handleGetDirections(office)}
                  >
                    Cómo Llegar
                  </Button>
                </div>

                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="Mail"
                  iconPosition="left"
                  onClick={() => handleEmailOffice(office?.email)}
                  className="mt-3"
                >
                  Enviar Email
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Coverage */}
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-gilroy font-bold mb-4">
                Cobertura Internacional
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Aunque nuestras oficinas físicas están en España, trabajamos con clientes de toda Europa y América Latina. Ofrecemos soporte remoto completo y reuniones virtuales en múltiples zonas horarias.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-gilroy font-bold text-primary">15+</div>
                  <div className="text-sm text-white/70">Países Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-gilroy font-bold text-primary">24/7</div>
                  <div className="text-sm text-white/70">Soporte Crítico</div>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                iconName="Globe"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                Consultar Cobertura
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <h4 className="font-gilroy font-semibold">Horarios Flexibles</h4>
                </div>
                <p className="text-sm text-white/80">
                  Adaptamos nuestros horarios de reunión a tu zona horaria para mayor comodidad.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Video" size={20} className="text-primary" />
                  <h4 className="font-gilroy font-semibold">Reuniones Virtuales</h4>
                </div>
                <p className="text-sm text-white/80">
                  Plataformas seguras para reuniones, presentaciones y seguimiento de proyectos.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Languages" size={20} className="text-primary" />
                  <h4 className="font-gilroy font-semibold">Soporte Multiidioma</h4>
                </div>
                <p className="text-sm text-white/80">
                  Atención en español, inglés y portugués para mejor comunicación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;