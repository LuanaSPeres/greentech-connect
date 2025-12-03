import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Rede de tecnologias sustentáveis para indústria e agronegócio"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground">
              ODS 9 — Indústria, Inovação e Infraestrutura
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Conectando{" "}
            <span className="text-gradient">Sustentabilidade</span>
            <br />
            à Indústria e ao Agronegócio
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Plataforma que acelera a adoção de tecnologias verdes no setor produtivo e agrícola, 
            garantindo impacto mensurável e rastreável nas metas ESG da sua organização.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/solucoes">
                Explorar Soluções
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline-hero" size="xl" asChild>
              <Link to="/agendar-demo">Agendar Demo</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground">150+</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Indústrias e Fazendas Conectadas</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground">500+</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Soluções Verdes</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground">2.5M</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Ton CO₂ Evitadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
