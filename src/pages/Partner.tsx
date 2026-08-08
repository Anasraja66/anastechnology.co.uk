import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, Code, ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 text-primary">
            <Handshake className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Partner with <span className="gradient-text">Anas Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We collaborate with forward-thinking enterprises, agencies, and startups to build next-generation AI and omnichannel CRM solutions.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl text-center" data-aos="fade-up" data-aos-delay="100">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">Expand your offerings globally by integrating our AnaOS omnichannel infrastructure into your client solutions.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center" data-aos="fade-up" data-aos-delay="200">
              <Code className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tech Equity</h3>
              <p className="text-muted-foreground">We partner with promising startups offering premium tech development in exchange for equity and long-term growth.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center" data-aos="fade-up" data-aos-delay="300">
              <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Agency White-label</h3>
              <p className="text-muted-foreground">Agencies can leverage our development team as a white-labeled backend to deliver massive value to their clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you are looking for a tech partner, a joint venture, or white-label services, we are ready to listen.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.href = "/contact"}
          >
            Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
