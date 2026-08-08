import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import anasLogo from '@/assets/anas-logo.png';
import { 
  SiPython, SiReact, SiJavascript, SiNodedotjs, SiTypescript, SiHtml5,
  SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiRedis,
  SiPhp, SiCss, SiVuedotjs, SiAngular, SiGit, SiLinux,
  SiTensorflow, SiNextdotjs, SiDjango, SiGooglecloud, SiMysql, SiNginx,
  SiFigma, SiSwift, SiRust, SiGo, SiGraphql, SiTailwindcss,
  SiFlutter, SiFirebase, SiJenkins, SiGitlab, SiVercel
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Tech stack with actual icons - expanded for density
const innerOrbitTech = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
];

const middleOrbitTech = [
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'Java', Icon: FaJava, color: '#ED8B00' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
];

const outerOrbitTech = [
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Django', Icon: SiDjango, color: '#092E20' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'Nginx', Icon: SiNginx, color: '#009639' },
  { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Swift', Icon: SiSwift, color: '#F05138' },
  { name: 'Rust', Icon: SiRust, color: '#DEA584' },
  { name: 'Go', Icon: SiGo, color: '#00ADD8' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
  { name: 'GitLab', Icon: SiGitlab, color: '#FC6D26' },
  { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
];

interface OrbitingIconProps {
  tech: { name: string; Icon: IconType; color: string };
  index: number;
  total: number;
  radius: number;
  size: number;
}

function OrbitingIcon({ tech, index, total, radius, size }: OrbitingIconProps) {
  const angle = (index / total) * 360;
  const offset = size / 2;
  const Icon = tech.Icon;

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-125 hover:z-50"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - ${offset}px)`,
        top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - ${offset}px)`,
      }}
    >
      {/* Glowing circle background */}
      <div 
        className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(0, 150, 200, 0.5), rgba(0, 70, 110, 0.7) 70%, rgba(0, 40, 70, 0.9))`,
          boxShadow: `0 0 12px rgba(0, 180, 220, 0.5), inset 0 0 8px rgba(0, 180, 220, 0.3)`,
          border: '1px solid rgba(0, 200, 255, 0.4)',
        }}
      />
      
      {/* Glass highlight */}
      <div 
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
        }}
      />
      
      {/* Icon */}
      <Icon size={size * 0.5} color={tech.color} style={{ position: 'relative', zIndex: 10, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background-secondary/95 border border-primary/40 rounded-lg text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm z-50">
        {tech.name}
      </div>
    </div>
  );
}

// Hook for responsive sizing
function useResponsiveSizes() {
  const [sizes, setSizes] = useState({
    inner: { radius: 75, size: 42 },
    middle: { radius: 140, size: 44 },
    outer: { radius: 210, size: 40 },
  });

  useEffect(() => {
    function updateSizes() {
      const width = window.innerWidth;
      if (width < 400) {
        setSizes({
          inner: { radius: 50, size: 28 },
          middle: { radius: 90, size: 30 },
          outer: { radius: 130, size: 26 },
        });
      } else if (width < 640) {
        setSizes({
          inner: { radius: 55, size: 32 },
          middle: { radius: 100, size: 34 },
          outer: { radius: 145, size: 30 },
        });
      } else if (width < 768) {
        setSizes({
          inner: { radius: 65, size: 36 },
          middle: { radius: 120, size: 38 },
          outer: { radius: 175, size: 34 },
        });
      } else if (width < 1024) {
        setSizes({
          inner: { radius: 70, size: 40 },
          middle: { radius: 130, size: 42 },
          outer: { radius: 190, size: 38 },
        });
      } else {
        setSizes({
          inner: { radius: 80, size: 44 },
          middle: { radius: 150, size: 46 },
          outer: { radius: 220, size: 42 },
        });
      }
    }

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return sizes;
}

export function DeepTechSection() {
  const sizes = useResponsiveSizes();
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="deep-tech" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0d1929' }}>
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 100, 150, 0.15) 0%, transparent 60%)' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isHeadingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl order-2 lg:order-1"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              The <span className="neon-text">'Future-First'</span> Architecture
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              While standard AI tools generate boilerplate code, we engineer custom digital dominance through advanced AI integration and robust API-centric frameworks. 
              Our philosophy creates a fortress around your code—embedding elite-grade security and unmatched <strong>reliability</strong> into the development lifecycle. 
              By architecting highly <strong>scalable</strong> cloud ecosystems, we guarantee your data remains sovereign and uncompromised as your business grows globally.
            </motion.p>
          </motion.div>

          {/* Right Content - Orbital Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[300px] aspect-square sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] mx-auto">
              
              {/* Connection lines from center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {[...Array(16)].map((_, i) => {
                  const angle = (i / 16) * 360;
                  const x2 = 50 + Math.cos((angle * Math.PI) / 180) * 45;
                  const y2 = 50 + Math.sin((angle * Math.PI) / 180) * 45;
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(0, 180, 220, 0.08)"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
              
              {/* Faint orbital rings with glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Inner ring */}
                <div 
                  className="absolute rounded-full"
                  style={{ 
                    width: '30%', 
                    height: '30%',
                    border: '1px solid rgba(0, 180, 220, 0.2)',
                    boxShadow: '0 0 20px rgba(0, 180, 220, 0.1)',
                  }}
                />
                {/* Middle ring */}
                <div 
                  className="absolute rounded-full"
                  style={{ 
                    width: '56%', 
                    height: '56%',
                    border: '1px solid rgba(0, 180, 220, 0.15)',
                    boxShadow: '0 0 25px rgba(0, 180, 220, 0.08)',
                  }}
                />
                {/* Outer ring */}
                <div 
                  className="absolute rounded-full"
                  style={{ 
                    width: '85%', 
                    height: '85%',
                    border: '1px solid rgba(0, 180, 220, 0.1)',
                    boxShadow: '0 0 30px rgba(0, 180, 220, 0.06)',
                  }}
                />
              </div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(0, 180, 220, 0.4)',
                      '0 0 60px rgba(0, 180, 220, 0.6)',
                      '0 0 30px rgba(0, 180, 220, 0.4)',
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-full"
                >
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
                      border: '2px solid rgba(0, 180, 220, 0.5)',
                    }}
                  >
                    <img src={anasLogo} alt="Anas Technology" className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain" />
                  </div>
                </motion.div>
              </div>

              {/* Inner Orbit - 8 icons */}
              <motion.div 
                className="absolute inset-0 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                {innerOrbitTech.map((tech, i) => (
                  <OrbitingIcon 
                    key={tech.name} 
                    tech={tech} 
                    index={i} 
                    total={innerOrbitTech.length} 
                    radius={sizes.inner.radius} 
                    size={sizes.inner.size} 
                  />
                ))}
              </motion.div>

              {/* Middle Orbit - 12 icons (reverse) */}
              <motion.div 
                className="absolute inset-0 z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              >
                {middleOrbitTech.map((tech, i) => (
                  <OrbitingIcon 
                    key={tech.name} 
                    tech={tech} 
                    index={i} 
                    total={middleOrbitTech.length} 
                    radius={sizes.middle.radius} 
                    size={sizes.middle.size} 
                  />
                ))}
              </motion.div>

              {/* Outer Orbit - 16 icons */}
              <motion.div 
                className="absolute inset-0 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
              >
                {outerOrbitTech.map((tech, i) => (
                  <OrbitingIcon 
                    key={tech.name} 
                    tech={tech} 
                    index={i} 
                    total={outerOrbitTech.length} 
                    radius={sizes.outer.radius} 
                    size={sizes.outer.size} 
                  />
                ))}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
