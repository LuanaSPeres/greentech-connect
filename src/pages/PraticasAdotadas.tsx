import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  ArrowLeft, 
  Building2,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  Calendar,
  Users,
  Target,
  BarChart3,
  Filter,
  Search,
  Download
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Dados de práticas adotadas por empresas
const empresasPraticas = [
  {
    id: 1,
    empresa: "Agro Vale Verde",
    setor: "Agronegócio",
    localizacao: "Ribeirão Preto, SP",
    praticas: [
      { nome: "Sistema de Irrigação Inteligente", status: "Ativo", impacto: "-45% consumo água", dataAdocao: "Mar/2024" },
      { nome: "Biodigestor para Resíduos", status: "Ativo", impacto: "500 m³ biogás/mês", dataAdocao: "Jan/2024" },
      { nome: "Drones para Monitoramento", status: "Implementando", impacto: "-30% defensivos", dataAdocao: "Nov/2024" },
    ],
    metricas: { co2: 320, agua: 2500000, energia: 45000 },
    progresso: 78,
  },
  {
    id: 2,
    empresa: "Indústria MetalTech",
    setor: "Indústria",
    localizacao: "Joinville, SC",
    praticas: [
      { nome: "Painéis Solares Bifaciais", status: "Ativo", impacto: "-35% energia rede", dataAdocao: "Fev/2024" },
      { nome: "Sistema de Reuso de Água", status: "Ativo", impacto: "-50% consumo água", dataAdocao: "Abr/2024" },
    ],
    metricas: { co2: 180, agua: 1200000, energia: 85000 },
    progresso: 65,
  },
  {
    id: 3,
    empresa: "Cooperativa AgroSul",
    setor: "Agronegócio",
    localizacao: "Cascavel, PR",
    praticas: [
      { nome: "Plantio Direto com Cobertura", status: "Ativo", impacto: "+40% carbono solo", dataAdocao: "Jan/2024" },
      { nome: "Integração Lavoura-Pecuária", status: "Ativo", impacto: "+25% produtividade", dataAdocao: "Mar/2024" },
      { nome: "Energia Solar Fotovoltaica", status: "Ativo", impacto: "100% energia renovável", dataAdocao: "Jun/2024" },
      { nome: "Rastreabilidade Blockchain", status: "Implementando", impacto: "100% rastreável", dataAdocao: "Out/2024" },
    ],
    metricas: { co2: 520, agua: 3800000, energia: 120000 },
    progresso: 92,
  },
  {
    id: 4,
    empresa: "Logística EcoTrans",
    setor: "Transporte",
    localizacao: "São Paulo, SP",
    praticas: [
      { nome: "Frota Elétrica", status: "Implementando", impacto: "-60% emissões", dataAdocao: "Set/2024" },
      { nome: "Otimização de Rotas com IA", status: "Ativo", impacto: "-20% combustível", dataAdocao: "Mai/2024" },
    ],
    metricas: { co2: 450, agua: 50000, energia: 200000 },
    progresso: 48,
  },
  {
    id: 5,
    empresa: "Fazenda Três Irmãos",
    setor: "Agronegócio",
    localizacao: "Sorriso, MT",
    praticas: [
      { nome: "Agricultura de Precisão", status: "Ativo", impacto: "-35% insumos", dataAdocao: "Fev/2024" },
      { nome: "Recuperação de Áreas Degradadas", status: "Ativo", impacto: "200 ha restaurados", dataAdocao: "Jan/2024" },
      { nome: "Monitoramento via Satélite", status: "Ativo", impacto: "100% cobertura", dataAdocao: "Abr/2024" },
    ],
    metricas: { co2: 680, agua: 4200000, energia: 95000 },
    progresso: 85,
  },
];

// Estatísticas gerais
const estatisticasGerais = {
  totalEmpresas: 156,
  totalPraticas: 423,
  co2TotalEvitado: 12500,
  aguaEconomizada: 85000000,
};

const PraticasAdotadas = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [setorFiltro, setSetorFiltro] = useState("all");

  const empresasFiltradas = empresasPraticas.filter((empresa) => {
    const matchesSearch = empresa.empresa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      empresa.praticas.some(p => p.nome.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSetor = setorFiltro === "all" || empresa.setor.toLowerCase() === setorFiltro.toLowerCase();
    return matchesSearch && matchesSetor;
  });

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
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar ao início</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Dashboard de Práticas Adotadas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acompanhe as práticas sustentáveis adotadas pelas empresas e seus impactos mensuráveis
            </p>
          </div>

          {/* Estatísticas Gerais */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Empresas Ativas</span>
              </div>
              <p className="font-display font-bold text-3xl text-foreground">{estatisticasGerais.totalEmpresas}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Práticas Implementadas</span>
              </div>
              <p className="font-display font-bold text-3xl text-foreground">{estatisticasGerais.totalPraticas}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">CO₂ Evitado (ton)</span>
              </div>
              <p className="font-display font-bold text-3xl text-foreground">{estatisticasGerais.co2TotalEvitado.toLocaleString()}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm text-muted-foreground">Água Economizada (L)</span>
              </div>
              <p className="font-display font-bold text-3xl text-foreground">85M</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar empresas ou práticas..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={setorFiltro} onValueChange={setSetorFiltro}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Setores</SelectItem>
                  <SelectItem value="agronegócio">Agronegócio</SelectItem>
                  <SelectItem value="indústria">Indústria</SelectItem>
                  <SelectItem value="transporte">Transporte</SelectItem>
                  <SelectItem value="energia">Energia</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Lista de Empresas */}
          <div className="space-y-6">
            {empresasFiltradas.map((empresa) => (
              <div key={empresa.id} className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
                {/* Header da Empresa */}
                <div className="p-6 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display font-semibold text-xl text-foreground">{empresa.empresa}</h3>
                        <Badge variant="secondary">{empresa.setor}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {empresa.localizacao}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {empresa.praticas.length} práticas
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Progresso ESG</p>
                      <div className="flex items-center gap-3">
                        <Progress value={empresa.progresso} className="w-32 h-2" />
                        <span className="font-semibold text-primary">{empresa.progresso}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
                  <div className="p-4 text-center">
                    <p className="text-2xl font-display font-bold text-foreground">{empresa.metricas.co2}</p>
                    <p className="text-xs text-muted-foreground">ton CO₂ evitadas</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-display font-bold text-foreground">{(empresa.metricas.agua / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-muted-foreground">litros economizados</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-display font-bold text-foreground">{(empresa.metricas.energia / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-muted-foreground">kWh economizados</p>
                  </div>
                </div>

                {/* Práticas */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Práticas Implementadas</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {empresa.praticas.map((pratica, index) => (
                      <div key={index} className="bg-muted/50 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-foreground text-sm">{pratica.nome}</h5>
                          {pratica.status === "Ativo" ? (
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          ) : (
                            <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium mb-2">{pratica.impacto}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {pratica.dataAdocao}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {empresasFiltradas.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Nenhuma empresa encontrada
              </h3>
              <p className="text-muted-foreground">
                Tente ajustar os filtros de busca.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PraticasAdotadas;
