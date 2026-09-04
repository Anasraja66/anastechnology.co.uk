import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, HeartPulse, ShieldCheck, Database, Stethoscope, 
  Activity, Users, Video, Pill, CalendarCheck, ArrowRight, Server, RefreshCw
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HealthcareERP = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [patientStatus, setPatientStatus] = useState<'waiting' | 'syncing' | 'triaged'>('waiting');
  
  const handleSimulateEHR = () => {
    setIsSimulating(true);
    setPatientStatus('syncing');
    
    setTimeout(() => {
      setPatientStatus('triaged');
      setIsSimulating(false);
    }, 2500);
  };

  const resetSimulator = () => {
    setPatientStatus('waiting');
  };

  const healthcareModules = [
    {
      name: 'Legacy EHR/EMR Integration',
      description: 'Bridging the gap between outdated hospital systems and modern interfaces. We build custom APIs to safely extract and sync patient data in real-time.',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'HIPAA & GDPR Compliance Core',
      description: 'Medical data security isn\'t optional. We engineer end-to-end encrypted architectures that meet the strictest UK and global healthcare compliance standards.',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'White-Labeled Telemedicine',
      description: 'Launch your own branded telehealth portal with secure WebRTC video consultations, integrated digital prescriptions, and automated billing.',
      icon: Video,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'AI Diagnostics & Triage',
      description: 'Integrate custom Machine Learning models to analyze medical imaging or patient symptoms, assisting doctors in faster, data-driven clinical decisions.',
      icon: Activity,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      name: 'Predictive Staff Rostering',
      description: 'Stop using Excel for hospital shifts. Our ERP uses historical admission data to predict peak hours and automatically generate optimized doctor and nurse rosters.',
      icon: CalendarCheck,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Pharmacy & Asset Inventory',
      description: 'Live tracking of critical medical supplies, medicines, and hospital beds. Automated alerts and supplier re-ordering when stock drops below threshold levels.',
      icon: Pill,
      gradient: 'from-cyan-500 to-blue-500',
    }
  ];

  const HealthcareModuleCard = ({ module, index }: { module: typeof healthcareModules[0], index: number }) => {
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
                <span className="text-sm font-medium text-rose-400 uppercase tracking-wider">Healthcare & MedTech ERP</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Modernizing Healthcare Operations.<br />
                <span className="gradient-text">Without Compromising Compliance.</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                We engineer secure, custom-built medical portals and enterprise operating systems that seamlessly integrate with legacy EHRs, automate patient triage, and streamline hospital resources.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="bg-gradient-primary text-white font-semibold rounded-full px-10 py-4 text-lg btn-neon inline-flex items-center gap-2"
                >
                  Test Automated Workflow
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-500 rounded-full animate-float-custom opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-rose-400 rounded-full animate-float-custom opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-float-custom opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-indigo-400 rounded-full animate-float-custom opacity-70" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-teal-500 rounded-full animate-float-custom opacity-30" style={{ animationDelay: '2.5s' }} />
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Interactive PoC Dashboard - Medical Workflow Simulator */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Live Clinical <span className="gradient-text">Workflow Automation</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Watch how a custom integration extracts patient data from a legacy hospital database, applies AI risk scoring, and triages the patient instantly without manual data entry.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Legacy EHR System (Left Tall Card) */}
                <div className="md:col-span-1 md:row-span-2 p-8 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Server className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Legacy EHR</h3>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="p-5 bg-background/50 rounded-2xl border border-foreground/10">
                        <div className="text-xs text-foreground-muted mb-2 uppercase tracking-wider font-semibold">Patient Input</div>
                        <div className="font-mono text-sm text-foreground mb-1">NHS No: 987-654</div>
                        <div className="font-mono text-sm text-foreground">Symptoms: Chest Pain, SOB</div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={patientStatus === 'triaged' ? resetSimulator : handleSimulateEHR}
                    disabled={isSimulating}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-4 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {patientStatus === 'triaged' ? 'Reset System' : isSimulating ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Run Custom API'}
                  </button>
                </div>

                {/* 2. Custom Triage Portal (Top Right Wide Card) */}
                <div className={`md:col-span-2 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[200px] ${patientStatus === 'triaged' ? 'bg-emerald-500/10 border-emerald-500/30' : patientStatus === 'syncing' ? 'bg-blue-500/10 border-blue-500/30' : 'bg-card/60 backdrop-blur-xl border-foreground/10'}`}>
                  
                  {patientStatus === 'triaged' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl" />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${patientStatus === 'triaged' ? 'bg-emerald-500/20' : 'bg-background border border-foreground/10'}`}>
                        <HeartPulse className={`w-8 h-8 ${patientStatus === 'triaged' ? 'text-emerald-500' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-1">Anas Tech Triage Engine</h3>
                        <p className="text-foreground-muted text-sm">Real-time processing via secure HL7/FHIR API</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${patientStatus === 'triaged' ? 'bg-emerald-500/20 text-emerald-500' : patientStatus === 'syncing' ? 'bg-blue-500/20 text-blue-500' : 'bg-foreground/5 text-foreground-muted'}`}>
                      {patientStatus === 'syncing' ? <Activity className="w-4 h-4 animate-pulse" /> : <ShieldCheck className="w-4 h-4" />}
                      {patientStatus === 'triaged' ? 'Processed in 1.2s' : patientStatus === 'syncing' ? 'Syncing...' : 'Awaiting Input'}
                    </div>
                  </div>
                </div>

                {/* 3. AI Risk Score (Bottom Right Small Card 1) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${patientStatus === 'triaged' ? 'border-red-500/30 bg-red-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">AI Risk Score</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${patientStatus === 'triaged' ? 'text-red-500' : 'text-foreground/20'}`}>
                      {patientStatus === 'waiting' ? '--' : patientStatus === 'syncing' ? '...' : 'CRITICAL'}
                    </span>
                  </div>
                  {patientStatus === 'triaged' && <p className="text-red-400 text-sm mt-2">Level 1 Emergency</p>}
                </div>

                {/* 4. Auto-Assigned Ward (Bottom Right Small Card 2) */}
                <div className={`md:col-span-1 p-6 rounded-3xl border transition-all duration-500 bg-card/60 backdrop-blur-xl border-foreground/10 flex flex-col justify-center ${patientStatus === 'triaged' ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}>
                  <h4 className="text-sm font-medium text-foreground-muted mb-4 uppercase tracking-wider">Assigned Ward</h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${patientStatus === 'triaged' ? 'text-emerald-500' : 'text-foreground/20'}`}>
                      {patientStatus === 'waiting' ? 'Pending' : patientStatus === 'syncing' ? '...' : 'Cardiology'}
                    </span>
                  </div>
                  {patientStatus === 'triaged' && <p className="text-emerald-400 text-sm mt-2">Bed 04 - Ready</p>}
                </div>

              </div>
            </div>
          </div>

          {/* Enterprise Capabilities */}
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Custom <span className="gradient-text">MedTech Solutions</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build the secure software infrastructure that clinics, hospitals, and telehealth startups need to deliver better care.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24" style={{ perspective: '1000px' }}>
            {healthcareModules.map((module, index) => (
              <HealthcareModuleCard key={module.name} module={module} index={index} />
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
              Is Your Clinical Software Outdated?
            </h2>
            <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
              Stop relying on paper trails, manual data entry, and software that doesn't talk to each other. Let's build a unified, compliant Medical ERP.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              Book a MedTech Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HealthcareERP;
