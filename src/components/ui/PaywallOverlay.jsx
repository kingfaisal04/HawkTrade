import React from 'react';
import { Lock, Zap } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const PaywallOverlay = ({ message = "Unlock this feature with Pro", mini = false }) => {
  const { togglePro } = useUser();

  if (mini) {
    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4">
        {/* Solid dark backdrop layer */}
        <div className="absolute inset-0 bg-black/80 rounded-[inherit]" />
        
        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-hawk-green to-hawk-green-light flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Lock className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-white mb-2">{message}</span>
          <button 
            onClick={togglePro}
            className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-md transition-colors"
          >
            Upgrade
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
      {/* Solid dark backdrop layer */}
      <div className="absolute inset-0 bg-black/80 rounded-[inherit]" />
      
      {/* Content Card */}
      <div className="relative z-10 bg-hawk-surface border border-hawk-border-2 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-hawk-surface-2 border border-hawk-border flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-hawk-green" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-white">HawkTrade <span className="gradient-text">Pro</span></h3>
        <p className="text-hawk-text-secondary mb-8 leading-relaxed">
          {message}
        </p>
        
        <button 
          onClick={togglePro}
          className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
        >
          <Zap className="w-5 h-5 fill-current" />
          Upgrade to Pro
        </button>
        
        <p className="text-xs text-hawk-text-muted mt-4">
          Clicking upgrade will toggle your mock subscription state.
        </p>
      </div>
    </div>
  );
};

export default PaywallOverlay;
