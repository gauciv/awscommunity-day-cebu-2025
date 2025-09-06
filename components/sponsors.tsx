"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)

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

  const renderSponsorTier = (tierKey: keyof typeof tierConfig, sponsorList: any[]) => {
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
          {/* Tier Label - enhanced with theme colors */}
          <div className={`${tier.color} ${tier.textColor} flex items-center justify-center relative force-animate`}
               style={{
                  width: '70px',
                  height: '180px',
                  clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
                  animation: `${tierKey}Glow 3s ease-in-out infinite`
                }}>
            <h3 className="text-xl font-black tracking-wider transform -rotate-90 whitespace-nowrap" style={{ color: '#000000' }}>
              {tier.title}
            </h3>
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 opacity-30 blur-sm ${tier.color}`}
                 style={{
                   clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
                 }}></div>
          </div>
          
          {/* Visual Connector */}
          <div 
            className="w-8 h-0.5 self-center relative"
            style={{
              background: `linear-gradient(90deg, ${tier.themeColor} 0%, ${tier.outlineColor} 50%, ${tier.themeColor} 100%)`,
              marginTop: '90px'
            }}
          >
            <div 
              className="absolute w-2 h-2 rounded-full -right-1 -top-0.75"
              style={{ backgroundColor: tier.outlineColor }}
            ></div>
          </div>
          
          {/* Sponsors Container - with tier-specific outline colors */}
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
                  width: '220px',
                  height: '140px',
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
                
                <Image
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  width={200}
                  height={130}
                  className="object-contain relative z-10 filter group-hover:brightness-110 transition-all duration-300"
                  style={{ 
                    maxWidth: '200px',
                    maxHeight: '130px',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
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
        {/* Section Header - Enhanced */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Our Esteemed Sponsors
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thank you to our amazing sponsors who make AWS Community Day Cebu possible
          </p>
          
          {/* Decorative constellation accent */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
            <div className="w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* National and Local Sponsors - Enhanced Two Column Layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* National Sponsors */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    National Sponsors
                  </span>
                </h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
              </div>
              <div className="space-y-8">
                {renderSponsorTier('platinum', nationalSponsors.platinum)}
                {renderSponsorTier('gold', nationalSponsors.gold)}
              </div>
            </div>

            {/* Local Sponsors */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Local Sponsors
                  </span>
                </h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
              </div>
              <div className="space-y-8">
                {renderSponsorTier('gold', localSponsors.gold)}
                {renderSponsorTier('silver', localSponsors.silver)}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our amazing sponsors and showcase your brand to 200+ cloud enthusiasts
            </p>
            <a
              href="mailto:awscloudclubctu@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}