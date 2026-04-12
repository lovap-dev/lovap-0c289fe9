import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const TOTAL_STEPS = 2;

const WHATSAPP_PHONE = '573006719235';

const stepMeta = [
  { id: 1, label: 'Proyecto', short: 'Qué necesitas' },
  { id: 2, label: 'Contacto', short: 'Cómo te respondemos' },
];

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectDescription: '',
    budget: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});

  const projectTypes = [
    { value: 'landing', label: 'Landing Page de Conversión' },
    { value: 'corporate', label: 'Sitio Web Corporativo' },
    { value: 'ecommerce', label: 'Tienda Online / E-commerce' },
    { value: 'custom', label: 'Desarrollo Personalizado' },
    { value: 'redesign', label: 'Rediseño de Sitio Existente' },
    { value: 'maintenance', label: 'Mantenimiento y Soporte' },
  ];

  const budgetRanges = [
    { value: '500k-1m', label: '$500.000 - $1.000.000 COP' },
    { value: '1m-3m', label: '$1.000.000 - $3.000.000 COP' },
    { value: '3m-5m', label: '$3.000.000 - $5.000.000 COP' },
    { value: '5m-10m', label: '$5.000.000 - $10.000.000 COP' },
    { value: '10m+', label: 'Más de $10.000.000 COP' },
    { value: 'discuss', label: 'Prefiero discutirlo' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
        if (!formData.projectDescription || formData.projectDescription.trim().length < 10) {
          newErrors.projectDescription = 'Describe tu proyecto con al menos 10 caracteres';
        }
        if (!formData.budget) newErrors.budget = 'Selecciona un rango de presupuesto';
        break;
      case 2:
        if (!formData.contactName || formData.contactName.trim().length < 2) {
          newErrors.contactName = 'Ingresa tu nombre';
        }
        if (!formData.contactEmail) {
          newErrors.contactEmail = 'Ingresa tu email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
          newErrors.contactEmail = 'Ingresa un email válido';
        }
        if (formData.contactPhone.trim() && formData.contactPhone.trim().length < 7) {
          newErrors.contactPhone = 'Revisa el número o déjalo vacío';
        }
        if (!formData.privacyConsent) {
          newErrors.privacyConsent = 'Debes aceptar la política de privacidad';
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const buildWhatsappQuoteUrl = (data) => {
    const typeLabel = projectTypes.find((o) => o.value === data.projectType)?.label ?? data.projectType;
    const budgetLabel = budgetRanges.find((o) => o.value === data.budget)?.label ?? data.budget;
    const lines = [
      'Hola *Lovap*, quiero solicitar una cotización desde la web.',
      '',
      `*Nombre:* ${data.contactName.trim()}`,
      `*Email:* ${data.contactEmail.trim()}`,
      ...(data.contactPhone.trim() ? [`*Teléfono / WhatsApp:* ${data.contactPhone.trim()}`] : []),
      ...(data.companyName.trim() ? [`*Empresa o marca:* ${data.companyName.trim()}`] : []),
      `*Tipo de proyecto:* ${typeLabel}`,
      `*Presupuesto orientativo:* ${budgetLabel}`,
      '',
      '*Descripción del proyecto:*',
      data.projectDescription.trim(),
      '',
      '_Acepto la política de privacidad y términos del servicio._',
    ];
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    const url = buildWhatsappQuoteUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-gilroy font-bold text-secondary mb-1">
                Cuéntanos qué necesitas
              </h3>
              <p className="text-sm text-text-secondary font-inter mb-5">
                Con esto armamos una propuesta acorde a tu proyecto.
              </p>
              <Select
                label="Tipo de proyecto *"
                options={projectTypes}
                value={formData.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                error={errors.projectType}
                required
                placeholder="Selecciona una opción"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2 font-inter">
                Descripción breve *
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary resize-none font-inter transition-all placeholder:text-text-secondary/50 min-h-[120px]"
                rows={4}
                maxLength={500}
                placeholder="Objetivo del sitio, público y cualquier detalle útil…"
                value={formData.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
              />
              {errors.projectDescription && (
                <p className="mt-2 text-sm text-error font-inter">{errors.projectDescription}</p>
              )}
              <p className="mt-2 text-xs text-text-secondary font-inter">
                Mínimo 10 caracteres · {formData.projectDescription.length}/500
              </p>
            </div>
            <div>
              <Select
                label="Presupuesto orientativo *"
                options={budgetRanges}
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                error={errors.budget}
                required
                placeholder="Selecciona un rango"
              />
              <p className="mt-2 text-xs text-text-secondary font-inter">
                Nos ayuda a proponerte opciones realistas; si no estás seguro, elige &quot;Prefiero discutirlo&quot;.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-gilroy font-bold text-secondary mb-1">
                ¿Cómo te contactamos?
              </h3>
              <p className="text-sm text-text-secondary font-inter mb-5">
                Solo lo necesario para responderte. El teléfono es opcional. Al enviar la solicitud se abrirá WhatsApp con
                este resumen para que solo tengas que pulsar enviar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Nombre *"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  error={errors.contactName}
                  required
                />
                <Input
                  label="Email *"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  error={errors.contactEmail}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Teléfono o WhatsApp"
                type="tel"
                placeholder="+57 321 000 0000 (opcional)"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                error={errors.contactPhone}
              />
              <Input
                label="Empresa o marca"
                type="text"
                placeholder="Opcional"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
              />
            </div>
            <div className="space-y-3 pt-2 border-t border-border">
              <Checkbox
                label="Acepto la Política de Privacidad y los términos del servicio *"
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

  const progressPct = (currentStep / TOTAL_STEPS) * 100;

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Icon name="Calculator" size={16} />
            <span>Cotización</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-3">
            Solicita tu cotización
            <span className="text-primary block mt-1">en dos pasos</span>
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto font-inter leading-relaxed">
            Menos campos, misma información útil: proyecto y cómo responderte. Al enviar se abre{' '}
            <strong className="font-medium text-secondary">WhatsApp</strong> con un mensaje listo con tus datos.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            {stepMeta.map((step, index) => {
              const done = currentStep > step.id;
              const active = currentStep === step.id;
              return (
                <React.Fragment key={step.id}>
                  <div
                    className={`flex-1 flex items-center gap-3 rounded-xl border-2 px-3 py-3 transition-colors ${
                      active
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : done
                          ? 'border-primary/40 bg-card'
                          : 'border-border bg-card/50 opacity-80'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold font-gilroy ${
                        active
                          ? 'bg-primary text-primary-foreground'
                          : done
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-text-secondary'
                      }`}
                    >
                      {done ? <Icon name="Check" size={18} /> : step.id}
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-medium text-text-secondary font-inter uppercase tracking-wide">
                        Paso {step.id}
                      </p>
                      <p className="text-sm font-semibold text-secondary font-gilroy truncate">
                        {step.label}
                      </p>
                      <p className="text-xs text-text-secondary font-inter truncate">
                        {step.short}
                      </p>
                    </div>
                  </div>
                  {index < stepMeta.length - 1 && (
                    <div
                      className={`hidden sm:block w-8 h-0.5 shrink-0 rounded-full ${
                        currentStep > step.id ? 'bg-primary' : 'bg-border'
                      }`}
                      aria-hidden
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-medium text-secondary font-gilroy">
              Paso {currentStep} de {TOTAL_STEPS}
            </span>
            <span className="text-text-secondary font-inter">{Math.round(progressPct)}% listo</span>
          </div>
          <div className="h-2 rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/85 transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-card-strong border border-border p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  className="sm:min-w-0 text-text-secondary hover:text-secondary"
                >
                  Volver
                </Button>
                <div className="flex flex-col sm:flex-row gap-3 sm:ml-auto w-full sm:w-auto">
                  {currentStep < TOTAL_STEPS ? (
                    <Button
                      type="button"
                      variant="default"
                      size="xl"
                      onClick={nextStep}
                      iconName="ArrowRight"
                      iconPosition="right"
                      iconSize={22}
                      fullWidth
                      className="sm:min-w-[240px] rounded-xl font-gilroy font-semibold text-base shadow-lg shadow-primary/25 border-2 border-primary/40 ring-2 ring-primary/15 hover:ring-primary/30 hover:shadow-xl hover:brightness-[1.03] active:scale-[0.98] transition-all duration-200"
                    >
                      Continuar
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="default"
                      size="xl"
                      iconName="MessageCircle"
                      iconPosition="right"
                      iconSize={22}
                      fullWidth
                      className="sm:min-w-[260px] rounded-xl font-gilroy font-semibold text-base bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 border-2 border-primary/40 ring-2 ring-primary/15 hover:ring-primary/30 hover:shadow-xl hover:brightness-[1.03] active:scale-[0.98] transition-all duration-200"
                    >
                      Abrir WhatsApp con mi solicitud
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-text-secondary font-inter">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={18} className="text-success shrink-0" />
              <span>Datos tratados con cuidado</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} className="text-primary shrink-0" />
              <span>Respuesta el mismo día</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={18} className="text-primary shrink-0" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
