import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectType: '',
    projectUrgency: '',
    
    // Step 2: Project Details
    projectName: '',
    projectDescription: '',
    targetAudience: '',
    keyFeatures: [],
    
    // Step 3: Technical Requirements
    designPreference: '',
    integrations: [],
    contentManagement: '',
    
    // Step 4: Budget & Timeline
    budget: '',
    timeline: '',
    launchDate: '',
    
    // Step 5: Contact Information
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    companyWebsite: '',
    preferredContact: '',
    
    // Additional
    additionalInfo: '',
    marketingConsent: false,
    privacyConsent: false
  });

  const [errors, setErrors] = useState({});

  const projectTypes = [
    { value: 'landing', label: 'Landing Page de Conversión' },
    { value: 'corporate', label: 'Sitio Web Corporativo' },
    { value: 'ecommerce', label: 'Tienda Online / E-commerce' },
    { value: 'custom', label: 'Desarrollo Personalizado' },
    { value: 'redesign', label: 'Rediseño de Sitio Existente' },
    { value: 'maintenance', label: 'Mantenimiento y Soporte' }
  ];

  const urgencyOptions = [
    { value: 'asap', label: 'Lo antes posible (1-2 semanas)' },
    { value: 'month', label: 'En el próximo mes' },
    { value: 'quarter', label: 'En los próximos 3 meses' },
    { value: 'flexible', label: 'Flexible, cuando sea mejor' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '€5,000 - €10,000' },
    { value: '10k-25k', label: '€10,000 - €25,000' },
    { value: '25k-50k', label: '€25,000 - €50,000' },
    { value: '50k+', label: '€50,000+' },
    { value: 'discuss', label: 'Prefiero discutirlo' }
  ];

  const featureOptions = [
    { value: 'responsive', label: 'Diseño Responsive' },
    { value: 'seo', label: 'Optimización SEO' },
    { value: 'analytics', label: 'Analytics y Tracking' },
    { value: 'forms', label: 'Formularios de Contacto' },
    { value: 'blog', label: 'Blog / Sistema de Noticias' },
    { value: 'multilingual', label: 'Sitio Multiidioma' },
    { value: 'ecommerce', label: 'Funcionalidad E-commerce' },
    { value: 'booking', label: 'Sistema de Reservas' },
    { value: 'membership', label: 'Área de Miembros' },
    { value: 'api', label: 'Integraciones API' }
  ];

  const integrationOptions = [
    { value: 'crm', label: 'CRM (Salesforce, HubSpot)' },
    { value: 'email', label: 'Email Marketing (Mailchimp, Klaviyo)' },
    { value: 'payment', label: 'Pasarelas de Pago (Stripe, PayPal)' },
    { value: 'analytics', label: 'Analytics (Google, Facebook)' },
    { value: 'social', label: 'Redes Sociales' },
    { value: 'erp', label: 'Sistema ERP' },
    { value: 'inventory', label: 'Gestión de Inventario' },
    { value: 'other', label: 'Otras integraciones' }
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

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev?.[field], value]
        : prev?.[field]?.filter(item => item !== value)
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData?.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
        if (!formData?.projectUrgency) newErrors.projectUrgency = 'Selecciona la urgencia';
        break;
      case 2:
        if (!formData?.projectName) newErrors.projectName = 'Ingresa el nombre del proyecto';
        if (!formData?.projectDescription) newErrors.projectDescription = 'Describe tu proyecto';
        break;
      case 5:
        if (!formData?.contactName) newErrors.contactName = 'Ingresa tu nombre';
        if (!formData?.contactEmail) newErrors.contactEmail = 'Ingresa tu email';
        if (!formData?.companyName) newErrors.companyName = 'Ingresa el nombre de tu empresa';
        if (!formData?.privacyConsent) newErrors.privacyConsent = 'Debes aceptar la política de privacidad';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateStep(5)) {
      // In real app, this would submit to backend
      alert('¡Gracias! Tu solicitud de cotización ha sido enviada. Te contactaremos en las próximas 24 horas.');
      console.log('Form submitted:', formData);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-gilroy font-semibold text-secondary mb-4">
                ¿Qué tipo de proyecto necesitas?
              </h3>
              <Select
                label="Tipo de Proyecto"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                error={errors?.projectType}
                required
              />
            </div>
            <div>
              <Select
                label="¿Cuál es la urgencia de tu proyecto?"
                options={urgencyOptions}
                value={formData?.projectUrgency}
                onChange={(value) => handleInputChange('projectUrgency', value)}
                error={errors?.projectUrgency}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-gilroy font-semibold text-secondary mb-4">
                Cuéntanos sobre tu proyecto
              </h3>
              <Input
                label="Nombre del Proyecto"
                type="text"
                placeholder="Ej: Nuevo sitio web para mi empresa"
                value={formData?.projectName}
                onChange={(e) => handleInputChange('projectName', e?.target?.value)}
                error={errors?.projectName}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Descripción del Proyecto *
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows="4"
                placeholder="Describe tu proyecto, objetivos, y lo que esperas lograr..."
                value={formData?.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
              />
              {errors?.projectDescription && (
                <p className="mt-1 text-sm text-error">{errors?.projectDescription}</p>
              )}
            </div>
            <div>
              <Input
                label="Audiencia Objetivo"
                type="text"
                placeholder="Ej: Empresarios, profesionales, consumidores finales..."
                value={formData?.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e?.target?.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-3">
                Funcionalidades Clave (selecciona todas las que apliquen)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions?.map((feature) => (
                  <Checkbox
                    key={feature?.value}
                    label={feature?.label}
                    checked={formData?.keyFeatures?.includes(feature?.value)}
                    onChange={(e) => handleArrayChange('keyFeatures', feature?.value, e?.target?.checked)}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-gilroy font-semibold text-secondary mb-4">
                Preferencias Técnicas
              </h3>
              <Select
                label="Preferencia de Diseño"
                options={[
                  { value: 'modern', label: 'Moderno y Minimalista' },
                  { value: 'corporate', label: 'Corporativo y Profesional' },
                  { value: 'creative', label: 'Creativo y Único' },
                  { value: 'classic', label: 'Clásico y Elegante' },
                  { value: 'discuss', label: 'Prefiero discutirlo' }
                ]}
                value={formData?.designPreference}
                onChange={(value) => handleInputChange('designPreference', value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-3">
                Integraciones Necesarias
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {integrationOptions?.map((integration) => (
                  <Checkbox
                    key={integration?.value}
                    label={integration?.label}
                    checked={formData?.integrations?.includes(integration?.value)}
                    onChange={(e) => handleArrayChange('integrations', integration?.value, e?.target?.checked)}
                  />
                ))}
              </div>
            </div>
            <div>
              <Select
                label="¿Necesitas gestión de contenido?"
                options={[
                  { value: 'cms', label: 'Sí, necesito CMS fácil de usar' },
                  { value: 'static', label: 'No, contenido estático está bien' },
                  { value: 'hybrid', label: 'Algunas secciones editables' },
                  { value: 'discuss', label: 'No estoy seguro' }
                ]}
                value={formData?.contentManagement}
                onChange={(value) => handleInputChange('contentManagement', value)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-gilroy font-semibold text-secondary mb-4">
                Presupuesto y Cronograma
              </h3>
              <Select
                label="Rango de Presupuesto"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                description="Esto nos ayuda a preparar una propuesta adecuada"
              />
            </div>
            <div>
              <Select
                label="Cronograma Preferido"
                options={[
                  { value: '2-4weeks', label: '2-4 semanas' },
                  { value: '1-2months', label: '1-2 meses' },
                  { value: '2-3months', label: '2-3 meses' },
                  { value: '3+months', label: 'Más de 3 meses' },
                  { value: 'flexible', label: 'Flexible' }
                ]}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
              />
            </div>
            <div>
              <Input
                label="Fecha de Lanzamiento Deseada"
                type="date"
                value={formData?.launchDate}
                onChange={(e) => handleInputChange('launchDate', e?.target?.value)}
                description="Si tienes una fecha específica en mente"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-gilroy font-semibold text-secondary mb-4">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Nombre Completo"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData?.contactName}
                  onChange={(e) => handleInputChange('contactName', e?.target?.value)}
                  error={errors?.contactName}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={formData?.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e?.target?.value)}
                  error={errors?.contactEmail}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Teléfono"
                type="tel"
                placeholder="+34 600 123 456"
                value={formData?.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e?.target?.value)}
              />
              <Select
                label="Método de Contacto Preferido"
                options={[
                  { value: 'email', label: 'Email' },
                  { value: 'phone', label: 'Teléfono' },
                  { value: 'whatsapp', label: 'WhatsApp' },
                  { value: 'any', label: 'Cualquiera' }
                ]}
                value={formData?.preferredContact}
                onChange={(value) => handleInputChange('preferredContact', value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Nombre de la Empresa"
                type="text"
                placeholder="Tu Empresa S.L."
                value={formData?.companyName}
                onChange={(e) => handleInputChange('companyName', e?.target?.value)}
                error={errors?.companyName}
                required
              />
              <Input
                label="Sitio Web Actual"
                type="url"
                placeholder="https://tuempresa.com"
                value={formData?.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e?.target?.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Información Adicional
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows="3"
                placeholder="¿Hay algo más que deberíamos saber sobre tu proyecto?"
                value={formData?.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
              />
            </div>
            <div className="space-y-3">
              <Checkbox
                label="Acepto recibir comunicaciones de marketing de Lovap Corporate"
                checked={formData?.marketingConsent}
                onChange={(e) => handleInputChange('marketingConsent', e?.target?.checked)}
              />
              <Checkbox
                label="Acepto la Política de Privacidad y Términos de Servicio *"
                checked={formData?.privacyConsent}
                onChange={(e) => handleInputChange('privacyConsent', e?.target?.checked)}
                error={errors?.privacyConsent}
                required
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>Cotización Personalizada</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-4">
            Solicita Tu Cotización
            <span className="text-primary block">Paso a Paso</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Completa este formulario detallado para recibir una propuesta personalizada con cronograma y presupuesto específico.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-secondary">
              Paso {currentStep} de 5
            </span>
            <span className="text-sm text-text-secondary">
              {Math.round((currentStep / 5) * 100)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Anterior
              </Button>

              {currentStep < 5 ? (
                <Button
                  type="button"
                  variant="default"
                  onClick={nextStep}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Siguiente
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="default"
                  iconName="Send"
                  iconPosition="right"
                >
                  Enviar Solicitud
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-green-600" />
              <span>Información 100% segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-blue-600" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-purple-600" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;