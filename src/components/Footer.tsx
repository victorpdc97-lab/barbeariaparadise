import { Link } from "react-router-dom";
import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Estética", path: "/esteticista" },
    { name: "Clube", path: "/clube" },
    { name: "Dia do Noivo", path: "/dia-do-noivo" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-clean py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <span className="font-display text-3xl text-primary-foreground">
                Paradise
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Tradição encontra estilo moderno. Uma experiência única em cortes 
              masculinos e barba em Belo Horizonte.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/barbeariaparadise/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-[hsl(var(--gold))] hover:text-foreground transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/553186595481"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-[hsl(var(--gold))] hover:text-foreground transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">
              Horário
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="mt-0.5 flex-shrink-0 text-[hsl(var(--gold))]" />
                <div>
                  <p>Seg - Sex: 09h às 20h</p>
                  <p>Sábado: 09h às 15h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">
              Endereço
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[hsl(var(--gold))]" />
                <p>
                  Rua Juiz de Fora, 1374<br />
                  Santo Agostinho<br />
                  Belo Horizonte - MG
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-[hsl(var(--gold))]" />
                <a href="tel:+553186595481" className="hover:text-[hsl(var(--gold))] transition-colors">
                  (31) 98659-5481
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
