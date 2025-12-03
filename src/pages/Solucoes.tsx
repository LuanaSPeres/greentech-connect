import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Search, 
  Filter, 
  ArrowLeft,
  MapPin,
  Building2,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Heart,
  Share2,
  Zap,
  Droplets,
  Recycle,
  Wind,
  Sun,
  TreePine
} from "lucide-react";

const categories = [
  { id: "all", label: "Todas", icon: Leaf },
  { id: "energia", label: "Energia", icon: Sun },
  { id: "agua", label: "Água", icon: Droplets },
  { id: "residuos", label: "Resíduos", icon: Recycle },
  { id: "emissoes", label: "Emissões", icon: Wind },
  { id: "biodiversidade", label: "Biodiversidade", icon: TreePine },
];

// RF02: Filtros avançados
const trlOptions = [
  { value: "all", label: "Todos os TRLs" },
  { value: "1-3", label: "TRL 1-3 (Pesquisa)" },
  { value: "4-6", label: "TRL 4-6 (Desenvolvimento)" },
  { value: "7-9", label: "TRL 7-9 (Comercial)" },
];

const odsOptions = [
  { value: "all", label: "Todas as ODS" },
  { value: "6", label: "ODS 6 - Água" },
  { value: "7", label: "ODS 7 - Energia" },
  { value: "12", label: "ODS 12 - Consumo Responsável" },
  { value: "13", label: "ODS 13 - Ação Climática" },
];

const setorOptions = [
  { value: "all", label: "Todos os Setores" },
  { value: "industria", label: "Indústria" },
  { value: "agronegocio", label: "Agronegócio" },
  { value: "energia", label: "Energia" },
  { value: "mineracao", label: "Mineração" },
];

const solutions = [
  {
    id: 1,
    name: "SolarMax Pro",
    company: "GreenEnergy BR",
    category: "energia",
    description: "Painéis solares de alta eficiência com tecnologia bifacial, aumentando a geração em até 30% comparado a painéis tradicionais.",
    location: "São Paulo, SP",
    maturity: "Comercial",
    impact: { co2: "500 ton/ano", energy: "1.2 GWh/ano" },
    tags: ["Solar", "Energia Renovável", "Escalável"],
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: "AquaCycle",
    company: "EcoTech Solutions",
    category: "agua",
    description: "Sistema inteligente de tratamento e reuso de água industrial com IoT, reduzindo o consumo em até 60%.",
    location: "Campinas, SP",
    maturity: "Piloto",
    impact: { water: "2M L/mês", cost: "-40% custos" },
    tags: ["Reuso", "IoT", "Indústria"],
    verified: true,
    featured: false,
  },
  {
    id: 3,
    name: "CircularWaste AI",
    company: "CircularWaste",
    category: "residuos",
    description: "Plataforma de IA para gestão e otimização de resíduos industriais, conectando geradores a recicladores.",
    location: "Curitiba, PR",
    maturity: "Comercial",
    impact: { waste: "1000 ton/mês", recycling: "95% reciclagem" },
    tags: ["IA", "Economia Circular", "Logística"],
    verified: true,
    featured: true,
  },
  {
    id: 4,
    name: "CarbonTrack",
    company: "NetZero Tech",
    category: "emissoes",
    description: "Solução de monitoramento e certificação de créditos de carbono com blockchain para transparência total.",
    location: "Rio de Janeiro, RJ",
    maturity: "Comercial",
    impact: { co2: "Certificação", blockchain: "100% rastreável" },
    tags: ["Blockchain", "Carbono", "Certificação"],
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "BioRestore",
    company: "Floresta Viva",
    category: "biodiversidade",
    description: "Programa de restauração florestal com drones e IA para mapeamento e plantio de espécies nativas.",
    location: "Manaus, AM",
    maturity: "Piloto",
    impact: { trees: "10K árvores/ano", area: "50 ha restaurados" },
    tags: ["Drones", "Reflorestamento", "IA"],
    verified: false,
    featured: false,
  },
  {
    id: 6,
    name: "WindMicro",
    company: "VentoLimpo",
    category: "energia",
    description: "Micro turbinas eólicas para ambiente urbano e industrial com design silencioso e alta eficiência.",
    location: "Porto Alegre, RS",
    maturity: "MVP",
    impact: { energy: "50 kWh/dia", noise: "<30 dB" },
    tags: ["Eólica", "Urbano", "Silencioso"],
    verified: false,
    featured: false,
  },
  // Soluções para Agronegócio
  {
    id: 7,
    name: "AquaSmart Irrigação",
    company: "AgroTech Brasil",
    category: "agua",
    description: "Sistema de irrigação inteligente com sensores de umidade do solo e IA para otimização do uso de água em culturas agrícolas.",
    location: "Ribeirão Preto, SP",
    maturity: "Comercial",
    impact: { water: "-45% consumo", productivity: "+20% produtividade" },
    tags: ["Irrigação", "IoT", "Agronegócio"],
    verified: true,
    featured: true,
  },
  {
    id: 8,
    name: "BioFertil Plus",
    company: "BioNutri Agro",
    category: "residuos",
    description: "Conversão de resíduos agrícolas em biofertilizantes de alta qualidade através de compostagem acelerada.",
    location: "Goiânia, GO",
    maturity: "Comercial",
    impact: { waste: "5000 ton/ano", fertilizer: "2000 ton produzidas" },
    tags: ["Biofertilizante", "Economia Circular", "Agro"],
    verified: true,
    featured: false,
  },
  {
    id: 9,
    name: "DroneAgro Monitor",
    company: "FlyFarm Tech",
    category: "biodiversidade",
    description: "Monitoramento de lavouras com drones e visão computacional para detecção precoce de pragas e doenças.",
    location: "Sorriso, MT",
    maturity: "Comercial",
    impact: { pesticide: "-30% defensivos", coverage: "500 ha/dia" },
    tags: ["Drones", "IA", "Monitoramento"],
    verified: true,
    featured: true,
  },
  {
    id: 10,
    name: "BiogásFarm",
    company: "EnergyAgro",
    category: "energia",
    description: "Biodigestores modulares para conversão de dejetos animais em energia elétrica e biofertilizante.",
    location: "Cascavel, PR",
    maturity: "Comercial",
    impact: { energy: "200 kWh/dia", methane: "-95% emissões" },
    tags: ["Biogás", "Pecuária", "Energia"],
    verified: true,
    featured: false,
  },
  {
    id: 11,
    name: "SoloVivo Carbono",
    company: "Carbon Agro",
    category: "emissoes",
    description: "Plataforma de monitoramento e certificação de sequestro de carbono no solo através de práticas regenerativas.",
    location: "Piracicaba, SP",
    maturity: "Piloto",
    impact: { carbon: "15 ton C/ha/ano", certification: "Créditos verificados" },
    tags: ["Carbono", "Solo", "Certificação"],
    verified: true,
    featured: false,
  },
  {
    id: 12,
    name: "AgroSat Precision",
    company: "SatFarm Brasil",
    category: "biodiversidade",
    description: "Agricultura de precisão via satélite com mapas de variabilidade e recomendação de insumos zona a zona.",
    location: "Uberlândia, MG",
    maturity: "Comercial",
    impact: { inputs: "-25% insumos", roi: "+18% rentabilidade" },
    tags: ["Satélite", "Precisão", "Mapas"],
    verified: true,
    featured: false,
  },
  {
    id: 13,
    name: "HydroFarm Vertical",
    company: "VertAgro",
    category: "agua",
    description: "Sistema de cultivo vertical hidropônico para produção de hortaliças com 90% menos água e sem agrotóxicos.",
    location: "Curitiba, PR",
    maturity: "Comercial",
    impact: { water: "-90% água", space: "10x produtividade/m²" },
    tags: ["Hidroponia", "Vertical", "Orgânico"],
    verified: true,
    featured: true,
  },
  {
    id: 14,
    name: "PastoPro Rotacional",
    company: "PecuáriaVerde",
    category: "emissoes",
    description: "Sistema de manejo rotacionado intensivo de pastagens com cerca virtual e monitoramento por GPS.",
    location: "Campo Grande, MS",
    maturity: "Piloto",
    impact: { carbon: "+40% sequestro", productivity: "+35% arrobas/ha" },
    tags: ["Pastagem", "GPS", "Pecuária"],
    verified: false,
    featured: false,
  },
  {
    id: 15,
    name: "AbelhasTech",
    company: "PolliTech",
    category: "biodiversidade",
    description: "Monitoramento inteligente de colmeias para polinização agrícola com sensores IoT e alertas em tempo real.",
    location: "Franca, SP",
    maturity: "MVP",
    impact: { pollination: "+30% polinização", hive: "95% sobrevivência" },
    tags: ["Abelhas", "Polinização", "IoT"],
    verified: false,
    featured: false,
  },
  {
    id: 16,
    name: "CompostAgro Express",
    company: "BioRecicla",
    category: "residuos",
    description: "Compostagem acelerada de resíduos de colheita em apenas 15 dias com tecnologia de aeração forçada.",
    location: "Londrina, PR",
    maturity: "Comercial",
    impact: { time: "15 dias", waste: "10000 ton/ano" },
    tags: ["Compostagem", "Resíduos", "Rápido"],
    verified: true,
    featured: false,
  },
  {
    id: 17,
    name: "SolarBomba Rural",
    company: "SunPump Agro",
    category: "energia",
    description: "Sistemas de bombeamento solar para irrigação e abastecimento rural, eliminando custos com diesel.",
    location: "Petrolina, PE",
    maturity: "Comercial",
    impact: { energy: "100% solar", cost: "-80% custos bombeamento" },
    tags: ["Solar", "Bombeamento", "Rural"],
    verified: true,
    featured: false,
  },
  {
    id: 18,
    name: "RastreioAgro Blockchain",
    company: "TraceFood Tech",
    category: "residuos",
    description: "Rastreabilidade completa da cadeia produtiva agrícola com blockchain, do campo à mesa do consumidor.",
    location: "São Paulo, SP",
    maturity: "Comercial",
    impact: { traceability: "100% rastreável", premium: "+15% valor produto" },
    tags: ["Blockchain", "Rastreabilidade", "Segurança"],
    verified: true,
    featured: true,
  },
];

const Solucoes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrl, setSelectedTrl] = useState("all");
  const [selectedOds, setSelectedOds] = useState("all");
  const [selectedSetor, setSelectedSetor] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredSolutions = solutions.filter((solution) => {
    const matchesCategory = selectedCategory === "all" || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
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
              <Button variant="hero" asChild>
                <Link to="/cadastro">Cadastrar Solução</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pb-16">
        {/* Hero */}
        <section className="bg-hero-gradient py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Catálogo de Soluções Verdes
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Descubra tecnologias inovadoras que podem transformar a sustentabilidade da sua operação.
              </p>

              {/* Search */}
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar soluções, empresas ou tecnologias..."
                    className="pl-10 h-12 bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="hidden sm:flex"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5" />
                  Filtros
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* RF02: Filtros Avançados */}
          {showFilters && (
            <div className="bg-card rounded-2xl border border-border p-6 mb-8 animate-fade-up">
              <h3 className="font-display font-semibold text-foreground mb-4">Filtros Avançados</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Nível TRL</label>
                  <Select value={selectedTrl} onValueChange={setSelectedTrl}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {trlOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">ODS Abordada</label>
                  <Select value={selectedOds} onValueChange={setSelectedOds}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {odsOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Setor Alvo</label>
                  <Select value={selectedSetor} onValueChange={setSelectedSetor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {setorOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedTrl("all");
                      setSelectedOds("all");
                      setSelectedSetor("all");
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            {filteredSolutions.length} soluções encontradas
          </p>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((solution) => (
              <Link
                key={solution.id}
                to={`/solucoes/${solution.id}`}
                className="group bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Featured badge */}
                {solution.featured && (
                  <div className="bg-accent-gradient px-4 py-1 text-xs font-semibold text-accent-foreground">
                    Em Destaque
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {solution.name}
                        </h3>
                        {solution.verified && (
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{solution.company}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {solution.maturity}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {solution.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {Object.entries(solution.impact).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {solution.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredSolutions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Nenhuma solução encontrada
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou buscar por outros termos.
              </p>
              <Button variant="outline" onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Solucoes;
