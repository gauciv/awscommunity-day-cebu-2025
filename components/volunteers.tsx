"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Users, Search, X } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { volunteers } from "@/data"

export function Volunteers() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("volunteers")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const volunteersPerRow = 5
  const rowsToShow = showAll ? Math.ceil(filteredVolunteers.length / volunteersPerRow) : 2
  const displayedVolunteers = filteredVolunteers.slice(0, rowsToShow * volunteersPerRow)
  const hasMore = filteredVolunteers.length > displayedVolunteers.length

  return (
    <section id="volunteers" className="py-12 md:py-20 lg:py-32 hero-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          <div className="constellation-svg constellation-hover-spin" style={{ top: "15%", left: "12%", width: "90px", height: "auto" }}>
            <img src="/art-assets/big dipper.svg" alt="" className="w-full h-auto constellation-glow-orange animate-gentle-shimmer" style={{ opacity: "0.4" }} />
          </div>
          <div className="constellation-svg constellation-hover-spin" style={{ top: "45%", right: "15%", width: "85px", height: "auto" }}>
            <img src="/art-assets/aquarius.svg" alt="" className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed" style={{ opacity: "0.38" }} />
          </div>
          <div className="constellation-svg constellation-hover-spin" style={{ bottom: "20%", left: "18%", width: "75px", height: "auto" }}>
            <img src="/art-assets/leo.svg" alt="" className="w-full h-auto constellation-glow-orange animate-gentle-shimmer" style={{ opacity: "0.42" }} />
          </div>
          <div className="constellation-svg" style={{ top: "30%", left: "5%", width: "140px", height: "auto", opacity: "0.05" }}>
            <img src="/art-assets/ray.svg" alt="" className="w-full h-auto animate-gentle-pulse" style={{ transform: "rotate(60deg)" }} />
          </div>
          <div className="constellation-svg" style={{ bottom: "35%", right: "8%", width: "120px", height: "auto", opacity: "0.08" }}>
            <img src="/art-assets/clouds.svg" alt="" className="w-full h-auto animate-float-slow" />
          </div>
          <div className="absolute top-40 right-1/5 w-48 h-48 bg-gradient-to-r from-orange-500/8 via-pink-500/10 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-56 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-500/8 via-cyan-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{ top: "20%", left: "15%" }}></div>
          <div className="constellation-dot constellation-dot-small" style={{ top: "35%", right: "20%" }}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{ bottom: "40%", left: "12%" }}></div>
          <div className="constellation-dot constellation-dot-small" style={{ bottom: "25%", right: "18%" }}></div>
          <div className="constellation-line" style={{ top: "22%", left: "17%", width: "80px", transform: "rotate(25deg)" }}></div>
          <div className="constellation-line" style={{ top: "37%", right: "22%", width: "70px", transform: "rotate(-35deg)" }}></div>
          <div className="constellation-line" style={{ bottom: "42%", left: "14%", width: "60px", transform: "rotate(45deg)" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-bold mb-4 sm:mb-6 md:mb-8 shadow-lg">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
            Our Volunteers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight px-2 sm:px-0">
            <span className="block sm:inline">Meet Our</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              Amazing Team
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4 md:px-0 mb-4 sm:mb-6 md:mb-8">
            Our dedicated volunteers are the heart of AWS Community Day Cebu. Get to know the passionate individuals who make this event possible.
          </p>

          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto relative px-3 sm:px-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search volunteers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="!pl-12 !pr-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500/50 focus:ring-orange-500/20 text-sm sm:text-base min-h-[44px] touch-manipulation"
                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors touch-manipulation w-8 h-8 flex items-center justify-center rounded z-10">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2 text-center">
                Found {filteredVolunteers.length} volunteer{filteredVolunteers.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
          {displayedVolunteers.map((volunteer, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 group hover:scale-105 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${(index % 20) * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 next-image-fill-container">
                {volunteer.image ? (
                  <OptimizedImage src={volunteer.image} alt={volunteer.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw" loading={index < 12 ? "eager" : "lazy"} priority={index < 6} quality={index < 12 ? 85 : 70} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-500/20 relative">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-orange-400/70 z-10">
                      {volunteer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 animate-pulse"></div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-1 sm:p-2">
                  <h4 className="text-white font-black text-xs sm:text-sm text-center leading-tight tracking-wide uppercase">
                    {volunteer.name}
                  </h4>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg blur-lg sm:blur-xl"></div>
              <Button
                onClick={() => setShowAll(true)}
                className="relative bg-white/10 backdrop-blur-sm border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-200 hover:scale-105 min-h-[60px] sm:min-h-[68px] lg:min-h-[76px] min-w-[60px] sm:min-w-[68px] lg:min-w-[76px] touch-manipulation"
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-bounce" />
                <span className="hidden sm:inline">Show More Volunteers ({filteredVolunteers.length - displayedVolunteers.length} remaining)</span>
                <span className="sm:hidden">Show More ({filteredVolunteers.length - displayedVolunteers.length})</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
