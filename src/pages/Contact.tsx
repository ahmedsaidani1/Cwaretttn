import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Play,
  Bot,
  Headphones,
  Monitor,
  Sparkles
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    { value: 'netflix', label: 'Netflix Premium - 15 TND', icon: Play },
    { value: 'chatgpt', label: 'ChatGPT Plus - 35 TND', icon: Bot },
    { value: 'spotify', label: 'Spotify Premium - 12 TND', icon: Headphones },
    { value: 'disney', label: 'Disney+ Premium - 18 TND', icon: Monitor },
    { value: 'other', label: 'Autre service', icon: Sparkles }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+216 XX XXX XXX',
      description: 'Lun-Dim 8h-22h',
      color: 'primary'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+216 XX XXX XXX',
      description: 'Réponse immédiate',
      color: 'success'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@CWARETT.tn',
      description: 'Réponse sous 2h',
      color: 'accent'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MessageCircle className="h-8 w-8 text-primary animate-glow" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Nous contacter
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Commandez vos
              <span className="text-white ml-2">
                comptes premium
              </span>
              <br />
              <span className="text-2xl lg:text-3xl text-muted-foreground">
                en quelques clics
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Notre équipe est disponible 24h/24 pour répondre à vos questions et traiter vos commandes 
              dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="gradient-card border-border hover-lift animate-slide-up text-center"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${method.color}/10 mb-4`}>
                    <method.icon className={`h-8 w-8 text-${method.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Order */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Order Form */}
            <div className="animate-fade-in">
              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Send className="h-6 w-6 text-primary" />
                    <span>Commander un service</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire pour passer votre commande rapidement.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input 
                          id="name"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input 
                          id="phone"
                          placeholder="+216 XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <div className="flex items-center space-x-2">
                                <service.icon className="h-4 w-4" />
                                <span>{service.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message"
                        placeholder="Questions ou demandes spéciales..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer la commande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info & Process */}
            <div className="space-y-8">
              {/* Process */}
              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Comment ça marche ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Commandez</h3>
                      <p className="text-sm text-muted-foreground">
                        Remplissez le formulaire avec vos informations et le service désiré.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Payez</h3>
                      <p className="text-sm text-muted-foreground">
                        Effectuez le paiement via virement bancaire, D17 ou cash.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Recevez</h3>
                      <p className="text-sm text-muted-foreground">
                        Obtenez vos identifiants par WhatsApp ou email sous 30 minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Nos garanties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Comptes 100% fonctionnels garantis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Remplacement gratuit en cas de problème</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Support client 24h/24 et 7j/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Livraison sous 30 minutes maximum</span>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Notre localisation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>CWARETT.TN</strong><br />
                    Centre-ville, Tunis<br />
                    Tunisie
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Disponible 24h/24, 7j/7</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Questions
              <span className="gradient-primary bg-clip-text text-transparent ml-2">
                fréquentes
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Quels sont les modes de paiement acceptés ?</h3>
                <p className="text-sm text-muted-foreground">
                  Nous acceptons les virements bancaires, D17, et les paiements en cash sur rendez-vous.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Les comptes sont-ils sûrs à utiliser ?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolument ! Tous nos comptes sont obtenus légalement et sont 100% sécurisés.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Que se passe-t-il si mon compte ne fonctionne plus ?</h3>
                <p className="text-sm text-muted-foreground">
                  Nous le remplaçons gratuitement pendant toute la période de garantie.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Combien de temps pour recCWARETTir mon compte ?</h3>
                <p className="text-sm text-muted-foreground">
                  Maximum 30 minutes après confirmation du paiement, souvent bien plus rapide !
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Puis-je changer de mot de passe ?</h3>
                <p className="text-sm text-muted-foreground">
                  Non, pour garantir la sécurité, les mots de passe ne doivent pas être modifiés.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Offrez-vous des réductions pour plusieurs achats ?</h3>
                <p className="text-sm text-muted-foreground">
                  Oui ! Contactez-nous pour des offres spéciales sur les commandes groupées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;