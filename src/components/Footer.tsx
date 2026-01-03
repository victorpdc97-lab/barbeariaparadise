import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
const Footer = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";
  return <footer className="bg-card border-t border-border">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
              Paradise
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Seu estilo, nosso ritual. Experiência premium em barbearia com profissionais especializados.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Início
              </Link>
              <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sobre
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              Horários
            </h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Segunda a Sexta: 09h - 20h</p>
              <p>Sábado: 09h - 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              Localização
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rua Juiz de Fora, 1374   <br />
              Santo Agostinho, 
Belo Horizonte, MG <br />
              CEP 30180-061
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com ❤️ para você
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;