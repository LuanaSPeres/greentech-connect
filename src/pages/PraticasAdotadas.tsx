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
  Download,
  X,
  Info,
  Droplets,
  Zap
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

// Descrições detalhadas das práticas
const praticasDescricoes: Record<string, { descricao: string; beneficios: string[]; requisitos: string[]; custo: string; roi: string }> = {
  "Sistema de Irrigação Inteligente": {
    descricao: "Sistema automatizado que utiliza sensores de umidade do solo, dados meteorológicos e inteligência artificial para otimizar a irrigação agrícola, aplicando água apenas quando e onde necessário.",
    beneficios: ["Redução de até 45% no consumo de água", "Aumento de 20% na produtividade", "Redução de doenças causadas por excesso de umidade", "Monitoramento em tempo real via aplicativo"],
    requisitos: ["Infraestrutura básica de irrigação", "Conexão à internet", "Energia elétrica no local"],
    custo: "R$ 15.000 - R$ 50.000 por hectare",
    roi: "Retorno em 12-18 meses"
  },
  "Biodigestor para Resíduos": {
    descricao: "Equipamento que realiza a decomposição anaeróbica de resíduos orgânicos (dejetos animais, restos de culturas), produzindo biogás para energia e biofertilizante rico em nutrientes.",
    beneficios: ["Geração de energia limpa e renovável", "Produção de biofertilizante", "Destinação adequada de resíduos", "Redução de odores e vetores"],
    requisitos: ["Volume mínimo de resíduos orgânicos", "Área para instalação", "Manutenção periódica"],
    custo: "R$ 80.000 - R$ 500.000",
    roi: "Retorno em 24-36 meses"
  },
  "Drones para Monitoramento": {
    descricao: "Utilização de drones equipados com câmeras multiespectrais e sensores para monitoramento de lavouras, identificação precoce de pragas, doenças e deficiências nutricionais.",
    beneficios: ["Redução de 30% no uso de defensivos", "Detecção precoce de problemas", "Mapeamento preciso da propriedade", "Economia de tempo e mão de obra"],
    requisitos: ["Licença da ANAC para operação", "Operador treinado", "Software de processamento de imagens"],
    custo: "R$ 25.000 - R$ 150.000",
    roi: "Retorno em 8-12 meses"
  },
  "Painéis Solares Bifaciais": {
    descricao: "Painéis fotovoltaicos de alta eficiência que captam energia solar em ambas as faces, aumentando a geração em até 30% comparado aos painéis tradicionais.",
    beneficios: ["Redução de até 35% na conta de energia", "Maior geração por área instalada", "Vida útil superior a 25 anos", "Manutenção mínima"],
    requisitos: ["Área disponível para instalação", "Análise de sombreamento", "Conexão à rede elétrica"],
    custo: "R$ 4.000 - R$ 7.000 por kWp",
    roi: "Retorno em 4-6 anos"
  },
  "Sistema de Reuso de Água": {
    descricao: "Sistema de tratamento e reaproveitamento de águas residuais para fins não potáveis, como irrigação, limpeza e processos industriais.",
    beneficios: ["Economia de até 50% no consumo de água", "Redução de efluentes lançados", "Menor dependência de fontes externas", "Conformidade ambiental"],
    requisitos: ["Estação de tratamento adequada", "Separação de redes hidráulicas", "Monitoramento de qualidade"],
    custo: "R$ 50.000 - R$ 300.000",
    roi: "Retorno em 18-30 meses"
  },
  "Plantio Direto com Cobertura": {
    descricao: "Técnica de cultivo que mantém o solo permanentemente coberto com palha ou plantas de cobertura, eliminando o revolvimento e aumentando o sequestro de carbono.",
    beneficios: ["Aumento de 40% no carbono do solo", "Redução da erosão", "Maior retenção de água", "Economia em preparo do solo"],
    requisitos: ["Equipamentos específicos (plantadeiras)", "Manejo adequado de palhada", "Rotação de culturas"],
    custo: "R$ 800 - R$ 1.500 por hectare",
    roi: "Benefícios a partir do 2º ano"
  },
  "Integração Lavoura-Pecuária": {
    descricao: "Sistema que integra a produção agrícola e pecuária na mesma área, alternando cultivos e pastejo, promovendo a recuperação do solo e diversificação de renda.",
    beneficios: ["Aumento de 25% na produtividade", "Diversificação de receitas", "Melhoria da fertilidade do solo", "Redução de pragas e doenças"],
    requisitos: ["Planejamento integrado", "Infraestrutura para ambas atividades", "Conhecimento técnico"],
    custo: "R$ 2.000 - R$ 5.000 por hectare",
    roi: "Retorno em 12-24 meses"
  },
  "Energia Solar Fotovoltaica": {
    descricao: "Sistema de geração de energia elétrica a partir da luz solar, convertida por painéis fotovoltaicos, podendo suprir 100% da demanda energética da propriedade.",
    beneficios: ["100% energia renovável", "Independência energética", "Economia a longo prazo", "Valorização do imóvel"],
    requisitos: ["Área para instalação dos painéis", "Avaliação da rede elétrica", "Projeto técnico aprovado"],
    custo: "R$ 5.000 - R$ 8.000 por kWp",
    roi: "Retorno em 4-7 anos"
  },
  "Rastreabilidade Blockchain": {
    descricao: "Sistema de rastreamento de produtos agrícolas usando tecnologia blockchain, garantindo transparência e imutabilidade dos dados desde a origem até o consumidor final.",
    beneficios: ["100% rastreabilidade", "Acesso a mercados premium", "Combate a fraudes", "Confiança do consumidor"],
    requisitos: ["Sistema de identificação dos produtos", "Integração com parceiros da cadeia", "Treinamento de equipe"],
    custo: "R$ 0,50 - R$ 2,00 por unidade rastreada",
    roi: "Retorno em 6-12 meses"
  },
  "Frota Elétrica": {
    descricao: "Substituição de veículos movidos a combustíveis fósseis por veículos elétricos, reduzindo emissões e custos operacionais com combustível e manutenção.",
    beneficios: ["Redução de 60% nas emissões", "Economia em combustível", "Menor custo de manutenção", "Imagem sustentável"],
    requisitos: ["Infraestrutura de recarga", "Planejamento de autonomia", "Investimento inicial elevado"],
    custo: "R$ 150.000 - R$ 400.000 por veículo",
    roi: "Retorno em 5-8 anos"
  },
  "Otimização de Rotas com IA": {
    descricao: "Software de inteligência artificial que analisa múltiplas variáveis para calcular as rotas mais eficientes, reduzindo distâncias percorridas e consumo de combustível.",
    beneficios: ["Economia de 20% em combustível", "Redução do tempo de entrega", "Menor desgaste dos veículos", "Satisfação do cliente"],
    requisitos: ["Sistema de gestão de frotas", "GPS nos veículos", "Integração com sistemas existentes"],
    custo: "R$ 200 - R$ 500 por veículo/mês",
    roi: "Retorno imediato"
  },
  "Agricultura de Precisão": {
    descricao: "Conjunto de tecnologias que permitem o manejo localizado das lavouras, aplicando insumos de forma variável conforme as necessidades específicas de cada área.",
    beneficios: ["Redução de 35% em insumos", "Aumento da produtividade", "Menor impacto ambiental", "Dados para tomada de decisão"],
    requisitos: ["Equipamentos com GPS e taxa variável", "Mapeamento da propriedade", "Software de gestão"],
    custo: "R$ 500 - R$ 2.000 por hectare",
    roi: "Retorno em 1-2 safras"
  },
  "Recuperação de Áreas Degradadas": {
    descricao: "Processo de restauração ecológica de áreas impactadas, utilizando espécies nativas e técnicas de manejo para recuperar a biodiversidade e serviços ecossistêmicos.",
    beneficios: ["Restauração da biodiversidade", "Créditos de carbono", "Regularização ambiental", "Valorização da propriedade"],
    requisitos: ["Diagnóstico da área", "Mudas de espécies nativas", "Acompanhamento técnico"],
    custo: "R$ 8.000 - R$ 25.000 por hectare",
    roi: "Benefícios a médio/longo prazo"
  },
  "Monitoramento via Satélite": {
    descricao: "Utilização de imagens de satélite para monitoramento contínuo das áreas de cultivo, permitindo análise de vegetação, detecção de anomalias e planejamento agrícola.",
    beneficios: ["Cobertura 100% da área", "Monitoramento contínuo", "Histórico de imagens", "Alertas automáticos"],
    requisitos: ["Assinatura de serviço", "Internet para acesso", "Treinamento para interpretação"],
    custo: "R$ 5 - R$ 20 por hectare/ano",
    roi: "Retorno imediato"
  },
};

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
  const [selectedPratica, setSelectedPratica] = useState<string | null>(null);

  const empresasFiltradas = empresasPraticas.filter((empresa) => {
    const matchesSearch = empresa.empresa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      empresa.praticas.some(p => p.nome.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSetor = setorFiltro === "all" || empresa.setor.toLowerCase() === setorFiltro.toLowerCase();
    return matchesSearch && matchesSetor;
  });

  const praticaInfo = selectedPratica ? praticasDescricoes[selectedPratica] : null;

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
                      <div 
                        key={index} 
                        className="bg-muted/50 rounded-xl p-4 cursor-pointer hover:bg-muted transition-colors"
                        onClick={() => setSelectedPratica(pratica.nome)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-foreground text-sm">{pratica.nome}</h5>
                          <div className="flex items-center gap-1">
                            <Info className="w-4 h-4 text-muted-foreground" />
                            {pratica.status === "Ativo" ? (
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            ) : (
                              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            )}
                          </div>
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

      {/* Dialog para detalhes da prática */}
      <Dialog open={!!selectedPratica} onOpenChange={() => setSelectedPratica(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              {selectedPratica}
            </DialogTitle>
            <DialogDescription>
              Informações detalhadas sobre esta prática sustentável
            </DialogDescription>
          </DialogHeader>
          
          {praticaInfo && (
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Descrição</h4>
                <p className="text-muted-foreground">{praticaInfo.descricao}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Principais Benefícios</h4>
                <ul className="space-y-2">
                  {praticaInfo.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Requisitos</h4>
                <ul className="space-y-2">
                  {praticaInfo.requisitos.map((requisito, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{requisito}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Investimento Estimado</span>
                  </div>
                  <p className="text-muted-foreground">{praticaInfo.custo}</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Retorno do Investimento</span>
                  </div>
                  <p className="text-muted-foreground">{praticaInfo.roi}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="hero" className="flex-1">
                  <Search className="w-4 h-4 mr-2" />
                  Ver Soluções Relacionadas
                </Button>
                <Button variant="outline" onClick={() => setSelectedPratica(null)}>
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PraticasAdotadas;
