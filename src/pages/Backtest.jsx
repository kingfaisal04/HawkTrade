import React, { useState, useEffect, useRef } from 'react'
import { 
  Play, Code2, Terminal, Activity, TrendingUp, AlertTriangle, 
  Cpu, RotateCcw, Hand, Sparkles, FastForward, CheckCircle2, ChevronRight,
  BarChart3, Crosshair, ShieldAlert, History, Brain, Settings, Maximize2, LayoutDashboard
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
    backgroundColor: "#0B0E14", // Deeper dark for TradersCasa look
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
  { date: 'Jan', equity: 10000, dd: 0 },
  { date: 'Feb', equity: 9800, dd: -2 },
  { date: 'Mar', equity: 10400, dd: 0 },
  { date: 'Apr', equity: 10200, dd: -1.9 },
  { date: 'May', equity: 11100, dd: 0 },
  { date: 'Jun', equity: 10900, dd: -1.8 },
  { date: 'Jul', equity: 12500, dd: 0 },
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

export default function Backtest() {
  const { isPro } = useUser()
  const [mode, setMode] = useState('manual') // 'manual' or 'algo'
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
    
    // Simulate AI converting text to code
    setTimeout(() => {
      setAlgoStatus('compiling')
      // Simulate engine running the code
      setTimeout(() => {
        setAlgoStatus('success')
      }, 2000)
    }, 2500)
  }

  const logManualTrade = () => {
    if (manualTrades < maxManualFree || isPro) {
      setManualTrades(prev => prev + 1)
    }
  }

  const reset = () => setAlgoStatus('idle')

  return (
    <div className="flex flex-col h-screen pt-16 bg-[#0B0E14] overflow-hidden">
      
      {/* Top Navigation Bar - Minimalist TradersCasa Style */}
      <div className="h-14 border-b border-hawk-border flex items-center justify-between px-6 bg-hawk-bg/80 backdrop-blur-md z-20 shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-hawk-green" />
            Strategy Lab
          </h1>
          <div className="h-4 w-[1px] bg-hawk-border mx-2"></div>
          
          {/* Mode Toggle Segment Control */}
          <div className="flex items-center bg-hawk-surface-2 rounded-lg p-0.5 border border-hawk-border-2">
            <button 
              onClick={() => setMode('manual')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                mode === 'manual' ? 'bg-hawk-surface text-white shadow-sm' : 'text-hawk-text-secondary hover:text-white'
              }`}
            >
              <Hand className="w-3.5 h-3.5" /> Manual Simulator
            </button>
            <button 
              onClick={() => setMode('algo')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                mode === 'algo' ? 'bg-hawk-green/20 text-hawk-green shadow-sm' : 'text-hawk-text-secondary hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> AI Algo Builder
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-hawk-text-secondary hover:text-white transition-colors bg-hawk-surface-2 rounded-lg border border-hawk-border">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 text-hawk-text-secondary hover:text-white transition-colors bg-hawk-surface-2 rounded-lg border border-hawk-border">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {mode === 'manual' ? (
          // ==========================================
          // MANUAL SIMULATOR MODE
          // ==========================================
          <div className="flex w-full h-full animate-fade-in relative">
            
            {/* MAIN CHART AREA */}
            <div className="flex-1 relative border-r border-hawk-border">
              {/* Free Tier Limits Overlay */}
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

              {/* TradingView Real Chart Area */}
              <div className="absolute inset-0">
                <TradingViewWidget
                   widgetConfig={advancedChartConfig}
                   containerId="backtest-chart-manual"
                   height="100%"
                />
              </div>
            </div>

            {/* RIGHT SIDEBAR: Execution & Analytics (Sleek Terminal Style) */}
            <div className="w-[340px] bg-hawk-bg flex flex-col shrink-0">
               {/* Tabs */}
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
                    // EXECUTION TAB
                    <div className="flex flex-col space-y-5 animate-fade-in">
                       {/* Account Info */}
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
                       
                       {/* Order Entry */}
                       <div className="space-y-4">
                         <h4 className="text-xs font-bold text-hawk-text-secondary uppercase tracking-wider">Order Setup</h4>
                         
                         <div className="grid grid-cols-2 gap-3">
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Risk (%)</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border focus-within:border-hawk-text-muted rounded-lg overflow-hidden px-3 py-2 transition-colors">
                                <input type="text" defaultValue="1.0" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                                <span className="text-hawk-text-secondary text-xs">%</span>
                             </div>
                           </div>
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Lots</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border focus-within:border-hawk-text-muted rounded-lg overflow-hidden px-3 py-2 transition-colors">
                                <input type="text" defaultValue="0.5" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                         </div>

                         <div className="grid grid-cols-2 gap-3">
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Take Profit</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border focus-within:border-hawk-text-muted rounded-lg overflow-hidden px-3 py-2 transition-colors">
                                <input type="text" placeholder="Price" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                           <div>
                             <label className="text-xs text-hawk-text-muted mb-1 block">Stop Loss</label>
                             <div className="flex items-center bg-hawk-surface border border-hawk-border focus-within:border-hawk-text-muted rounded-lg overflow-hidden px-3 py-2 transition-colors">
                                <input type="text" placeholder="Price" className="w-full bg-transparent text-white text-sm outline-none font-mono" />
                             </div>
                           </div>
                         </div>

                         <div className="grid grid-cols-2 gap-3 pt-2">
                           <button onClick={logManualTrade} className="bg-[#FF3B30]/10 hover:bg-[#FF3B30]/20 border border-[#FF3B30]/30 text-[#FF3B30] font-bold py-3 rounded-xl transition-colors flex flex-col items-center justify-center shadow-[0_0_15px_rgba(255,59,48,0.1)]">
                             <span className="text-sm">Sell Market</span>
                             <span className="text-[10px] font-normal opacity-80 mt-0.5">Bid: 64,230.50</span>
                           </button>
                           <button onClick={logManualTrade} className="bg-[#34C759]/10 hover:bg-[#34C759]/20 border border-[#34C759]/30 text-[#34C759] font-bold py-3 rounded-xl transition-colors flex flex-col items-center justify-center shadow-[0_0_15px_rgba(52,199,89,0.1)]">
                             <span className="text-sm">Buy Market</span>
                             <span className="text-[10px] font-normal opacity-80 mt-0.5">Ask: 64,232.10</span>
                           </button>
                         </div>
                       </div>

                       <div className="pt-4 border-t border-hawk-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold text-hawk-text-secondary uppercase tracking-wider">Open Positions</h4>
                            <span className="text-[10px] bg-hawk-surface-2 px-2 py-1 rounded text-hawk-text-muted border border-hawk-border">{manualTrades} / {isPro ? '∞' : maxManualFree}</span>
                          </div>
                          <div className="flex flex-col items-center justify-center text-hawk-text-muted text-xs border border-dashed border-hawk-border-2 rounded-xl py-8 text-center bg-hawk-surface/50">
                            No open positions. Enter a trade above.
                          </div>
                       </div>
                    </div>
                 ) : (
                    // AI ANALYTICS TAB
                    <div className="flex flex-col space-y-5 animate-fade-in">
                       
                       <div className="bg-hawk-purple/10 border border-hawk-purple/20 rounded-xl p-4 relative overflow-hidden">
                         <div className="absolute -right-4 -top-4"><Brain className="w-24 h-24 text-hawk-purple/10" /></div>
                         <h4 className="text-sm font-bold text-hawk-purple mb-1 relative z-10 flex items-center gap-2">Hawk AI Review</h4>
                         <p className="text-xs text-white/80 mb-4 relative z-10 leading-relaxed">Analyzing your recent backtest sessions for psychological and technical patterns.</p>
                         
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

                       <div>
                         <h4 className="text-xs font-bold text-hawk-text-secondary uppercase tracking-wider mb-3">Simulated Sessions</h4>
                         <div className="space-y-3">
                           {/* Session 1 */}
                           <div className="bg-hawk-surface-2 border border-hawk-border rounded-xl p-3 hover:border-hawk-border-2 transition-colors cursor-pointer group">
                              <div className="flex justify-between items-center mb-1">
                                 <span className="text-sm font-bold text-white group-hover:text-hawk-blue transition-colors">London Open - BTC</span>
                                 <span className="text-[#34C759] text-xs font-bold">+$450.00</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-hawk-text-secondary">
                                 <span>4 Trades (75% WR)</span>
                                 <span>2h ago</span>
                              </div>
                           </div>
                           
                           {/* Session 2 */}
                           <div className="bg-hawk-surface-2 border border-hawk-border rounded-xl p-3 hover:border-hawk-border-2 transition-colors cursor-pointer group">
                              <div className="flex justify-between items-center mb-1">
                                 <span className="text-sm font-bold text-white group-hover:text-hawk-blue transition-colors">NY Session - EURUSD</span>
                                 <span className="text-[#FF3B30] text-xs font-bold">-$120.00</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-hawk-text-secondary">
                                 <span>2 Trades (0% WR)</span>
                                 <span>Yesterday</span>
                              </div>
                              <div className="mt-3 text-[10.5px] text-hawk-amber bg-hawk-amber/5 px-2.5 py-2 rounded-lg border border-hawk-amber/20 flex items-start gap-2 leading-tight">
                                 <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                 <div>
                                   <span className="font-bold block mb-0.5">Hawk AI Flag:</span>
                                   You chased the breakout. Wait for FVG retests.
                                 </div>
                              </div>
                           </div>
                         </div>
                       </div>

                    </div>
                 )}
               </div>
            </div>
          </div>
        ) : (
          // ==========================================
          // AI ALGO BUILDER MODE
          // ==========================================
          <div className="flex w-full h-full animate-fade-in">
            
            {/* Natural Language Input Panel (Left Sidebar) */}
            <div className="w-[400px] border-r border-hawk-border flex flex-col shrink-0 bg-hawk-bg">
              <div className="bg-hawk-surface border-b border-hawk-border px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-hawk-green" />
                  <span className="text-sm font-bold text-white">Strategy Prompt</span>
                </div>
                <span className="badge badge-purple text-[10px]">ELITE</span>
              </div>

              <div className="flex-1 relative flex flex-col p-5">
                <p className="text-xs text-hawk-text-secondary mb-4 leading-relaxed">Describe your trading setup in plain English. Hawk AI will code and execute it directly on the chart.</p>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Buy when 50 EMA crosses over 200 EMA..."
                  className="w-full flex-1 bg-hawk-surface-2 border border-hawk-border focus:border-hawk-green/50 rounded-xl p-4 text-white text-sm leading-relaxed resize-none outline-none transition-colors shadow-inner"
                />
              </div>

              <div className="p-5 border-t border-hawk-border bg-hawk-surface">
                <button 
                  onClick={runAiBuilder}
                  disabled={algoStatus !== 'idle' || !isPro}
                  className={`btn-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold ${
                    algoStatus !== 'idle' ? 'opacity-75 cursor-wait' : 'shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  }`}
                >
                  {algoStatus !== 'idle' ? (
                    <>
                      <RotateCcw className="w-5 h-5 animate-spin" />
                      Building Strategy...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      Generate & Backtest
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results Dashboard & Chart Area */}
            <div className="flex-1 flex flex-col relative bg-[#0B0E14]">
              
              {!isPro && (
                <PaywallOverlay message="The AI Algo Builder and Code Execution requires the Elite subscription." />
              )}

              {algoStatus === 'idle' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-50 relative">
                   <div className="absolute inset-0 border-[4px] border-dashed border-hawk-border-2 m-8 rounded-3xl" />
                  <Cpu className="w-16 h-16 text-hawk-text-muted mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">Awaiting Instructions</h3>
                  <p className="text-sm text-hawk-text-secondary max-w-sm mx-auto">
                    Type your strategy on the left. We'll handle the complex algorithmic coding and visualize the backtest.
                  </p>
                </div>
              )}

              {algoStatus === 'generating' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-green blur-2xl opacity-20 rounded-full animate-pulse" />
                    <Sparkles className="w-12 h-12 text-hawk-green animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Hawk AI is writing your code...</h3>
                  <div className="text-sm text-hawk-text-secondary font-mono bg-[#0F131A] border border-hawk-border-2 p-5 rounded-xl mt-4 max-w-sm text-left animate-pulse shadow-2xl">
                    <div className="text-hawk-green mb-1">const mss = ta.crossover(...)</div>
                    <div className="text-hawk-text-muted mb-1">const fvg = findFairValueGap(...)</div>
                    <div className="text-hawk-purple">if (mss && fvg) execute()</div>
                  </div>
                </div>
              )}

              {algoStatus === 'compiling' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-purple blur-2xl opacity-20 rounded-full animate-pulse" />
                    <Activity className="w-12 h-12 text-hawk-purple animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Executing Engine...</h3>
                  <p className="text-sm text-hawk-text-secondary font-mono animate-pulse">
                    Running 10 years of historical tick data...
                  </p>
                </div>
              )}

              {algoStatus === 'success' && (
                <div className="flex-1 flex flex-col animate-fade-in p-6 overflow-y-auto custom-scrollbar">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                      <TrendingUp className="w-6 h-6 text-hawk-green" />
                      AI Strategy Report
                    </h3>
                    <button onClick={reset} className="text-xs font-bold text-hawk-text-muted hover:text-white transition-colors border border-hawk-border px-3 py-1.5 rounded-lg bg-hawk-surface">
                      Clear Results
                    </button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Net Profit', val: '+$4,250', sub: '+42.5%', color: 'text-hawk-green' },
                      { label: 'Total Trades', val: '184', sub: 'Completed', color: 'text-white' },
                      { label: 'Win Rate', val: '58.2%', sub: 'Avg RR 1:2.0', color: 'text-white' },
                      { label: 'Max Drawdown', val: '-6.1%', sub: 'Acceptable', color: 'text-hawk-amber' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-hawk-surface-2 rounded-xl p-5 border border-hawk-border shadow-lg">
                        <div className="text-[11px] uppercase tracking-wider text-hawk-text-muted font-bold mb-2">{stat.label}</div>
                        <div className={`font-bold text-2xl ${stat.color}`}>{stat.val}</div>
                        <div className="text-xs text-hawk-text-secondary mt-2">{stat.sub}</div>
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
                        <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="equity" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorEq)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-hawk-amber/10 border border-hawk-amber/20 rounded-xl p-5 flex items-start gap-4 shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-hawk-amber shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-hawk-amber block mb-2 text-sm">AI Logic Note</strong>
                      <p className="text-hawk-text-secondary text-sm leading-relaxed">
                        The AI mapped your "ICT 2022" prompt to standard SMC criteria (Fair Value Gaps, Liquidity Sweeps). You can review the exact PineScript code generated in the settings panel.
                      </p>
                    </div>
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
