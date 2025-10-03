import React, { useState } from 'react';
import { 
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en las próximas 24 horas.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
        urgency: ''
      });
    }, 2000);
  };

  const projectTypes = [
    'Landing Page',
    'Sitio Corporativo',
    'Desarrollo a la Medida',
    'Rediseño de sitio existente',
    'E-commerce',
    'Aplicación Web',
    'Consultoría Digital',
    'Otro'
  ];

  const budgetRanges = [
    '$5,000 - $15,000 USD',
    '$15,000 - $30,000 USD',
    '$30,000 - $50,000 USD',
    '$50,000 - $100,000 USD',
    '$100,000+ USD',
    'Por definir'
  ];

  return (
    
    <section className="section-padding bg-gray-50 min-h-[900px] py-20 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-gilroy text-secondary leading-tight">
              Cuéntanos cómo
              <br />
              <span className="text-primary">
                podemos ayudarte
              </span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed font-inter">
              Recibe una propuesta personalizada para tu proyecto. 
              La consulta inicial es completamente gratuita y sin compromiso.
            </p>
            
            {/* Quick Benefits */}
            <div className="space-y-4">
              {[
                'Respuesta en menos de 24 horas',
                'Consulta inicial gratuita',
                'Propuesta técnica detallada',
                'Equipo especializado'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-text-secondary font-inter">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card-strong border border-border">
            <h3 className="text-2xl font-bold text-secondary mb-6 font-gilroy">
              Solicitar propuesta
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border text-foreground"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border text-foreground"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border text-foreground"
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
              </div>

              {/* Project Type and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-sm focus:ring-2 focus:ring-ring focus:border-primary text-foreground font-inter"
                  >
                    <option value="">Selecciona un tipo</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-secondary mb-2 font-inter">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-sm focus:ring-2 focus:ring-ring focus:border-primary text-foreground font-inter"
                  >
                    <option value="">Selecciona un rango</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2 font-inter">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-background border-border text-foreground"
                  placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-xl font-semibold transition-all duration-300 font-gilroy shadow-lg shadow-primary/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Solicitar propuesta gratuita
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;