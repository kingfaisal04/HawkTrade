import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp, BookOpen, NotebookPen, FlaskConical, BarChart3, CreditCard, Building2 } from 'lucide-react'

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
            <Link to="/login" className="text-sm font-medium text-hawk-text-secondary hover:text-white transition-colors">
              Log in
            </Link>
            <Link to="/journal">
              <button className="btn-primary text-sm">
                Get Started
              </button>
            </Link>
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
