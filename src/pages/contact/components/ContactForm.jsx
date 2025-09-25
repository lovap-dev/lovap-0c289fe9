import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactReason: '',
    budget: '',
    timeline: '',
    marketingConsent: false,
    privacyConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactReasons = [
    { value: 'quote', label: 'Solicitar Cotización' },
    { value: 'consultation', label: 'Consultoría Estratégica' },
    { value: 'support', label: 'Soporte Técnico' },
    { value: 'partnership', label: 'Oportunidad de Asociación' },
    { value: 'career', label: 'Oportunidades Laborales' },
    { value: 'media', label: 'Consulta de Medios' },
    { value: 'other', label: 'Otro' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Menos de €5,000' },
    { value: '5k-15k', label: '€5,000 - €15,000' },
    { value: '15k-30k', label: '€15,000 - €30,000' },
    { value: '30k-50k', label: '€30,000 - €50,000' },
    { value: 'over-50k', label: 'Más de €50,000' },
    { value: 'discuss', label: 'Prefiero discutirlo' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgente (1-2 semanas)' },
    { value: 'soon', label: 'Pronto (1 mes)' },
    { value: 'quarter', label: 'Este trimestre' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData?.company?.trim()) {
      newErrors.company = 'El nombre de la empresa es requerido';
    }

    if (!formData?.subject?.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'El mensaje debe tener al menos 20 caracteres';
    }

    if (!formData?.contactReason) {
      newErrors.contactReason = 'Selecciona el motivo de contacto';
    }

    if (!formData?.privacyConsent) {
      newErrors.privacyConsent = 'Debes aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would submit to backend
      alert('¡Gracias por tu mensaje! Te contactaremos en las próximas 24 horas.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        contactReason: '',
        budget: '',
        timeline: '',
        marketingConsent: false,
        privacyConsent: false
      });
      
    } catch (error) {
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-700 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-4">
            Hablemos de Tu
            <span className="text-primary block">Próximo Proyecto</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Completa el formulario y nuestro equipo te contactará en las próximas 24 horas para discutir cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nombre Completo"
                type="text"
                placeholder="Tu nombre"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="tu@empresa.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Teléfono"
                type="tel"
                placeholder="+34 600 123 456"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                description="Opcional, para contacto más rápido"
              />
              <Input
                label="Empresa"
                type="text"
                placeholder="Tu Empresa S.L."
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
                error={errors?.company}
                required
              />
            </div>

            {/* Project Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Motivo de Contacto"
                options={contactReasons}
                value={formData?.contactReason}
                onChange={(value) => handleInputChange('contactReason', value)}
                error={errors?.contactReason}
                required
              />
              <Input
                label="Asunto"
                type="text"
                placeholder="Ej: Nuevo sitio web corporativo"
                value={formData?.subject}
                onChange={(e) => handleInputChange('subject', e?.target?.value)}
                error={errors?.subject}
                required
              />
            </div>

            {/* Optional Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Presupuesto Estimado"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                description="Opcional, nos ayuda a preparar mejor la propuesta"
              />
              <Select
                label="Cronograma Deseado"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                description="Opcional, cuándo te gustaría comenzar"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Mensaje *
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows="5"
                placeholder="Cuéntanos sobre tu proyecto, objetivos, desafíos actuales, o cualquier pregunta específica que tengas..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
              />
              {errors?.message && (
                <p className="mt-1 text-sm text-error">{errors?.message}</p>
              )}
              <p className="mt-1 text-xs text-text-secondary">
                Mínimo 20 caracteres. Mientras más detalles compartas, mejor podremos ayudarte.
              </p>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-3 pt-4 border-t border-border">
              <Checkbox
                label="Acepto recibir comunicaciones de marketing y actualizaciones de Lovap Corporate"
                checked={formData?.marketingConsent}
                onChange={(e) => handleInputChange('marketingConsent', e?.target?.checked)}
                description="Puedes cancelar la suscripción en cualquier momento"
              />
              <Checkbox
                label="Acepto la Política de Privacidad y Términos de Servicio *"
                checked={formData?.privacyConsent}
                onChange={(e) => handleInputChange('privacyConsent', e?.target?.checked)}
                error={errors?.privacyConsent}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando Mensaje...' : 'Enviar Mensaje'}
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <h3 className="font-gilroy font-semibold text-secondary mb-2">Respuesta Rápida</h3>
            <p className="text-sm text-text-secondary">Te contactaremos en las próximas 24 horas</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-green-600" />
            </div>
            <h3 className="font-gilroy font-semibold text-secondary mb-2">Información Segura</h3>
            <p className="text-sm text-text-secondary">Tus datos están protegidos y son confidenciales</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} className="text-purple-600" />
            </div>
            <h3 className="font-gilroy font-semibold text-secondary mb-2">Sin Compromiso</h3>
            <p className="text-sm text-text-secondary">Consulta gratuita sin obligación de contratación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;