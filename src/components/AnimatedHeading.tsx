import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  delay?: number;
}

export function AnimatedHeading({ 
  children, 
  className = '', 
  as: Tag = 'h2',
  delay = 0 
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </MotionTag>
  );
}

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClass?: string;
  delay?: number;
}

export function AnimatedTextReveal({ 
  text, 
  className = '',
  highlightText,
  highlightClass = 'neon-text',
  delay = 0
}: AnimatedTextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split text into words
  const words = text.split(' ');
  
  // Find highlight word indices if provided
  const highlightWords = highlightText ? highlightText.split(' ') : [];
  
  return (
    <h2 ref={ref} className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word);
        
        return (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              className={`inline-block ${isHighlighted ? highlightClass : ''}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </span>
        );
      })}
    </h2>
  );
}

interface AnimatedSectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  highlightText: string;
  subtitle?: string;
  className?: string;
}

export function AnimatedSectionHeader({
  badge,
  badgeIcon,
  title,
  highlightText,
  subtitle,
  className = ''
}: AnimatedSectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`text-center ${className}`}>
      {badge && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
        >
          {badgeIcon}
          <span className="text-sm text-primary font-medium">{badge}</span>
        </motion.div>
      )}
      
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-foreground"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {title} <span className="neon-text">{highlightText}</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
