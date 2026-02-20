import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      {title && (
        <div className="bg-gradient-subtle py-12 text-center border-b border-border">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{title}</h1>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
