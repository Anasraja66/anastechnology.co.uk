import { useState, useEffect, useRef } from "react";
import { Building2, Truck, Shield, Factory, Heart, ShoppingCart, TrendingUp, Users } from "lucide-react";

import { motion } from 'framer-motion';

// Import logos
import myinvestinLogo from '@/assets/myinvestin-logo.png';
import reliableLogo from '@/assets/reliable-home-logo.png';
import techtrendLogo from '@/assets/techtrend-logo.png';
import alameenLogo from '@/assets/alameen-logo.png';
import elixlumiLogo from '@/assets/elixlumi-logo.png';

const clients = [
  {
    name: 'MyInvestIn',
    subtitle: 'UK',
    logo: myinvestinLogo,
    hasLogo: true,
    url: 'https://myinvestin.com',
  },
  {
    name: 'Reliable Home Properties',
    subtitle: 'Dubai',
    logo: reliableLogo,
    hasLogo: true,
    url: 'https://reliablehome.ae',
  },
  {
    name: 'TechTrend Technical Services',
    subtitle: 'Dubai',
    logo: techtrendLogo,
    hasLogo: true,
    url: 'https://techtrendtechnical.com',
  },
  {
    name: 'Al Ameen Fence',
    logo: alameenLogo,
    hasLogo: true,
    url: 'https://alameenfence.com',
  },
  {
    name: 'Elixlumi',
    subtitle: 'Global',
    logo: elixlumiLogo,
    hasLogo: true,
    url: '#',
  },
];

const duplicatedClients = [...clients, ...clients];

const industries = [
  { icon: Heart, name: "MedTech & Manufacturing", count: "75+ Projects" },
  { icon: ShoppingCart, name: "Retail & E-Commerce", count: "90+ Clients" },
  { icon: Building2, name: "Business & Private Networks", count: "60+ Solutions" },
];

const stats = [
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Countries Served", value: 25, suffix: "+" },
  { label: "Team Members", value: 150, suffix: "+" },
];

// AnimatedCounter component with Intersection Observer
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null); // Ref to observe the element
  const [hasStarted, setHasStarted] = useState(false); // State to ensure animation runs once

  useEffect(() => {
    // Intersection Observer to trigger animation when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (visible) and animation hasn't started
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Mark as started
          startAnimation(); // Begin the counting animation
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    // Observe the current ref element if it exists
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted, end, duration]); // Dependencies for useEffect

  // Function to start the counting animation
  const startAnimation = () => {
    let startTimestamp: number | null = null;
    const step = (currentTime: number) => {
      if (!startTimestamp) startTimestamp = currentTime;
      const progress = Math.min((currentTime - startTimestamp) / duration, 1); // Calculate animation progress (0 to 1)

      setCount(Math.floor(progress * end)); // Update count based on progress

      // Continue animation if not yet complete
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step); // Start the animation frame loop
  };

  return <span ref={ref}>{count}{suffix}</span>; // Attach ref to the span element
};

const IndustriesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trusted by Innovative Companies Globally */}
        <div className="mb-20 overflow-hidden relative">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Trusted by Innovative Companies Globally
            </h3>
            <p className="text-muted-foreground">
              Companies worldwide trust us to deliver exceptional results
            </p>
          </div>
          
          {/* Top and bottom fade overlays for marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Infinite Scrolling Marquee */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-20"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[180px] md:min-w-[220px] h-24 md:h-28 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  {client.hasLogo ? (
                    <div className="relative flex items-center justify-center h-full w-full">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-16 md:max-h-20 max-w-[160px] md:max-w-[200px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                      {/* Cyan glow on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg blur-xl transition-all duration-500" />
                    </div>
                  ) : (
                    <div className="text-center flex flex-col items-center justify-center h-full">
                      <span className="text-lg md:text-xl font-bold tracking-wide text-muted-foreground/40 group-hover:text-primary transition-colors duration-500">
                        {client.name}
                      </span>
                      {client.subtitle && (
                        <span className="block text-xs text-muted-foreground/30 group-hover:text-primary/60 transition-colors duration-500">
                          {client.subtitle}
                        </span>
                      )}
                    </div>
                  )}
                </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default IndustriesSection;
