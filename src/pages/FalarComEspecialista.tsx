import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, ArrowLeft, MessageSquare, CheckCircle2, Phone, Mail, Clock, Users } from "lucide-react";

const assuntos = [
  "Dúvidas sobre a plataforma",
  "Parceria comercial",
  "Suporte técnico",
  "Soluções para indústria",
  "Soluções para agronegócio",
  "Investimento/Financiamento",
  "Imprensa",
  "Outro",
];

const FalarComEspecialista = () => {
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
        <div className="container mx-auto px-4 max-w-5xl">
          {step === 1 ? (
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Falar com Especialista
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nossa equipe está pronta para ajudar você a encontrar as melhores 
                  soluções sustentáveis para sua indústria ou agronegócio.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 (11) 99999-9999
                    </a>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <a href="mailto:contato@greenlinkhub.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contato@greenlinkhub.com
                    </a>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Horário</h3>
                    <p className="text-muted-foreground">Seg a Sex: 9h às 18h</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Equipe</h3>
                    <p className="text-muted-foreground">Resposta em até 24h úteis</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-2xl p-8 border border-border shadow-soft">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome completo</Label>
                      <Input id="nome" placeholder="Seu nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="email@empresa.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa/Organização</Label>
                      <Input id="empresa" placeholder="Nome da empresa" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" type="tel" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="assunto">Assunto</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {assuntos.map((assunto) => (
                            <SelectItem key={assunto} value={assunto.toLowerCase()}>
                              {assunto}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva como podemos ajudar..."
                        rows={6}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="animate-fade-up text-center max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Mensagem Enviada!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Recebemos sua mensagem e um de nossos especialistas entrará em contato 
                em até 24 horas úteis.
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

export default FalarComEspecialista;
