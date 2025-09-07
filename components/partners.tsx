"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

// Loading skeleton component for partner images
const PartnerImageSkeleton = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'w-[180px] h-[100px]',
    medium: 'w-[220px] h-[140px]',
    large: 'w-[300px] h-[160px]'
  }
  
  return (
    <div className={`bg-slate-700/50 animate-pulse rounded-lg flex items-center justify-center ${sizeClasses[size]}`}>
      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin"></div>
    </div>
  )
}

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
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

    const element = document.getElementById("partners")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleImageLoad = (name: string) => {
    setLoadedImages(prev => ({ ...prev, [name]: true }))
  }

  // Venue Partner
  const venuePartner = {
    name: 'UPCSG',
    logo: '/images/partners/upcsg.png',
    alt: 'University of the Philippines Cebu Student Guild',
  }

  // Community Partners
  const communityPartners = [
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
    <div className="venue-partner-container relative mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Venue Partner
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
      </div>

      <div className="flex justify-center">
        <div className="group transition-all duration-300 hover:scale-105">
          {!loadedImages[venuePartner.name] && (
            <div className="w-48 h-32 bg-slate-700/30 animate-pulse rounded"></div>
          )}
          <Image
            src={venuePartner.logo}
            alt={venuePartner.alt}
            width={600}
            height={500}
            className={`object-contain transition-all duration-300 ${
              !loadedImages[venuePartner.name] ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            style={{ 
              width: 'auto',
              height: 'auto',
              maxHeight: '230px',
              filter: 'brightness(1.05) contrast(1.05)'
            }}
            onLoad={() => handleImageLoad(venuePartner.name)}
            onError={() => {
              console.error(`Failed to load image: ${venuePartner.logo}`)
              handleImageLoad(venuePartner.name)
            }}
            unoptimized={venuePartner.logo.endsWith('.png')}
          />
        </div>
      </div>
    </div>
  )

  const renderCommunityPartners = () => (
    <div className="community-partners-container relative mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Community Partners
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Event Banner Style - Compact Horizontal Layout */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {communityPartners.map((partner, index) => (
            <div
              key={partner.name}
              className="group transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {!loadedImages[partner.name] && (
                <div className="w-24 h-16 bg-slate-700/30 animate-pulse rounded"></div>
              )}
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={300}
                height={200}
                className={`object-contain transition-all duration-300 ${
                  !loadedImages[partner.name] ? 'opacity-0 absolute' : 'opacity-100'
                }`}
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  maxHeight: partner.name === 'CISCO' ? '180px' : '110px',
                  filter: 'brightness(1.05) contrast(1.05)'
                }}
                onLoad={() => handleImageLoad(partner.name)}
                onError={() => {
                  console.error(`Failed to load image: ${partner.logo}`)
                  handleImageLoad(partner.name)
                }}
                unoptimized={partner.logo.endsWith('.png')}
              />
            </div>
          ))}
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
