import { Link } from 'react-router-dom'
import { 
  TrendingUp, BookOpen, FlaskConical, BarChart3, 
  ArrowRight, Zap, Shield, Target, Brain, ChevronRight,
  Activity, CheckCircle2, XCircle, BarChart, GraduationCap, Crosshair,
  Check, ShieldCheck, Sparkles, Lock, ShieldAlert,
  Clock, Compass, ListTodo, LineChart, Calendar, Flame, RotateCcw
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useUser } from '../context/UserContext'

export default function Landing() {
  const [annual, setAnnual] = useState(false)
  const { isAuthenticated, login } = useUser()

  return (
    <div className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-0 lg:min-h-[95vh] flex flex-col justify-start lg:justify-center pt-16 lg:pt-32 pb-12 md:pb-24 overflow-hidden bg-[#0a110e]">
        {/* Deep Green Glow Effect from top right */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#10b981]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        
        {/* Background Particles/Stars (simulated with CSS or small divs) */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
           <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full blur-[1px]" />
           <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-[#10b981] rounded-full blur-[2px]" />
           <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full blur-[1px]" />
           <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#10b981] rounded-full blur-[3px]" />
        </div>

        <div className="page-container relative z-10 w-full flex-grow flex flex-col justify-start lg:justify-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-4 lg:mt-12">
            
            {/* Left Column: Text & CTAs */}
            <div className="max-w-2xl animate-slide-up px-4 md:px-0 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-medium mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c4-3 9-5 9-10 0-4-3-8-9-10-6 2-9 6-9 10 0 5 5 7 9 10z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M12 18V8" />
                  <path d="M8 12l4-4 4 4" />
                </svg>
                THE OPERATING SYSTEM FOR TRADERS
              </div>

              <h1 className="text-2xl md:text-6xl lg:text-[76px] font-black text-white leading-[1.05] mb-6 tracking-tight font-sans">
                Trade Smarter with AI
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-10">
              Find your edge, Build Confidence and let AI fix your leaks.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                <button className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-[#0a110e] font-bold text-sm shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-xl border border-gray-600 bg-black/20 text-white font-medium text-sm hover:bg-black/40 hover:border-gray-500 transition-all flex items-center gap-2">
                  See Our Services
                </button>
              </div>
            </div>

            {/* Right Column: Graphic Nodes */}
            <div className="relative h-[500px] hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              
                {/* SVG Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Lines to Top Hexagon */}
                  <path d="M 120 250 C 200 250, 250 120, 350 120 L 400 120" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                  <path d="M 120 240 C 200 240, 240 110, 350 110 L 400 110" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  <path d="M 120 260 C 200 260, 260 130, 350 130 L 400 130" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  
                  {/* Lines to Middle Widget */}
                  <path d="M 120 250 L 320 250" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                  <path d="M 120 240 L 320 240" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  <path d="M 120 260 L 320 260" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  
                  {/* Lines to Bottom Hexagon */}
                  <path d="M 120 250 C 200 250, 250 420, 350 420 L 400 420" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                  <path d="M 120 240 C 200 240, 240 410, 350 410 L 400 410" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  <path d="M 120 260 C 200 260, 260 430, 350 430 L 400 430" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                  
                  {/* Node dots on lines */}
                  <circle cx="320" cy="250" r="3" fill="#5eead4" />
                  <circle cx="400" cy="120" r="3" fill="#5eead4" />
                  <circle cx="400" cy="420" r="3" fill="#5eead4" />
                  <circle cx="320" cy="240" r="2" fill="#10b981" className="opacity-50" />
                  <circle cx="320" cy="260" r="2" fill="#10b981" className="opacity-50" />
                  <circle cx="400" cy="110" r="2" fill="#10b981" className="opacity-50" />
                  <circle cx="400" cy="130" r="2" fill="#10b981" className="opacity-50" />
                  <circle cx="400" cy="410" r="2" fill="#10b981" className="opacity-50" />
                  <circle cx="400" cy="430" r="2" fill="#10b981" className="opacity-50" />
                </svg>

                {/* Central Hexagon */}
                <div className="absolute top-1/2 left-[120px] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-32 h-36 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#047857] shadow-[0_0_50px_rgba(16,185,129,0.5)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="absolute inset-[2px] bg-[#142921]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="absolute inset-[4px] bg-gradient-to-br from-[#10b981] to-[#047857]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="relative z-10 flex flex-col items-center justify-center -translate-y-1">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1 text-[#5eead4]">
                        <path d="M12 22c4-3 9-5 9-10 0-4-3-8-9-10-6 2-9 6-9 10 0 5 5 7 9 10z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M12 18V8" />
                        <path d="M8 12l4-4 4 4" />
                      </svg>
                      <span className="text-white text-[11px] font-bold tracking-wider">HawkTrade</span>
                    </div>
                  </div>
                </div>

                {/* Top Hexagon (Technical Analysis / Candlesticks) */}
                <div className="absolute top-[120px] left-[400px] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-20 h-24 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                    <div className="absolute inset-0 bg-[#1f2d26] border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-[#10b981]/80 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="absolute inset-[1px] bg-[#14201a]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <svg className="w-8 h-8 text-gray-300 relative z-10 group-hover:text-[#5eead4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10h4v6H3z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M5 6v4M5 16v2" />
                      <path d="M10 5h4v11h-4z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M12 2v3M12 16v6" />
                      <path d="M17 12h4v5h-4z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M19 9v3M19 17v3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Hexagon (Global Markets / Forex Macro) */}
                <div className="absolute top-[420px] left-[400px] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-20 h-24 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                    <div className="absolute inset-0 bg-[#1f2d26] border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-[#10b981]/80 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="absolute inset-[1px] bg-[#14201a]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <svg className="w-8 h-8 text-gray-300 relative z-10 group-hover:text-[#5eead4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                </div>

                {/* Trading Widget */}
                <div className="absolute top-[250px] left-[450px] -translate-y-1/2 w-[280px] p-[1px] rounded-[20px] bg-gradient-to-b from-[#10b981]/50 to-[#10b981]/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] z-20">
                  <div className="w-full h-full bg-[#111e17]/95 backdrop-blur-xl rounded-[19px] p-4">
                    <div className="space-y-4">
                      {/* Sell Section */}
                      <div className="bg-[#192b22] rounded-xl p-3.5 border border-[#10b981]/20 shadow-inner">
                        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                          <span className="font-medium text-gray-300">Sell</span>
                          <span className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded border border-white/5">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6a6 6 0 0 0-12 0v12a6 6 0 0 0 12 0" />
                              <path d="M4 10h10" />
                              <path d="M4 14h10" />
                            </svg>
                            EUR <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-2xl font-black text-white">1,500</span>
                          <span className="text-[11px] text-gray-500 font-medium">Available: 3,200 USD</span>
                        </div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-b from-[#5eead4] to-[#10b981] flex items-center justify-center border-4 border-[#111e17] shadow-[0_0_15px_rgba(16,185,129,0.4)] z-30">
                        <svg className="w-4 h-4 text-[#0a110e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>

                      {/* Buy Section */}
                      <div className="bg-[#192b22] rounded-xl p-3.5 border border-[#10b981]/20 shadow-inner">
                        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                          <span className="font-medium text-gray-300">Buy</span>
                          <span className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded border border-white/5">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#fbbf24]" fill="currentColor">
                              <path d="M2 20h20v2H2z" opacity="0.3" />
                              <path d="M5 14h14l-2 5H7z" opacity="0.6" />
                              <path d="M8 8h8l-2 5H10z" />
                            </svg>
                            GOLD <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-2xl font-black text-white">2,354.80</span>
                          <span className="text-[11px] text-gray-500 font-medium">Estimated Fee: 1.5 USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials, Cookie, Scroll */}
        <div className="page-container relative z-20 w-full mt-12 mb-4 flex flex-col lg:flex-row items-center justify-between gap-6 shrink-0">
          
          {/* Socials */}
          <div className="flex items-center gap-3 self-start lg:self-center mt-8 lg:mt-0">
            <span className="text-xs text-gray-400 font-medium mr-2">Follow Us</span>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

          {/* Cookie Banner */}
          <div className="flex-1 max-w-xl bg-[#0b1310] border border-[#10b981]/20 rounded-[20px] p-2 pl-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 leading-tight md:text-lg">
                This website uses cookies to enhance your browsing experience, analyze<br className="hidden md:block" />
                traffic, and improve our services.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0 pr-1">
              <button className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300 text-xs font-medium hover:bg-white/5 transition-colors">
                Decline
              </button>
              <button className="px-5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-gray-200 shadow-md transition-colors">
                Accept
              </button>
            </div>
          </div>

          {/* Scroll */}
          <div className="flex items-center gap-3 text-gray-400 text-xs font-medium cursor-pointer hover:text-white transition-colors group self-end lg:self-center">
            Scroll to explore
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors bg-white/5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

        </div>
      </section>
{/* ================= THE PROBLEM VS SOLUTION ================= */}
      <section className="py-16 md:py-24 border-y border-hawk-border bg-hawk-surface/30">
        <div className="page-container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Stop guessing. <span className="text-hawk-green">Start knowing.</span></h2>
            <p className="text-hawk-text-secondary max-w-2xl mx-auto text-sm md:text-base">Trading without an intentional system is gambling. HawkTrade replaces messy spreadsheets with a structured workflow to build a repeatable trading edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-0">
            {/* The Old Way */}
            <div className="glass p-5 sm:p-8 rounded-2xl border-hawk-red/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-hawk-red/50" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-hawk-red/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-hawk-red" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manual Excel data entry causing friction",
                  "No visual representations of your performance",
                  "Repeating the same emotional mistakes blindly",
                  "Cannot pinpoint exactly which strategy is profitable"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-hawk-text-secondary">
                    <span className="text-hawk-red mt-1 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The HawkTrade Way */}
            <div className="glass p-5 sm:p-8 rounded-2xl border-hawk-green/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-hawk-green" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-hawk-green/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-hawk-green" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">The HawkTrade Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated sync with your favorite brokers",
                  "Deep analytics, heatmaps, and interactive charts",
                  "AI detects your psychological leaks automatically",
                  "Tag setups and find your objective statistical edge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white">
                    <span className="text-hawk-green mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE TRADING OPERATING SYSTEM (JOURNEY MAP) ================= */}
      <section className="py-16 md:py-24 bg-hawk-bg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="page-container px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hawk-green/20 bg-hawk-green/5 text-hawk-green text-xs font-semibold mb-4 uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3 animate-spin" /> More than a journal
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              A Complete <span className="gradient-text">Trading Operating System</span>
            </h2>
            <p className="text-hawk-text-secondary max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Trading isn't where the journey starts or ends. Success is built on a repeatable, intentional framework that spans preparation, execution, review, and optimization.
            </p>
          </div>

          {/* 4-Stage Visual Journey Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20 relative z-10">
            {[
              {
                stage: "01",
                title: "Before the Market",
                subtitle: "Preparation & Bias",
                color: "from-hawk-blue/20 to-hawk-blue/5 border-hawk-blue/25 hover:border-hawk-blue/50",
                glow: "bg-hawk-blue/10",
                icon: <Compass className="w-6 h-6 text-hawk-blue animate-pulse" />,
                tagline: "Build macro clarity before taking risk.",
                items: ["AI Briefing", "Macro Bias Builder", "Economic Calendar", "Daily Objectives", "Preparation Checklist"]
              },
              {
                stage: "02",
                title: "During the Market",
                subtitle: "Execution & Risk",
                color: "from-hawk-green/20 to-hawk-green/5 border-hawk-green/25 hover:border-hawk-green/50",
                glow: "bg-hawk-green/10",
                icon: <Clock className="w-6 h-6 text-hawk-green" />,
                tagline: "Protect your capital during active sessions.",
                items: ["Real-time Watchlist", "Intraday Trade Plan", "Dynamic Risk Calculator", "Session Focus Timer", "Custom Price Alerts"]
              },
              {
                stage: "03",
                title: "After the Trade",
                subtitle: "Review & Psychology",
                color: "from-hawk-amber/20 to-hawk-amber/5 border-hawk-amber/25 hover:border-hawk-amber/50",
                glow: "bg-hawk-amber/10",
                icon: <Brain className="w-6 h-6 text-hawk-amber animate-bounce" style={{ animationDuration: '3s' }} />,
                tagline: "Capture mental states and grade execution.",
                items: ["Automated Journaling", "AI Trade Review", "Psychology & Emotion Tags", "Rule Adherence Score", "Drawdown Buffers"]
              },
              {
                stage: "04",
                title: "End of Day",
                subtitle: "Refinement & Focus",
                color: "from-hawk-purple/20 to-hawk-purple/5 border-hawk-purple/25 hover:border-hawk-purple/50",
                glow: "bg-hawk-purple/10",
                icon: <RotateCcw className="w-6 h-6 text-hawk-purple" />,
                tagline: "Turn performance metrics into direct lessons.",
                items: ["Daily Performance Review", "AI Lesson Recommendation", "Backtesting Assignments", "Tomorrow's Core Focus", "Edge Optimization"]
              }
            ].map((phase, i) => (
              <div key={i} className={`glass bg-gradient-to-b ${phase.color} p-6 rounded-2xl flex flex-col justify-between border card-hover relative transition-all duration-300`}>
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-[30px] opacity-20 pointer-events-none ${phase.glow}`} />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                      {phase.icon}
                    </div>
                    <span className="text-4xl font-black text-white/10 tracking-tight select-none">{phase.stage}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                  <p className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-3">{phase.subtitle}</p>
                  <p className="text-xs text-hawk-text-secondary leading-relaxed mb-6 border-b border-hawk-border/50 pb-4">{phase.tagline}</p>
                  
                  <ul className="space-y-2.5">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/95">
                        <Check className="w-3.5 h-3.5 text-hawk-green shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Core Intentional Framework / AI Coach Edge */}
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-hawk-surface/30 border border-hawk-border/80 rounded-3xl p-6 md:p-12 relative overflow-hidden max-w-6xl mx-auto shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hawk-green/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Column: Mock AI Feedback Dashboard */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-hawk-green/30 to-hawk-border shadow-xl">
                <div className="bg-[#0b120f] rounded-[15px] p-5">
                  <div className="flex items-center gap-3 mb-5 border-b border-hawk-border/50 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-hawk-green/10 flex items-center justify-center border border-hawk-green/20">
                      <Brain className="w-5 h-5 text-hawk-green" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Hawk AI Playbook Coach</h4>
                      <span className="text-[10px] text-hawk-green font-semibold tracking-wider uppercase">Edge Optimization</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Active Edge Analysis */}
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">Silver Bullet (NY Open)</span>
                        <span className="text-[10px] font-bold text-hawk-green bg-hawk-green/10 px-2 py-0.5 rounded">A+ EDGE</span>
                      </div>
                      <p className="text-[11px] text-hawk-text-secondary">
                        Win Rate: <strong className="text-white">74%</strong> | Profit Factor: <strong className="text-white">3.1</strong> | 24 Trades analyzed.
                      </p>
                    </div>

                    {/* Prescribed Refinement Advice */}
                    <div className="p-3.5 bg-hawk-green/5 border border-hawk-green/10 rounded-xl">
                      <h5 className="text-[11px] font-bold text-hawk-green mb-1 flex items-center gap-1.5">
                        <LineChart className="w-3.5 h-3.5 animate-pulse" /> Prescribed Edge Optimization
                      </h5>
                      <p className="text-[11px] text-hawk-text-secondary leading-relaxed">
                        Data shows a confidence score of 98% when entering on the first 5m displacement. Adjusting your stop loss to the swing low rather than the displacement bar increases return expectation by <strong className="text-white">+0.4R per trade</strong>.
                      </p>
                    </div>

                    {/* Backtest Session Integration */}
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-hawk-purple" />
                        <span className="text-[11px] font-bold text-white">Assign Backtesting Module</span>
                      </div>
                      <span className="text-[10px] font-semibold text-hawk-purple hover:text-purple-400 cursor-pointer flex items-center gap-0.5">
                        Run 30 reps <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy detailing Intentional framework & confidence */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-hawk-green mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Professional Framework
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
                Build an intentional, repeatable system backed by solid data
              </h3>
              <p className="text-sm md:text-base text-hawk-text-secondary leading-relaxed mb-8">
                Losing accounts aren't always a result of bad strategies; they are caused by bad habits and lack of objective proof. HawkTrade's Operating System helps you log detailed metadata automatically, run statistical diagnostics, and practice adjustments in a low-risk simulator.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Journal with Purpose",
                    text: "No more bare-bones logs. Record entry patterns, session times, news factors, and emotional states to build a solid data library."
                  },
                  {
                    title: "Refine Your Edge",
                    text: "Let the AI Coach analyze your data to extract statistical proof of what is working, helping you dump unprofitable setups."
                  },
                  {
                    title: "Practice with Certainty",
                    text: "Run backtesting assignments suggested by the AI Coach. Refine your execution before applying real capital."
                  },
                  {
                    title: "Build Genuine Confidence",
                    text: "True trading confidence comes from seeing your setup's probability play out over hundreds of historical iterations."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h4 className="font-bold text-sm text-white mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-hawk-green shrink-0" />
                      {feature.title}
                    </h4>
                    <p className="text-xs text-hawk-text-muted leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENTO BOX FEATURES ================= */}
      <section className="py-16 md:py-28">
        <div className="page-container px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <div className="badge badge-blue mx-auto mb-4">
              <Target className="w-3 h-3" />
              Platform Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything to refine and support your <span className="gradient-text">daily workflow</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Box 1: Auto Sync (Spans 1) */}
            <div className="glass p-5 sm:p-8 rounded-2xl card-hover md:col-span-1 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-hawk-green/10 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-hawk-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Sync Journals</h3>
              <p className="text-hawk-text-secondary text-sm flex-grow">
                Connect your MT4, MT5, or MatchTrader accounts via API. Trades are imported and organized instantly without manual logging.
              </p>
              <div className="mt-8 pt-6 border-t border-hawk-border flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-hawk-surface-2 rounded text-hawk-text-muted">MT4</span>
                <span className="text-xs px-2 py-1 bg-hawk-surface-2 rounded text-hawk-text-muted">MT5</span>
                <span className="text-xs px-2 py-1 bg-hawk-surface-2 rounded text-hawk-text-muted">MatchTrader</span>
              </div>
            </div>

            {/* Box 2: Deep Analytics (Spans 2) */}
            <div className="glass p-5 sm:p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-1 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-hawk-green/10 flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-hawk-green" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Deep Performance Analytics</h3>
                <p className="text-hawk-text-secondary mb-6 text-sm md:text-base">
                  Track your Profit Factor, Win Rate, Expectancy, and Average Risk-to-Reward. Slice your data by time of day, day of week, or custom strategy tags.
                </p>
                <Link to="/journal" className="text-hawk-green text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Analytics Dashboard <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full relative z-10">
                <div className="bg-hawk-surface-2 rounded-xl p-4 border border-hawk-border">
                  <div className="flex justify-between text-xs text-hawk-text-muted mb-4">
                    <span>Profit Factor</span>
                    <span className="text-hawk-green font-bold">2.4</span>
                  </div>
                  <div className="flex justify-between text-xs text-hawk-text-muted mb-4">
                    <span>Win Rate</span>
                    <span className="text-white font-bold">58%</span>
                  </div>
                  <div className="flex justify-between text-xs text-hawk-text-muted">
                    <span>Avg RR</span>
                    <span className="text-white font-bold">1:2.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Backtest Simulator (Spans 2) */}
            <div className="glass p-5 sm:p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-hawk-green/10 flex items-center justify-center mb-6 relative z-10">
                <FlaskConical className="w-6 h-6 text-hawk-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Tick-by-Tick Simulator</h3>
              <p className="text-hawk-text-secondary max-w-md relative z-10 text-sm md:text-base">
                Don't risk live capital testing a new strategy. Replay historical charts, execute trades, and measure results exactly as if the market was live.
              </p>
              
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-1/2 h-full">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-hawk-green">
                  <path d="M0,100 L0,50 L20,30 L40,60 L60,20 L80,40 L100,10 L100,100 Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Box 4: Trade Management (Spans 1) */}
            <div className="glass p-5 sm:p-8 rounded-2xl card-hover md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-hawk-green/10 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6 text-hawk-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Setup Playbooks</h3>
              <p className="text-hawk-text-secondary text-sm">
                Create custom tags for your A+ setups (e.g., "Silver Bullet", "FVG Retest"). Filter your journal to see exactly which setups print money.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BUILT BY TRADERS (TRUST BUILDER) ================= */}
      <section className="py-16 md:py-20 border-y border-hawk-border bg-gradient-to-b from-hawk-surface to-[#062c1e]/40 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative z-10 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built by traders, <span className="text-hawk-green">for traders.</span></h2>
            <p className="text-hawk-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              We started HawkTrade because we were tired of losing money to emotional mistakes that standard spreadsheets couldn't fix. We needed a tool that didn't just log numbers, but actually helped us understand our psychology and refine our edge.
            </p>
            <div className="inline-flex items-center gap-3 bg-hawk-green/10 border border-hawk-green/20 rounded-full px-6 py-2.5">
              <ShieldAlert className="w-4 h-4 text-hawk-green" />
              <span className="text-xs md:text-sm font-semibold text-hawk-green uppercase tracking-wide">Over 2.5 million trades analyzed across our platform.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-16 md:py-24 bg-hawk-surface/20 overflow-hidden">
        <div className="page-container px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traders love <span className="gradient-text">HawkTrade</span></h2>
            <p className="text-hawk-text-secondary text-sm md:text-base">Join thousands of funded traders who found their edge.</p>
          </div>

          <div className="flex flex-row overflow-x-auto gap-6 pb-6 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-3 scrollbar-thin scrollbar-thumb-hawk-border/80 scrollbar-track-transparent">
            {[
              {
                name: "Alex R.",
                role: "Funded Trader",
                text: "The AI integration is insane. It literally told me to stop trading Gold because my win rate was 20% on it. I stuck to EU and passed my 100k challenge next week.",
                img: "11"
              },
              {
                name: "Sarah M.",
                role: "Beginner",
                text: "I loved the Academy integration. Whenever I log a bad trade, it links me directly to the exact video lesson I need to review. It's like having a mentor.",
                img: "12"
              },
              {
                name: "David K.",
                role: "Full-Time Trader",
                text: "I used to use Excel, then tried other journals. HawkTrade is by far the cleanest UI, and the tick-by-tick backtesting feature alone is worth its weight in gold.",
                img: "13"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col justify-between card-hover transition-all duration-300 snap-center shrink-0 w-[290px] sm:w-[350px] md:w-auto md:shrink">
                <p className="text-sm md:text-base text-hawk-text-secondary leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/100?img=${testimonial.img}`} alt={testimonial.name} className="w-10 h-10 rounded-full border border-hawk-border" />
                  <div>
                    <p className="font-bold text-sm text-white">{testimonial.name}</p>
                    <p className="text-xs text-hawk-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-16 md:py-24 border-t border-hawk-border bg-hawk-bg relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="page-container px-4 md:px-0 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-hawk-text-secondary max-w-xl mx-auto mb-8">
              Unlock the ultimate edge with advanced AI analytics and automated prop firm tracking.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 bg-hawk-surface-2/50 backdrop-blur p-2 rounded-full border border-hawk-border inline-flex mx-auto">
              <button 
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${!annual ? 'bg-hawk-surface border border-hawk-border text-white shadow-lg' : 'text-hawk-text-muted hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${annual ? 'bg-hawk-surface border border-hawk-border text-white shadow-lg' : 'text-hawk-text-muted hover:text-white'}`}
              >
                Annually <span className="badge badge-green text-[10px] px-1.5 py-0.5 hidden sm:inline-block">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row overflow-x-auto gap-6 pb-6 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto scrollbar-thin scrollbar-thumb-hawk-border/80 scrollbar-track-transparent">
            {/* Essential */}
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-border relative mt-4 md:mt-8 hover:border-hawk-green/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.05)] transition-all duration-300 snap-center shrink-0 w-[280px] sm:w-[320px] md:w-auto md:shrink">
              <h3 className="text-xl font-bold mb-2 text-white">Essential</h3>
              <p className="text-hawk-text-secondary text-xs md:text-sm mb-6 h-10">Everything you need to start tracking.</p>
              <div className="mb-6 h-[52px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${annual ? '15' : '19'}</span>
                  <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
                </div>
              </div>
              <Link to="/journal" className="w-full">
                <button className="btn-secondary w-full mb-8 py-3">Get Started</button>
              </Link>
              <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
                {['Automated Journaling', 'AI Performance Analytics', '5 Active Accounts'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-hawk-surface-2 flex items-center justify-center shrink-0 border border-hawk-border">
                      <Check className="w-3 h-3 text-hawk-text-muted" />
                    </div>
                    <span className="text-hawk-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro */}
            <div className="glass-strong rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-green relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-300 z-20 overflow-hidden snap-center shrink-0 w-[280px] sm:w-[320px] md:w-auto md:shrink">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hawk-green to-transparent animate-[draw-line_3s_linear_infinite]" />
              <div className="absolute top-0 right-0 bg-hawk-green text-black text-[10px] font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                Pro <Zap className="w-5 h-5 text-hawk-green fill-hawk-green/20" />
              </h3>
              <p className="text-hawk-text-secondary text-xs md:text-sm mb-6 h-10">Advanced analytics for serious traders.</p>
              <div className="mb-6 h-[52px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">${annual ? '29' : '35'}</span>
                  <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
                </div>
              </div>
              <Link to="/journal" className="w-full">
                <button className="btn-primary w-full mb-8 py-3 shadow-lg shadow-hawk-green/20 text-base">
                  Start Pro Trial
                </button>
              </Link>
              <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
                <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider mb-2">Everything in Essential, plus:</p>
                {['Unlimited Active Accounts', 'Trade Replay Simulator', 'Advanced AI Insights'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-hawk-green/20 flex items-center justify-center shrink-0 border border-hawk-green/30">
                      <Check className="w-3 h-3 text-hawk-green" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elite */}
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-purple/50 relative hover:border-hawk-purple hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-300 mt-4 md:mt-8 shadow-[0_0_30px_rgba(168,85,247,0.05)] snap-center shrink-0 w-[280px] sm:w-[320px] md:w-auto md:shrink">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                Elite <ShieldCheck className="w-5 h-5 text-hawk-purple" />
              </h3>
              <p className="text-hawk-text-secondary text-xs md:text-sm mb-6 h-10">The ultimate suite featuring Prop Firm tracking.</p>
              <div className="mb-6 h-[52px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${annual ? '39' : '49'}</span>
                  <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
                </div>
              </div>
              <Link to="/journal" className="w-full">
                <button className="btn-secondary w-full mb-8 py-3 hover:border-hawk-purple/50 hover:text-white transition-colors bg-hawk-purple/5">
                  Start Elite Trial
                </button>
              </Link>
              <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
                <p className="text-[10px] md:text-xs font-bold text-hawk-purple uppercase tracking-wider mb-2">Everything in Pro, plus:</p>
                {['Prop Firm Drawdown Monitor', 'AI Risk Guard', 'Custom Metric Builder'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-hawk-purple/20 flex items-center justify-center shrink-0 border border-hawk-purple/30">
                      <Check className="w-3 h-3 text-hawk-purple" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA & SECURITY ================= */}
      <section className="py-16 md:py-28">
        <div className="page-container px-4 md:px-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hawk-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-hawk-green/20 to-hawk-blue/20" />
            <div className="absolute inset-0 bg-hawk-surface/90 backdrop-blur-xl" />
            <div className="relative p-8 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to find your <span className="gradient-text">Edge</span>?
              </h2>
              <p className="text-hawk-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10">
                Stop jumping between spreadsheets, course videos, and isolated tools. Adopt the complete, intentional operating system built for professional traders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {isAuthenticated ? (
                  <Link to="/journal" className="w-full sm:w-auto">
                    <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      Go to Dashboard <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                ) : (
                  <button onClick={login} className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    Create Free Account <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Security Trust Badges */}
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-hawk-text-muted border-t border-hawk-border/50 pt-8">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-hawk-green" />
                  <span>Bank-level 256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-hawk-blue" />
                  <span>Your data is strictly private & secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSPIRATIONAL BANNER (BEFORE FOOTER) ================= */}
      <section className="py-20 md:py-28 border-t border-hawk-border bg-hawk-bg relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="page-container px-4 md:px-0 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight font-sans leading-tight">
              Become the Trader You <br className="hidden sm:block" /> Know You Can Be.
            </h2>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light mb-6">
              Professional traders aren't built by finding better indicators.
            </p>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed font-light mb-10">
              They're built through <span className="text-[#5eead4] font-semibold">deliberate practice</span>, <span className="text-[#5eead4] font-semibold">disciplined execution</span>, and <span className="text-hawk-green font-semibold">continuous feedback</span>.
            </p>
            <div className="w-16 h-[2px] bg-hawk-green/30 mx-auto mb-10" />
            <p className="text-hawk-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto italic">
              "HawkTrade is the operating system that guides every step of that journey from market preparation to execution, review, and improvement."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
