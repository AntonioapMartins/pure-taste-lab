import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Alojamento from "./pages/Alojamento";
import Kartodromo from "./pages/Kartodromo";
import Restaurante from "./pages/Restaurante";
import DesportoLazer from "./pages/DesportoLazer";
import EscolasGrupos from "./pages/EscolasGrupos";
import Contactos from "./pages/Contactos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alojamento" element={<Alojamento />} />
          <Route path="/kartodromo" element={<Kartodromo />} />
          <Route path="/desporto-lazer" element={<DesportoLazer />} />
          <Route path="/restaurante" element={<Restaurante />} />
          <Route path="/escolas-grupos" element={<EscolasGrupos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
