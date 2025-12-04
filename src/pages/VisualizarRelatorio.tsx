import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  ArrowLeft, 
  Download,
  Share2,
  Printer,
  TrendingDown,
  TrendingUp,
  Droplets,
  Zap,
  Recycle,
  Target,
  Calendar,
  CheckCircle2,
  FileText,
  Building2,
  MapPin,
  Award,
  BarChart3,
  FileDown
} from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";

// Dados do relatório de sustentabilidade
const relatorioData = {
  empresa: {
    nome: "Cooperativa AgroSul",
    cnpj: "12.345.678/0001-90",
    setor: "Agronegócio",
    localizacao: "Cascavel, PR",
    dataRelatorio: "Dezembro 2024",
    periodoAnalise: "Janeiro - Dezembro 2024",
  },
  resumoExecutivo: {
    pontuacaoESG: 87,
    classificacao: "A",
    tendencia: "up",
    variacao: "+12%",
  },
  metricas: {
    emissoes: {
      baseline: 850,
      atual: 330,
      meta: 425,
      unidade: "ton CO₂/ano",
      reducao: 61,
    },
    agua: {
      baseline: 5200000,
      atual: 2860000,
      meta: 3640000,
      unidade: "L/ano",
      reducao: 45,
    },
    energia: {
      baseline: 180000,
      atual: 95400,
      meta: 126000,
      unidade: "kWh/ano",
      reducao: 47,
    },
    residuos: {
      baseline: 120,
      atual: 42,
      meta: 72,
      unidade: "ton/ano",
      reducao: 65,
    },
  },
  odsContribuicao: [
    { ods: 6, nome: "Água Potável e Saneamento", contribuicao: 85 },
    { ods: 7, nome: "Energia Limpa e Acessível", contribuicao: 92 },
    { ods: 12, nome: "Consumo e Produção Responsáveis", contribuicao: 78 },
    { ods: 13, nome: "Ação Contra a Mudança Global do Clima", contribuicao: 88 },
    { ods: 15, nome: "Vida Terrestre", contribuicao: 72 },
  ],
  solucoesImplementadas: [
    {
      nome: "Sistema de Irrigação Inteligente",
      fornecedor: "AquaSmart",
      dataImplementacao: "Mar/2024",
      impactoMedido: "-45% consumo de água",
      investimento: "R$ 450.000",
      payback: "18 meses",
      status: "Operacional",
    },
    {
      nome: "Energia Solar Fotovoltaica",
      fornecedor: "SolarMax Pro",
      dataImplementacao: "Jun/2024",
      impactoMedido: "100% energia renovável",
      investimento: "R$ 1.200.000",
      payback: "4 anos",
      status: "Operacional",
    },
    {
      nome: "Biodigestor para Resíduos Orgânicos",
      fornecedor: "BioGás Solutions",
      dataImplementacao: "Jan/2024",
      impactoMedido: "500 m³ biogás/mês",
      investimento: "R$ 380.000",
      payback: "24 meses",
      status: "Operacional",
    },
    {
      nome: "Agricultura de Precisão com Drones",
      fornecedor: "AgroDrone Tech",
      dataImplementacao: "Set/2024",
      impactoMedido: "-30% defensivos agrícolas",
      investimento: "R$ 280.000",
      payback: "12 meses",
      status: "Em expansão",
    },
  ],
  historicoMensal: [
    { mes: "Jan", co2: 80, agua: 480, energia: 16 },
    { mes: "Fev", co2: 72, agua: 420, energia: 14 },
    { mes: "Mar", co2: 55, agua: 320, energia: 12 },
    { mes: "Abr", co2: 48, agua: 280, energia: 10 },
    { mes: "Mai", co2: 38, agua: 240, energia: 8 },
    { mes: "Jun", co2: 28, agua: 200, energia: 6 },
    { mes: "Jul", co2: 25, agua: 180, energia: 5 },
    { mes: "Ago", co2: 22, agua: 170, energia: 5 },
    { mes: "Set", co2: 20, agua: 160, energia: 4 },
    { mes: "Out", co2: 18, agua: 150, energia: 4 },
    { mes: "Nov", co2: 15, agua: 140, energia: 4 },
    { mes: "Dez", co2: 12, agua: 120, energia: 3 },
  ],
  certificacoes: [
    { nome: "ISO 14001", status: "Válida", validade: "2026" },
    { nome: "Selo Verde B3", status: "Válida", validade: "2025" },
    { nome: "Rainforest Alliance", status: "Em processo", validade: "-" },
  ],
};

const VisualizarRelatorio = () => {
  const [searchParams] = useSearchParams();
  const empresaId = searchParams.get("empresa") || "1";

  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFillColor(34, 139, 34);
    doc.rect(0, 0, pageWidth, 35, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Relatório de Sustentabilidade ESG", pageWidth / 2, 15, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(relatorioData.empresa.nome, pageWidth / 2, 25, { align: "center" });
    doc.text(relatorioData.empresa.periodoAnalise, pageWidth / 2, 32, { align: "center" });

    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Company Info
    let yPos = 50;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Informações da Empresa", 15, yPos);
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`CNPJ: ${relatorioData.empresa.cnpj}`, 15, yPos);
    yPos += 6;
    doc.text(`Setor: ${relatorioData.empresa.setor}`, 15, yPos);
    yPos += 6;
    doc.text(`Localização: ${relatorioData.empresa.localizacao}`, 15, yPos);
    
    // ESG Score
    yPos += 15;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Pontuação ESG", 15, yPos);
    yPos += 10;
    doc.setFontSize(24);
    doc.setTextColor(34, 139, 34);
    doc.text(`${relatorioData.resumoExecutivo.pontuacaoESG}`, 15, yPos);
    doc.setFontSize(12);
    doc.text(` / 100  (Classificação: ${relatorioData.resumoExecutivo.classificacao})`, 35, yPos);
    doc.setTextColor(0, 0, 0);
    
    // Metrics
    yPos += 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Métricas de Impacto Ambiental", 15, yPos);
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    // Emissões
    doc.text(`Emissões CO₂:`, 15, yPos);
    doc.text(`Baseline: ${relatorioData.metricas.emissoes.baseline} ${relatorioData.metricas.emissoes.unidade}`, 60, yPos);
    doc.text(`Atual: ${relatorioData.metricas.emissoes.atual} ${relatorioData.metricas.emissoes.unidade}`, 130, yPos);
    doc.setTextColor(34, 139, 34);
    doc.text(`(-${relatorioData.metricas.emissoes.reducao}%)`, 180, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
    
    // Água
    doc.text(`Consumo de Água:`, 15, yPos);
    doc.text(`Baseline: ${(relatorioData.metricas.agua.baseline / 1000000).toFixed(1)}M L/ano`, 60, yPos);
    doc.text(`Atual: ${(relatorioData.metricas.agua.atual / 1000000).toFixed(1)}M L/ano`, 130, yPos);
    doc.setTextColor(34, 139, 34);
    doc.text(`(-${relatorioData.metricas.agua.reducao}%)`, 180, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
    
    // Energia
    doc.text(`Consumo de Energia:`, 15, yPos);
    doc.text(`Baseline: ${(relatorioData.metricas.energia.baseline / 1000).toFixed(0)}K kWh/ano`, 60, yPos);
    doc.text(`Atual: ${(relatorioData.metricas.energia.atual / 1000).toFixed(0)}K kWh/ano`, 130, yPos);
    doc.setTextColor(34, 139, 34);
    doc.text(`(-${relatorioData.metricas.energia.reducao}%)`, 180, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
    
    // Resíduos
    doc.text(`Resíduos Gerados:`, 15, yPos);
    doc.text(`Baseline: ${relatorioData.metricas.residuos.baseline} ton/ano`, 60, yPos);
    doc.text(`Atual: ${relatorioData.metricas.residuos.atual} ton/ano`, 130, yPos);
    doc.setTextColor(34, 139, 34);
    doc.text(`(-${relatorioData.metricas.residuos.reducao}%)`, 180, yPos);
    doc.setTextColor(0, 0, 0);
    
    // ODS
    yPos += 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Contribuição para ODS", 15, yPos);
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    relatorioData.odsContribuicao.forEach((ods) => {
      doc.text(`ODS ${ods.ods} - ${ods.nome}: ${ods.contribuicao}%`, 15, yPos);
      yPos += 6;
    });
    
    // Soluções
    yPos += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Soluções Implementadas", 15, yPos);
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    relatorioData.solucoesImplementadas.forEach((sol) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(`• ${sol.nome} (${sol.fornecedor})`, 15, yPos);
      doc.text(`Impacto: ${sol.impactoMedido}`, 120, yPos);
      yPos += 6;
    });
    
    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `Gerado pelo GreenLinkHub em ${new Date().toLocaleDateString('pt-BR')} - Página ${i} de ${totalPages}`,
        pageWidth / 2,
        290,
        { align: "center" }
      );
    }
    
    doc.save(`relatorio-esg-${relatorioData.empresa.nome.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    toast.success("Relatório PDF exportado com sucesso!");
  };

  const exportToCSV = () => {
    const rows = [
      ["Relatório de Sustentabilidade ESG"],
      [""],
      ["Empresa", relatorioData.empresa.nome],
      ["CNPJ", relatorioData.empresa.cnpj],
      ["Setor", relatorioData.empresa.setor],
      ["Localização", relatorioData.empresa.localizacao],
      ["Período", relatorioData.empresa.periodoAnalise],
      [""],
      ["Pontuação ESG", relatorioData.resumoExecutivo.pontuacaoESG.toString()],
      ["Classificação", relatorioData.resumoExecutivo.classificacao],
      [""],
      ["MÉTRICAS DE IMPACTO"],
      ["Métrica", "Baseline", "Atual", "Meta", "Redução"],
      ["Emissões CO₂ (ton/ano)", relatorioData.metricas.emissoes.baseline.toString(), relatorioData.metricas.emissoes.atual.toString(), relatorioData.metricas.emissoes.meta.toString(), `-${relatorioData.metricas.emissoes.reducao}%`],
      ["Água (L/ano)", relatorioData.metricas.agua.baseline.toString(), relatorioData.metricas.agua.atual.toString(), relatorioData.metricas.agua.meta.toString(), `-${relatorioData.metricas.agua.reducao}%`],
      ["Energia (kWh/ano)", relatorioData.metricas.energia.baseline.toString(), relatorioData.metricas.energia.atual.toString(), relatorioData.metricas.energia.meta.toString(), `-${relatorioData.metricas.energia.reducao}%`],
      ["Resíduos (ton/ano)", relatorioData.metricas.residuos.baseline.toString(), relatorioData.metricas.residuos.atual.toString(), relatorioData.metricas.residuos.meta.toString(), `-${relatorioData.metricas.residuos.reducao}%`],
      [""],
      ["CONTRIBUIÇÃO ODS"],
      ["ODS", "Nome", "Contribuição"],
      ...relatorioData.odsContribuicao.map(ods => [ods.ods.toString(), ods.nome, `${ods.contribuicao}%`]),
      [""],
      ["SOLUÇÕES IMPLEMENTADAS"],
      ["Solução", "Fornecedor", "Data", "Impacto", "Status"],
      ...relatorioData.solucoesImplementadas.map(sol => [sol.nome, sol.fornecedor, sol.dataImplementacao, sol.impactoMedido, sol.status]),
    ];

    const csvContent = rows.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `relatorio-esg-${relatorioData.empresa.nome.toLowerCase().replace(/\s+/g, '-')}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Relatório CSV exportado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
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
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mr-4">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar</span>
              </Link>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Compartilhar</span>
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Imprimir</span>
              </Button>
              <Button variant="hero" size="sm" onClick={exportToPDF}>
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">PDF</span>
              </Button>
              <Button variant="outline" size="sm" onClick={exportToCSV}>
                <FileDown className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">CSV</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 print:pt-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Cabeçalho do Relatório */}
          <div className="bg-hero-gradient rounded-2xl p-8 mb-8 print:bg-primary/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <Badge variant="secondary" className="mb-3 bg-primary-foreground/20 text-primary-foreground">
                  Relatório de Sustentabilidade
                </Badge>
                <h1 className="font-display font-bold text-3xl text-primary-foreground mb-2">
                  {relatorioData.empresa.nome}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {relatorioData.empresa.setor}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {relatorioData.empresa.localizacao}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {relatorioData.empresa.periodoAnalise}
                  </span>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <p className="text-sm text-primary-foreground/80 mb-1">Pontuação ESG</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display font-bold text-5xl text-primary-foreground">
                    {relatorioData.resumoExecutivo.pontuacaoESG}
                  </span>
                  <div className="text-left">
                    <Badge className="bg-primary-foreground text-primary mb-1">
                      {relatorioData.resumoExecutivo.classificacao}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-primary-foreground/80">
                      <TrendingUp className="w-3 h-3" />
                      {relatorioData.resumoExecutivo.variacao}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas de Impacto */}
          <div className="mb-8">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Métricas de Impacto Ambiental
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    -{relatorioData.metricas.emissoes.reducao}%
                  </Badge>
                </div>
                <p className="font-display font-bold text-2xl text-foreground mb-1">
                  {relatorioData.metricas.emissoes.atual}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{relatorioData.metricas.emissoes.unidade}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Baseline: {relatorioData.metricas.emissoes.baseline}</span>
                    <span className="text-primary">Meta: {relatorioData.metricas.emissoes.meta}</span>
                  </div>
                  <Progress value={100 - (relatorioData.metricas.emissoes.atual / relatorioData.metricas.emissoes.baseline) * 100} className="h-2" />
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-500" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                    -{relatorioData.metricas.agua.reducao}%
                  </Badge>
                </div>
                <p className="font-display font-bold text-2xl text-foreground mb-1">
                  {(relatorioData.metricas.agua.atual / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-muted-foreground mb-3">litros/ano</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Baseline: {(relatorioData.metricas.agua.baseline / 1000000).toFixed(1)}M</span>
                    <span className="text-blue-500">Meta: {(relatorioData.metricas.agua.meta / 1000000).toFixed(1)}M</span>
                  </div>
                  <Progress value={100 - (relatorioData.metricas.agua.atual / relatorioData.metricas.agua.baseline) * 100} className="h-2" />
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-amber-500" />
                  </div>
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-500">
                    -{relatorioData.metricas.energia.reducao}%
                  </Badge>
                </div>
                <p className="font-display font-bold text-2xl text-foreground mb-1">
                  {(relatorioData.metricas.energia.atual / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-muted-foreground mb-3">kWh/ano</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Baseline: {(relatorioData.metricas.energia.baseline / 1000).toFixed(0)}K</span>
                    <span className="text-amber-500">Meta: {(relatorioData.metricas.energia.meta / 1000).toFixed(0)}K</span>
                  </div>
                  <Progress value={100 - (relatorioData.metricas.energia.atual / relatorioData.metricas.energia.baseline) * 100} className="h-2" />
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-green-500" />
                  </div>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                    -{relatorioData.metricas.residuos.reducao}%
                  </Badge>
                </div>
                <p className="font-display font-bold text-2xl text-foreground mb-1">
                  {relatorioData.metricas.residuos.atual}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{relatorioData.metricas.residuos.unidade}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Baseline: {relatorioData.metricas.residuos.baseline}</span>
                    <span className="text-green-500">Meta: {relatorioData.metricas.residuos.meta}</span>
                  </div>
                  <Progress value={100 - (relatorioData.metricas.residuos.atual / relatorioData.metricas.residuos.baseline) * 100} className="h-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Contribuição para ODS */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Contribuição para os ODS
            </h2>
            <div className="space-y-4">
              {relatorioData.odsContribuicao.map((ods) => (
                <div key={ods.ods} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-primary">{ods.ods}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">ODS {ods.ods} - {ods.nome}</span>
                      <span className="text-sm font-semibold text-primary">{ods.contribuicao}%</span>
                    </div>
                    <Progress value={ods.contribuicao} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soluções Implementadas */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Soluções Implementadas
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Solução</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Fornecedor</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Data</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Impacto</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorioData.solucoesImplementadas.map((solucao, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium text-foreground">{solucao.nome}</td>
                      <td className="py-3 px-2 text-muted-foreground">{solucao.fornecedor}</td>
                      <td className="py-3 px-2 text-muted-foreground">{solucao.dataImplementacao}</td>
                      <td className="py-3 px-2 text-primary font-medium">{solucao.impactoMedido}</td>
                      <td className="py-3 px-2 text-right">
                        <Badge variant={solucao.status === "Operacional" ? "default" : "secondary"}>
                          {solucao.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Certificações */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certificações e Selos
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatorioData.certificacoes.map((cert, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{cert.nome}</p>
                    <p className="text-xs text-muted-foreground">
                      {cert.status === "Válida" ? `Válida até ${cert.validade}` : cert.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Histórico Mensal Simplificado */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Evolução Mensal das Emissões (ton CO₂)
            </h2>
            <div className="flex items-end gap-2 h-48">
              {relatorioData.historicoMensal.map((mes, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary/30"
                    style={{ height: `${(mes.co2 / 80) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{mes.mes}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Redução total de <span className="font-semibold text-primary">61%</span> nas emissões ao longo do período
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VisualizarRelatorio;
