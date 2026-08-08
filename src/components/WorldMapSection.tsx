import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, X, ExternalLink, Building2 } from 'lucide-react';
import { AnimatedSectionHeader } from './AnimatedHeading';

interface Location {
  id: string;
  name: string;
  country: string;
  code: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
  services: string[];
  color: string;
}

const locations: Location[] = [
  {
    id: 'usa',
    name: 'United States',
    country: 'USA',
    code: 'us',
    x: 20,
    y: 35,
    description: 'North American operations hub for enterprise solutions and cloud services.',
    services: ['Cloud Infrastructure', 'Enterprise Software', 'AI Solutions'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    country: 'UK',
    code: 'gb',
    x: 47,
    y: 28,
    description: 'European gateway for fintech and digital transformation projects.',
    services: ['Fintech', 'Digital Banking', 'RegTech'],
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'spain',
    name: 'Spain',
    country: 'Spain',
    code: 'es',
    x: 44,
    y: 38,
    description: 'Mediterranean tech hub focusing on tourism and hospitality solutions.',
    services: ['Tourism Tech', 'E-commerce', 'Mobile Apps'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'germany',
    name: 'Germany',
    country: 'Germany',
    code: 'de',
    x: 50,
    y: 30,
    description: 'Strategic partnership with Elixlumi for advanced AI integration standards.',
    services: ['ERP Systems', 'Industry 4.0', 'Automation'],
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'ksa',
    name: 'Saudi Arabia',
    country: 'KSA',
    code: 'sa',
    x: 58,
    y: 42,
    description: 'Vision 2030 aligned solutions for digital transformation in the Kingdom.',
    services: ['Smart Cities', 'Government Tech', 'Digital Identity'],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    country: 'UAE',
    code: 'ae',
    x: 62,
    y: 44,
    description: 'Dubai-based operations serving real estate, hospitality, and fintech sectors.',
    services: ['PropTech', 'Hospitality', 'Payments'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    country: 'Pakistan',
    code: 'pk',
    x: 68,
    y: 40,
    description: 'Headquarters and primary development center with 50+ skilled engineers.',
    services: ['Software Development', 'AI/ML', 'Cybersecurity'],
    color: 'from-primary to-cyan-400',
  },
];

// Connection lines between locations
const connections = [
  { from: 'pakistan', to: 'germany' },
  { from: 'pakistan', to: 'uae' },
  { from: 'pakistan', to: 'ksa' },
  { from: 'pakistan', to: 'uk' },
  { from: 'pakistan', to: 'usa' },
  { from: 'germany', to: 'uk' },
  { from: 'uae', to: 'ksa' },
];

export function WorldMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const getLocationById = (id: string) => locations.find(l => l.id === id);

  return (
    <section id="world-map" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          title="Global Footprint"
          highlightText="Worldwide Operations"
          subtitle="Headquartered in Pakistan, Anas Technology drives digital transformation globally, with a primary focus on delivering highly reliable software solutions to clients in the UK, USA, UAE, and KSA."
          className="mb-12"
        />

        {/* World Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[2/1] max-w-5xl mx-auto"
        >
          {/* Stylized World Map Background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {/* Map grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                {/* Horizontal lines */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 5}
                    x2="100"
                    y2={i * 5}
                    stroke="currentColor"
                    strokeWidth="0.1"
                    className="text-primary/30"
                  />
                ))}
                {/* Vertical lines */}
                {[...Array(20)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 5}
                    y1="0"
                    x2={i * 5}
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="0.1"
                    className="text-primary/30"
                  />
                ))}
              </svg>
            </div>

            {/* Stylized continent shapes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
              {/* North America */}
              <path
                d="M5,15 Q15,10 25,15 Q30,20 28,30 Q20,35 15,30 Q8,25 5,15"
                fill="currentColor"
                className="text-primary/10"
              />
              {/* Europe */}
              <path
                d="M42,20 Q50,15 55,20 Q58,25 55,30 Q48,32 42,28 Q40,24 42,20"
                fill="currentColor"
                className="text-primary/10"
              />
              {/* Africa */}
              <path
                d="M45,35 Q52,32 55,38 Q56,45 50,48 Q44,46 43,40 Q43,36 45,35"
                fill="currentColor"
                className="text-primary/10"
              />
              {/* Asia */}
              <path
                d="M58,18 Q70,12 82,18 Q88,25 85,35 Q75,42 65,38 Q55,32 58,18"
                fill="currentColor"
                className="text-primary/10"
              />
              {/* Middle East */}
              <path
                d="M55,35 Q62,33 65,38 Q66,42 62,44 Q56,43 55,38 Q54,36 55,35"
                fill="currentColor"
                className="text-primary/15"
              />
            </svg>
          </div>

          {/* Connection Lines with Data Flow Particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {connections.map((conn, index) => {
              const from = getLocationById(conn.from);
              const to = getLocationById(conn.to);
              if (!from || !to) return null;

              const isActive = hoveredLocation === conn.from || hoveredLocation === conn.to;

              return (
                <g key={index}>
                  {/* Connection line */}
                  <motion.line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isActive ? 0.8 : 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                  
                  {/* Always-visible data flow particles (forward direction) */}
                  <motion.circle
                    r={isActive ? 4 : 2.5}
                    fill="hsl(var(--primary))"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.8, 1, 0.8, 0],
                      cx: [`${from.x}%`, `${to.x}%`],
                      cy: [`${from.y}%`, `${to.y}%`],
                    }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  />
                  
                  {/* Second particle with offset timing (forward) */}
                  <motion.circle
                    r={isActive ? 3 : 2}
                    fill="hsl(var(--primary))"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0.8, 0.6, 0],
                      cx: [`${from.x}%`, `${to.x}%`],
                      cy: [`${from.y}%`, `${to.y}%`],
                    }}
                    transition={{
                      duration: 2.5 + index * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1.5 + index * 0.3,
                    }}
                  />
                  
                  {/* Return direction particle */}
                  <motion.circle
                    r={isActive ? 3.5 : 2}
                    fill="hsl(190, 100%, 60%)"
                    filter="url(#glowCyan)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.5, 0.7, 0.5, 0],
                      cx: [`${to.x}%`, `${from.x}%`],
                      cy: [`${to.y}%`, `${from.y}%`],
                    }}
                    transition={{
                      duration: 4 + index * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2 + index * 0.4,
                    }}
                  />

                  {/* Extra active particles when hovered */}
                  {isActive && (
                    <>
                      <motion.circle
                        r={5}
                        fill="hsl(var(--primary))"
                        filter="url(#glowLarge)"
                        animate={{
                          opacity: [0, 1, 0],
                          cx: [`${from.x}%`, `${to.x}%`],
                          cy: [`${from.y}%`, `${to.y}%`],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <motion.circle
                        r={4}
                        fill="hsl(190, 100%, 70%)"
                        filter="url(#glowLarge)"
                        animate={{
                          opacity: [0, 1, 0],
                          cx: [`${to.x}%`, `${from.x}%`],
                          cy: [`${to.y}%`, `${from.y}%`],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: 0.3,
                        }}
                      />
                    </>
                  )}
                </g>
              );
            })}
            
            {/* Gradient and glow definitions */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
              
              {/* Glow filter for particles */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="glowLarge" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Location Markers */}
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="absolute cursor-pointer"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredLocation === location.id || selectedLocation?.id === location.id ? 20 : 10,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5 + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => setSelectedLocation(location)}
            >
              {/* Pulse ring */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${location.color}`}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                style={{ width: '100%', height: '100%' }}
              />
              
              {/* Main marker */}
              <motion.div
                className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${location.color} flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/20`}
                whileHover={{ scale: 1.2 }}
                animate={hoveredLocation === location.id ? { scale: 1.2 } : { scale: 1 }}
              >
                <img 
                  src={`https://flagcdn.com/w40/${location.code}.png`} 
                  srcSet={`https://flagcdn.com/w80/${location.code}.png 2x`}
                  alt={`${location.country} flag`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Hover tooltip */}
              <AnimatePresence>
                {hoveredLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute left-1/2 -translate-x-1/2 -top-16 bg-background/95 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl"
                  >
                    <p className="text-sm font-semibold text-foreground">{location.name}</p>
                    <p className="text-xs text-primary">Click for details</p>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Selected Location Detail Panel */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-4 top-4 bottom-4 w-72 md:w-80 glass-card p-5 overflow-y-auto"
                style={{ zIndex: 30 }}
              >
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-3 right-3 p-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${selectedLocation.color} flex items-center justify-center overflow-hidden border-2 border-white/10`}>
                    <img 
                      src={`https://flagcdn.com/w80/${selectedLocation.code}.png`} 
                      alt={`${selectedLocation.country} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {selectedLocation.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      <span>{selectedLocation.country}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  {selectedLocation.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider text-primary mb-2 font-medium">
                    Key Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary/80 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?region=${selectedLocation.id}`}
                  className="w-full btn-glow px-4 py-2.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
                >
                  Connect with this Region
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedLocation?.id === location.id
                  ? 'bg-primary/20 text-primary border border-primary/50'
                  : 'bg-background-tertiary text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-transparent'
              }`}
            >
              <img 
                src={`https://flagcdn.com/w20/${location.code}.png`} 
                srcSet={`https://flagcdn.com/w40/${location.code}.png 2x`}
                alt={`${location.country} flag`}
                className="w-4 h-3 object-cover rounded-sm"
              />
              <span>{location.country}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
