import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Truck, PackageCheck, Route, BarChart3, 
  Map, ShieldCheck, Navigation2, Activity, ArrowRight, Zap, Factory
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LogisticsERP = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [routeStatus, setRouteStatus] = useState<'idle' | 'optimizing' | 'active' | 'delivered'>('idle');
  
  const handleSimulateRoute = () => {
    setIsSimulating(true);
    setRouteStatus('optimizing');
    
    setTimeout(() => setRouteStatus('active'), 2000);
    setTimeout(() => {
      setRouteStatus('delivered');
      setIsSimulating(false);
    }, 4500);
  };

  const resetSimulator = () => setRouteStatus('idle');

  const logisticsModules = [
    {
      name: 'AI Route Optimization',
      description: 'Stop letting drivers guess the best route. Our AI calculates traffic, vehicle capacity, and drop-off windows to save you hours of driving and fuel every day.',
      icon: Route,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Real-Time Fleet Tracking',
      description: 'A live map showing exactly where every van, truck, or driver is. Integrates with telematics devices or mobile apps via GPS.',
      icon: Map,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Automated Proof of Delivery (ePOD)',
      description: 'Drivers can capture signatures, take photos of dropped packages, and instantly trigger automated PDF invoices back at the office.',
      icon: PackageCheck,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Warehouse & WMS Sync',
      description: 'Connect your dispatch system directly to warehouse scanners. Know exactly what inventory is loaded onto which truck before it leaves the yard.',
      icon: Factory,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Driver Compliance & Shift Logs',
      description: 'Digitally track driver working hours, mandatory break times, and vehicle maintenance checklists to ensure complete legal compliance.',
      icon: ShieldCheck,
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      name: 'Predictive Maintenance Analytics',
      description: 'Machine learning models predict when a vehicle will need servicing before a breakdown occurs, minimizing costly fleet downtime.',
      icon: BarChart3,
      gradient: 'from-orange-500 to-amber-500',
    }
  ];

  const LogisticsModuleCard = ({ module, index }: { module: typeof logisticsModules[0], index: number }) => {
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
              <module.icon className="w-6 h-6 text-indigo-400 drop-shadow-lg" />
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
                <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Logistics & Supply Chain ERP</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Optimize Every Route.<br />
                <span className="gradient-text">Eliminate Idle Time.</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                We build intelligent fleet management systems, custom dispatch panels, and driver mobile apps that reduce fuel costs and speed up deliveries.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="bg-gradient-primary text-white font-semibold rounded-full px-10 py-4 text-lg btn-neon inline-flex items-center gap-2"
                >
                  Test Route Optimizer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-500 rounded-full animate-float-custom opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-indigo-400 rounded-full animate-float-custom opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-float-custom opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-pink-400 rounded-full animate-float-custom opacity-70" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-cyan-500 rounded-full animate-float-custom opacity-30" style={{ animationDelay: '2.5s' }} />
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Interactive PoC Dashboard - Dispatch Simulator */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Live Fleet <span className="gradient-text">Dispatch Simulator</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Watch how our AI engine takes a messy manifest, calculates traffic and capacity, and generates the perfect route for a driver in seconds.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Unoptimized Manifest (Left Tall Card) */}
                <div className="md:col-span-1 md:row-span-2 p-8 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-500/10 rounded-xl">
                        <PackageCheck className="w-6 h-6 text-foreground-muted" />
                      </div>
                      <h3 className="font-semibold text-xl">Daily Manifest</h3>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="p-4 bg-background/50 rounded-2xl border border-foreground/10 flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Stop 1: London</span><span className="text-foreground-muted">Pending</span>
                      </div>
                      <div className="p-4 bg-background/50 rounded-2xl border border-foreground/10 flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Stop 2: Manchester</span><span className="text-foreground-muted">Pending</span>
                      </div>
                      <div className="p-4 bg-background/50 rounded-2xl border border-foreground/10 flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Stop 3: Birmingham</span><span className="text-foreground-muted">Pending</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={routeStatus === 'delivered' ? resetSimulator : handleSimulateRoute}
                    disabled={isSimulating}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-4 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {routeStatus === 'delivered' ? 'Reset Route' : isSimulating ? <Navigation2 className="w-5 h-5 animate-spin" /> : 'Run AI Optimization Engine'}
                  </button>
                </div>

                {/* 2. Custom Routing Engine (Top Right Wide Card) */}
                <div className={`md:col-span-2 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[200px] ${routeStatus === 'delivered' ? 'bg-emerald-500/10 border-emerald-500/30' : routeStatus === 'optimizing' ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-card/60 backdrop-blur-xl border-foreground/10'}`}>
                  
                  {routeStatus === 'active' && (
                    <div className="absolute top-0 left-0 h-1 bg-indigo-500 transition-all duration-[2500ms] ease-linear w-full" style={{ width: '100%' }}></div>
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${routeStatus === 'delivered' ? 'bg-emerald-500/20' : 'bg-background border border-foreground/10'}`}>
                        <Route className={`w-8 h-8 ${routeStatus === 'delivered' ? 'text-emerald-500' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-1">Anas Tech Routing AI</h3>
                        <p className="text-foreground-muted text-sm">Live fleet tracking and pathing</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${routeStatus === 'delivered' ? 'bg-emerald-500/20 text-emerald-500' : routeStatus === 'active' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-foreground/5 text-foreground-muted'}`}>
                      {routeStatus === 'optimizing' || routeStatus === 'active' ? <Truck className={`w-4 h-4 ${routeStatus === 'active' ? 'animate-pulse' : ''}`} /> : <ShieldCheck className="w-4 h-4" />}
                      {routeStatus === 'delivered' ? 'All Stops Completed' : routeStatus === 'active' ? 'Driver En Route' : routeStatus === 'optimizing' ? 'Optimizing...' : 'Awaiting Dispatch'}
                    </div>
                  </div>
                </div>

                {/* 3. Fuel Savings (Bottom Right Small Card 1) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${routeStatus === 'delivered' ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Est. Fuel Savings</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${routeStatus === 'delivered' ? 'text-emerald-500' : 'text-foreground/20'}`}>
                      {routeStatus === 'idle' ? '--' : routeStatus === 'optimizing' ? '...' : '24%'}
                    </span>
                  </div>
                  {routeStatus === 'delivered' && <p className="text-emerald-400 text-sm mt-2">£140 saved today</p>}
                </div>

                {/* 4. Time Saved (Bottom Right Small Card 2) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${routeStatus === 'delivered' ? 'border-blue-500/30 bg-blue-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Time Saved</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${routeStatus === 'delivered' ? 'text-blue-500' : 'text-foreground/20'}`}>
                      {routeStatus === 'idle' ? '--' : routeStatus === 'optimizing' ? '...' : '2.5h'}
                    </span>
                  </div>
                  {routeStatus === 'delivered' && <p className="text-blue-400 text-sm mt-2">No overlapping routes</p>}
                </div>

              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Custom <span className="gradient-text">Logistics Features</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {logisticsModules.map((module, index) => (
              <LogisticsModuleCard key={module.name} module={module} index={index} />
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
              Stop Managing Fleets via WhatsApp and Excel.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Book a Supply Chain Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LogisticsERP;
