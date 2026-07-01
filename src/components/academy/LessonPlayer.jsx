import React, { useState, useEffect } from 'react'
import { Play, CheckCircle, BrainCircuit, AlertTriangle, ArrowLeft } from 'lucide-react'

export default function LessonPlayer({ lesson, onComplete, onBack, isCompleted }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [quizStatus, setQuizStatus] = useState('idle') // idle, correct, incorrect

  // Reset quiz when lesson changes
  useEffect(() => {
    setSelectedAnswer(null)
    setQuizStatus('idle')
  }, [lesson.id])

  const handleQuizSubmit = () => {
    if (selectedAnswer === null) return
    
    if (selectedAnswer === lesson.quiz.answerIndex) {
      setQuizStatus('correct')
    } else {
      setQuizStatus('incorrect')
      // Requirement: If incorrect, they must repeat/try again. We will just show incorrect state and let them click again.
    }
  }

  const handleMarkComplete = () => {
    if (quizStatus === 'correct' || isCompleted) {
      onComplete(lesson)
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-hawk-text-muted hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Curriculum
      </button>
      
      <div className="aspect-video bg-black rounded-xl overflow-hidden border border-hawk-border shadow-2xl relative group">
        <iframe 
          key={lesson.videoId}
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${lesson.videoId}?autoplay=0&controls=1&rel=0`}
          title={lesson.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lesson Notes */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-hawk-surface-2 p-6 rounded-xl border border-hawk-border">
            <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
            <div className="flex items-center gap-4 text-sm text-hawk-text-muted mb-4">
              <span>{lesson.duration}</span>
              <span>•</span>
              <span className="text-hawk-green font-bold">+{lesson.xp} XP</span>
            </div>
            <h3 className="font-bold mb-2 border-b border-hawk-border pb-2">Lesson Notes</h3>
            <p className="text-hawk-text-secondary leading-relaxed">
              {lesson.notes}
            </p>
          </div>
        </div>

        {/* Quiz & Action Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-hawk-surface-2 p-6 rounded-xl border border-hawk-border h-full flex flex-col">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <BrainCircuit className="w-5 h-5 text-hawk-purple" /> Knowledge Check
            </h3>
            
            <p className="text-sm mb-4">{lesson.quiz.question}</p>
            
            <div className="space-y-2 mb-6 flex-1">
              {lesson.quiz.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx
                let btnClass = "w-full text-left p-3 rounded-lg text-sm transition-colors border "
                
                if (quizStatus === 'correct' && isSelected) {
                  btnClass += "bg-hawk-green/20 border-hawk-green text-white"
                } else if (quizStatus === 'incorrect' && isSelected) {
                  btnClass += "bg-hawk-red/20 border-hawk-red text-white"
                } else if (isSelected) {
                  btnClass += "bg-hawk-surface border-hawk-purple text-white"
                } else {
                  btnClass += "bg-hawk-surface border-hawk-border hover:border-hawk-text-muted text-hawk-text-secondary"
                }

                return (
                  <button 
                    key={idx}
                    onClick={() => {
                      if (quizStatus !== 'correct') {
                        setSelectedAnswer(idx)
                        setQuizStatus('idle')
                      }
                    }}
                    disabled={quizStatus === 'correct'}
                    className={btnClass}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            {quizStatus === 'incorrect' && (
              <div className="mb-4 text-xs text-hawk-red flex items-center gap-2 bg-hawk-red/10 p-2 rounded border border-hawk-red/20">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Incorrect. Review the video and try again.
              </div>
            )}

            {quizStatus === 'idle' && selectedAnswer !== null && (
              <button onClick={handleQuizSubmit} className="btn-secondary w-full mb-4">Check Answer</button>
            )}

            <button 
              onClick={handleMarkComplete}
              disabled={quizStatus !== 'correct' && !isCompleted}
              className={`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                isCompleted 
                  ? 'bg-hawk-surface border border-hawk-green text-hawk-green'
                  : quizStatus === 'correct'
                    ? 'bg-hawk-green text-black hover:bg-hawk-green-light shadow-lg shadow-hawk-green/20'
                    : 'bg-hawk-surface border border-hawk-border text-hawk-text-muted cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-5 h-5" /> 
              {isCompleted ? 'Completed (Review Summary)' : 'Mark as Complete'}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
