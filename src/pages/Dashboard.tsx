
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Package, Home, Sparkles, Wrench, Bell, 
  Calendar, Clock, CheckCircle, AlertCircle,
  User, Settings, ChevronRight, Star, Bookmark
} from "lucide-react";

const services = [
  {
    icon: Package,
    name: "Transport de colis",
    price: "À partir de 15€",
    image: "https://images.unsplash.com/photo-1554757388-29a2a86ef02f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    rating: 4.8
  },
  {
    icon: Home,
    name: "Déménagement",
    price: "À partir de 80€",
    image: "https://images.unsplash.com/photo-1600518464441-7a8aef55f5b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    rating: 4.9
  },
  {
    icon: Sparkles,
    name: "Nettoyage",
    price: "À partir de 25€",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    rating: 4.7
  },
  {
    icon: Wrench,
    name: "Dépannage",
    price: "À partir de 45€",
    image: "https://images.unsplash.com/photo-1621905251189-08b45249ff49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    rating: 4.9
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div className="bg-gradient-to-b from-secondary/30 to-transparent pb-6">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Bonjour, Thomas</h1>
              <p className="text-muted-foreground">Bienvenue sur votre tableau de bord</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size={isMobile ? "sm" : "default"} className="relative">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full transform translate-x-1 -translate-y-1"></span>
              </Button>
              <Button className="hover:scale-105 transition-transform duration-300" onClick={() => navigate("/services")}>
                Nouvelle réservation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Réservations à venir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, service: "Nettoyage", date: "15 avril, 14:00", status: "confirmed" },
                    { id: 2, service: "Transport", date: "18 avril, 10:30", status: "pending" }
                  ].map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="mr-3">
                          {booking.status === "confirmed" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-amber-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-xs text-muted-foreground">{booking.date}</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start">
                  Voir toutes les réservations
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Star className="h-5 w-5 mr-2 text-primary" />
                  Dernières évaluations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, service: "Déménagement", rating: 5, comment: "Service excellent, très professionnel" },
                    { id: 2, service: "Dépannage", rating: 4, comment: "Rapide et efficace" }
                  ].map((review) => (
                    <div key={review.id} className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium">{review.service}</p>
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < review.rating ? "text-amber-400" : "text-gray-300"}`} fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start">
                  Voir toutes les évaluations
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  Mon profil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">T</span>
                  </div>
                  <div>
                    <p className="font-medium">Thomas Martin</p>
                    <p className="text-sm text-muted-foreground">thomas.martin@example.com</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <Bookmark className="h-5 w-5 mr-3 text-primary" />
                      <span>Adresses sauvegardées</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 mr-3 text-primary" />
                      <span>Paramètres</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                  Déconnexion
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Services recommandés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-md cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="p-2 bg-primary/10 rounded-full mr-3 group-hover:bg-primary transition-colors duration-300">
                          <service.icon className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h4 className="font-medium">{service.name}</h4>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-amber-400 mr-1" fill="currentColor" />
                        <span className="text-xs font-medium">{service.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{service.price}</p>
                    <Button size="sm" className="w-full group-hover:bg-primary transition-colors">
                      Réserver
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
