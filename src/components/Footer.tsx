import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin } from "lucide-react";
import logoParadise from "@/assets/logo-paradise.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img 
                src={logoParadise} 
                alt="Paradise Barber" 
                className="h-20 w-auto mb-6"
              />
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Resgatando a tradição das barbearias clássicas com um toque moderno.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              NAVEGAÇÃO
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">
                Home
              </Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">
                Nossa Marca
              </Link>
              <Link to="/servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">
                Barba & Cabelo
              </Link>
              <Link to="/clube" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">
                Clube Paradise
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              HORÁRIOS
            </h4>
            <div className="text-sm text-muted-foreground font-light space-y-2">
              <p>Segunda a Sexta: 09h - 20h</p>
              <p>Sábado: 09h - 15h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              CONTATO
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-light flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Rua Juiz de Fora, 1374<br />
                  Santo Agostinho, BH - MG
                </span>
              </p>
              
              {/* Social */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
