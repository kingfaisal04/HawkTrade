import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react'
import { useUser } from '../context/UserContext'

const Pricing = () => {
  const [annual, setAnnual] = useState(false)
  const { isPro, togglePro } = useUser()

  return (
    <div className="pt-24 pb-20 page-container animate-fade-in relative overflow-hidden">
      {/* Background glow for pricing page */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-hawk-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="badge badge-green mb-6 text-sm py-1.5 px-4 inline-flex items-center gap-2 border border-hawk-green/20">
          <Sparkles className="w-4 h-4" />
          <span>Simple, Transparent Pricing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Trade like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-hawk-green to-hawk-green-light">Professional</span>
        </h1>
        <p className="text-hawk-text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Unlock the ultimate edge with advanced AI analytics, unlimited journaling, and automated prop firm tracking.
        </p>

        {/* ─── Custom Toggle ─── */}
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
            Annually <span className="badge badge-green text-[10px] px-1.5 py-0.5">Save 20%</span>
          </button>
        </div>
      </div>

      {/* ─── Pricing Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        
        {/* Essential Tier */}
        <div className="glass rounded-2xl p-8 flex flex-col border border-hawk-border hover:border-hawk-border-2 transition-colors relative mt-4 md:mt-8">
          <h3 className="text-xl font-bold mb-2 text-white">Essential</h3>
          <p className="text-hawk-text-secondary text-sm mb-6 h-10">Better than the competition. Everything you need to start tracking.</p>
          <div className="mb-6 h-[52px]">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">${annual ? '15' : '19'}</span>
              <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
            </div>
            {annual && <div className="text-xs text-hawk-text-secondary mt-1 font-medium">Billed $180 yearly</div>}
          </div>
          <button className="btn-secondary w-full mb-8 py-3">Get Started</button>
          
          <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
            {[
              'Automated Journaling (500+ Brokers)', 
              'AI Performance Analytics', 
              '5 Active Accounts (Not just 1)', 
              '5 GB Data Storage (Not just 1GB)', 
              'Unlimited Playbooks (Not just 3)',
              'Mentor Mode (Up to 10 Invites)'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-hawk-surface-2 flex items-center justify-center shrink-0 border border-hawk-border">
                  <Check className="w-3 h-3 text-hawk-text-muted" />
                </div>
                <span className="text-hawk-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-hawk-border/20 text-center">
            <Link to="/features" className="text-sm font-medium text-hawk-text-secondary hover:text-white transition-colors inline-flex items-center gap-1">
              See all features <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Pro Tier (Highlighted) */}
        <div className="glass-strong rounded-2xl p-8 flex flex-col border border-hawk-green relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(16,185,129,0.15)] z-20 overflow-hidden">
          {/* Animated Glow Border Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hawk-green to-transparent animate-[draw-line_3s_linear_infinite]" />
          
          <div className="absolute top-0 right-0 bg-hawk-green text-black text-[10px] font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
            Most Popular
          </div>

          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
            Pro <Zap className="w-5 h-5 text-hawk-green fill-hawk-green/20" />
          </h3>
          <p className="text-hawk-text-secondary text-sm mb-6 h-10">Advanced analytics and unlimited capacity for serious traders.</p>
          
          <div className="mb-6 h-[52px]">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">${annual ? '29' : '35'}</span>
              <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
            </div>
            {annual && <div className="text-xs text-hawk-green mt-1 font-medium">Billed $348 yearly</div>}
          </div>
          
          <button onClick={togglePro} className="btn-primary w-full mb-8 py-3 shadow-lg shadow-hawk-green/20 text-base">
            {isPro ? 'Manage Subscription' : 'Upgrade to Pro'}
          </button>
          
          <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">Everything in Essential, plus:</p>
            {[
              'Unlimited Active Accounts',
              'Unlimited Data Storage',
              'Trade Replay Simulator',
              'Unlimited Backtesting Lab',
              'Advanced AI "Start My Day" Insights',
              'Mentor Mode (Unlimited Invites)'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-hawk-green/20 flex items-center justify-center shrink-0 border border-hawk-green/30">
                  <Check className="w-3 h-3 text-hawk-green" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-hawk-green/20 text-center">
            <Link to="/features" className="text-sm font-bold text-hawk-green hover:text-hawk-green-light transition-colors inline-flex items-center gap-1">
              See all features <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Elite Tier */}
        <div className="glass rounded-2xl p-8 flex flex-col border border-hawk-purple/50 relative hover:border-hawk-purple transition-colors mt-4 md:mt-8 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
            Elite <ShieldCheck className="w-5 h-5 text-hawk-purple" />
          </h3>
          <p className="text-hawk-text-secondary text-sm mb-6 h-10">The ultimate suite featuring Prop Firm tracking and Risk Guard.</p>
          
          <div className="mb-6 h-[52px]">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">${annual ? '39' : '49'}</span>
              <span className="text-hawk-text-secondary text-sm font-medium">/mo</span>
            </div>
            {annual && <div className="text-xs text-hawk-purple mt-1 font-medium">Billed $468 yearly</div>}
          </div>
          
          <button onClick={togglePro} className="btn-secondary w-full mb-8 py-3 hover:border-hawk-purple/50 hover:text-white transition-colors bg-hawk-purple/5">
            {isPro ? 'Upgrade to Elite' : 'Start Elite Trial'}
          </button>
          
          <div className="space-y-4 flex-1 pt-4 border-t border-hawk-border/50">
            <p className="text-xs font-bold text-hawk-purple uppercase tracking-wider mb-2">Everything in Pro, plus:</p>
            {[
              'Prop Firm Drawdown Monitor',
              'AI Risk Guard & Behavioral Coach',
              'Custom Metric Builder',
              'Copy Trading Integration',
              'Priority API Access',
              'VIP Support & Onboarding'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-hawk-purple/20 flex items-center justify-center shrink-0 border border-hawk-purple/30">
                  <Check className="w-3 h-3 text-hawk-purple" />
                </div>
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-hawk-purple/20 text-center">
            <Link to="/features" className="text-sm font-bold text-hawk-purple hover:text-white transition-colors inline-flex items-center gap-1">
              See all features <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing
