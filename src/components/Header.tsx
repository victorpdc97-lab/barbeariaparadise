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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Estética", path: "/esteticista" },
    { name: "Clube", path: "/clube" },
    { name: "Dia do Noivo", path: "/dia-do-noivo" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <>
      <header
        className={`nav-clean ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="container-clean">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img
                src={logoParadise}
                alt="Paradise Barber"
                className="h-24 lg:h-28 w-auto object-contain brightness-0"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="block h-0.5 mt-0.5 bg-[hsl(var(--gold))] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex btn-primary text-sm px-8 py-3"
              >
                Agendar Horário
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative z-50 text-foreground p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "opacity-100" : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-1 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full max-w-xs py-4 text-center font-display text-2xl tracking-wide transition-all duration-300 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
                isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="gold-line-long my-6 opacity-50" />
          
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary mt-2 px-12 py-4 text-base transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 60}ms` : "0ms",
            }}
          >
            Agendar Horário
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
