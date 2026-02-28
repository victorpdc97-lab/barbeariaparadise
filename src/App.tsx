import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DownloadAppProvider } from "@/contexts/DownloadAppContext";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Esteticista from "./pages/Esteticista";
import Contato from "./pages/Contato";
import Clube from "./pages/Clube";
import DiaDoNoivo from "./pages/DiaDoNoivo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DownloadAppProvider>
          <ScrollToTop />
          <PageTransition />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/esteticista" element={<Esteticista />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/clube" element={<Clube />} />
            <Route path="/dia-do-noivo" element={<DiaDoNoivo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DownloadAppProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
