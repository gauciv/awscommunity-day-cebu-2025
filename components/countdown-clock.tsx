"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)
  const [isEventDay, setIsEventDay] = useState(false)
  const [animatingUnits, setAnimatingUnits] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  })

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = (): TimeLeft => {
      const eventDate = new Date("2025-09-13T13:00:00+08:00") // 1PM Philippine time
      const eventEndDate = new Date("2025-09-13T19:00:00+08:00") // 7PM Philippine time
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      // Check if it's currently the event day (between start and end time)
      if (now >= eventDate && now <= eventEndDate) {
        setIsEventDay(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      } else {
        setIsEventDay(false)
      }

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    let prevTime = calculateTimeLeft()

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft()

      // Check which units changed and trigger animations
      const newAnimatingUnits = {
        days: newTime.days !== prevTime.days,
        hours: newTime.hours !== prevTime.hours,
        minutes: newTime.minutes !== prevTime.minutes,
        seconds: newTime.seconds !== prevTime.seconds,
      }

      if (Object.values(newAnimatingUnits).some(Boolean)) {
        setAnimatingUnits(newAnimatingUnits)
        setTimeout(() => {
          setAnimatingUnits({
            days: false,
            hours: false,
            minutes: false,
            seconds: false,
          })
        }, 600) // Animation duration
      }

      prevTime = newTime
      setTimeLeft(newTime)
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-4 py-6 sm:py-8">
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
      </div>
    )
  }

  const TimeCard = ({ value, label, isAnimating = false }: { value: number; label: string; isAnimating?: boolean }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div
          className={`w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-orange-400/30 flex items-center justify-center shadow-lg transition-all duration-600 ease-out group-hover:scale-105 ${
            isAnimating ? "scale-110 border-orange-400/80 shadow-orange-400/40" : "scale-100"
          }`}
        >
          <span 
            className={`text-xl sm:text-2xl md:text-4xl font-black font-mono text-white drop-shadow-lg transition-all duration-600 ease-out ${
              isAnimating ? "scale-90 text-orange-300" : "scale-100"
            }`}
          >
            {value.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Enhanced glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-white/5 rounded-xl" />

        {/* Smooth pulsing glow effect */}
        <div
          className={`absolute inset-0 rounded-xl transition-all duration-600 ease-out ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-orange-400/30 rounded-xl blur-md animate-pulse" />
          <div className="absolute inset-0 bg-orange-300/20 rounded-xl blur-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Constellation pattern */}
        <div className="absolute -top-1 -right-1 text-orange-400/60 text-xs animate-gentle-shimmer">✦</div>
        <div className="absolute -bottom-1 -left-1 text-orange-300/40 text-xs animate-gentle-shimmer-delayed">★</div>
      </div>

      <span className="text-xs sm:text-sm text-white/80 mt-2 sm:mt-3 font-bold uppercase tracking-widest transition-all duration-300">{label}</span>
    </div>
  )

  const AnimatedColon = () => (
    <div className="flex flex-col items-center justify-center h-14 sm:h-18 md:h-24">
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-pulse" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center py-6 sm:py-8 relative">
      {/* Background constellation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-1/4 text-orange-400 text-sm animate-twinkle">✧</div>
        <div className="absolute bottom-4 right-1/4 text-orange-300 text-sm animate-float-slow">✦</div>
        <div className="absolute top-1/2 left-1/6 text-orange-400 text-xs animate-twinkle-delayed">★</div>
        <div className="absolute top-1/2 right-1/6 text-orange-300 text-xs animate-float">✧</div>
      </div>

      {isEventDay ? (
        /* Event Day Message */
        <div className="text-center relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-wide animate-pulse">
              🎉 EVENT DAY IS HERE! 🎉
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 mx-auto rounded-full animate-pulse" />
          </div>
          
          {/* Celebratory Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-2xl sm:text-3xl md:text-4xl">🚀</span>
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce delay-200">
              <span className="text-2xl sm:text-3xl md:text-4xl">☁️</span>
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce delay-500">
              <span className="text-2xl sm:text-3xl md:text-4xl">⚡</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border-2 border-orange-400/30 p-6 shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
              Welcome to AWS Community Day Cebu 2025!
            </p>
            <p className="text-base sm:text-lg text-orange-200 mb-4">
              The event is happening right now! Join us for an amazing day of cloud computing, networking, and innovation.
            </p>
            
            {/* Event status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <p className="text-green-200 text-sm sm:text-base font-medium">🔴 LIVE NOW</p>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      ) : (
        /* Regular Countdown */
        <>
          {/* Enhanced title */}
          <div className="text-center mb-4 sm:mb-6 relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 tracking-wide">Event Starts In</h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full opacity-80" />
          </div>

          {/* Countdown display */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8 relative z-10">
            <TimeCard value={timeLeft.days} label="Days" isAnimating={animatingUnits.days} />
            <AnimatedColon />
            <TimeCard value={timeLeft.hours} label="Hours" isAnimating={animatingUnits.hours} />
            <AnimatedColon />
            <TimeCard value={timeLeft.minutes} label="Minutes" isAnimating={animatingUnits.minutes} />
            <AnimatedColon />
            <TimeCard value={timeLeft.seconds} label="Seconds" isAnimating={animatingUnits.seconds} />
          </div>
        </>
      )}

      {/* Enhanced event info */}
      <div className="mt-4 sm:mt-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-orange-400/20">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <p className="text-white/90 text-xs sm:text-sm font-medium">September 13, 2025 • 1:00 PM - 7:00 PM (PHT)</p>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-1000" />
        </div>

        <p className="text-white/60 text-xs mt-2">University of the Philippines Cebu • Performing Arts Hall</p>
      </div>
    </div>
  )
}
