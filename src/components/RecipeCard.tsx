import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  servings: number;
  category: string;
  difficulty: string;
}

export const RecipeCard = ({ title, image, time, servings, category, difficulty }: RecipeCardProps) => {
  return (
    <Card className="group overflow-hidden border-border shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{servings}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
