import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Clube", path: "/clube" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`nav-apple transition-all duration-300 ${
        isScrolled ? "bg-background/90" : "bg-background/80"
      }`}>
        <div className="container-apple-wide">
          <div className="flex items-center justify-between h-11">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-semibold text-xl tracking-tight">Paradise</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link-apple ${
                    isActive(link.path) ? "text-foreground" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="nav-link-apple p-1">
                <Search size={16} />
              </button>
              <button className="nav-link-apple p-1">
                <ShoppingBag size={16} />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-foreground/80 p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-3 text-sm font-normal transition-colors ${
                      isActive(link.path) 
                        ? "text-foreground" 
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
