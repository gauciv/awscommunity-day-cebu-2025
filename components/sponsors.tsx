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
      textColor: 'text-gray-800',
      borderColor: 'border-gray-300'
    },
    gold: {
      title: 'GOLD',
      color: 'bg-yellow-400',
      textColor: 'text-gray-900',
      borderColor: 'border-yellow-500'
    },
    silver: {
      title: 'SILVER',
      color: 'bg-gray-300',
      textColor: 'text-gray-800',
      borderColor: 'border-gray-400'
    }
  }

  const renderSponsorTier = (tierKey: keyof typeof tierConfig, sponsorList: any[]) => {
    if (sponsorList.length === 0) return null
    
    const tier = tierConfig[tierKey]
    
    return (
      <div className="flex flex-col md:flex-row gap-0 mb-8">
        {/* Tier Label */}
        <div className={`${tier.color} ${tier.textColor} flex items-center justify-center min-w-[120px] md:min-w-[140px] px-4 py-6 md:py-8`}>
          <h3 className="text-sm md:text-base font-black tracking-wider transform md:-rotate-90 whitespace-nowrap">
            {tier.title}
          </h3>
        </div>
        
        {/* Sponsors Container */}
        <div className="flex flex-wrap gap-4 md:gap-6 p-4 md:p-6 bg-slate-900/60 border-l-0 md:border-l border-white/10 min-h-[120px] md:min-h-[140px] items-center">
          {sponsorList.map((sponsor, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/80 backdrop-blur-sm border-2 ${tier.borderColor} rounded-lg p-4 md:p-6 hover:bg-slate-700/80 transition-all duration-300 flex items-center justify-center`}
              style={{ 
                minWidth: '160px',
                minHeight: '100px',
                maxWidth: '220px',
                maxHeight: '120px'
              }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.alt}
                width={180}
                height={90}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                style={{ 
                  filter: 'brightness(0.95) contrast(1.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="sponsors" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/6 via-purple-500/10 to-indigo-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Our Esteemed Sponsors
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make AWS Community Day Cebu possible
          </p>
        </div>

        {/* National Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              National Sponsors
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent ml-4"></div>
          </h3>
          <div className="space-y-4">
            {renderSponsorTier('platinum', nationalSponsors.platinum)}
            {renderSponsorTier('gold', nationalSponsors.gold)}
          </div>
        </div>

        {/* Local Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Local Sponsors
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-4"></div>
          </h3>
          <div className="space-y-4">
            {renderSponsorTier('gold', localSponsors.gold)}
            {renderSponsorTier('silver', localSponsors.silver)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our amazing sponsors and showcase your brand to 200+ cloud enthusiasts
            </p>
            <a
              href="mailto:awscloudclubctu@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
