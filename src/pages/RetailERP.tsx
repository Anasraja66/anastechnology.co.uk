import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Store, ShoppingCart, BarChart, Database, 
  RefreshCw, Server, ShieldCheck, Activity, Globe, ArrowRight, LayoutDashboard
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const RetailERP = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [traffic, setTraffic] = useState(150);
  const [legacyStatus, setLegacyStatus] = useState<'stable' | 'warning' | 'crashed'>('stable');
  const [headlessStatus, setHeadlessStatus] = useState<'stable' | 'scaling' | 'optimized'>('stable');
  
  const handleSimulateTraffic = () => {
    setIsSimulating(true);
    setLegacyStatus('warning');
    setHeadlessStatus('scaling');
    
    // Simulate traffic spike
    let currentTraffic = 150;
    const interval = setInterval(() => {
      currentTraffic += Math.floor(Math.random() * 500);
      setTraffic(currentTraffic);
      
      if (currentTraffic > 2000) {
        clearInterval(interval);
        setLegacyStatus('crashed');
        setHeadlessStatus('optimized');
        setIsSimulating(false);
      }
    }, 400);
  };

  const resetSimulator = () => {
    setTraffic(150);
    setLegacyStatus('stable');
    setHeadlessStatus('stable');
  };

  const retailModules = [
    {
      name: 'Omnichannel Order Management',
      description: 'Unify orders from your physical stores, Shopify, Amazon, and TikTok Shop into a single, real-time dashboard. Never oversell again.',
      icon: ShoppingCart,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Headless Commerce Architecture',
      description: 'Decouple your frontend from your database. We build lightning-fast web storefronts (React/Next.js) backed by auto-scaling microservices.',
      icon: LayoutDashboard,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Multi-Warehouse Inventory Sync',
      description: 'Live stock levels across all your warehouses and physical stores. Automated low-stock alerts and purchase order generation.',
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Custom E-POS Systems',
      description: 'Hardware-agnostic Point of Sale systems built for your exact retail flow. Works offline and syncs automatically when the internet returns.',
      icon: Store,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Predictive Analytics & Forecasting',
      description: 'Machine learning algorithms analyze past sales data to predict future demand, helping you optimize inventory purchasing before peak seasons.',
      icon: BarChart,
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      name: 'Global Currency & Tax Localization',
      description: 'Expanding internationally? We build dynamic checkout systems that handle local currencies, automated tax calculations (VAT/Sales Tax), and customs duties.',
      icon: Globe,
      gradient: 'from-orange-500 to-amber-500',
    }
  ];

  const RetailModuleCard = ({ module, index }: { module: typeof retailModules[0], index: number }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 60, rotateX: -15, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: 'spring', stiffness: 100, damping: 12, delay: index * 0.1 }}
        whileHover={{ y: -10, rotateY: 5, rotateX: 5, transition: { duration: 0.3 } }}
        className="relative h-full block group cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${module.gradient} rounded-2xl opacity-0 blur-xl`}
          animate={{ opacity: hovered ? [0.4, 0.7, 0.4] : 0, scale: hovered ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="relative glass-card p-6 h-full overflow-hidden bg-card/90 backdrop-blur-xl rounded-xl border border-primary/10 flex flex-col">
          <div className="relative z-10 flex-1">
            <div className="relative w-14 h-14 mb-5 flex items-center justify-center rounded-xl bg-card border border-foreground/10">
              <module.icon className="w-6 h-6 text-primary drop-shadow-lg" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{module.name}</h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              {module.description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-16 pb-16">
        
        {/* Beautiful Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 to-slate-950 relative overflow-hidden hero-radial-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 relative z-20">
              <ArrowLeft className="w-4 h-4" /> Back to Industries
            </Link>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Retail & E-Commerce ERP</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Scale Beyond Shopify.<br />
                <span className="gradient-text">Build Your Own Engine.</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                When generic SaaS platforms crash during Black Friday or fail to sync your 5 warehouses, it's time for a custom, Headless Composable Architecture.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="bg-gradient-primary text-white font-semibold rounded-full px-10 py-4 text-lg btn-neon inline-flex items-center gap-2"
                >
                  Test Black Friday Simulator
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-500 rounded-full animate-float-custom opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-custom opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-float-custom opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-indigo-400 rounded-full animate-float-custom opacity-70" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-teal-500 rounded-full animate-float-custom opacity-30" style={{ animationDelay: '2.5s' }} />
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Interactive PoC Dashboard - Peak Load Simulator */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Live Architecture <span className="gradient-text">Stress Test</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Watch how a legacy monolithic system crashes under viral TikTok traffic, while our custom Headless Microservices instantly auto-scale to handle the load.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Legacy Monolith (Left Tall Card) */}
                <div className="md:col-span-1 md:row-span-2 p-8 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-500/10 rounded-xl">
                        <Database className={`w-6 h-6 ${legacyStatus === 'crashed' ? 'text-red-500' : 'text-foreground-muted'}`} />
                      </div>
                      <h3 className="font-semibold text-xl">Legacy Monolith</h3>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="p-5 bg-background/50 rounded-2xl border border-foreground/10">
                        <div className="text-xs text-foreground-muted mb-2 uppercase tracking-wider font-semibold">Active Traffic</div>
                        <div className="font-mono text-2xl font-bold mb-1">{traffic} req/s</div>
                        <div className={`text-sm font-medium ${legacyStatus === 'crashed' ? 'text-red-400' : legacyStatus === 'warning' ? 'text-orange-400' : 'text-emerald-400'}`}>
                          Status: {legacyStatus.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={legacyStatus === 'crashed' ? resetSimulator : handleSimulateTraffic}
                    disabled={isSimulating}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-4 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {legacyStatus === 'crashed' ? 'Reset Servers' : isSimulating ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Simulate Black Friday Load'}
                  </button>
                </div>

                {/* 2. Custom Headless ERP (Top Right Wide Card) */}
                <div className={`md:col-span-2 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[200px] ${headlessStatus === 'optimized' ? 'bg-emerald-500/10 border-emerald-500/30' : headlessStatus === 'scaling' ? 'bg-blue-500/10 border-blue-500/30' : 'bg-card/60 backdrop-blur-xl border-foreground/10'}`}>
                  
                  {headlessStatus === 'optimized' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl" />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${headlessStatus === 'optimized' ? 'bg-emerald-500/20' : 'bg-background border border-foreground/10'}`}>
                        <LayoutDashboard className={`w-8 h-8 ${headlessStatus === 'optimized' ? 'text-emerald-500' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-1">Anas Tech Headless Engine</h3>
                        <p className="text-foreground-muted text-sm">Auto-scaling microservices architecture</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${headlessStatus === 'optimized' ? 'bg-emerald-500/20 text-emerald-500' : headlessStatus === 'scaling' ? 'bg-blue-500/20 text-blue-500' : 'bg-foreground/5 text-foreground-muted'}`}>
                      {headlessStatus === 'scaling' ? <Activity className="w-4 h-4 animate-pulse" /> : <Server className="w-4 h-4" />}
                      {headlessStatus === 'optimized' ? '100% Uptime Maintained' : headlessStatus === 'scaling' ? 'Auto-scaling...' : 'Standing By'}
                    </div>
                  </div>
                </div>

                {/* 3. Global Latency (Bottom Right Small Card 1) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${headlessStatus === 'optimized' ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Checkout Latency</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${headlessStatus === 'optimized' ? 'text-emerald-500' : 'text-foreground/20'}`}>
                      {headlessStatus === 'stable' ? '45ms' : headlessStatus === 'scaling' ? '55ms' : '42ms'}
                    </span>
                  </div>
                  {headlessStatus === 'optimized' && <p className="text-emerald-400 text-sm mt-2">Lightning Fast</p>}
                </div>

                {/* 4. Active Microservices (Bottom Right Small Card 2) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${headlessStatus === 'optimized' ? 'border-blue-500/30 bg-blue-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Active Nodes</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${headlessStatus === 'optimized' ? 'text-blue-500' : 'text-foreground/20'}`}>
                      {headlessStatus === 'stable' ? '2' : headlessStatus === 'scaling' ? '...' : '12'}
                    </span>
                  </div>
                  {headlessStatus === 'optimized' && <p className="text-blue-400 text-sm mt-2">Auto-scaled globally</p>}
                </div>

              </div>
            </div>
          </div>

          {/* Core Modules Grid */}
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Custom <span className="gradient-text">Retail Systems</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build the digital infrastructure that top mid-market retailers use to dominate their vertical.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24" style={{ perspective: '1000px' }}>
            {retailModules.map((module, index) => (
              <RetailModuleCard key={module.name} module={module} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 md:p-12 rounded-2xl bg-card/50 border border-foreground/10 mb-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Is Your Tech Stack Holding Back Your Growth?
            </h2>
            <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
              If your current system crashes during launches or fails to sync inventory accurately, it's time to upgrade to an enterprise-grade custom architecture.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              Book an Architecture Review
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RetailERP;
