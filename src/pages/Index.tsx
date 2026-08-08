import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { AnasServicesSection } from "@/components/AnasServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { DeepTechSection } from "@/components/DeepTechSection";
import IndustriesSection from "@/components/IndustriesSection";
import { AnasIndustriesSection } from "@/components/AnasIndustriesSection";
import CTASection from "@/components/CTASection";


import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorldMapSection } from "@/components/WorldMapSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DeepTechSection />
      <AnasServicesSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <AnasIndustriesSection />

      <TestimonialsSection />
      <WorldMapSection />
      <TeamSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
