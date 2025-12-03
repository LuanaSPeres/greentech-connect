import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  TrendingUp, 
  TrendingDown,
  BarChart3, 
  Users, 
  FileText, 
  Settings,
  Bell,
  Search,
  Plus,
  ArrowRight,
  ArrowLeft,
  Zap,
  Droplets,
  Recycle,
  Target,
  Calendar,
  ChevronRight,
  Home
} from "lucide-react";

const metrics = [
  {
    label: "CO₂ Evitado",
    value: "1,250",
    unit: "ton",
    change: "+12%",
    trend: "up",
    icon: Leaf,
  },
  {
    label: "Água Economizada",
    value: "850K",
    unit: "L",
    change: "+8%",
    trend: "up",
    icon: Droplets,
  },
  {
    label: "Resíduos Reciclados",
    value: "340",
    unit: "ton",
    change: "+23%",
    trend: "up",
    icon: Recycle,
  },
  {
    label: "Energia Renovável",
    value: "78",
    unit: "%",
    change: "+5%",
    trend: "up",
    icon: Zap,
  },
];

const recentConnections = [
  {
    name: "EcoTech Solutions",
    type: "Startup",
    solution: "Sistema de captação de água pluvial",
    status: "Em análise",
    date: "2 dias atrás",
  },
  {
    name: "GreenEnergy BR",
    type: "Startup",
    solution: "Painéis solares de alta eficiência",
    status: "Aprovado",
    date: "5 dias atrás",
  },
  {
    name: "CircularWaste",
    type: "Startup",
    solution: "Gestão inteligente de resíduos",
    status: "Implementando",
    date: "1 semana atrás",
  },
];

const upcomingTasks = [
  { title: "Reunião com EcoTech Solutions", date: "Hoje, 14:00", type: "meeting" },
  { title: "Relatório ESG Q4 2024", date: "15 Dez", type: "deadline" },
  { title: "Auditoria de impacto ambiental", date: "20 Dez", type: "audit" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border hidden lg:block">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              GreenLink<span className="text-primary">Hub</span>
            </span>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          {[
            { icon: Home, label: "Página Inicial", href: "/" },
            { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
            { icon: Search, label: "Explorar Soluções", href: "/solucoes" },
            { icon: Users, label: "Conexões", href: "#" },
            { icon: Target, label: "Registro de Impacto", href: "/registro-impacto" },
            { icon: FileText, label: "Relatórios ESG", href: "/relatorios" },
            { icon: Settings, label: "Perfil da Empresa", href: "/perfil-empresa" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="font-display font-bold text-2xl text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo de volta! Aqui está seu resumo de impacto.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </Button>
              <Button variant="hero" className="hidden sm:flex">
                <Plus className="w-4 h-4" />
                Nova Conexão
              </Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.trend === "up" ? "text-primary" : "text-destructive"
                  }`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="mb-1">
                  <span className="font-display font-bold text-3xl text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-muted-foreground ml-1">{metric.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Connections */}
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-soft">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-semibold text-lg text-foreground">
                  Conexões Recentes
                </h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/solucoes">
                    Ver todas
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="divide-y divide-border">
                {recentConnections.map((connection) => (
                  <div
                    key={connection.name}
                    className="p-6 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{connection.name}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                            {connection.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{connection.solution}</p>
                        <div className="flex items-center gap-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            connection.status === "Aprovado" 
                              ? "bg-primary/10 text-primary"
                              : connection.status === "Implementando"
                              ? "bg-accent/10 text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {connection.status}
                          </span>
                          <span className="text-xs text-muted-foreground">{connection.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-card rounded-2xl border border-border shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-lg text-foreground">
                  Próximas Atividades
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Ver Calendário Completo
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-hero-gradient rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-primary-foreground mb-2">
                  Pronto para escalar seu impacto?
                </h2>
                <p className="text-primary-foreground/80">
                  Explore novas soluções verdes e acelere sua jornada de sustentabilidade.
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link to="/solucoes">
                  Explorar Soluções
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
