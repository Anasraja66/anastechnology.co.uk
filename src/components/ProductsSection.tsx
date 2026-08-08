import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Zap, CheckCircle2, ExternalLink } from 'lucide-react';
import anasChatLogo from '@/assets/anaschat-logo.png';
import myInvestInLogo from '@/assets/myinvestin-logo.png';

const products = [
  {
    name: 'MyInvestIn',
    logo: myInvestInLogo,
    badge: 'UK Property Platform',
    tagline: 'UK\'s Premier Property Investment Platform',
    description: 'A leading UK-based PropTech startup and a flagship product of Anas Technology UK. MyInvestIn empowers real estate investors with transparent UK property listings, smart investment insights, and property portfolio management.',
    features: [
      'UK verified property listings & insights',
      'UK real estate investment analytics',
      'Property portfolio management',
      'UK legal compliance & transaction support',
    ],
    cta: 'Visit MyInvestIn',
    url: 'https://myinvestin.com/',
    featured: true,
    accentColor: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'Ana OS',
    logo: anasChatLogo,
    badge: 'AI Automation Tool',
    tagline: 'One-Prompt AI Automation Tool',
    description: 'A fast-growing UK-based AI startup and an innovative product developed by Anas Technology UK. Ana OS is a next-generation AI automation platform built to go far beyond n8n, Zapier, and ManyChat. Automate complex workflows, AI conversations, and business operations with a single prompt.',
    features: [
      'One-prompt AI workflow generation',
      'Beyond n8n, Zapier & ManyChat',
      'Omnichannel AI customer engagement',
      '200+ enterprise tool integrations',
    ],
    cta: 'Visit Ana OS',
    url: 'https://anaos.io/',
    featured: true,
    accentColor: 'from-cyan-500/20 to-blue-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background grid-bg opacity-50" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 4) * 20}%`,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${5 + i * 6}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headingRef}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isHeadingInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Our <motion.span 
              className="neon-text inline-block"
              animate={{ 
                textShadow: [
                  '0 0 20px hsl(var(--primary) / 0.5)',
                  '0 0 40px hsl(var(--primary) / 0.8)',
                  '0 0 20px hsl(var(--primary) / 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Product Family
            </motion.span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Enterprise-grade products built on cutting-edge technology
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ perspective: 1000 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 3,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`glass-card p-8 relative group overflow-hidden cursor-pointer ${
                product.featured ? 'border-primary/50' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated border gradient */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.3))',
                  backgroundSize: '200% 100%',
                }}
                animate={hoveredIndex === index ? {
                  backgroundPosition: ['0% 0%', '200% 0%'],
                } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
              
              {/* Pulsing glow effect on hover */}
              <motion.div 
                className="absolute -inset-2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{ background: 'hsl(var(--primary) / 0.3)' }}
                animate={hoveredIndex === index ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Corner accent lines */}
              <motion.div 
                className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Featured Badge */}
              {product.badge && (
                <motion.div 
                  className="absolute -top-3 left-6 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                  initial={{ y: -20, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Zap className="w-3 h-3" />
                  </motion.div>
                  {product.badge}
                </motion.div>
              )}

              {/* Logo/Icon Container */}
              <motion.div 
                className={`h-20 ${product.logo ? 'w-auto min-w-[6rem] max-w-[14rem] px-4 bg-card/60' : 'w-20 bg-gradient-to-br from-primary/20 to-primary/5'} rounded-2xl border border-primary/30 flex items-center justify-center mb-6 relative overflow-hidden shadow-xl backdrop-blur-md`}
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: 'hsl(var(--primary) / 0.8)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  boxShadow: hoveredIndex === index ? '0 0 30px hsl(var(--primary) / 0.4)' : 'none',
                }}
              >
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.5), transparent)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
                
                {product.logo ? (
                  <motion.img 
                    src={product.logo} 
                    alt={product.name} 
                    className="max-h-[85%] max-w-full w-auto object-contain relative z-10 p-1 drop-shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                ) : (
                  product.icon && (
                    <motion.div
                      className="relative z-10"
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <product.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-2xl font-heading font-bold text-foreground mb-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="text-primary text-sm font-medium mb-4 relative z-10"
                animate={hoveredIndex === index ? { x: [0, 3, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {product.tagline}
              </motion.p>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6 relative z-10">
                {product.description}
              </p>

              {/* Features with staggered animation */}
              <ul className="space-y-3 mb-8 relative z-10">
                {product.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3 text-sm text-foreground-muted group/feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + featureIndex * 0.1 }}
                    whileHover={{ x: 5, color: 'hsl(var(--foreground))' }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/30 blur-md"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 2 }}
                      />
                    </motion.div>
                    <span className="group-hover/feature:text-foreground transition-colors duration-200">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button with enhanced hover */}
              <motion.a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold relative z-10 group/cta"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="relative">
                  {product.cta}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ExternalLink className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
