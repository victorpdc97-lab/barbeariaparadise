import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoParadise from "@/assets/logo-paradise-barber-new.webp";
import { ParticleButton } from "@/components/ui/particle-button";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { useDownloadApp } from "@/contexts/DownloadAppContext";

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
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMenuOpen(false);
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
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
  const { openDownloadModal } = useDownloadApp();

  return (
    <>
      <header
        className={`nav-clean ${
          isScrolled
            ? "bg-[#000000] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.1)]"
            : "bg-[#000000]"
        }`}
      >
        <div className="container-clean">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img
                src={logoParadise}
                alt="Paradise Barber"
                className="h-44 lg:h-52 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="block h-0.5 mt-0.5 bg-foreground rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <ParticleButton
                onClick={openDownloadModal}
                className="hidden lg:flex btn-primary text-sm px-8 py-3"
              >
                Agendar Horário
              </ParticleButton>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative z-50 text-white p-2"
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
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col justify-center h-full px-8 pt-32">
          <MenuVertical
            menuItems={navLinks.map(l => ({ label: l.name, href: l.path }))}
            skew={-3}
            onItemClick={() => setIsMenuOpen(false)}
          />
          
          <div className="mt-8">
            <ParticleButton
              onClick={openDownloadModal}
              className="btn-primary px-12 py-4 text-base"
            >
              Agendar Horário
            </ParticleButton>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
