import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  usePageMeta({ title: "Página não encontrada | Barbearia Paradise" });
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-md">
          <p className="text-8xl font-display font-bold text-foreground/10 mb-2">404</p>
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            A página que você procura não existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              Voltar ao Início
            </Link>
            <Link
              to="/contato"
              className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
