import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Play, 
  Bot, 
  Headphones, 
  Monitor, 
  Star, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight // <-- Add these icons
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      name: 'Netflix Premium',
      description: 'Accès complet à tous les films et séries en Ultra HD',
      price: '15',
      icon: Play,
      features: ['Ultra HD 4K', 'Multi-appareils', '6 mois de garantie'],
      color: 'netflix',
      popular: true
    },
    {
      name: 'ChatGPT Plus',
      description: 'Intelligence artificielle avancée pour tous vos besoins',
      price: '35',
      icon: Bot,
      features: ['Accès prioritaire', 'GPT-4 Turbo', 'Plugins exclusifs'],
      color: 'success'
    },
    {
      name: 'Spotify Premium',
      description: 'Musique 24/24 illimitée sans publicité',
      price: '12',
      icon: Headphones,
      features: ['Sans publicité', 'Qualité HiFi', 'Téléchargement offline'],
      color: 'accent'
    },
    {
      name: 'Disney+ Premium',
      description: 'Tout l\'univers Disney, Marvel, Star Wars',
      price: '18',
      icon: Monitor,
      features: ['Contenu exclusif', 'Ultra HD', '4 écrans simultanés'],
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Ben Salem',
      text: 'Service impeccable ! Mon compte Netflix fonctionne parfaitement depuis 8 mois.',
      rating: 5,
      service: 'Netflix Premium'
    },
    {
      name: 'Fatma Trabelsi',
      text: 'Très satisfaite de mon achat ChatGPT Plus. Support client réactif.',
      rating: 5,
      service: 'ChatGPT Plus'
    },
    {
      name: 'Karim Mansouri',
      text: 'Excellente qualité et prix imbattables. Je recommande vivement !',
      rating: 5,
      service: 'Spotify Premium'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-success/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary animate-glow" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Services Premium Garantis
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
              Vos Comptes
              <span className="text-white ml-4">
                Premium
              </span>
              <br />
              <span className="text-2xl lg:text-4xl text-muted-foreground">
                Netflix, ChatGPT & Plus
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accédez aux meilleurs services numériques avec nos comptes premium garantis. 
              Qualité, sécurité et support 24/7 inclus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/services">
                  Voir nos services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">99%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Nos Services
              <span className="text-white ml-2">
                Premium
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de comptes premium aux meilleurs prix du marché tunisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.name} 
                className={`relative overflow-hidden gradient-card border-border hover-lift animate-slide-up group ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Populaire
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-${service.color}/10`}>
                      <service.icon className={`h-6 w-6 text-${service.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground ml-1">TND</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={service.color as any} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">Commander maintenant</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pourquoi nous
              <span className="text-white ml-2">
                choisir ?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:shadow-glow transition-all">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Sécurisé</h3>
              <p className="text-muted-foreground">
                Tous nos comptes sont vérifiés et garantis pour une utilisation sûre.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:shadow-accent transition-all">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-muted-foreground">
                Recevez vos comptes en moins de 30 minutes après la commande.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4 group-hover:bg-success/20 transition-all">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">
                Notre équipe est disponible pour vous aider à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ce que disent nos
              <span className="gradient-primary bg-clip-text text-transparent ml-2">
                clients
              </span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto flex items-center justify-center gap-4">
            {/* Slider Arrows - OUTSIDE the testimonial box */}
            <button
              aria-label="Précédent"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="bg-muted/70 hover:bg-muted rounded-full p-2 transition"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <Card className="gradient-card border-border animate-fade-in flex-1">
              <CardContent className="p-8 text-center relative">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-muted-foreground">
                  Client {testimonials[currentTestimonial].service}
                </div>
              </CardContent>
            </Card>

            <button
              aria-label="Suivant"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="bg-muted/70 hover:bg-muted rounded-full p-2 transition"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de clients satisfaits et profitez de nos services premium dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/services">Voir tous les services</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;