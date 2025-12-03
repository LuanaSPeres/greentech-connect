import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  ArrowLeft, 
  FileText,
  Download,
  Calendar,
  TrendingDown,
  Droplets,
  Zap,
  Recycle,
  Shield,
  Eye,
  FileSpreadsheet
} from "lucide-react";

// RF07: Dados do relatório
const impactoHistorico = [
  { mes: "Jan/2024", co2: 450, agua: 8500, energia: 120000, residuos: 25 },
  { mes: "Fev/2024", co2: 420, agua: 8200, energia: 115000, residuos: 23 },
  { mes: "Mar/2024", co2: 380, agua: 7800, energia: 108000, residuos: 20 },
  { mes: "Abr/2024", co2: 350, agua: 7500, energia: 102000, residuos: 18 },
  { mes: "Mai/2024", co2: 320, agua: 7200, energia: 95000, residuos: 15 },
  { mes: "Jun/2024", co2: 300, agua: 7000, energia: 90000, residuos: 14 },
];

const solucoesAdotadas = [
  { nome: "Sistema de Reuso de Água", impacto: "-30% consumo de água", status: "Ativo" },
  { nome: "Painéis Solares Bifaciais", impacto: "-25% consumo de energia", status: "Ativo" },
  { nome: "Gestão Inteligente de Resíduos", impacto: "-44% resíduos", status: "Implementando" },
];

const Relatorios = () => {
  const [formato, setFormato] = useState<"pdf" | "csv">("pdf");
  const [periodo, setPeriodo] = useState("6-meses");
  const [incluirDetalhes, setIncluirDetalhes] = useState(true);
  const [incluirEvidencias, setIncluirEvidencias] = useState(true);
  const [incluirMetas, setIncluirMetas] = useState(true);

  // Cálculo de métricas agregadas
  const metricas = {
    co2Reduzido: 150, // toneladas
    aguaEconomizada: 1500000, // litros
    energiaEconomizada: 30000, // kWh
    residuosReduzidos: 11, // toneladas
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
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Relatório de Impacto ESG
            </h1>
            <p className="text-lg text-muted-foreground">
              Exporte seu histórico de impacto e registros com referência às fontes de dados
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Preview do Relatório */}
            <div className="lg:col-span-2 space-y-6">
              {/* Resumo de Impacto */}
              <div className="bg-card rounded-2xl border border-border shadow-soft p-6">
                <h2 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Prévia do Relatório
                </h2>

                {/* Métricas Principais */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <TrendingDown className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-display font-bold text-foreground">{metricas.co2Reduzido}</p>
                    <p className="text-sm text-muted-foreground">ton CO₂ evitadas</p>
                  </div>
                  <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/20">
                    <Droplets className="w-6 h-6 text-blue-500 mb-2" />
                    <p className="text-2xl font-display font-bold text-foreground">1.5M</p>
                    <p className="text-sm text-muted-foreground">litros economizados</p>
                  </div>
                  <div className="bg-amber-500/5 rounded-xl p-4 border border-amber-500/20">
                    <Zap className="w-6 h-6 text-amber-500 mb-2" />
                    <p className="text-2xl font-display font-bold text-foreground">30K</p>
                    <p className="text-sm text-muted-foreground">kWh economizados</p>
                  </div>
                  <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/20">
                    <Recycle className="w-6 h-6 text-green-500 mb-2" />
                    <p className="text-2xl font-display font-bold text-foreground">{metricas.residuosReduzidos}</p>
                    <p className="text-sm text-muted-foreground">ton resíduos reduzidos</p>
                  </div>
                </div>

                {/* Tabela de Histórico */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Histórico de Impacto</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 text-muted-foreground font-medium">Período</th>
                          <th className="text-right py-3 px-2 text-muted-foreground font-medium">CO₂ (ton)</th>
                          <th className="text-right py-3 px-2 text-muted-foreground font-medium">Água (L)</th>
                          <th className="text-right py-3 px-2 text-muted-foreground font-medium">Energia (kWh)</th>
                          <th className="text-right py-3 px-2 text-muted-foreground font-medium">Resíduos (ton)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {impactoHistorico.map((item, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                            <td className="py-3 px-2 text-foreground">{item.mes}</td>
                            <td className="py-3 px-2 text-right text-foreground">{item.co2}</td>
                            <td className="py-3 px-2 text-right text-foreground">{item.agua.toLocaleString()}</td>
                            <td className="py-3 px-2 text-right text-foreground">{item.energia.toLocaleString()}</td>
                            <td className="py-3 px-2 text-right text-foreground">{item.residuos}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Soluções Adotadas */}
                {incluirDetalhes && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-4">Soluções Adotadas</h3>
                    <div className="space-y-3">
                      {solucoesAdotadas.map((sol, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <p className="font-medium text-foreground">{sol.nome}</p>
                            <p className="text-sm text-primary">{sol.impacto}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            sol.status === "Ativo" 
                              ? "bg-primary/10 text-primary"
                              : "bg-amber-500/10 text-amber-500"
                          }`}>
                            {sol.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metas ESG */}
                {incluirMetas && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Progresso das Metas ESG</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Redução de CO₂ (Meta: 50% até 2030)</span>
                          <span className="text-foreground font-medium">33% alcançado</span>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Economia de Água (Meta: 40% até 2030)</span>
                          <span className="text-foreground font-medium">30% alcançado</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Energia Renovável (Meta: 80% até 2030)</span>
                          <span className="text-foreground font-medium">25% alcançado</span>
                        </div>
                        <Progress value={31} className="h-2" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RF07: Configurações de Exportação */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-soft p-6 sticky top-24">
                <h2 className="font-display font-semibold text-lg text-foreground mb-6">
                  Configurar Exportação
                </h2>

                {/* Formato */}
                <div className="mb-6">
                  <Label className="mb-3 block">Formato do Arquivo</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormato("pdf")}
                      className={`flex items-center gap-2 p-3 rounded-lg border text-left transition-all duration-200 ${
                        formato === "pdf"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">PDF</span>
                    </button>
                    <button
                      onClick={() => setFormato("csv")}
                      className={`flex items-center gap-2 p-3 rounded-lg border text-left transition-all duration-200 ${
                        formato === "csv"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <FileSpreadsheet className="w-5 h-5 text-primary" />
                      <span className="font-medium">CSV</span>
                    </button>
                  </div>
                </div>

                {/* Período */}
                <div className="mb-6">
                  <Label className="mb-3 block">Período</Label>
                  <Select value={periodo} onValueChange={setPeriodo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-meses">Últimos 3 meses</SelectItem>
                      <SelectItem value="6-meses">Últimos 6 meses</SelectItem>
                      <SelectItem value="12-meses">Últimos 12 meses</SelectItem>
                      <SelectItem value="todos">Todo o histórico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Opções */}
                <div className="mb-6 space-y-3">
                  <Label className="block">Incluir no Relatório</Label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox 
                      checked={incluirDetalhes} 
                      onCheckedChange={(checked) => setIncluirDetalhes(checked as boolean)}
                    />
                    <span className="text-sm text-foreground">Detalhes das soluções adotadas</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox 
                      checked={incluirEvidencias} 
                      onCheckedChange={(checked) => setIncluirEvidencias(checked as boolean)}
                    />
                    <span className="text-sm text-foreground">Referências às evidências anexadas</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox 
                      checked={incluirMetas} 
                      onCheckedChange={(checked) => setIncluirMetas(checked as boolean)}
                    />
                    <span className="text-sm text-foreground">Metas ESG e progresso</span>
                  </label>
                </div>

                {/* RF06: Privacidade */}
                <div className="mb-6 p-3 rounded-lg bg-muted/50 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Este relatório contém dados confidenciais. Conforme LGPD, seus dados não serão 
                    compartilhados em relatórios setoriais sem autorização explícita.
                  </p>
                </div>

                {/* Botão de Download */}
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-5 h-5" />
                  Exportar {formato.toUpperCase()}
                </Button>

                <Link to="/visualizar-relatorio" className="block mt-4">
                  <Button variant="outline" size="lg" className="w-full">
                    <Eye className="w-5 h-5" />
                    Visualizar Relatório Completo
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  O relatório incluirá todas as referências às fontes de dados anexadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
