import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Globe, 
  Rocket, 
  Bot, 
  Database, 
  Cloud, 
  Shield, 
  Building2, 
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { AnimatedSectionHeader } from './AnimatedHeading';

const services = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Custom models, computer vision, NLP solutions, and MLOps for intelligent systems',
    gradient: 'from-cyan-500 to-blue-500',
    path: '/service/ai-machine-learning',
  },
  {
    title: 'Web Application Development',
    icon: Globe,
    description: 'Full-stack web apps with React/Next.js, microservices architecture, and cloud-native deployment',
    gradient: 'from-blue-500 to-purple-500',
    path: '/service/web-development',
  },
  {
    title: 'SaaS & MVP Development',
    icon: Rocket,
    description: 'Rapid MVP prototyping, multi-tenant SaaS architecture, and growth-ready analytics',
    gradient: 'from-purple-500 to-pink-500',
    path: '/service/enterprise-solution-1',
  },
  {
    title: 'Automation & AI Agents',
    icon: Bot,
    description: 'RPA, conversational agents, and autonomous workflows for enterprise systems',
    gradient: 'from-pink-500 to-red-500',
    path: '/service/ai-automation',
  },
  {
    title: 'Data Engineering & Analytics',
    icon: Database,
    description: 'ETL pipelines, data lakes, real-time streaming, and business intelligence dashboards',
    gradient: 'from-orange-500 to-yellow-500',
    path: '/service/data-analytics',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Multi-cloud architecture, Infrastructure as Code, and security-first deployments',
    gradient: 'from-green-500 to-emerald-500',
    path: '/service/cloud-migration',
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Application security, threat modeling, and privacy-by-design for regulated industries',
    gradient: 'from-emerald-500 to-teal-500',
    path: '/service/enterprise-solution-2',
  },
  {
    title: 'Enterprise Software',
    icon: Building2,
    description: 'Custom ERP, CRM solutions with seamless integrations and compliance readiness',
    gradient: 'from-teal-500 to-cyan-500',
    path: '/service/enterprise-solution-3',
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Native iOS & Android apps, cross-platform solutions with React Native and Flutter',
    gradient: 'from-indigo-500 to-violet-500',
    path: '/service/mobile-development',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export function AnasServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: 150 + i * 50,
              height: 150 + i * 50,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          badge="Our Services"
          title="What We"
          highlightText="Build"
          subtitle="End-to-end custom, highly reliable, and scalable technology solutions tailored for enterprise growth."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.path}
              className="group relative block"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
              {/* Animated Pulsing Glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 blur-xl`}
                animate={{
                  opacity: hoveredIndex === index ? [0.4, 0.7, 0.4] : 0,
                  scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Rotating Border Gradient */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl overflow-hidden"
                style={{
                  background: hoveredIndex === index 
                    ? `conic-gradient(from 0deg, hsl(var(--primary)), transparent, hsl(var(--primary)))` 
                    : 'transparent',
                }}
                animate={{
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <div className="relative glass-card p-6 h-full cursor-pointer overflow-hidden bg-card/90 backdrop-blur-xl rounded-xl border border-primary/10">
                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                  animate={{
                    x: hoveredIndex === index ? ['-100%', '200%'] : '-100%',
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Animated corner accents */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        className="absolute top-0 left-0 w-12 h-12"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${service.gradient}`} />
                        <div className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${service.gradient}`} />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-0 right-0 w-12 h-12"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l ${service.gradient}`} />
                        <div className={`absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t ${service.gradient}`} />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
                
                <div className="relative z-10">
                  {/* Icon Container with rotating border */}
                  <div className="relative w-16 h-16 mb-5">
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent, hsl(var(--primary)))`,
                        padding: '2px',
                      }}
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <div className="w-full h-full rounded-xl bg-card" />
                    </motion.div>
                    
                    <motion.div
                      className={`absolute inset-0.5 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
                        {/* Icon glow */}
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          animate={{
                            opacity: hoveredIndex === index ? [0.2, 0.5, 0.2] : 0.2,
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.div
                          animate={{
                            rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                            scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon className="w-8 h-8 text-primary relative z-10" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.h3
                    className="text-xl font-heading font-semibold text-foreground mb-3"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Animated Link Text */}
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <motion.span
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.5,
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center gap-2"
                    >
                      Learn More
                      <motion.span
                        animate={{
                          x: hoveredIndex === index ? [0, 8, 0] : 0,
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.span>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Floating particles inside card */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute w-1 h-1 bg-primary/60 rounded-full"
                          initial={{ 
                            opacity: 0, 
                            x: '50%', 
                            y: '50%',
                            scale: 0,
                          }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            x: `${20 + Math.random() * 60}%`,
                            y: `${20 + Math.random() * 60}%`,
                            scale: [0, 1.5, 0],
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
