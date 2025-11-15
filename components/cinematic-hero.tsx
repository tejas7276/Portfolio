"use client"

import { useEffect, useState } from "react"

export default function CinematicHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const videoElement = document.querySelector("video")
    if (videoElement) {
      videoElement.play().catch((err) => console.log("[v0] Video play error:", err))
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://res.cloudinary.com/dqypkefpq/video/upload/v1762968446/13010706_3840_2160_60fps_1_2_yiwoci.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 space-y-6">

        {/* --- CRISTIANO RONALDO QUOTE --- */}
        <div className="max-w-4xl">
          <p
            className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight text-white/90"
            style={{
              animation: "fadeInCinematic 2.5s ease-out 0.8s forwards, textOverlayWave 3s ease-in-out 3s infinite",
              opacity: 0,
            }}
          >
            “Talent helps.<br />Consistency builds everything.”
          </p>

          <p
            className="mt-3 text-base md:text-lg lg:text-xl font-light text-white/70 italic"
            style={{
              animation: "fadeInCinematic 2.5s ease-out 1.8s forwards",
              opacity: 0,
            }}
          >
            — Cristiano Ronaldo
          </p>
        </div>

        {/* --- NAME --- */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
          style={{
            animation: "fadeInCinematic 2.5s ease-out 3s forwards, textOverlayShimmer 3s ease-in-out 5s infinite",
            textShadow: "0 0 35px rgba(255,255,255,0.25)",
            opacity: 0,
          }}
        >
          Tejas Shinde
        </h1>

        {/* --- SUBTITLE --- */}
        <div className="max-w-3xl">
          <p
            className="text-sm md:text-base lg:text-lg font-light tracking-wider text-white/80"
            style={{
              animation: "fadeInCinematic 2s ease-out 4.5s forwards, textOverlayFade 2s ease-in-out 6.5s infinite",
              opacity: 0,
            }}
          >
            Full Stack Developer • I build fast, scalable, and human-focused web products
          </p>
        </div>

        {/* --- SMALL TAGLINE --- */}
        <div className="mt-4">
          <p
            className="text-base md:text-lg lg:text-xl font-light tracking-widest text-white/90"
            style={{
              animation: "fadeInCinematic 2s ease-out 6s forwards, textOverlayPulse 2s ease-in-out 8s infinite",
              opacity: 0,
            }}
          >
            [enter the codeverse]
          </p>
        </div>
      </div>
    </div>
  )
}
