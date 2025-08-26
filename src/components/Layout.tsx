import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, Shield, Star } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'glass shadow-card' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover-scale">
              
              <span className="text-xl font-bold text-white">
                CWARETT.TN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-slide-up"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact">Commander maintenant</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/10 animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/contact">Commander maintenant</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                
                <span className="text-lg font-bold text-white">
                 CWARETT.TN
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Votre partenaire de confiance pour tous vos comptes premium Netflix, ChatGPT et plus encore.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-success font-medium">100% Sécurisé</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">Nos Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary transition-colors">Netflix Premium</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">ChatGPT Plus</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Disney+ Premium</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Spotify Premium</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Nous contacter</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">À propos</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Garanties</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: contact@CWARETT.tn</p>
                <p>Téléphone: +216 XX XXX XXX</p>
                <div className="flex items-center space-x-2 pt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-accent fill-current" />
                  ))}
                  <span className="text-xs">4.8/5 satisfaction client</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 CWARETT.TN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;