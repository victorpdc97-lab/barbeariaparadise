import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
const Footer = () => {
  const links: { navigation: Array<{ name: string; path: string; external?: boolean }>; services: Array<{ name: string; path: string }> } = {
    navigation: [{
      name: "Home",
      path: "/"
    }, {
      name: "Serviços",
      path: "/servicos"
    }, {
      name: "Clube",
      path: "/clube"
    }, {
      name: "Dia do Noivo",
      path: "https://barbeariaparadise.com.br/dia-do-noivo",
      external: true
    }, {
      name: "Contato",
      path: "/contato"
    }],
    services: [{
      name: "Corte Masculino",
      path: "/servicos"
    }, {
      name: "Barba Completa",
      path: "/servicos"
    }, {
      name: "Combo",
      path: "/servicos"
    }, {
      name: "Esteticista",
      path: "/esteticista"
    }]
  };
  return <footer className="bg-background border-t border-border">
      <div className="container-clean py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-wider text-primary">
                PARADISE
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Tradição encontra estilo moderno. Uma experiência única em cortes 
              masculinos e barba em Belo Horizonte.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/barbeariaparadise/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/553186595481" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:text-right">
            <h4 className="font-semibold text-foreground mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.navigation.map(link => <li key={link.name}>
                  {link.external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;