import React from 'react'
import { Activity, AreaChart, Bot, BrainCircuit, Crosshair, FolderSync, LineChart, Link2, Play, Repeat, Shield, Sparkles, Target, Users } from 'lucide-react'

const features = [
  {
    icon: <FolderSync className="w-8 h-8 text-hawk-green" />,
    title: "Automated Journaling",
    description: "Connect via API to over 500+ brokers and Prop Firms. Your trades, fees, and commissions are synced automatically in real-time, eliminating manual data entry forever.",
    highlight: "Supports 500+ Brokers"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-hawk-purple" />,
    title: "AI Performance Analytics",
    description: "Get 'Start My Day' insights tailored to your psychology. Our AI analyzes your history to pinpoint your strengths, weaknesses, and emotional triggers before you even place a trade.",
    highlight: "Hawk AI Behavioral Coach"
  },
  {
    icon: <Play className="w-8 h-8 text-blue-400" />,
    title: "Trade Replay Simulator",
    description: "Relive the market exactly as it happened. Practice executing your strategy on historical price action using our advanced tick-by-tick replay engine. Master your edge without risking capital.",
    highlight: "Tick-by-Tick Precision"
  },
  {
    icon: <Target className="w-8 h-8 text-red-400" />,
    title: "Playbooks & Custom Setups",
    description: "Categorize every trade with custom tags and build your personal 'Playbooks'. Visually compare what works and cut out what doesn't to achieve true consistency.",
    highlight: "Unlimited Playbooks"
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Mentor Mode",
    description: "Share your un-editable dashboard securely with your mentors or trading group. Allow them to leave direct notes on your trades to help you improve faster.",
    highlight: "Collaborative Growth"
  },
  {
    icon: <Shield className="w-8 h-8 text-hawk-green" />,
    title: "Prop Firm Tracker & Risk Guard",
    description: "Monitor multiple prop firm accounts from one dashboard. Hawk AI actively tracks your drawdowns and sends behavioral alerts when you're tilting or approaching limits.",
    highlight: "Protect Your Funded Accounts"
  },
  {
    icon: <Repeat className="w-8 h-8 text-purple-400" />,
    title: "Algorithmic Backtesting Lab",
    description: "Turn your ideas into data. Backtest your strategies across years of historical data to uncover your true Profit Factor, Win Rate, and Expected Value.",
    highlight: "Data-Driven Edge"
  },
  {
    icon: <AreaChart className="w-8 h-8 text-green-400" />,
    title: "Deep Performance Tracking",
    description: "Visualize your net profitability with multi-currency support, precise commission tracking, and advanced metrics (Sharpe Ratio, R-Multiple, Maximum Adverse Excursion).",
    highlight: "Institutional Metrics"
  }
]

const Features = () => {
  return (
    <div className="pt-24 pb-20 page-container animate-fade-in relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-hawk-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-hawk-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <div className="badge badge-green mb-6 text-sm py-1.5 px-4 inline-flex items-center gap-2 border border-hawk-green/20">
          <Sparkles className="w-4 h-4" />
          <span>The Ultimate Trading Arsenal</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-hawk-green to-hawk-green-light">Dominate</span> the Markets
        </h1>
        <p className="text-hawk-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
          We took the best features the industry has to offer, supercharged them with AI, and removed the limits. Discover why HawkTrade is the last trading platform you'll ever need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass rounded-2xl p-8 flex flex-col border border-hawk-border hover:border-hawk-border-2 hover:bg-hawk-surface-2/30 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-hawk-surface border border-hawk-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="badge bg-hawk-surface border border-hawk-border text-xs px-3 py-1 text-hawk-text-secondary">
                {feature.highlight}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-hawk-green transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-hawk-text-secondary leading-relaxed flex-1">
              {feature.description}
            </p>
            
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 max-w-4xl mx-auto relative z-10">
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center border border-hawk-green/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hawk-green/10 via-transparent to-hawk-purple/10" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Ready to level up your trading?</h2>
          <p className="text-hawk-text-secondary mb-8 text-lg relative z-10">Join thousands of traders who have found their edge with HawkTrade.</p>
          <a href="/pricing" className="btn-primary py-4 px-8 text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all relative z-10 inline-flex items-center gap-2">
            View Pricing <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Features
