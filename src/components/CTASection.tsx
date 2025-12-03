import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-medium border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Pronto para Acelerar sua
                <br />
                <span className="text-gradient">Jornada Sustentável?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Junte-se às centenas de organizações que já estão transformando 
                seus desafios ambientais em oportunidades de inovação.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                  <Link to="/criar-conta">
                    Criar Conta Gratuita
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/falar-com-especialista">Falar com Especialista</Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border">
                <a
                  href="mailto:contato@greenlinkhub.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@greenlinkhub.com
                </a>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
