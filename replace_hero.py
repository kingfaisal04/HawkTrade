import re

with open('src/pages/Landing.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'\{\/\* ================= HERO SECTION ================= \*\/\}\n\s*<section className="relative pt-12 pb-20 md:pt-32 md:pb-24 overflow-hidden">.*?(?=\{\/\* ================= THE PROBLEM VS SOLUTION ================= \*\/\})', re.DOTALL)

new_hero = """{/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#0a110e]">
        {/* Deep Green Glow Effect from top right */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981]/20 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        
        {/* Background Particles/Stars (simulated with CSS or small divs) */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
           <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full blur-[1px]" />
           <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-[#10b981] rounded-full blur-[2px]" />
           <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full blur-[1px]" />
           <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#10b981] rounded-full blur-[3px]" />
        </div>

        <div className="page-container relative z-10 w-full flex-grow flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12">
            
            {/* Left Column: Text & CTAs */}
            <div className="max-w-2xl animate-slide-up px-4 md:px-0 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-medium mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                </svg>
                Empowering Global Startup Growth
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-black text-white leading-[1.05] mb-6 tracking-tight font-sans">
                YOUR CRYPTO<br />
                REVOLUTION<br />
                OPPORTUNITIES
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-10">
                Seamless and Secure Crypto Solutions – Empowering You to<br />
                Trade, Invest, and Grow with Confidence
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-[#0a110e] font-bold text-sm shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3.5 rounded-xl border border-gray-600 bg-black/20 text-white font-medium text-sm hover:bg-black/40 hover:border-gray-500 transition-all">
                  See Our Services
                </button>
              </div>
            </div>

            {/* Right Column: Graphic Nodes */}
            <div className="relative h-[500px] hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              
              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Lines to Top Hexagon */}
                <path d="M 120 250 C 200 250, 250 120, 350 120 L 400 120" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 120 240 C 200 240, 240 110, 350 110 L 400 110" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                <path d="M 120 260 C 200 260, 260 130, 350 130 L 400 130" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                
                {/* Lines to Middle Widget */}
                <path d="M 120 250 L 320 250" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 120 240 L 320 240" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                <path d="M 120 260 L 320 260" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                
                {/* Lines to Bottom Hexagon */}
                <path d="M 120 250 C 200 250, 250 420, 350 420 L 400 420" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-50" />
                <path d="M 120 240 C 200 240, 240 410, 350 410 L 400 410" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                <path d="M 120 260 C 200 260, 260 430, 350 430 L 400 430" stroke="#10b981" strokeWidth="1" fill="none" className="opacity-30" />
                
                {/* Node dots on lines */}
                <circle cx="320" cy="250" r="3" fill="#5eead4" />
                <circle cx="400" cy="120" r="3" fill="#5eead4" />
                <circle cx="400" cy="420" r="3" fill="#5eead4" />
                <circle cx="320" cy="240" r="2" fill="#10b981" className="opacity-50" />
                <circle cx="320" cy="260" r="2" fill="#10b981" className="opacity-50" />
                <circle cx="400" cy="110" r="2" fill="#10b981" className="opacity-50" />
                <circle cx="400" cy="130" r="2" fill="#10b981" className="opacity-50" />
                <circle cx="400" cy="410" r="2" fill="#10b981" className="opacity-50" />
                <circle cx="400" cy="430" r="2" fill="#10b981" className="opacity-50" />
              </svg>

              {/* Central Hexagon */}
              <div className="absolute top-1/2 left-[120px] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-32 h-36 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#047857] shadow-[0_0_50px_rgba(16,185,129,0.5)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <div className="absolute inset-[2px] bg-[#142921]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <div className="absolute inset-[4px] bg-gradient-to-br from-[#10b981] to-[#047857]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <div className="relative z-10 flex flex-col items-center justify-center -translate-y-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-1 text-white">
                      <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                    </svg>
                    <span className="text-white text-[11px] font-bold tracking-wider">HawkTrade</span>
                  </div>
                </div>
              </div>

              {/* Top Hexagon (Ethereum) */}
              <div className="absolute top-[120px] left-[400px] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-20 h-24 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-[#1f2d26] border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-[#10b981]/80 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <div className="absolute inset-[1px] bg-[#14201a]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <svg className="w-8 h-8 text-gray-300 relative z-10 group-hover:text-white transition-colors" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Hexagon (Bitcoin) */}
              <div className="absolute top-[420px] left-[400px] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-20 h-24 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-[#1f2d26] border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-[#10b981]/80 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <div className="absolute inset-[1px] bg-[#14201a]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  <svg className="w-8 h-8 text-gray-300 relative z-10 group-hover:text-white transition-colors" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l-14.868-59.472c-15.011 3.753-30.05 7.021-44.821 9.871l-10.428-41.711c14.286-2.617 28.847-5.556 43.329-8.796l-20.082-80.329c-15.35-3.321-30.822-6.26-45.629-8.796l10.428-41.711c14.536 2.853 29.382 6.096 44.404 9.539l14.868-59.472h42.747l-14.868 59.472c16.321 3.539 32.225 7.425 47.786 11.514l14.868-59.472h42.747l-14.868 59.472c43.682 12.607 76.543 27.843 86.829 70.914 8.236 34.343-4.757 56.407-28.175 70.768 20.318 10.157 33.622 28.329 36.561 58.75 3.993 41.35-26.65 67.432-84.072 84.143l14.868 59.472h-42.747l-14.868-59.472c-16.711-4.089-33.15-8.293-49.271-12.607l-14.868 59.472h-42.747zm30.347-121.393c31.111-7.778 74.072-18.518 78.432-35.946 4.361-17.429-28.018-24.896-59.129-32.675l-20.082 80.329c20.318 5.061 40.85 9.771 60.779 12.443-4.664-16.643-28.618-20.918-60.032-24.186l20.032-80.129zm10.428-111.411c-26.475-6.618-62.882-15.718-66.689-30.932-3.807-15.214 23.364-21.282 49.839-27.9l17.439-69.757c-26.475-6.618-62.882-15.718-66.689-30.932 4.143-16.571 30.65-21.732 58.261-28.621l17.439-69.757c28.329 7.082 66.868 16.714 71.054 33.454 4.186 16.739-24.364 22.846-52.693 29.939l-17.439 69.757c27.132 6.782 64.139 16.036 68.325 32.775-4.186 16.739-30.636 22.846-58.846 29.929l-20.082 80.329z" />
                  </svg>
                </div>
              </div>

              {/* Trading Widget */}
              <div className="absolute top-[250px] left-[450px] -translate-y-1/2 w-[280px] p-[1px] rounded-[20px] bg-gradient-to-b from-[#10b981]/50 to-[#10b981]/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] z-20">
                <div className="w-full h-full bg-[#111e17]/95 backdrop-blur-xl rounded-[19px] p-4">
                  <div className="space-y-4">
                    {/* Sell Section */}
                    <div className="bg-[#192b22] rounded-xl p-3.5 border border-[#10b981]/20 shadow-inner">
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                        <span className="font-medium text-gray-300">Sell</span>
                        <span className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded border border-white/5">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#14F195]" fill="currentColor"><path d="M18.8 7.3l-13.6 0c-1.4 0-2.2 1.6-1.3 2.7l3.8 4.6c.3.3.7.5 1.1.5l13.6 0c1.4 0 2.2-1.6 1.3-2.7l-3.8-4.6c-.3-.4-.7-.5-1.1-.5zM5.2 16.7l13.6 0c1.4 0 2.2-1.6 1.3-2.7l-3.8-4.6c-.3-.3-.7-.5-1.1-.5l-13.6 0c-1.4 0-2.2 1.6-1.3 2.7l3.8 4.6c.3.4.7.5 1.1.5z"/></svg>
                          SOL <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-2xl font-black text-white">1,500</span>
                        <span className="text-[11px] text-gray-500 font-medium">Available: 3,200 USDT</span>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-b from-[#5eead4] to-[#10b981] flex items-center justify-center border-4 border-[#111e17] shadow-[0_0_15px_rgba(16,185,129,0.4)] z-30">
                      <svg className="w-4 h-4 text-[#0a110e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>

                    {/* Buy Section */}
                    <div className="bg-[#192b22] rounded-xl p-3.5 border border-[#10b981]/20 shadow-inner">
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                        <span className="font-medium text-gray-300">Buy</span>
                        <span className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded border border-white/5">
                          <svg viewBox="0 0 2500 2500" className="w-3 h-3 text-[#C2A633]" fill="currentColor"><path d="M1250 0c690.355 0 1250 559.645 1250 1250 0 690.355-559.645 1250-1250 1250C559.645 2500 0 1940.355 0 1250 0 559.645 559.645 0 1250 0zm317.848 1633.243c224.234-73.045 329.832-243.518 328.614-434.25-1.218-190.731-118.1-344.135-269.07-396.488-29.22-10.957-60.875-18.261-94.965-24.351v-120.53h-85.228v108.356c-26.785 0-53.568.001-80.354 0V657.623h-85.225v108.356c-185.06-2.435-316.544 0-316.544 0l-14.61 97.4s76.7 17.045 76.7 20.697c0 3.652 4.871 602.632 4.871 602.632-4.871 7.306-76.7 19.48-76.7 19.48l-23.132 108.356s143.66 4.871 349.409 1.218v121.748h85.225V1618.14c26.786 0 53.569 0 80.354 0v116.877h85.228v-115.66c51.135-4.871 96.182-14.61 135.403-29.22zm-355.59-679.333c160.71-3.652 254.456 46.265 254.456 160.709 0 114.445-92.53 158.275-254.456 153.404V953.91zm0 398.924c185.06 0 295.851 46.265 297.069 178.97 1.218 132.705-112.008 183.84-297.069 178.97V1352.834z"/></svg>
                          DOGE <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-2xl font-black text-white">0.01587</span>
                        <span className="text-[11px] text-gray-500 font-medium">Estimated Fee: 2.5 USDT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials, Cookie, Scroll */}
        <div className="page-container relative z-20 w-full mt-12 mb-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Socials */}
          <div className="flex items-center gap-3 self-start lg:self-center">
            <span className="text-xs text-gray-400 font-medium mr-2">Follow Us</span>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#10b981]/20 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all border border-white/10">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

          {/* Cookie Banner */}
          <div className="flex-1 max-w-xl bg-[#0b1310] border border-[#10b981]/20 rounded-[20px] p-2 pl-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[11px] text-gray-400 leading-tight">
                This website uses cookies to enhance your browsing experience, analyze<br className="hidden md:block" />
                traffic, and improve our services.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0 pr-1">
              <button className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300 text-xs font-medium hover:bg-white/5 transition-colors">
                Decline
              </button>
              <button className="px-5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-gray-200 shadow-md transition-colors">
                Accept
              </button>
            </div>
          </div>

          {/* Scroll */}
          <div className="flex items-center gap-3 text-gray-400 text-xs font-medium cursor-pointer hover:text-white transition-colors group self-end lg:self-center">
            Scroll to explore
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors bg-white/5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

        </div>
      </section>\n"""

new_content = pattern.sub(new_hero, content)

with open('src/pages/Landing.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
