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
  Filter
} from "lucide-react";
import { useState } from "react";

const PortalGoverno = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">5</span>
                </Button>
                <Button variant="ghost" size="icon">
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
                  <Button size="sm" variant="hero">
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
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <Eye className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Monitorar Empresas</h3>
                <p className="text-sm text-muted-foreground">Acompanhe o desempenho ESG das empresas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Indicadores Regionais</h3>
                <p className="text-sm text-muted-foreground">Visualize estatísticas consolidadas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <Download className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Exportar Dados</h3>
                <p className="text-sm text-muted-foreground">Gere relatórios consolidados da região</p>
              </div>
            </div>

            {/* Empresas em Destaque */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-semibold text-xl text-foreground">Empresas em Destaque</h2>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
              </div>
              <div className="divide-y divide-border">
                {[
                  { nome: "AgroVale Verde", setor: "Agronegócio", score: 92, cidade: "Ribeirão Preto" },
                  { nome: "EcoTech Solutions", setor: "Tecnologia", score: 88, cidade: "Campinas" },
                  { nome: "Metalúrgica Sustentável", setor: "Indústria", score: 85, cidade: "São Paulo" },
                  { nome: "BioEnergia Sul", setor: "Energia", score: 82, cidade: "Santos" },
                ].map((empresa, index) => (
                  <div key={index} className="p-6 hover:bg-muted/50 transition-colors">
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
                      <div className="text-right">
                        <Badge variant={empresa.score >= 90 ? "default" : "secondary"}>
                          Score ESG: {empresa.score}
                        </Badge>
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
          </div>
        </main>
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
