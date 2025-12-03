import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, ArrowRight, Factory, Building2, Lightbulb, CheckCircle2, BarChart3, Shield, Users, Zap } from "lucide-react";

const audienceData = {
  industrias: {
    icon: Factory,
    title: "Grandes Indústrias",
    subtitle: "Acelere sua jornada de descarbonização",
    description: "Encontre soluções tecnológicas que aceleram sua jornada de descarbonização e otimizam processos produtivos com menor impacto ambiental.",
    benefits: [
      {
        icon: BarChart3,
        title: "Matchmaking com Startups Verdes",
        description: "Conectamos sua indústria às startups mais inovadoras em sustentabilidade, filtradas por setor, maturidade tecnológica e potencial de impacto."
      },
      {
        icon: Shield,
        title: "Dashboard de Métricas ESG",
        description: "Acompanhe em tempo real todos os indicadores ambientais da sua operação, com benchmarks setoriais e metas personalizadas."
      },
      {
        icon: CheckCircle2,
        title: "Relatórios de Compliance",
        description: "Gere automaticamente relatórios compatíveis com GRI, SASB, CDP e outras normas de reporte de sustentabilidade."
      }
    ],
    stats: [
      { value: "45%", label: "Redução média de emissões" },
      { value: "30%", label: "Economia em recursos" },
      { value: "6 meses", label: "Tempo médio de implantação" }
    ]
  },
  governo: {
    icon: Building2,
    title: "Órgãos Governamentais",
    subtitle: "Monitore e promova tecnologias sustentáveis",
    description: "Monitore e promova a adoção de tecnologias sustentáveis no setor produtivo com dados consolidados e rastreabilidade completa.",
    benefits: [
      {
        icon: BarChart3,
        title: "Painel de Políticas Públicas",
        description: "Visualize o impacto das políticas de incentivo à sustentabilidade com dados em tempo real de todo o ecossistema produtivo."
      },
      {
        icon: Users,
        title: "Indicadores Regionais",
        description: "Acompanhe a evolução da adoção de tecnologias verdes por região, setor e porte de empresa."
      },
      {
        icon: CheckCircle2,
        title: "Certificações Verdes",
        description: "Sistema integrado de certificação e verificação de impacto ambiental com blockchain para garantir transparência."
      }
    ],
    stats: [
      { value: "150+", label: "Municípios conectados" },
      { value: "500+", label: "Projetos monitorados" },
      { value: "100%", label: "Rastreabilidade" }
    ]
  },
  startups: {
    icon: Lightbulb,
    title: "Startups & Pesquisadores",
    subtitle: "Escale seu impacto rapidamente",
    description: "Conecte suas inovações verdes diretamente às indústrias e agronegócios que buscam soluções sustentáveis.",
    benefits: [
      {
        icon: Zap,
        title: "Vitrine de Soluções",
        description: "Publique suas tecnologias e alcance milhares de empresas buscando inovação em sustentabilidade."
      },
      {
        icon: Users,
        title: "Acesso a Investidores",
        description: "Conecte-se com investidores de impacto e fundos ESG interessados em soluções verdes com tração comprovada."
      },
      {
        icon: CheckCircle2,
        title: "Validação Industrial",
        description: "Realize pilotos com grandes indústrias e agronegócios, validando sua tecnologia em ambiente real."
      }
    ],
    stats: [
      { value: "300+", label: "Startups cadastradas" },
      { value: "R$ 50M+", label: "Em investimentos conectados" },
      { value: "85%", label: "Taxa de match bem-sucedido" }
    ]
  }
};

const SaibaMais = () => {
  const { tipo } = useParams<{ tipo: string }>();
  const data = tipo ? audienceData[tipo as keyof typeof audienceData] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-foreground mb-4">Página não encontrada</h1>
          <Button variant="hero" asChild>
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                GreenLink<span className="text-primary">Hub</span>
              </span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {data.subtitle}
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {data.stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="font-display font-bold text-3xl text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
              Principais Benefícios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                  <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 shadow-glow">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-card rounded-3xl p-12 border border-border shadow-soft max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se às organizações que já estão transformando 
              seus desafios em oportunidades de inovação sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/criar-conta">
                  Criar Conta Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-hero" size="xl" asChild>
                <Link to="/agendar-demo">Agendar Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SaibaMais;
