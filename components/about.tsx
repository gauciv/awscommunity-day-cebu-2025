
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Sparkles, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isImageLoading, setIsImageLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-rotate featured photo every 5 seconds (when autoplay is enabled)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedPhoto((prev) => (prev + 1) % galleryPhotos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Navigation functions
  const goToNext = () => {
    try {
      setIsImageLoading(true)
      setSelectedPhoto((prev) => (prev + 1) % galleryPhotos.length)
      setTimeout(() => setIsImageLoading(false), 300)
    } catch (error) {
      console.error('Error navigating to next photo:', error)
      setIsImageLoading(false)
    }
  }

  const goToPrevious = () => {
    try {
      setIsImageLoading(true)
      setSelectedPhoto((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
      setTimeout(() => setIsImageLoading(false), 300)
    } catch (error) {
      console.error('Error navigating to previous photo:', error)
      setIsImageLoading(false)
    }
  }

  const goToSlide = (index: number) => {
    try {
      if (index !== selectedPhoto && index >= 0 && index < galleryPhotos.length) {
        setIsImageLoading(true)
        setSelectedPhoto(index)
        setTimeout(() => setIsImageLoading(false), 300)
      }
    } catch (error) {
      console.error('Error navigating to slide:', error)
      setIsImageLoading(false)
    }
  }



  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const galleryPhotos = [
    {
      id: 1,
      src: "/images/community-gallery/community-pic1.jpg",
      alt: "AWS Community Day Cebu - Workshop Session",
      title: "Hands-on Learning",
      description: "Participants engaging in interactive AWS workshops and technical sessions"
    },
    {
      id: 2,
      src: "/images/community-gallery/community-pic2.jpg",
      alt: "AWS Community Day Cebu - Keynote Presentation",
      title: "Expert Insights",
      description: "Industry leaders sharing their knowledge and AWS best practices"
    },
    {
      id: 3,
      src: "/images/community-gallery/community-pic3.jpg",
      alt: "AWS Community Day Cebu - Networking Session",
      title: "Community Networking",
      description: "Developers and cloud enthusiasts connecting and sharing experiences"
    },
    {
      id: 4,
      src: "/images/community-gallery/community-pic4.jpg",
      alt: "AWS Community Day Cebu - Technical Demo",
      title: "Live Demonstrations",
      description: "Real-world AWS solutions and architecture demonstrations"
    },
    {
      id: 5,
      src: "/images/community-gallery/community-pic5.jpg",
      alt: "AWS Community Day Cebu - Group Discussion",
      title: "Collaborative Learning",
      description: "Interactive discussions and knowledge sharing among participants"
    },
    {
      id: 6,
      src: "/images/community-gallery/community-pic6.jpg",
      alt: "AWS Community Day Cebu - Community Group",
      title: "Together We Grow",
      description: "The vibrant AWS community in Cebu coming together for learning and growth"
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Constellation Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/6 via-purple-500/10 to-indigo-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        


        <div
          className="absolute top-32 right-16 w-14 h-14 opacity-25 hover:opacity-55 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/cassiopeia.svg" 
            alt="Cassiopeia constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-blue-500/50"
          />
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div
          className="absolute bottom-24 left-20 w-18 h-18 opacity-35 hover:opacity-65 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/orion.svg" 
            alt="Orion constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-purple-500/50"
          />
          <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div
          className="absolute bottom-40 right-24 w-12 h-12 opacity-20 hover:opacity-50 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/pegasus.svg" 
            alt="Pegasus constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-yellow-500/50"
          />
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Minimal twinkling stars */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-400/50 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-twinkle delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            About the Event
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tight px-2 sm:px-0">
            What is{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              AWS Community Day
            </span>
            ?
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-3 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              AWS Community Days are community-organized cloud education events that feature technical discussions and
              demos by expert AWS users and industry leaders from around the world. These events are designed to educate
              everyone, regardless of their level of AWS knowledge.
            </p>
            <div className="relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/20 shadow-2xl">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                {/* Plaque-style Join the Movement Badge */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 p-0.5 rounded-lg shadow-2xl">
                    <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-lg px-3 sm:px-4 py-1 sm:py-2 relative overflow-hidden">
                      {/* Plaque shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg"></div>
                      <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full"></div>
                      
                      {/* Content */}
                      <div className="relative flex items-center justify-center text-orange-900">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 drop-shadow-sm" />
                        <span className="font-black text-xs sm:text-sm tracking-wide drop-shadow-sm">
                          JOIN THE MOVEMENT
                        </span>
                      </div>
                      
                      {/* Bottom highlight */}
                      <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-amber-500/20 to-orange-600/20 rounded-lg blur-md -z-10"></div>
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-semibold pt-2 sm:pt-0">
                Join <span className="text-orange-400 font-black">200+</span> developers, architects, and cloud enthusiasts in Cebu for an unforgettable day of learning,
                networking, and innovation. Experience hands-on workshops, inspiring keynotes, and connect with the vibrant
                AWS community in the Philippines.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Photo Gallery */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0">
              Community <span className="text-orange-400">Gallery</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
              Moments from our AWS Community events showcasing learning, networking, and innovation
            </p>
          </div>

          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >

            {/* Enhanced Carousel with Navigation - Mobile optimized */}
            <div className="relative mb-4 sm:mb-6 md:mb-8 group">
              <div 
                className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] relative">
                  <OptimizedImage
                    src={galleryPhotos[selectedPhoto].src}
                    alt={galleryPhotos[selectedPhoto].alt}
                    fill
                    className={`object-cover transition-all duration-700 ease-out ${isImageLoading ? 'opacity-70 scale-105' : 'opacity-100 scale-100'}`}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={true}
                    loading="eager"
                  />

                  {/* Loading indicator */}
                  {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Navigation Arrows - Mobile optimized */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>


                  
                  {/* Minimal overlay with counter only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">{galleryPhotos[selectedPhoto].title}</h4>
                        </div>
                        <div className="text-white/90 text-xs sm:text-sm font-medium bg-black/50 px-2 py-1 rounded-full">
                          {selectedPhoto + 1} / {galleryPhotos.length}
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            {/* Enhanced Thumbnail Navigation - Mobile optimized */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="flex gap-1 sm:gap-2 p-1 sm:p-2 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 overflow-x-auto max-w-full scrollbar-hide">
                {galleryPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToSlide(index)}
                    className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 touch-manipulation ${
                      selectedPhoto === index
                        ? "ring-2 ring-orange-500 scale-110 shadow-lg shadow-orange-500/25"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View ${photo.title}`}
                  >
                    <OptimizedImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
                    />
                    {selectedPhoto === index && (
                      <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
