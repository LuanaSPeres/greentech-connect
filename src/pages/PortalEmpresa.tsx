import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  ArrowLeft, 
  Building2,
  Users,
  TrendingUp,
  Bell,
  Settings,
  Search,
  FileText,
  Target,
  BarChart3,
  CheckCircle2,
  Clock,
  Download,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

const PortalEmpresa = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dashboard da Empresa após login
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
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">3</span>
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
                Olá, AgroVale Verde
              </h1>
              <p className="text-muted-foreground">
                Bem-vindo ao seu portal empresarial. Acompanhe suas metas ESG e descubra novas soluções sustentáveis.
              </p>
            </div>

            {/* Alerta de Novas Soluções */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">3 novas soluções compatíveis!</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Encontramos soluções com score acima de 80% para seu perfil de sustentabilidade.
                  </p>
                  <Link to="/solucoes">
                    <Button size="sm" variant="hero">
                      Ver Soluções
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">78%</p>
                <p className="text-sm text-muted-foreground">Progresso ESG</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Práticas Ativas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">320</p>
                <p className="text-sm text-muted-foreground">ton CO₂ Evitadas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">A</p>
                <p className="text-sm text-muted-foreground">Classificação ESG</p>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link to="/solucoes" className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <Search className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Buscar Soluções</h3>
                <p className="text-sm text-muted-foreground">Encontre tecnologias verdes para sua empresa</p>
              </Link>
              <Link to="/registro-impacto" className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <FileText className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Registrar Impacto</h3>
                <p className="text-sm text-muted-foreground">Documente seus resultados de sustentabilidade</p>
              </Link>
              <Link to="/visualizar-relatorio" className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <Download className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Relatório ESG</h3>
                <p className="text-sm text-muted-foreground">Exporte seu relatório de sustentabilidade</p>
              </Link>
            </div>

            {/* Práticas Adotadas */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-semibold text-xl text-foreground">Práticas Adotadas</h2>
                <Link to="/praticas-adotadas">
                  <Button variant="outline" size="sm">Ver Todas</Button>
                </Link>
              </div>
              <div className="divide-y divide-border">
                {[
                  { nome: "Sistema de Irrigação Inteligente", impacto: "-45% água", status: "Ativo", progresso: 100 },
                  { nome: "Biodigestor para Resíduos", impacto: "500 m³ biogás/mês", status: "Ativo", progresso: 100 },
                  { nome: "Drones para Monitoramento", impacto: "-30% defensivos", status: "Implementando", progresso: 65 },
                ].map((pratica, index) => (
                  <div key={index} className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium text-foreground">{pratica.nome}</h3>
                        {pratica.status === "Ativo" ? (
                          <Badge variant="default">Ativo</Badge>
                        ) : (
                          <Badge variant="secondary">
                            <Clock className="w-3 h-3 mr-1" />
                            {pratica.status}
                          </Badge>
                        )}
                      </div>
                      <span className="text-primary font-medium">{pratica.impacto}</span>
                    </div>
                    <Progress value={pratica.progresso} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Metas de Sustentabilidade */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display font-semibold text-xl text-foreground mb-6">Metas de Sustentabilidade 2024</h2>
              <div className="space-y-6">
                {[
                  { nome: "Redução de Emissões CO₂", meta: "30%", atual: 45, cor: "primary" },
                  { nome: "Economia de Água", meta: "40%", atual: 62, cor: "blue-500" },
                  { nome: "Energia Renovável", meta: "50%", atual: 78, cor: "amber-500" },
                  { nome: "Resíduos Reciclados", meta: "60%", atual: 55, cor: "green-500" },
                ].map((meta, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">{meta.nome}</span>
                      <span className="text-sm text-muted-foreground">Meta: {meta.meta}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={meta.atual} className="h-3 flex-1" />
                      <span className={`font-semibold text-${meta.cor}`}>{meta.atual}%</span>
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
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl text-foreground mb-2">
              Portal da Empresa
            </h1>
            <p className="text-muted-foreground">
              Acesse sua conta para gerenciar suas metas ESG
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input 
                  id="cnpj" 
                  type="text" 
                  placeholder="00.000.000/0001-00"
                  defaultValue="12.345.678/0001-90"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Corporativo</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contato@empresa.com.br"
                  defaultValue="gestao@agrovale.com.br"
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
              <p className="text-muted-foreground text-sm mb-4">Ainda não tem conta?</p>
              <Link to="/cadastro">
                <Button variant="outline" className="w-full">
                  <Building2 className="w-4 h-4 mr-2" />
                  Cadastrar Empresa
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefícios */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-card rounded-xl p-4 border border-border">
              <Search className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Encontre soluções</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Acompanhe metas</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Relatórios ESG</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalEmpresa;
