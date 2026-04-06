import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="snap-container">
      <Navigation />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
