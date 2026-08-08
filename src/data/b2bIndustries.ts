import { 
  Factory, 
  CreditCard, 
  Heart, 
  Truck, 
  ShoppingCart, 
  Zap,
  LucideIcon
} from 'lucide-react';

import mfgBg from '@/assets/industries/mfg_bg.jpg';
import fintechBg from '@/assets/industries/fintech_bg.jpg';
import healthBg from '@/assets/industries/healthcare_bg.jpg';
import logisticsBg from '@/assets/industries/logistics_bg.jpg';
import retailBg from '@/assets/industries/retail_bg.jpg';
import energyBg from '@/assets/industries/energy_bg.jpg';

export interface B2BIndustry {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  bgImage: string;
  accentColor: string;
  challenge: string;
  solution: string;
  features: string[];
  keywords: string[];
}

export const b2bIndustries: B2BIndustry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & CPG',
    icon: Factory,
    tagline: 'Industry 4.0 Automation',
    bgImage: mfgBg,
    accentColor: 'from-cyan-500 to-blue-600',
    challenge: 'Factory floors in the UK, USA, and UAE suffer from disconnected legacy ERPs (SAP, Oracle), manual RFQ parsing that delays quoting by days, and fragmented supply chains causing severe blind spots.',
    solution: 'Anas Technology builds custom AI workflows that instantly parse RFQs, deploy real-time IoT tracking on the factory floor, and seamlessly unify legacy ERPs. We turn your manufacturing bottleneck into a scalable, automated powerhouse.',
    features: ['AI-Driven RFQ Parsing', 'IoT Factory Floor Tracking', 'Legacy ERP Integration (SAP/Oracle)', 'Predictive Maintenance AI'],
    keywords: ['#Industry40', '#SmartFactory', '#CustomERP']
  },
  {
    id: 'fintech',
    name: 'Fintech & Banking',
    icon: CreditCard,
    tagline: 'Secure Financial Systems',
    bgImage: fintechBg,
    accentColor: 'from-emerald-500 to-teal-600',
    challenge: 'Financial institutions struggle with slow, manual KYC/AML compliance, fragmented payment routing, and legacy core banking systems that are impossible to scale globally.',
    solution: 'We engineer highly reliable, custom financial software that automates compliance, integrates Open Banking APIs, and processes transactions securely. We build fintech platforms designed for global scalability.',
    features: ['Automated KYC/AML Compliance', 'Secure Payment Routing', 'Open Banking API Integration', 'Fraud Detection Algorithms'],
    keywords: ['#Fintech', '#OpenBanking', '#RegTech']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    icon: Heart,
    tagline: 'HIPAA-Compliant Solutions',
    bgImage: healthBg,
    accentColor: 'from-rose-500 to-pink-600',
    challenge: 'Healthcare providers face crippling administrative overhead, siloed EHR systems that prevent unified patient views, and strict compliance barriers across borders.',
    solution: 'Anas Technology delivers custom, HIPAA-compliant telemedicine platforms and AI-driven diagnostic tools. Our software bridges disconnected EHR systems to empower providers with real-time, unified patient data.',
    features: ['EHR/EMR System Unification', 'HIPAA-Compliant Telemedicine', 'AI Medical Diagnostics', 'Automated Patient Scheduling'],
    keywords: ['#MedTech', '#HealthIT', '#EHR']
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    tagline: 'Global Route Optimization',
    bgImage: logisticsBg,
    accentColor: 'from-orange-500 to-amber-600',
    challenge: 'Global supply chains are paralyzed by unpredictable transit times, manual customs documentation, and inefficient warehouse routing, leading to massive margin loss.',
    solution: 'Our custom software provides complete visibility. We build AI systems that optimize shipping routes, automate customs processing, and integrate with autonomous warehouse robotics.',
    features: ['Predictive Route Optimization', 'Automated Customs Processing', 'Real-time Cargo Tracking', 'WMS & Robotics Integration'],
    keywords: ['#SupplyChain', '#LogisticsTech', '#WMS']
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    tagline: 'Omnichannel Commerce',
    bgImage: retailBg,
    accentColor: 'from-purple-500 to-fuchsia-600',
    challenge: 'Retailers lose customers due to generic shopping experiences, disconnected online/offline inventory, and slow checkout processes unable to handle peak traffic.',
    solution: 'We engineer highly scalable, custom e-commerce architectures. From AI-powered personalization engines to real-time unified inventory tracking, we build systems that drive conversion and scale globally.',
    features: ['AI Personalization Engines', 'Unified Omnichannel Inventory', 'High-Load Checkout Architecture', 'Demand Forecasting AI'],
    keywords: ['#RetailTech', '#Ecommerce', '#Omnichannel']
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    icon: Zap,
    tagline: 'Smart Grid Management',
    bgImage: energyBg,
    accentColor: 'from-yellow-400 to-amber-500',
    challenge: 'Utility companies are challenged by aging grids, inefficient energy distribution, and the complex integration of renewable energy sources.',
    solution: 'Anas Technology builds smart grid management software that uses predictive analytics to balance loads, monitor infrastructure health, and integrate renewable sources efficiently.',
    features: ['Smart Grid Load Balancing', 'Predictive Infrastructure Maintenance', 'Renewable Integration Analytics', 'Real-time Outage Detection'],
    keywords: ['#SmartGrid', '#EnergyTech', '#Renewables']
  }
];
