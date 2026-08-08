import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { seoServices } from "../data/seoServices";
import { b2bIndustries } from "../data/b2bIndustries";
import SEO from "../components/SEO";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Sitemap | Anas Technology UK"
        description="Navigate all pages of Anas Technology UK, including services, industries, legal pages, and more."
      />
      <Navigation />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">
          Website <span className="gradient-text">Sitemap</span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border/50">Company</h2>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border/50">Resources & Legal</h2>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/newsroom" className="text-muted-foreground hover:text-primary transition-colors">Newsroom</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/legal" className="text-muted-foreground hover:text-primary transition-colors">Legal Overview</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border/50">Industries We Serve</h2>
            <ul className="space-y-3">
              {b2bIndustries.map(ind => (
                <li key={ind.id}>
                  <Link to={`/industry/${ind.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border/50">Our Tech Services</h2>
            <ul className="space-y-3">
              {seoServices.map(service => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;
