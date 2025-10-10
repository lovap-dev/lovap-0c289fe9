import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Type & Description
    projectType: '',
    projectDescription: '',
    targetAudience: '',
    
    // Step 2: Technical Requirements & Budget
    designPreference: '',
    budget: '',
    launchDate: '',
    
    // Step 3: Contact Information
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    companyWebsite: '',
    preferredContact: '',
    additionalInfo: '',
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

  const budgetRanges = [
    { value: '500k-1m', label: '$500.000 - $1.000.000 COP' },
    { value: '1m-3m', label: '$1.000.000 - $3.000.000 COP' },
    { value: '3m-5m', label: '$3.000.000 - $5.000.000 COP' },
    { value: '5m-10m', label: '$5.000.000 - $10.000.000 COP' },
    { value: '10m+', label: 'Más de $10.000.000 COP' },
    { value: 'discuss', label: 'Prefiero discutirlo' }
  ];

  const designPreferences = [
    { value: 'modern', label: 'Moderno y Minimalista' },
    { value: 'corporate', label: 'Corporativo y Profesional' },
    { value: 'creative', label: 'Creativo y Único' },
    { value: 'classic', label: 'Clásico y Elegante' },
    { value: 'discuss', label: 'Prefiero discutirlo' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'any', label: 'Cualquiera' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
        if (!formData.projectDescription || formData.projectDescription.trim().length < 20) {
          newErrors.projectDescription = 'Describe tu proyecto con al menos 20 caracteres';
        }
        break;
      case 2:
        if (!formData.budget) newErrors.budget = 'Selecciona un rango de presupuesto';
        break;
      case 3:
        if (!formData.contactName || formData.contactName.trim().length < 2) {
          newErrors.contactName = 'Ingresa tu nombre completo';
        }
        if (!formData.contactEmail) {
          newErrors.contactEmail = 'Ingresa tu email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
          newErrors.contactEmail = 'Ingresa un email válido';
        }
        if (!formData.contactPhone || formData.contactPhone.trim().length < 7) {
          newErrors.contactPhone = 'Ingresa un número de teléfono válido';
        }
        if (!formData.companyName || formData.companyName.trim().length < 2) {
          newErrors.companyName = 'Ingresa el nombre de tu empresa';
        }
        if (!formData.privacyConsent) {
          newErrors.privacyConsent = 'Debes aceptar la política de privacidad';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
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
              <h3 className="text-xl font-gilroy font-bold text-secondary mb-6">
                Cuéntanos sobre tu proyecto
              </h3>
              <Select
                label="Tipo de Proyecto *"
                options={projectTypes}
                value={formData.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                error={errors.projectType}
                required
                placeholder="Selecciona el tipo de proyecto que necesitas"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2 font-inter">
                Descripción del Proyecto *
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none font-inter text-foreground bg-background transition-all"
                rows="5"
                placeholder="Describe tu proyecto, objetivos principales y lo que esperas lograr. Mínimo 20 caracteres."
                value={formData.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
              />
              {errors.projectDescription && (
                <p className="mt-2 text-sm text-error font-inter">{errors.projectDescription}</p>
              )}
              <p className="mt-2 text-xs text-text-secondary font-inter">
                {formData.projectDescription.length}/500 caracteres
              </p>
            </div>
            <div>
              <Input
                label="Audiencia Objetivo"
                type="text"
                placeholder="Ej: Empresarios, profesionales, consumidores finales..."
                value={formData.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                description="¿A quién está dirigido tu proyecto?"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-gilroy font-bold text-secondary mb-6">
                Preferencias y Presupuesto
              </h3>
              <Select
                label="Preferencia de Diseño"
                options={designPreferences}
                value={formData.designPreference}
                onChange={(value) => handleInputChange('designPreference', value)}
                description="¿Qué estilo te gustaría para tu proyecto?"
              />
            </div>
            <div>
              <Select
                label="Rango de Presupuesto *"
                options={budgetRanges}
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                error={errors.budget}
                required
                description="Esto nos ayuda a preparar una propuesta adecuada a tus necesidades"
              />
            </div>
            <div>
              <Input
                label="Fecha de Lanzamiento Deseada"
                type="date"
                value={formData.launchDate}
                onChange={(e) => handleInputChange('launchDate', e.target.value)}
                description="Si tienes una fecha específica en mente (opcional)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-gilroy font-bold text-secondary mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nombre Completo *"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  error={errors.contactName}
                  required
                />
                <Input
                  label="Email *"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  error={errors.contactEmail}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Teléfono *"
                type="tel"
                placeholder="+57 321 000 0000"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                error={errors.contactPhone}
                required
              />
              <Select
                label="Método de Contacto Preferido"
                options={contactMethods}
                value={formData.preferredContact}
                onChange={(value) => handleInputChange('preferredContact', value)}
                description="¿Cómo prefieres que te contactemos?"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nombre de la Empresa *"
                type="text"
                placeholder="Tu Empresa SAS"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                error={errors.companyName}
                required
              />
              <Input
                label="Sitio Web Actual"
                type="url"
                placeholder="https://tuempresa.com"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                description="Si tienes uno"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2 font-inter">
                Información Adicional
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none font-inter text-foreground bg-background transition-all"
                rows="4"
                placeholder="¿Hay algo más que deberíamos saber sobre tu proyecto?"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
              />
            </div>
            <div className="space-y-3 pt-4 border-t border-border">
              <Checkbox
                label="Acepto la Política de Privacidad y Términos de Servicio *"
                checked={formData.privacyConsent}
                onChange={(e) => handleInputChange('privacyConsent', e.target.checked)}
                error={errors.privacyConsent}
                required
              />
              {errors.privacyConsent && (
                <p className="text-sm text-error font-inter">{errors.privacyConsent}</p>
              )}
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
            <span className="text-primary block mt-1">Simple y Rápida</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-inter">
            Completa este formulario en 3 sencillos pasos y recibe una propuesta personalizada con presupuesto específico.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-secondary font-gilroy">
              Paso {currentStep} de 3
            </span>
            <span className="text-sm text-text-secondary font-inter">
              {Math.round((currentStep / 3) * 100)}% completado
            </span>
          </div>
          <div className="relative">
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
            {/* Step indicators */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-0">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    step <= currentStep ? 'bg-primary scale-125' : 'bg-muted border-2 border-border'
                  }`}
                  style={{ marginLeft: step === 1 ? '0' : '-5px', marginRight: step === 3 ? '0' : '-5px' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl shadow-card-strong border border-border p-8 md:p-10">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 pt-8 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                iconName="ArrowLeft"
                iconPosition="left"
                className="min-w-[120px]"
              >
                Anterior
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="default"
                  onClick={nextStep}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="min-w-[120px]"
                >
                  Siguiente
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="default"
                  iconName="Send"
                  iconPosition="right"
                  className="min-w-[180px] bg-gradient-to-r from-primary to-primary/90"
                >
                  Enviar Solicitud
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-text-secondary font-inter">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={18} className="text-success" />
              <span>Información 100% segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} className="text-primary" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={18} className="text-primary" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;