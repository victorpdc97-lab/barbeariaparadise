import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoParadise from "@/assets/logo-paradise-barber.png";
import ringIcon from "@/assets/ring-icon.png";

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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
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
    { name: "Home", path: "/", highlighted: false },
    { name: "Serviços", path: "/servicos", highlighted: false },
    { name: "Estética", path: "/esteticista", highlighted: false },
    { name: "Clube", path: "/clube", highlighted: true },
    { name: "Dia do Noivo", path: "/dia-do-noivo", highlighted: true, iconImage: ringIcon },
    { name: "Contato", path: "/contato", highlighted: false },
  ];

  const isActive = (path: string) => location.pathname === path;
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <>
      <header
        className={`nav-clean transition-all duration-300 ${
          isScrolled ? "bg-background/98 shadow-sm" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container-clean">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img
                src={logoParadise}
                alt="Paradise Barber"
                className="h-24 lg:h-30 w-auto object-contain brightness-0"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) =>
                link.highlighted ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {link.name}
                    {link.iconImage && (
                      <img src={link.iconImage} alt="" className="w-4 h-4 inline-block" />
                    )}
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex btn-primary"
              >
                Agendar
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative z-50 text-foreground p-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
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
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-2 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full max-w-sm py-4 px-6 rounded-xl text-lg font-medium text-center transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                link.highlighted
                  ? isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary border border-primary/30"
                  : isActive(link.path)
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                {link.name}
                {link.iconImage && (
                  <img src={link.iconImage} alt="" className="w-5 h-5 inline-block" />
                )}
              </span>
            </Link>
          ))}
          
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full max-w-sm mt-6 py-4 px-6 rounded-xl text-lg font-semibold text-center bg-primary text-primary-foreground transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 75}ms` : "0ms",
            }}
          >
            Agendar Agora
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;