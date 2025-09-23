const TechnicalSpecs = () => {
  const technicalAreas = [
    {
      category: "Technology Stack",
      specs: [
        { name: "Cloud Platforms", details: "AWS, Azure, Google Cloud" },
        { name: "Development", details: "React, Node.js, Python, .NET" },
        { name: "Databases", details: "PostgreSQL, MongoDB, Redis" },
        { name: "Analytics", details: "Tableau, Power BI, Python/R" }
      ]
    },
    {
      category: "Integration Capabilities",
      specs: [
        { name: "API Integration", details: "REST, GraphQL, SOAP" },
        { name: "Data Migration", details: "ETL pipelines, real-time sync" },
        { name: "Legacy Systems", details: "Mainframe, ERP integration" },
        { name: "Third-party Tools", details: "CRM, ERP, Marketing platforms" }
      ]
    },
    {
      category: "Security & Compliance",
      specs: [
        { name: "Security Standards", details: "ISO 27001, SOC 2 Type II" },
        { name: "Compliance", details: "GDPR, HIPAA, PCI DSS" },
        { name: "Data Protection", details: "Encryption, backup, recovery" },
        { name: "Access Control", details: "SSO, MFA, role-based access" }
      ]
    },
    {
      category: "Performance & Scalability",
      specs: [
        { name: "Performance", details: "99.9% uptime guarantee" },
        { name: "Scalability", details: "Auto-scaling, load balancing" },
        { name: "Monitoring", details: "24/7 monitoring, alerting" },
        { name: "Support", details: "Multi-tier support structure" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Technical Specifications
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our solutions are built on cutting-edge technology stack with enterprise-grade security and scalability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalAreas.map((area, areaIndex) => (
              <div 
                key={areaIndex}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-gilroy-semibold text-text-primary mb-6 flex items-center">
                  <div className="w-2 h-8 bg-primary rounded-full mr-4"></div>
                  {area.category}
                </h3>
                
                <div className="space-y-4">
                  {area.specs.map((spec, specIndex) => (
                    <div 
                      key={specIndex}
                      className="flex justify-between items-start p-4 bg-surface border border-border rounded-lg hover:shadow-subtle transition-shadow"
                    >
                      <div className="flex-1">
                        <h4 className="font-inter-medium text-text-primary mb-1">
                          {spec.name}
                        </h4>
                        <p className="text-sm text-text-secondary font-inter-regular">
                          {spec.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technical Info */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-gilroy-semibold text-text-primary mb-4">
                Enterprise-Grade Infrastructure
              </h3>
              <p className="text-text-secondary font-inter-regular max-w-2xl mx-auto">
                Our solutions are designed to meet the most demanding enterprise requirements with industry-leading performance and security standards.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-gilroy-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-text-secondary font-inter-regular">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-gilroy-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-text-secondary font-inter-regular">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-gilroy-bold text-primary mb-2">256-bit</div>
                <div className="text-sm text-text-secondary font-inter-regular">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-gilroy-bold text-primary mb-2">ISO 27001</div>
                <div className="text-sm text-text-secondary font-inter-regular">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;