import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Discover Your Next
            <span className="text-primary block">Favorite Dish</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Explore thousands of delicious recipes from around the world. From quick weeknight dinners to impressive entertaining dishes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Explore Recipes
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
