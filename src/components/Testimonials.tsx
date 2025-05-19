
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Cliente régulière",
    content: "J'utilise QuickServe depuis 6 mois pour mes livraisons professionnelles. Un service impeccable, ponctuel et très professionnel.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Thomas Dubois",
    role: "Client déménagement",
    content: "Mon déménagement s'est déroulé sans accroc grâce à l'équipe de QuickServe. Personnel attentionné et très soigneux avec mes affaires.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Émilie Bernard",
    role: "Cliente services de nettoyage",
    content: "Service de nettoyage exceptionnel. Mon appartement n'a jamais été aussi propre ! Je recommande vivement pour la qualité du travail.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Antoine Moreau",
    role: "Client dépannage",
    content: "Intervention rapide pour une fuite d'eau. Technicien compétent qui a réglé le problème en moins d'une heure. Très satisfait !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
            Ce que nos clients disent
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Découvrez les expériences de nos clients satisfaits avec nos services
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-full relative">
                    <div className="absolute -top-3 -left-3 text-primary/20">
                      <Quote size={48} className="fill-primary/5 stroke-primary/30" />
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex items-center justify-center mt-8">
            <CarouselPrevious className="-left-12 hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="-right-12 hover:bg-primary hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
