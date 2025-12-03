import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  ArrowLeft, 
  CheckCircle2,
  TrendingDown,
  Upload,
  FileText,
  Calendar,
  Calculator,
  Info,
  Lock,
  History
} from "lucide-react";

// RF08: Exemplo de soluções adotadas
const solucoesAdotadas = [
  { id: "1", nome: "Sistema de Reuso de Água", empresa: "EcoTech Solutions", dataAdocao: "2024-01-15" },
  { id: "2", nome: "Painéis Solares Bifaciais", empresa: "GreenEnergy BR", dataAdocao: "2024-03-01" },
];

// RF08-RF10: Métricas disponíveis
const metricas = [
  { id: "consumo-agua", label: "Consumo de Água", unidade: "m³/mês" },
  { id: "consumo-energia", label: "Consumo de Energia", unidade: "kWh/mês" },
  { id: "emissoes-co2", label: "Emissões de CO₂", unidade: "ton/mês" },
  { id: "residuos", label: "Resíduos Gerados", unidade: "ton/mês" },
];

// Histórico de registros (exemplo)
const historicoRegistros = [
  { data: "2024-11-01", metrica: "Consumo de Água", valorRealizado: 8500, baseline: 10000, impacto: -15, evidencia: "relatorio-nov.pdf" },
  { data: "2024-10-01", metrica: "Consumo de Água", valorRealizado: 9200, baseline: 10000, impacto: -8, evidencia: "relatorio-out.pdf" },
  { data: "2024-09-01", metrica: "Consumo de Água", valorRealizado: 9800, baseline: 10000, impacto: -2, evidencia: "relatorio-set.pdf" },
];

const RegistroImpacto = () => {
  const [activeTab, setActiveTab] = useState<"baseline" | "registro" | "historico">("baseline");
  const [baselineValue, setBaselineValue] = useState("");
  const [valorRealizado, setValorRealizado] = useState("");
  const [selectedSolucao, setSelectedSolucao] = useState("");
  const [selectedMetrica, setSelectedMetrica] = useState("");
  const [evidenciaUpload, setEvidenciaUpload] = useState<File | null>(null);
  const [baselineConfirmado, setBaselineConfirmado] = useState(false);

  // RF10: Cálculo automático do impacto
  const calcularImpacto = () => {
    if (!baselineValue || !valorRealizado) return null;
    const baseline = parseFloat(baselineValue);
    const realizado = parseFloat(valorRealizado);
    const impacto = ((realizado - baseline) / baseline) * 100;
    return impacto.toFixed(1);
  };

  const impactoCalculado = calcularImpacto();

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
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Registro de Impacto
            </h1>
            <p className="text-lg text-muted-foreground">
              Registre e acompanhe o impacto das soluções adotadas
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-muted/50 p-1 rounded-lg">
            {[
              { id: "baseline", label: "Linha de Base", icon: Lock },
              { id: "registro", label: "Registrar Valor", icon: Calculator },
              { id: "historico", label: "Histórico", icon: History },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* RF08: Tab Baseline */}
          {activeTab === "baseline" && (
            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">Valor Imutável</p>
                    <p className="text-muted-foreground">
                      Após confirmação, o valor da linha de base não poderá ser alterado. 
                      Todas as alterações são registradas em log de auditoria conforme RNF04.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Registrar Linha de Base (Baseline)
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Solução Adotada *</Label>
                      <Select value={selectedSolucao} onValueChange={setSelectedSolucao}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a solução" />
                        </SelectTrigger>
                        <SelectContent>
                          {solucoesAdotadas.map((sol) => (
                            <SelectItem key={sol.id} value={sol.id}>
                              {sol.nome} - {sol.empresa}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Métrica *</Label>
                      <Select value={selectedMetrica} onValueChange={setSelectedMetrica}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a métrica" />
                        </SelectTrigger>
                        <SelectContent>
                          {metricas.map((m) => (
                            <SelectItem key={m.id} value={m.id}>
                              {m.label} ({m.unidade})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Valor da Linha de Base *</Label>
                      <Input 
                        type="number"
                        placeholder="Ex: 10000"
                        value={baselineValue}
                        onChange={(e) => setBaselineValue(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Valor antes da implementação da solução
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Data de Referência *</Label>
                      <Input type="date" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label>Documento de Evidência *</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          id="evidencia-baseline"
                          onChange={(e) => setEvidenciaUpload(e.target.files?.[0] || null)}
                        />
                        <label htmlFor="evidencia-baseline" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Arraste ou clique para fazer upload
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, XLS, CSV (máx. 10MB)
                          </p>
                        </label>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label>Observações</Label>
                      <Textarea 
                        placeholder="Informações adicionais sobre a medição..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full" disabled={!baselineValue || !selectedSolucao || !selectedMetrica}>
                  <Lock className="w-4 h-4" />
                  Confirmar Linha de Base
                </Button>
              </div>
            </div>
          )}

          {/* RF09: Tab Registro */}
          {activeTab === "registro" && (
            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
                <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p>
                      Registre periodicamente os valores realizados para acompanhar o impacto da solução.
                      É obrigatório anexar documento de evidência para validação.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                    Registrar Valor Realizado
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Solução *</Label>
                      <Select value={selectedSolucao} onValueChange={setSelectedSolucao}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a solução" />
                        </SelectTrigger>
                        <SelectContent>
                          {solucoesAdotadas.map((sol) => (
                            <SelectItem key={sol.id} value={sol.id}>
                              {sol.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Métrica *</Label>
                      <Select value={selectedMetrica} onValueChange={setSelectedMetrica}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a métrica" />
                        </SelectTrigger>
                        <SelectContent>
                          {metricas.map((m) => (
                            <SelectItem key={m.id} value={m.id}>
                              {m.label} ({m.unidade})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Linha de Base (Referência)</Label>
                      <Input 
                        value={baselineValue || "10000"}
                        disabled
                        className="bg-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Valor Realizado *</Label>
                      <Input 
                        type="number"
                        placeholder="Ex: 8500"
                        value={valorRealizado}
                        onChange={(e) => setValorRealizado(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Período de Referência *</Label>
                      <Input type="month" />
                    </div>
                    <div className="space-y-2">
                      <Label>Data do Registro</Label>
                      <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                  </div>

                  {/* RF10: Cálculo automático */}
                  {impactoCalculado && (
                    <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-3">
                        <Calculator className="w-6 h-6 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Impacto Líquido Calculado</p>
                          <p className={`text-2xl font-display font-bold ${
                            parseFloat(impactoCalculado) < 0 ? "text-primary" : "text-destructive"
                          }`}>
                            {parseFloat(impactoCalculado) < 0 ? "" : "+"}{impactoCalculado}%
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {parseFloat(impactoCalculado) < 0 ? "Redução" : "Aumento"} em relação à linha de base
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RF09: Upload de evidência obrigatório */}
                  <div className="mt-6 space-y-2">
                    <Label className="flex items-center gap-2">
                      Documento de Evidência *
                      <span className="text-xs text-destructive">(Obrigatório)</span>
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <input 
                        type="file" 
                        className="hidden" 
                        id="evidencia-registro"
                        onChange={(e) => setEvidenciaUpload(e.target.files?.[0] || null)}
                        required
                      />
                      <label htmlFor="evidencia-registro" className="cursor-pointer">
                        {evidenciaUpload ? (
                          <div className="flex items-center justify-center gap-2 text-primary">
                            <FileText className="w-6 h-6" />
                            <span>{evidenciaUpload.name}</span>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Arraste ou clique para fazer upload
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              PDF, XLS, CSV (máx. 10MB)
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={!valorRealizado || !evidenciaUpload}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Registrar Valor
                </Button>
              </div>
            </div>
          )}

          {/* Tab Histórico */}
          {activeTab === "historico" && (
            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="font-display font-semibold text-lg text-foreground">
                    Histórico de Registros
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Log completo de todas as medições realizadas (RNF04)
                  </p>
                </div>

                <div className="divide-y divide-border">
                  {historicoRegistros.map((registro, index) => (
                    <div key={index} className="p-6 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{registro.data}</span>
                            <span className={`text-sm font-semibold ${
                              registro.impacto < 0 ? "text-primary" : "text-destructive"
                            }`}>
                              {registro.impacto > 0 ? "+" : ""}{registro.impacto}%
                            </span>
                          </div>
                          <h3 className="font-medium text-foreground mb-1">{registro.metrica}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Baseline: {registro.baseline.toLocaleString()}</span>
                            <span>Realizado: {registro.valorRealizado.toLocaleString()}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Ver Evidência
                        </Button>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progresso em relação à meta</span>
                          <span>{Math.abs(registro.impacto)}% de redução</span>
                        </div>
                        <Progress value={Math.abs(registro.impacto) * 2} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-border bg-muted/30">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/relatorios">
                      <FileText className="w-4 h-4" />
                      Exportar Relatório Completo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RegistroImpacto;
