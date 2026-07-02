import { Link } from 'react-router-dom'
import { 
  TrendingUp, BookOpen, FlaskConical, BarChart3, 
  ArrowRight, Zap, Shield, Target, Brain, ChevronRight,
  Activity, CheckCircle2, XCircle, BarChart, GraduationCap, Crosshair,
  Check, ShieldCheck, Sparkles, Lock, ShieldAlert
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Landing() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hawk-green/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Shiny Background Line Chart Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full animate-float" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100H1440 M0 250H1440 M0 400H1440" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <path d="M200 0V600 M500 0V600 M800 0V600 M1100 0V600" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            <path 
              d="M-100 450 C 150 450, 250 200, 400 300 C 550 400, 700 150, 900 200 C 1100 250, 1300 50, 1500 100" 
              stroke="url(#paint0_linear_glow)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="animate-draw-line drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"
            />
            <path 
              d="M-100 450 C 150 450, 250 200, 400 300 C 550 400, 700 150, 900 200 C 1100 250, 1300 50, 1500 100 L 1500 600 L -100 600 Z" 
              fill="url(#paint1_linear_fill)" 
              className="animate-fade-in"
              style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
            />
            <defs>
              <linearGradient id="paint0_linear_glow" x1="0" y1="200" x2="1440" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" stopOpacity="0" />
                <stop offset="0.5" stopColor="#34D399" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="paint1_linear_fill" x1="720" y1="100" x2="720" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" stopOpacity="0.15" />
                <stop offset="1" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="page-container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up px-4 md:px-0">
            <div className="badge badge-green mb-6 text-sm py-1.5 px-4 inline-flex items-center gap-2 border border-hawk-green/20">
              <Zap className="w-4 h-4" />
              <span>Next-Gen Trading Ecosystem</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Don't just log trades.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-hawk-green to-hawk-green-light">
                Master them with AI.
              </span>
            </h1>

            <p className="text-hawk-text-secondary text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              HawkTrade is the first ecosystem that connects your trading journal directly to an intelligent academy. Find your edge, track prop firm challenges, and let AI fix your leaks.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/journal" className="w-full sm:w-auto">
                <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Social Proof snippet in hero */}
            <div className="mt-10 flex items-center justify-center gap-4 text-sm text-hawk-text-muted">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-hawk-bg bg-hawk-surface-2 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Trusted by <strong className="text-white">10,000+</strong> funded traders</p>
            </div>
          </div>

          {/* Hero Dashboard Preview (Interactive/Layered) */}
          <div className="relative max-w-5xl mx-auto mt-12 md:mt-20 animate-fade-in px-4 md:px-0" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-1 bg-gradient-to-b from-hawk-green/20 to-transparent rounded-2xl blur-xl opacity-50" />
            
            {/* Main App Window */}
            <div className="relative bg-[#0B0F19] rounded-2xl border border-hawk-border shadow-2xl overflow-hidden">
              <div className="h-8 bg-hawk-surface border-b border-hawk-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-hawk-red/80" />
                <div className="w-3 h-3 rounded-full bg-hawk-amber/80" />
                <div className="w-3 h-3 rounded-full bg-hawk-green/80" />
              </div>
              
              <div className="p-4 md:p-10 grid md:grid-cols-3 gap-6 bg-gradient-to-b from-hawk-surface/50 to-transparent">
                
                {/* Left Col: AI Insight */}
                <div className="col-span-1 space-y-4">
                  <div className="glass p-4 md:p-5 rounded-xl border border-hawk-green/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Brain className="w-16 h-16 md:w-20 md:h-20 text-hawk-green" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-hawk-green animate-pulse" />
                      <span className="text-[10px] md:text-xs font-bold text-hawk-green uppercase tracking-wider">HawkTrade AI Insight</span>
                    </div>
                    <p className="text-xs md:text-sm text-white mb-2 leading-relaxed">
                      "You've lost your last 3 trades on <strong className="text-hawk-red">Fridays</strong> during the New York session."
                    </p>
                    <div className="mt-4 pt-4 border-t border-hawk-border/50">
                      <span className="text-[10px] md:text-xs text-hawk-text-muted mb-2 block">Recommended Action:</span>
                      <button className="text-[10px] md:text-xs bg-hawk-surface-2 hover:bg-hawk-surface-3 transition-colors px-3 py-2 rounded text-white flex items-center justify-between w-full">
                        <span>Read: Avoid Overtrading</span>
                        <ArrowRight className="w-3 h-3 text-hawk-green" />
                      </button>
                    </div>
                  </div>

                  <div className="glass p-4 md:p-5 rounded-xl hidden md:block">
                    <h4 className="text-sm text-hawk-text-muted mb-4">Win Rate by Session</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'London', rate: 68, color: 'hawk-green' },
                        { name: 'New York', rate: 45, color: 'hawk-amber' },
                        { name: 'Asian', rate: 30, color: 'hawk-red' },
                      ].map((s) => (
                        <div key={s.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span>{s.name}</span>
                            <span className={`text-${s.color}`}>{s.rate}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
                            <div className={`h-full bg-${s.color} rounded-full`} style={{ width: `${s.rate}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Performance Chart */}
                <div className="col-span-1 md:col-span-2 glass p-4 md:p-6 rounded-xl relative">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold mb-1">Net P&L</h3>
                      <p className="text-2xl md:text-3xl font-bold text-hawk-green">+$4,250.00</p>
                    </div>
                    <div className="badge badge-green hidden sm:flex">
                      <TrendingUp className="w-3 h-3" /> +12.5% This Month
                    </div>
                  </div>

                  {/* Simulated Chart */}
                  <div className="h-32 md:h-48 flex items-end justify-between gap-1 md:gap-2">
                    {[30, 45, 20, 50, 40, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end group cursor-crosshair h-full relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hawk-surface border border-hawk-border px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap hidden md:block">
                          Trade #{i+1}: +${h*10}
                        </div>
                        <div 
                          className="w-full bg-gradient-to-t from-[#10B981]/20 to-[#10B981] rounded-t-sm transition-all duration-300 group-hover:opacity-80 group-hover:from-[#10B981]/50"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
            {/* Floating Integrations Badge */}
            <div className="absolute -bottom-6 -right-6 glass-strong px-6 py-4 rounded-xl shadow-2xl items-center gap-4 hidden lg:flex border border-hawk-border-2 z-20">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MetaTrader_4_logo.png/600px-MetaTrader_4_logo.png" alt="MT4" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-bold">Auto-Sync Enabled</p>
                <p className="text-xs text-hawk-text-muted">Connected to MT4/MT5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PROBLEM VS SOLUTION ================= */}
      <section className="py-20 md:py-24 border-y border-hawk-border bg-hawk-surface/30">
        <div className="page-container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Stop guessing. <span className="text-hawk-green">Start knowing.</span></h2>
            <p className="text-hawk-text-secondary max-w-2xl mx-auto text-sm md:text-base">Trading without data is gambling. HawkTrade replaces messy spreadsheets with objective, actionable insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-0">
            {/* The Old Way */}
            <div className="glass p-6 md:p-8 rounded-2xl border-hawk-red/20 relative overflow-hidden group">
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
            <div className="glass p-6 md:p-8 rounded-2xl border-hawk-green/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
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

      {/* ================= BENTO BOX FEATURES ================= */}
      <section className="py-20 md:py-32">
        <div className="page-container px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <div className="badge badge-blue mx-auto mb-4">
              <Target className="w-3 h-3" />
              Platform Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything to build a <span className="gradient-text">profitable edge</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Box 1: Auto Sync (Spans 1) */}
            <div className="glass p-6 md:p-8 rounded-2xl card-hover md:col-span-1 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-hawk-blue/10 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-hawk-blue" />
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
            <div className="glass p-6 md:p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
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
            <div className="glass p-6 md:p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-hawk-purple/10 flex items-center justify-center mb-6 relative z-10">
                <FlaskConical className="w-6 h-6 text-hawk-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Tick-by-Tick Simulator</h3>
              <p className="text-hawk-text-secondary max-w-md relative z-10 text-sm md:text-base">
                Don't risk live capital testing a new strategy. Replay historical charts, execute trades, and measure results exactly as if the market was live.
              </p>
              
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-1/2 h-full">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-hawk-purple">
                  <path d="M0,100 L0,50 L20,30 L40,60 L60,20 L80,40 L100,10 L100,100 Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Box 4: Trade Management (Spans 1) */}
            <div className="glass p-6 md:p-8 rounded-2xl card-hover md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-hawk-amber/10 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6 text-hawk-amber" />
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
      <section className="py-20 border-y border-hawk-border bg-[#0B0F19] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hawk-green/5 rounded-full blur-[100px]" />
        <div className="page-container relative z-10 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by traders, <span className="text-hawk-green">for traders.</span></h2>
            <p className="text-hawk-text-secondary text-lg md:text-xl leading-relaxed mb-8">
              We started HawkTrade because we were tired of losing money to emotional mistakes that standard spreadsheets couldn't fix. We needed a tool that didn't just log numbers, but actually helped us understand our psychology and refine our edge.
            </p>
            <div className="inline-flex items-center gap-4 bg-hawk-surface/50 border border-hawk-border rounded-full px-6 py-3">
              <ShieldAlert className="w-5 h-5 text-hawk-blue" />
              <span className="text-sm font-medium">Over 2.5 million trades analyzed across our platform.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-20 md:py-24 bg-hawk-surface/20">
        <div className="page-container px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traders love <span className="gradient-text">HawkTrade</span></h2>
            <p className="text-hawk-text-secondary">Join thousands of funded traders who found their edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div key={i} className="glass p-6 rounded-2xl flex flex-col justify-between">
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
      <section className="py-20 md:py-24 border-t border-hawk-border bg-hawk-bg relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="page-container px-4 md:px-0 relative z-10">
          <div className="text-center mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential */}
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-border relative mt-4 md:mt-8">
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
            <div className="glass-strong rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-green relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(16,185,129,0.15)] z-20 overflow-hidden">
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
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col border border-hawk-purple/50 relative hover:border-hawk-purple transition-colors mt-4 md:mt-8 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
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
      <section className="py-20 md:py-32">
        <div className="page-container px-4 md:px-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hawk-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-hawk-green/20 to-hawk-blue/20" />
            <div className="absolute inset-0 bg-hawk-surface/90 backdrop-blur-xl" />
            <div className="relative p-8 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to find your <span className="gradient-text">Edge</span>?
              </h2>
              <p className="text-hawk-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10">
                Stop jumping between spreadsheets and random YouTube videos. Get the all-in-one ecosystem for serious traders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/journal" className="w-full sm:w-auto">
                  <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    Create Free Account <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
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
    </div>
  )
}
