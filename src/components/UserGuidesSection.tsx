import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FlaskConical, 
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const UserGuidesSection = () => {
  const guides = {
    pesquisador: {
      title: "Para Pesquisadores",
      subtitle: "Como cadastrar sua solução verde",
      description: "Aprenda a cadastrar suas pesquisas e tecnologias sustentáveis na plataforma e conectar-se com empresas interessadas.",
      steps: [
        "Crie sua conta de pesquisador",
        "Cadastre sua solução com TRL e ODS",
        "Defina o público-alvo e setor",
        "Acompanhe empresas interessadas"
      ],
      icon: FlaskConical,
      link: "/portal-pesquisador",
      buttonText: "Acessar Portal do Pesquisador"
    },
    empresa: {
      title: "Para Empresas",
      subtitle: "Como encontrar soluções sustentáveis",
      description: "Descubra como usar a plataforma para encontrar soluções verdes alinhadas às suas metas ESG e registrar impactos.",
      steps: [
        "Cadastre seu perfil empresarial",
        "Defina suas metas de sustentabilidade",
        "Busque soluções compatíveis",
        "Registre e exporte seu impacto"
      ],
      icon: Building2,
      link: "/portal-empresa",
      buttonText: "Acessar Portal da Empresa"
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Guia de Uso
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Como utilizar a plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como aproveitar ao máximo o GreenLinkHub, seja você pesquisador ou empresa
          </p>
        </div>

        {/* Guides Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(guides).map(([key, guide]) => {
            const Icon = guide.icon;
            return (
              <div 
                key={key}
                className="bg-card rounded-2xl border border-border p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">
                      {guide.title}
                    </Badge>
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {guide.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {guide.description}
                </p>

                {/* Steps */}
                <div className="bg-muted/50 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm">
                    Passo a passo:
                  </h4>
                  <ul className="space-y-3">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button variant="hero" className="w-full group" asChild>
                  <a href={guide.link}>
                    {guide.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserGuidesSection;