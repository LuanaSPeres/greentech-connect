import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  ArrowLeft, 
  CheckCircle2,
  Building2,
  Target,
  TrendingDown,
  Shield,
  Info,
  Plus,
  Trash2
} from "lucide-react";

// RF04: Indicadores de Sustentabilidade
const indicadoresBase = [
  { id: "emissoes-co2", label: "Emissões de CO₂", unidade: "ton/ano" },
  { id: "consumo-agua", label: "Consumo de Água", unidade: "m³/mês" },
  { id: "consumo-energia", label: "Consumo de Energia", unidade: "MWh/ano" },
  { id: "residuos-gerados", label: "Resíduos Gerados", unidade: "ton/ano" },
  { id: "taxa-reciclagem", label: "Taxa de Reciclagem", unidade: "%" },
  { id: "energia-renovavel", label: "Energia Renovável", unidade: "%" },
];

const setores = [
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

const PerfilEmpresa = () => {
  const [step, setStep] = useState(1);
  const [indicadores, setIndicadores] = useState([
    { id: "emissoes-co2", baseline: "", meta: "", prazo: "2030" },
  ]);

  const addIndicador = () => {
    setIndicadores([...indicadores, { id: "", baseline: "", meta: "", prazo: "2030" }]);
  };

  const removeIndicador = (index: number) => {
    if (indicadores.length > 1) {
      setIndicadores(indicadores.filter((_, i) => i !== index));
    }
  };

  const updateIndicador = (index: number, field: string, value: string) => {
    const updated = [...indicadores];
    updated[index] = { ...updated[index], [field]: value };
    setIndicadores(updated);
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

          {/* Step 1: Informações da Empresa */}
          {step === 1 && (
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Perfil da Empresa
                </h1>
                <p className="text-lg text-muted-foreground">
                  Configure seu perfil detalhado incluindo metas ESG
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                {/* Informações Básicas */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Informações da Empresa
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="razao-social">Razão Social *</Label>
                      <Input id="razao-social" placeholder="Nome da empresa" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ *</Label>
                      <Input id="cnpj" placeholder="00.000.000/0000-00" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="setor">Setor de Atuação *</Label>
                      <Select required>
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
                      <Label htmlFor="porte">Porte da Empresa *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o porte" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="micro">Microempresa</SelectItem>
                          <SelectItem value="pequena">Pequena Empresa</SelectItem>
                          <SelectItem value="media">Média Empresa</SelectItem>
                          <SelectItem value="grande">Grande Empresa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funcionarios">Número de Funcionários</Label>
                      <Input id="funcionarios" type="number" placeholder="Ex: 500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="localizacao">Localização Principal *</Label>
                      <Input id="localizacao" placeholder="Cidade, Estado" required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="descricao">Descrição da Empresa</Label>
                      <Textarea
                        id="descricao"
                        placeholder="Descreva as principais atividades e processos da empresa..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" variant="hero" size="lg">
                    Próximo: Indicadores ESG
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 2: RF04 - Indicadores de Sustentabilidade */}
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
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Indicadores de Sustentabilidade
                </h1>
                <p className="text-lg text-muted-foreground">
                  Defina sua linha de base (baseline) e metas de redução de emissões
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                {/* RF04: Baseline e Metas */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
                      <TrendingDown className="w-5 h-5 text-primary" />
                      Indicadores e Metas
                    </h2>
                    <Button type="button" variant="outline" size="sm" onClick={addIndicador}>
                      <Plus className="w-4 h-4" />
                      Adicionar
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Importante sobre a Linha de Base (Baseline)</p>
                      <p>
                        O valor da linha de base será imutável após confirmação, conforme requisitos de auditoria ESG.
                        Certifique-se de informar valores precisos e verificáveis.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {indicadores.map((indicador, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border bg-muted/20">
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label>Indicador *</Label>
                            <Select 
                              value={indicador.id}
                              onValueChange={(value) => updateIndicador(index, "id", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                {indicadoresBase.map((ind) => (
                                  <SelectItem key={ind.id} value={ind.id}>
                                    {ind.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Baseline (Atual) *</Label>
                            <Input 
                              type="number"
                              placeholder="Valor atual"
                              value={indicador.baseline}
                              onChange={(e) => updateIndicador(index, "baseline", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Meta de Redução *</Label>
                            <div className="flex gap-2">
                              <Input 
                                type="number"
                                placeholder="Meta"
                                value={indicador.meta}
                                onChange={(e) => updateIndicador(index, "meta", e.target.value)}
                              />
                              <span className="flex items-center text-muted-foreground text-sm">%</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Prazo</Label>
                            <div className="flex gap-2">
                              <Select 
                                value={indicador.prazo}
                                onValueChange={(value) => updateIndicador(index, "prazo", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2025">2025</SelectItem>
                                  <SelectItem value="2030">2030</SelectItem>
                                  <SelectItem value="2035">2035</SelectItem>
                                  <SelectItem value="2040">2040</SelectItem>
                                  <SelectItem value="2050">2050</SelectItem>
                                </SelectContent>
                              </Select>
                              {indicadores.length > 1 && (
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => removeIndicador(index)}
                                >
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Preview de progresso */}
                        {indicador.baseline && indicador.meta && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Meta: reduzir {indicador.meta}% até {indicador.prazo}</span>
                              <span className="text-foreground font-medium">0% concluído</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RF06: Configurações de Privacidade */}
                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Configurações de Privacidade (LGPD)
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      <Checkbox id="anonimato" defaultChecked />
                      <div>
                        <p className="font-medium text-foreground">Manter Anonimato em Relatórios Setoriais</p>
                        <p className="text-sm text-muted-foreground">
                          Seus dados serão agregados anonimamente em relatórios do setor
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      <Checkbox id="notificacoes" defaultChecked />
                      <div>
                        <p className="font-medium text-foreground">Receber Notificações de Novas Soluções</p>
                        <p className="text-sm text-muted-foreground">
                          Seja notificado quando soluções alinhadas às suas metas forem cadastradas
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      <Checkbox id="divulgacao" />
                      <div>
                        <p className="font-medium text-foreground">Autorizar Divulgação Pública</p>
                        <p className="text-sm text-muted-foreground">
                          Permitir que seu perfil e metas apareçam em relatórios públicos
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Salvar Perfil
                  </Button>
                </div>
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
                Perfil Configurado!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Seu perfil e indicadores ESG foram salvos. Você receberá notificações sobre soluções alinhadas às suas metas.
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

export default PerfilEmpresa;
