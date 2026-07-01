import React, { useState, useEffect } from 'react'
import { X, Play, Pause, FastForward, SkipBack, SkipForward, BarChart2, Zap } from 'lucide-react'
import PaywallOverlay from './PaywallOverlay'
import { useUser } from '../../context/UserContext'

export default function TradeReplayModal({ trade, onClose }) {
  const { isPro } = useUser()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1) // 1x, 2x, 4x

  // Simulate playback
  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(p => Math.min(p + (speed * 2), 100))
      }, 500)
    } else if (progress >= 100) {
      setIsPlaying(false)
    }
    return () => clearInterval(interval)
  }, [isPlaying, progress, speed])

  const handleSpeedChange = (newSpeed) => {
    if (newSpeed > 1 && !isPro) return; // Locked for free users
    setSpeed(newSpeed)
  }

  if (!trade) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-hawk-bg/90 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B0F19] border border-hawk-border-2 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-hawk-border-2 bg-hawk-surface">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-hawk-surface-2 rounded-lg">
              <BarChart2 className="w-5 h-5 text-hawk-green" />
            </div>
            <div>
              <h2 className="font-bold text-lg flex items-center gap-2">
                Trade Replay: {trade.pair} 
                <span className={`badge ${trade.type === 'Long' ? 'badge-green' : 'badge-red'}`}>{trade.type}</span>
              </h2>
              <p className="text-xs text-hawk-text-secondary">{trade.date} • {trade.time}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-hawk-text-muted hover:text-white hover:bg-hawk-surface-2 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chart Area (Mocked) */}
        <div className="flex-1 relative bg-[#06090F] flex items-center justify-center overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2A3441 1px, transparent 1px), linear-gradient(90deg, #2A3441 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 text-center">
            {progress === 0 && (
              <div className="animate-pulse">
                <Play className="w-16 h-16 text-hawk-green mx-auto mb-4 opacity-50" />
                <p className="text-hawk-text-secondary text-lg">Ready to replay bar-by-bar.</p>
              </div>
            )}
            {progress > 0 && progress < 100 && (
              <div>
                <div className="flex items-end gap-1 h-32 justify-center overflow-hidden w-[600px] px-4">
                  {Array.from({ length: 40 }).map((_, i) => {
                    // Only show bars up to progress percentage
                    if (i > (progress / 100) * 40) return <div key={i} className="w-3 mx-0.5" />;
                    
                    const isUp = Math.random() > 0.4;
                    const height = 20 + Math.random() * 60;
                    return (
                      <div key={i} className={`w-3 mx-0.5 rounded-sm animate-fade-in ${isUp ? 'bg-hawk-green' : 'bg-hawk-red'}`} style={{ height: `${height}%` }}></div>
                    )
                  })}
                </div>
              </div>
            )}
            {progress === 100 && (
              <div className="text-center animate-scale-in">
                <div className={`text-4xl font-bold mb-2 ${trade.pnl > 0 ? 'text-hawk-green' : 'text-hawk-red'}`}>
                  {trade.pnl > 0 ? '+' : ''}${Math.abs(trade.pnl)}
                </div>
                <p className="text-hawk-text-secondary">Trade Replay Complete</p>
              </div>
            )}
          </div>

          {/* Entry/Exit markers mock */}
          {progress > 20 && (
            <div className="absolute left-[30%] top-[40%] bg-hawk-blue text-white text-[10px] px-2 py-1 rounded shadow-lg animate-fade-in border border-hawk-blue/50">
              Entry
            </div>
          )}
          {progress === 100 && (
            <div className="absolute right-[20%] top-[20%] bg-hawk-green text-black font-bold text-[10px] px-2 py-1 rounded shadow-lg animate-fade-in border border-hawk-green/50">
              Take Profit
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-hawk-border-2 bg-hawk-surface flex items-center justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <button 
              onClick={() => { setProgress(0); setIsPlaying(false); }}
              className="p-2 text-hawk-text-secondary hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-hawk-green text-black rounded-full hover:bg-hawk-green-light transition-transform hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <button 
              onClick={() => { setProgress(100); setIsPlaying(false); }}
              className="p-2 text-hawk-text-secondary hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 mx-8">
            <div className="h-2 bg-[#06090F] rounded-full overflow-hidden border border-hawk-border">
              <div 
                className="h-full bg-hawk-green transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 w-1/3 relative">
            <div className="text-xs text-hawk-text-muted mr-2">Speed</div>
            <div className="flex bg-hawk-surface-2 rounded-lg p-1 border border-hawk-border relative">
              <button 
                onClick={() => handleSpeedChange(1)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${speed === 1 ? 'bg-hawk-surface text-white shadow-sm' : 'text-hawk-text-secondary'}`}
              >
                1x
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => handleSpeedChange(2)}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-colors flex items-center gap-1 ${speed === 2 ? 'bg-hawk-purple/20 text-hawk-purple' : 'text-hawk-text-secondary hover:text-white'}`}
                >
                  {!isPro && <Zap className="w-3 h-3 text-amber-500" />}
                  2x
                </button>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => handleSpeedChange(4)}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-colors flex items-center gap-1 ${speed === 4 ? 'bg-hawk-purple/20 text-hawk-purple' : 'text-hawk-text-secondary hover:text-white'}`}
                >
                  {!isPro && <Zap className="w-3 h-3 text-amber-500" />}
                  4x
                </button>
              </div>

              {!isPro && (
                <div className="absolute -top-12 right-0 w-48 pointer-events-none">
                  {/* Tooltip for free users */}
                  <div className="bg-hawk-surface-3 text-white text-[10px] p-2 rounded shadow-xl border border-hawk-border opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    Fast playback requires Elite
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
