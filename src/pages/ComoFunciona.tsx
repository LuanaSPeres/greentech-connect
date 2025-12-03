import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, ArrowRight, Search, Handshake, BarChart3, Award, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";

const ComoFunciona = () => {
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
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Como Funciona
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Do Desafio ao <span className="text-gradient">Impacto Mensurável</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma conecta indústrias e agronegócios às melhores soluções sustentáveis, 
              com rastreabilidade completa em cada etapa do processo.
            </p>
          </div>

          {/* Step 1: Cadastre suas Necessidades */}
          <section id="cadastro-necessidades" className="mb-24 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center shadow-glow">
                    <Search className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-5xl text-muted-foreground/20">01</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Cadastre suas Necessidades
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Indústrias e agronegócios registram seus desafios de sustentabilidade e metas ESG. 
                  Startups e pesquisadores publicam suas soluções verdes inovadoras.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Formulário intuitivo para descrever demandas específicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Categorização por setor, escala e urgência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Integração com metas ODS e frameworks ESG</span>
                  </li>
                </ul>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/criar-conta">
                    Começar Agora
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-12 bg-muted/50 rounded" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-24 bg-muted/50 rounded" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 bg-primary/20 rounded" />
                    <div className="h-10 bg-accent/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2: Matchmaking Inteligente */}
          <section id="matchmaking" className="mb-24 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">98% compatibilidade</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-sm text-foreground">85% compatibilidade</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                    <span className="text-sm text-muted-foreground">72% compatibilidade</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center shadow-glow">
                    <Handshake className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-5xl text-muted-foreground/20">02</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Matchmaking Inteligente
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa IA conecta automaticamente as melhores soluções às demandas industriais e do agronegócio, 
                  considerando setor, escala, maturidade tecnológica e potencial de impacto.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Algoritmo de compatibilidade baseado em +50 critérios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Sugestões personalizadas em tempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Facilitação de contato e negociação</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3: Implantação Rastreável */}
          <section id="implantacao" className="mb-24 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center shadow-glow">
                    <BarChart3 className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-5xl text-muted-foreground/20">03</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Implantação Rastreável
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Acompanhe todo o processo de implementação com métricas de impacto em tempo real 
                  e documentação completa para relatórios ESG e compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Dashboard com KPIs em tempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Marcos e checkpoints documentados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Relatórios automáticos para stakeholders</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Progresso da Implantação</span>
                  <span className="text-sm text-primary font-semibold">78%</span>
                </div>
                <div className="h-3 bg-muted rounded-full mb-6">
                  <div className="h-3 bg-hero-gradient rounded-full w-[78%]" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">Redução de 45% em emissões</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">Economia de 30% em recursos</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4: Certificação de Impacto */}
          <section id="certificacao" className="mb-16 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-card rounded-2xl p-8 border border-border shadow-soft text-center">
                <div className="w-24 h-24 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Award className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Certificado de Impacto
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  GreenLinkHub Verified
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Blockchain Verified</span>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center shadow-glow">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-5xl text-muted-foreground/20">04</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Certificação de Impacto
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Receba certificações verificáveis do impacto ambiental alcançado, 
                  prontas para stakeholders, investidores e órgãos reguladores.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Certificados com verificação blockchain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Compatíveis com GRI, SASB e CDP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Exportação para relatórios de sustentabilidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-card rounded-3xl p-12 border border-border shadow-soft">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se às centenas de organizações que já estão transformando 
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

export default ComoFunciona;
