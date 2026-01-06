import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoParadise from "@/assets/logo-paradise-barber.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/",
    highlighted: false
  }, {
    name: "Serviços",
    path: "/servicos",
    highlighted: false
  }, {
    name: "Estética",
    path: "/esteticista",
    highlighted: false
  }, {
    name: "Clube",
    path: "/clube",
    highlighted: true
  }, {
    name: "Dia do Noivo",
    path: "/dia-do-noivo",
    highlighted: true,
    badge: " 💍"
  }, {
    name: "Contato",
    path: "/contato",
    highlighted: false
  }];
  const isActive = (path: string) => location.pathname === path;
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  return <header className={`nav-clean transition-all duration-300 ${isScrolled ? "bg-background/98 shadow-sm" : "bg-white/80 backdrop-blur-md"}`}>
      <div className="container-clean">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoParadise} alt="Paradise Barber" className="h-24 lg:h-30 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => link.highlighted ? <Link key={link.path} to={link.path} className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path) ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground"}`}>
                  
                  {link.name}
                  {link.badge}
                </Link> : <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${isActive(link.path) ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>
                  {link.name}
                </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="hidden lg:flex btn-primary">
              Agendar
            </a>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => link.highlighted ? <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-2 py-3 px-4 rounded-lg text-base font-medium transition-all ${isActive(link.path) ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary border border-primary/30"}`}>
                    
                    {link.name}
                    {link.badge && <span className="ml-auto px-2 py-0.5 text-xs font-bold bg-primary text-primary-foreground rounded animate-pulse">
                        {link.badge}
                      </span>}
                  </Link> : <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${isActive(link.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/5"}`}>
                    {link.name}
                  </Link>)}
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-center">
                Agendar Agora
              </a>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;