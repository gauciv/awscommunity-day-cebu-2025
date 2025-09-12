"use client"

import { useState, useEffect } from 'react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { PerformanceMonitor } from '@/lib/performance-monitor'

export function Partners() {
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

    const element = document.getElementById("partners")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Preload critical partner images
  useEffect(() => {
    // Preload venue partner and first few community partners
    const criticalImages = [
      '/images/partners/upcsg.png',
      '/images/partners/awscc-ctu.png',
      '/images/partners/devcon-cebu.png',
      '/images/partners/psits-ctu.png'
    ]
    
    criticalImages.forEach((src, index) => {
      const img = new Image()
      const startTime = performance.now()
      
      img.onload = () => {
        PerformanceMonitor.trackImageLoad(src, startTime, true)
        PerformanceMonitor.markAsPreloaded(src)
      }
      
      img.onerror = () => {
        console.error(`Failed to preload critical partner image: ${src}`)
      }
      
      // Stagger preloading to avoid overwhelming the network
      setTimeout(() => {
        img.src = src
      }, index * 100)
    })
  }, [])

  // Add resource hints for partner images
  useEffect(() => {
    // Add DNS prefetch for partner image domains
    const domains = ['images']
    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = `//${domain}`
      document.head.appendChild(link)
    })
  }, [])

  // Venue Partner
  const venuePartner = {
    name: 'UPCSG',
    logo: '/images/partners/upcsg.png',
    alt: 'University of the Philippines Cebu Student Guild',
  }

  // Community Partners
  const communityPartners = [
    { name: 'AWSCC CTU', logo: '/images/partners/awscc-ctu.png', alt: 'AWS Cloud Club CTU' },
    { name: 'Cisco', logo: '/images/partners/cisco.png', alt: 'Cisco' },
    { name: 'CITSC', logo: '/images/partners/citsc.png', alt: 'CITSC' },
    { name: 'CPEC', logo: '/images/partners/cpec.png', alt: 'CPEC' },
    { name: 'DevCon Cebu', logo: '/images/partners/devcon-cebu.png', alt: 'DevCon Cebu' },
    { name: 'GDGOC CTU', logo: '/images/partners/gdgoc-ctu.png', alt: 'Google Developer Groups on Campus CTU' },
    { name: 'ICPEP CITU', logo: '/images/partners/icpep-citu.png', alt: 'ICPEP CITU' },
    { name: 'ICPEP CTU', logo: '/images/partners/icpep-ctu.png', alt: 'ICPEP CTU' },
    { name: 'PizzaPy', logo: '/images/partners/pizzapy.png', alt: 'PizzaPy' },
    { name: 'PSITS CTU', logo: '/images/partners/psits-ctu.png', alt: 'Philippine Society of IT Students CTU' },
    { name: 'PSITS UC', logo: '/images/partners/psits-uc.png', alt: 'Philippine Society of IT Students UC' },
    { name: 'SWU Devs', logo: '/images/partners/swu-devs.png', alt: 'Southwestern University Developers' }
  ]

  const renderVenuePartner = () => (
    <div className="venue-partner-container relative mb-20 sm:mb-24 lg:mb-32">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Venue Partner
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
      </div>

      <div className="flex justify-center">
        <div className={`group transition-all duration-300 hover:scale-105 ${
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
        }`}>
          <div className="relative" style={{ maxWidth: '300px', maxHeight: '180px' }}>
            <OptimizedImage
              src={venuePartner.logo}
              alt={venuePartner.alt}
              width={300}
              height={180}
              className="object-contain transition-all duration-300 brightness-105 contrast-105"
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 280px, 300px"
              priority={true}
              loading="eager"
              quality={90}
              onLoad={() => {
                if (!PerformanceMonitor.wasPreloaded(venuePartner.logo)) {
                  PerformanceMonitor.trackImageLoad(venuePartner.logo, performance.now())
                }
              }}
              onError={() => {
                console.error(`Failed to load venue partner image: ${venuePartner.logo}`)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderCommunityPartners = () => (
    <div className="community-partners-container relative mb-16">
      <div className="text-center mb-12 mt-12 sm:mt-8 lg:mt-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Community Partners
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Event Banner Style - Compact Horizontal Layout */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {communityPartners.map((partner, index) => {
            const isPriority = index < 4 // First 4 partners get priority loading
            
            return (
              <div
                key={partner.name}
                className={`group transition-all duration-300 hover:scale-105 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="relative w-[120px] h-[100px] sm:w-[150px] sm:h-[120px]">
                  <OptimizedImage
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain transition-all duration-300 brightness-105 contrast-105"
                    sizes="(max-width: 640px) 120px, 150px"
                    priority={isPriority}
                    loading={isPriority ? "eager" : "lazy"}
                    quality={isPriority ? 85 : 75}
                    onLoad={() => {
                      if (!PerformanceMonitor.wasPreloaded(partner.logo)) {
                        PerformanceMonitor.trackImageLoad(partner.logo, performance.now())
                      }
                    }}
                    onError={() => {
                      console.error(`Failed to load community partner image: ${partner.logo}`)
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  return (
    <section id="partners" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects with Dynamic Constellations */}
      <div className="absolute inset-0">
        {/* Gradient orbs with partner theme colors */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Dynamic Constellation Elements */}
        <div className="constellation-container">
          {/* Floating constellation points */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-pink-400/80 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400/70 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-2/3 left-1/8 w-0.5 h-0.5 bg-purple-300/70 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 right-1/8 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '6s' }}></div>
          
          {/* Connecting constellation lines */}
          <div className="absolute top-1/4 left-1/6 w-16 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-0.5 bg-gradient-to-l from-cyan-400/20 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Partner-specific ambient lighting */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-radial from-purple-400/5 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-radial from-cyan-400/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Together with our incredible partners, we're building a stronger tech community in Cebu
          </p>
          
          {/* Decorative constellation accent */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"></div>
            <div className="w-0.5 h-0.5 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Venue Partner Section */}
        {renderVenuePartner()}

        {/* Community Partners Section */}
        {renderCommunityPartners()}
      </div>
    </section>
  )
}
