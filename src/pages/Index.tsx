import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { RecipeGrid } from "@/components/RecipeGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <CategoryFilter />
      </div>
      <RecipeGrid />
      <Footer />
    </div>
  );
};

export default Index;
