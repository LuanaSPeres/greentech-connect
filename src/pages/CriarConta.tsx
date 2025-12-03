import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, Factory, Building2, Lightbulb, Tractor, ArrowLeft, CheckCircle2 } from "lucide-react";

type UserType = "industria" | "agronegocio" | "governo" | "startup" | null;

const userTypes = [
  {
    id: "industria" as const,
    icon: Factory,
    title: "Indústria",
    description: "Busco soluções tecnológicas sustentáveis para minha operação industrial",
  },
  {
    id: "agronegocio" as const,
    icon: Tractor,
    title: "Agronegócio",
    description: "Busco soluções sustentáveis para minha produção agrícola ou pecuária",
  },
  {
    id: "governo" as const,
    icon: Building2,
    title: "Órgão Governamental",
    description: "Quero monitorar e promover tecnologias verdes no setor produtivo",
  },
  {
    id: "startup" as const,
    icon: Lightbulb,
    title: "Startup / Pesquisador",
    description: "Tenho soluções verdes e quero conectar com indústrias e agronegócios",
  },
];

const setores = [
  "Energia",
  "Manufatura",
  "Mineração",
  "Agricultura",
  "Pecuária",
  "Silvicultura",
  "Químico",
  "Têxtil",
  "Automotivo",
  "Alimentos e Bebidas",
  "Construção Civil",
  "Logística",
  "Outro",
];

const CriarConta = () => {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const [step, setStep] = useState(1);

  const handleTypeSelect = (type: UserType) => {
    setSelectedType(type);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
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
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  s === step ? "w-8 bg-primary" : s < step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Select Type */}
          {step === 1 && (
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Criar Conta Gratuita
                </h1>
                <p className="text-lg text-muted-foreground">
                  Selecione o perfil que melhor descreve sua organização
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 text-left"
                  >
                    <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Form */}
          {step === 2 && (
            <div className="animate-fade-up">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>

              <div className="text-center mb-12">
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  {selectedType === "industria" && "Cadastre sua Indústria"}
                  {selectedType === "agronegocio" && "Cadastre seu Agronegócio"}
                  {selectedType === "governo" && "Cadastre seu Órgão"}
                  {selectedType === "startup" && "Cadastre sua Solução"}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Preencha as informações para criar sua conta gratuita
                </p>
              </div>

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
                    <Label htmlFor="senha">Senha</Label>
                    <Input id="senha" type="password" placeholder="Mínimo 8 caracteres" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                    <Input id="confirmar-senha" type="password" placeholder="Repita a senha" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">
                      {selectedType === "startup" ? "Nome da Startup/Instituição" : "Nome da Organização"}
                    </Label>
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
                        {setores.map((setor) => (
                          <SelectItem key={setor} value={setor.toLowerCase()}>
                            {setor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" type="tel" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="descricao">
                      {selectedType === "industria" && "Descreva seus desafios de sustentabilidade"}
                      {selectedType === "agronegocio" && "Descreva seus desafios de sustentabilidade no campo"}
                      {selectedType === "governo" && "Descreva suas iniciativas e objetivos"}
                      {selectedType === "startup" && "Descreva sua solução verde"}
                    </Label>
                    <Textarea
                      id="descricao"
                      placeholder="Conte-nos mais sobre seus objetivos..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Criar Conta Gratuita
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <a href="#" className="text-primary hover:underline">Termos de Uso</a> e{" "}
                  <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                </p>
              </form>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="animate-fade-up text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Conta Criada com Sucesso!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Enviamos um e-mail de confirmação. Verifique sua caixa de entrada para ativar sua conta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/dashboard">Acessar Dashboard</Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/solucoes">Explorar Soluções</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CriarConta;
