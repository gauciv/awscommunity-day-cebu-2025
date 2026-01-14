"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"
import { mainVenueEvents, breakoutVenueEvents, getTypeColor, formatTime, getDuration } from "@/data"

export function Schedule() {
  const [isMainHallExpanded, setIsMainHallExpanded] = useState(false)
  const [isAvr1Expanded, setIsAvr1Expanded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/aws-community-day-cebu-2025-event-programme.pdf"
    link.download = "aws-community-day-cebu-2025-event-programme.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSchedule = () => {
    setTimeout(() => {
      const scheduleElement = document.getElementById("schedule")
      if (scheduleElement) {
        scheduleElement.scrollIntoView({ behavior: "instant", block: "start" })
      }
    }, 100)
  }

  return (
    <section id="schedule" className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-orange-400/20 text-4xl animate-twinkle">*</div>
        <div className="absolute bottom-10 right-10 text-orange-300/20 text-5xl animate-float-slow">*</div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-medium mb-3 md:mb-4 border border-orange-500/20">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Event Schedule
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 md:mb-4 px-2 sm:px-0">
            <span className="block sm:inline">Full Day of</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              Learning
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-3 sm:px-0 mb-4 md:mb-6">
            Two venues running simultaneously with exact timing for all sessions and activities.
          </p>
          <div className="flex justify-center">
            <Button onClick={handleDownload} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm sm:text-base">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Programme PDF
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <ScheduleVenue
              title="Performing Arts Hall"
              subtitle="Main Venue"
              events={mainVenueEvents}
              isExpanded={isMainHallExpanded}
              setIsExpanded={setIsMainHallExpanded}
              isDesktop={isDesktop}
              onCollapse={scrollToSchedule}
            />
            <ScheduleVenue
              title="AVR1"
              subtitle="Breakout Room"
              events={breakoutVenueEvents}
              isExpanded={isAvr1Expanded}
              setIsExpanded={setIsAvr1Expanded}
              isDesktop={isDesktop}
              onCollapse={scrollToSchedule}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ScheduleVenueProps {
  title: string
  subtitle: string
  events: typeof mainVenueEvents
  isExpanded: boolean
  setIsExpanded: (value: boolean) => void
  isDesktop: boolean
  onCollapse: () => void
}

function ScheduleVenue({ title, subtitle, events, isExpanded, setIsExpanded, isDesktop, onCollapse }: ScheduleVenueProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-blue-900/20 hover:border-orange-400/30 transition-all duration-300 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-transparent to-blue-400/20 p-[2px]">
        <div className="h-full w-full rounded-2xl bg-slate-900/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10">
        <div className="text-center mb-6 pb-4 border-b border-orange-400/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-orange-400 uppercase tracking-wider font-semibold mb-4">{subtitle}</p>
          {!isExpanded && (
            <Button onClick={(e) => { e.stopPropagation(); setIsExpanded(true) }} className="lg:hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200">
              <ChevronDown className="w-4 h-4 mr-2" />
              View Full Schedule
            </Button>
          )}
        </div>
        {(isExpanded || isDesktop) && (
          <div className="animate-fadeIn">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {events.map((event, index) => {
                const duration = getDuration(event.startTime, event.endTime)
                const isKeyEvent = ["keynote", "talk", "workshop"].includes(event.type)
                return (
                  <div key={index} className={`flex gap-3 sm:gap-4 lg:gap-6 ${isKeyEvent ? "py-1 sm:py-2" : "py-1"}`}>
                    <div className="w-16 sm:w-20 lg:w-24 flex-shrink-0 text-right">
                      <div className="text-xs sm:text-sm font-mono text-orange-400 font-semibold">{formatTime(event.startTime)}</div>
                      <div className="text-xs text-gray-400 mt-1">{duration} min</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`${getTypeColor(event.type)} rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] relative`}>
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                        <div className="relative text-center">
                          <h4 className={`font-semibold leading-tight ${isKeyEvent ? "text-sm sm:text-base" : "text-xs sm:text-sm"} mb-2`}>{event.title}</h4>
                          {event.speaker && <div className="text-xs sm:text-sm opacity-90 mb-2 font-medium">{event.speaker}</div>}
                          {event.description && isKeyEvent && <p className="text-xs opacity-80 leading-relaxed">{event.description}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="lg:hidden text-center mt-6 pt-4 border-t border-orange-400/30">
              <Button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsExpanded(false); onCollapse() }} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200">
                <ChevronUp className="w-4 h-4 mr-2" />
                Collapse Schedule
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
