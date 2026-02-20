import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contactos Geral */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 border-b border-primary-foreground/30 pb-2">
              Contactos Geral
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Rua de Cancelo nº444 Cepães, Fafe
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (+351) 253 591 916
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (+351) 914 969 022
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                geral@rilhadas.com
              </li>
            </ul>

            <h3 className="text-lg font-serif font-bold mt-6 mb-4 border-b border-primary-foreground/30 pb-2">
              Contactos Kartódromo
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (+351) 93 668 20 92
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                kartodromo@rilhadas.com
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 border-b border-primary-foreground/30 pb-2">
              Informações
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contactos" className="hover:underline transition-colors">Contactos</Link>
              </li>
            </ul>

            <h3 className="text-lg font-serif font-bold mt-6 mb-4 border-b border-primary-foreground/30 pb-2">
              Sigam-nos
            </h3>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 border-b border-primary-foreground/30 pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/alojamento" className="hover:underline">Alojamento</Link></li>
              <li><Link to="/kartodromo" className="hover:underline">Kartódromo</Link></li>
              <li><Link to="/desporto-lazer" className="hover:underline">Desporto & Lazer</Link></li>
              <li><Link to="/restaurante" className="hover:underline">Restaurante</Link></li>
              <li><Link to="/escolas-grupos" className="hover:underline">Escolas & Grupos</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 border-b border-primary-foreground/30 pb-2">
              Para Ofertas e Promoções
            </h3>
            <p className="text-sm mb-4">Subscreva a nossa Newsletter</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="O seu email"
                className="w-full px-3 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                SUBSCREVER
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>Design Rilhadas Turismo © 2025 – Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
};
