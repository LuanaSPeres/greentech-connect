import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Leaf, 
  ArrowLeft, 
  CheckCircle2, 
  Lightbulb,
  Target,
  Building2,
  Info
} from "lucide-react";

// RF01: TRL Levels
const trlLevels = [
  { value: "1", label: "TRL 1 - Princípios básicos observados" },
  { value: "2", label: "TRL 2 - Conceito tecnológico formulado" },
  { value: "3", label: "TRL 3 - Prova de conceito experimental" },
  { value: "4", label: "TRL 4 - Validação em laboratório" },
  { value: "5", label: "TRL 5 - Validação em ambiente relevante" },
  { value: "6", label: "TRL 6 - Demonstração em ambiente relevante" },
  { value: "7", label: "TRL 7 - Demonstração em ambiente operacional" },
  { value: "8", label: "TRL 8 - Sistema completo e qualificado" },
  { value: "9", label: "TRL 9 - Sistema comprovado em ambiente operacional" },
];

// RF01: ODS (Objetivos de Desenvolvimento Sustentável)
const odsOptions = [
  { value: "6", label: "ODS 6 - Água Potável e Saneamento", icon: "💧" },
  { value: "7", label: "ODS 7 - Energia Limpa e Acessível", icon: "⚡" },
  { value: "9", label: "ODS 9 - Indústria, Inovação e Infraestrutura", icon: "🏭" },
  { value: "11", label: "ODS 11 - Cidades e Comunidades Sustentáveis", icon: "🏙️" },
  { value: "12", label: "ODS 12 - Consumo e Produção Responsáveis", icon: "♻️" },
  { value: "13", label: "ODS 13 - Ação Contra a Mudança Global do Clima", icon: "🌍" },
  { value: "14", label: "ODS 14 - Vida na Água", icon: "🐟" },
  { value: "15", label: "ODS 15 - Vida Terrestre", icon: "🌳" },
];

const categorias = [
  "Energia Renovável",
  "Gestão de Água",
  "Resíduos e Economia Circular",
  "Redução de Emissões",
  "Biodiversidade",
  "Agricultura Sustentável",
  "Mobilidade Verde",
  "Eficiência Energética",
  "Outro",
];

const setoresAlvo = [
  "Indústria",
  "Agronegócio",
  "Energia",
  "Mineração",
  "Químico",
  "Têxtil",
  "Automotivo",
  "Alimentos e Bebidas",
  "Construção Civil",
  "Logística",
];

// RF03: Empresas para direcionar pesquisa
const empresasExemplo = [
  { id: "1", name: "AgroTech Brasil", setor: "Agronegócio" },
  { id: "2", name: "Indústria Verde SP", setor: "Manufatura" },
  { id: "3", name: "EnergiaSol", setor: "Energia" },
  { id: "4", name: "MineraçãoSustentável", setor: "Mineração" },
  { id: "5", name: "Química Limpa", setor: "Químico" },
];

const CadastroSolucao = () => {
  const [step, setStep] = useState(1);
  const [selectedOds, setSelectedOds] = useState<string[]>([]);
  const [selectedSetores, setSelectedSetores] = useState<string[]>([]);
  const [selectedEmpresas, setSelectedEmpresas] = useState<string[]>([]);

  const handleOdsToggle = (value: string) => {
    setSelectedOds(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSetorToggle = (value: string) => {
    setSelectedSetores(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleEmpresaToggle = (id: string) => {
    setSelectedEmpresas(prev => 
      prev.includes(id) 
        ? prev.filter(v => v !== id)
        : [...prev, id]
    );
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

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Cadastre sua Solução Verde
                </h1>
                <p className="text-lg text-muted-foreground">
                  Preencha as informações detalhadas sobre sua tecnologia sustentável
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                {/* Informações Básicas */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Informações da Solução
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome da Solução *</Label>
                      <Input id="nome" placeholder="Ex: Sistema de Reuso de Água" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Startup / Instituição *</Label>
                      <Input id="empresa" placeholder="Nome da sua organização" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoria *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categorias.map((cat) => (
                            <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="localizacao">Localização *</Label>
                      <Input id="localizacao" placeholder="Cidade, Estado" required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="descricao">Descrição Detalhada *</Label>
                      <Textarea
                        id="descricao"
                        placeholder="Descreva sua solução, como funciona, benefícios e diferenciais..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* RF01: TRL */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Nível de Maturidade Tecnológica (TRL)
                  </h2>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      O TRL (Technology Readiness Level) indica o estágio de desenvolvimento da sua tecnologia, 
                      variando de 1 (pesquisa básica) a 9 (sistema comprovado em operação).
                    </p>
                  </div>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível TRL" />
                    </SelectTrigger>
                    <SelectContent>
                      {trlLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* RF01: ODS */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    ODS Abordados
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Selecione os Objetivos de Desenvolvimento Sustentável que sua solução contribui para alcançar
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {odsOptions.map((ods) => (
                      <button
                        key={ods.value}
                        type="button"
                        onClick={() => handleOdsToggle(ods.value)}
                        className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 ${
                          selectedOds.includes(ods.value)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">{ods.icon}</span>
                        <span className="text-sm font-medium text-foreground">{ods.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Setores Alvo */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Setores Alvo
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Selecione os setores industriais onde sua solução pode ser aplicada
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {setoresAlvo.map((setor) => (
                      <button
                        key={setor}
                        type="button"
                        onClick={() => handleSetorToggle(setor)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedSetores.includes(setor)
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {setor}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Métricas de Impacto */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Métricas de Impacto Esperado
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reducao-co2">Redução de CO₂ estimada</Label>
                      <div className="flex gap-2">
                        <Input id="reducao-co2" type="number" placeholder="0" />
                        <Select defaultValue="ton-ano">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ton-ano">ton/ano</SelectItem>
                            <SelectItem value="kg-ano">kg/ano</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="economia-agua">Economia de Água estimada</Label>
                      <div className="flex gap-2">
                        <Input id="economia-agua" type="number" placeholder="0" />
                        <Select defaultValue="l-mes">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="l-mes">L/mês</SelectItem>
                            <SelectItem value="m3-mes">m³/mês</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="economia-energia">Economia de Energia estimada</Label>
                      <div className="flex gap-2">
                        <Input id="economia-energia" type="number" placeholder="0" />
                        <Select defaultValue="kwh-mes">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kwh-mes">kWh/mês</SelectItem>
                            <SelectItem value="mwh-ano">MWh/ano</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reciclagem">Taxa de Reciclagem</Label>
                      <div className="flex gap-2">
                        <Input id="reciclagem" type="number" placeholder="0" max={100} />
                        <span className="flex items-center text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" variant="hero" size="lg">
                    Próximo: Visibilidade
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 2: RF03 - Seleção de Empresas */}
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
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Defina a Visibilidade
                </h1>
                <p className="text-lg text-muted-foreground">
                  Escolha quais empresas devem conhecer sua solução
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                {/* RF03: Seleção de Empresas */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Empresas Sugeridas pelo Sistema
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Baseado nos setores alvo selecionados, sugerimos estas empresas. Você pode selecionar quais devem visualizar sua solução.
                  </p>
                  <div className="space-y-3">
                    {empresasExemplo.map((empresa) => (
                      <div
                        key={empresa.id}
                        className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedEmpresas.includes(empresa.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleEmpresaToggle(empresa.id)}
                      >
                        <Checkbox 
                          checked={selectedEmpresas.includes(empresa.id)}
                          onCheckedChange={() => handleEmpresaToggle(empresa.id)}
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{empresa.name}</h3>
                          <p className="text-sm text-muted-foreground">{empresa.setor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opções de Visibilidade */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Configurações de Privacidade
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      <Checkbox id="visibilidade-publica" />
                      <div>
                        <p className="font-medium text-foreground">Visibilidade Pública</p>
                        <p className="text-sm text-muted-foreground">
                          Qualquer empresa cadastrada poderá visualizar sua solução
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      <Checkbox id="notificacao-match" defaultChecked />
                      <div>
                        <p className="font-medium text-foreground">Notificar sobre Matches</p>
                        <p className="text-sm text-muted-foreground">
                          Receba notificações quando empresas demonstrarem interesse
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Contato */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Informações de Contato
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="responsavel">Nome do Responsável *</Label>
                      <Input id="responsavel" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" placeholder="email@empresa.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" type="tel" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" type="url" placeholder="https://suaempresa.com" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Cadastrar Solução
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Ao cadastrar, você concorda com nossa{" "}
                  <a href="#" className="text-primary hover:underline">Política de Privacidade</a> e com a{" "}
                  <a href="#" className="text-primary hover:underline">LGPD</a>
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
                Solução Cadastrada!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Sua solução foi cadastrada com sucesso. As empresas selecionadas serão notificadas automaticamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/dashboard">Acessar Dashboard</Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/solucoes">Ver Catálogo</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CadastroSolucao;
