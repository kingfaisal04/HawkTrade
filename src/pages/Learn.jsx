import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PlayCircle, BookOpen, Clock, Target, TrendingUp, ShieldCheck, 
  ChevronRight, Lock, ArrowLeft, Play, FileText, CheckCircle, BrainCircuit, X, Video, Users
} from 'lucide-react'

// Components
import ProgressSidebar from '../components/academy/ProgressSidebar'
import LessonPlayer from '../components/academy/LessonPlayer'

// Data
import { foundationCourses, methodologies } from '../data/academyData'

export default function Learn() {
  const navigate = useNavigate()
  
  // Navigation State
  const [activeView, setActiveView] = useState('dashboard') // 'dashboard', 'methodology', 'lesson'
  const [activeMethodology, setActiveMethodology] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)

  // Progress State (In a real app, this comes from backend/context)
  const [completedLessons, setCompletedLessons] = useState([])
  
  // AI Summary Modal State
  const [aiModalLesson, setAiModalLesson] = useState(null)

  // Compute stats
  const allFoundationIds = useMemo(() => foundationCourses.map(l => l.id), [])
  const foundationCompleted = allFoundationIds.every(id => completedLessons.includes(id))
  const foundationProgress = Math.round((foundationCourses.filter(l => completedLessons.includes(l.id)).length / foundationCourses.length) * 100)

  // Calculate total XP based on completed lessons
  const currentXP = useMemo(() => {
    let xp = 0;
    // Check foundation
    foundationCourses.forEach(l => {
      if (completedLessons.includes(l.id)) xp += l.xp
    })
    // Check methodologies
    methodologies.forEach(m => {
      m.courses.forEach(c => {
        c.lessons.forEach(l => {
          if (completedLessons.includes(l.id)) xp += l.xp
        })
      })
    })
    return xp;
  }, [completedLessons])

  // Total possible lessons in Academy
  const totalLessonsInAcademy = useMemo(() => {
    let count = foundationCourses.length
    methodologies.forEach(m => m.courses.forEach(c => count += c.lessons.length))
    return count
  }, [])

  // Handlers
  const handlePlayLesson = (lesson) => {
    setActiveLesson(lesson)
    setActiveView('lesson')
  }

  const handleOpenMethodology = (meth) => {
    if (!foundationCompleted) return
    setActiveMethodology(meth)
    setActiveView('methodology')
  }

  const handleBackToDashboard = () => {
    setActiveMethodology(null)
    setActiveLesson(null)
    setActiveView('dashboard')
  }

  const handleBackFromLesson = () => {
    setActiveLesson(null)
    setActiveView(activeMethodology ? 'methodology' : 'dashboard')
  }

  const onLessonComplete = (lesson) => {
    if (!completedLessons.includes(lesson.id)) {
      setCompletedLessons([...completedLessons, lesson.id])
    }
    // Trigger AI Modal
    setAiModalLesson(lesson)
  }

  return (
    <div className="pt-24 pb-12 page-container animate-fade-in relative min-h-screen">
      
      {/* ==========================================
          AI SUMMARY MODAL
          ========================================== */}
      {aiModalLesson && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-strong border border-hawk-purple/30 rounded-2xl p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hawk-blue via-hawk-purple to-hawk-green" />
            
            <button 
              onClick={() => setAiModalLesson(null)} 
              className="absolute top-4 right-4 text-hawk-text-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-hawk-purple/20 rounded-xl border border-hawk-purple/30">
                <BrainCircuit className="w-6 h-6 text-hawk-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hawk AI Summary</h3>
                <p className="text-hawk-text-secondary text-sm">Class complete. Here is what you need to remember.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-hawk-surface-2 p-4 rounded-xl border border-hawk-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-hawk-text-muted mb-2">What you learned today</h4>
                <p className="text-lg font-medium text-white">{aiModalLesson.aiSummary.concept}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-hawk-purple mb-3">3 things to look for on charts</h4>
                <ul className="space-y-3">
                  {aiModalLesson.aiSummary.signatures.map((sig, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-hawk-purple/20 flex items-center justify-center shrink-0 border border-hawk-purple/30">
                        <CheckCircle className="w-2.5 h-2.5 text-hawk-purple" />
                      </div>
                      <span className="text-sm text-hawk-text-secondary leading-relaxed">{sig}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-hawk-green/5 border border-hawk-green/20 p-5 rounded-xl">
                <h4 className="text-sm font-bold text-hawk-green flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4" /> Your backtesting assignment
                </h4>
                <p className="text-sm text-white/90 italic mb-4">"{aiModalLesson.aiSummary.backtestPrompt}"</p>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/backtest')} className="btn-primary py-2.5 px-6 shadow-lg shadow-hawk-green/20 flex-1">
                    Go Practice on Backtesting
                  </button>
                  <button onClick={() => {
                    setAiModalLesson(null)
                    handleBackFromLesson()
                  }} className="btn-secondary py-2.5 px-6 flex-1">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      {activeView === 'dashboard' && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative z-10 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
              HawkTrade <span className="gradient-text">Academy</span>
            </h1>
            <p className="text-hawk-text-secondary">Learn → Summarize → Practice → Backtest → Journal → Improve</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT COLUMN: Main Content Area */}
        <div className="xl:col-span-9 space-y-12">
          
          {/* =======================
              VIEW: DASHBOARD 
              ======================= */}
          {activeView === 'dashboard' && (
            <div className="animate-fade-in space-y-12">
              
              {/* Foundation Tier */}
              <section>
                <div className="mb-6 border-b border-hawk-border pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-hawk-green/20 text-hawk-green flex items-center justify-center font-bold text-sm">1</div>
                      Foundation Section
                    </h2>
                    <p className="text-sm text-hawk-text-secondary mt-1">Mandatory Beginner Path. Complete to unlock methodologies.</p>
                  </div>
                  <div className="flex items-center gap-3 bg-hawk-surface-2 p-2 rounded-lg border border-hawk-border">
                    <div className="text-sm font-bold">{foundationProgress}%</div>
                    <div className="w-32 h-2 bg-hawk-surface rounded-full overflow-hidden">
                      <div className="h-full bg-hawk-green transition-all" style={{width: `${foundationProgress}%`}}/>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foundationCourses.map((course) => {
                    const isDone = completedLessons.includes(course.id)
                    return (
                      <div 
                        key={course.id} 
                        onClick={() => handlePlayLesson(course)}
                        className={`glass rounded-xl p-5 border cursor-pointer group flex flex-col relative overflow-hidden transition-all duration-300 ${isDone ? 'border-hawk-green/50 hover:border-hawk-green bg-hawk-green/5' : 'border-hawk-border hover:border-hawk-text-muted'}`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-white group-hover:text-hawk-green transition-colors leading-tight">{course.title}</h3>
                          {isDone ? (
                            <CheckCircle className="w-5 h-5 text-hawk-green shrink-0" />
                          ) : (
                            <PlayCircle className="w-5 h-5 text-hawk-text-muted group-hover:text-white shrink-0 transition-colors" />
                          )}
                        </div>
                        <p className="text-hawk-text-secondary text-xs mb-4 flex-1">{course.description}</p>
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-hawk-border-2">
                          <div className="text-xs font-bold text-hawk-green">+{course.xp} XP</div>
                          <div className="text-xs text-hawk-text-muted flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {course.duration}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Methodologies Tier */}
              <section className="relative">
                {!foundationCompleted && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 backdrop-blur-[3px] bg-hawk-bg/60 rounded-2xl border border-hawk-border">
                    <div className="bg-hawk-surface border border-hawk-border-2 p-6 rounded-xl flex flex-col items-center text-center max-w-sm shadow-2xl">
                      <Lock className="w-10 h-10 text-hawk-text-muted mb-4" />
                      <h3 className="text-lg font-bold mb-2">Methodologies Locked</h3>
                      <p className="text-hawk-text-secondary text-sm">
                        Complete the remaining {foundationCourses.length - completedLessons.filter(id => foundationCourses.find(f => f.id === id)).length} Foundation lessons to unlock advanced specializations.
                      </p>
                    </div>
                  </div>
                )}

                <div className={`transition-opacity duration-300 ${!foundationCompleted ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                  <div className="mb-6 border-b border-hawk-border pb-2 flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${foundationCompleted ? 'bg-hawk-purple/20 text-hawk-purple' : 'bg-hawk-surface-2 text-hawk-text-muted'} flex items-center justify-center font-bold text-sm transition-colors`}>2</div>
                    <div>
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        Methodology Specializations
                      </h2>
                      <p className="text-sm text-hawk-text-secondary mt-1">Deep dive into advanced trading concepts.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {methodologies.map((meth) => {
                      let totalMethLessons = 0;
                      let compMethLessons = 0;
                      meth.courses.forEach(c => {
                        totalMethLessons += c.lessons.length
                        c.lessons.forEach(l => {
                          if (completedLessons.includes(l.id)) compMethLessons++
                        })
                      })
                      const methProg = totalMethLessons > 0 ? Math.round((compMethLessons / totalMethLessons) * 100) : 0

                      return (
                        <div 
                          key={meth.id} 
                          onClick={() => handleOpenMethodology(meth)}
                          className="bg-hawk-surface-2 rounded-xl p-6 border border-hawk-border hover:border-hawk-purple/50 transition-colors cursor-pointer group flex flex-col relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-hawk-surface">
                            <div className="h-full bg-hawk-purple transition-all" style={{width: `${methProg}%`}}/>
                          </div>
                          
                          <div className="flex justify-between items-start mb-4">
                            <span className="badge badge-purple">{meth.categoryBadge}</span>
                            <span className="text-xs font-bold text-hawk-purple">{methProg}% Done</span>
                          </div>

                          <h3 className="text-xl font-bold mb-2 group-hover:text-hawk-purple transition-colors">{meth.title}</h3>
                          <p className="text-hawk-text-secondary text-sm mb-6 flex-1 leading-relaxed">{meth.description}</p>
                          
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-hawk-border-2">
                            <div className="flex items-center gap-4 text-sm text-hawk-text-muted">
                              <span className="flex items-center gap-1.5"><Video className="w-4 h-4" /> {meth.totalModules} Modules</span>
                            </div>
                            <div className="text-sm font-bold text-hawk-text-secondary group-hover:text-hawk-purple flex items-center uppercase">
                              Enter <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Community Tier */}
              <section className="pt-6 border-t border-hawk-border">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-hawk-blue/20 text-hawk-blue flex items-center justify-center font-bold text-sm">3</div>
                      Communities & Mentors
                    </h2>
                    <p className="text-sm text-hawk-text-secondary mt-1">Join specialized trading groups and learn together.</p>
                  </div>
                  <button className="text-sm font-bold text-hawk-blue hover:text-white transition-colors flex items-center">
                    View All Communities <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Community Card 1 */}
                  <div className="glass rounded-2xl border border-hawk-border hover:border-hawk-blue/50 transition-all duration-300 cursor-pointer overflow-hidden group hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] flex flex-col">
                    {/* Banner */}
                    <div className="h-32 w-full bg-gradient-to-r from-blue-900 to-indigo-900 relative">
                      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" alt="Trading Floor" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    {/* Avatar */}
                    <div className="px-5 relative">
                      <div className="w-16 h-16 rounded-xl bg-hawk-surface border-4 border-hawk-bg absolute -top-8 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                        <Users className="w-8 h-8 text-hawk-blue" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="px-5 pt-10 pb-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-hawk-blue transition-colors">Global Trading Floor</h3>
                      <p className="text-sm text-hawk-text-secondary line-clamp-2 mb-4 h-10">Join 10,000+ traders sharing setups, market bias, and holding each other accountable.</p>
                      
                      <div className="flex items-center gap-3 text-xs text-hawk-text-muted mb-5 font-medium mt-auto">
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div> 1.2k Online</span>
                        <span>•</span>
                        <span>10.5k Members</span>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-hawk-border-2 pt-4">
                        <span className="text-sm font-bold text-white">Free</span>
                        <button className="bg-hawk-blue/10 hover:bg-hawk-blue text-hawk-blue hover:text-white px-5 py-1.5 rounded-lg text-sm font-bold transition-all border border-hawk-blue/20 hover:border-hawk-blue shadow-lg shadow-hawk-blue/5">
                          Open
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mentor 1 */}
                  <div className="glass rounded-2xl border border-hawk-border hover:border-hawk-amber/50 transition-all duration-300 cursor-pointer overflow-hidden group hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)] flex flex-col">
                    <div className="h-32 w-full bg-gradient-to-r from-amber-900 to-orange-900 relative">
                      <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop" alt="Order Flow" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    <div className="px-5 relative">
                      <div className="w-16 h-16 rounded-xl bg-hawk-surface border-4 border-hawk-bg absolute -top-8 overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="px-5 pt-10 pb-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-hawk-amber transition-colors">Order Flow Mastery</h3>
                      <p className="text-sm text-hawk-text-secondary line-clamp-2 mb-4 h-10">Weekly live tape reading sessions and DOM analysis deep dives with Sarah Jenkins.</p>
                      
                      <div className="flex items-center gap-3 text-xs text-hawk-text-muted mb-5 font-medium mt-auto">
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-hawk-text-muted"></div> Private</span>
                        <span>•</span>
                        <span>3.2k Members</span>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-hawk-border-2 pt-4">
                        <span className="text-sm font-bold text-white">$49<span className="text-hawk-text-muted text-xs">/mo</span></span>
                        <button className="bg-hawk-amber/10 hover:bg-hawk-amber text-hawk-amber hover:text-hawk-bg px-5 py-1.5 rounded-lg text-sm font-bold transition-all border border-hawk-amber/20 hover:border-hawk-amber shadow-lg shadow-hawk-amber/5">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mentor 2 */}
                  <div className="glass rounded-2xl border border-hawk-border hover:border-hawk-purple/50 transition-all duration-300 cursor-pointer overflow-hidden group hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] flex flex-col">
                    <div className="h-32 w-full bg-gradient-to-r from-purple-900 to-fuchsia-900 relative">
                      <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1000&auto=format&fit=crop" alt="ICT Mentorship" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    <div className="px-5 relative">
                      <div className="w-16 h-16 rounded-xl bg-hawk-surface border-4 border-hawk-bg absolute -top-8 overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Marcus Chen" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="px-5 pt-10 pb-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-hawk-purple transition-colors">SMC / ICT Mentorship</h3>
                      <p className="text-sm text-hawk-text-secondary line-clamp-2 mb-4 h-10">Daily London killzone bias, synthetic liquidity models, and AMD setups with Marcus Chen.</p>
                      
                      <div className="flex items-center gap-3 text-xs text-hawk-text-muted mb-5 font-medium mt-auto">
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div> 450 Online</span>
                        <span>•</span>
                        <span>8.9k Members</span>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-hawk-border-2 pt-4">
                        <span className="text-sm font-bold text-white">$99<span className="text-hawk-text-muted text-xs">/mo</span></span>
                        <button className="bg-hawk-purple/10 hover:bg-hawk-purple text-hawk-purple hover:text-white px-5 py-1.5 rounded-lg text-sm font-bold transition-all border border-hawk-purple/20 hover:border-hawk-purple shadow-lg shadow-hawk-purple/5">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          )}

          {/* =======================
              VIEW: METHODOLOGY 
              ======================= */}
          {activeView === 'methodology' && activeMethodology && (
            <div className="animate-fade-in space-y-8">
              <button 
                onClick={handleBackToDashboard}
                className="flex items-center gap-2 text-hawk-text-muted hover:text-white transition-colors mb-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>

              <div className="border-b border-hawk-border pb-6">
                <span className="badge badge-purple mb-3">{activeMethodology.categoryBadge}</span>
                <h1 className="text-4xl font-bold mb-3">{activeMethodology.title}</h1>
                <p className="text-hawk-text-secondary max-w-2xl text-lg">{activeMethodology.description}</p>
              </div>

              <div className="space-y-12">
                {activeMethodology.courses.map((course) => (
                  <div key={course.id}>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${
                        course.level === 'Beginner' ? 'bg-hawk-green' : 
                        course.level === 'Intermediate' ? 'bg-hawk-amber' : 'bg-hawk-red'
                      }`} />
                      {course.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.lessons.map(lesson => {
                        const isDone = completedLessons.includes(lesson.id)
                        return (
                          <div 
                            key={lesson.id}
                            onClick={() => handlePlayLesson(lesson)}
                            className={`glass rounded-xl p-5 border cursor-pointer group flex flex-col relative overflow-hidden transition-all duration-300 ${isDone ? 'border-hawk-purple/50 bg-hawk-purple/5' : 'border-hawk-border hover:border-hawk-text-muted'}`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-white group-hover:text-hawk-purple transition-colors leading-tight">{lesson.title}</h4>
                              {isDone ? (
                                <CheckCircle className="w-5 h-5 text-hawk-purple shrink-0" />
                              ) : (
                                <PlayCircle className="w-5 h-5 text-hawk-text-muted group-hover:text-white shrink-0 transition-colors" />
                              )}
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4">
                              <div className="text-xs font-bold text-hawk-purple">+{lesson.xp} XP</div>
                              <div className="text-xs text-hawk-text-muted flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> {lesson.duration}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =======================
              VIEW: LESSON PLAYER 
              ======================= */}
          {activeView === 'lesson' && activeLesson && (
            <LessonPlayer 
              lesson={activeLesson}
              isCompleted={completedLessons.includes(activeLesson.id)}
              onComplete={onLessonComplete}
              onBack={handleBackFromLesson}
            />
          )}

        </div>

        {/* RIGHT COLUMN: Progress Sidebar */}
        <div className="xl:col-span-3 hidden xl:block">
          <ProgressSidebar 
            xp={currentXP} 
            completedCount={completedLessons.length} 
            totalLessons={totalLessonsInAcademy}
          />
        </div>
      </div>
    </div>
  )
}
