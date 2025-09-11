"use client"

import { useState, useEffect } from 'react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { PerformanceMonitor } from '@/lib/performance-monitor'

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Start animation earlier
    )

    const element = document.getElementById("sponsors")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Preload critical sponsor images
  useEffect(() => {
    // Preload AWS logo and Legal Match logo as they're the most important
    const criticalImages = [
      '/aws-logo.svg',
      '/images/sponsors/legalmatch-logo.jpg'
    ]
    
    criticalImages.forEach(src => {
      const img = new Image()
      const startTime = performance.now()
      
      img.onload = () => {
        PerformanceMonitor.trackImageLoad(src, startTime, true)
        PerformanceMonitor.markAsPreloaded(src)
      }
      
      img.onerror = () => {
        console.error(`Failed to preload critical sponsor image: ${src}`)
      }
      
      img.src = src
    })
  }, [])

  // National Sponsors
  const nationalSponsors = {
    platinum: [
      { name: 'AWS', logo: '/aws-logo.svg', alt: 'Amazon Web Services' }
    ],
    gold: [
      { name: 'Legal Match', logo: '/images/sponsors/legalmatch-logo.jpg', alt: 'Legal Match' }
    ]
  }

  // Local Sponsors
  const localSponsors = {
    gold: [
      { name: 'The Company', logo: '/images/sponsors/the-company-logo.jpg', alt: 'The Company' }
    ],
    silver: [
      { name: 'Mata Technologies', logo: '/images/sponsors/mata-technologies-logo.png', alt: 'Mata Technologies' },
      { name: 'Accenture', logo: '/images/sponsors/accenture-logo.png', alt: 'Accenture' }
    ]
  }

  // Tier styling for plaques
  const getTierStyle = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return {
          gradient: 'from-slate-200 via-white to-slate-200',
          text: 'text-slate-800',
          border: 'border-slate-300',
          shadow: 'shadow-lg shadow-slate-200/50'
        }
      case 'gold':
        return {
          gradient: 'from-yellow-200 via-yellow-300 to-yellow-200',
          text: 'text-yellow-900',
          border: 'border-yellow-400',
          shadow: 'shadow-lg shadow-yellow-200/50'
        }
      case 'silver':
        return {
          gradient: 'from-gray-200 via-gray-300 to-gray-200',
          text: 'text-gray-800',
          border: 'border-gray-400',
          shadow: 'shadow-lg shadow-gray-200/50'
        }
      default:
        return {
          gradient: 'from-gray-200 via-gray-300 to-gray-200',
          text: 'text-gray-800',
          border: 'border-gray-400',
          shadow: 'shadow-lg shadow-gray-200/50'
        }
    }
  }

  const renderSponsor = (sponsor: any, tier: string, index: number) => {
    const tierStyle = getTierStyle(tier)
    
    // Determine priority loading for above-the-fold sponsors
    const isPriority = index < 2 // Load first 2 sponsors with priority
    
    // Calculate responsive sizes more efficiently
    const getResponsiveSizes = () => {
      if (sponsor.name === 'Legal Match') {
        return '(max-width: 640px) 90vw, (max-width: 768px) 400px, 400px'
      }
      return tier === 'platinum' ? 
        '(max-width: 640px) 80vw, (max-width: 768px) 200px, 200px' :
        tier === 'gold' ? 
          '(max-width: 640px) 70vw, (max-width: 768px) 300px, 300px' :
          '(max-width: 640px) 60vw, (max-width: 768px) 150px, 150px'
    }
    
    return (
      <div
        key={sponsor.name}
        className={`group transition-all duration-300 hover:scale-105 flex flex-col items-center ${
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
        }`}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Logo */}
        <div className={`mb-4 ${sponsor.name === 'Legal Match' ? 'mx-4 sm:mx-0' : ''}`}>
          <div 
            className="relative transition-all duration-300"
            style={{ 
              width: tier === 'platinum' ? '200px' : tier === 'gold' ? (sponsor.name === 'Legal Match' ? '400px' : '300px') : '150px',
              height: tier === 'platinum' ? '150px' : tier === 'gold' ? (sponsor.name === 'Legal Match' ? '240px' : '180px') : '130px',
            }}
          >
            <OptimizedImage
              src={sponsor.logo}
              alt={sponsor.alt}
              fill
              className="object-contain transition-all duration-300 group-hover:scale-105 brightness-105 contrast-105"
              sizes={getResponsiveSizes()}
              priority={isPriority}
              loading={isPriority ? "eager" : "lazy"}
              quality={isPriority ? 90 : 80}
              onLoad={() => {
                // Track performance for non-preloaded images
                if (!PerformanceMonitor.wasPreloaded(sponsor.logo)) {
                  PerformanceMonitor.trackImageLoad(sponsor.logo, performance.now())
                }
              }}
              onError={() => {
                console.error(`Failed to load sponsor image: ${sponsor.logo}`)
              }}
            />
          </div>
        </div>
        
        {/* Tier Plaque */}
        <div className={`px-6 py-3 rounded-xl bg-gradient-to-r ${tierStyle.gradient} ${tierStyle.border} ${tierStyle.shadow} border-2 transition-all duration-300 group-hover:scale-105`}>
          <span className={`font-bold text-sm uppercase tracking-wider ${tierStyle.text}`}>
            {tier}
          </span>
        </div>
      </div>
    )
  }

  return (
    <section id="sponsors" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Floating constellation points */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            We're grateful for the support of our amazing sponsors who make this event possible.
          </p>
          
          {/* Decorative accent */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"></div>
            <div className="w-0.5 h-0.5 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-0.5 h-0.5 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-1 h-1 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* National Sponsors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                National Sponsors
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          </div>

          {/* Platinum Sponsors */}
          {nationalSponsors.platinum.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                {nationalSponsors.platinum.map((sponsor, index) => 
                  renderSponsor(sponsor, 'platinum', index)
                )}
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {nationalSponsors.gold.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                {nationalSponsors.gold.map((sponsor, index) => 
                  renderSponsor(sponsor, 'gold', index)
                )}
              </div>
            </div>
          )}
        </div>

        {/* Local Sponsors */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Local Sponsors
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4"></div>
          </div>

          {/* Gold Sponsors */}
          {localSponsors.gold.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                {localSponsors.gold.map((sponsor, index) => 
                  renderSponsor(sponsor, 'gold', index)
                )}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {localSponsors.silver.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                {localSponsors.silver.map((sponsor, index) => 
                  renderSponsor(sponsor, 'silver', index)
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
