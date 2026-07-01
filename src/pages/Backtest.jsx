import React, { useState, useEffect, useRef } from 'react'
import { 
  Play, Code2, Terminal, Activity, TrendingUp, AlertTriangle, 
  Cpu, RotateCcw, Hand, Sparkles, FastForward, CheckCircle2, ChevronRight,
  BarChart3, Crosshair, ShieldAlert, History, Brain
} from 'lucide-react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { useUser } from '../context/UserContext'
import PaywallOverlay from '../components/ui/PaywallOverlay'

/* ─── TradingView Widget Loader ─── */
function TradingViewWidget({ widgetConfig, containerId, height = '400px' }) {
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
    <div className="tradingview-widget-container" style={{ height }}>
      <div ref={containerRef} id={containerId} style={{ height: '100%' }} />
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
    <div className="pt-24 pb-12 page-container animate-fade-in relative">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative z-10">
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            Strategy <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-hawk-text-secondary">Simulate and optimize your edge in the markets.</p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center bg-hawk-surface-2 p-1 rounded-lg border border-hawk-border">
          <button 
            onClick={() => setMode('manual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === 'manual' ? 'bg-hawk-surface text-white shadow-sm' : 'text-hawk-text-secondary hover:text-white'
            }`}
          >
            <Hand className="w-4 h-4" /> Manual Simulator
          </button>
          <button 
            onClick={() => setMode('algo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === 'algo' ? 'bg-hawk-green/20 text-hawk-green shadow-sm' : 'text-hawk-text-secondary hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" /> AI Algo Builder
          </button>
        </div>
      </div>

      {mode === 'manual' ? (
        // ==========================================
        // MANUAL SIMULATOR MODE
        // ==========================================
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 relative z-10 animate-fade-in">
          
          {/* LEFT COLUMN: Chart */}
          <div className="xl:col-span-8 glass rounded-xl border-hawk-border-2 p-1 flex flex-col relative h-[700px]">
            
            {/* Free Tier Limits Overlay */}
            {!isPro && manualTrades >= maxManualFree && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 rounded-[inherit]" />
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
            <div className="flex-1 rounded-lg overflow-hidden relative border border-hawk-border/50">
              <TradingViewWidget
                 widgetConfig={advancedChartConfig}
                 containerId="backtest-chart"
                 height="100%"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar Dashboard */}
          <div className="xl:col-span-4 flex flex-col space-y-4">
             <div className="glass rounded-xl border-hawk-border-2 p-4 h-[700px] flex flex-col overflow-hidden">
                
                {/* Tabs */}
                <div className="flex border-b border-hawk-border mb-4">
                  <button 
                    className={`pb-2 px-4 text-sm font-bold border-b-2 transition-colors ${sidebarTab === 'execution' ? 'border-hawk-green text-hawk-green' : 'border-transparent text-hawk-text-secondary hover:text-white'}`} 
                    onClick={() => setSidebarTab('execution')}
                  >
                    Execution
                  </button>
                  <button 
                    className={`pb-2 px-4 text-sm font-bold border-b-2 transition-colors ${sidebarTab === 'analytics' ? 'border-hawk-purple text-hawk-purple' : 'border-transparent text-hawk-text-secondary hover:text-white'}`} 
                    onClick={() => setSidebarTab('analytics')}
                  >
                    AI Analytics
                  </button>
                </div>

                {sidebarTab === 'execution' ? (
                   // EXECUTION TAB
                   <div className="flex-1 flex flex-col space-y-6 animate-fade-in">
                      <div className="bg-hawk-surface-2 rounded-lg p-4 border border-hawk-border">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-bold text-white">Order Entry</h4>
                          <span className="text-xs text-hawk-text-secondary">Balance: <span className="text-white font-bold">$10,000</span></span>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs text-hawk-text-muted mb-1 block">Quantity (Lots)</label>
                            <div className="flex items-center bg-hawk-surface border border-hawk-border rounded overflow-hidden">
                               <button className="px-3 py-2 text-hawk-text-secondary hover:text-white hover:bg-hawk-surface-3 transition-colors">-</button>
                               <input type="text" value="1.00" readOnly className="w-full bg-transparent text-center text-white text-sm outline-none font-mono" />
                               <button className="px-3 py-2 text-hawk-text-secondary hover:text-white hover:bg-hawk-surface-3 transition-colors">+</button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={logManualTrade} className="bg-hawk-red/10 border border-hawk-red/30 hover:bg-hawk-red/20 text-hawk-red font-bold py-3 rounded transition-colors flex flex-col items-center justify-center">
                              <span className="text-sm">Sell Market</span>
                              <span className="text-xs font-normal opacity-80">Bid: 64,230.50</span>
                            </button>
                            <button onClick={logManualTrade} className="bg-hawk-green/10 border border-hawk-green/30 hover:bg-hawk-green/20 text-hawk-green font-bold py-3 rounded transition-colors flex flex-col items-center justify-center">
                              <span className="text-sm">Buy Market</span>
                              <span className="text-xs font-normal opacity-80">Ask: 64,232.10</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 bg-hawk-surface-2 rounded-lg p-4 border border-hawk-border flex flex-col">
                         <div className="flex items-center justify-between mb-3">
                           <h4 className="text-sm font-bold text-white flex items-center gap-2"><Activity className="w-4 h-4"/> Open Positions</h4>
                           <span className="text-xs text-hawk-text-muted">Trades: {manualTrades} / {isPro ? '∞' : maxManualFree}</span>
                         </div>
                         <div className="flex-1 flex flex-col items-center justify-center text-hawk-text-muted text-sm border-2 border-dashed border-hawk-border rounded-lg p-4 text-center">
                           No open positions. Enter a trade above to start tracking.
                         </div>
                      </div>
                   </div>
                ) : (
                   // AI ANALYTICS TAB
                   <div className="flex-1 flex flex-col space-y-6 overflow-y-auto pr-1 custom-scrollbar animate-fade-in">
                      
                      <div className="bg-hawk-purple/5 border border-hawk-purple/20 rounded-lg p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2"><Brain className="w-16 h-16 text-hawk-purple/10" /></div>
                        <h4 className="text-sm font-bold text-white mb-1 relative z-10 flex items-center gap-2">Hawk AI Review</h4>
                        <p className="text-xs text-hawk-text-secondary mb-4 relative z-10 leading-relaxed">Analyzing your recent backtest sessions for psychological and technical patterns.</p>
                        
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                          <div className="bg-hawk-surface border border-hawk-border rounded p-3">
                            <div className="text-[10px] uppercase tracking-wider text-hawk-text-muted mb-1">Model Adherence</div>
                            <div className="text-xl font-bold text-hawk-green">85%</div>
                            <div className="text-xs text-hawk-text-secondary mt-1">Excellent discipline</div>
                          </div>
                          <div className="bg-hawk-surface border border-hawk-border rounded p-3">
                            <div className="text-[10px] uppercase tracking-wider text-hawk-text-muted mb-1">Risk Management</div>
                            <div className="text-xl font-bold text-hawk-amber">72%</div>
                            <div className="text-xs text-hawk-text-secondary mt-1">Stops slightly wide</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><History className="w-4 h-4"/> Simulated Sessions</h4>
                        <div className="space-y-3">
                          {/* Session 1 */}
                          <div className="bg-hawk-surface-2 border border-hawk-border rounded-lg p-3 hover:border-hawk-border-2 transition-colors cursor-pointer">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-bold text-white">London Open - BTC</span>
                                <span className="badge bg-hawk-green/10 text-hawk-green border-hawk-green/20 text-[10px] px-2 py-0.5">+$450.00</span>
                             </div>
                             <div className="flex items-center justify-between text-xs text-hawk-text-secondary">
                                <span>4 Trades (75% WR)</span>
                                <span>2 hours ago</span>
                             </div>
                          </div>
                          
                          {/* Session 2 */}
                          <div className="bg-hawk-surface-2 border border-hawk-border rounded-lg p-3 hover:border-hawk-border-2 transition-colors cursor-pointer">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-bold text-white">NY Session - EURUSD</span>
                                <span className="badge bg-hawk-red/10 text-hawk-red border-hawk-red/20 text-[10px] px-2 py-0.5">-$120.00</span>
                             </div>
                             <div className="flex items-center justify-between text-xs text-hawk-text-secondary">
                                <span>2 Trades (0% WR)</span>
                                <span>Yesterday</span>
                             </div>
                             <div className="mt-3 text-[10.5px] text-hawk-amber bg-hawk-amber/5 px-2.5 py-2 rounded border border-hawk-amber/10 flex items-start gap-2 leading-tight">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 animate-fade-in">
          
          {/* Natural Language Input Panel */}
          <div className="lg:col-span-5 flex flex-col h-[700px]">
            <div className="glass rounded-xl border-hawk-border-2 flex-1 flex flex-col overflow-hidden">
              <div className="bg-hawk-surface-2 border-b border-hawk-border-2 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-hawk-green" />
                  <span className="text-sm font-medium text-white">Strategy Prompt</span>
                </div>
                <span className="badge badge-purple text-[10px]">ELITE</span>
              </div>

              <div className="flex-1 relative bg-hawk-surface p-4 flex flex-col">
                <p className="text-sm text-hawk-text-secondary mb-3">Describe your trading setup in plain English. Hawk AI will code and execute it.</p>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Buy when 50 EMA crosses over 200 EMA..."
                  className="w-full flex-1 bg-hawk-surface-2 border border-hawk-border-2 rounded-lg p-4 text-white text-sm leading-relaxed resize-none outline-none focus:border-hawk-green transition-colors"
                />
              </div>

              <div className="p-4 border-t border-hawk-border-2 bg-hawk-surface">
                <button 
                  onClick={runAiBuilder}
                  disabled={algoStatus !== 'idle' || !isPro}
                  className={`btn-primary w-full py-3 flex items-center justify-center gap-2 ${
                    algoStatus !== 'idle' ? 'opacity-75 cursor-wait' : ''
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
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-7 flex flex-col h-[700px] relative">
            <div className="glass rounded-xl border-hawk-border-2 flex-1 p-6 relative overflow-hidden flex flex-col">
              
              {!isPro && (
                <PaywallOverlay message="The AI Algo Builder and Code Execution requires the Elite subscription." />
              )}

              {algoStatus === 'idle' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-50">
                  <Cpu className="w-16 h-16 text-hawk-text-muted mb-4" />
                  <h3 className="text-xl font-bold mb-2">Awaiting Instructions</h3>
                  <p className="text-sm text-hawk-text-secondary max-w-sm mx-auto">
                    Type your strategy on the left. We'll handle the complex algorithmic coding.
                  </p>
                </div>
              )}

              {algoStatus === 'generating' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-green blur-xl opacity-20 rounded-full animate-pulse" />
                    <Sparkles className="w-12 h-12 text-hawk-green animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hawk AI is writing your code...</h3>
                  <div className="text-sm text-hawk-text-secondary font-mono bg-hawk-surface-2 p-4 rounded-lg mt-4 max-w-xs text-left animate-pulse">
                    <div className="text-hawk-green">const mss = ta.crossover(...)</div>
                    <div className="text-hawk-text-muted">const fvg = findFairValueGap(...)</div>
                    <div className="text-hawk-purple">if (mss && fvg) execute()</div>
                  </div>
                </div>
              )}

              {algoStatus === 'compiling' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-hawk-purple blur-xl opacity-20 rounded-full animate-pulse" />
                    <Activity className="w-12 h-12 text-hawk-purple animate-pulse relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Executing Engine...</h3>
                  <p className="text-sm text-hawk-text-secondary font-mono animate-pulse">
                    Running 10 years of historical tick data...
                  </p>
                </div>
              )}

              {algoStatus === 'success' && (
                <div className="flex-1 flex flex-col animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-hawk-green" />
                      AI Strategy Report
                    </h3>
                    <button onClick={reset} className="text-xs text-hawk-text-muted hover:text-white transition-colors">
                      Clear Results
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Net Profit', val: '+$4,250', sub: '+42.5%' },
                      { label: 'Total Trades', val: '184', sub: 'Completed' },
                      { label: 'Win Rate', val: '58.2%', sub: 'Avg RR 1:2.0' },
                      { label: 'Max Drawdown', val: '-6.1%', sub: 'Acceptable' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-hawk-surface-2 rounded-lg p-4 border border-hawk-border border-l-2 border-l-hawk-green">
                        <div className="text-xs text-hawk-text-muted mb-1">{stat.label}</div>
                        <div className="font-bold text-lg">{stat.val}</div>
                        <div className="text-[10px] text-hawk-text-secondary mt-1">{stat.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 min-h-[250px] w-full">
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
                </div>
              )}
            </div>

            <div className="mt-4 bg-hawk-amber/10 border border-hawk-amber/20 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-hawk-amber shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="text-hawk-amber block mb-1">AI Logic Note</strong>
                <p className="text-hawk-text-secondary">
                  The AI mapped your "ICT 2022" prompt to standard SMC criteria (Fair Value Gaps, Liquidity Sweeps). You can review the exact PineScript code generated in the settings panel.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}
