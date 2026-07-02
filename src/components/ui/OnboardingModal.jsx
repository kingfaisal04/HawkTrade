import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { BookOpen, Target, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export default function OnboardingModal() {
  const { isAuthenticated, hasCompletedOnboarding, completeOnboarding } = useUser();
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Only show if logged in but hasn't completed onboarding
  if (!isAuthenticated || hasCompletedOnboarding) return null;

  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'I am just starting my trading journey and need to learn the basics.',
      icon: <BookOpen className="w-8 h-8 text-hawk-green" />
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'I have a strategy but struggle with consistency and psychology.',
      icon: <Target className="w-8 h-8 text-hawk-amber" />
    },
    {
      id: 'professional',
      title: 'Professional',
      description: 'I am consistently profitable and want to automate or scale my edge.',
      icon: <Cpu className="w-8 h-8 text-hawk-blue" />
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      
      <div className="relative z-10 w-full max-w-4xl glass-strong border border-hawk-border rounded-2xl p-6 md:p-10 animate-fade-in shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-hawk-green rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to HawkTrade</h2>
          <p className="text-hawk-text-secondary text-lg max-w-2xl mx-auto">
            Before we set up your AI Coach and Dashboard, tell us a bit about your trading experience so we can personalize your workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`text-left p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group
                ${selectedLevel === level.id 
                  ? 'border-hawk-green bg-hawk-green/10' 
                  : 'border-hawk-border bg-hawk-surface-2 hover:border-hawk-border-2 hover:bg-hawk-surface-3'
                }`}
            >
              {selectedLevel === level.id && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-hawk-green" />
                </div>
              )}
              <div className="mb-6 bg-hawk-surface w-16 h-16 rounded-xl flex items-center justify-center border border-hawk-border group-hover:scale-110 transition-transform">
                {level.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
              <p className="text-sm text-hawk-text-secondary leading-relaxed">
                {level.description}
              </p>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => completeOnboarding(selectedLevel)}
            disabled={!selectedLevel}
            className={`btn-primary px-12 py-4 text-lg w-full md:w-auto flex items-center justify-center gap-2 transition-all ${
              !selectedLevel ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-105'
            }`}
          >
            Enter Workspace <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
