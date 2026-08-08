import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Building2, Rocket } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Scaling Manufacturing with Digital Transformation",
    category: "Brand & Business Scaling",
    industry: "Manufacturing",
    summary: "Transformed Al Ameen Fence into a recognizable brand, implementing digital solutions that generated substantial business growth and scaled operations.",
    impact: "Substantial business growth",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    tags: ["Digital Transformation", "Branding", "Manufacturing", "Scaling"],
    readMore: "#"
  },
  {
    id: 2,
    title: "Global Real Estate Digital Solutions",
    category: "Real Estate Tech",
    industry: "Real Estate",
    summary: "Built exceptional digital solutions for Reliable Home & Tech Trend to navigate global real estate dynamics, bringing an incredible market response over a 3-year partnership.",
    impact: "Incredible market response",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Real Estate", "Digital Solutions", "Market Expansion", "Tech Trend"],
    readMore: "#"
  },
  {
    id: 3,
    title: "Building and Scaling a UK Startup Platform",
    category: "Startup Development",
    industry: "Investment",
    summary: "Provided invaluable technical expertise to build MyInvestIn from the ground up, delivering scalable architecture and seamless functionality for a UK-based startup.",
    impact: "Successful platform launch",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Startup", "Architecture", "Investment", "UK"],
    readMore: "#"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've helped industry leaders transform their businesses.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            
            return (
              <div
                key={study.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-primary mb-2">Key Impact:</div>
                    <div className="text-lg font-bold gradient-text">{study.impact}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300"
                    size="sm"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-accent text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-premium hover:shadow-neon transition-all duration-500 hover:scale-105"
            asChild
          >
            <a href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;