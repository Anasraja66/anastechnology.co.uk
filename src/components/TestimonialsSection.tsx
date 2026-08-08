import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { AnimatedSectionHeader } from './AnimatedHeading';

import rajaQasimImg from '@/assets/raja-qasim.jpg';
import asifSohaibImg from '@/assets/asif-sohaib.png';
import garyImg from '@/assets/gary.png';

const testimonials = [
  {
    name: 'Raja Qasim',
    role: 'Founder',
    company: 'Al Ameen Fence',
    image: rajaQasimImg,
    quote: "Anas Technology and Anas Raja played a pivotal role in scaling my manufacturing company, transforming our product into a recognizable brand and generating substantial business growth.",
    rating: 5,
  },
  {
    name: 'Asif Sohaib Raja',
    role: 'CEO',
    company: 'Reliable Home & Tech Trend',
    image: asifSohaibImg,
    quote: "I have been working with Anas Technology for the past 3 years. They truly understand global real estate market dynamics, and their exceptional digital solutions have brought us an incredible response.",
    rating: 5,
  },
  {
    name: 'Gary',
    role: 'Founder',
    company: 'MyInvestIn (UK)',
    image: garyImg,
    quote: "As a UK-based startup partner, working with Anas and the team at Anas Technology has been an incredible learning experience. Their technical expertise has been invaluable to building MyInvestIn.",
    rating: 5,
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          title="Trusted Business"
          highlightText="Client Opinions"
          subtitle="Hear directly from the visionary founders and CEOs who have partnered with us to scale their global enterprises."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-8 rounded-3xl bg-card border border-foreground/10 hover:border-primary/40 transition-all duration-300 shadow-lg group hover:-translate-y-2 flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-foreground-muted">{testimonial.role}, <span className="text-primary">{testimonial.company}</span></p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground-muted leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
