'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Schedule() {
  const [isMainHallExpanded, setIsMainHallExpanded] = useState(false)
  const [isAvr1Expanded, setIsAvr1Expanded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  // Main venue (PAH) events with exact times
  const mainVenueEvents = [
    { startTime: '07:00', endTime: '08:30', title: 'Calltime for volunteers/organizers', type: 'setup' },
    { startTime: '08:30', endTime: '11:00', title: 'Ingress and dry run for PAH', type: 'setup' },
    { startTime: '11:00', endTime: '12:00', title: 'Volunteers and organizers\' lunch time', type: 'break' },
    { startTime: '12:00', endTime: '13:00', title: 'Registration opens and networking starts', description: 'Human bingo given on registration. Chance to explore booth', type: 'networking' },
    { startTime: '13:00', endTime: '13:10', title: 'Introduction (Opening Remarks) and Energy check', speaker: 'James', type: 'opening' },
    { startTime: '13:10', endTime: '13:11', title: 'Speaker introduction', type: 'transition' },
    { startTime: '13:11', endTime: '13:46', title: 'Keynote Speaker & Panel', speaker: 'Raphael Francis Quisumbing', description: 'w/ Nhyl, Arlou, Trixie', type: 'keynote' },
    { startTime: '13:46', endTime: '13:51', title: 'Q&A', type: 'qa' },
    { startTime: '13:51', endTime: '14:00', title: 'Announcement of the next part as breakout rooms/opening of breakout rooms', description: 'Chance to explore booths', type: 'transition' },
    { startTime: '14:00', endTime: '14:01', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '14:01', endTime: '14:31', title: '₱0 to MVP: AWS Free-Tier Startup Hacks for Students & Pros', speaker: 'Cyrus Pastelero', type: 'talk' },
    { startTime: '14:31', endTime: '14:36', title: 'Q&A', type: 'qa' },
    { startTime: '14:37', endTime: '14:38', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '14:38', endTime: '15:08', title: 'Stateless vs Stateful', speaker: 'Rodrick Alcantara', type: 'talk' },
    { startTime: '15:08', endTime: '15:13', title: 'Q&A', type: 'qa' },
    { startTime: '15:13', endTime: '15:18', title: 'Announcement of snacks/networking session and chance to explore booths', type: 'transition' },
    { startTime: '15:18', endTime: '15:28', title: 'Snacks/networking session and chance to explore booths', type: 'break' },
    { startTime: '15:28', endTime: '15:58', title: 'Game: Builder Cards Trial and Exhibit', speaker: 'Ace & Aki', type: 'activity' },
    { startTime: '15:58', endTime: '16:05', title: 'Announcement of the start of another set of speaking sessions', type: 'transition' },
    { startTime: '16:05', endTime: '16:06', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '16:06', endTime: '16:36', title: 'Basement to Cloud: Server Usage Evolution and Server Cost Engineering Decisions', speaker: 'Ron Michael Khu', type: 'talk' },
    { startTime: '16:36', endTime: '16:41', title: 'Q&A', type: 'qa' },
    { startTime: '16:41', endTime: '17:11', title: 'From Localhost to the Cloud: Integrating AWS into Your Django Project', speaker: 'Andrew Matheu', type: 'talk' },
    { startTime: '17:11', endTime: '17:16', title: 'Q&A', type: 'qa' },
    { startTime: '17:16', endTime: '17:17', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '17:17', endTime: '17:37', title: 'AWS Lambda Web Adapters: Improve Portability and Developer Productivity', speaker: 'Louie Miguel', type: 'talk' },
    { startTime: '17:37', endTime: '17:42', title: 'Q&A', type: 'qa' },
    { startTime: '17:42', endTime: '17:50', title: 'Closing of break out rooms/chance to network', description: 'Chance to explore booths', type: 'networking' },
    { startTime: '17:50', endTime: '18:15', title: 'Sponsorial talk', type: 'sponsor' },
    { startTime: '18:15', endTime: '18:20', title: 'Community partners recognition', type: 'recognition' },
    { startTime: '18:20', endTime: '18:45', title: 'Raffle', type: 'activity' },
    { startTime: '18:45', endTime: '19:00', title: 'Closing Remarks and Photo Opp', type: 'closing' },
    { startTime: '19:00', endTime: '19:30', title: 'Egress', type: 'setup' }
  ]

  // Breakout room (AVR1) events with exact times
  const breakoutVenueEvents = [
    { startTime: '07:00', endTime: '08:30', title: 'Ingress and dry run for AVR1', type: 'setup' },
    { startTime: '08:30', endTime: '09:00', title: 'Registration', type: 'networking' },
    { startTime: '09:00', endTime: '11:00', title: 'Workshop proper', type: 'workshop' },
    { startTime: '11:45', endTime: '12:00', title: 'Closing Remarks & Photo Op', type: 'closing' },
    { startTime: '13:00', endTime: '13:10', title: 'Room preparation', type: 'setup' },
    { startTime: '13:51', endTime: '14:00', title: 'Opening of breakout room', type: 'opening' },
    { startTime: '14:00', endTime: '14:01', title: 'Speaker introduction', type: 'transition' },
    { startTime: '14:01', endTime: '14:31', title: 'Evaluation Generative Models', speaker: 'Joshua Arvin Lat', type: 'talk' },
    { startTime: '14:31', endTime: '14:36', title: 'Q&A', type: 'qa' },
    { startTime: '14:37', endTime: '14:38', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '14:38', endTime: '15:08', title: 'Getting Started with Amazon ECS', speaker: 'Trixie', type: 'talk' },
    { startTime: '15:08', endTime: '15:13', title: 'Q&A', type: 'qa' },
    { startTime: '15:13', endTime: '15:18', title: 'Announcement of snacks/networking session and chance to explore booths', type: 'transition' },
    { startTime: '15:18', endTime: '15:28', title: 'Snacks/networking session and chance to explore booths', type: 'break' },
    { startTime: '15:58', endTime: '16:05', title: 'Announcement of the start of another set of speaking sessions', type: 'transition' },
    { startTime: '16:05', endTime: '16:06', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '16:06', endTime: '16:36', title: 'Kubernetes or Not Bust: How Companies are Rethinking to move away from Kubernetes', speaker: 'Aldwyn Cabarrubias', type: 'talk' },
    { startTime: '16:36', endTime: '16:41', title: 'Q&A', type: 'qa' },
    { startTime: '16:41', endTime: '17:11', title: 'AWS Landing Zones', speaker: 'Cleo Credo', type: 'talk' },
    { startTime: '17:11', endTime: '17:16', title: 'Q&A', type: 'qa' },
    { startTime: '17:16', endTime: '17:17', title: 'Speaker Introduction', type: 'transition' },
    { startTime: '17:17', endTime: '17:37', title: 'Cloud architecture: multi-region setup leveraging global databases, serverless and containers', speaker: 'Romar Cablao', type: 'talk' },
    { startTime: '17:37', endTime: '17:42', title: 'Q&A', type: 'qa' },
    { startTime: '17:42', endTime: '17:50', title: 'Closing of break out rooms/chance to network', description: 'Chance to explore booths', type: 'networking' }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-l-orange-500'
      case 'talk': return 'bg-blue-600 text-white border-l-blue-600'
      case 'workshop': return 'bg-violet-600 text-white border-l-violet-600'
      case 'break': return 'bg-emerald-600 text-white border-l-emerald-600'
      case 'networking': return 'bg-purple-600 text-white border-l-purple-600'
      case 'activity': return 'bg-cyan-600 text-white border-l-cyan-600'
      case 'qa': return 'bg-slate-500 text-white border-l-slate-500'
      case 'sponsor': return 'bg-indigo-600 text-white border-l-indigo-600'
      case 'opening': return 'bg-orange-600 text-white border-l-orange-600'
      case 'closing': return 'bg-red-600 text-white border-l-red-600'
      case 'recognition': return 'bg-amber-600 text-white border-l-amber-600'
      case 'transition': return 'bg-gray-500 text-white border-l-gray-500'
      case 'setup': return 'bg-neutral-600 text-white border-l-neutral-600'
      default: return 'bg-gray-600 text-white border-l-gray-600'
    }
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour24 = parseInt(hours)
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
    const ampm = hour24 >= 12 ? 'PM' : 'AM'
    return `${hour12}:${minutes} ${ampm}`
  }

  const getDuration = (startTime: string, endTime: string) => {
    const [startHour, startMin] = startTime.split(':').map(Number)
    const [endHour, endMin] = endTime.split(':').map(Number)
    const start = startHour * 60 + startMin
    const end = endHour * 60 + endMin
    return end - start
  }

  return (
    <section id="schedule" className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Constellation background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-orange-400/20 text-4xl animate-twinkle">✧</div>
        <div className="absolute bottom-10 right-10 text-orange-300/20 text-5xl animate-float-slow">✦</div>
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
            <span className="block sm:inline">Full Day of</span>{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              Learning
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-3 sm:px-0 mb-4 md:mb-6">
            Two venues running simultaneously with exact timing for all sessions and activities.
          </p>
          
          {/* PDF Download Button */}
          <div className="flex justify-center">
            <Button 
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/aws-community-day-cebu-2025-event-programme.pdf'
                link.download = 'aws-community-day-cebu-2025-event-programme.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Programme PDF
            </Button>
          </div>
        </div>

        {/* Dual Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Main Venue Timeline */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-blue-900/20 hover:border-orange-400/30 transition-all duration-300 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modern gradient outline effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-transparent to-blue-400/20 p-[2px]">
                <div className="h-full w-full rounded-2xl bg-slate-900/80 backdrop-blur-sm"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6 pb-4 border-b border-orange-400/30">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Performing Arts Hall</h3>
                  <p className="text-xs sm:text-sm text-orange-400 uppercase tracking-wider font-semibold mb-4">Main Venue</p>
                  
                  {/* Expand Button (only show when collapsed and on mobile) */}
                  {!isMainHallExpanded && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMainHallExpanded(true)
                      }}
                      className="lg:hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200"
                    >
                      <ChevronDown className="w-4 h-4 mr-2" />
                      View Full Schedule
                    </Button>
                  )}
                </div>
                
                {(isMainHallExpanded || isDesktop) && (
                  <div className="animate-fadeIn">
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      {mainVenueEvents.map((event, index) => {
                        const duration = getDuration(event.startTime, event.endTime)
                        const isKeyEvent = ['keynote', 'talk', 'workshop'].includes(event.type)
                        
                        return (
                          <div key={index} className={`flex gap-3 sm:gap-4 lg:gap-6 ${isKeyEvent ? 'py-1 sm:py-2' : 'py-1'}`}>
                            {/* Time Column */}
                            <div className="w-16 sm:w-20 lg:w-24 flex-shrink-0 text-right">
                              <div className="text-xs sm:text-sm font-mono text-orange-400 font-semibold">
                                {formatTime(event.startTime)}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {duration} min
                              </div>
                            </div>
                            
                            {/* Event Card */}
                            <div className="flex-1 min-w-0">
                              <div className={`${getTypeColor(event.type)} rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] relative`}>
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                                
                                <div className="relative text-center">
                                  <h4 className={`font-semibold leading-tight ${isKeyEvent ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} mb-2`}>
                                    {event.title}
                                  </h4>
                                  
                                  {event.speaker && (
                                    <div className="text-xs sm:text-sm opacity-90 mb-2 font-medium">
                                      {event.speaker}
                                    </div>
                                  )}
                                  
                                  {event.description && isKeyEvent && (
                                    <p className="text-xs opacity-80 leading-relaxed">
                                      {event.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Collapse Button at the bottom (only on mobile) */}
                    <div className="lg:hidden text-center mt-6 pt-4 border-t border-orange-400/30">
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setIsMainHallExpanded(false)
                          // Scroll back to the schedule section after collapsing
                          setTimeout(() => {
                            const scheduleElement = document.getElementById('schedule')
                            if (scheduleElement) {
                              scheduleElement.scrollIntoView({ 
                                behavior: 'instant', 
                                block: 'start' 
                              })
                            }
                          }, 100)
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200"
                      >
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Collapse Schedule
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Breakout Room Timeline */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-blue-900/20 hover:border-orange-400/30 transition-all duration-300 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modern gradient outline effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-transparent to-orange-400/20 p-[2px]">
                <div className="h-full w-full rounded-2xl bg-slate-900/80 backdrop-blur-sm"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6 pb-4 border-b border-orange-400/30">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">AVR1</h3>
                  <p className="text-xs sm:text-sm text-orange-400 uppercase tracking-wider font-semibold mb-4">Breakout Room</p>
                  
                  {/* Expand Button (only show when collapsed and on mobile) */}
                  {!isAvr1Expanded && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsAvr1Expanded(true)
                      }}
                      className="lg:hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200"
                    >
                      <ChevronDown className="w-4 h-4 mr-2" />
                      View Full Schedule
                    </Button>
                  )}
                </div>
                
                {(isAvr1Expanded || isDesktop) && (
                  <div className="animate-fadeIn">
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      {breakoutVenueEvents.map((event, index) => {
                        const duration = getDuration(event.startTime, event.endTime)
                        const isKeyEvent = ['keynote', 'talk', 'workshop'].includes(event.type)
                        
                        return (
                          <div key={index} className={`flex gap-3 sm:gap-4 lg:gap-6 ${isKeyEvent ? 'py-1 sm:py-2' : 'py-1'}`}>
                            {/* Time Column */}
                            <div className="w-16 sm:w-20 lg:w-24 flex-shrink-0 text-right">
                              <div className="text-xs sm:text-sm font-mono text-orange-400 font-semibold">
                                {formatTime(event.startTime)}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {duration} min
                              </div>
                            </div>
                            
                            {/* Event Card */}
                            <div className="flex-1 min-w-0">
                              <div className={`${getTypeColor(event.type)} rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] relative`}>
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                                
                                <div className="relative text-center">
                                  <h4 className={`font-semibold leading-tight ${isKeyEvent ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} mb-2`}>
                                    {event.title}
                                  </h4>
                                  
                                  {event.speaker && (
                                    <div className="text-xs sm:text-sm opacity-90 mb-2 font-medium">
                                      {event.speaker}
                                    </div>
                                  )}
                                  
                                  {event.description && isKeyEvent && (
                                    <p className="text-xs opacity-80 leading-relaxed">
                                      {event.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Collapse Button at the bottom (only on mobile) */}
                    <div className="lg:hidden text-center mt-6 pt-4 border-t border-orange-400/30">
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setIsAvr1Expanded(false)
                          // Scroll back to the schedule section after collapsing
                          setTimeout(() => {
                            const scheduleElement = document.getElementById('schedule')
                            if (scheduleElement) {
                              scheduleElement.scrollIntoView({ 
                                behavior: 'instant', 
                                block: 'start' 
                              })
                            }
                          }, 100)
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-200"
                      >
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Collapse Schedule
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
