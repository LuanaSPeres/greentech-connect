import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  ArrowLeft,
  MapPin,
  Building2,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Heart,
  Share2,
  Calendar,
  Users,
  FileText,
  MessageCircle,
  Mail,
  Globe,
  Award,
  Zap,
  Droplets,
  Target
} from "lucide-react";

// Mock data - in a real app this would come from an API
const solutionData = {
  id: 1,
  name: "SolarMax Pro",
  company: "GreenEnergy BR",
  category: "energia",
  description: "Painéis solares de alta eficiência com tecnologia bifacial, aumentando a geração em até 30% comparado a painéis tradicionais. Nossa solução combina hardware de última geração com software de monitoramento em tempo real para maximizar o retorno do investimento.",
  longDescription: `O SolarMax Pro representa a próxima geração em energia solar fotovoltaica. Utilizando células bifaciais de silício monocristalino, nossos painéis captam luz de ambos os lados, aumentando significativamente a produção de energia.

**Principais Características:**
- Eficiência de conversão de 22.5%
- Garantia de 25 anos de desempenho
- Monitoramento IoT em tempo real
- Integração com sistemas de gestão energética
- Instalação modular e escalável

**Benefícios para Indústrias:**
- Redução de até 70% nos custos de energia
- ROI médio em 4-5 anos
- Certificação de energia renovável para ESG
- Manutenção preditiva com IA`,
  location: "São Paulo, SP",
  maturity: "Comercial",
  founded: "2019",
  employees: "50-100",
  website: "www.greenenergybr.com",
  impact: { 
    co2: "500 ton/ano", 
    energy: "1.2 GWh/ano",
    savings: "R$ 2.4M/ano",
    installations: "150+ instalações"
  },
  tags: ["Solar", "Energia Renovável", "Escalável", "IoT", "Monitoramento"],
  verified: true,
  certifications: ["ISO 14001", "INMETRO", "IEC 61215"],
  cases: [
    { company: "Indústria Metalúrgica ABC", result: "Redução de 65% nos custos de energia" },
    { company: "Grupo Têxtil XYZ", result: "1.500 ton CO₂ evitadas por ano" },
  ],
};

const SolucaoDetalhe = () => {
  const { id } = useParams();

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
              <Link to="/solucoes" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                Catálogo
              </Link>
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar ao início</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pb-16">
        {/* Hero */}
        <section className="bg-muted/30 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Link to="/solucoes" className="hover:text-foreground">Soluções</Link>
                  <span>/</span>
                  <span>Energia</span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                    {solutionData.name}
                  </h1>
                  {solutionData.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Verificado
                    </div>
                  )}
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  por <span className="text-foreground font-medium">{solutionData.company}</span>
                </p>

                <p className="text-foreground mb-6 max-w-2xl">
                  {solutionData.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solutionData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {solutionData.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Fundada em {solutionData.founded}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {solutionData.employees} funcionários
                  </div>
                </div>
              </div>

              {/* Actions Card */}
              <div className="lg:w-80">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-medium">
                  <Badge className="mb-4">{solutionData.maturity}</Badge>
                  
                  <div className="space-y-3 mb-6">
                    <Button variant="hero" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      Solicitar Contato
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <FileText className="w-5 h-5" />
                      Baixar Apresentação
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                      Salvar
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Impact Metrics */}
              <section>
                <h2 className="font-display font-semibold text-xl text-foreground mb-4">
                  Impacto Mensurável
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(solutionData.impact).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-card rounded-xl p-4 border border-border flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-xl text-foreground">{value}</p>
                        <p className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Description */}
              <section>
                <h2 className="font-display font-semibold text-xl text-foreground mb-4">
                  Sobre a Solução
                </h2>
                <div className="bg-card rounded-xl p-6 border border-border prose prose-sm max-w-none">
                  <p className="whitespace-pre-line text-muted-foreground">
                    {solutionData.longDescription}
                  </p>
                </div>
              </section>

              {/* Cases */}
              <section>
                <h2 className="font-display font-semibold text-xl text-foreground mb-4">
                  Casos de Sucesso
                </h2>
                <div className="space-y-4">
                  {solutionData.cases.map((c, i) => (
                    <div
                      key={i}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{c.company}</h3>
                          <p className="text-sm text-muted-foreground">{c.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Certifications */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certificações
                </h3>
                <div className="space-y-2">
                  {solutionData.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Sobre a Empresa
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <a
                      href={`https://${solutionData.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {solutionData.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">contato@greenenergybr.com</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-hero-gradient rounded-xl p-6">
                <h3 className="font-display font-semibold text-primary-foreground mb-2">
                  Interessado nesta solução?
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Nossa equipe pode ajudar a avaliar se esta solução é adequada para sua organização.
                </p>
                <Button variant="accent" className="w-full">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolucaoDetalhe;
