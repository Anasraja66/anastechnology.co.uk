import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
      'Market trends & valuation estimates',
      'Investor dashboard & asset tracking',
    ],
    cta: 'Visit MyInvestIn',
    url: 'https://myinvestin.com/',
    featured: true,
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    name: 'Ana OS',
    logo: anasChatLogo,
    badge: 'AI Automation Tool',
    tagline: 'One-Prompt AI Automation Tool',
    description: 'A fast-growing UK-based AI startup and an innovative product developed by Anas Technology UK. Ana OS is a next-generation AI automation platform built to go far beyond n8n, Zapier, and ManyChat. Automate complex workflows, AI conversations, and business operations with a single prompt.',
    features: [
      'One-prompt AI workflow generation',
      'Beyond n8n, Zapier & ManyChat capabilities',
      'Omnichannel AI customer engagement',
      '200+ enterprise tool integrations',
      'Custom AI flow builder & agent orchestration',
      'Real-time business & conversation analytics',
    ],
    cta: 'Visit Ana OS',
    url: 'https://anaos.io/',
    featured: true,
    accentColor: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">

              <span className="text-sm font-medium text-primary">Our Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Anas <span className="text-gradient">Products</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Innovative software products built by Anas Technology to solve real-world business challenges
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="space-y-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${product.accentColor} 
                           border ${product.borderColor} overflow-hidden group`}
              >
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Featured
                  </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className={`h-24 ${product.logo ? 'w-auto min-w-[8rem] max-w-[15rem] px-6 bg-card/60' : 'w-24 bg-card/60'} rounded-2xl backdrop-blur-md flex items-center justify-center border border-primary/20 shadow-xl overflow-hidden group-hover:border-primary/50 transition-colors`}>
                      {product.logo ? (
                        <img 
                          src={product.logo} 
                          alt={product.name}
                          className="max-h-[85%] max-w-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                        />
                      ) : product.icon ? (
                        <product.icon className="w-12 h-12 text-primary drop-shadow-lg" />
                      ) : null}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-3">{product.tagline}</p>
                    <p className="text-foreground-muted mb-6 max-w-2xl">{product.description}</p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {product.features.map(feature => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground-muted"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    {product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                                   rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        {product.cta}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/10 text-foreground-muted 
                                      rounded-full font-medium">
                        {product.cta}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 md:p-12 rounded-2xl bg-card/50 border border-foreground/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have a Product Idea?
            </h2>
            <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
              We help businesses turn their ideas into successful products. Let's build your next venture together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Project
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
