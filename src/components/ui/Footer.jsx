import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/images/LOGO-04.webp"
                alt="Lovap Corporate logo"
                className="h-10 w-auto"
                loading="eager"
                width="140"
                height="40"
              />
              <span className="sr-only">Lovap Corporate</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Transformamos ideas en experiencias digitales que impulsan el crecimiento empresarial.
              Más de 150 empresas confían en nosotros para sus proyectos más importantes.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-white/80">Disponible 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-white/80">Respuesta en menos de 1h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-gilroy font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {[
                'Landing Pages',
                'Sitios Corporativos',
                'Desarrollo a la medida',
                'Optimización SEO',
                'Mantenimiento Web',
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-gilroy font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <div className="text-white/60 mb-1">Email</div>
                <a href="mailto:lovap.dev@gmail.com" className="text-white/80 hover:text-primary transition-colors">
                  lovap.dev@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <div className="text-white/60 mb-1">Teléfono</div>
                <a href="tel:+573006719235" className="text-white/80 hover:text-primary transition-colors">
                  +57 300 671 9235
                </a>
              </div>
              <div className="text-sm">
                <div className="text-white/60 mb-1">Horario</div>
                <div className="text-white/80">
                  Lun - Vie: 7:00 - 18:00
                  <br />
                  Sáb: 07:00 - 14:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 lg:mb-0">
            © {new Date().getFullYear()} Lovap Corporate. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
