import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  ArrowLeft, 
  FlaskConical,
  BookOpen,
  Users,
  TrendingUp,
  Upload,
  Eye,
  Bell,
  Settings,
  Plus,
  FileText,
  Target,
  Award,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const PortalPesquisador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dashboard do Pesquisador após login
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
                <Button variant="ghost" size="icon">
                  <Bell className="w-5 h-5" />
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
                Olá, Dr. Carlos Silva
              </h1>
              <p className="text-muted-foreground">
                Bem-vindo ao seu portal de pesquisador. Gerencie suas soluções e acompanhe o interesse das empresas.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Soluções Cadastradas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Visualizações</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Empresas Interessadas</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-3xl text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Adoções em Andamento</p>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link to="/cadastro-solucao" className="bg-hero-gradient rounded-2xl p-6 text-primary-foreground hover:opacity-90 transition-opacity">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Cadastrar Nova Solução</h3>
                    <p className="text-primary-foreground/80 text-sm">Registre sua pesquisa ou tecnologia verde</p>
                  </div>
                </div>
              </Link>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">Definir Público-Alvo</h3>
                    <p className="text-muted-foreground text-sm">Escolha quais empresas podem ver suas soluções</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Minhas Soluções */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-xl text-foreground">Minhas Soluções</h2>
              </div>
              <div className="divide-y divide-border">
                {[
                  {
                    nome: "Biofilme para Conservação de Frutas",
                    trl: "TRL 7",
                    ods: ["ODS 2", "ODS 12"],
                    visualizacoes: 89,
                    interessados: 5,
                    status: "Aprovado"
                  },
                  {
                    nome: "Sistema de Compostagem Acelerada",
                    trl: "TRL 6",
                    ods: ["ODS 12", "ODS 13"],
                    visualizacoes: 45,
                    interessados: 3,
                    status: "Aprovado"
                  },
                  {
                    nome: "Biofertilizante de Microalgas",
                    trl: "TRL 5",
                    ods: ["ODS 2", "ODS 15"],
                    visualizacoes: 22,
                    interessados: 4,
                    status: "Em Análise"
                  },
                ].map((solucao, index) => (
                  <div key={index} className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">{solucao.nome}</h3>
                          <Badge variant={solucao.status === "Aprovado" ? "default" : "secondary"}>
                            {solucao.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{solucao.trl}</Badge>
                          {solucao.ods.map((ods) => (
                            <Badge key={ods} variant="secondary">{ods}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold text-foreground">{solucao.visualizacoes}</p>
                          <p className="text-muted-foreground">Visualizações</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-primary">{solucao.interessados}</p>
                          <p className="text-muted-foreground">Interessados</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Detalhes
                        </Button>
                      </div>
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
              <FlaskConical className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl text-foreground mb-2">
              Portal do Pesquisador
            </h1>
            <p className="text-muted-foreground">
              Acesse sua conta para gerenciar suas soluções verdes
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Institucional</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu.email@universidade.edu.br"
                  defaultValue="carlos.silva@usp.br"
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
                  <BookOpen className="w-4 h-4 mr-2" />
                  Cadastrar como Pesquisador
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefícios */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-card rounded-xl p-4 border border-border">
              <Upload className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Cadastre soluções</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Conecte com empresas</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Valorize sua pesquisa</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalPesquisador;
