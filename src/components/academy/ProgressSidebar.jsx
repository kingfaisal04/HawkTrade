import React from 'react'
import { Trophy, Target, Flame, Star, Award, TrendingUp } from 'lucide-react'

// Rank thresholds based on XP
const ranks = [
  { name: 'Beginner Trader', minXp: 0, icon: <Star className="w-5 h-5 text-hawk-text-muted" /> },
  { name: 'Structured Trader', minXp: 500, icon: <Target className="w-5 h-5 text-hawk-blue" /> },
  { name: 'Developing Analyst', minXp: 1200, icon: <TrendingUp className="w-5 h-5 text-hawk-amber" /> },
  { name: 'Consistent Executor', minXp: 2500, icon: <Award className="w-5 h-5 text-hawk-purple" /> },
  { name: 'Advanced Strategist', minXp: 5000, icon: <Trophy className="w-5 h-5 text-hawk-green" /> },
  { name: 'Hawk Certified Trader', minXp: 10000, icon: <Flame className="w-5 h-5 text-hawk-red animate-pulse" /> },
]

export default function ProgressSidebar({ xp, completedCount, totalLessons }) {
  // Determine current rank
  let currentRank = ranks[0]
  let nextRank = ranks[1]
  
  for (let i = 0; i < ranks.length; i++) {
    if (xp >= ranks[i].minXp) {
      currentRank = ranks[i]
      nextRank = ranks[i + 1] || ranks[i] // Cap at max rank
    }
  }

  const progressToNextRank = nextRank !== currentRank 
    ? ((xp - currentRank.minXp) / (nextRank.minXp - currentRank.minXp)) * 100
    : 100

  const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div className="glass rounded-xl border border-hawk-border-2 p-6 sticky top-24">
      <div className="flex items-center gap-3 mb-6 border-b border-hawk-border pb-6">
        <div className="w-14 h-14 rounded-full bg-hawk-surface-2 border-2 border-hawk-green flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          {currentRank.icon}
        </div>
        <div>
          <div className="text-xs text-hawk-text-muted uppercase tracking-wider font-bold mb-1">Current Rank</div>
          <div className="font-bold text-lg text-white">{currentRank.name}</div>
        </div>
      </div>

      <div className="space-y-6">
        {/* XP Progress */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-hawk-text-secondary flex items-center gap-2">
              <Trophy className="w-4 h-4 text-hawk-green" /> {xp} XP
            </span>
            <span className="text-xs text-hawk-text-muted">
              {nextRank !== currentRank ? `${nextRank.minXp} XP to next rank` : 'Max Rank achieved!'}
            </span>
          </div>
          <div className="h-2 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-hawk-blue to-hawk-green transition-all duration-1000"
              style={{ width: `${progressToNextRank}%` }}
            />
          </div>
        </div>

        {/* Global Academy Progress */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-hawk-text-secondary">Academy Completion</span>
            <span className="text-sm font-bold text-white">{completionPercentage}%</span>
          </div>
          <div className="h-2 w-full bg-hawk-surface-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-hawk-purple transition-all duration-1000"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-hawk-border">
          <div className="bg-hawk-surface-2 rounded-lg p-3 text-center border border-hawk-border">
            <div className="text-2xl font-bold text-white mb-1">{completedCount}</div>
            <div className="text-[10px] uppercase text-hawk-text-muted font-bold">Lessons Completed</div>
          </div>
          <div className="bg-hawk-surface-2 rounded-lg p-3 text-center border border-hawk-border">
            <div className="text-2xl font-bold text-hawk-amber mb-1 flex items-center justify-center gap-1">
              3 <Flame className="w-4 h-4" />
            </div>
            <div className="text-[10px] uppercase text-hawk-text-muted font-bold">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  )
}
