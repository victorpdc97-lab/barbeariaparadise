import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DownloadAppProvider } from "@/contexts/DownloadAppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";

const Servicos = lazy(() => import("./pages/Servicos"));
const Esteticista = lazy(() => import("./pages/Esteticista"));
const Contato = lazy(() => import("./pages/Contato"));
const Clube = lazy(() => import("./pages/Clube"));
const DiaDoNoivo = lazy(() => import("./pages/DiaDoNoivo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DownloadAppProvider>
          <ScrollToTop />
          <PageTransition />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/esteticista" element={<Esteticista />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/clube" element={<Clube />} />
              <Route path="/dia-do-noivo" element={<DiaDoNoivo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </DownloadAppProvider>
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
