import { Link } from 'react-router-dom'
import { 
  TrendingUp, BookOpen, NotebookPen, FlaskConical, BarChart3, 
  ArrowRight, Zap, Shield, Target, Brain, ChevronRight,
  LineChart, Users, Award, Clock, Activity, CheckCircle2,
  XCircle, ArrowUpRight, BarChart, GraduationCap, Crosshair
} from 'lucide-react'
import { useEffect, useRef } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        el.textContent = end + suffix
        clearInterval(timer)
      } else {
        el.textContent = Math.floor(start) + suffix
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, suffix, duration])
  return <span ref={ref}>0{suffix}</span>
}

export default function Landing() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hawk-green/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Shiny Background Line Chart Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full animate-float" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chart Grid Lines */}
            <path d="M0 100H1440 M0 250H1440 M0 400H1440" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <path d="M200 0V600 M500 0V600 M800 0V600 M1100 0V600" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            
            {/* Glowing Line Chart Path */}
            <path 
              d="M-100 450 C 150 450, 250 200, 400 300 C 550 400, 700 150, 900 200 C 1100 250, 1300 50, 1500 100" 
              stroke="url(#paint0_linear_glow)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="animate-draw-line drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"
            />

            {/* Gradient Fill under the line */}
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
          <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up">
            <div className="badge badge-green mb-6 text-sm py-1.5 px-4 inline-flex items-center gap-2 border border-hawk-green/20">
              <Zap className="w-4 h-4" />
              <span>Next-Gen Trading Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Don't just log trades.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-hawk-green to-hawk-green-light">
                Master them with AI.
              </span>
            </h1>

            <p className="text-hawk-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              HawkTrade is the first ecosystem that connects your trading journal directly to an intelligent academy. Find your edge, track prop firm challenges, and let AI fix your leaks.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/journal">
                <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]">
                  Start Journaling Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/learn">
                <button className="btn-secondary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full sm:w-auto">
                  <GraduationCap className="w-5 h-5" />
                  Explore Academy
                </button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center gap-4 text-sm text-hawk-text-muted">
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
          <div className="relative max-w-5xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-1 bg-gradient-to-b from-hawk-green/20 to-transparent rounded-2xl blur-xl opacity-50" />
            
            {/* Main App Window */}
            <div className="relative bg-[#0B0F19] rounded-2xl border border-hawk-border shadow-2xl overflow-hidden">
              {/* Fake Window Controls */}
              <div className="h-8 bg-hawk-surface border-b border-hawk-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-hawk-red/80" />
                <div className="w-3 h-3 rounded-full bg-hawk-amber/80" />
                <div className="w-3 h-3 rounded-full bg-hawk-green/80" />
              </div>
              
              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-6 bg-gradient-to-b from-hawk-surface/50 to-transparent">
                
                {/* Left Col: AI Insight (Floating Element vibe) */}
                <div className="col-span-1 space-y-4">
                  <div className="glass p-5 rounded-xl border border-hawk-green/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Brain className="w-20 h-20 text-hawk-green" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-hawk-green animate-pulse" />
                      <span className="text-xs font-bold text-hawk-green uppercase tracking-wider">HawkTrade AI Insight</span>
                    </div>
                    <p className="text-sm text-white mb-2 leading-relaxed">
                      "You've lost your last 3 trades on <strong className="text-hawk-red">Fridays</strong> during the New York session."
                    </p>
                    <div className="mt-4 pt-4 border-t border-hawk-border/50">
                      <span className="text-xs text-hawk-text-muted mb-2 block">Recommended Action:</span>
                      <button className="text-xs bg-hawk-surface-2 hover:bg-hawk-surface-3 transition-colors px-3 py-2 rounded text-white flex items-center justify-between w-full">
                        <span>Read: Avoid Overtrading</span>
                        <ArrowRight className="w-3 h-3 text-hawk-green" />
                      </button>
                    </div>
                  </div>

                  <div className="glass p-5 rounded-xl">
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
                <div className="col-span-2 glass p-6 rounded-xl relative">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Net P&L</h3>
                      <p className="text-3xl font-bold text-hawk-green">+$4,250.00</p>
                    </div>
                    <div className="badge badge-green">
                      <TrendingUp className="w-3 h-3" /> +12.5% This Month
                    </div>
                  </div>

                  {/* Simulated Chart */}
                  <div className="h-48 flex items-end justify-between gap-1 md:gap-2">
                    {[30, 45, 20, 50, 40, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end group cursor-crosshair h-full relative">
                        {/* Tooltip on hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hawk-surface border border-hawk-border px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
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
            <div className="absolute -bottom-6 -right-6 glass-strong px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 hidden md:flex border border-hawk-border-2">
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
      <section className="py-24 border-y border-hawk-border bg-hawk-surface/30">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Stop guessing. <span className="text-hawk-green">Start knowing.</span></h2>
            <p className="text-hawk-text-secondary max-w-2xl mx-auto">Trading without data is gambling. HawkTrade replaces messy spreadsheets with objective, actionable insights.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="glass p-8 rounded-2xl border-hawk-red/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-hawk-red/50" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-hawk-red/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-hawk-red" />
                </div>
                <h3 className="text-xl font-bold">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manual Excel data entry causing friction",
                  "No visual representations of your performance",
                  "Repeating the same emotional mistakes blindly",
                  "Cannot pinpoint exactly which strategy is profitable",
                  "Scattered academy notes and random YouTube videos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-hawk-text-secondary">
                    <span className="text-hawk-red mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The HawkTrade Way */}
            <div className="glass p-8 rounded-2xl border-hawk-green/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-hawk-green" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-hawk-green/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-hawk-green" />
                </div>
                <h3 className="text-xl font-bold text-white">The HawkTrade Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated sync with your favorite brokers",
                  "Deep analytics, heatmaps, and interactive charts",
                  "AI detects your psychological leaks automatically",
                  "Tag setups and find your objective statistical edge",
                  "Mistakes instantly link to tailored Academy lessons"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="text-hawk-green mt-1">
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
      <section className="py-32">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="badge badge-blue mx-auto mb-4">
              <Target className="w-3 h-3" />
              Platform Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything to build a <span className="gradient-text">profitable edge</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Box 1: Auto Sync (Spans 1) */}
            <div className="glass p-8 rounded-2xl card-hover md:col-span-1 flex flex-col">
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
                <span className="text-xs px-2 py-1 bg-hawk-surface-2 rounded text-hawk-text-muted">CSV Import</span>
              </div>
            </div>

            {/* Box 2: Deep Analytics (Spans 2) */}
            <div className="glass p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-hawk-green/10 flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-hawk-green" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Deep Performance Analytics</h3>
                <p className="text-hawk-text-secondary mb-6">
                  Track your Profit Factor, Win Rate, Expectancy, and Average Risk-to-Reward. Slice your data by time of day, day of week, or custom strategy tags.
                </p>
                <Link to="/journal" className="text-hawk-green text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Analytics Dashboard <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full relative z-10">
                {/* Mini Dashboard Graphic */}
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
            <div className="glass p-8 rounded-2xl card-hover md:col-span-2 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-hawk-purple/10 flex items-center justify-center mb-6 relative z-10">
                <FlaskConical className="w-6 h-6 text-hawk-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Tick-by-Tick Simulator</h3>
              <p className="text-hawk-text-secondary max-w-md relative z-10">
                Don't risk live capital testing a new strategy. Replay historical charts, execute trades, and measure results exactly as if the market was live.
              </p>
              
              {/* Background Chart Element */}
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-1/2 h-full">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-hawk-purple">
                  <path d="M0,100 L0,50 L20,30 L40,60 L60,20 L80,40 L100,10 L100,100 Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Box 4: Trade Management (Spans 1) */}
            <div className="glass p-8 rounded-2xl card-hover md:col-span-1">
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

      {/* ================= THE ACADEMY CONNECTION (THE UPGRADE) ================= */}
      <section className="py-32 bg-hawk-surface/30 border-y border-hawk-border relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-hawk-blue/10 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Demo */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-hawk-blue/20 to-hawk-purple/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative space-y-4">
                {/* Simulated Log */}
                <div className="glass p-4 rounded-xl flex items-center justify-between border-hawk-red/30 bg-hawk-red/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hawk-red/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-hawk-red rotate-180" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">XAU/USD Long</p>
                      <p className="text-xs text-hawk-text-secondary">Closed early manually</p>
                    </div>
                  </div>
                  <span className="text-hawk-red font-bold">-$150.00</span>
                </div>

                {/* AI Connection Arrow */}
                <div className="flex justify-center text-hawk-text-muted py-2">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>

                {/* AI Intervention */}
                <div className="glass p-5 rounded-xl border-hawk-green/30 bg-[#0B0F19]">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-hawk-green" />
                    <span className="text-sm font-bold text-white">AI Detection: Emotion Trading</span>
                  </div>
                  <p className="text-xs text-hawk-text-secondary mb-4 leading-relaxed">
                    You've prematurely closed winning trades 4 times this week due to anxiety, leaving 3R on the table.
                  </p>
                  <div className="bg-hawk-surface-2 p-3 rounded-lg border border-hawk-border flex items-center justify-between group cursor-pointer hover:border-hawk-blue transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-hawk-blue/20 rounded flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-hawk-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Recommended Lesson</p>
                        <p className="text-[10px] text-hawk-text-muted">Grade 5: Trading Psychology</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-hawk-text-muted group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="badge badge-purple mb-6">
                <Brain className="w-3 h-3" />
                Intelligent Ecosystem
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                A Journal that actually <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawk-blue to-hawk-purple">teaches you.</span>
              </h2>
              <p className="text-hawk-text-secondary text-lg leading-relaxed mb-8">
                Other journals just show you your losses. HawkTrade's AI actively monitors your habits, detects psychological leaks, and instantly recommends the exact module from the <strong className="text-white">School of HawkTrade</strong> to fix your errors.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "BabyPips-style academy from Preschool to Master",
                  "Video masterclasses on SMC, Wyckoff, and Price Action",
                  "Quizzes and assignments to verify knowledge",
                  "Directly linked to your live journal performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-hawk-text-secondary">
                    <div className="w-5 h-5 rounded-full bg-hawk-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-hawk-blue" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/learn">
                <button className="btn-secondary flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Explore Curriculum
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROP FIRM TRACKER ================= */}
      <section className="py-24">
        <div className="page-container">
          <div className="max-w-4xl mx-auto glass-strong border border-hawk-border p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hawk-amber/5 rounded-full blur-[80px]" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pass your challenges with confidence.</h2>
                <p className="text-hawk-text-secondary mb-8">
                  Taking a prop firm challenge? HawkTrade includes a dedicated dashboard to track your Daily Loss Limit, Max Drawdown, and Profit Targets so you never breach a rule accidentally.
                </p>
                <Link to="/journal">
                  <button className="btn-primary text-sm px-6 py-3">Track Your Challenge</button>
                </Link>
              </div>

              {/* Mini Prop Dashboard */}
              <div className="bg-[#0B0F19] p-5 rounded-xl border border-hawk-border shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold">100k Challenge</span>
                  <span className="badge badge-amber">Phase 1</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-hawk-text-secondary">Daily Loss Limit (5%)</span>
                      <span className="text-white">$1,200 / $5,000</span>
                    </div>
                    <div className="h-2 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-hawk-amber rounded-full" style={{ width: '24%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-hawk-text-secondary">Max Drawdown (10%)</span>
                      <span className="text-white">$2,500 / $10,000</span>
                    </div>
                    <div className="h-2 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-hawk-amber rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-hawk-text-secondary">Profit Target (8%)</span>
                      <span className="text-hawk-green font-bold">$6,400 / $8,000</span>
                    </div>
                    <div className="h-2 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-hawk-green rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF / WALL OF LOVE ================= */}
      <section className="py-24 bg-hawk-surface/20 border-t border-hawk-border">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traders love <span className="gradient-text">HawkTrade</span></h2>
            <p className="text-hawk-text-secondary">Join thousands of funded traders who found their edge.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                text: "I loved the School of HawkTrade. Whenever I log a bad trade, it links me directly to the exact video lesson I need to review. It's like having a mentor looking over my shoulder.",
                img: "12"
              },
              {
                name: "David K.",
                role: "Full-Time Trader",
                text: "I used to use Excel, then tried other journals. HawkTrade is by far the cleanest UI, and the tick-by-tick backtesting feature alone is worth its weight in gold.",
                img: "13"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <img src={`https://i.pravatar.cc/100?img=${testimonial.img}`} alt={testimonial.name} className="w-10 h-10 rounded-full border border-hawk-border" />
                  <div>
                    <p className="font-bold text-sm text-white">{testimonial.name}</p>
                    <p className="text-xs text-hawk-text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-hawk-text-secondary leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32">
        <div className="page-container">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hawk-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-hawk-green/20 to-hawk-blue/20" />
            <div className="absolute inset-0 bg-hawk-surface/90 backdrop-blur-xl" />
            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to find your <span className="gradient-text">Edge</span>?
              </h2>
              <p className="text-hawk-text-secondary text-lg max-w-2xl mx-auto mb-10">
                Stop jumping between spreadsheets and random YouTube videos. Get the all-in-one ecosystem for serious traders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/journal">
                  <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    Create Free Account <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <p className="text-xs text-hawk-text-muted mt-6 flex justify-center items-center gap-2">
                <Shield className="w-3 h-3" /> No credit card required. Free tier available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
