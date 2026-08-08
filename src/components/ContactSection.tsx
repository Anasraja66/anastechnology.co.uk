import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden" id="contact">
      {/* Decorative background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text & CTA */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build the <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-primary">Future Together.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you need to build a complex AI workflow, a robust enterprise ERP, or a sleek e-commerce platform, our global team is ready to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-gradient-primary text-white rounded-full px-8 py-6 text-lg hover:shadow-elegant transition-all duration-300" 
                asChild
              >
                <a href="mailto:contact@anastechnology.co.uk">Book a Discovery Call</a>
              </Button>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/anas-technology" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
            {/* Email Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">For project inquiries and appointment bookings.</p>
                  <a href="mailto:contact@anastechnology.co.uk" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    contact@anastechnology.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-foreground mb-4">Call Us</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">Graham Michael (UK)</p>
                        <p className="text-xs text-muted-foreground">Co-Founder</p>
                      </div>
                      <a href="tel:+447435918000" className="font-medium text-foreground hover:text-primary transition-colors">
                        +44 7435 918000
                      </a>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">Anas Raja (PK)</p>
                        <p className="text-xs text-muted-foreground">Founder & CTO</p>
                      </div>
                      <a href="tel:+923103358691" className="font-medium text-foreground hover:text-primary transition-colors">
                        +92 310 3358691
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
