import { useEffect, useRef, useState } from 'react'
import { 
  BarChart3, Globe, DollarSign, TrendingUp, Bitcoin, Wheat, 
  Brain, Newspaper, CalendarDays, Activity, Flame, ArrowRight, Maximize, Minimize
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
const tickerTapeConfig = {
  widget: 'ticker-tape',
  config: {
    symbols: [
      { proName: "FOREXCOM:EURUSD", title: "EUR/USD" },
      { proName: "FOREXCOM:GBPUSD", title: "GBP/USD" },
      { proName: "FOREXCOM:USDJPY", title: "USD/JPY" },
      { proName: "OANDA:XAUUSD", title: "Gold" },
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "TVC:DXY", title: "Dollar Index" },
      { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
      { proName: "FOREXCOM:NSXUSD", title: "Nasdaq" },
    ],
    showSymbolLogo: true,
    isTransparent: true,
    displayMode: "adaptive",
    colorTheme: "dark",
    locale: "en"
  }
}

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

const economicCalendarConfig = {
  widget: 'events',
  config: {
    colorTheme: "dark",
    isTransparent: true,
    locale: "en",
    importanceFilter: "-1,0,1",
    countryFilter: "us,gb,eu,jp,au,ca,ch,nz",
    width: "100%",
    height: "100%"
  }
}

const heatmapConfig = {
  widget: 'stock-heatmap',
  config: {
    exchanges: [],
    dataSource: "SPX500",
    grouping: "sector",
    blockSize: "market_cap_basic",
    blockColor: "change",
    locale: "en",
    symbolUrl: "",
    colorTheme: "dark",
    hasTopBar: false,
    isDataSet498Enabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: "100%",
    height: "100%"
  }
}

const marketTabs = [
  {
    id: 'forex',
    label: 'Forex',
    icon: DollarSign,
    widget: 'market-quotes',
    config: {
      symbolsGroups: [{ name: "Majors & Minors", symbols: [{ name: "FOREXCOM:EURUSD", displayName: "EUR/USD" }, { name: "FOREXCOM:GBPUSD", displayName: "GBP/USD" }, { name: "FOREXCOM:USDJPY", displayName: "USD/JPY" }, { name: "FX_IDC:USDCHF", displayName: "USD/CHF" }, { name: "FOREXCOM:AUDUSD", displayName: "AUD/USD" }, { name: "OANDA:NZDUSD", displayName: "NZD/USD" }, { name: "FOREXCOM:USDCAD", displayName: "USD/CAD" }, { name: "FOREXCOM:EURGBP", displayName: "EUR/GBP" }, { name: "FOREXCOM:GBPJPY", displayName: "GBP/JPY" }] }],
      showSymbolLogo: true,
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
      width: "100%",
      height: "100%"
    }
  },
  {
    id: 'crypto',
    label: 'Crypto',
    icon: Bitcoin,
    widget: 'market-quotes',
    config: {
      symbolsGroups: [{ name: "Top Crypto", symbols: [{ name: "BITSTAMP:BTCUSD", displayName: "Bitcoin" }, { name: "BITSTAMP:ETHUSD", displayName: "Ethereum" }, { name: "BINANCE:BNBUSDT", displayName: "BNB" }, { name: "BINANCE:SOLUSDT", displayName: "Solana" }, { name: "BINANCE:XRPUSDT", displayName: "XRP" }, { name: "BINANCE:ADAUSDT", displayName: "Cardano" }] }],
      showSymbolLogo: true,
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
      width: "100%",
      height: "100%"
    }
  },
  {
    id: 'commodities',
    label: 'Commodities',
    icon: Wheat,
    widget: 'market-quotes',
    config: {
      symbolsGroups: [{ name: "Metals & Energy", symbols: [{ name: "OANDA:XAUUSD", displayName: "Gold" }, { name: "OANDA:XAGUSD", displayName: "Silver" }, { name: "TVC:USOIL", displayName: "Crude Oil" }, { name: "NYMEX:NG1!", displayName: "Natural Gas" }] }],
      showSymbolLogo: true,
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
      width: "100%",
      height: "100%"
    }
  }
]

export default function Markets() {
  const [activeTab, setActiveTab] = useState('forex')
  const [isFullScreen, setIsFullScreen] = useState(false)

  return (
    <div className="pt-20 pb-12">
      {/* ─── Top Ticker Tape ─── */}
      <div className="border-b border-hawk-border bg-hawk-surface/50 backdrop-blur-md sticky top-16 z-40">
        <TradingViewWidget
          widgetConfig={tickerTapeConfig}
          containerId="ticker-tape"
          height="46px"
        />
      </div>

      <div className="page-container mt-8">
        {/* ─── Page Header ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
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

        {/* ─── Main Terminal Layout ─── */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          
          {/* LEFT COLUMN: Charts & Quotes (Span 8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Advanced Chart */}
            <div className={isFullScreen 
              ? "fixed inset-0 z-[100] bg-hawk-bg flex flex-col"
              : "glass rounded-xl overflow-hidden flex flex-col h-[600px] border border-hawk-border shadow-xl"}>
              <div className="px-5 py-3 border-b border-hawk-border flex items-center justify-between bg-hawk-surface/50">
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
                  containerId="advanced-chart"
                  height="100%"
                />
              </div>
            </div>

            {/* Asset Class Quotes */}
            <div className="glass rounded-xl overflow-hidden border border-hawk-border">
              <div className="flex overflow-x-auto border-b border-hawk-border bg-hawk-surface/50">
                {marketTabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                      activeTab === id
                        ? 'text-hawk-green border-hawk-green bg-hawk-green/5'
                        : 'text-hawk-text-secondary border-transparent hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
              <div className="p-2 h-[350px]">
                {marketTabs.map(tab => (
                  activeTab === tab.id && (
                    <TradingViewWidget
                      key={tab.id}
                      widgetConfig={{ widget: tab.widget, config: tab.config }}
                      containerId={`market-${tab.id}`}
                      height="100%"
                    />
                  )
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: AI & News (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* AI Fundamental Summary */}
            <div className="glass-strong rounded-xl border border-hawk-border relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hawk-blue to-hawk-green" />
              <div className="p-5 border-b border-hawk-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-hawk-green animate-pulse" />
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-hawk-green" /> HawkTrade AI Briefing
                  </h3>
                </div>
                <span className="text-xs text-hawk-text-muted">Updated Just Now</span>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-2">Market Bias</h4>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 bg-hawk-green/10 text-hawk-green text-xs font-bold rounded border border-hawk-green/20">Bullish USD</span>
                    <span className="px-2.5 py-1 bg-hawk-red/10 text-hawk-red text-xs font-bold rounded border border-hawk-red/20">Bearish Gold</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-hawk-text-muted uppercase tracking-wider mb-2">Fundamental Summary</h4>
                  <p className="text-sm text-hawk-text-secondary leading-relaxed">
                    Stronger-than-expected US NFP data has solidified expectations that the Fed will keep rates higher for longer. This is driving a rally in the Dollar Index (DXY) and pushing yield-sensitive assets like Gold (XAU) lower.
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

            {/* Live News Feed (Forex Factory Style) */}
            <div className="glass rounded-xl border border-hawk-border overflow-hidden h-[450px] flex flex-col">
              <div className="px-5 py-3 border-b border-hawk-border bg-hawk-surface/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-hawk-blue" />
                  <h3 className="font-semibold text-sm">Live Trade News</h3>
                </div>
              </div>
              <div className="flex-1 p-2">
                <TradingViewWidget
                  widgetConfig={timelineConfig}
                  containerId="timeline-news"
                  height="100%"
                />
              </div>
            </div>

            {/* Economic Calendar */}
            <div className="glass rounded-xl border border-hawk-border overflow-hidden h-[400px] flex flex-col">
              <div className="px-5 py-3 border-b border-hawk-border bg-hawk-surface/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-hawk-amber" />
                  <h3 className="font-semibold text-sm">Economic Calendar</h3>
                </div>
              </div>
              <div className="flex-1 p-2">
                <TradingViewWidget
                  widgetConfig={economicCalendarConfig}
                  containerId="econ-calendar"
                  height="100%"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ─── Bottom Row: Market Heatmap ─── */}
        <div className="glass rounded-xl border border-hawk-border overflow-hidden h-[500px] flex flex-col">
          <div className="px-5 py-4 border-b border-hawk-border bg-hawk-surface/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-hawk-green" />
              <h3 className="font-semibold text-base">S&P 500 Market Heatmap</h3>
            </div>
            <p className="text-xs text-hawk-text-muted hidden sm:block">Visualizing sector performance and market cap</p>
          </div>
          <div className="flex-1">
            <TradingViewWidget
              widgetConfig={heatmapConfig}
              containerId="heatmap"
              height="100%"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
