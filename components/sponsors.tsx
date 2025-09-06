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
      color: 'bg-gray-200',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300'
    },
    gold: {
      title: 'GOLD',
      color: 'bg-yellow-400',
      textColor: 'text-gray-900',
      borderColor: 'border-yellow-400'
    },
    silver: {
      title: 'SILVER',
      color: 'bg-gray-300',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400'
    }
  }

  const renderSponsorTier = (tierKey: keyof typeof tierConfig, sponsorList: any[]) => {
    if (sponsorList.length === 0) return null
    
    const tier = tierConfig[tierKey]
    
    return (
      <div className="flex justify-center mb-6">
        <div className="flex items-start">
          {/* Tier Label - increased height, proper width for vertical text */}
          <div className={`${tier.color} ${tier.textColor} flex items-center justify-center px-6 min-w-[80px] relative`}
               style={{
                 height: '160px',
                 clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
               }}>
            <h3 className="text-lg font-black tracking-wider transform -rotate-90 whitespace-nowrap">
              {tier.title}
            </h3>
          </div>
          
          {/* Sponsors Container */}
          <div className="flex items-start gap-4 p-4 bg-slate-800/60 backdrop-blur-sm" 
               style={{
                 clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
               }}>
            {sponsorList.map((sponsor, index) => (
              <div 
                key={index} 
                className={`bg-gray-600 ${tier.borderColor} border-2 hover:bg-gray-500 transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg`}
                style={{ 
                  width: '180px',
                  height: '120px'
                }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  width={160}
                  height={100}
                  className="object-contain"
                  style={{ 
                    maxWidth: '160px',
                    maxHeight: '100px',
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

        {/* National Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              NATIONAL
            </span>
          </h3>
          <div className="space-y-4">
            {renderSponsorTier('platinum', nationalSponsors.platinum)}
            {renderSponsorTier('gold', nationalSponsors.gold)}
          </div>
        </div>

        {/* Local Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              LOCAL
            </span>
          </h3>
          <div className="space-y-4">
            {renderSponsorTier('gold', localSponsors.gold)}
            {renderSponsorTier('silver', localSponsors.silver)}
          </div>
        </div>
      </div>
    </section>
  )
}