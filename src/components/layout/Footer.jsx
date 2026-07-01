import { Link } from 'react-router-dom'
import { TrendingUp, BookOpen, NotebookPen, FlaskConical, BarChart3, Mail, MessageSquare, AtSign, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-hawk-border bg-hawk-surface/50">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded bg-hawk-green flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <span className="hawk-logo text-white text-xl">
                Hawk<span className="hawk-logo-icon">Trade</span>
              </span>
            </Link>
            <p className="text-hawk-text-secondary text-sm leading-relaxed mb-6">
              Master trading from basics to advanced concepts. Journal, backtest, and grow and sharpen your trading edge.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white tracking-wider uppercase">Platform</h4>
            <ul className="space-y-3">
              {[
                { to: '/markets', label: 'Markets', icon: BarChart3 },
                { to: '/learn', label: 'Learn', icon: BookOpen },
                { to: '/journal', label: 'Journal', icon: NotebookPen },
                { to: '/backtest', label: 'Backtest', icon: FlaskConical },
                { to: '/pricing', label: 'Pricing', icon: TrendingUp },
              ].map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-3 text-sm text-hawk-text-secondary hover:text-hawk-green transition-colors group">
                    <Icon className="w-4 h-4 text-hawk-text-muted group-hover:text-hawk-green transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white tracking-wider uppercase">Academy</h4>
            <ul className="space-y-3">
              {['Forex Basics', 'Technical Analysis', 'ICT Concepts', 'Order Flow', 'Trading Psychology'].map((item) => (
                <li key={item}>
                  <Link to="/learn" className="text-sm text-hawk-text-secondary hover:text-hawk-green transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white tracking-wider uppercase">Follow Us</h4>
            <div className="flex gap-3 mb-8">
              {[
                { icon: AtSign, label: 'X (Twitter)' },
                { icon: MessageSquare, label: 'Discord' },
                { icon: Globe, label: 'Instagram' },
                { icon: Mail, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-10 h-10 rounded-xl bg-hawk-surface-2 border border-hawk-border flex items-center justify-center text-hawk-text-secondary hover:text-white hover:bg-hawk-green/10 hover:border-hawk-green/50 transition-all shadow-sm group"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3 text-white tracking-wider uppercase">Newsletter</h4>
              <div className="flex relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-hawk-surface border border-hawk-border rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-hawk-green transition-colors"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-hawk-green text-black px-4 rounded-md text-sm font-bold hover:bg-hawk-green-light transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-hawk-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-hawk-text-muted">
            © {new Date().getFullYear()} HawkTrade. All rights reserved. Built for professional traders.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-hawk-text-muted hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-hawk-text-muted hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
