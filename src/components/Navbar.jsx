import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Alojamento", path: "/alojamento" },
  { label: "Kartódromo", path: "/kartodromo" },
  { label: "Desporto & Lazer", path: "/desporto-lazer" },
  { label: "Restaurante", path: "/restaurante" },
  { label: "Escolas & Grupos", path: "/escolas-grupos" },
  { label: "Contactos", path: "/contactos" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-primary">RILHADAS</span>
          <span className="text-xs text-muted-foreground hidden sm:block">Turismo</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
            <Youtube className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
