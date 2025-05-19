import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";

const ServiceCard = ({ service }) => (
  <Link to={`/services/${service.id}`} className="block">
    <Card 
      className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white rounded-xl h-full"
    >
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardContent className="p-6 relative">
        <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center text-primary font-medium">
            En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
          </span>
        </div>
      </CardContent>
    </Card>
  </Link>
);

const features = [
  {
    icon: Star,
    title: "Service premium",
    description: "Une qualité de service irréprochable pour chaque intervention"
  },
  {
    icon: Users,
    title: "Professionnels certifiés",
    description: "Tous nos intervenants sont formés et qualifiés dans leur domaine"
  },
  {
    icon: ShieldCheck,
    title: "Garantie satisfaction",
    description: "Satisfaction garantie ou nous intervenons à nouveau gratuitement"
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-secondary/30 to-transparent pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Nos Services
            </span>
            <h1 className="text-4xl font-bold mb-4">Des solutions pour tous vos besoins</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services professionnels, conçus pour vous faciliter la vie au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                Notre engagement
              </span>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir QuickServe ?</h2>
              <p className="text-muted-foreground mb-6">
                Nous nous engageons à vous offrir des services de la plus haute qualité, adaptés à vos besoins spécifiques. Notre équipe de professionnels qualifiés est prête à intervenir rapidement et efficacement.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex space-x-3 items-start">
                    <div className="p-2 bg-primary/10 rounded-full mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Service clients" 
                className="rounded-lg shadow-xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-lg shadow-lg hidden md:flex items-center space-x-4">
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">15,000+</p>
                  <p className="text-muted-foreground text-sm">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comment ça marche</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Réserver un service n'a jamais été aussi simple. Suivez ces étapes pour bénéficier de nos prestations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Choix du service", description: "Sélectionnez le service qui répond à vos besoins" },
              { number: "02", title: "Réservation", description: "Choisissez une date et une heure qui vous conviennent" },
              { number: "03", title: "Confirmation", description: "Recevez une confirmation avec les détails de votre prestation" },
              { number: "04", title: "Service réalisé", description: "Notre professionnel intervient et réalise la prestation" }
            ].map((step, index) => (
              <div key={index} className="relative group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-60%)] h-0.5 bg-primary/20" />
                )}
                <Card className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <span className="inline-block w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
