import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp, BookOpen, NotebookPen, FlaskConical, BarChart3, CreditCard, Building2, Flame, Trophy, ChevronDown } from 'lucide-react'
import { useUser } from '../../context/UserContext'

const navLinks = [
  { path: '/markets', label: 'Markets', icon: BarChart3 },
  { path: '/learn', label: 'Learn', icon: BookOpen },
  { path: '/journal', label: 'Journal', icon: NotebookPen },
  { path: '/backtest', label: 'Backtest', icon: FlaskConical },
  { path: '/prop-firm', label: 'Prop Firm', icon: Building2 },
  { path: '/pricing', label: 'Pricing', icon: CreditCard },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isAuthenticated, login, logout, experienceLevel } = useUser()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="page-container flex justify-between items-center py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-hawk-green flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-black" />
          </div>
          <span className="hawk-logo text-white">
            Hawk<span className="hawk-logo-icon">Trade</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === path
                    ? 'text-hawk-green bg-hawk-green-glow'
                    : 'text-hawk-text-secondary hover:text-hawk-text hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <button onClick={login} className="text-sm font-medium text-hawk-text-secondary hover:text-white transition-colors">
                  Log in
                </button>
                <button onClick={login} className="btn-primary text-sm">
                  Get Started
                </button>
              </>
            ) : (
              <>
                {/* Gamification: Daily Streak */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm" title="14 Day Streak">
                  <Flame className="w-4 h-4" /> 14
                </div>
                
                {/* User Profile / Rank */}
                <div className="flex items-center gap-2 pl-2 border-l border-hawk-border ml-1 group cursor-pointer relative">
                  <div className="text-right hidden md:block">
                    <div className="text-sm font-bold text-white leading-tight">HawkTrader</div>
                    <div className="text-[10px] text-hawk-green font-bold uppercase tracking-wider flex items-center justify-end gap-1">
                      <Trophy className="w-3 h-3" /> {experienceLevel ? experienceLevel : 'Funded Trader'}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-hawk-surface-2 border-2 border-hawk-green overflow-hidden flex items-center justify-center relative">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hawk" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <ChevronDown className="w-4 h-4 text-hawk-text-secondary group-hover:text-white transition-colors" />
                  
                  {/* Dropdown Profile Card */}
                  <div className="absolute top-full right-0 mt-4 w-64 glass-strong border border-hawk-border rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl z-50">
                     <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-bold text-hawk-text-secondary uppercase">Level 12</span>
                       <span className="text-xs font-bold text-hawk-green">1,240 XP</span>
                     </div>
                     <div className="w-full h-2 bg-hawk-surface rounded-full overflow-hidden mb-4">
                       <div className="h-full bg-hawk-green w-[70%]"></div>
                     </div>
                     
                     <div className="space-y-2">
                       <div className="flex items-center justify-between text-sm hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                         <span className="text-white flex items-center gap-2"><Trophy className="w-4 h-4 text-yellow-500" /> Achievements</span>
                         <span className="text-hawk-text-secondary text-xs">8/24</span>
                       </div>
                       <div className="flex items-center justify-between text-sm hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                         <span className="text-white flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500" /> Current Streak</span>
                         <span className="text-hawk-text-secondary text-xs">14 Days</span>
                       </div>
                     </div>
                     
                     <div className="mt-3 pt-3 border-t border-hawk-border">
                       <button onClick={logout} className="text-sm text-hawk-red hover:text-red-400 font-bold transition-colors w-full text-left block">
                         Sign Out
                       </button>
                     </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-hawk-border px-4 py-4 space-y-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                location.pathname === path
                  ? 'text-hawk-green bg-hawk-green-glow'
                  : 'text-hawk-text-secondary hover:text-hawk-text hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/journal">
              <button className="btn-primary w-full text-sm py-3">
                Start Trading Journal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
