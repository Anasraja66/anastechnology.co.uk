import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import anasLogo from "@/assets/anas-logo-icon.png"; // Or anas-logo.png depending on preference

const Navigation = () => {
  // State to control the initial render animation (fade-in and slide-down)
  const [isMounted, setIsMounted] = useState(false);
  // State to control the on-scroll animation (glassy effect and shrink)
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial render animation: fade in and slide down after a short delay
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 300); // Initial delay before the navigation bar appears

    // Scroll animation: listen for scroll events
    const handleScroll = () => {
      // Set a scroll threshold (e.g., 50 pixels)
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function for both timers and event listener
    return () => {
      clearTimeout(mountTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // The main navigation container, fixed at the top and centered
    <nav className="fixed top-0 md:top-4 left-1/2 -translate-x-1/2 z-50 w-full md:w-auto">
      <div
        className={cn(
          "text-white shadow-lg pr-4 md:pr-12 pl-4 py-3 flex items-center justify-between md:justify-start space-x-0 md:space-x-8 w-full md:w-auto mx-auto",
          "rounded-none md:rounded-full", // Full width on mobile, rounded pill on desktop
          "transition-all duration-500 ease-out", // Overall transition for all animated properties
          {
            // Initial render animation: hidden above, then slides down and fades in
            "opacity-0 translate-y-[-20px]": !isMounted,
            "opacity-100 translate-y-0": isMounted,
          },
          // On-scroll animation: changes background to semi-transparent black and shrinks (only if already mounted)
          {
            "bg-black/90 md:bg-black/80": scrolled && isMounted, // Solid black on mobile when scrolled to prevent text overlap, semi-transparent on desktop
            "bg-[#212121]": !scrolled || !isMounted, // Original background when not scrolled or not mounted
            "scale-100 md:scale-95": scrolled && isMounted, // Don't scale down on mobile to keep full width
            "scale-100": !scrolled && isMounted,
          }
        )}
        style={{
          // Apply the backdrop-filter inline for maximum browser compatibility
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo/Icon on the left, within its own rounded container */}
        {/* The logo's visibility and position will now primarily follow the parent's opacity/transform */}
        <div className="flex-shrink-0 bg-[#333333] p-2 rounded-full transition-transform duration-200 ease-out hover:scale-110">
          <img
            src={anasLogo}
            alt="Anas Technology UK Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
        </div>

        {/* Desktop Navigation - links and button */}
        {/* These elements will fade with the parent container's opacity */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Home Link - direct link */}
          <a href="/" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            Home
          </a>

          {/* Custom Software - using a div to simulate dropdown trigger */}
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium focus:outline-none">
              Custom Software <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            {/* Dropdown Content - styled simply for the design */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-[#333333] ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-all duration-200 ease-out origin-top">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="/cross-platform-apps" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white transition-colors transition-transform duration-200 ease-out hover:scale-105" role="menuitem">Cross-Platform Applications</a>
                <a href="/shopify-ecommerce" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white transition-colors transition-transform duration-200 ease-out hover:scale-105" role="menuitem">Shopify E-Commerce Solutions</a>
                <a href="/devops-agile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white transition-colors transition-transform duration-200 ease-out hover:scale-105" role="menuitem">DevOps & Agile Delivery</a>
              </div>
            </div>
          </div>

          {/* Other Links */}
          <a href="/team-augmentation" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            Team Augmentation
          </a>
          <a href="/about-us" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            About Us
          </a>
          <a href="/industries" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            Industries
          </a>
          <a href="/products" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            Products
          </a>
          <a href="/case-studies" className="text-white hover:text-gray-300 transition-colors transition-transform duration-200 ease-out hover:scale-105 text-sm font-medium">
            Case Studies
          </a>
        </div>

        {/* Contact Button/Email on the right, styled as a pill */}
        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-white rounded-full px-4 py-2 transition-colors transition-transform duration-200 ease-out hover:scale-105"
            style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%))' }}
          >
            <a href="/contact">Contact</a>
          </Button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center pr-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[calc(100vw-2rem)] bg-[#212121]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col py-4 animate-in slide-in-from-top-5 duration-300">
          <a href="/" className="px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5">Home</a>
          
          <div className="px-6 py-3 border-b border-white/5">
            <div className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wider">Custom Software</div>
            <a href="/cross-platform-apps" className="block py-2 text-white hover:text-primary transition-colors">Cross-Platform Apps</a>
            <a href="/shopify-ecommerce" className="block py-2 text-white hover:text-primary transition-colors">Shopify Solutions</a>
            <a href="/devops-agile" className="block py-2 text-white hover:text-primary transition-colors">DevOps & Agile</a>
          </div>

          <a href="/team-augmentation" className="px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5">Team Augmentation</a>
          <a href="/about-us" className="px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5">About Us</a>
          <a href="/industries" className="px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5">Industries</a>
          <a href="/products" className="px-6 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5">Products</a>
          <a href="/case-studies" className="px-6 py-3 text-white hover:bg-white/10 transition-colors">Case Studies</a>
          
          <div className="px-6 py-4 mt-2">
            <Button
              className="w-full rounded-full text-white font-semibold py-6 shadow-lg"
              style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(270 91% 65%))' }}
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
