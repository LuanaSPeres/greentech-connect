import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cadastro from "./pages/Cadastro";
import CadastroSolucao from "./pages/CadastroSolucao";
import PerfilEmpresa from "./pages/PerfilEmpresa";
import RegistroImpacto from "./pages/RegistroImpacto";
import Relatorios from "./pages/Relatorios";
import Dashboard from "./pages/Dashboard";
import Solucoes from "./pages/Solucoes";
import SolucaoDetalhe from "./pages/SolucaoDetalhe";
import AgendarDemo from "./pages/AgendarDemo";
import ComoFunciona from "./pages/ComoFunciona";
import CriarConta from "./pages/CriarConta";
import FalarComEspecialista from "./pages/FalarComEspecialista";
import SaibaMais from "./pages/SaibaMais";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro-solucao" element={<CadastroSolucao />} />
          <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
          <Route path="/registro-impacto" element={<RegistroImpacto />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/solucoes/:id" element={<SolucaoDetalhe />} />
          <Route path="/agendar-demo" element={<AgendarDemo />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/falar-com-especialista" element={<FalarComEspecialista />} />
          <Route path="/saiba-mais/:tipo" element={<SaibaMais />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
