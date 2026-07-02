import React, { useState, useEffect, useRef } from 'react'
import { 
  Play, Code2, Terminal, Activity, TrendingUp, AlertTriangle, 
  Cpu, RotateCcw, Hand, Sparkles, FastForward, CheckCircle2, ChevronRight,
  BarChart3, Crosshair, ShieldAlert, History, Brain, Settings, Maximize2, LayoutDashboard,
  ArrowLeft, Plus, LineChart, Wallet, Target, ArrowRight
} from 'lucide-react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { useUser } from '../context/UserContext'
import PaywallOverlay from '../components/ui/PaywallOverlay'

/* ─── TradingView Widget Loader ─── */
function TradingViewWidget({ widgetConfig, containerId, height = '100%' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-' + widgetConfig.widget + '.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify(widgetConfig.config)
    containerRef.current.appendChild(script)
  }, [widgetConfig, containerId])

  return (
    <div className="tradingview-widget-container" style={{ height: '100%', width: '100%' }}>
      <div ref={containerRef} id={containerId} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}

const advancedChartConfig = {
  widget: 'advanced-chart',
  config: {
    autosize: true,
    symbol: "BINANCE:BTCUSD",
    interval: "1",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    backgroundColor: "#0B0E14",
    gridColor: "#1f2937",
    allow_symbol_change: true,
    hide_top_toolbar: false,
    hide_side_toolbar: false,
    withdateranges: true,
    details: false,
    hotlist: false,
    calendar: false,
    show_popup_button: false
  }
}

const defaultPrompt = `I trade the ICT 2022 Model on the 1-minute chart.
1. Wait for London Session open.
2. Wait for price to sweep the Asian High liquidity.
3. Look for a displacement downwards causing a Market Structure Shift (MSS).
4. Enter short when price returns to the Fair Value Gap (FVG).
5. Stop loss above the swing high. Target 2R.`

const mockResultsData = [
  { date: '03/02', equity: 0 },
  { date: '04/02', equity: -350 },
  { date: '13/02', equity: -450 },
  { date: '16/02', equity: -650 },
  { date: '18/02', equity: -700 }
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-hawk-surface-2 p-3 rounded-lg border border-hawk-border shadow-xl">
        <p className="text-hawk-text-secondary text-xs mb-1">{label}</p>
        <p className="text-white font-bold">${payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

const sessionsList = [
  { id: '1', name: 'CRT DEBUNK', date: '18 Feb 26', time: '12:42 PM', pnl: -450 },
  { id: '2', name: 'London Open - BTC', date: '17 Feb 26', time: '08:00 AM', pnl: 850 },
  { id: '3', name: 'NY Session - EURUSD', date: '15 Feb 26', time: '09:30 AM', pnl: 220 },
]

export default function Backtest() {
  const { isPro } = useUser()
  const [activeView, setActiveView] = useState('dashboard') // 'dashboard', 'manual', 'algo'
  const [sidebarTab, setSidebarTab] = useState('execution') // 'execution' or 'analytics'
  const [prompt, setPrompt] = useState(defaultPrompt)
  
  // Algo States
  const [algoStatus, setAlgoStatus] = useState('idle') // idle, generating, compiling, success
  
  // Manual States
  const [manualTrades, setManualTrades] = useState(14)
  const maxManualFree = 30

  const runAiBuilder = () => {
    if (!isPro) return
    setAlgoStatus('generating')
    setTimeout(() => {
      setAlgoStatus('compiling')
      setTimeout(() => {
        setAlgoStatus('success')
      }, 2000)
    }, 2500)
  }

  const logManualTrade = () => {
    if (manualTrades < maxManualFree || isPro) setManualTrades(prev => prev + 1)
  }

  const reset = () => setAlgoStatus('idle')

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  // Generate mock heatmap data (15 weeks x 7 days)
  const heatmapData = Array.from({ length: 15 }, () => 
    Array.from({ length: 7 }, () => (Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0))
  )

  return (
    <div className="flex flex-col h-screen pt-16 bg-[#0B0E14] overflow-hidden">
      
      {/* Dynamic Top Navigation Bar */}
      <div className="h-14 border-b border-hawk-border flex items-center justify-between px-4 lg:px-6 bg-hawk-bg/80 backdrop-blur-md z-20 shrink-0">
        <div className="flex items-center gap-4">
          {activeView === 'dashboard' ? (
            <h1 className="text-lg font-bold flex items-center gap-2">
              <LineChart className="w-5 h-5 text-hawk-green" /> Analytics Dashboard
            </h1>
          ) : (
            <button 
              onClick={() => setActiveView('dashboard')}
              className="flex items-center gap-2 text-sm font-bold text-hawk-text-secondary hover:text-white transition-colors bg-hawk-surface hover:bg-hawk-surface-2 px-3 py-1.5 rounded-lg border border-hawk-border"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </button>
          )}
          
          {activeView !== 'dashboard' && (
            <>
              <div className="h-4 w-[1px] bg-hawk-border mx-2 hidden sm:block"></div>
              <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-white">
                {activeView === 'manual' ? (
                  <><Hand className="w-4 h-4 text-hawk-amber" /> Manual Session</>
                ) : (
                  <><Sparkles className="w-4 h-4 text-hawk-purple" /> AI Strategy Tester</>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {activeView === 'dashboard' && (
             <div className="hidden sm:flex items-center gap-2">
               <button 
                 onClick={() => setActiveView('algo')}
                 className="flex items-center gap-2 px-4 py-2 bg-hawk-purple/10 hover:bg-hawk-purple/20 text-hawk-purple text-sm font-bold rounded-lg border border-hawk-purple/20 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.1)]"
               >
                 <Sparkles className="w-4 h-4" /> AI Tester
               </button>
               <button 
                 onClick={() => setActiveView('manual')}
                 className="flex items-center gap-2 px-4 py-2 bg-hawk-green hover:bg-hawk-green-light text-black text-sm font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]"
               >
                 <Plus className="w-4 h-4" /> New Session
               </button>
             </div>
          )}
          {activeView !== 'dashboard' && (
            <>
              <button className="p-2 text-hawk-text-secondary hover:text-white transition-colors bg-hawk-surface-2 rounded-lg border border-hawk-border">
                <Settings className="w-4 h-4" />
              </button>
              <button className="p-2 text-hawk-text-secondary hover:text-white transition-colors bg-hawk-surface-2 rounded-lg border border-hawk-border hidden sm:block">
                <Maximize2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ==========================================
            VIEW 1: SUPER DASHBOARD
            ========================================== */}
        {activeView === 'dashboard' && (
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 lg:p-8 animate-fade-in">
            {/* Mobile Actions */}
            <div className="flex sm:hidden gap-2 mb-6">
               <button onClick={() => setActiveView('algo')} className="flex-1 flex justify-center items-center gap-2 py-2 bg-hawk-purple/10 text-hawk-purple text-sm font-bold rounded-lg border border-hawk-purple/20">
                 <Sparkles className="w-4 h-4" /> AI Tester
               </button>
               <button onClick={() => setActiveView('manual')} className="flex-1 flex justify-center items-center gap-2 py-2 bg-hawk-green text-black text-sm font-bold rounded-lg">
                 <Plus className="w-4 h-4" /> New Session
               </button>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 pb-20">
              
              {/* --- ROW 1: Hero & Highlights --- */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hero */}
                <div className="lg:col-span-2 bg-gradient-to-r from-hawk-green/10 to-hawk-surface-2 rounded-2xl p-6 lg:p-8 flex flex-col justify-between border border-hawk-green/20 shadow-lg relative overflow-hidden min-h-[220px]">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{getGreeting()}, HawkTrader</h2>
                  </div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 gap-4">
                    <button 
                      onClick={() => setActiveView('manual')}
                      className="text-white text-sm font-bold flex items-center gap-2 hover:text-hawk-green transition-colors"
                    >
                      Continue with your last session <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setActiveView('manual')} className="btn-primary w-full sm:w-auto">
                      Let's Go
                    </button>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-4">
                  <div className="bg-hawk-surface-2 rounded-2xl p-5 border border-hawk-border flex-1 relative overflow-hidden flex flex-col justify-between hover:border-hawk-green/50 transition-colors">
                     <div className="flex justify-between items-start mb-2 relative z-10">
                       <span className="text-sm font-bold text-white">Your Best Return (%)</span>
                       <span className="text-[10px] text-hawk-text-muted uppercase tracking-wider font-bold">Gold Journal</span>
                     </div>
                     <div className="text-3xl font-bold text-hawk-green relative z-10">9.52%</div>
                     {/* Decorative line */}
                     <div className="absolute bottom-0 left-0 w-full h-12 opacity-30 pointer-events-none">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                          <path d="M0,30 Q25,10 50,20 T100,5" fill="none" stroke="#10B981" strokeWidth="2" />
                        </svg>
                     </div>
                  </div>
                  
                  <div className="bg-hawk-surface-2 rounded-2xl p-5 border border-hawk-border flex-1 relative overflow-hidden flex flex-col justify-between hover:border-hawk-green/50 transition-colors">
                     <div className="flex justify-between items-start mb-2 relative z-10">
                       <span className="text-sm font-bold text-white">Your Best Win Rate (%)</span>
                       <span className="text-[10px] text-hawk-text-muted uppercase tracking-wider font-bold">BTC Journal 2</span>
                     </div>
                     <div className="text-3xl font-bold text-hawk-green relative z-10">37%</div>
                     {/* Decorative line */}
                     <div className="absolute bottom-0 left-0 w-full h-12 opacity-30 pointer-events-none">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                          <path d="M0,30 Q25,10 50,20 T100,5" fill="none" stroke="#10B981" strokeWidth="2" />
                        </svg>
                     </div>
                  </div>
                </div>
              </div>

              {/* --- ROW 2: Core Analytics --- */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Account Balance', val: '$120,000', sub: '+$20,000 20.00%', icon: <Wallet className="w-5 h-5 text-hawk-green" />, iconBg: 'bg-hawk-green/10' },
                  { label: 'Win Rate', val: '60.00%', sub: '6W / 4L / 0BE', icon: <Target className="w-5 h-5 text-hawk-green" />, iconBg: 'bg-hawk-green/10' },
                  { label: 'Sharpe Ratio', val: '1.42', sub: 'Good', icon: <Activity className="w-5 h-5 text-hawk-green" />, iconBg: 'bg-hawk-green/10' },
                  { label: 'Profit Factor', val: '1.80', sub: 'Avg. P/L: $2,000', icon: <TrendingUp className="w-5 h-5 text-hawk-green" />, iconBg: 'bg-hawk-green/10' },
                ].map((stat, i) => (
                  <div key={i} className="bg-hawk-surface-2 rounded-2xl p-4 md:p-5 border border-hawk-border flex items-center justify-between hover:border-hawk-green/30 transition-colors">
                    <div>
                      <div className="text-[11px] md:text-xs text-hawk-text-secondary mb-1">{stat.label}</div>
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.val}</div>
                      <div className={`text-[9px] md:text-[10px] font-bold ${stat.sub === 'Good' ? 'text-hawk-green' : 'text-hawk-green'}`}>{stat.sub}</div>
                    </div>
                    <div className={`${stat.iconBg} p-2 md:p-3 rounded-xl shrink-0`}>
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* --- ROW 3: Charts & Activity --- */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* P&L Chart */}
                <div className="lg:col-span-2 bg-hawk-surface-2 border border-hawk-border rounded-2xl p-5 md:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-white">P&L By Time</h3>
                    <div className="flex bg-hawk-surface rounded-lg p-1 border border-hawk-border-2">
                      <button className="px-3 py-1 text-xs font-bold rounded-md text-hawk-text-secondary hover:text-white">Even</button>
                      <button className="px-3 py-1 text-xs font-bold rounded-md bg-hawk-surface-2 border border-hawk-border text-white">Date</button>
                    </div>
                  </div>
                  <div className="w-full h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockResultsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2A3441" vertical={false} />
                        <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="equity" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorPnl)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Activity Heatmap */}
                <div className="bg-hawk-surface-2 border border-hawk-border rounded-2xl p-5 md:p-6 flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-white mb-6">You have backtested 225 trades so far</h3>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between text-[10px] text-hawk-text-muted font-bold mb-2 px-1 uppercase tracking-wider">
                       <span>Apr 2026</span><span>May 2026</span><span>Jun 2026</span>
                    </div>
                    {/* Heatmap Grid */}
                    <div className="flex gap-1.5 overflow-x-auto custom-scrollbar pb-2 pt-1">
                      {heatmapData.map((week, w) => (
                        <div key={w} className="flex flex-col gap-1.5 shrink-0">
                          {week.map((val, d) => (
                            <div 
                              key={d} 
                              className={`w-4 h-4 rounded-sm transition-colors ${
                                val === 0 ? 'bg-hawk-surface border border-hawk-border' : 
                                val === 1 ? 'bg-hawk-green/30' : 
                                val === 2 ? 'bg-hawk-green/60' : 
                                'bg-hawk-green'
                              }`}
                              title={val > 0 ? `${val} trades` : 'No trades'}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* --- ROW 4: Breakdown & Sessions --- */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Trade Breakdown */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 h-max">
                  <div className="bg-hawk-surface-2 border border-hawk-border-2 rounded-2xl p-5 relative overflow-hidden h-[130px]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">Overview</h4>
                      <span className="text-[10px] text-hawk-text-secondary font-bold">SAMPLE DATA</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 mt-2">-$700.00</div>
                    <div className="text-xs text-hawk-text-secondary">Net Profit</div>
                  </div>
                  <div className="bg-hawk-surface-2 border border-hawk-border rounded-2xl p-5 h-[130px]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">Winning Trades</h4>
                      <span className="text-[10px] text-hawk-text-secondary font-bold">SAMPLE DATA</span>
                    </div>
                    <div className="text-3xl font-bold text-hawk-green mb-1 mt-2">0</div>
                    <div className="text-xs text-hawk-text-secondary">Total Wins</div>
                  </div>
                  <div className="bg-hawk-surface-2 border border-hawk-border rounded-2xl p-5 h-[130px]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">Losing Trades</h4>
                      <span className="text-[10px] text-hawk-text-secondary font-bold">SAMPLE DATA</span>
                    </div>
                    <div className="text-3xl font-bold text-hawk-red mb-1 mt-2">3</div>
                    <div className="text-xs text-hawk-text-secondary">Total Losses</div>
                  </div>
                </div>

                {/* Sessions */}
                <div className="bg-hawk-surface-2 border border-hawk-border rounded-2xl p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <History className="w-4 h-4 text-hawk-text-secondary" />
                      Recent Sessions
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {sessionsList.map(session => (
                      <div key={session.id} className="bg-hawk-bg border border-hawk-border hover:border-hawk-border-2 transition-colors rounded-xl p-4 flex flex-col group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white group-hover:text-hawk-green transition-colors text-sm">{session.name}</h4>
                          <span className={`text-sm font-bold ${session.pnl >= 0 ? 'text-hawk-green' : 'text-hawk-red'}`}>
                            {session.pnl >= 0 ? '+' : ''}${Math.abs(session.pnl)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-hawk-text-secondary mb-4">
                          <span>{session.date}</span>
                          <span>{session.time}</span>
                        </div>
                        <button 
                          onClick={() => setActiveView('manual')}
                          className="w-full py-1.5 bg-hawk-surface hover:bg-hawk-surface-2 border border-hawk-border rounded-lg text-xs font-bold text-white transition-colors"
                        >
                          Continue Session
                        </button>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveView('manual')}
                    className="mt-4 w-full py-2.5 bg-hawk-bg border border-dashed border-hawk-text-muted hover:border-hawk-text-secondary rounded-xl text-xs font-bold text-hawk-text-secondary hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Start New Session
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==========================================
            VIEW 2: MANUAL SIMULATOR
            ========================================== */}
        {activeView === 'manual' && (
          <div className="flex flex-col lg:flex-row w-full h-full animate-fade-in relative">
            
            {/* MAIN CHART AREA */}
            <div className="flex-1 relative border-r border-hawk-border order-2 lg:order-1 h-[50vh] lg:h-full">
              {!isPro && manualTrades >= maxManualFree && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                  <div className="relative z-10 bg-hawk-surface border border-hawk-border-2 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
                    <Hand className="w-12 h-12 text-hawk-amber mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Limit Reached</h3>
                    <p className="text-hawk-text-secondary text-sm mb-6">
                      You've hit your free limit of {maxManualFree} manual trades this month. Upgrade to unlock unlimited manual simulation!
                    </p>
                    <button className="btn-primary w-full shadow-lg shadow-hawk-green/20">Upgrade to Pro</button>
                  </div>
                </div>
              )}
              <div className="absolute inset-0">
                <TradingViewWidget
                   widgetConfig={advancedChartConfig}
                   containerId="backtest-chart-manual"
                   height="100%"
                />
              </div>
            </div>

            {/* RIGHT SIDEBAR: Execution */}
            <div className="w-full lg:w-[340px] bg-hawk-bg flex flex-col shrink-0 order-1 lg:order-2 h-[50vh] lg:h-full border-b lg:border-b-0 border-hawk-border">
               <div className="flex border-b border-hawk-border shrink-0 px-2 pt-2">
                 <button 
                   className={`flex-1 pb-3 text-xs font-bold border-b-2 transition-colors ${sidebarTab === 'execution' ? 'border-hawk-blue text-white' : 'border-transparent text-hawk-text-secondary hover:text-white'}`} 
                   onClick={() => setSidebarTab('execution')}
                 >
                   Execution
                 </button>
                 <button 
                   className={`flex-1 pb-3 text-xs font-bold border-b-2 transition-colors flex items-center justify-center gap-1.5 ${sidebarTab === 'analytics' ? 'border-hawk-purple text-hawk-purple' : 'border-transparent text-hawk-text-secondary hover:text-white'}`} 
                   onClick={() => setSidebarTab('analytics')}
                 >
                   <Sparkles className="w-3.5 h-3.5" /> AI Analytics
                 </button>
               </div>

               <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                 {sidebarTab === 'execution' ? (
                    <div className="flex flex-col space-y-5 animate-fade-in">
                       <div className="flex items-center justify-between bg-hawk-surface-2 px-4 py-3 rounded-xl border border-hawk-border">
                         <div>
                           <div className="text-[10px] text-hawk-text-muted uppercase tracking-wider font-bold mb-0.5">Account Balance</div>
                           <div className="text-lg font-bold text-white">$10,000.00</div>
                         </div>
                         <div className="text-right">
                           <div className="text-[10px] text-hawk-text-muted uppercase tracking-wider font-bold mb-0.5">Equity</div>
                           <div className="text-lg font-bold text-hawk-green">$10,450.00</div>
                         </div>
                       </div>
                       
                       <div className="space-y-4">
                         <h4 className="text-xs font-bold text-hawk-text-secondary uppercase tracking-wider">Order Setup</h4>
                         
                         <div className="grid grid-cols-2 gap-3">
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Risk (%)</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border rounded-lg overflow-hidden px-3 py-2">
                                <input type="text" defaultValue="1.0" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                                <span className="text-hawk-text-secondary text-xs">%</span>
                             </div>
                           </div>
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Lots</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border rounded-lg overflow-hidden px-3 py-2">
                                <input type="text" defaultValue="0.5" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                         </div>

                         <div className="grid grid-cols-2 gap-3">
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Take Profit</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border rounded-lg overflow-hidden px-3 py-2">
                                <input type="text" placeholder="Price" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Stop Loss</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border rounded-lg overflow-hidden px-3 py-2">
                                <input type="text" placeholder="Price" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                         </div>

                         <div className="grid grid-cols-2 gap-3 pt-2">
                           <button onClick={logManualTrade} className="bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF3B30] font-bold py-3 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(255,59,48,0.1)]">
                             <span className="text-sm">Sell Market</span>
                             <span className="text-[10px] font-normal opacity-80 mt-0.5">Bid: 64,230.50</span>
                           </button>
                           <button onClick={logManualTrade} className="bg-[#34C759]/10 border border-[#34C759]/30 text-[#34C759] font-bold py-3 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(52,199,89,0.1)]">
                             <span className="text-sm">Buy Market</span>
                             <span className="text-[10px] font-normal opacity-80 mt-0.5">Ask: 64,232.10</span>
                           </button>
                         </div>
                       </div>
                    </div>
                 ) : (
                    <div className="flex flex-col space-y-5 animate-fade-in">
                       <div className="bg-hawk-purple/10 border border-hawk-purple/20 rounded-xl p-4 relative overflow-hidden">
                         <div className="absolute -right-4 -top-4"><Brain className="w-24 h-24 text-hawk-purple/10" /></div>
                         <h4 className="text-sm font-bold text-hawk-purple mb-1 relative z-10 flex items-center gap-2">Hawk AI Review</h4>
                         <p className="text-xs text-white/80 mb-4 relative z-10 leading-relaxed">Analyzing your recent backtest sessions.</p>
                         <div className="grid grid-cols-2 gap-3 relative z-10">
                           <div className="bg-black/40 border border-hawk-purple/20 rounded-lg p-3 backdrop-blur-sm">
                             <div className="text-[9px] uppercase tracking-wider text-hawk-text-muted mb-1">Model Adherence</div>
                             <div className="text-lg font-bold text-[#34C759]">85%</div>
                           </div>
                           <div className="bg-black/40 border border-hawk-purple/20 rounded-lg p-3 backdrop-blur-sm">
                             <div className="text-[9px] uppercase tracking-wider text-hawk-text-muted mb-1">Risk Management</div>
                             <div className="text-lg font-bold text-hawk-amber">72%</div>
                           </div>
                         </div>
                       </div>
                    </div>
                 )}
               </div>
            </div>
          </div>
        )}

        {/* ==========================================
            VIEW 3: AI ALGO BUILDER
            ========================================== */}
        {activeView === 'algo' && (
          <div className="flex flex-col lg:flex-row w-full h-full animate-fade-in">
            
            {/* Left Sidebar: Prompt Input */}
            <div className="w-full lg:w-[400px] border-b lg:border-r border-hawk-border flex flex-col shrink-0 bg-hawk-bg h-[40vh] lg:h-full">
              <div className="bg-hawk-surface border-b border-hawk-border px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-hawk-green" />
                  <span className="text-sm font-bold text-white">Strategy Prompt</span>
                </div>
                <span className="badge badge-purple text-[10px]">ELITE</span>
              </div>

              <div className="flex-1 relative flex flex-col p-5 overflow-hidden">
                <p className="text-xs text-hawk-text-secondary mb-4 leading-relaxed shrink-0">Describe your trading setup in plain English. Hawk AI will code and execute it directly on the chart.</p>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Buy when 50 EMA crosses over 200 EMA..."
                  className="w-full flex-1 bg-hawk-surface-2 border border-hawk-border focus:border-hawk-green/50 rounded-xl p-4 text-white text-sm leading-relaxed resize-none outline-none transition-colors shadow-inner min-h-[100px]"
                />
              </div>

              <div className="p-5 border-t border-hawk-border bg-hawk-surface shrink-0">
                <button 
                  onClick={runAiBuilder}
                  disabled={algoStatus !== 'idle' || !isPro}
                  className={`btn-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold ${
                    algoStatus !== 'idle' ? 'opacity-75 cursor-wait' : 'shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  }`}
                >
                  {algoStatus !== 'idle' ? (
                    <><RotateCcw className="w-5 h-5 animate-spin" /> Building...</>
                  ) : (
                    <><Play className="w-5 h-5 fill-current" /> Generate & Backtest</>
                  )}
                </button>
              </div>
            </div>

            {/* Results Dashboard & Chart Area */}
            <div className="flex-1 flex flex-col relative bg-[#0B0E14] h-[60vh] lg:h-full overflow-y-auto">
              {!isPro && <PaywallOverlay message="The AI Algo Builder requires Elite." />}

              {algoStatus === 'idle' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-50 relative min-h-[300px]">
                   <div className="absolute inset-0 border-[4px] border-dashed border-hawk-border-2 m-8 rounded-3xl" />
                  <Cpu className="w-16 h-16 text-hawk-text-muted mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">Awaiting Instructions</h3>
                  <p className="text-sm text-hawk-text-secondary max-w-sm mx-auto">
                    Type your strategy. We'll handle the algorithmic coding and visualize the backtest.
                  </p>
                </div>
              )}

              {algoStatus === 'generating' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-green blur-2xl opacity-20 rounded-full animate-pulse" />
                    <Sparkles className="w-12 h-12 text-hawk-green animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Writing Code...</h3>
                </div>
              )}

              {algoStatus === 'compiling' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-purple blur-2xl opacity-20 rounded-full animate-pulse" />
                    <Activity className="w-12 h-12 text-hawk-purple animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Executing Engine...</h3>
                </div>
              )}

              {algoStatus === 'success' && (
                <div className="flex-1 flex flex-col animate-fade-in p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                      <TrendingUp className="w-6 h-6 text-hawk-green" /> AI Strategy Report
                    </h3>
                    <button onClick={reset} className="text-xs font-bold border border-hawk-border px-3 py-1.5 rounded-lg bg-hawk-surface">Clear</button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Net Profit', val: '+$4,250', color: 'text-hawk-green' },
                      { label: 'Total Trades', val: '184', color: 'text-white' },
                      { label: 'Win Rate', val: '58.2%', color: 'text-white' },
                      { label: 'Drawdown', val: '-6.1%', color: 'text-hawk-amber' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-hawk-surface-2 rounded-xl p-5 border border-hawk-border">
                        <div className="text-[11px] uppercase tracking-wider text-hawk-text-muted font-bold mb-2">{stat.label}</div>
                        <div className={`font-bold text-xl md:text-2xl ${stat.color}`}>{stat.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-[300px] mb-6 bg-hawk-surface/30 rounded-xl border border-hawk-border p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockResultsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorEq" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2A3441" vertical={false} />
                        <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="equity" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorEq)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
