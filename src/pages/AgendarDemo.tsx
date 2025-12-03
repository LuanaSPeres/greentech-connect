import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, ArrowLeft, Calendar, CheckCircle2, Clock, Users, Video } from "lucide-react";

const horarios = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

const AgendarDemo = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

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
        <div className="container mx-auto px-4 max-w-4xl">
          {step === 1 ? (
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Agendar uma Demonstração
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conheça todas as funcionalidades do GreenLinkHub em uma sessão personalizada 
                  com nossos especialistas em sustentabilidade industrial e agronegócio.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Video className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Sessão Online</h3>
                  <p className="text-sm text-muted-foreground">30-45 minutos via Google Meet ou Zoom</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Personalizada</h3>
                  <p className="text-sm text-muted-foreground">Focada nas necessidades da sua organização</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Sem Compromisso</h3>
                  <p className="text-sm text-muted-foreground">Tire todas as suas dúvidas gratuitamente</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input id="nome" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail corporativo</Label>
                    <Input id="email" type="email" placeholder="email@empresa.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Nome da Empresa/Organização</Label>
                    <Input id="empresa" placeholder="Nome da empresa" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cargo">Cargo</Label>
                    <Input id="cargo" placeholder="Seu cargo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="setor">Setor de atuação</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o setor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="industria">Indústria</SelectItem>
                        <SelectItem value="agronegocio">Agronegócio</SelectItem>
                        <SelectItem value="governo">Órgão Governamental</SelectItem>
                        <SelectItem value="startup">Startup/Pesquisa</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="horario">Horário preferido</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {horarios.map((horario) => (
                          <SelectItem key={horario} value={horario}>
                            {horario}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="interesses">O que você gostaria de ver na demonstração?</Label>
                    <Textarea
                      id="interesses"
                      placeholder="Conte-nos sobre seus interesses e desafios de sustentabilidade..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Agendar Demonstração
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="animate-fade-up text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Demonstração Agendada!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Enviamos um e-mail com os detalhes da sua sessão. 
                Em breve, um especialista entrará em contato para confirmar o horário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/solucoes">Explorar Soluções</Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/">Voltar ao Início</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AgendarDemo;
