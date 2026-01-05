import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    servicos: [
      { name: "Corte", path: "/servicos" },
      { name: "Barba", path: "/servicos" },
      { name: "Combo", path: "/servicos" },
      { name: "Clube Paradise", path: "/clube" },
    ],
    sobre: [
      { name: "Nossa História", path: "/sobre" },
      { name: "Equipe", path: "/sobre" },
      { name: "Contato", path: "/contato" },
    ],
    contato: [
      { name: "(31) 99999-9999", path: "#" },
      { name: "contato@paradisebarbearia.com", path: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-apple-wide py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Serviços */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
              Serviços
            </h4>
            <ul className="space-y-3">
              {links.servicos.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
              Sobre
            </h4>
            <ul className="space-y-3">
              {links.sobre.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3">
              {links.contato.map((link) => (
                <li key={link.name}>
                  <span className="text-xs text-muted-foreground">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
              Endereço
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Rua Juiz de Fora, 1374<br />
              Santo Agostinho<br />
              Belo Horizonte - MG
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
