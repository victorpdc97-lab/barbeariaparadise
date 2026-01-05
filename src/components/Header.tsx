import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import logoParadise from "@/assets/logo-paradise.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "NOSSA MARCA", path: "/sobre" },
    { name: "BARBA & CABELO", path: "/servicos" },
    { name: "ESTETICISTA", path: "/esteticista" },
    { name: "AGENDE", path: "/contato" },
    { name: "MAIS", path: "/clube" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <>
      {/* Barber Pole Stripe */}
      <div className="barber-stripe fixed top-0 left-0 right-0 z-[60]" />
      
      <header className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-md" : "bg-transparent"
      }`}>
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoParadise} 
                alt="Paradise Barber" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors tracking-widest ${
                    isActive(link.path) 
                      ? "text-foreground" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social & Menu */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-foreground p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border animate-fade-up bg-background">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-lg font-medium transition-colors tracking-widest ${
                      isActive(link.path) ? "text-foreground bg-secondary" : "text-foreground/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90" size="lg" asChild>
                    <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                      AGENDAR AGORA
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
