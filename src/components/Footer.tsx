import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-xs text-background/60 uppercase tracking-widest">BARBEARIA</span>
              <h3 className="font-display text-2xl font-bold text-background">
                PARADISE
              </h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Seu estilo, nosso ritual. Experiência premium em barbearia com profissionais especializados.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={bookingLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4 uppercase">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                Início
              </Link>
              <Link to="/servicos" className="text-background/70 hover:text-primary transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/sobre" className="text-background/70 hover:text-primary transition-colors text-sm">
                Sobre
              </Link>
              <Link to="/contato" className="text-background/70 hover:text-primary transition-colors text-sm">
                Contato
              </Link>
              <Link to="/clube" className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
                Clube Paradise
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4 flex items-center gap-2 uppercase">
              <Clock size={18} className="text-primary" />
              Horários
            </h4>
            <div className="text-sm text-background/70 space-y-1">
              <p>Segunda a Sexta: 09h - 20h</p>
              <p>Sábado: 09h - 15h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4 flex items-center gap-2 uppercase">
              <MapPin size={18} className="text-primary" />
              Localização
            </h4>
            <p className="text-sm text-background/70 leading-relaxed">
              Rua Juiz de Fora, 1374<br />
              Santo Agostinho,
              Belo Horizonte, MG<br />
              CEP 30180-061
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/60">
            Feito com ❤️ para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;