
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Sparkles, Zap } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function Speakers() {
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

    const element = document.getElementById("speakers")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const keynoteSpeaker = {
    name: "Raphael Quisumbing",
    position: "AWS Community Hero | IT & Cloud Advisor | Head of Product Innovation MediaTrack",
    image: "/images/speakers/raphael-quisumbing.jpg",
    isKeynote: true,
  }

  const speakers = [
    {
      name: "Raphael Jambalos",
      position: "AWS Community Hero | Head of Modernization and Security, eCloudValley Technology Philippines",
      image: "/images/speakers/raphael-jambalos.jpg",
    },
    {
      name: "Joshua Arvin Lat",
      position: "AWS Machine Learning Hero | Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc",
      image: "/images/speakers/joshua-arvin-lat.jpg",
    },
    {
      name: "Aldwyn Cabarrubias",
      position: "Senior Ops Engineer at ING Hubs Philippines",
      image: "/images/speakers/aldwyn-cabarrubias.jpg",
    },
    {
      name: "Cyrus Pastelero",
      position: "Senior Software Engineer | Reap | Certified AWS Solution Architect | Ex-Founder",
      image: "/images/speakers/cyrus-pastelero.jpeg",
    },
    {
      name: "Andrew Matheu",
      position: "Founder and CEO of TechStart TV",
      image: "/images/speakers/andrew-matheu.jpg",
    },
    {
      name: "Cleo Credo",
      position: "CTO of Full Scale | Google Developer Expert | Co-lead PizzaPy",
      image: "/images/speakers/cleo-credo.jpg",
    },
    {
      name: "Ron Michael Khu",
      position: "Sr. Java Developer/Software Architect",
      image: "/images/speakers/ron-michael-khu.jpeg",
    },
    {
      name: "Rafael Louie Miguel",
      position: "Fullstack Engineer/Project Lead @ TutorialsDojo",
      image: "/images/speakers/rafael-louie-miguel.jpg",
    },
    {
      name: "Nhyl Bryle Ibañez",
      position: "DevSecOps Engineer at Ingenuity Software",
      image: "/images/speakers/nhyl-bryle-ibanez.jpg",
    },
    {
      name: "Rodrick Alcantara",
      position: "Software Engineer and Tech Content Creator",
      image: "/images/speakers/rodrick-alcantara.jpg",
    },
    {
      name: "Ace Kenneth Batacandulo",
      position: "Cloud Consultant at Tutorials Dojo",
      image: "/images/speakers/ace-kenneth-batacandulo.jpg",
    },
    {
      name: "Trixie Nicole Organiza",
      position: "Cloud Engineer Intern at Elevate Innovations Corp",
      image: "/images/speakers/trixie-nicole-organiza.jpg",
    },
    {
      name: "Romar Cablao",
      position: "AWS Community Builder",
      image: "/images/speakers/romar-cablao.png",
    },
  ]

  return (
    <section id="speakers" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Atmospheric Background with Ray Elements */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Ray SVG Elements for Spotlight Effects */}
          <div
            className="constellation-svg"
            style={{ top: "20%", left: "10%", width: "180px", height: "auto", opacity: "0.06" }}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto animate-gentle-pulse"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
          
          <div
            className="constellation-svg"
            style={{ bottom: "25%", right: "12%", width: "160px", height: "auto", opacity: "0.08" }}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto animate-gentle-pulse"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>

          {/* Shroud SVG for Depth Behind Content */}
          <div
            className="constellation-svg"
            style={{ top: "15%", right: "20%", width: "200px", height: "auto", opacity: "0.05" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto animate-float-slow"
            />
          </div>
          
          {/* Constellation Accents */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "35%", left: "8%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "30%", right: "6%", width: "65px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Orion constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.45" }}
            />
          </div>
          
          {/* Enhanced multi-color gradient orbs */}
          <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/12 via-amber-500/15 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/8 via-purple-500/12 to-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Optimized network lines */}
          <div className="constellation-line" style={{top: '25%', left: '20%', width: '60px', transform: 'rotate(35deg)'}}></div>
          <div className="constellation-line" style={{bottom: '35%', right: '25%', width: '50px', transform: 'rotate(-25deg)'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-bold mb-4 sm:mb-6 md:mb-8 shadow-lg">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-twinkle" />
            Featured Speakers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight px-2 sm:px-0">
            <span className="block sm:inline">Learn from</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              Industry Experts
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4 md:px-0">
            Get insights from leading professionals who are shaping the future of cloud technology and driving
            innovation in the AWS ecosystem.
          </p>
        </div>

        {/* Enhanced Keynote Speaker */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            <div className="relative text-center group perspective-1000">
              {/* Enhanced Keynote Speaker Card with mobile-first sizing */}
              <div className="relative mx-auto mb-6 sm:mb-8 md:mb-12 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse scale-110"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse delay-500 scale-105"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-1000 transform group-hover:scale-105 next-image-fill-container">
                  <OptimizedImage
                    src={keynoteSpeaker.image}
                    alt={keynoteSpeaker.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                    priority
                    loading="eager"
                    quality={95}
                  />
                  
                  {/* Enhanced crown badge with mobile-first sizing */}
                  <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-xl border-2 sm:border-4 border-white/20">
                      <Crown className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    </div>
                  </div>

                  {/* Floating sparkles with mobile-first sizing */}
                  <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-twinkle" />
                  </div>
                  <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-4 sm:right-6 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-400 animate-twinkle" />
                  </div>
                </div>
              </div>

              {/* Enhanced speaker info with mobile-first responsive design */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-orange-500/20 shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-700">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors duration-500 leading-tight">
                  {keynoteSpeaker.name}
                </h3>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-sm sm:text-base md:text-lg font-bold px-3 sm:px-4 md:px-6 py-1 sm:py-2 mb-3 sm:mb-4 shadow-lg">
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Keynote Speaker
                </Badge>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-white transition-colors duration-500">
                  {keynoteSpeaker.position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Regular Speakers Grid - centered like volunteers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative text-center h-full">
                {/* Enhanced Speaker Card with mobile-first padding and equal heights */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700 h-full flex flex-col group-hover:border-orange-500/30 min-h-[180px] sm:min-h-[200px] md:min-h-[240px]">
                  
                  {/* Speaker Image - compact like volunteers */}
                  <div className="relative mx-auto mb-2 sm:mb-3 md:mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md sm:blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-700 animate-pulse scale-110"></div>
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:shadow-blue-500/40 transition-all duration-700 group-hover:scale-105 next-image-fill-container">
                      <OptimizedImage
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                          speaker.name === "Ace Kenneth Batacandulo" ? "object-top" : ""
                        }`}
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                        loading={index < 4 ? "eager" : "lazy"}
                        priority={index < 2}
                        quality={index < 4 ? 90 : 80}
                      />
                    </div>

                  </div>

                  {/* Compact Speaker Info with flexible height and text wrapping */}
                  <div className="text-center flex-1 flex flex-col justify-center mt-auto">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:from-orange-400 group-hover:via-yellow-400 group-hover:to-orange-400 transition-all duration-500 leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                      {speaker.position.split(' | ')[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
