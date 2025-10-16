import { RecipeCard } from "./RecipeCard";
import pastaImage from "@/assets/recipe-pasta.jpg";
import salmonImage from "@/assets/recipe-salmon.jpg";
import breadImage from "@/assets/recipe-bread.jpg";
import bowlImage from "@/assets/recipe-bowl.jpg";
import dessertImage from "@/assets/recipe-dessert.jpg";
import saladImage from "@/assets/recipe-salad.jpg";

const recipes = [
  {
    title: "Creamy Tomato Basil Pasta",
    image: pastaImage,
    time: "30 min",
    servings: 4,
    category: "Dinner",
    difficulty: "Easy"
  },
  {
    title: "Herb-Crusted Salmon",
    image: salmonImage,
    time: "45 min",
    servings: 2,
    category: "Lunch",
    difficulty: "Medium"
  },
  {
    title: "Artisan Sourdough Bread",
    image: breadImage,
    time: "24 hrs",
    servings: 8,
    category: "Breakfast",
    difficulty: "Advanced"
  },
  {
    title: "Mediterranean Buddha Bowl",
    image: bowlImage,
    time: "25 min",
    servings: 2,
    category: "Vegetarian",
    difficulty: "Easy"
  },
  {
    title: "Chocolate Ganache Cake",
    image: dessertImage,
    time: "2 hrs",
    servings: 12,
    category: "Desserts",
    difficulty: "Medium"
  },
  {
    title: "Garden Fresh Salad",
    image: saladImage,
    time: "15 min",
    servings: 4,
    category: "Quick & Easy",
    difficulty: "Easy"
  }
];

export const RecipeGrid = () => {
  return (
    <section id="recipes" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked recipes that are guaranteed to impress. From simple weeknight meals to show-stopping dinner party dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.title} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
