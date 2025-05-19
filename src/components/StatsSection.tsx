
import { Users, Truck, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon: Icon, value, label, delay = 0 }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const numValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const countIncrement = numValue / totalFrames;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const currentCount = Math.min(Math.floor(countIncrement * frame), numValue);
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, numValue]);

  return (
    <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold mb-1">
        {count.toLocaleString()}{value.includes("+") ? "+" : ""}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/30 rounded-2xl py-16 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              QuickServe en chiffres
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre engagement envers la satisfaction client
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem 
              icon={Users} 
              value="10000+" 
              label="Clients satisfaits" 
              delay={200}
            />
            <StatItem 
              icon={Truck} 
              value="25000+" 
              label="Services réalisés" 
              delay={400}
            />
            <StatItem 
              icon={Clock} 
              value="98%" 
              label="Interventions à l'heure" 
              delay={600}
            />
            <StatItem 
              icon={Award} 
              value="4.8/5" 
              label="Note moyenne" 
              delay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
