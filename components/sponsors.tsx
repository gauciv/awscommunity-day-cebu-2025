"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

// Loading skeleton component for sponsor images
const SponsorImageSkeleton = ({ isNational }: { isNational: boolean }) => (
  <div 
    className="bg-slate-700/50 animate-pulse rounded-lg flex items-center justify-center"
    style={{ 
      width: isNational ? '250px' : '200px',
      height: isNational ? '160px' : '130px'
    }}
  >
    <div className="w-8 h-8 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin"></div>
  </div>
)

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeView, setActiveView] = useState<'national' | 'local'>('national')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("sponsors")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleToggle = (view: 'national' | 'local') => {
    if (view === activeView) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveView(view)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 150)
  }

  const handleImageLoad = (sponsorName: string) => {
    setLoadedImages(prev => ({ ...prev, [sponsorName]: true }))
  }

  const nationalSponsors = {
    platinum: [
      {
        name: 'AWS',
        logo: '/aws-logo.svg',
        alt: 'Amazon Web Services'
      }
    ],
    gold: [
      {
        name: 'LegalMatch',
        logo: '/images/sponsors/legalmatch-logo.jpg',
        alt: 'LegalMatch'
      }
    ]
  }

  const localSponsors = {
    gold: [
      {
        name: 'The Company',
        logo: '/images/sponsors/the-company-logo.jpg',
        alt: 'The Company'
      }
    ],
    silver: [
      {
        name: 'Mata Technologies',
        logo: '/images/sponsors/mata-technologies-logo.png',
        alt: 'Mata Technologies'
      }
    ]
  }

  const tierConfig = {
    platinum: {
      title: 'PLATINUM',
      color: 'bg-gray-50',
      textColor: 'text-black',
      borderColor: 'border-gray-50',
      glowClass: 'tier-glow-platinum',
      themeColor: 'rgba(249, 250, 251, 0.6)',
      particleColor: 'rgba(255, 255, 255, 0.8)',
      outlineColor: 'rgba(249, 250, 251, 0.7)'
    },
    gold: {
      title: 'GOLD',
      color: 'bg-yellow-400',
      textColor: 'text-black',
      borderColor: 'border-yellow-400',
      glowClass: 'tier-glow-gold',
      themeColor: 'rgba(250, 204, 21, 0.6)',
      particleColor: 'rgba(250, 204, 21, 0.9)',
      outlineColor: 'rgba(250, 204, 21, 0.8)'
    },
    silver: {
      title: 'SILVER',
      color: 'bg-gray-400',
      textColor: 'text-white',
      borderColor: 'border-gray-400',
      glowClass: 'tier-glow-silver',
      themeColor: 'rgba(156, 163, 175, 0.6)',
      particleColor: 'rgba(192, 192, 192, 0.8)',
      outlineColor: 'rgba(156, 163, 175, 0.7)'
    }
  }

  const getGlowAnimation = (tierKey: string) => {
    const glowColors = {
      platinum: 'rgba(249, 250, 251, 0.6)',
      gold: 'rgba(250, 204, 21, 0.6)',
      silver: 'rgba(156, 163, 175, 0.6)'
    }
    
    return {
      animation: 'dimGlow 3s ease-in-out infinite',
      '--glow-color': glowColors[tierKey as keyof typeof glowColors]
    }
  }

  const renderSponsorTier = (tierKey: keyof typeof tierConfig, sponsorList: any[], isNational: boolean = false) => {
    if (sponsorList.length === 0) return null
    
    const tier = tierConfig[tierKey]
    
    return (
      <div className="flex justify-center mb-12 relative">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{ 
              backgroundColor: tier.particleColor,
              top: '20%', 
              left: '10%',
              animationDelay: '0s',
              animationDuration: '3s'
            }}
          ></div>
          <div 
            className="absolute w-0.5 h-0.5 rounded-full animate-pulse"
            style={{ 
              backgroundColor: tier.particleColor,
              top: '60%', 
              right: '15%',
              animationDelay: '1s',
              animationDuration: '4s'
            }}
          ></div>
          <div 
            className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ 
              backgroundColor: tier.particleColor,
              bottom: '30%', 
              left: '20%',
              animationDelay: '2s',
              animationDuration: '5s'
            }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 rounded-lg opacity-20 blur-2xl"
          style={{
            background: `radial-gradient(circle at center, ${tier.themeColor} 0%, transparent 70%)`
          }}
        ></div>

        <div className="flex items-start relative z-10">
          {/* Tier Label - bigger for national sponsors */}
          <div className={`${tier.color} ${tier.textColor} flex items-center justify-center relative force-animate`}
               style={{
                  width: isNational ? '85px' : '70px',
                  height: isNational ? '200px' : '180px',
                  clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
                  animation: `${tierKey}Glow 3s ease-in-out infinite`
                }}>
            <h3 className={`${isNational ? 'text-2xl' : 'text-xl'} font-black tracking-wider transform -rotate-90 whitespace-nowrap`} style={{ color: '#000000' }}>
              {tier.title}
            </h3>
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 opacity-30 blur-sm ${tier.color}`}
                 style={{
                   clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
                 }}></div>
          </div>
          
          {/* Visual Connector - bigger for national */}
          <div 
            className={`${isNational ? 'w-12' : 'w-8'} h-0.5 self-center relative`}
            style={{
              background: `linear-gradient(90deg, ${tier.themeColor} 0%, ${tier.outlineColor} 50%, ${tier.themeColor} 100%)`,
              marginTop: isNational ? '100px' : '90px'
            }}
          >
            <div 
              className={`absolute ${isNational ? 'w-3 h-3' : 'w-2 h-2'} rounded-full -right-1 ${isNational ? '-top-1.25' : '-top-0.75'}`}
              style={{ backgroundColor: tier.outlineColor }}
            ></div>
          </div>
          
          {/* Sponsors Container - bigger for national */}
          <div className="flex items-start gap-6 p-4 bg-slate-800/70 backdrop-blur-sm shadow-xl border-2" 
               style={{
                 clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                 borderColor: tier.outlineColor,
                 outline: `2px solid ${tier.outlineColor}`,
                 outlineOffset: '4px',
                 boxShadow: `0 0 0 1px ${tier.themeColor}, 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px ${tier.themeColor}`
               }}>
            {sponsorList.map((sponsor, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/80 border-2 hover:bg-slate-700/90 transition-all duration-500 flex items-center justify-center hover:scale-105 shadow-lg group relative overflow-hidden backdrop-blur-sm rounded-lg`}
                style={{ 
                  width: isNational ? '280px' : '220px',
                  height: isNational ? '180px' : '140px',
                  borderColor: tier.outlineColor,
                  boxShadow: `0 0 15px ${tier.themeColor}20, 0 4px 8px rgba(0, 0, 0, 0.3)`
                }}
              >
                {/* Tier-specific glow animation on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500"
                  style={{ backgroundColor: tier.themeColor }}
                ></div>
                
                {/* Constellation accents */}
                <div 
                  className="absolute top-2 right-2 w-1 h-1 rounded-full animate-pulse"
                  style={{ backgroundColor: tier.particleColor }}
                ></div>
                <div 
                  className="absolute bottom-2 left-2 w-0.5 h-0.5 rounded-full animate-pulse"
                  style={{ backgroundColor: tier.particleColor, animationDelay: '1s' }}
                ></div>
                
                {/* Image with loading state */}
                <div className="relative">
                  {!loadedImages[sponsor.name] && (
                    <SponsorImageSkeleton isNational={isNational} />
                  )}
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    width={isNational ? 250 : 200}
                    height={isNational ? 160 : 130}
                    className={`object-contain relative z-10 filter group-hover:brightness-110 transition-all duration-300 ${
                      !loadedImages[sponsor.name] ? 'opacity-0 absolute' : 'opacity-100'
                    }`}
                    onLoad={() => handleImageLoad(sponsor.name)}
                    onError={() => handleImageLoad(sponsor.name)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="sponsors" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects with Dynamic Constellations */}
      <div className="absolute inset-0">
        {/* Original gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Dynamic Constellation Elements */}
        <div className="constellation-container">
          {/* Floating constellation points */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-2/3 left-1/8 w-0.5 h-0.5 bg-yellow-400/70 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 right-1/8 w-2 h-2 bg-indigo-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '6s' }}></div>
          
          {/* Connecting constellation lines */}
          <div className="absolute top-1/4 left-1/6 w-16 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-0.5 bg-gradient-to-l from-purple-400/20 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Sponsor-specific ambient lighting */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-radial from-yellow-400/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes platinumGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2) !important;
          }
          50% { 
            box-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.7), 0 0 90px rgba(255, 255, 255, 0.4) !important;
          }
        }
        @keyframes goldGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(250, 204, 21, 0.8), 0 0 40px rgba(250, 204, 21, 0.5), 0 0 60px rgba(250, 204, 21, 0.3) !important;
          }
          50% { 
            box-shadow: 0 0 30px rgba(250, 204, 21, 1), 0 0 60px rgba(250, 204, 21, 0.8), 0 0 90px rgba(250, 204, 21, 0.5) !important;
          }
        }
        @keyframes silverGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(192, 192, 192, 0.8), 0 0 40px rgba(192, 192, 192, 0.5), 0 0 60px rgba(192, 192, 192, 0.3) !important;
          }
          50% { 
            box-shadow: 0 0 30px rgba(192, 192, 192, 1), 0 0 60px rgba(192, 192, 192, 0.8), 0 0 90px rgba(192, 192, 192, 0.5) !important;
          }
        }
        /* Override reduced motion for our specific animations */
        @media (prefers-reduced-motion: reduce) {
          .force-animate {
            animation-duration: 3s !important;
            animation-iteration-count: infinite !important;
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-12deg); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Toggle - Enhanced */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Our Esteemed Sponsors
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Thank you to our amazing sponsors who make AWS Community Day Cebu possible
          </p>
          
          {/* Interactive Toggle - Simple Design, PC Only */}
          <div className="hidden lg:flex justify-center items-center mb-12">
            <div className="flex bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-1 shadow-xl">
              <button
                onClick={() => handleToggle('national')}
                className={`relative px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 ease-out ${
                  activeView === 'national'
                    ? 'bg-blue-500 text-white shadow-lg transform translate-y-0'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                National Sponsors
              </button>
              <button
                onClick={() => handleToggle('local')}
                className={`relative px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 ease-out ${
                  activeView === 'local'
                    ? 'bg-green-500 text-white shadow-lg transform translate-y-0'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Local Sponsors
              </button>
            </div>
          </div>
          
          {/* Decorative constellation accent */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
            <div className="w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Dynamic Sponsor Showcase */}
        <div className="mb-20">
          {/* Desktop: Side by Side Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Showcase Section - Takes 2/3 space */}
            <div className={`lg:col-span-2 transition-all duration-300 ease-out ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  <span className={`bg-gradient-to-r ${
                    activeView === 'national' 
                      ? 'from-blue-400 to-cyan-400' 
                      : 'from-green-400 to-blue-400'
                  } bg-clip-text text-transparent`}>
                    {activeView === 'national' ? 'National Sponsors' : 'Local Sponsors'}
                  </span>
                </h3>
                <div className={`w-24 h-1.5 bg-gradient-to-r ${
                  activeView === 'national' 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-green-400 to-blue-400'
                } mx-auto mb-6 transition-all duration-300 ease-out`}></div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {activeView === 'national' 
                    ? 'Our prestigious national partners supporting cloud innovation across the Philippines'
                    : 'Amazing local businesses and organizations championing our Cebu tech community'
                  }
                </p>
              </div>

              {/* Showcased Sponsors */}
              <div className="space-y-10">
                {activeView === 'national' ? (
                  <>
                    {renderSponsorTier('platinum', nationalSponsors.platinum, true)}
                    {renderSponsorTier('gold', nationalSponsors.gold, true)}
                  </>
                ) : (
                  <>
                    {renderSponsorTier('gold', localSponsors.gold, true)}
                    {renderSponsorTier('silver', localSponsors.silver, true)}
                  </>
                )}
              </div>
            </div>

            {/* Secondary Sponsors Section - Takes 1/3 space */}
            <div className={`lg:col-span-1 transition-all duration-300 ease-out ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="text-center mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-400 mb-4">
                  {activeView === 'national' ? 'Local Sponsors' : 'National Sponsors'}
                </h4>
                <div className="w-16 h-0.5 bg-gray-500 mx-auto mb-4"></div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  {activeView === 'national' 
                    ? 'Supporting our local Cebu community'
                    : 'Our national partners'
                  }
                </p>
              </div>

              {/* Secondary Sponsors - Compact View */}
              <div className="space-y-6 opacity-75 scale-90 transform">
                {activeView === 'national' ? (
                  <>
                    {renderSponsorTier('gold', localSponsors.gold, false)}
                    {renderSponsorTier('silver', localSponsors.silver, false)}
                  </>
                ) : (
                  <>
                    {renderSponsorTier('platinum', nationalSponsors.platinum, false)}
                    {renderSponsorTier('gold', nationalSponsors.gold, false)}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Original Simple Layout */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* National Sponsors */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      National Sponsors
                    </span>
                  </h3>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
                </div>
                <div className="space-y-8">
                  {renderSponsorTier('platinum', nationalSponsors.platinum, false)}
                  {renderSponsorTier('gold', nationalSponsors.gold, false)}
                </div>
              </div>

              {/* Local Sponsors */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Local Sponsors
                    </span>
                  </h3>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
                </div>
                <div className="space-y-8">
                  {renderSponsorTier('gold', localSponsors.gold, false)}
                  {renderSponsorTier('silver', localSponsors.silver, false)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}