import { Button } from "@/components/ui/button";

const categories = [
  "All Recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Vegetarian",
  "Quick & Easy"
];

export const CategoryFilter = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === "All Recipes" ? "default" : "outline"}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
