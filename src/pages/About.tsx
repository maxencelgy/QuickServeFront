
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Sparkles, Target, Heart, Star, ArrowRight } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { value: "5+", label: "Années d'expérience" },
    { value: "15k+", label: "Clients satisfaits" },
    { value: "250+", label: "Professionnels certifiés" },
    { value: "99%", label: "Taux de satisfaction" }
  ];

  const values = [
    { 
      icon: Heart, 
      title: "Qualité", 
      description: "Des prestations de service irréprochables à chaque intervention", 
      color: "bg-pink-50" 
    },
    { 
      icon: Target, 
      title: "Rapidité", 
      description: "Une prise en charge immédiate de vos besoins", 
      color: "bg-blue-50" 
    },
    { 
      icon: Star, 
      title: "Excellence", 
      description: "Un engagement constant vers la perfection", 
      color: "bg-amber-50" 
    },
    { 
      icon: Users, 
      title: "Confiance", 
      description: "La sécurité et la fiabilité au cœur de nos services", 
      color: "bg-emerald-50" 
    },
  ];

  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-secondary/30 to-transparent pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                À Propos de Nous
              </span>
              <h1 className="text-4xl font-bold mb-6">Notre histoire, notre vision</h1>
              <p className="text-muted-foreground mb-6">
                QuickServe a été créé avec une ambition claire : rendre les services du quotidien accessibles à tous, rapidement et efficacement. Notre plateforme connecte les utilisateurs avec des professionnels qualifiés pour tous types de services.
              </p>
              <p className="text-muted-foreground mb-8">
                Depuis notre création en 2018, nous avons servi des milliers de clients satisfaits et continuons d'étendre notre réseau de professionnels certifiés dans toute la France.
              </p>
              <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Notre équipe" 
                  className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Certifié</p>
                    <p className="text-xs text-muted-foreground">QuickServe Pro 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Ce qui nous définit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et services que nous offrons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 group bg-white">
                <CardContent className="p-6">
                  <div className={`mb-6 w-16 h-16 rounded-full ${value.color} flex items-center justify-center group-hover:bg-primary transition-colors duration-300`}>
                    <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-gradient-to-t from-secondary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre vision pour l'avenir
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous aspirons à créer un réseau de services innovants qui transformera le quotidien de nos clients.
            </p>
          </div>
          
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
                <div className="flex-shrink-0">
                  <Sparkles className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Rejoignez l'aventure QuickServe</h3>
                  <p className="text-muted-foreground mb-6">
                    Vous êtes un professionnel et souhaitez rejoindre notre réseau ? Ou peut-être avez-vous besoin de nos services ? Dans tous les cas, nous sommes là pour vous.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link to="/contact">Contactez-nous</Link>
                    </Button>
                    <Button variant="outline" asChild className="group">
                      <Link to="/faq">
                        FAQ
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
