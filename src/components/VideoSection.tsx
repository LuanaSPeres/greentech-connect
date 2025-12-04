import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  FlaskConical, 
  Building2,
  CheckCircle2
} from "lucide-react";

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<"pesquisador" | "empresa">("pesquisador");

  const videos = {
    pesquisador: {
      title: "Como cadastrar sua solução verde",
      description: "Aprenda a cadastrar suas pesquisas e tecnologias sustentáveis na plataforma e conectar-se com empresas interessadas.",
      steps: [
        "Crie sua conta de pesquisador",
        "Cadastre sua solução com TRL e ODS",
        "Defina o público-alvo",
        "Acompanhe empresas interessadas"
      ],
      videoId: "dQw4w9WgXcQ", // Placeholder - substituir pelo vídeo real
      icon: FlaskConical,
      color: "primary"
    },
    empresa: {
      title: "Como encontrar soluções sustentáveis",
      description: "Descubra como usar a plataforma para encontrar soluções verdes alinhadas às suas metas ESG e registrar impactos.",
      steps: [
        "Cadastre seu perfil empresarial",
        "Defina suas metas de sustentabilidade",
        "Busque soluções compatíveis",
        "Registre e exporte seu impacto"
      ],
      videoId: "dQw4w9WgXcQ", // Placeholder - substituir pelo vídeo real
      icon: Building2,
      color: "blue-500"
    }
  };

  const currentVideo = videos[activeVideo];
  const Icon = currentVideo.icon;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Play className="w-3 h-3 mr-1" />
            Tutorial em Vídeo
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Aprenda a usar a plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista aos vídeos demonstrativos e descubra como aproveitar ao máximo o GreenLinkHub
          </p>
        </div>

        {/* Seletor de Vídeo */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeVideo === "pesquisador" ? "hero" : "outline"}
            onClick={() => setActiveVideo("pesquisador")}
            className="gap-2"
          >
            <FlaskConical className="w-4 h-4" />
            Sou Pesquisador
          </Button>
          <Button
            variant={activeVideo === "empresa" ? "hero" : "outline"}
            onClick={() => setActiveVideo("empresa")}
            className="gap-2"
          >
            <Building2 className="w-4 h-4" />
            Sou Empresa
          </Button>
        </div>

        {/* Conteúdo */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Player de Vídeo */}
            <div className="relative aspect-video bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Informações */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-${currentVideo.color}/10 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${currentVideo.color}`} />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    {activeVideo === "pesquisador" ? "Para Pesquisadores" : "Para Empresas"}
                  </Badge>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {currentVideo.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground">
                {currentVideo.description}
              </p>

              <div className="bg-card rounded-xl border border-border p-6">
                <h4 className="font-semibold text-foreground mb-4">O que você vai aprender:</h4>
                <ul className="space-y-3">
                  {currentVideo.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="hero" className="w-full sm:w-auto" asChild>
                <a href={activeVideo === "pesquisador" ? "/portal-pesquisador" : "/portal-empresa"}>
                  {activeVideo === "pesquisador" ? "Acessar Portal do Pesquisador" : "Acessar Portal da Empresa"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
