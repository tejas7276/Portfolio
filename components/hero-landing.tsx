"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("experience")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 opacity-80" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-subtle"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-subtle" />

      {/* Main content container */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4">
        {/* Animated badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect transition-all duration-700 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <Sparkles className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-sm font-medium text-accent">Welcome to my digital space</span>
        </div>

        {/* Main heading with gradient text */}
        <div className="space-y-6 text-center max-w-4xl">
          <h1
            className={`text-6xl md:text-8xl font-bold transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
              Tejas Shinde
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Full Stack Developer & Digital Creator
          </p>

          {/* Subtitle with animation */}
          <p
            className={`text-lg text-gray-400 font-light transition-all duration-1000 delay-300 max-w-2xl mx-auto leading-relaxed ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Building extraordinary digital experiences with cutting-edge technologies and creative vision
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            onClick={scrollToNext}
            className="group relative px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <p className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>

      {/* Floating code elements - subtle background details */}
      <div className="absolute top-1/4 right-10 text-purple-500/20 font-mono text-sm opacity-30 pointer-events-none animate-float">
        {"<motion />"}
      </div>
      <div
        className="absolute bottom-1/4 left-10 text-blue-500/20 font-mono text-sm opacity-30 pointer-events-none animate-float"
        style={{ animationDelay: "2s" }}
      >
        {"{ creativity }"}
      </div>
    </div>
  )
}
