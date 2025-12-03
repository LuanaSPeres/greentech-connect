import { Link } from "react-router-dom";
import { Search, Handshake, BarChart3, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Cadastre suas Necessidades",
    description: "Indústrias e agronegócios registram seus desafios de sustentabilidade e metas ESG. Startups publicam suas soluções verdes inovadoras.",
    link: "/como-funciona#cadastro-necessidades",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Matchmaking Inteligente",
    description: "Nossa IA conecta automaticamente as melhores soluções às demandas industriais e do agronegócio, considerando setor, escala e maturidade tecnológica.",
    link: "/como-funciona#matchmaking",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Implantação Rastreável",
    description: "Acompanhe todo o processo de implementação com métricas de impacto em tempo real e documentação completa para relatórios ESG.",
    link: "/como-funciona#implantacao",
  },
  {
    number: "04",
    icon: Award,
    title: "Certificação de Impacto",
    description: "Receba certificações verificáveis do impacto ambiental alcançado, prontas para stakeholders, investidores e órgãos reguladores.",
    link: "/como-funciona#certificacao",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Como Funciona
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Do Desafio ao Impacto em 4 Passos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simplificado para conectar inovação e sustentabilidade, 
            com rastreabilidade completa em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <Link
                to={step.link}
                key={step.number}
                className="relative animate-fade-up block"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium hover:border-primary/20 transition-all duration-300 group h-full">
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 font-display font-bold text-4xl text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
