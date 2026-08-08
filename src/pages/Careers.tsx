import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Briefcase, Clock, ArrowRight, Users, Lightbulb, TrendingUp, Code } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const jobListings: never[] = [];

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
        {/* Decorative background elements for visual interest */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" 
          data-aos="fade" data-aos-offset="0" data-aos-duration="2000" data-aos-easing="ease-in-out-back"
        />
        <div 
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" 
          data-aos="fade" data-aos-offset="0" data-aos-duration="2000" data-aos-easing="ease-in-out-back"
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary-glow/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" 
          data-aos="fade" data-aos-offset="0" data-aos-duration="2000" data-aos-easing="ease-in-out-back"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            At Anas Technology UK, we're building the future with passion and innovation. Discover a culture of growth, collaboration, and impactful work.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16" data-aos="fade-up">
            Current <span className="gradient-text">Openings</span>
          </h2>

          {/* New Opportunities Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-card via-card to-muted/5 border border-border/50 shadow-lg rounded-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.02] hover:border-primary" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 gradient-text">Fellowships</h3>
              <p className="text-muted-foreground flex-grow">
                Anas Technology UK offers exclusive fellowships for bright minds looking to research and innovate in AI and omnichannel systems.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card via-card to-muted/5 border border-border/50 shadow-lg rounded-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.02] hover:border-accent" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 gradient-text">Internships</h3>
              <p className="text-muted-foreground flex-grow">
                Kickstart your career. We provide hands-on internship programs guiding you through real-world enterprise software development.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card via-card to-muted/5 border border-border/50 shadow-lg rounded-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.02] hover:border-primary" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary-glow/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-glow">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 gradient-text">Developer Hiring</h3>
              <p className="text-muted-foreground flex-grow">
                We are constantly on the lookout for top-tier full-stack developers and AI engineers to join our growing global team.
              </p>
            </Card>
          </div>

          <div className="text-center py-16 bg-muted/20 rounded-3xl border border-border/50" data-aos="fade-up">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Stay Updated on LinkedIn</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              All our open positions, fellowships, and internship opportunities are exclusively announced on our LinkedIn page. Follow us to never miss an update!
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("https://linkedin.com/company/anastechnology", "_blank")}
            >
              Follow Anas Technology on LinkedIn
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Culture & Benefits Section (Optional - can be expanded) */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6" data-aos="fade-up">
            Why Work at <span className="gradient-text">ANAS?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
            We foster an environment where innovation thrives, ideas are valued, and every team member contributes to meaningful projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl text-left flex items-start space-x-4" data-aos="fade-right" data-aos-delay="300">
              <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Innovation & Impact</h3>
                <p className="text-muted-foreground text-sm">Work on groundbreaking AI and tech solutions that make a real difference.</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl text-left flex items-start space-x-4" data-aos="fade-left" data-aos-delay="400">
              <Code className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">Access to cutting-edge tools, training, and a culture of knowledge sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Export the Careers component directly
export default Careers;
