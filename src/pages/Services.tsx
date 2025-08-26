import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Bot, 
  Headphones, 
  Monitor, 
  CheckCircle, 
  Star, 
  Shield,
  Clock,
  Users,
  Zap,
  Download,
  Globe,
  Gamepad
} from 'lucide-react';

const Services = () => {
  const services = [
  {
    category: 'Streaming & Divertissement',
    items: [
      {
        name: 'Netflix Premium',
        description: 'Accès complet à tous les films et séries en Ultra HD',
        price: '15',
        originalPrice: '25',
        icon: Play,
        features: [
          'Ultra HD 4K',
          'Multi-appareils (4 écrans)',
          'Téléchargement offline',
          'Sans publicité',
          'Garantie 6 mois'
        ],
        color: 'netflix',
        popular: true,
        badge: 'Le plus populaire'
      },
      {
        name: 'Disney+ Premium',
        description: 'Tout l\'univers Disney, Marvel, Star Wars et Pixar',
        price: '18',
        originalPrice: '28',
        icon: Monitor,
        features: [
          'Contenu exclusif',
          'Ultra HD & HDR',
          '4 écrans simultanés',
          'Téléchargement illimité',
          'Garantie 6 mois'
        ],
        color: 'primary'
      },
      {
        name: 'Spotify Premium',
        description: 'Musique illimitée sans publicité',
        price: '12',
        originalPrice: '20',
        icon: Headphones,
        features: [
          'Sans publicité',
          'Qualité audio HiFi',
          'Téléchargement offline',
          'Lecture aléatoire illimitée',
          'Garantie 4 mois'
        ],
        color: 'success'
      }
    ]
  },
  {
    category: 'Intelligence Artificielle',
    items: [
      {
        name: 'ChatGPT Plus',
        description: 'Intelligence artificielle avancée GPT-4',
        price: '35',
        originalPrice: '45',
        icon: Bot,
        features: [
          'Accès prioritaire',
          'GPT-4 Turbo',
          'Plugins exclusifs',
          'Générateur d\'images',
          'Support 24/7'
        ],
        color: 'accent',
        badge: 'Nouvelle IA'
      },
      {
        name: 'Claude Pro',
        description: 'Assistant IA avancé d\'Anthropic',
        price: '30',
        originalPrice: '40',
        icon: Zap,
        features: [
          'Claude 3 Opus',
          'Messages prioritaires',
          'Analyse de documents',
          'Conversations longues',
          'Interface améliorée'
        ],
        color: 'primary'
      }
    ]
  },
  {
    category: 'Outils Professionnels',
    items: [
      {
        name: 'Canva Pro',
        description: 'Design graphique professionnel',
        price: '22',
        originalPrice: '35',
        icon: Globe,
        features: [
          'Templates premium',
          'Suppression d\'arrière-plan',
          'Resize magique',
          'Brand Kit',
          'Stockage cloud 1TB'
        ],
        color: 'accent'
      },
      {
        name: 'Adobe Creative',
        description: 'Suite complète Adobe (Photoshop, Illustrator...)',
        price: '85',
        originalPrice: '120',
        icon: Download,
        features: [
          'Photoshop CC',
          'Illustrator CC',
          'Premiere Pro',
          'After Effects',
          'Cloud storage 100GB'
        ],
        color: 'primary'
      }
    ]
  },
  {
    category: 'Cartes Cadeaux',
    items: [
      {
        name: 'Carte PSN 20€',
        description: 'Créditez votre compte PlayStation et profitez de jeux, DLC et abonnements PS Plus',
        price: '48',
        originalPrice: '55',
        icon: Gamepad, // Utilise un icône lié au gaming
        features: [
          'Code utilisable instantanément',
          'Compatible PS4 & PS5',
          'Aucun frais supplémentaire',
          
          
        ],
        color: 'primary',
        badge: 'Top Vente'
      }
    ]
  }
];


  const guarantees = [
    {
      icon: Shield,
      title: 'Garantie de fonctionnement',
      description: 'Remplacement gratuit si problème technique'
    },
    {
      icon: Clock,
      title: 'Livraison rapide',
      description: 'Vos comptes en moins de 30 minutes'
    },
    {
      icon: Users,
      title: 'Support dédié',
      description: 'Équipe disponible 24h/24, 7j/7'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nos Services
              <span className="text-white ml-2">
                Premium
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme complète de comptes premium aux prix les plus compétitifs 
              du marché tunisien. Qualité garantie, support inclus.
            </p>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {guarantees.map((guarantee, index) => (
              <Card key={guarantee.title} className="glass border-white/10 hover-lift animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <guarantee.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((category, categoryIndex) => (
        <section key={category.category} className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-card/30' : ''}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, index) => (
                <Card 
                  key={service.name}
                  className={`relative overflow-hidden gradient-card border-border hover-lift animate-slide-up ${
                    service.popular ? 'ring-2 ring-primary/50' : ''
                  }`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {(service.popular || service.badge) && (
                    <div className="absolute top-0 right-0 z-10">
                      <Badge variant={service.popular ? "default" : "secondary"} className="rounded-bl-lg rounded-tr-lg">
                        {service.badge || 'Populaire'}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-${service.color}/10`}>
                        <service.icon className={`h-8 w-8 text-${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground">TND</span>
                      {service.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {service.originalPrice} TND
                        </span>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={service.color as any}
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">
                        Commander maintenant
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              Questions fréquentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold mb-2">Les comptes sont-ils légaux ?</h3>
                <p className="text-white/80 text-sm">
                  Oui, tous nos comptes sont obtenus légalement via des promotions et offres spéciales.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Combien de temps durent les comptes ?</h3>
                <p className="text-white/80 text-sm">
                  La durée varie selon le service, de 3 à 12 mois avec garantie incluse.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Que se passe-t-il en cas de problème ?</h3>
                <p className="text-white/80 text-sm">
                  Nous remplaçons immédiatement tout compte défaillant pendant la période de garantie.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Comment recCWARETTir mon compte ?</h3>
                <p className="text-white/80 text-sm">
                  Après paiement, vous recevez vos identifiants par email ou WhatsApp sous 30 minutes.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">
                  Une autre question ? Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;