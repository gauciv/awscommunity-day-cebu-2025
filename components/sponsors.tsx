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
      borderColor: 'border-gray-50'
    },
    gold: {
      title: 'GOLD',
      color: 'bg-yellow-400',
      textColor: 'text-black',
      borderColor: 'border-yellow-400'
    },
    silver: {
      title: 'SILVER',
      color: 'bg-gray-400',
      textColor: 'text-white',
      borderColor: 'border-gray-400'
    }
  }

  const renderSponsorTier = (tierKey: keyof typeof tierConfig, sponsorList: any[]) => {
    if (sponsorList.length === 0) return null
    
    const tier = tierConfig[tierKey]
    
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-start">
          {/* Tier Label - uniform width for all tiers */}
          <div className={`${tier.color} ${tier.textColor} flex items-center justify-center relative shadow-2xl`}
               style={{
                 width: '60px',
                 height: '160px',
                 clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
               }}>
            <h3 className="text-xl font-black tracking-wider transform -rotate-90 whitespace-nowrap drop-shadow-md">
              {tier.title}
            </h3>
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 opacity-20 blur-sm ${tier.color}`}
                 style={{
                   clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
                 }}></div>
          </div>
          
          {/* Sponsors Container */}
          <div className="flex items-start gap-4 p-3 bg-slate-800/70 backdrop-blur-sm shadow-xl" 
               style={{
                 clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
               }}>
            {sponsorList.map((sponsor, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/80 ${tier.borderColor} border-3 hover:bg-slate-700/90 transition-all duration-500 flex items-center justify-center hover:scale-105 shadow-lg group relative overflow-hidden backdrop-blur-sm`}
                style={{ 
                  width: '200px',
                  height: '130px'
                }}
              >
                {/* Glow animation on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 ${tier.borderColor.replace('border-', 'bg-')} blur-md transition-all duration-500`}></div>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  width={190}
                  height={120}
                  className="object-contain relative z-10 filter group-hover:brightness-110 transition-all duration-300"
                  style={{ 
                    maxWidth: '190px',
                    maxHeight: '120px',
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
    <section id="sponsors" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Our Esteemed Sponsors
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make AWS Community Day Cebu possible
          </p>
        </div>

        {/* National and Local Sponsors - Two Column Layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* National Sponsors */}
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  National Sponsors
                </span>
              </h3>
              <div className="space-y-4">
                {renderSponsorTier('platinum', nationalSponsors.platinum)}
                {renderSponsorTier('gold', nationalSponsors.gold)}
              </div>
            </div>

            {/* Local Sponsors */}
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Local Sponsors
                </span>
              </h3>
              <div className="space-y-4">
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