import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
