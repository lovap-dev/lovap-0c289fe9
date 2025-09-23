import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyVisitors: '',
    currentConversion: '',
    averageOrderValue: '',
    projectCost: '5000'
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const visitors = parseInt(formData.monthlyVisitors) || 0;
    const currentConv = parseFloat(formData.currentConversion) || 0;
    const orderValue = parseFloat(formData.averageOrderValue) || 0;
    const projectCost = parseFloat(formData.projectCost) || 0;

    // Conservative improvement estimates
    const improvementMultiplier = 2.5; // 150% improvement
    const newConversion = currentConv * improvementMultiplier;
    
    // Current monthly revenue
    const currentLeads = (visitors * currentConv) / 100;
    const currentRevenue = currentLeads * orderValue;
    
    // Projected monthly revenue
    const newLeads = (visitors * newConversion) / 100;
    const newRevenue = newLeads * orderValue;
    
    // ROI calculations
    const monthlyIncrease = newRevenue - currentRevenue;
    const yearlyIncrease = monthlyIncrease * 12;
    const roi = ((yearlyIncrease - projectCost) / projectCost) * 100;
    const breakEvenMonths = projectCost / monthlyIncrease;

    const calculatedResults = {
      currentLeads: Math.round(currentLeads),
      newLeads: Math.round(newLeads),
      currentRevenue: Math.round(currentRevenue),
      newRevenue: Math.round(newRevenue),
      monthlyIncrease: Math.round(monthlyIncrease),
      yearlyIncrease: Math.round(yearlyIncrease),
      roi: Math.round(roi),
      breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
      conversionImprovement: Math.round((improvementMultiplier - 1) * 100)
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Calculadora de 
            <span className="text-primary"> ROI</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Descubre el impacto financiero real que nuestras soluciones pueden tener en tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card-elevated">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-primary rounded-xl">
                <Icon name="Calculator" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-gilroy font-bold text-secondary">
                  Datos de tu Negocio
                </h3>
                <p className="text-text-secondary">Ingresa tus métricas actuales</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Visitantes mensuales a tu sitio web
                </label>
                <Input
                  type="number"
                  placeholder="ej: 10000"
                  value={formData.monthlyVisitors}
                  onChange={(e) => handleInputChange('monthlyVisitors', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Tasa de conversión actual (%)
                </label>
                <Input
                  type="number"
                  step="0.1"
                  placeholder="ej: 2.5"
                  value={formData.currentConversion}
                  onChange={(e) => handleInputChange('currentConversion', e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-text-secondary mt-1">
                  Porcentaje de visitantes que realizan una acción deseada
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Valor promedio por conversión (€)
                </label>
                <Input
                  type="number"
                  placeholder="ej: 150"
                  value={formData.averageOrderValue}
                  onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-text-secondary mt-1">
                  Valor monetario promedio de cada conversión
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Inversión estimada del proyecto (€)
                </label>
                <select
                  value={formData.projectCost}
                  onChange={(e) => handleInputChange('projectCost', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="2500">€2,500 - Plan Básico</option>
                  <option value="5000">€5,000 - Plan Profesional</option>
                  <option value="10000">€10,000 - Plan Enterprise</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={calculateROI}
                disabled={!formData.monthlyVisitors || !formData.currentConversion || !formData.averageOrderValue}
                iconName="TrendingUp"
                iconPosition="left"
                className="bg-primary text-primary-foreground hover:bg-accent"
              >
                Calcular ROI Proyectado
              </Button>
            </div>
          </div>

          {/* Results Panel */}
          <div className={`bg-white rounded-2xl p-8 shadow-card-elevated transition-all duration-500 ${
            showResults ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
          }`}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-success rounded-xl">
                <Icon name="Award" size={24} className="text-success-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-gilroy font-bold text-secondary">
                  Proyección de Resultados
                </h3>
                <p className="text-text-secondary">Estimaciones conservadoras</p>
              </div>
            </div>

            {showResults && results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-gilroy font-bold text-primary">
                      {results.conversionImprovement}%
                    </div>
                    <div className="text-sm text-text-secondary">Mejora en Conversión</div>
                  </div>
                  <div className="bg-success/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-gilroy font-bold text-success">
                      {results.roi}%
                    </div>
                    <div className="text-sm text-text-secondary">ROI Anual</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="text-sm text-text-secondary">Leads mensuales actuales:</span>
                    <span className="font-semibold text-secondary">{results.currentLeads}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                    <span className="text-sm text-text-secondary">Leads proyectados:</span>
                    <span className="font-semibold text-primary">+{results.newLeads}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="text-sm text-text-secondary">Ingresos mensuales actuales:</span>
                    <span className="font-semibold text-secondary">€{results.currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-success/10 rounded-xl">
                    <span className="text-sm text-text-secondary">Incremento mensual proyectado:</span>
                    <span className="font-semibold text-success">+€{results.monthlyIncrease.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-gilroy font-bold text-primary mb-2">
                      €{results.yearlyIncrease.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary mb-4">Incremento anual proyectado</div>
                    <div className="text-xs text-text-secondary">
                      Recuperación de inversión en {results.breakEvenMonths} meses
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-success text-success-foreground hover:bg-success/90"
                  >
                    Solicitar Propuesta Personalizada
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Descargar Reporte Completo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="BarChart3" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-text-secondary">
                  Completa el formulario para ver tu proyección personalizada de ROI
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-gilroy font-bold text-primary mb-2">400%</div>
            <div className="text-sm text-text-secondary">ROI promedio de nuestros clientes</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={20} className="text-success" />
            </div>
            <div className="text-2xl font-gilroy font-bold text-success mb-2">250%</div>
            <div className="text-sm text-text-secondary">Incremento promedio en conversiones</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={20} className="text-warning" />
            </div>
            <div className="text-2xl font-gilroy font-bold text-warning mb-2">3.2</div>
            <div className="text-sm text-text-secondary">Meses promedio para recuperar inversión</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-text-secondary">
            * Los resultados pueden variar según el sector, competencia y implementación. 
            Estas son proyecciones conservadoras basadas en el rendimiento histórico promedio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;