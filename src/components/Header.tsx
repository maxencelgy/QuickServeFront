
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            QuickServe
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/" ? "text-primary" : ""}`}>
              Accueil
            </Link>
            <Link to="/services" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/services" ? "text-primary" : ""}`}>
              Services
            </Link>
            <Link to="/about" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/about" ? "text-primary" : ""}`}>
              À propos
            </Link>
            <Link to="/faq" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/faq" ? "text-primary" : ""}`}>
              FAQ
            </Link>
            <Link to="/contact" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/contact" ? "text-primary" : ""}`}>
              Contact
            </Link>
            <Button variant="default" size="sm" className="ml-4" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/" ? "text-primary" : ""}`}>
                Accueil
              </Link>
              <Link to="/services" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/services" ? "text-primary" : ""}`}>
                Services
              </Link>
              <Link to="/about" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/about" ? "text-primary" : ""}`}>
                À propos
              </Link>
              <Link to="/faq" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/faq" ? "text-primary" : ""}`}>
                FAQ
              </Link>
              <Link to="/contact" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/contact" ? "text-primary" : ""}`}>
                Contact
              </Link>
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/login">Connexion</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
