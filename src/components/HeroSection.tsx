import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.jpg"
          alt="Tecnologias sustentáveis para indústria e agronegócio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* ODS Badge - Top Center */}
        <div className="flex justify-center mt-4 mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/40 backdrop-blur-sm border border-emerald-400/30">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-medium text-emerald-100">
              ODS 9 — Indústria, Inovação e Infraestrutura
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          {/* Glassmorphism Container - Centered */}
          <div className="max-w-2xl w-full animate-fade-up">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/3 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Content */}
              <div>
                {/* Heading */}
                <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight drop-shadow-lg text-center">
                  Conectando{" "}
                  <span className="text-emerald-400">Sustentabilidade</span>
                  <br />
                  à Indústria e ao Agronegócio
                </h1>

                {/* Subheading */}
                <p className="text-base md:text-lg text-white/90 mb-8 drop-shadow text-center">
                  Plataforma que acelera a adoção de tecnologias verdes no setor produtivo e agrícola,
                  garantindo impacto mensurável e rastreável nas metas ESG da sua organização.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all font-medium"
                    asChild
                  >
                    <Link to="/solucoes">
                      Explorar Soluções
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all font-medium"
                    asChild
                  >
                    <Link to="/agendar-demo">Agendar Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats - Bottom Section */}
        <div className="mt-20 lg:mt-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-6 md:gap-12">
              <div className="text-center">
                <p
                  className="font-display font-bold text-4xl md:text-6xl text-emerald-400"
                  style={{
                    textShadow: '0 0 20px rgba(52, 211, 153, 0.8), 0 0 40px rgba(52, 211, 153, 0.5), 0 0 60px rgba(52, 211, 153, 0.3)'
                  }}
                >
                  150+
                </p>
                <p className="text-xs md:text-sm text-white mt-2 drop-shadow">Indústrias Conectadas</p>
              </div>
              <div className="text-center">
                <p
                  className="font-display font-bold text-4xl md:text-6xl text-emerald-400"
                  style={{
                    textShadow: '0 0 20px rgba(52, 211, 153, 0.8), 0 0 40px rgba(52, 211, 153, 0.5), 0 0 60px rgba(52, 211, 153, 0.3)'
                  }}
                >
                  500+
                </p>
                <p className="text-xs md:text-sm text-white mt-2 drop-shadow">Soluções Verdes</p>
              </div>
              <div className="text-center">
                <p
                  className="font-display font-bold text-4xl md:text-6xl text-emerald-400"
                  style={{
                    textShadow: '0 0 20px rgba(52, 211, 153, 0.8), 0 0 40px rgba(52, 211, 153, 0.5), 0 0 60px rgba(52, 211, 153, 0.3)'
                  }}
                >
                  2.5M
                </p>
                <p className="text-xs md:text-sm text-white mt-2 drop-shadow">Ton CO₂ Evitadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
