import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";
import { FlipLink } from "@/components/ui/reveal-links";
import { WHATSAPP_URL, INSTAGRAM_URL, PHONE_NUMBER, PHONE_DISPLAY, ADDRESS, HOURS } from "@/lib/constants";

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
    <footer className="bg-[#000000] text-primary-foreground">
      <div className="container-clean py-16">
        <h3 className="font-display text-3xl text-primary-foreground text-center mb-12">Paraíso do Homem Moderno</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">Redes Sociais</h4>
            <div className="flex flex-col gap-1 text-sm text-primary-foreground/70">
              <FlipLink href={INSTAGRAM_URL}>Instagram</FlipLink>
              <FlipLink href={WHATSAPP_URL}>WhatsApp</FlipLink>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">Horário</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="mt-0.5 flex-shrink-0 text-primary-foreground/40" />
                <div>
                  <p>{HOURS.weekdays}</p>
                  <p>{HOURS.saturday}</p>
                  <p>{HOURS.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-5">Endereço</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary-foreground/40" />
                <p>{ADDRESS.street}<br />{ADDRESS.neighborhood}<br />{ADDRESS.city} - {ADDRESS.state}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-primary-foreground/40" />
                <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-primary-foreground transition-colors">{PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Barbearia Paradise. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
