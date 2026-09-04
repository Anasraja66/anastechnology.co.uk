import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const innerContainerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (innerContainerRef.current) {
        const rect = innerContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const startEffectScroll = rect.top + window.scrollY - viewportHeight;
        const endEffectScroll = rect.top + window.scrollY; 
        const totalScrollRange = endEffectScroll - startEffectScroll;
        const currentScrollProgress = window.scrollY - startEffectScroll;

        let newScale = 1;
        if (totalScrollRange > 0) {
          const progress = Math.max(0, Math.min(1, currentScrollProgress / totalScrollRange));
          newScale = 1 + (0.05 * progress);
        }

        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#0a0a0a] py-16 overflow-hidden">
      <div
        ref={innerContainerRef}
        className="max-w-7xl mx-auto bg-black rounded-3xl shadow-2xl px-8 lg:px-16 py-12 lg:py-16 transition-transform duration-300 ease-out border border-white/5 relative"
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
      >
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-12 relative z-10">
          {/* Column 1: About Anas */}
          <div className="space-y-6">
            <Link to="/">
              <img 
                src="/src/assets/anas-logo.png" 
                alt="Anas Technology UK" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-2" 
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed pr-4 mt-4">
              We advance the machine elements of digital transformation, developing enterprise software, AI, and digital ecosystems that redefine industries globally.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com/company/anas-technology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6">Explore</h3>
            <ul className="grid grid-cols-2 gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Newsroom", path: "/newsroom" },
                { name: "Partnership", path: "/partner" },
                { name: "Contact Us", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm space-y-3">
                  <div>
                    <div className="font-medium text-white mb-1">UK Office 🇬🇧</div>
                    <div>The Sandon Complex, Anfield, Liverpool</div>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Global Head Office 🇵🇰</div>
                    <div>Islamabad, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:+447435918000" className="block hover:text-white transition-colors">+44 7435 918000 (UK)</a>
                  <a href="tel:+923103358691" className="block mt-1 hover:text-white transition-colors">+92 310 3358691 (PK)</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@anastechnology.co.uk" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  contact@anastechnology.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm relative z-10">
          <div className="text-muted-foreground">
            © {new Date().getFullYear()} Anas Technology UK. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/legal" className="text-muted-foreground hover:text-white transition-colors duration-300">
              Legal
            </Link>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
