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
  const [isEventEnded, setIsEventEnded] = useState(false)
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

      // Check if the event has ended
      if (now > eventEndDate) {
        setIsEventEnded(true)
        setIsEventDay(false)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      // Check if it's currently the event day (between start and end time)
      if (now >= eventDate && now <= eventEndDate) {
        setIsEventDay(true)
        setIsEventEnded(false)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      } else {
        setIsEventDay(false)
        setIsEventEnded(false)
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
      <div className="flex items-center justify-center gap-4 py-8">
        <div className="animate-pulse bg-white/5 backdrop-blur-sm rounded-lg w-16 h-16 border border-white/10" />
        <div className="animate-pulse bg-white/5 backdrop-blur-sm rounded-lg w-16 h-16 border border-white/10" />
        <div className="animate-pulse bg-white/5 backdrop-blur-sm rounded-lg w-16 h-16 border border-white/10" />
        <div className="animate-pulse bg-white/5 backdrop-blur-sm rounded-lg w-16 h-16 border border-white/10" />
      </div>
    )
  }

  const TimeCard = ({ value, label, isAnimating = false }: { value: number; label: string; isAnimating?: boolean }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isAnimating ? "scale-105 border-orange-400/50" : "scale-100"
          }`}
        >
          <span 
            className={`text-2xl sm:text-3xl font-bold font-mono text-white transition-all duration-300 ${
              isAnimating ? "text-orange-400" : ""
            }`}
          >
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-xs sm:text-sm text-white/70 mt-2 font-medium uppercase tracking-wider">{label}</span>
    </div>
  )

  const AnimatedColon = () => (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20">
      <div className="flex flex-col gap-1">
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center py-8 relative">
      {isEventEnded ? (
        /* Event Ended Message */
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Event Successfully Completed! 🎉
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full" />
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-4">
            <p className="text-lg text-white mb-3">
              Thank you for joining AWS Community Day Cebu 2025!
            </p>
            <p className="text-white/70 mb-4">
              What an amazing day it was! Thank you to all participants, speakers, sponsors, and volunteers who made this event a huge success.
            </p>
            
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 border-2 border-amber-400 rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div className="text-center">
                    <div className="text-amber-800 text-sm font-bold uppercase tracking-wider">Event Completed</div>
                    <div className="text-amber-700 text-xs">September 13, 2025</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-300 rounded-full shadow-sm"></div>
            </div>
          </div>
          
          <p className="text-white/60 text-sm">
            Stay connected with the AWS Community for future events!
          </p>
        </div>
      ) : isEventDay ? (
        /* Event Day Message */
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Event Day is Here! 🚀
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full" />
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-4">
            <p className="text-lg text-white mb-3">
              Welcome to AWS Community Day Cebu 2025!
            </p>
            <p className="text-white/70 mb-4">
              The event is happening right now! Join us for an amazing day of cloud computing, networking, and innovation.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-200 text-sm font-medium">Live Now</span>
            </div>
          </div>
        </div>
      ) : (
        /* Regular Countdown */
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Event Starts In</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full" />
          </div>

          {/* Countdown display */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <TimeCard value={timeLeft.days} label="Days" isAnimating={animatingUnits.days} />
            <AnimatedColon />
            <TimeCard value={timeLeft.hours} label="Hours" isAnimating={animatingUnits.hours} />
            <AnimatedColon />
            <TimeCard value={timeLeft.minutes} label="Minutes" isAnimating={animatingUnits.minutes} />
            <AnimatedColon />
            <TimeCard value={timeLeft.seconds} label="Seconds" isAnimating={animatingUnits.seconds} />
          </div>

          {/* Event info */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <p className="text-white/70 text-sm">September 13, 2025 • 1:00 PM - 7:00 PM (PHT)</p>
          </div>
        </div>
      )}
    </div>
  )
}
