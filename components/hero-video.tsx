"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroVideoProps {
  videoSrc?: string
  title: string
  subtitle: string
}

export default function HeroVideo({ videoSrc = "/running-horse.mp4", title, subtitle }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("experience")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background with cinematic zoom effect */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovering ? "scale-110" : "scale-100"}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Gradient overlay - sophisticated cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />

        <div className="absolute inset-0 backdrop-blur-[0.5px] opacity-30" />
      </div>

      {/* Content overlay with enhanced animations */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 gap-8">
        {/* Title with gradient and animation */}
        <div
          className={`space-y-4 text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl max-w-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
              {title}
            </span>
          </h1>

          {/* Subtitle with staggered animation */}
          <p
            className={`text-xl md:text-2xl text-gray-200 text-center max-w-2xl drop-shadow-lg transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {subtitle}
          </p>

          {/* Description text */}
          <p
            className={`text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Building extraordinary digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            onClick={scrollToNext}
            className="group relative px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>

          <Button
            variant="outline"
            className="px-8 py-6 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <p className="text-xs text-gray-300 uppercase tracking-widest">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
