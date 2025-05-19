
import { Package, Home, Sparkles, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Des solutions pour tous vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services professionnels, conçus pour vous faciliter la vie au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block">
              <Card 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white rounded-xl"
              >
                <div className="relative h-48 overflow-hidden">
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
                  <div className="absolute bottom-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-medium flex items-center">
                      Découvrir <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center font-medium text-primary hover:underline"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
