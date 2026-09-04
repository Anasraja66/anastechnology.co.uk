import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Heart, ShoppingCart, Building2, CheckCircle, ArrowRight,
  Factory, Scissors, HardHat, Pill, Truck, UtensilsCrossed, MonitorSmartphone, LayoutDashboard, Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Scroll Progress Bar Component
const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-gradient-to-r from-primary to-accent-glow">
      <div
        className="h-full bg-gradient-to-r from-primary-glow to-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

// Data for ERP Modules
const gradients = {
  blue: "from-blue-500 to-cyan-500",
  emerald: "from-emerald-500 to-teal-500",
  orange: "from-orange-500 to-amber-500",
  purple: "from-purple-500 to-fuchsia-500",
  rose: "from-rose-500 to-pink-500",
  indigo: "from-indigo-500 to-violet-500",
};

const industryERPs = [
  {
    id: "fencing",
    title: "Fencing & Manufacturing ERP",
    shortTitle: "Fencing ERP",
    icon: Factory,
    gradient: gradients.orange,
    path: "/fencing-erp",
    description: "A complete A-to-Z Operating System custom-built for UK fencing contractors and manufacturers.",
    modules: ["Raw Material Tracking", "AI Cutting Optimization", "Live Map Quoting", "Fleet GPS Routing", "Mobile Fitters App"]
  },
  {
    id: "proptech",
    title: "PropTech & Property Sourcing CRM",
    shortTitle: "PropTech CRM",
    icon: Building2,
    gradient: gradients.blue,
    path: "/proptech-erp",
    description: "Private, white-labeled deal packaging and investor CRMs for high-volume UK property sourcers.",
    modules: ["1-Click Deal PDF Packs", "Auto ROI Calculators", "Rightmove Data Extraction", "Investor Matchmaking", "Secure Portal"]
  },
  {
    id: "retail",
    title: "Enterprise Retail & Composable Commerce",
    shortTitle: "Retail ERP",
    icon: ShoppingCart,
    gradient: gradients.emerald,
    path: "/retail-erp",
    description: "Headless architectures and omnichannel inventory syncing for mid-market retailers handling high-volume traffic.",
    modules: ["Headless Commerce", "Omnichannel Inventory", "SAP/Oracle Integration", "AI Personalization", "Multi-Warehouse Routing"]
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech ERP",
    shortTitle: "MedTech ERP",
    icon: Stethoscope,
    gradient: gradients.rose,
    path: "/healthcare-erp",
    description: "Secure, custom-built medical portals and enterprise operating systems that seamlessly integrate with legacy EHRs.",
    modules: ["Legacy EHR Sync", "HIPAA/GDPR Core", "Telemedicine Portals", "AI Triage", "Predictive Rostering"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain ERP",
    shortTitle: "Logistics ERP",
    icon: Truck,
    gradient: gradients.indigo,
    path: "/logistics-erp",
    description: "Intelligent freight management, route optimization, and warehouse automation for global supply chains.",
    modules: ["AI Route Optimization", "Live Fleet Tracking", "Warehouse 3D Mapping", "Customs Clearance Automation", "Driver Mobile App"]
  },
  {
    id: "hospitality",
    title: "Hospitality & Restaurant POS",
    shortTitle: "Hospitality POS",
    icon: UtensilsCrossed,
    gradient: gradients.purple,
    path: "/hospitality-pos",
    description: "Cloud-based restaurant management systems linking kitchen displays, digital menus, and table reservations.",
    modules: ["Kitchen Display System (KDS)", "QR Code Ordering", "Ingredient Cost Tracking", "Table Management", "Staff Timesheets"]
  }
];

const Industries = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increased duration for smoother, more deliberate animations
      once: true, // Animations happen only once as elements come into view
      easing: 'ease-out-cubic', // Smoother easing function
      delay: 50, // Slight delay for all animations
      offset: 120, // Trigger animations a bit earlier
    });
    AOS.refresh(); // Refresh AOS on component mount/update
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* Custom styles for animations and gradients */}
      <style>{`
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');

        .font-inter { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Montserrat', sans-serif; }

        .bg-gradient-primary { background: linear-gradient(135deg, #6366F1, #8B5CF6); }
        .bg-gradient-accent { background: linear-gradient(135deg, #06B6D4, #22D3EE); }
        .gradient-text { background: linear-gradient(45deg, #8B5CF6, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .bg-primary-glow { background-color: #A78BFA; }
        .text-primary-glow { color: #A78BFA; }
        .bg-accent-glow { background-color: #67E8F9; }
        .text-accent-glow { color: #67E8F9; }
        .bg-black-900 { background-color: #111827; }
        .bg-black-950 { background-color: #0F172A; }

        .parallax-icon {
            transform: scale(0.8);
            opacity: 0;
            transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-out;
        }
        .parallax-icon.aos-animate { transform: scale(1); opacity: 1; }
        
        .hero-radial-gradient::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.9) 75%);
            z-index: 0;
        }

        .btn-neon {
            background: linear-gradient(45deg, #8B5CF6, #06B6D4);
            border: none;
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(6, 182, 212, 0.5);
        }
        .btn-neon::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.15);
            transition: all 0.7s ease-in-out;
            transform: translate(-50%, -50%) rotate(45deg);
            z-index: -1;
            opacity: 0;
        }
        .btn-neon:hover::before { width: 0; height: 0; opacity: 1; }
        .btn-neon:hover {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.8);
            transform: translateY(-2px);
        }
      `}</style>

      
      <Navigation />
      <div className="pt-16">
        
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 to-black-950 relative overflow-hidden animated-hero-background hero-radial-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6" data-aos="zoom-in" data-aos-duration="1500">
                Industries Where AI <span className="gradient-text">Transforms</span> Business
              </h1>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                At Anas, we bring intelligence into every sector — transforming processes, people, and outcomes. We engineer deeply customized ERPs and POS systems mapped exactly to your workflows.
              </p>
              <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                <Button size="xl" className="bg-gradient-primary text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 rounded-full px-8 py-4 text-lg btn-neon" onClick={() => document.getElementById('erp-solutions')?.scrollIntoView()}>
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-primary rounded-full opacity-60" />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-accent rounded-full opacity-40" />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-primary-glow rounded-full opacity-50" />
          </div>
        </section>

        {/* CUSTOM ERP & POS GRID SECTION (Inserted right after Hero) */}
        <section id="erp-solutions" className="py-24 bg-background relative z-10 border-b border-foreground/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                Tailored <span className="gradient-text">Software & ERP</span> Systems
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore the industry-specific operating systems and point-of-sale platforms we build to run modern enterprises.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {industryERPs.map((industry, index) => {
                const isHovered = hoveredId === industry.id;
                
                return (
                  <Link 
                    to={industry.path} 
                    key={industry.id}
                    onMouseEnter={() => setHoveredId(industry.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative block"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <motion.div className="relative h-full">
                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${industry.gradient} rounded-3xl opacity-0 blur-xl`}
                        animate={{
                          opacity: isHovered ? [0.4, 0.6, 0.4] : 0,
                          scale: isHovered ? [1, 1.02, 1] : 1,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Main Card */}
                      <div className="relative h-full bg-card/60 backdrop-blur-xl border border-foreground/10 group-hover:border-primary/30 rounded-2xl p-8 transition-colors overflow-hidden flex flex-col shadow-lg">
                        
                        {/* Background Gradient Slash (Subtle) */}
                        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${industry.gradient} opacity-5 rounded-full blur-3xl transition-opacity group-hover:opacity-10`} />

                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                          {/* Icon Box */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl bg-background border border-foreground/10 flex items-center justify-center relative overflow-hidden group-hover:border-transparent transition-colors">
                              <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                  background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent, hsl(var(--primary)))`,
                                  padding: '2px',
                                }}
                                animate={{ rotate: isHovered ? 360 : 0 }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                              >
                                <div className="w-full h-full bg-background rounded-xl" />
                              </motion.div>
                              <industry.icon className={`w-8 h-8 relative z-10 text-foreground group-hover:text-primary transition-colors`} />
                            </div>
                          </div>

                          {/* Title & Desc */}
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                                {industry.title}
                              </h2>
                            </div>
                            <p className="text-foreground-muted leading-relaxed">
                              {industry.description}
                            </p>
                          </div>
                        </div>

                        {/* Software Requirements / Modules Grid */}
                        <div className="mt-auto pt-6 border-t border-foreground/10">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-4">
                            Core Software Modules
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {industry.modules.map((mod, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-medium text-foreground group-hover:bg-foreground/10 transition-colors"
                              >
                                <CheckCircle className="w-3 h-3 text-primary" />
                                {mod}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Click Action */}
                        <div className="mt-8 flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary">
                            Explore {industry.shortTitle}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Original MedTech & Manufacturing Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1200">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  MedTech & <span className="gradient-text">Manufacturing</span>
                </h2>
                <p className="text-lg text-primary font-medium mb-6">Transforming Healthcare & Industry with Intelligence</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  At Anas Technology, we empower the medical and manufacturing world through cutting-edge AI-driven solutions — from smart diagnostics to predictive systems that boost uptime and safety.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "AI-powered medical imaging & diagnostics",
                    "Patient monitoring & early detection",
                    "Predictive maintenance for industrial systems",
                    "HIPAA-compliant automation & EHR workflows"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="800">
                      <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-primary text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full px-8 py-4 text-lg btn-neon" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>

              <div className="order-1 lg:order-2 flex items-center justify-center" data-aos="flip-right" data-aos-duration="1500">
                <Heart className="w-48 h-48 md:w-64 md:h-64 text-primary-glow opacity-20 parallax-icon" />
              </div>
            </div>
          </div>
        </section>

        {/* Original Retail & E-Commerce Section */}
        <section className="py-24 bg-black-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex items-center justify-center" data-aos="flip-left" data-aos-duration="1500">
                <ShoppingCart className="w-48 h-48 md:w-64 md:h-64 text-accent-glow opacity-20 parallax-icon" />
              </div>

              <div data-aos="fade-left" data-aos-duration="1200">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Retail & <span className="gradient-text">E-Commerce</span>
                </h2>
                <p className="text-lg text-accent font-medium mb-6">Omnichannel Experiences & Smart Supply Chains</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  We bridge the gap between digital and physical retail. Our AI models predict trends, optimize inventory, and deliver hyper-personalized shopping experiences.
                </p>
                <Button className="bg-gradient-accent text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full px-8 py-4 text-lg btn-neon" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Industries;
