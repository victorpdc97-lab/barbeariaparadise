import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const links = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Serviços", path: "/servicos" },
      { name: "Clube", path: "/clube" },
      { name: "Sobre", path: "/sobre" },
      { name: "Contato", path: "/contato" },
    ],
    services: [
      { name: "Corte Masculino", path: "/servicos" },
      { name: "Barba Completa", path: "/servicos" },
      { name: "Combo", path: "/servicos" },
      { name: "Esteticista", path: "/esteticista" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-cinema py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-wider text-foreground">
                PARADISE
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Tradição encontra estilo moderno. Uma experiência única em cortes 
              masculinos e barba em Belo Horizonte.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5531999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg tracking-wide text-foreground mb-6">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-3">
              {links.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg tracking-wide text-foreground mb-6">
              SERVIÇOS
            </h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
