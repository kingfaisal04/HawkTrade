import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './pages/Landing'
import Markets from './pages/Markets'
import Learn from './pages/Learn'
import Journal from './pages/Journal'
import Backtest from './pages/Backtest'
import Pricing from './pages/Pricing'
import PropFirm from './pages/PropFirm'
import Features from './pages/Features'
import Communities from './pages/Communities'
import OnboardingModal from './components/ui/OnboardingModal'
import ScrollToTop from './components/layout/ScrollToTop'

function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="min-h-screen bg-hawk-bg text-hawk-text font-sans">
      <ScrollToTop />
      <Navbar />
      <OnboardingModal />
      <main className={isLanding ? "" : "pt-24"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/backtest" element={<Backtest />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/prop-firm" element={<PropFirm />} />
          <Route path="/features" element={<Features />} />
          <Route path="/communities" element={<Communities />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
