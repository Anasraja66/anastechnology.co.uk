import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { ArrowRight, CheckCircle2, ChevronRight, Brain, Bot, Network, Cpu, Monitor, Smartphone, ShoppingCart, BarChart, Cloud, Palette, TrendingUp, Share2, Search, PenTool, Briefcase } from "lucide-react";
import { seoServices } from "../data/seoServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Icon mapping helper
const IconMap = { Brain, Bot, Network, Cpu, Monitor, Smartphone, ShoppingCart, BarChart, Cloud, Palette, TrendingUp, Share2, Search, PenTool, Briefcase };

const Service = () => {
  const { id } = useParams();
  const service = seoServices.find(s => s.id === id);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = IconMap[service.icon as keyof typeof IconMap] || Briefcase;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`${service.title} | Anas Technology UK`}
        description={service.description}
        keywords={service.keywords.join(", ")}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-muted/30 to-background border-b border-border/50">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-aos="fade-up">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Services</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{service.title}</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Enterprise <span className="gradient-text">{service.title}</span> Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-8">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="aspect-square rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Anas Technology for {service.title}?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just deliver services; we architect scalable growth engines tailored specifically for your enterprise needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Enterprise-Grade Security", desc: "Built with military-grade encryption and compliance standards from day one." },
              { title: "Scalable Architecture", desc: "Our solutions are designed to grow effortlessly as your user base expands." },
              { title: "Expert UK Team", desc: "Delivered by top-tier engineers and consultants based in the United Kingdom." }
            ].map((feature, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
