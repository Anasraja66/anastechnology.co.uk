import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Map as MapIcon, PackageOpen, ClipboardList, Truck, Database, 
  ExternalLink, Calculator, Target, LayoutDashboard, ChevronRight, RotateCcw, 
  Search, Menu, MousePointer2, PencilLine, Undo2, Layers, Factory, Users, 
  Wallet, ShieldCheck, Scissors, CheckCircle2, Shield, ArrowRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Leaflet Imports
import { MapContainer, TileLayer, Polyline, Marker, useMapEvents, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Inner Map Component
const MapDrawer = ({ onPerimeterUpdate, onReset, isDrawingMode, mapStyle }: { onPerimeterUpdate: (val: number) => void, onReset: boolean, isDrawingMode: boolean, mapStyle: string }) => {
  const [points, setPoints] = useState<L.LatLng[]>([]);

  useEffect(() => {
    if (onReset) {
      setPoints([]);
      onPerimeterUpdate(0);
    }
  }, [onReset, onPerimeterUpdate]);

  useMapEvents({
    click(e) {
      if (!isDrawingMode) return;
      const newPoints = [...points, e.latlng];
      setPoints(newPoints);
      
      if (newPoints.length > 1) {
        let totalDistance = 0;
        for (let i = 1; i < newPoints.length; i++) {
          totalDistance += newPoints[i - 1].distanceTo(newPoints[i]);
        }
        onPerimeterUpdate(Math.round(totalDistance));
      }
    },
  });

  return (
    <>
      {mapStyle === 'street' ? (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      ) : (
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
          maxZoom={20}
        />
      )}
      {points.length > 0 && <Polyline positions={points} color="#2563eb" weight={5} opacity={0.8} />}
      {points.map((pt, idx) => (
        <Marker key={idx} position={pt} />
      ))}
    </>
  );
};

const FencingERP = () => {
  // Proof of Concept (PoC) State
  const [perimeter, setPerimeter] = useState<number>(0);
  const [distance, setDistance] = useState<number>(10);
  const [resetMap, setResetMap] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(true);
  const [mapStyle, setMapStyle] = useState('street');
  
  // Business Owner Configurable Rates (State)
  const [panelSpacing, setPanelSpacing] = useState<number>(2); // 2 meters per panel
  const [panelCost, setPanelCost] = useState<number>(45); // £ per panel
  const [postCost, setPostCost] = useState<number>(15); // £ per post
  const [concreteCost, setConcreteCost] = useState<number>(8); // £ per bag
  const [laborRatePerMeter, setLaborRatePerMeter] = useState<number>(12); // £ per meter
  const [carriageRatePerMile, setCarriageRatePerMile] = useState<number>(2.5); // £ per mile

  // Calculations
  const panelsNeeded = perimeter > 0 ? Math.ceil(perimeter / panelSpacing) : 0;
  const postsNeeded = perimeter > 0 ? panelsNeeded + 1 : 0;
  const concreteNeeded = postsNeeded; // 1 bag per post

  const materialCost = (panelsNeeded * panelCost) + (postsNeeded * postCost) + (concreteNeeded * concreteCost);
  const laborCost = perimeter * laborRatePerMeter;
  const carriageCost = distance * carriageRatePerMile;
  const totalCost = materialCost + laborCost + carriageCost;

  const handleResetMap = () => {
    setResetMap(true);
    setTimeout(() => setResetMap(false), 100);
  };

  const manufacturingModules = [
    {
      name: 'Operations & Inventory',
      description: 'Live tracking of raw materials, warehouse inventory, and automated low-stock alerts before peak seasons.',
      icon: PackageOpen,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Smart Quoting Engine',
      description: 'Generate accurate branded PDF quotes from interactive maps, complete with markup controls and e-signatures.',
      icon: Calculator,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Labour & Logistics',
      description: 'Drag-and-drop team scheduling, mobile app for fitters, and live fleet GPS routing for deliveries.',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'AI Cutting Optimization',
      description: 'Advanced algorithms calculate the most efficient cutting patterns for timber and steel to minimize waste.',
      icon: Scissors,
      gradient: 'from-pink-500 to-red-500',
    },
    {
      name: 'CRM & Lead Pipeline',
      description: 'Track every customer enquiry from the first call to final installation with visual Kanban sales boards.',
      icon: LayoutDashboard,
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'Invoicing & Accounting',
      description: 'Seamless integration with Xero & QuickBooks. Automatically generate invoices for extra work done on-site.',
      icon: Wallet,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Quality Control (QC)',
      description: 'Digital checklists for the factory floor to ensure every manufactured fence panel meets UK safety standards.',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Fleet Dispatch',
      description: 'Optimize delivery routes for your trucks to save fuel and ensure materials arrive before the installation crew.',
      icon: Truck,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Real-time Analytics',
      description: 'Live dashboards showing profit margins, top-selling fence types, and labor efficiency across your entire business.',
      icon: Database,
      gradient: 'from-indigo-500 to-violet-500',
    }
  ];

  const FencingModuleCard = ({ module, index }: { module: typeof manufacturingModules[0], index: number }) => {
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
                <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Manufacturing & Operations ERP</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Fencing ERP <span className="gradient-text">Platform</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
                A comprehensive A-to-Z Operating System custom-built for UK fencing contractors and manufacturers. Stop quoting manually.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="bg-gradient-primary text-white font-semibold rounded-full px-10 py-4 text-lg btn-neon inline-flex items-center gap-2"
                >
                  Test Interactive Map Estimator
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-emerald-500 rounded-full animate-float-custom opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-custom opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[15%] left-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-float-custom opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-teal-400 rounded-full animate-float-custom opacity-70" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-cyan-500 rounded-full animate-float-custom opacity-30" style={{ animationDelay: '2.5s' }} />
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Interactive PoC Dashboard */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Live Interactive <span className="gradient-text">Map Estimator</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Test our AI-powered visual estimating tool below. Draw a line on the map, and watch the ERP instantly calculate inventory and cost sync.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-foreground/10 shadow-2xl">
              
              {/* TOP MAP SIMULATOR */}
              <div className="lg:col-span-12 mb-4 bg-background/50 p-2 md:p-4 rounded-2xl border border-foreground/5 relative overflow-hidden group">
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs font-semibold text-foreground-muted uppercase tracking-wider">Map Estimator Embed</span>
                  </div>
                </div>

                <div className="w-full h-[500px] rounded-xl border border-primary/20 relative overflow-hidden z-0 bg-white">
                  
                  <div className="absolute top-4 left-4 z-[400] flex bg-white rounded-md shadow-md overflow-hidden w-[300px]">
                    <div className="p-3 text-gray-500 hover:bg-gray-100 cursor-pointer">
                      <Search className="w-4 h-4" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search property address..." 
                      className="flex-1 px-3 py-2 outline-none text-sm text-gray-800"
                    />
                  </div>

                  <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
                    <button 
                      onClick={() => setMapStyle(prev => prev === 'street' ? 'satellite' : 'street')}
                      className="p-3 bg-white hover:bg-gray-50 text-gray-700 rounded-md shadow-md transition-colors flex items-center justify-center group"
                      title="Toggle Map Style"
                    >
                      <Layers className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </button>
                    <button 
                      onClick={() => setIsDrawingMode(!isDrawingMode)}
                      className={`p-3 rounded-md shadow-md transition-colors flex items-center justify-center ${isDrawingMode ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                      title={isDrawingMode ? "Drawing Mode Active" : "Enable Drawing Mode"}
                    >
                      <PencilLine className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleResetMap}
                      className="p-3 bg-white hover:bg-red-50 text-red-500 rounded-md shadow-md transition-colors flex items-center justify-center"
                      title="Clear Drawing"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Leaflet Map Integration */}
                  <MapContainer 
                    center={[51.505, -0.09]} 
                    zoom={18} 
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                  >
                    <ZoomControl position="bottomright" />
                    <MapDrawer 
                      onPerimeterUpdate={setPerimeter} 
                      onReset={resetMap}
                      isDrawingMode={isDrawingMode}
                      mapStyle={mapStyle}
                    />
                  </MapContainer>

                </div>
              </div>

              {/* BOTTOM SPLIT - LEFT SIDE: CONFIG PANEL */}
              <div className="lg:col-span-5 bg-background/50 p-6 rounded-2xl border border-foreground/5 h-full">
                <div className="flex items-center gap-3 border-b border-foreground/10 pb-4 mb-6">
                  <Calculator className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Settings & Config</h3>
                </div>

                <div className="space-y-6">
                  {/* Distance (Carriage) */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground-muted font-medium">Distance from Yard (Miles)</span>
                      <span className="font-mono text-primary font-bold">{distance} mi</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      className="w-full accent-primary h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-foreground-muted">
                      <span>1 mi</span>
                      <span>100 mi</span>
                    </div>
                  </div>
                  
                  {/* Material Rates Config */}
                  <div className="p-4 rounded-xl bg-card border border-foreground/10 space-y-4">
                    <h4 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">Cost Rate Card</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-foreground-muted">Panel Spacing (m)</label>
                        <input 
                          type="number" 
                          value={panelSpacing}
                          onChange={(e) => setPanelSpacing(Number(e.target.value) || 1)}
                          className="w-full bg-background border border-foreground/20 rounded-md px-3 py-1.5 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-foreground-muted">Cost per Panel (£)</label>
                        <input 
                          type="number" 
                          value={panelCost}
                          onChange={(e) => setPanelCost(Number(e.target.value) || 0)}
                          className="w-full bg-background border border-foreground/20 rounded-md px-3 py-1.5 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-foreground-muted">Cost per Post (£)</label>
                        <input 
                          type="number" 
                          value={postCost}
                          onChange={(e) => setPostCost(Number(e.target.value) || 0)}
                          className="w-full bg-background border border-foreground/20 rounded-md px-3 py-1.5 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-foreground-muted">Labour / Meter (£)</label>
                        <input 
                          type="number" 
                          value={laborRatePerMeter}
                          onChange={(e) => setLaborRatePerMeter(Number(e.target.value) || 0)}
                          className="w-full bg-background border border-foreground/20 rounded-md px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM SPLIT - RIGHT SIDE: LIVE RESULTS */}
              <div className="lg:col-span-7 bg-background/50 p-6 rounded-2xl border border-foreground/5 h-full relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-semibold text-lg">Live Output Engine</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    SYNCED TO ERP
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  
                  {/* Bill of Materials (BOM) */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">Generated Bill of Materials</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-card border border-foreground/5">
                        <span className="text-sm font-medium">Map Perimeter Drawn</span>
                        <span className="font-mono font-bold text-primary">{perimeter}m</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-card border border-foreground/5">
                        <span className="text-sm text-foreground-muted">Fence Panels Required</span>
                        <span className="font-mono font-medium">{panelsNeeded}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-card border border-foreground/5">
                        <span className="text-sm text-foreground-muted">Fence Posts Required</span>
                        <span className="font-mono font-medium">{postsNeeded}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-card border border-foreground/5">
                        <span className="text-sm text-foreground-muted">Concrete Bags Required</span>
                        <span className="font-mono font-medium">{concreteNeeded}</span>
                      </div>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">Automated Cost Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm py-1 border-b border-foreground/5">
                        <span className="text-foreground-muted">Total Materials</span>
                        <span className="font-mono">£{materialCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm py-1 border-b border-foreground/5">
                        <span className="text-foreground-muted">Total Labour ({perimeter}m)</span>
                        <span className="font-mono">£{laborCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm py-1 border-b border-foreground/5">
                        <span className="text-foreground-muted">Carriage ({distance}m)</span>
                        <span className="font-mono">£{carriageCost.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Generated Quote Value (Cost)</div>
                      <div className="text-3xl font-display font-bold text-foreground">£{totalCost.toLocaleString()}</div>
                    </div>
                    
                    <button className="w-full mt-4 bg-foreground text-background hover:bg-foreground/90 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Generated PDF Quote
                    </button>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>

          {/* Modules Grid */}
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Custom <span className="gradient-text">Fencing Modules</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build the exact digital infrastructure that top fencing and timber merchants use to scale their operations.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {manufacturingModules.map((module, index) => (
              <FencingModuleCard key={module.name} module={module} index={index} />
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
              Stop running your factory on Excel.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                         rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
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

export default FencingERP;
