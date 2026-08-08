import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Cpu } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const industryData: Record<string, any> = {
  "fintech": {
    title: "Fintech & Banking",
    description: "Enterprise-grade software and AI solutions for banking, trading platforms, and financial institutions.",
    keywords: "Fintech Software, Banking AI, Financial CRM, Anas Technology UK",
    benefits: ["Secure Data Processing", "Algorithmic Trading Models", "Automated Compliance (KYC/AML)"]
  },
  "healthcare": {
    title: "Healthcare & MedTech",
    description: "Reliable, compliant software solutions for hospitals, telehealth, and medical device integrations.",
    keywords: "Healthcare Software, MedTech, Telehealth CRM, Anas Technology UK",
    benefits: ["HIPAA Compliant Architecture", "Telemedicine Integration", "Patient Data Security"]
  },
  "retail": {
    title: "Retail & E-Commerce",
    description: "Omnichannel retail solutions, advanced POS systems, and personalized shopping experiences powered by AI.",
    keywords: "Retail POS Software, E-Commerce Development, Omnichannel Retail, Anas Technology UK",
    benefits: ["Omnichannel Sales Tracking", "AI Product Recommendations", "Inventory Management"]
  },
  "logistics": {
    title: "Logistics & Supply Chain",
    description: "Digital transformation for logistics companies, optimizing routes, and supply chain transparency.",
    keywords: "Logistics Software, Supply Chain AI, Fleet Management CRM, Anas Technology UK",
    benefits: ["Automated Route Optimization", "Real-time Fleet Tracking", "Customs Automation"]
  },
  "manufacturing": {
    title: "Manufacturing & CPG",
    description: "ERP systems, supply chain optimization, and IoT integrations for modern manufacturing facilities.",
    keywords: "Manufacturing ERP, Logistics Software, Supply Chain AI, Anas Technology UK",
    benefits: ["Real-time Inventory Tracking", "IoT Sensor Integrations", "Predictive Maintenance AI"]
  },
  "energy": {
    title: "Energy & Utilities",
    description: "Scalable software for smart grid management and renewable energy integrations.",
    keywords: "Smart Grid Software, Energy Tech, Renewables AI, Anas Technology UK",
    benefits: ["Smart Grid Load Balancing", "Predictive Infrastructure Maintenance", "Renewable Integration Analytics"]
  }
};

const Industry = () => {
  const { id } = useParams<{ id: string }>();
  const data = id && industryData[id] ? industryData[id] : null;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`${data.title} Solutions | Enterprise Grade Consultancy UK | Anas Technology`}
        description={data.description}
        keywords={`Enterprise Grade Consultancy UK, AI, Omnichannel CRM, Custom Software, ERP, Mobile App Development, Digital Growth, Website Development, ${data.keywords}`}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            {data.title} Industry Focus
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Empowering <span className="gradient-text">{data.title}</span> with Next-Gen Tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            {data.description} We bring enterprise-grade AI, Omnichannel CRMs, Custom Web and Mobile Apps, and complete ERP solutions to transform your business.
          </p>
          <Button size="lg" className="bg-gradient-primary" onClick={() => window.location.href = '/contact'}>
            Consult Our Experts <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Capabilities for {data.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Anas Technology provides end-to-end solutions, ensuring that every digital touchpoint is optimized for maximum growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-2xl" data-aos="fade-up" data-aos-delay="0">
              <Cpu className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">Automate workflows, generate insights, and predict trends specific to your market.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Omnichannel CRM (AnaOS)</h3>
              <p className="text-muted-foreground text-sm">Unify your communications and customer data across every platform into one dashboard.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Software & ERPs</h3>
              <p className="text-muted-foreground text-sm">Bespoke system architecture perfectly tailored to handle your complex operational needs.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl" data-aos="fade-up" data-aos-delay="300">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile & Web Apps</h3>
              <p className="text-muted-foreground text-sm">High-performance digital products engineered for maximum user engagement and scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just write code; we build the digital foundation for your enterprise. Our focus on reliability, scalability, and security makes us the top choice for {data.title} leaders.
              </p>
              <ul className="space-y-4">
                {data.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-10 rounded-3xl text-center" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-muted-foreground mb-8">Let's discuss how Anas Technology can transform your infrastructure.</p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = '/contact'}>
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industry;
