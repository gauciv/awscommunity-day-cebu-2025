"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, CheckCircle, Star, Zap, ExternalLink, Sparkles, X } from "lucide-react"

export function Tickets() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("tickets")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const earlyBirdEnd = new Date("2025-08-30T23:59:59")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = earlyBirdEnd.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
        setIsEarlyBirdActive(true)
      } else {
        setIsEarlyBirdActive(false)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegisterClick = () => {
    try {
      window.open("https://ticketnation.ph/events/aws_community_day_cebu_2025/tickets", "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error('Error opening tickets link:', error)
      alert('Unable to open tickets link. Please visit ticketnation.ph directly.')
    }
  }

  const ticketTypes = [
    {
      name: "General",
      price: "₱500",
      earlyBirdPrice: "₱400",
      description: "Get access to the Main Event on September 13, 1:00 PM–7:00 PM",
      features: [
        "Main Event access (1:00 PM–7:00 PM)",
        "General admission",
        "Official event merchandise",
        "Networking opportunities",
        "Access to all tech talks",
      ],
      badge: "Essential",
      badgeColor: "bg-gradient-to-r from-gray-500 to-gray-600",
      popular: false,
      icon: Users,
      glowColor: "gray",
      soldOut: false
    },
    {
      name: "Builder+",
      price: "₱1,000",
      earlyBirdPrice: "₱800",
      description: "Level up with access to both Workshop and Main Event",
      features: [
        "Workshop access (9:00 AM–12:00 PM)",
        "Main Event access (1:00 PM–7:00 PM)",
        "General merchandise",
        "Hands-on learning experience",
        "Priority seating",
      ],
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      popular: true,
      icon: Zap,
      glowColor: "orange",
      soldOut: true
    },
    {
      name: "VIP",
      price: "₱1,250",
      earlyBirdPrice: "₱1,000",
      description: "Enjoy the full VIP experience with exclusive perks",
      features: [
        "Workshop access (9:00 AM–12:00 PM)",
        "Main Event access (1:00 PM–7:00 PM)",
        "Exclusive VIP Dinner invitation",
        "General merch + exclusive AWS Community Day Cebu polo",
        "Complete experience for professionals",
      ],
      badge: "Premium",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      popular: false,
      icon: Star,
      glowColor: "purple",
      soldOut: true
    },
  ]

  return (
    <section id="tickets" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Atmospheric Background with Pricing Highlights */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Ray SVG for CTA Button Highlights */}
          <div
            className="constellation-svg animate-ray-pulse"
            style={{ top: "60%", left: "15%", width: "200px", height: "auto", opacity: "0.04", '--ray-rotation': '25deg' } as React.CSSProperties}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto"
            />
          </div>

          <div
            className="constellation-svg animate-ray-pulse"
            style={{ bottom: "30%", right: "18%", width: "180px", height: "auto", opacity: "0.06", '--ray-rotation': '-40deg' } as React.CSSProperties}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto"
            />
          </div>

          {/* Shroud SVG Behind Ticket Cards */}
          <div
            className="constellation-svg animate-shroud-depth"
            style={{ top: "20%", left: "10%", width: "300px", height: "auto", opacity: "0.03" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto"
            />
          </div>

          {/* Constellation Pricing Accents */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "35%", left: "8%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "25%", right: "12%", width: "65px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>

          {/* Enhanced multi-layered gradient orbs */}
          <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-yellow-500/12 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/8 via-purple-500/12 to-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-1/6 w-28 h-28 bg-gradient-to-r from-green-500/8 via-emerald-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>

          {/* Optimized constellation network */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '25%', left: '18%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '40%', right: '22%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '35%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '20%', right: '20%'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-bold mb-4 sm:mb-6 md:mb-8 shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-twinkle" />
            Event Tickets
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight px-2 sm:px-0">
            <span className="block sm:inline">Secure Your</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              Spot Today
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4 md:px-0">
            Join 200+ developers, architects, and cloud enthusiasts for an unforgettable day of learning and networking.
            Choose the ticket that works best for you.
          </p>
        </div>

        {/* Enhanced Early Bird Countdown Timer - Mobile centered */}
        {isEarlyBirdActive && (
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-3 sm:px-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-400 animate-pulse" />
                  <span className="text-orange-400 font-black text-sm sm:text-base md:text-lg lg:text-xl text-center">Early Bird Special Ends In:</span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-3 sm:mb-4 md:mb-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg sm:rounded-xl md:rounded-2xl blur-md sm:blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 lg:p-4 mb-1 sm:mb-2 md:mb-3 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                          <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black">{item.value.toString().padStart(2, "0")}</span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-bold">Save up to ₱200</span>
                    </div>
                    <div className="text-xs opacity-90 text-center">
                      Early bird until Aug 30, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Ticket Cards with mobile-first responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 flex ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"} ${ticket.popular ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card
                className={`relative border-2 transition-all duration-700 hover:scale-105 w-full flex flex-col group ${
                  ticket.soldOut
                    ? "border-gray-500/30 bg-gray-900/50 opacity-75"
                    : ticket.popular
                    ? "border-orange-500/50 shadow-2xl shadow-orange-500/30 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-orange-500/10"
                    : "border-white/20 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/20 bg-white/5"
                } backdrop-blur-sm`}
              >
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  ticket.soldOut ? 'from-gray-500/10 to-gray-600/10' :
                  ticket.glowColor === 'orange' ? 'from-orange-500/20 to-yellow-500/20' :
                  ticket.glowColor === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
                  ticket.glowColor === 'gray' ? 'from-gray-500/20 to-gray-600/20' :
                  'from-purple-500/20 to-pink-500/20'
                } rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>

                {ticket.soldOut && (
                  <div className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1 lg:py-2 text-xs sm:text-sm md:text-base font-black shadow-xl">
                      <X className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1 md:mr-2" />
                      SOLD OUT
                    </Badge>
                  </div>
                )}

                {ticket.popular && !ticket.soldOut && (
                  <div className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1 lg:py-2 text-xs sm:text-sm md:text-base font-black shadow-xl animate-pulse">
                      <Star className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1 md:mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}



                <CardHeader className="text-center pb-2 sm:pb-3 md:pb-4 lg:pb-6 relative p-3 sm:p-4 md:p-5 lg:p-6">
                  {/* Floating sparkles */}
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-400 animate-twinkle" />
                  </div>

                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6 rounded-full ${ticket.badgeColor} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <ticket.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    {!ticket.popular && !ticket.soldOut && (
                      <Badge className={`${ticket.badgeColor} text-white border-0 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-xs sm:text-sm md:text-base font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 shadow-lg`}>
                        {ticket.badge}
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-orange-400 transition-colors duration-500 leading-tight">
                    {ticket.name}
                  </CardTitle>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
                    {ticket.soldOut ? (
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-gray-500 line-through">
                        {isEarlyBirdActive ? ticket.earlyBirdPrice : ticket.price}
                      </span>
                    ) : isEarlyBirdActive ? (
                      <>
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                          {ticket.earlyBirdPrice}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 line-through">{ticket.price}</span>
                      </>
                    ) : (
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                        {ticket.price}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {ticket.description}
                  </p>
                </CardHeader>

                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col h-full">
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 group/item">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always aligned at bottom */}
                  <div className="mt-auto pt-2 sm:pt-3 md:pt-4">
                    <Button
                      onClick={ticket.soldOut ? undefined : handleRegisterClick}
                      disabled={ticket.soldOut}
                      className={`w-full py-3 sm:py-4 font-bold text-sm sm:text-base transition-all duration-500 transform min-h-[44px] touch-manipulation ${
                        ticket.soldOut
                          ? "bg-gray-600/50 text-gray-400 border border-gray-600/30 cursor-not-allowed opacity-60"
                          : ticket.popular
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
                          : "bg-white/5 text-orange-400 border border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500/50 backdrop-blur-sm hover:text-white hover:scale-105 active:scale-95"
                      } group/button`}
                    >
                      {ticket.soldOut ? (
                        <>
                          <X className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          SOLD OUT
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                          Register Now
                        </>
                      )}
                    </Button>
                    
                    {/* Additional CTA text for emphasis */}
                    <p className="text-xs text-gray-400 text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">
                      {ticket.soldOut ? "This ticket type is no longer available" : "Secure your spot today!"}
                    </p>
                  </div>
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        

        {/* Enhanced Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            <Card className="relative border-2 border-white/20 overflow-hidden shadow-2xl group-hover:border-orange-500/30 transition-all duration-700">
              <CardContent className="p-0">
                <div className="aspect-[16/9] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4234567890123!2d123.89012345678901!3d10.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999f4c2f8b7c5%3A0x8b5c5e5f5e5e5e5e!2sUniversity%20of%20the%20Philippines%20Cebu%20Performing%20Arts%20Hall%2C%20Gorordo%20Ave%2C%20Lahug%2C%20Cebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 rounded-xl"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎉</span>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold">
                    {isEarlyBirdActive ? "Early Bird Special" : "Regular Pricing"}
                  </div>
                  <div className="text-sm opacity-90">
                    {isEarlyBirdActive ? "Available until August 30, 2025" : "Now in effect"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            Powered by <span className="font-bold text-orange-400">TicketNation</span> • All prices are in
            Philippine Pesos • Tickets are non-refundable but transferable
          </p>
        </div>
      </div>
    </section>
  )
}