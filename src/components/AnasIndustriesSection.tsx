import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  Target,
} from 'lucide-react';
import { AnimatedSectionHeader } from './AnimatedHeading';
import { b2bIndustries } from '@/data/b2bIndustries';

export function AnasIndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState<string | null>(null);

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSectionHeader
          badge="B2B Industry Expertise"
          title="Solving Global Problems Through"
          highlightText="Custom AI & Software"
          subtitle="From UK factories to UAE logistics hubs, we build reliable, highly scalable software that automates bottlenecks and integrates legacy systems."
          className="mb-16"
        />

        {/* Industry Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {b2bIndustries.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveIndustryId(industry.id)}
              onMouseLeave={() => setActiveIndustryId(null)}
              className="relative rounded-3xl overflow-hidden group h-[500px] md:h-[600px] shadow-2xl border border-white/5"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${industry.bgImage})` }}
              />
              
              {/* Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.accentColor} opacity-20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
                {/* Header Info */}
                <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.accentColor} flex items-center justify-center shadow-lg`}>
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                        {industry.name}
                      </h3>
                      <p className="text-white/80 font-medium">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {industry.keywords.map(kw => (
                      <span key={kw} className="text-xs font-semibold text-white/70 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Reveal Content (Challenges & Solutions) */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100">
                  <div className="space-y-6 pb-4">
                    
                    {/* Challenge */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-red-400" />
                        <h4 className="text-xs font-bold text-white tracking-wider uppercase">The Problem</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {industry.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white tracking-wider uppercase">Anas Technology Solution</h4>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed font-medium">
                        {industry.solution}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {industry.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-xs text-white/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/industry/${industry.id}`} className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors w-full justify-center">
                      Automate Your Operations
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                  </div>
                </div>
                
                {/* Discover More Indicator (Fades out on hover) */}
                <div className="absolute bottom-10 left-10 transition-opacity duration-300 group-hover:opacity-0 flex items-center gap-2 text-white/60 text-sm font-medium">
                  Hover to view solutions <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Hub Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-card border border-foreground/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              A Global Hub for Enterprise Solutions
            </h3>
            <p className="text-foreground-muted text-lg">
              Headquartered in Pakistan, Anas Technology serves as a centralized hub for clients in the UK, USA, UAE, and KSA. Our highly scalable architecture powers operations worldwide.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-glow rounded-xl font-bold text-lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
