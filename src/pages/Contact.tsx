
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Users, UserCheck } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Contactez-nous
          </span>
          <h1 className="text-4xl font-bold mb-4">Nous sommes à votre écoute</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions et vous aider dans vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Détaillez votre demande ici..."
                />
              </div>
              <Button type="submit" className="w-full md:w-auto px-8 hover:scale-105 transition-transform duration-300">
                Envoyer
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@quickserve.com</p>
                    <p className="text-muted-foreground">support@quickserve.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                    <p className="text-muted-foreground">+33 1 98 76 54 32</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                    <p className="text-muted-foreground">123 Rue de la Paix</p>
                    <p className="text-muted-foreground">75000 Paris, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                    <p className="text-muted-foreground">Lundi - Vendredi : 9h - 18h</p>
                    <p className="text-muted-foreground">Samedi : 10h - 16h</p>
                    <p className="text-muted-foreground">Dimanche : Fermé</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Notre équipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Des experts à votre service pour vous accompagner dans tous vos projets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Dubois",
                role: "Directrice clientèle",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Thomas Martin",
                role: "Responsable technique",
                image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Sophie Legrand",
                role: "Service client",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
                    <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <UserCheck className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
