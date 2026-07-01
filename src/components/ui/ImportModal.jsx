import React, { useState } from 'react'
import { UploadCloud, FileSpreadsheet, X, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export default function ImportModal({ isOpen, onClose, onImportSuccess }) {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle') // idle, analyzing, success, error
  const [progress, setProgress] = useState(0)

  if (!isOpen) return null

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0])
    }
  }

  const processFile = (selectedFile) => {
    setFile(selectedFile)
    setStatus('analyzing')
    
    // Simulate AI parsing progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15
      if (currentProgress >= 100) {
        clearInterval(interval)
        setProgress(100)
        setTimeout(() => {
          setStatus('success')
          setTimeout(() => {
            onImportSuccess()
            onClose()
            // reset state for next time
            setTimeout(() => {
              setFile(null)
              setStatus('idle')
              setProgress(0)
            }, 500)
          }, 2000)
        }, 500)
      } else {
        setProgress(currentProgress)
      }
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={status === 'idle' ? onClose : undefined}
      />
      
      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-hawk-surface border border-hawk-border-2 rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-hawk-border">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-hawk-green" />
            <h3 className="text-xl font-bold text-white">Smart CSV Import</h3>
          </div>
          {status === 'idle' && (
            <button onClick={onClose} className="text-hawk-text-muted hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'idle' && (
            <>
              <p className="text-hawk-text-secondary text-sm mb-6 text-center">
                Unlike other platforms that require strict formatting, Hawk AI automatically reads and maps columns from <strong className="text-white">any broker's CSV export</strong>. No manual formatting required.
              </p>
              
              <div 
                className={`relative group flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 transition-colors ${
                  dragActive 
                    ? 'border-hawk-green bg-hawk-green-glow' 
                    : 'border-hawk-border-2 hover:border-hawk-border bg-hawk-surface-2'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  type="file" 
                  accept=".csv" 
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <UploadCloud className={`w-12 h-12 mb-4 transition-colors ${dragActive ? 'text-hawk-green' : 'text-hawk-text-muted group-hover:text-hawk-green-light'}`} />
                
                <p className="text-white font-medium mb-1">
                  Drag & drop your CSV file here
                </p>
                <p className="text-xs text-hawk-text-muted">
                  Supports MT4, MT5, TradeLocker, NinjaTrader, and 500+ more.
                </p>
              </div>
            </>
          )}

          {status === 'analyzing' && (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-hawk-green blur-xl opacity-20 rounded-full animate-pulse" />
                <Loader2 className="w-12 h-12 text-hawk-green animate-spin relative z-10" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Hawk AI is analyzing your data...</h4>
              <p className="text-hawk-text-secondary text-sm mb-6">Mapping messy columns to standard metrics.</p>
              
              {/* Progress Bar */}
              <div className="w-full max-w-xs h-2 bg-hawk-surface-3 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-hawk-green transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="py-12 flex flex-col items-center text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-hawk-green-glow flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-hawk-green" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Import Successful!</h4>
              <p className="text-hawk-text-secondary text-sm mb-2">
                Successfully mapped <span className="text-white font-bold">142 trades</span> from {file?.name || 'your file'}.
              </p>
              <p className="text-hawk-text-muted text-xs">
                Your journal has been updated.
              </p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        {status === 'idle' && (
          <div className="px-6 py-4 border-t border-hawk-border bg-hawk-surface-2 flex items-center gap-3">
            <FileSpreadsheet className="w-4 h-4 text-hawk-text-muted" />
            <span className="text-xs text-hawk-text-muted">
              Your data is encrypted and securely processed locally.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
