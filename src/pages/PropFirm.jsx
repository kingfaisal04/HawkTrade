import React from 'react'
import { 
  ShieldAlert, TrendingDown, Target, Zap, Building2, 
  AlertTriangle, Plus, Brain, ArrowUpRight, ArrowDownRight,
  RefreshCw, CheckCircle2, XCircle
} from 'lucide-react'
import { useUser } from '../context/UserContext'
import PaywallOverlay from '../components/ui/PaywallOverlay'

const mockAccounts = [
  {
    id: 1,
    name: 'Apex 50k Evaluation',
    status: 'ACTIVE',
    balance: 51200,
    target: 53000,
    startBalance: 50000,
    dailyLossLimit: 50000, // Hard stop at 50k for the day if balance drops
    maxDrawdown: 47500, // trailing
    todayPnL: 450,
    daysTraded: 5,
    minDays: 7
  },
  {
    id: 2,
    name: 'Topstep 100k Combine',
    status: 'PASSED',
    balance: 106100,
    target: 106000,
    startBalance: 100000,
    dailyLossLimit: 100000,
    maxDrawdown: 97000,
    todayPnL: 1200,
    daysTraded: 8,
    minDays: 5,
    proOnly: true
  },
  {
    id: 3,
    name: 'FTMO 200k Challenge',
    status: 'FAILED',
    balance: 188000,
    target: 220000,
    startBalance: 200000,
    dailyLossLimit: 190000,
    maxDrawdown: 180000,
    todayPnL: -2500,
    daysTraded: 1,
    minDays: 4,
    proOnly: true
  }
]

export default function PropFirm() {
  const { isPro } = useUser()

  return (
    <div className="pt-24 pb-12 page-container animate-fade-in relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-hawk-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* ─── Header ─── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-hawk-blue" />
            Prop Firm Tracking
          </h1>
          <p className="text-hawk-text-secondary">Track evaluations, manage drawdowns, and secure your payouts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Sync Accounts
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Connect Account
          </button>
        </div>
      </div>

      {/* ─── AI Risk Guard Module ─── */}
      <div className="glass-strong rounded-2xl border border-hawk-amber/30 p-1 mb-8 relative z-10 shadow-[0_0_40px_rgba(245,158,11,0.05)] overflow-hidden">
        {/* Animated Gradient Border Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hawk-amber to-transparent animate-[draw-line_3s_linear_infinite]" />
        
        {!isPro && <PaywallOverlay message="AI Risk Guard is an Elite feature." mini={true} />}
        
        <div className={`p-5 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center transition-opacity duration-300 ${!isPro ? 'opacity-20' : ''}`}>
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-hawk-amber/20 to-hawk-red/20 flex items-center justify-center border border-hawk-amber/30 relative">
              <Brain className="w-7 h-7 text-hawk-amber" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hawk-amber opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-hawk-amber"></span>
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-white text-lg">Hawk AI Risk Guard</h3>
              <span className="badge bg-hawk-amber/20 text-hawk-amber border border-hawk-amber/30 text-[10px]">MONITORING</span>
            </div>
            <p className="text-sm text-hawk-text-secondary leading-relaxed">
              <strong className="text-hawk-red-light flex items-center gap-1.5 inline-flex">
                <AlertTriangle className="w-4 h-4" /> WARNING:
              </strong> You are <strong className="text-white">$1,200</strong> away from your daily loss limit on your <strong className="text-white">Apex 50k Evaluation</strong>. You have taken 3 consecutive losses today. AI strongly recommends pausing trading for the rest of the session.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto flex flex-row md:flex-col gap-2">
             <button className="flex-1 btn-secondary border-hawk-amber/30 text-hawk-amber hover:bg-hawk-amber/10 py-2">Lock Account</button>
             <button className="flex-1 text-xs text-hawk-text-muted hover:text-white py-2 transition-colors">Dismiss</button>
          </div>
        </div>
      </div>

      {/* ─── Tracker Grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {mockAccounts.map((account) => {
          
          // Calculations
          const profitTargetPercent = Math.min(100, Math.max(0, ((account.balance - account.startBalance) / (account.target - account.startBalance)) * 100));
          
          const dailyLossDist = account.balance - account.dailyLossLimit;
          const dailyLossPercent = Math.max(0, Math.min(100, (dailyLossDist / (account.startBalance * 0.05)) * 100)); // Assuming ~5% max daily loss for visual scale
          
          const maxDrawdownDist = account.balance - account.maxDrawdown;
          const maxDrawdownPercent = Math.max(0, Math.min(100, (maxDrawdownDist / (account.startBalance * 0.10)) * 100)); // Assuming ~10% max trailing for visual scale

          return (
            <div key={account.id} className="glass rounded-xl border border-hawk-border p-6 relative overflow-hidden flex flex-col h-full group hover:border-hawk-blue/30 transition-colors">
              {account.proOnly && !isPro && (
                <PaywallOverlay message="Track unlimited prop firm accounts with Elite." />
              )}

              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-hawk-border/50">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">{account.name}</h3>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-bold uppercase tracking-wider ${
                    account.status === 'ACTIVE' ? 'bg-hawk-blue/10 text-hawk-blue border-hawk-blue/20' : 
                    account.status === 'FAILED' ? 'bg-hawk-red/10 text-hawk-red border-hawk-red/20' : 
                    'bg-hawk-green/10 text-hawk-green border-hawk-green/20'
                  }`}>
                    {account.status === 'ACTIVE' && <Activity className="w-3.5 h-3.5" />}
                    {account.status === 'PASSED' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {account.status === 'FAILED' && <XCircle className="w-3.5 h-3.5" />}
                    {account.status}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold flex items-center justify-end gap-1 ${account.todayPnL >= 0 ? 'text-hawk-green' : 'text-hawk-red-light'}`}>
                    {account.todayPnL >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    ${Math.abs(account.todayPnL).toLocaleString()}
                  </div>
                  <span className="text-xs font-medium text-hawk-text-muted">Today's P&L</span>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                
                {/* Balance vs Target */}
                <div className="p-4 bg-hawk-surface-2/50 rounded-xl border border-hawk-border">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-xs text-hawk-text-muted font-semibold uppercase tracking-wider block mb-1">Current Balance</span>
                      <span className="font-bold text-xl text-white">${account.balance.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-hawk-text-muted font-semibold uppercase tracking-wider block mb-1">Profit Target</span>
                      <span className="font-bold text-sm text-hawk-green">${account.target.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="w-full bg-hawk-surface-3 rounded-full h-2 mt-3 overflow-hidden border border-hawk-border/50">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-hawk-green to-hawk-green-light relative shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                      style={{ width: `${profitTargetPercent}%` }} 
                    />
                  </div>
                </div>

                {/* Drawdown Gauges */}
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold text-hawk-text-secondary uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-hawk-amber" /> Risk Management
                  </h4>
                  
                  {/* Daily Stop */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-hawk-text-secondary">Daily Loss Buffer</span>
                      <span className="font-bold text-white">${dailyLossDist.toLocaleString()} <span className="text-hawk-text-muted font-normal">until breach</span></span>
                    </div>
                    <div className="w-full bg-hawk-surface-3 rounded-full h-1.5 flex justify-end overflow-hidden">
                      <div 
                        className={`h-full rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)] ${dailyLossPercent < 20 ? 'bg-hawk-red-light' : 'bg-hawk-amber'}`} 
                        style={{ width: `${dailyLossPercent}%` }} 
                      />
                    </div>
                  </div>

                  {/* Max Drawdown */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-hawk-text-secondary">Max Trailing Drawdown</span>
                      <span className="font-bold text-white">${maxDrawdownDist.toLocaleString()} <span className="text-hawk-text-muted font-normal">until breach</span></span>
                    </div>
                    <div className="w-full bg-hawk-surface-3 rounded-full h-1.5 flex justify-end overflow-hidden">
                      <div 
                        className="bg-hawk-amber h-full rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)]" 
                        style={{ width: `${maxDrawdownPercent}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-hawk-border flex justify-between items-center text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-hawk-text-muted" />
                  <span className="text-hawk-text-secondary">Traded: <strong className="text-white">{account.daysTraded}</strong> / {account.minDays} days</span>
                </div>
                <button className="text-hawk-blue hover:text-hawk-blue-light text-xs font-bold uppercase tracking-wider transition-colors">
                  Details &rarr;
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {/* ─── AI Readiness Assessment (New Funding Feature) ─── */}
      <div className="flex items-center justify-between mb-4 relative z-10 mt-12">
        <h2 className="text-xl font-bold text-white flex items-center gap-2"><Target className="w-5 h-5 text-hawk-green" /> AI Readiness Assessment</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 mb-12">
        {/* Readiness Gauge */}
        <div className="glass rounded-xl border border-hawk-border p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-hawk-green"></div>
           <div className="w-32 h-32 rounded-full border-8 border-hawk-surface-2 flex items-center justify-center relative mb-4">
             <svg className="absolute inset-0 w-full h-full -rotate-90">
               <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="8" className="text-hawk-surface-3" />
               <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="351.85" strokeDashoffset={351.85 * (1 - 0.85)} className="text-hawk-green drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" strokeLinecap="round" />
             </svg>
             <div className="flex flex-col">
               <span className="text-3xl font-bold text-white">85%</span>
             </div>
           </div>
           <h3 className="font-bold text-white text-lg">Ready for $100k</h3>
           <p className="text-sm text-hawk-text-secondary mt-2">Your recent journal metrics indicate you have a high probability of passing a $100k evaluation.</p>
        </div>
        
        {/* Requirement Tracker */}
        <div className="lg:col-span-2 glass rounded-xl border border-hawk-border p-6 flex flex-col justify-center">
          <h3 className="font-bold text-white mb-4">Challenge Requirements Checklist</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-hawk-green" />
                <span className="text-sm font-medium text-white">Profit Factor {'>'} 1.5</span>
              </div>
              <span className="text-sm font-bold text-hawk-text-secondary">Current: <span className="text-hawk-green">1.8</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-hawk-border flex items-center justify-center" />
                <span className="text-sm font-medium text-white">30 Days Consistent Trading</span>
              </div>
              <span className="text-sm font-bold text-hawk-text-secondary">Current: <span className="text-hawk-amber">14 days</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-hawk-green" />
                <span className="text-sm font-medium text-white">Max Drawdown {'<'} 5%</span>
              </div>
              <span className="text-sm font-bold text-hawk-text-secondary">Current: <span className="text-hawk-green">2.1%</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-hawk-green" />
                <span className="text-sm font-medium text-white">Win Rate {'>'} 50%</span>
              </div>
              <span className="text-sm font-bold text-hawk-text-secondary">Current: <span className="text-hawk-green">60%</span></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ─── Partner Firms (New Funding Feature) ─── */}
      <div className="flex items-center justify-between mb-4 relative z-10 mt-12">
        <h2 className="text-xl font-bold text-white flex items-center gap-2"><Building2 className="w-5 h-5 text-hawk-blue" /> Partner Firms</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { name: 'FTMO', size: '$100k', price: '$540', split: '80/20', active: true },
          { name: 'Topstep', size: '$50k', price: '$49/mo', split: '90/10', active: false },
          { name: 'FundingPips', size: '$100k', price: '$399', split: '80/20', active: false }
        ].map((firm, i) => (
          <div key={i} className="glass rounded-xl border border-hawk-border p-6 flex flex-col hover:border-hawk-blue/30 transition-colors">
            <h3 className="font-bold text-lg text-white mb-1">{firm.name}</h3>
            <p className="text-sm text-hawk-text-secondary mb-4">{firm.size} Evaluation</p>
            <div className="space-y-2 mb-6 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-hawk-text-muted">Fee</span>
                <span className="font-bold text-white">{firm.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-hawk-text-muted">Payout Split</span>
                <span className="font-bold text-white">{firm.split}</span>
              </div>
            </div>
            <button className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${firm.active ? 'btn-primary' : 'bg-hawk-surface-2 text-white hover:bg-hawk-surface-3 border border-hawk-border'}`}>
              {firm.active ? 'Start Challenge' : 'View Details'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Import Calendar (was missing)
import { Calendar, Activity } from 'lucide-react'
