"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { faqs } from "@/data"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
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

    const element = document.getElementById("faq")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="constellation-svg" style={{ top: "5%", left: "2%", width: "150px", height: "auto", opacity: "0.06" }}>
          <img src="/art-assets/smoke.svg" alt="" className="w-full h-auto animate-float-slow" style={{ transform: "rotate(15deg)" }} />
        </div>
        <div className="constellation-svg" style={{ bottom: "8%", right: "5%", width: "130px", height: "auto", opacity: "0.08" }}>
          <img src="/art-assets/smoke.svg" alt="" className="w-full h-auto animate-float-reverse" style={{ transform: "rotate(-20deg)" }} />
        </div>
        <div className="absolute text-orange-400/12 text-8xl font-bold question-mark-bounce" style={{ top: "8%", left: "3%", animation: "questionBounceRandom1 4s ease-in-out infinite" }}>?</div>
        <div className="absolute text-orange-400/15 text-9xl font-bold question-mark-bounce" style={{ top: "15%", right: "5%", animation: "questionBounceRandom2 5s ease-in-out infinite 1s" }}>?</div>
        <div className="absolute text-orange-400/18 text-6xl font-bold question-mark-bounce" style={{ bottom: "20%", left: "8%", animation: "questionBounceRandom3 3.5s ease-in-out infinite 2s" }}>?</div>
        <div className="absolute text-orange-400/10 text-7xl font-bold question-mark-bounce" style={{ top: "35%", right: "12%", animation: "questionBounceRandom4 6s ease-in-out infinite 0.5s" }}>?</div>
        <div className="absolute text-orange-400/20 text-5xl font-bold question-mark-bounce" style={{ bottom: "12%", right: "8%", animation: "questionBounceRandom5 4.5s ease-in-out infinite 3s" }}>?</div>
        <div className="absolute text-orange-400/8 text-10xl font-bold question-mark-bounce" style={{ top: "55%", left: "2%", animation: "questionBounceRandom6 7s ease-in-out infinite 4s" }}>?</div>
        <div className="absolute text-orange-400/14 text-4xl font-bold question-mark-bounce" style={{ top: "25%", left: "45%", animation: "questionBounceRandom7 3.5s ease-in-out infinite 1.5s" }}>?</div>
        <div className="absolute text-orange-400/16 text-5xl font-bold question-mark-bounce" style={{ bottom: "35%", right: "20%", animation: "questionBounceRandom8 5.5s ease-in-out infinite 2.5s" }}>?</div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/20 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-orange-300/30 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-2/3 left-1/6 w-3 h-3 border border-orange-400/15 rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-orange-400/25 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-slide-up leading-tight">
            Got{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200 px-4 sm:px-0">
            Find answers to common questions about AWS Community Day Cebu 2025. Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`border-border/50 hover:border-orange-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 transform hover:scale-[1.02] ${openItems.includes(index) ? "border-orange-500/40 shadow-lg shadow-orange-500/5" : ""}`}
                style={{ animationDelay: `${index * 100}ms`, animation: isVisible ? "slideInFromBottom 0.6s ease-out forwards" : "none" }}
              >
                <CardContent className="p-0">
                  <button onClick={() => toggleItem(index)} className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-all duration-300 rounded-lg group">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground pr-3 sm:pr-4 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                      {faq.question}
                    </h3>
                    <div className={`transition-all duration-300 ${openItems.includes(index) ? "rotate-180" : ""}`}>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-orange-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-2 border-t border-border/50">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed animate-fade-in">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 sm:mt-12 border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-[1.02]">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Still have questions?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Our team is here to help! Reach out to us for any additional questions or support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="mailto:awscloudclubctu@gmail.com" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg text-sm sm:text-base">
                  Email Us
                </a>
                <a href="https://t.me/awscommunitydaycebu" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base">
                  Join Telegram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
