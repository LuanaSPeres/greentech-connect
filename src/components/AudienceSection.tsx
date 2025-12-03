import { Link } from "react-router-dom";
import { Factory, Building2, Lightbulb, Tractor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Factory,
    title: "Grandes Indústrias",
    description: "Encontre soluções tecnológicas que aceleram sua jornada de descarbonização e otimizam processos produtivos com menor impacto ambiental.",
    features: ["Matchmaking com startups verdes", "Dashboard de métricas ESG", "Relatórios de compliance"],
    color: "primary" as const,
    link: "/saiba-mais/industrias",
  },
  {
    icon: Tractor,
    title: "Agronegócio",
    description: "Soluções sustentáveis para agricultura e pecuária, desde manejo de solo até rastreabilidade de carbono e conservação de recursos hídricos.",
    features: ["Agricultura de precisão", "Créditos de carbono", "Gestão hídrica"],
    color: "accent" as const,
    link: "/saiba-mais/industrias",
  },
  {
    icon: Building2,
    title: "Órgãos Governamentais",
    description: "Monitore e promova a adoção de tecnologias sustentáveis no setor produtivo com dados consolidados e rastreabilidade completa.",
    features: ["Painel de políticas públicas", "Indicadores regionais", "Certificações verdes"],
    color: "primary" as const,
    link: "/saiba-mais/governo",
  },
  {
    icon: Lightbulb,
    title: "Startups & Pesquisadores",
    description: "Conecte suas inovações verdes diretamente às indústrias e agronegócios que buscam soluções sustentáveis. Escale seu impacto rapidamente.",
    features: ["Vitrine de soluções", "Acesso a investidores", "Validação industrial"],
    color: "accent" as const,
    link: "/saiba-mais/startups",
  },
];

const AudienceSection = () => {
  return (
    <section id="solucoes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Para Quem É
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Uma Plataforma, Múltiplos Impactos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos todos os atores do ecossistema de inovação sustentável para 
            acelerar a transformação verde da indústria e do agronegócio brasileiro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 border border-border hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                audience.color === "accent" 
                  ? "bg-accent-gradient shadow-accent" 
                  : "bg-hero-gradient shadow-glow"
              }`}>
                <audience.icon className={`w-7 h-7 ${
                  audience.color === "accent" ? "text-accent-foreground" : "text-primary-foreground"
                }`} />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {audience.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80" asChild>
                <Link to={audience.link}>
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
