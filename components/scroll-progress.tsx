"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative w-14 h-14 flex items-center justify-center">

        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${
              2 * Math.PI * 28 * (1 - scrollProgress / 100)
            }`}
            className="transition-all duration-300 drop-shadow-[0_0_10px_var(--accent)]"
          />
        </svg>

        <span className="text-xs font-semibold text-accent drop-shadow-md">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  )
}
