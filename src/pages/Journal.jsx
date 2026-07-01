import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { 
  BarChart3, Calendar, Filter, Download, ArrowUpRight, ArrowDownRight, 
  Wallet, Target, TrendingUp, Activity, Plus, ArrowRight, Brain, BookOpen,
  Tag, ListFilter, RotateCcw, Crosshair
} from 'lucide-react'
import { useUser } from '../context/UserContext'
import PaywallOverlay from '../components/ui/PaywallOverlay'
import ImportModal from '../components/ui/ImportModal'
import TradeReplayModal from '../components/ui/TradeReplayModal'

const mockEquityData = [
  { date: 'Mon', equity: 10000, pnl: 0 },
  { date: 'Tue', equity: 10150, pnl: 150 },
  { date: 'Wed', equity: 9950, pnl: -200 },
  { date: 'Thu', equity: 10450, pnl: 500 },
  { date: 'Fri', equity: 10300, pnl: -150 },
  { date: 'Sat', equity: 10850, pnl: 550 },
  { date: 'Sun', equity: 11200, pnl: 350 },
]

const recentTrades = [
  { id: 'TRD-001', pair: 'BTC/USD', side: 'Long', entry: '64,230', exit: '65,100', pnl: 450, win: true, date: 'Today', setup: 'Breakout', tags: ['A+ Setup', 'Trend Following'] },
  { id: 'TRD-002', pair: 'EUR/USD', side: 'Short', entry: '1.0924', exit: '1.0940', pnl: -120, win: false, date: 'Today', setup: 'Mean Reversion', tags: ['FOMO', 'Friday Drop'] },
  { id: 'TRD-003', pair: 'AAPL', side: 'Long', entry: '173.50', exit: '178.20', pnl: 850, win: true, date: 'Yesterday', setup: 'Earnings Play', tags: ['Perfect Execution'] },
  { id: 'TRD-004', pair: 'XAU/USD', side: 'Long', entry: '2,340', exit: '2,355', pnl: 600, win: true, date: 'Yesterday', setup: 'Breakout', tags: ['Gold Rush'] },
]

const playbookStats = [
  { setup: 'Breakout', winRate: 72, pnl: '+$4,200', count: 45 },
  { setup: 'Mean Reversion', winRate: 41, pnl: '-$850', count: 22 },
  { setup: 'Supply/Demand', winRate: 65, pnl: '+$2,100', count: 38 },
]

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isPositive = payload[0].payload.pnl >= 0
    return (
      <div className="glass-strong p-3 rounded-xl border border-hawk-border shadow-2xl">
        <p className="text-hawk-text-secondary text-xs mb-1">{label}</p>
        <p className="text-white font-bold text-lg">${payload[0].value.toLocaleString()}</p>
        <div className={`text-xs mt-1 font-bold inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${isPositive ? 'bg-hawk-green/20 text-hawk-green' : 'bg-hawk-red/20 text-hawk-red'}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          ${Math.abs(payload[0].payload.pnl)}
        </div>
      </div>
    )
  }
  return null
}

const Journal = () => {
  const { isPro } = useUser()
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [activeReplayTrade, setActiveReplayTrade] = useState(null)
  const [trades, setTrades] = useState(recentTrades)

  const handleImportSuccess = () => {
    const importedTrades = [
      { id: 'TRD-142', pair: 'NQ1!', side: 'Long', entry: '19,450', exit: '19,510', pnl: 1200, win: true, date: 'Just Now', setup: 'Breakout', tags: ['Session Open'] },
      { id: 'TRD-141', pair: 'ES1!', side: 'Short', entry: '5,210', exit: '5,200', pnl: 500, win: true, date: 'Just Now', setup: 'Supply/Demand', tags: ['Rejection'] },
      ...trades
    ]
    setTrades(importedTrades)
  }

  return (
    <div className="pt-24 pb-12 page-container animate-fade-in relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* ─── Header Actions ─── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 relative z-10">
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-hawk-green" />
            Trading Journal
          </h1>
          <p className="text-hawk-text-secondary">Track, analyze, and optimize your performance with AI.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="glass hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-hawk-border text-sm">
            <Calendar className="w-4 h-4 text-hawk-text-muted" />
            <span className="text-hawk-text-secondary">Last 30 Days</span>
            <ListFilter className="w-4 h-4 text-hawk-text-muted ml-2 cursor-pointer hover:text-white" />
          </div>
          <button 
            onClick={() => setIsImportModalOpen(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Sync Broker
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Trade
          </button>
        </div>
      </div>

      {/* ─── The AI Coach & Academy Bridge (Hero Feature) ─── */}
      <div className="glass-strong rounded-2xl border border-hawk-border p-1 mb-8 relative z-10 shadow-[0_0_40px_rgba(16,185,129,0.05)] overflow-hidden">
        {/* Animated Gradient Border Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hawk-green to-transparent animate-[draw-line_3s_linear_infinite]" />
        
        {!isPro && <PaywallOverlay message="Deep Behavioral Insights are for Elite users." mini={true} />}
        
        <div className={`p-6 flex flex-col lg:flex-row gap-8 items-start lg:items-center transition-opacity duration-300 ${!isPro ? 'opacity-20' : ''}`}>
          
          {/* AI Avatar & Title */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hawk-green/20 to-hawk-blue/20 flex items-center justify-center border border-hawk-green/30 relative">
              <Brain className="w-8 h-8 text-hawk-green" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hawk-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-hawk-green"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-xl">HawkTrade AI Coach</h3>
                <span className="badge badge-green text-[10px]">ELITE</span>
              </div>
              <span className="text-sm text-hawk-text-muted">Analyzing your last 50 trades...</span>
            </div>
          </div>

          {/* The Insight */}
          <div className="flex-1 border-l-2 border-hawk-border pl-6 lg:pl-8 py-2">
            <h4 className="text-hawk-red-light font-bold text-sm mb-2 flex items-center gap-2">
              <Crosshair className="w-4 h-4" /> Critical Leak Detected: Friday Reversals
            </h4>
            <p className="text-sm text-hawk-text-secondary leading-relaxed">
              You perform <strong className="text-white">41% worse on Fridays</strong> compared to the rest of the week, specifically when trading <strong className="text-white">Mean Reversion</strong> setups. You are consistently giving back mid-week profits by forcing trades in low-volume sessions.
            </p>
          </div>

          {/* The Academy Bridge CTA */}
          <div className="shrink-0 w-full lg:w-auto">
            <Link to="/learn" className="group relative inline-flex items-center gap-3 bg-hawk-surface-2 border border-hawk-border hover:border-hawk-green/50 px-5 py-4 rounded-xl transition-all w-full lg:w-auto">
              <div className="w-10 h-10 rounded-full bg-hawk-green/10 flex items-center justify-center group-hover:bg-hawk-green/20 transition-colors">
                <BookOpen className="w-5 h-5 text-hawk-green" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-hawk-text-muted font-bold uppercase tracking-wider">Prescribed Lesson</span>
                <span className="text-sm font-bold text-white group-hover:text-hawk-green transition-colors flex items-center gap-1">
                  Mastering Friday Volatility <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Metrics Row ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative z-10">
        {[
          { label: 'Total P&L', value: '+$1,200', sub: '+12.0%', icon: <Wallet className="text-hawk-green w-5 h-5" />, up: true, proOnly: false },
          { label: 'Win Rate', value: '68%', sub: 'Last 50 trades', icon: <Target className="text-white w-5 h-5" />, up: true, proOnly: false },
          { label: 'Profit Factor', value: '2.4', sub: 'Gross Profit / Gross Loss', icon: <Activity className="text-hawk-blue w-5 h-5" />, up: true, proOnly: true },
          { label: 'Avg RR', value: '1:1.8', sub: 'Risk vs Reward', icon: <TrendingUp className="text-hawk-amber w-5 h-5" />, up: true, proOnly: true },
        ].map((stat, i) => (
          <div key={i} className="glass rounded-xl border border-hawk-border p-5 relative overflow-hidden group hover:border-hawk-green/30 transition-all">
            {/* Subtle glow behind metric */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity ${stat.up ? 'bg-hawk-green' : 'bg-hawk-red'}`} />
            
            {!isPro && stat.proOnly && <PaywallOverlay message="Pro Metric" mini={true} />}
            
            <div className={`transition-opacity duration-300 ${!isPro && stat.proOnly ? 'opacity-20' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-hawk-text-secondary text-sm font-medium">{stat.label}</span>
                <div className="p-2 bg-hawk-surface-2/50 rounded-lg border border-hawk-border group-hover:border-hawk-green/30 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <span className={`text-xs font-bold flex items-center px-1.5 py-0.5 rounded ${stat.up ? 'bg-hawk-green/10 text-hawk-green' : 'bg-hawk-red/10 text-hawk-red'}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.sub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* ─── Equity Curve ─── */}
        <div className="lg:col-span-2 glass rounded-xl border border-hawk-border p-6 flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-hawk-green" />
                Cumulative Equity
              </h2>
              <p className="text-xs text-hawk-text-muted mt-1">Your account growth over the selected period.</p>
            </div>
            <select className="bg-hawk-surface-2 border border-hawk-border text-sm rounded-lg px-3 py-2 text-white outline-none focus:border-hawk-green">
              <option>This Week</option>
              <option>This Month</option>
              <option>All Time</option>
            </select>
          </div>
          
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockEquityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(val) => `$${val/1000}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(16,185,129,0.2)', strokeWidth: 2 }} />
                <Area 
                  type="monotone" 
                  dataKey="equity" 
                  stroke="#10B981" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorEquity)" 
                  style={{ filter: 'drop-shadow(0px 4px 10px rgba(16,185,129,0.3))' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ─── Playbook / Setup Stats ─── */}
        <div className="glass rounded-xl border border-hawk-border p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Tag className="w-5 h-5 text-hawk-blue" />
                Playbook Performance
              </h2>
              <p className="text-xs text-hawk-text-muted mt-1">Win rates by setup tag.</p>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            {playbookStats.map((stat, i) => (
              <div key={i} className="p-4 bg-hawk-surface-2/50 rounded-xl border border-hawk-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-white">{stat.setup}</span>
                  <span className={`font-bold text-sm ${stat.pnl.startsWith('+') ? 'text-hawk-green' : 'text-hawk-red'}`}>
                    {stat.pnl}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-hawk-surface rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${stat.winRate > 50 ? 'bg-hawk-green' : 'bg-hawk-red'}`} 
                      style={{ width: `${stat.winRate}%` }} 
                    />
                  </div>
                  <span className="text-xs font-bold w-10 text-right">{stat.winRate}%</span>
                </div>
                <div className="text-[10px] text-hawk-text-muted mt-2 text-right">Based on {stat.count} trades</div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 btn-secondary py-2 text-sm">Manage Tags</button>
        </div>
      </div>

      {/* ─── Recent Trades Table ─── */}
      <div className="mt-6 mb-20 glass rounded-xl border border-hawk-border p-6 relative z-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-hawk-blue" />
              Trade Log
            </h2>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-hawk-text-muted" />
              <input 
                type="text" 
                placeholder="Search ticker, tag..." 
                className="w-full sm:w-64 bg-hawk-surface-2 border border-hawk-border rounded-lg pl-9 pr-3 py-2 text-sm text-white outline-none focus:border-hawk-green"
              />
            </div>
            <button className="btn-secondary px-3"><Filter className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="text-xs text-hawk-text-muted uppercase border-b border-hawk-border">
              <tr>
                <th className="pb-3 font-semibold">Instrument</th>
                <th className="pb-3 font-semibold">Side & Setup</th>
                <th className="pb-3 font-semibold">Entry / Exit</th>
                <th className="pb-3 font-semibold">Tags</th>
                <th className="pb-3 font-semibold text-right">Net P&L</th>
                <th className="pb-3 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hawk-border/50">
              {trades.map((trade) => (
                <tr key={trade.id} className="hover:bg-hawk-surface-2/30 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-8 rounded-full ${trade.win ? 'bg-hawk-green' : 'bg-hawk-red'}`}></div>
                      <div>
                        <div className="font-bold text-white">{trade.pair}</div>
                        <div className="text-[10px] text-hawk-text-muted">{trade.date} • {trade.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex flex-col gap-1 items-start">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${trade.side === 'Long' ? 'bg-hawk-green/10 text-hawk-green' : 'bg-hawk-red/10 text-hawk-red'}`}>
                        {trade.side}
                      </span>
                      <span className="text-xs text-hawk-text-secondary">{trade.setup}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2 text-hawk-text-secondary">
                      <span>{trade.entry}</span>
                      <ArrowRight className="w-3 h-3 text-hawk-text-muted" />
                      <span>{trade.exit}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-1">
                      {trade.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-hawk-surface-2 border border-hawk-border px-2 py-1 rounded text-hawk-text-secondary">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className={`font-bold ${trade.pnl > 0 ? 'text-hawk-green' : 'text-hawk-red'}`}>
                      {trade.pnl > 0 ? '+' : ''}${Math.abs(trade.pnl)}
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <button 
                      onClick={() => setActiveReplayTrade(trade)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-hawk-blue/10 hover:bg-hawk-blue/20 border border-hawk-blue/30 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Replay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
        onImportSuccess={handleImportSuccess}
      />
      
      <TradeReplayModal 
        trade={activeReplayTrade} 
        onClose={() => setActiveReplayTrade(null)} 
      />
    </div>
  )
}

// Ensure Search is imported from lucide-react (adding it here to avoid error)
import { Search } from 'lucide-react'

export default Journal
