
import { CheckCircle, Calendar, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: CheckCircle,
    title: "Choisissez votre service",
    description: "Sélectionnez le service qui correspond à vos besoins"
  },
  {
    icon: Calendar,
    title: "Réservez en ligne",
    description: "Planifiez votre intervention en quelques clics"
  },
  {
    icon: MapPin,
    title: "Suivez en temps réel",
    description: "Restez informé de l'avancement de votre prestation"
  },
  {
    icon: Star,
    title: "Évaluez votre prestation",
    description: "Partagez votre expérience avec la communauté"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge 
            variant="primary" 
            className="mb-4 px-3 py-1 text-sm font-medium bg-primary/10 text-primary"
          >
            Comment ça marche
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
            Simple, rapide et efficace
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Notre processus en quatre étapes simples pour vous offrir une expérience sans souci.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group h-full">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-60%)] h-0.5 bg-primary/20" />
              )}
              <div className="text-center relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
