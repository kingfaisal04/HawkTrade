import { Link } from 'react-router-dom'
import { TrendingUp, BookOpen, NotebookPen, FlaskConical, BarChart3 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-hawk-border bg-hawk-surface/50">
      <div className="page-container py-8 md:py-12">
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
                {
                  label: 'Instagram',
                  svg: (
                    <svg className="w-4 h-4 text-hawk-text-secondary group-hover:text-white group-hover:scale-110 transition-all" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  )
                },
                {
                  label: 'Facebook',
                  svg: (
                    <svg className="w-4 h-4 text-hawk-text-secondary group-hover:text-white group-hover:scale-110 transition-all" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                {
                  label: 'X (Twitter)',
                  svg: (
                    <svg className="w-3.5 h-3.5 text-hawk-text-secondary group-hover:text-white group-hover:scale-110 transition-all" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                }
              ].map(({ label, svg }) => (
                <button
                  key={label}
                  className="w-10 h-10 rounded-xl bg-hawk-surface-2 border border-hawk-border flex items-center justify-center text-hawk-text-secondary hover:text-white hover:bg-hawk-green/10 hover:border-hawk-green/50 transition-all shadow-sm group"
                  aria-label={label}
                  title={label}
                >
                  {svg}
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
