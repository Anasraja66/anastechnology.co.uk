import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, UtensilsCrossed, MonitorSmartphone, Store, 
  CreditCard, Clock, BellRing, ArrowRight, Pizza, ChefHat, Smartphone
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HospitalityPOS = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'received' | 'prep' | 'ready'>('idle');
  
  const handleSimulateOrder = () => {
    setIsSimulating(true);
    setOrderStatus('received');
    
    setTimeout(() => setOrderStatus('prep'), 1500);
    setTimeout(() => {
      setOrderStatus('ready');
      setIsSimulating(false);
    }, 4000);
  };

  const resetSimulator = () => setOrderStatus('idle');

  const hospitalityModules = [
    {
      name: 'Multi-Location POS',
      description: 'Manage menus, prices, and staff across multiple branches from a single cloud-based dashboard. Update a price once, and it syncs everywhere.',
      icon: Store,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Kitchen Display System (KDS)',
      description: 'Ditch the paper tickets. Send orders directly to digital kitchen screens, track prep times, and reduce missing items during rush hours.',
      icon: MonitorSmartphone,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Delivery App Aggregation',
      description: 'Stop juggling 4 different tablets. We integrate UberEats, Deliveroo, and JustEat directly into your central POS system.',
      icon: UtensilsCrossed,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Automated Inventory & Recipes',
      description: 'Track ingredients down to the gram. When a burger is sold, the bun and patty are automatically deducted from your live inventory.',
      icon: Pizza,
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      name: 'Table & Tab Management',
      description: 'Interactive floor plans let your staff assign tables, split bills seamlessly, and turn tables over faster.',
      icon: Clock,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Customer Loyalty & App',
      description: 'Launch your own branded ordering app to bypass third-party commission fees and build a database of loyal customers.',
      icon: CreditCard,
      gradient: 'from-emerald-500 to-teal-500',
    }
  ];

  const ModuleCard = ({ module, index }: { module: typeof hospitalityModules[0], index: number }) => {
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
              <module.icon className="w-6 h-6 text-purple-400 drop-shadow-lg" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{module.name}</h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">{module.description}</p>
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
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Hospitality & Restaurant POS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Kill the Tablet Chaos.<br />
                <span className="gradient-text">Unify Your Kitchen.</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                We build custom POS and Kitchen Display Systems (KDS) for multi-location restaurants, merging dine-in, Deliveroo, and UberEats into one seamless screen.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="bg-gradient-primary text-white font-semibold rounded-full px-10 py-4 text-lg btn-neon inline-flex items-center gap-2"
                >
                  Test Kitchen Display Sync
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-500 rounded-full animate-float-custom opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-custom opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-pink-400 rounded-full animate-float-custom opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-indigo-400 rounded-full animate-float-custom opacity-70" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-cyan-500 rounded-full animate-float-custom opacity-30" style={{ animationDelay: '2.5s' }} />
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Interactive Simulator */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Live Kitchen <span className="gradient-text">Display Simulator</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how a custom API aggregates an UberEats order directly into your kitchen screen without staff needing to punch it into the till manually.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Third Party App (Left Tall Card) */}
                <div className="md:col-span-1 md:row-span-2 p-8 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <Smartphone className="w-6 h-6 text-foreground-muted" />
                      </div>
                      <h3 className="font-semibold text-xl">Customer App</h3>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="p-5 bg-background/50 rounded-2xl border border-foreground/10">
                        <div className="font-bold text-lg mb-2">Order #4492</div>
                        <div className="text-sm text-foreground-muted mb-1 flex justify-between"><span>2x Double Cheeseburger</span><span>£16.00</span></div>
                        <div className="text-sm text-foreground-muted flex justify-between"><span>1x Large Fries</span><span>£3.50</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={orderStatus === 'ready' ? resetSimulator : handleSimulateOrder}
                    disabled={isSimulating}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-4 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {orderStatus === 'ready' ? 'New Order' : isSimulating ? <BellRing className="w-5 h-5 animate-pulse" /> : 'Customer Places Order'}
                  </button>
                </div>

                {/* 2. Custom KDS (Top Right Wide Card) */}
                <div className={`md:col-span-2 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[200px] ${orderStatus === 'ready' ? 'bg-emerald-500/10 border-emerald-500/30' : orderStatus === 'prep' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-card/60 backdrop-blur-xl border-foreground/10'}`}>
                  
                  {orderStatus === 'ready' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl" />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${orderStatus === 'ready' ? 'bg-emerald-500/20' : orderStatus === 'prep' ? 'bg-orange-500/20' : 'bg-background border border-foreground/10'}`}>
                        <ChefHat className={`w-8 h-8 ${orderStatus === 'ready' ? 'text-emerald-500' : orderStatus === 'prep' ? 'text-orange-500' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-1">Anas Tech KDS Screen</h3>
                        <p className="text-foreground-muted text-sm">Unified Kitchen Display System</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${orderStatus === 'ready' ? 'bg-emerald-500/20 text-emerald-500' : orderStatus === 'prep' ? 'bg-orange-500/20 text-orange-500' : 'bg-foreground/5 text-foreground-muted'}`}>
                      {orderStatus === 'received' || orderStatus === 'prep' ? <Clock className={`w-4 h-4 ${orderStatus === 'prep' ? 'animate-spin' : ''}`} /> : <UtensilsCrossed className="w-4 h-4" />}
                      {orderStatus === 'ready' ? 'Ready for Driver' : orderStatus === 'prep' ? 'Cooking in Progress...' : orderStatus === 'received' ? 'Order Flashing...' : 'Awaiting Orders'}
                    </div>
                  </div>
                </div>

                {/* 3. Prep Time (Bottom Right Small Card 1) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${orderStatus === 'ready' ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Prep Time</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${orderStatus === 'ready' ? 'text-emerald-500' : 'text-foreground/20'}`}>
                      {orderStatus === 'idle' ? '--' : orderStatus === 'received' ? '...' : '12m'}
                    </span>
                  </div>
                  {orderStatus === 'ready' && <p className="text-emerald-400 text-sm mt-2">Ahead of schedule</p>}
                </div>

                {/* 4. Live Inventory (Bottom Right Small Card 2) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${orderStatus === 'ready' ? 'border-orange-500/30 bg-orange-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Auto-Inventory</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${orderStatus === 'ready' ? 'text-orange-500' : 'text-foreground/20'}`}>
                      {orderStatus === 'idle' ? '--' : orderStatus === 'received' ? '...' : 'Synced'}
                    </span>
                  </div>
                  {orderStatus === 'ready' && <p className="text-orange-400 text-sm mt-2">-4 Patties, -1 Fries</p>}
                </div>

              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Custom <span className="gradient-text">Hospitality Features</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {hospitalityModules.map((module, index) => (
              <ModuleCard key={module.name} module={module} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 md:p-12 rounded-2xl bg-card/50 border border-foreground/10 mb-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stop Paying High Commissions to Third-Parties.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Build Your Own POS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HospitalityPOS;
