import { useEffect, useRef, useState } from 'react'
import { 
  BarChart3, Globe, Activity, Flame, Maximize, Minimize, Brain, Newspaper
} from 'lucide-react'

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
/* ─── Widget Configs ─── */
const advancedChartConfig = {
  widget: 'advanced-chart',
  config: {
    autosize: true,
    symbol: "FOREXCOM:EURUSD",
    interval: "15",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    allow_symbol_change: true,
    hide_top_toolbar: false,
    hide_side_toolbar: false,
    withdateranges: true,
    details: true,
    hotlist: true,
    calendar: true,
    show_popup_button: false
  }
}

const timelineConfig = {
  widget: 'timeline',
  config: {
    feedMode: "all_symbols",
    colorTheme: "dark",
    isTransparent: true,
    displayMode: "regular",
    width: "100%",
    height: "100%",
    locale: "en"
  }
}

const watchlistConfig = {
  widget: 'market-overview',
  config: {
    colorTheme: "dark",
    dateRange: "12M",
    showChart: true,
    locale: "en",
    width: "100%",
    height: "100%",
    largeChartUrl: "",
    isTransparent: true,
    showSymbolLogo: true,
    showFloatingTooltip: true,
    tabs: [
      {
        title: "Watchlist",
        symbols: [
          { s: "FOREXCOM:EURUSD", d: "EUR/USD" },
          { s: "OANDA:XAUUSD", d: "Gold" },
          { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
          { s: "TVC:DXY", d: "US Dollar Index" },
          { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
          { s: "FOREXCOM:NSXUSD", d: "Nasdaq" }
        ],
        originalTitle: "Watchlist"
      }
    ]
  }
}

export default function Markets() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  return (
    <div className="pt-20 pb-12">
      <div className="page-container mt-8">
        {/* ─── Page Header ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 px-4 lg:px-0">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Activity className="w-8 h-8 text-hawk-green" />
              Live Markets & AI Insights
            </h1>
            <p className="text-hawk-text-secondary mt-1">
              Your centralized trading terminal. Real-time charts, news, and fundamental analysis.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="badge badge-green px-3 py-1.5"><Globe className="w-3 h-3" /> Markets Open</div>
            <div className="badge badge-amber px-3 py-1.5"><Flame className="w-3 h-3" /> High Volatility</div>
          </div>
        </div>

        {/* ─── Top Section: Market Intelligence Layer ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 px-4 lg:px-0">
          
          {/* AI Brief Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 glass-strong rounded-xl border border-hawk-border relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)] h-[400px] flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hawk-blue to-hawk-green" />
            <div className="p-5 border-b border-hawk-border/50 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-hawk-green animate-pulse" />
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-hawk-green" /> HawkTrade AI Briefing
                </h3>
              </div>
              <span className="text-xs text-hawk-text-muted">Updated Just Now</span>
            </div>
            <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
              <div>
                <h4 className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-2">Market Bias</h4>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-hawk-green/10 text-hawk-green text-xs font-bold rounded border border-hawk-green/20">Bullish USD</span>
                  <span className="px-2.5 py-1 bg-hawk-red/10 text-hawk-red text-xs font-bold rounded border border-hawk-red/20">Bearish Gold</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-2">Session Outlook</h4>
                <p className="text-sm text-hawk-text-secondary leading-relaxed">
                  High volatility expected during the NY session. Stronger-than-expected US NFP data has solidified expectations that the Fed will keep rates higher for longer. This is driving a rally in the Dollar Index (DXY) and pushing yield-sensitive assets like Gold (XAU) lower.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-2">Key Liquidity Zones</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-hawk-text-secondary">EUR/USD Support</span>
                    <span className="font-mono text-white">1.0850</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-hawk-text-secondary">Gold Resistance</span>
                    <span className="font-mono text-white">2340.00</span>
                  </div>
                </div>
              </div>
              <div className="bg-hawk-surface-2 p-3 rounded-lg border border-hawk-border">
                <h4 className="text-xs font-semibold text-white mb-1">Important Catalyst</h4>
                <p className="text-xs text-hawk-text-secondary">
                  FOMC Meeting Minutes at 14:00 EST. Expect liquidity sweeps prior to the release.
                </p>
              </div>
              <div className="bg-hawk-surface-2 p-3 rounded-lg border border-hawk-border">
                <h4 className="text-xs font-semibold text-white mb-1">AI Suggestion</h4>
                <p className="text-xs text-hawk-text-secondary">
                  Look for pullbacks on <strong className="text-hawk-green">EUR/USD</strong> to the 1.0850 level to initiate short positions in alignment with the macro trend.
                </p>
              </div>
            </div>
          </div>

          {/* Live News Panel (lg:col-span-4) */}
          <div className="lg:col-span-4 glass rounded-xl border border-hawk-border overflow-hidden h-[400px] flex flex-col">
            <div className="px-5 py-3 border-b border-hawk-border bg-hawk-surface/50 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-hawk-blue" />
                <h3 className="font-semibold text-sm">Live Trade News</h3>
              </div>
            </div>
            <div className="flex-1 p-2 overflow-y-auto">
              <TradingViewWidget
                widgetConfig={timelineConfig}
                containerId="timeline-news"
                height="100%"
              />
            </div>
          </div>

          {/* Custom Watchlist Panel (lg:col-span-3) */}
          <div className="lg:col-span-3 glass rounded-xl border border-hawk-border overflow-hidden h-[400px] flex flex-col">
            <div className="px-5 py-3 border-b border-hawk-border bg-hawk-surface/50 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-hawk-amber" />
                <h3 className="font-semibold text-sm">Custom Watchlist</h3>
              </div>
            </div>
            <div className="flex-1 p-2">
              <TradingViewWidget
                widgetConfig={watchlistConfig}
                containerId="custom-watchlist"
                height="100%"
              />
            </div>
          </div>

        </div>

        {/* ─── Bottom Section: TradingView Analysis Layer ─── */}
        <div className="hidden lg:block px-4 lg:px-0">
          <div className={isFullScreen 
            ? "fixed inset-0 z-[100] bg-hawk-bg flex flex-col"
            : "glass rounded-xl overflow-hidden flex flex-col h-[700px] border border-hawk-border shadow-xl"}>
            <div className="px-5 py-3 border-b border-hawk-border flex items-center justify-between bg-hawk-surface/50 shrink-0">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-hawk-green" />
                <h3 className="font-semibold text-sm">Advanced Terminal Chart</h3>
              </div>
              <button 
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-hawk-text-secondary hover:text-white"
                title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
              >
                {isFullScreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex-1">
              <TradingViewWidget
                widgetConfig={advancedChartConfig}
                containerId="advanced-chart-bottom"
                height="100%"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
