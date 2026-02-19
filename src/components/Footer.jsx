export const Footer = () => {
  return (
    <footer className="bg-accent border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Savory</h3>
            <p className="text-sm text-muted-foreground">
              Your destination for delicious recipes and culinary inspiration.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#recipes" className="hover:text-primary transition-colors">Recipes</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Breakfast</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dinner</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Desserts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Savory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
