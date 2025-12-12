import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  ArrowLeft, 
  Landmark,
  TrendingUp,
  Bell,
  Settings,
  FileText,
  BarChart3,
  MapPin,
  Users,
  Factory,
  Download,
  Eye,
  Filter,
  X,
  Search,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const empresasData = [
  { id: 1, nome: "AgroVale Verde", setor: "Agronegócio", score: 92, cidade: "Ribeirão Preto", status: "aprovado", relatorios: 4, ultimoRelatorio: "2024-01-15" },
  { id: 2, nome: "EcoTech Solutions", setor: "Tecnologia", score: 88, cidade: "Campinas", status: "aprovado", relatorios: 3, ultimoRelatorio: "2024-01-10" },
  { id: 3, nome: "Metalúrgica Sustentável", setor: "Indústria", score: 85, cidade: "São Paulo", status: "pendente", relatorios: 2, ultimoRelatorio: "2024-01-08" },
  { id: 4, nome: "BioEnergia Sul", setor: "Energia", score: 82, cidade: "Santos", status: "aprovado", relatorios: 5, ultimoRelatorio: "2024-01-05" },
  { id: 5, nome: "Têxtil Verde", setor: "Têxtil", score: 76, cidade: "Sorocaba", status: "pendente", relatorios: 1, ultimoRelatorio: "2024-01-02" },
  { id: 6, nome: "Químicos Eco", setor: "Química", score: 71, cidade: "Guarulhos", status: "revisão", relatorios: 2, ultimoRelatorio: "2023-12-28" },
];

const relatoriosData = [
  { id: 1, empresa: "AgroVale Verde", tipo: "Relatório Anual ESG", data: "2024-01-15", status: "pendente" },
  { id: 2, empresa: "EcoTech Solutions", tipo: "Relatório Trimestral", data: "2024-01-10", status: "pendente" },
  { id: 3, empresa: "Metalúrgica Sustentável", tipo: "Certificação Ambiental", data: "2024-01-08", status: "pendente" },
  { id: 4, empresa: "BioEnergia Sul", tipo: "Relatório de Emissões", data: "2024-01-05", status: "aprovado" },
  { id: 5, empresa: "Têxtil Verde", tipo: "Plano de Sustentabilidade", data: "2024-01-02", status: "pendente" },
];

const PortalGoverno = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<'dashboard' | 'empresas' | 'indicadores' | 'relatorios'>('dashboard');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEmpresaModal, setShowEmpresaModal] = useState(false);
  const [showNotificacoesModal, setShowNotificacoesModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState<typeof empresasData[0] | null>(null);
  const [filterSetor, setFilterSetor] = useState<string>('todos');
  const [filterCidade, setFilterCidade] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredEmpresas = empresasData.filter(empresa => {
    const matchSetor = filterSetor === 'todos' || empresa.setor === filterSetor;
    const matchCidade = filterCidade === 'todas' || empresa.cidade === filterCidade;
    const matchSearch = empresa.nome.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSetor && matchCidade && matchSearch;
  });

  const handleExportData = () => {
    toast({
      title: "Exportação iniciada",
      description: "O relatório consolidado será enviado para seu e-mail em alguns minutos.",
    });
  };

  const handleAprovarRelatorio = (id: number) => {
    toast({
      title: "Relatório aprovado",
      description: "O relatório foi aprovado com sucesso.",
    });
  };

  const handleRevisarRelatorio = (id: number) => {
    toast({
      title: "Solicitação enviada",
      description: "Uma solicitação de revisão foi enviada para a empresa.",
    });
  };

  // Dashboard do Governo após login
  if (isLoggedIn) {
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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={() => setShowNotificacoesModal(true)}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">5</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowConfigModal(true)}
                >
                  <Settings className="w-5 h-5" />
                </Button>
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                  Sair
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Navegação de Abas */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <Button 
                variant={activeView === 'dashboard' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('dashboard')}
              >
                Dashboard
              </Button>
              <Button 
                variant={activeView === 'empresas' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('empresas')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Monitorar Empresas
              </Button>
              <Button 
                variant={activeView === 'indicadores' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('indicadores')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Indicadores
              </Button>
              <Button 
                variant={activeView === 'relatorios' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('relatorios')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Relatórios
              </Button>
            </div>

            {/* Dashboard View */}
            {activeView === 'dashboard' && (
              <>
                {/* Boas-vindas */}
                <div className="mb-8">
                  <h1 className="font-display font-bold text-3xl text-foreground mb-2">
                    Secretaria de Meio Ambiente - SP
                  </h1>
                  <p className="text-muted-foreground">
                    Acompanhe os indicadores regionais de sustentabilidade e monitore as empresas cadastradas.
                  </p>
                </div>

                {/* Alerta de Relatórios */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">12 novos relatórios ESG recebidos</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Empresas da região submeteram relatórios para análise este mês.
                      </p>
                      <Button size="sm" variant="hero" onClick={() => setActiveView('relatorios')}>
                        Analisar Relatórios
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Estatísticas Regionais */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Factory className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-3xl text-foreground">247</p>
                    <p className="text-sm text-muted-foreground">Empresas Cadastradas</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-3xl text-foreground">68%</p>
                    <p className="text-sm text-muted-foreground">Média ESG Regional</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-amber-500" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-3xl text-foreground">4.2K</p>
                    <p className="text-sm text-muted-foreground">ton CO₂ Evitadas/mês</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-3xl text-foreground">89</p>
                    <p className="text-sm text-muted-foreground">Pesquisadores Ativos</p>
                  </div>
                </div>

                {/* Ações Rápidas */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div 
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => setActiveView('empresas')}
                  >
                    <Eye className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">Monitorar Empresas</h3>
                    <p className="text-sm text-muted-foreground">Acompanhe o desempenho ESG das empresas</p>
                  </div>
                  <div 
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => setActiveView('indicadores')}
                  >
                    <BarChart3 className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">Indicadores Regionais</h3>
                    <p className="text-sm text-muted-foreground">Visualize estatísticas consolidadas</p>
                  </div>
                  <div 
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={handleExportData}
                  >
                    <Download className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">Exportar Dados</h3>
                    <p className="text-sm text-muted-foreground">Gere relatórios consolidados da região</p>
                  </div>
                </div>

                {/* Empresas em Destaque */}
                <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                    <h2 className="font-display font-semibold text-xl text-foreground">Empresas em Destaque</h2>
                    <Button variant="outline" size="sm" onClick={() => setShowFilterModal(true)}>
                      <Filter className="w-4 h-4 mr-2" />
                      Filtrar
                    </Button>
                  </div>
                  <div className="divide-y divide-border">
                    {filteredEmpresas.slice(0, 4).map((empresa) => (
                      <div 
                        key={empresa.id} 
                        className="p-6 hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedEmpresa(empresa);
                          setShowEmpresaModal(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Factory className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{empresa.nome}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{empresa.setor}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {empresa.cidade}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={empresa.score >= 90 ? "default" : "secondary"}>
                              Score ESG: {empresa.score}
                            </Badge>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metas Regionais */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h2 className="font-display font-semibold text-xl text-foreground mb-6">Metas Regionais 2024</h2>
                  <div className="space-y-6">
                    {[
                      { nome: "Empresas com Score ESG > 70", meta: "200", atual: 156, percentual: 78 },
                      { nome: "Redução de Emissões Regionais", meta: "20%", atual: 15, percentual: 75 },
                      { nome: "Adoção de Práticas Sustentáveis", meta: "500", atual: 423, percentual: 85 },
                      { nome: "Certificações Ambientais Emitidas", meta: "100", atual: 67, percentual: 67 },
                    ].map((meta, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-foreground font-medium">{meta.nome}</span>
                          <span className="text-sm text-muted-foreground">Meta: {meta.meta}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Progress value={meta.percentual} className="h-3 flex-1" />
                          <span className="font-semibold text-primary">{meta.percentual}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Empresas View */}
            {activeView === 'empresas' && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="font-display font-bold text-2xl text-foreground mb-1">Monitorar Empresas</h1>
                    <p className="text-muted-foreground">Acompanhe o desempenho ESG de todas as empresas cadastradas</p>
                  </div>
                  <Button variant="outline" onClick={() => setShowFilterModal(true)}>
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Buscar empresa..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="divide-y divide-border">
                    {filteredEmpresas.map((empresa) => (
                      <div 
                        key={empresa.id} 
                        className="p-6 hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedEmpresa(empresa);
                          setShowEmpresaModal(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Factory className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{empresa.nome}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{empresa.setor}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {empresa.cidade}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={empresa.status === 'aprovado' ? 'default' : empresa.status === 'pendente' ? 'secondary' : 'outline'}>
                              {empresa.status === 'aprovado' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                              {empresa.status === 'pendente' && <Clock className="w-3 h-3 mr-1" />}
                              {empresa.status === 'revisão' && <AlertCircle className="w-3 h-3 mr-1" />}
                              {empresa.status}
                            </Badge>
                            <Badge variant={empresa.score >= 90 ? "default" : "secondary"}>
                              Score: {empresa.score}
                            </Badge>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Indicadores View */}
            {activeView === 'indicadores' && (
              <>
                <div className="mb-6">
                  <h1 className="font-display font-bold text-2xl text-foreground mb-1">Indicadores Regionais</h1>
                  <p className="text-muted-foreground">Estatísticas consolidadas de sustentabilidade da região</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">Distribuição por Score ESG</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Excelente (90-100)</span>
                          <span className="font-medium text-foreground">45 empresas</span>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Bom (70-89)</span>
                          <span className="font-medium text-foreground">112 empresas</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Regular (50-69)</span>
                          <span className="font-medium text-foreground">67 empresas</span>
                        </div>
                        <Progress value={27} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Baixo (&lt;50)</span>
                          <span className="font-medium text-foreground">23 empresas</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">Setores mais Sustentáveis</h3>
                    <div className="space-y-4">
                      {[
                        { setor: "Energia Renovável", score: 87, empresas: 34 },
                        { setor: "Tecnologia", score: 82, empresas: 56 },
                        { setor: "Agronegócio", score: 78, empresas: 89 },
                        { setor: "Indústria", score: 71, empresas: 45 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">{item.setor}</p>
                            <p className="text-sm text-muted-foreground">{item.empresas} empresas</p>
                          </div>
                          <Badge variant="default">Score: {item.score}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">Impacto Ambiental Consolidado</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="font-display font-bold text-4xl text-primary">4.2K</p>
                      <p className="text-muted-foreground">ton CO₂ evitadas/mês</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display font-bold text-4xl text-blue-500">12M</p>
                      <p className="text-muted-foreground">litros de água economizados</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display font-bold text-4xl text-green-500">890</p>
                      <p className="text-muted-foreground">ton de resíduos reciclados</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleExportData}>
                    <Download className="w-4 h-4 mr-2" />
                    Exportar Indicadores
                  </Button>
                </div>
              </>
            )}

            {/* Relatórios View */}
            {activeView === 'relatorios' && (
              <>
                <div className="mb-6">
                  <h1 className="font-display font-bold text-2xl text-foreground mb-1">Relatórios ESG</h1>
                  <p className="text-muted-foreground">Analise e aprove os relatórios enviados pelas empresas</p>
                </div>

                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="divide-y divide-border">
                    {relatoriosData.map((relatorio) => (
                      <div key={relatorio.id} className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{relatorio.tipo}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{relatorio.empresa}</span>
                                <span>•</span>
                                <span>{new Date(relatorio.data).toLocaleDateString('pt-BR')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {relatorio.status === 'pendente' ? (
                              <>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleRevisarRelatorio(relatorio.id)}
                                >
                                  Solicitar Revisão
                                </Button>
                                <Button 
                                  size="sm"
                                  onClick={() => handleAprovarRelatorio(relatorio.id)}
                                >
                                  <CheckCircle2 className="w-4 h-4 mr-1" />
                                  Aprovar
                                </Button>
                              </>
                            ) : (
                              <Badge variant="default">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Aprovado
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>

        {/* Modal de Filtros */}
        <Dialog open={showFilterModal} onOpenChange={setShowFilterModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Filtrar Empresas</DialogTitle>
              <DialogDescription>Selecione os critérios para filtrar as empresas</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Setor</Label>
                <Select value={filterSetor} onValueChange={setFilterSetor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os setores</SelectItem>
                    <SelectItem value="Agronegócio">Agronegócio</SelectItem>
                    <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="Indústria">Indústria</SelectItem>
                    <SelectItem value="Energia">Energia</SelectItem>
                    <SelectItem value="Têxtil">Têxtil</SelectItem>
                    <SelectItem value="Química">Química</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Cidade</Label>
                <Select value={filterCidade} onValueChange={setFilterCidade}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as cidades</SelectItem>
                    <SelectItem value="Ribeirão Preto">Ribeirão Preto</SelectItem>
                    <SelectItem value="Campinas">Campinas</SelectItem>
                    <SelectItem value="São Paulo">São Paulo</SelectItem>
                    <SelectItem value="Santos">Santos</SelectItem>
                    <SelectItem value="Sorocaba">Sorocaba</SelectItem>
                    <SelectItem value="Guarulhos">Guarulhos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => {
                setFilterSetor('todos');
                setFilterCidade('todas');
              }}>
                Limpar
              </Button>
              <Button onClick={() => setShowFilterModal(false)}>
                Aplicar
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal de Detalhes da Empresa */}
        <Dialog open={showEmpresaModal} onOpenChange={setShowEmpresaModal}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedEmpresa?.nome}</DialogTitle>
              <DialogDescription>Detalhes da empresa</DialogDescription>
            </DialogHeader>
            {selectedEmpresa && (
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Setor</p>
                    <p className="font-medium">{selectedEmpresa.setor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cidade</p>
                    <p className="font-medium">{selectedEmpresa.cidade}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Score ESG</p>
                    <p className="font-medium text-primary">{selectedEmpresa.score}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant={selectedEmpresa.status === 'aprovado' ? 'default' : 'secondary'}>
                      {selectedEmpresa.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relatórios Enviados</p>
                    <p className="font-medium">{selectedEmpresa.relatorios}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Último Relatório</p>
                    <p className="font-medium">{new Date(selectedEmpresa.ultimoRelatorio).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button className="flex-1" onClick={() => {
                    setShowEmpresaModal(false);
                    setActiveView('relatorios');
                  }}>
                    <FileText className="w-4 h-4 mr-2" />
                    Ver Relatórios
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => {
                    toast({
                      title: "Notificação enviada",
                      description: `Uma notificação foi enviada para ${selectedEmpresa.nome}.`,
                    });
                  }}>
                    <Bell className="w-4 h-4 mr-2" />
                    Notificar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Modal de Notificações */}
        <Dialog open={showNotificacoesModal} onOpenChange={setShowNotificacoesModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Notificações</DialogTitle>
              <DialogDescription>Suas notificações recentes</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-4">
              {[
                { titulo: "Novo relatório recebido", desc: "AgroVale Verde enviou um relatório ESG", tempo: "2h atrás" },
                { titulo: "Meta atingida", desc: "Meta de certificações ambientais atingiu 67%", tempo: "5h atrás" },
                { titulo: "Empresa cadastrada", desc: "Nova empresa registrada: EcoTech Solutions", tempo: "1 dia atrás" },
                { titulo: "Relatório aprovado", desc: "BioEnergia Sul teve relatório aprovado", tempo: "2 dias atrás" },
                { titulo: "Alerta de prazo", desc: "3 empresas com relatórios pendentes", tempo: "3 dias atrás" },
              ].map((notif, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{notif.titulo}</p>
                    <p className="text-sm text-muted-foreground">{notif.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.tempo}</p>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal de Configurações */}
        <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Configurações</DialogTitle>
              <DialogDescription>Gerencie suas preferências</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificações por e-mail</p>
                  <p className="text-sm text-muted-foreground">Receber alertas por e-mail</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Relatórios automáticos</p>
                  <p className="text-sm text-muted-foreground">Enviar relatório semanal</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Alertas de prazo</p>
                  <p className="text-sm text-muted-foreground">Notificar sobre prazos próximos</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => {
                setShowConfigModal(false);
                toast({
                  title: "Configurações salvas",
                  description: "Suas preferências foram atualizadas.",
                });
              }}>
                Salvar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Tela de Login
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
              <span className="hidden sm:inline">Voltar ao início</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
              <Landmark className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl text-foreground mb-2">
              Portal do Governo
            </h1>
            <p className="text-muted-foreground">
              Acesse para monitorar indicadores ESG regionais
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="orgao">Órgão Governamental</Label>
                <Input 
                  id="orgao" 
                  type="text" 
                  placeholder="Nome do órgão"
                  defaultValue="Secretaria de Meio Ambiente - SP"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Institucional</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@gov.br"
                  defaultValue="analista@meioambiente.sp.gov.br"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  defaultValue="12345678"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" defaultChecked />
                  <span className="text-muted-foreground">Lembrar-me</span>
                </label>
                <a href="#" className="text-primary hover:underline">Esqueci a senha</a>
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground text-sm mb-4">Ainda não tem acesso?</p>
              <Link to="/cadastro">
                <Button variant="outline" className="w-full">
                  <Landmark className="w-4 h-4 mr-2" />
                  Solicitar Cadastro
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefícios */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-card rounded-xl p-4 border border-border">
              <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Monitoramento</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Indicadores</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Relatórios</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalGoverno;
