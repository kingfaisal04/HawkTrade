import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, ArrowLeft, Search, Filter } from 'lucide-react'

const communitiesList = [
  {
    id: 1,
    title: "Global Trading Floor",
    description: "Join 10,000+ traders sharing setups, market bias, and holding each other accountable.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    avatarIcon: Users,
    theme: "blue",
    members: "10.5k",
    online: "1.2k",
    price: "Free",
    isPrivate: false
  },
  {
    id: 2,
    title: "Order Flow Mastery",
    description: "Weekly live tape reading sessions and DOM analysis deep dives with Sarah Jenkins.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop",
    avatarImg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    theme: "amber",
    members: "3.2k",
    online: "850",
    price: "$49/mo",
    isPrivate: true
  },
  {
    id: 3,
    title: "SMC / ICT Mentorship",
    description: "Daily London killzone bias, synthetic liquidity models, and AMD setups with Marcus Chen.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1000&auto=format&fit=crop",
    avatarImg: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    theme: "purple",
    members: "8.9k",
    online: "450",
    price: "$99/mo",
    isPrivate: true
  },
  {
    id: 4,
    title: "Crypto Alpha Group",
    description: "On-chain analysis, early narrative plays, and altcoin accumulation zones with our crypto analysts.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
    avatarImg: "https://i.pravatar.cc/150?u=a042581f4e290267041",
    theme: "green",
    members: "15.2k",
    online: "3.1k",
    price: "Free",
    isPrivate: false
  },
  {
    id: 5,
    title: "Algorithmic Trading Hub",
    description: "Build, backtest, and deploy automated trading strategies using Python and PineScript.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    avatarImg: "https://i.pravatar.cc/150?u=a042581f4e290267042",
    theme: "blue",
    members: "5.4k",
    online: "620",
    price: "$29/mo",
    isPrivate: true
  },
  {
    id: 6,
    title: "Options Trading Desk",
    description: "Advanced options strategies, Greeks analysis, and earnings play breakdowns.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    avatarImg: "https://i.pravatar.cc/150?u=a042581f4e290267043",
    theme: "red",
    members: "4.8k",
    online: "400",
    price: "$79/mo",
    isPrivate: true
  }
]

export default function Communities() {
  const navigate = useNavigate()

  return (
    <div className="pt-24 pb-12 page-container animate-fade-in min-h-screen">
      
      <button 
        onClick={() => navigate('/learn')}
        className="flex items-center gap-2 text-hawk-text-muted hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Academy
      </button>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            Trading <span className="gradient-text">Communities</span>
          </h1>
          <p className="text-hawk-text-secondary">
            Join specialized groups, follow mentors, and trade alongside like-minded professionals.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-hawk-text-muted" />
            <input 
              type="text" 
              placeholder="Search communities..." 
              className="w-full bg-hawk-surface border border-hawk-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-hawk-blue transition-colors text-white"
            />
          </div>
          <button className="bg-hawk-surface border border-hawk-border p-2 rounded-lg text-hawk-text-muted hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communitiesList.map((comm) => {
          // Dynamic theme classes
          const themeMap = {
            blue: {
              gradient: "from-blue-900 to-indigo-900",
              text: "text-hawk-blue",
              borderHover: "hover:border-hawk-blue/50",
              shadowHover: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]",
              btnBg: "bg-hawk-blue/10",
              btnHoverBg: "hover:bg-hawk-blue",
              btnText: "text-hawk-blue",
              btnHoverText: "hover:text-white",
              btnBorder: "border-hawk-blue/20",
              btnHoverBorder: "hover:border-hawk-blue",
              btnShadow: "shadow-hawk-blue/5"
            },
            amber: {
              gradient: "from-amber-900 to-orange-900",
              text: "text-hawk-amber",
              borderHover: "hover:border-hawk-amber/50",
              shadowHover: "hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)]",
              btnBg: "bg-hawk-amber/10",
              btnHoverBg: "hover:bg-hawk-amber",
              btnText: "text-hawk-amber",
              btnHoverText: "hover:text-hawk-bg",
              btnBorder: "border-hawk-amber/20",
              btnHoverBorder: "hover:border-hawk-amber",
              btnShadow: "shadow-hawk-amber/5"
            },
            purple: {
              gradient: "from-purple-900 to-fuchsia-900",
              text: "text-hawk-purple",
              borderHover: "hover:border-hawk-purple/50",
              shadowHover: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)]",
              btnBg: "bg-hawk-purple/10",
              btnHoverBg: "hover:bg-hawk-purple",
              btnText: "text-hawk-purple",
              btnHoverText: "hover:text-white",
              btnBorder: "border-hawk-purple/20",
              btnHoverBorder: "hover:border-hawk-purple",
              btnShadow: "shadow-hawk-purple/5"
            },
            green: {
              gradient: "from-green-900 to-emerald-900",
              text: "text-hawk-green",
              borderHover: "hover:border-hawk-green/50",
              shadowHover: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)]",
              btnBg: "bg-hawk-green/10",
              btnHoverBg: "hover:bg-hawk-green",
              btnText: "text-hawk-green",
              btnHoverText: "hover:text-black",
              btnBorder: "border-hawk-green/20",
              btnHoverBorder: "hover:border-hawk-green",
              btnShadow: "shadow-hawk-green/5"
            },
            red: {
              gradient: "from-red-900 to-rose-900",
              text: "text-hawk-red",
              borderHover: "hover:border-hawk-red/50",
              shadowHover: "hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)]",
              btnBg: "bg-hawk-red/10",
              btnHoverBg: "hover:bg-hawk-red",
              btnText: "text-hawk-red",
              btnHoverText: "hover:text-white",
              btnBorder: "border-hawk-red/20",
              btnHoverBorder: "hover:border-hawk-red",
              btnShadow: "shadow-hawk-red/5"
            }
          }

          const t = themeMap[comm.theme] || themeMap.blue;
          const Icon = comm.avatarIcon;

          return (
            <div key={comm.id} className={`glass rounded-2xl border border-hawk-border ${t.borderHover} transition-all duration-300 cursor-pointer overflow-hidden group ${t.shadowHover} flex flex-col`}>
              {/* Banner */}
              <div className={`h-32 w-full bg-gradient-to-r ${t.gradient} relative`}>
                <img src={comm.image} alt={comm.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              {/* Avatar */}
              <div className="px-5 relative">
                <div className="w-16 h-16 rounded-xl bg-hawk-surface border-4 border-hawk-bg absolute -top-8 overflow-hidden shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                  {comm.avatarImg ? (
                    <img src={comm.avatarImg} alt={comm.title} className="w-full h-full object-cover" />
                  ) : (
                    Icon && <Icon className={`w-8 h-8 ${t.text}`} />
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="px-5 pt-10 pb-5 flex flex-col flex-1">
                <h3 className={`text-lg font-bold text-white mb-1 group-hover:${t.text} transition-colors`}>{comm.title}</h3>
                <p className="text-sm text-hawk-text-secondary line-clamp-2 mb-4 h-10">{comm.description}</p>
                
                <div className="flex items-center gap-3 text-xs text-hawk-text-muted mb-5 font-medium mt-auto">
                  <span className="flex items-center gap-1.5">
                    {comm.isPrivate ? (
                      <div className="w-2 h-2 rounded-full bg-hawk-text-muted"></div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    )}
                    {comm.isPrivate ? 'Private' : `${comm.online} Online`}
                  </span>
                  <span>•</span>
                  <span>{comm.members} Members</span>
                </div>
                
                <div className="flex items-center justify-between border-t border-hawk-border-2 pt-4">
                  <span className="text-sm font-bold text-white">
                    {comm.price}
                  </span>
                  <button className={`${t.btnBg} ${t.btnHoverBg} ${t.btnText} ${t.btnHoverText} px-5 py-1.5 rounded-lg text-sm font-bold transition-all border ${t.btnBorder} ${t.btnHoverBorder} shadow-lg ${t.btnShadow}`}>
                    {comm.isPrivate ? 'Join' : 'Open'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
