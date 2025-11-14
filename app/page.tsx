"use client"

import { useState, useEffect } from "react"
import CinematicHero from "@/components/cinematic-hero"
import Navigation from "@/components/navigation"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import Oreo from "@/components/oreo-chatbot"

export default function Home() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {isReady && (
        <>
          <CinematicHero />
          <section id="experience">
            <Navigation />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </section>
          <ScrollProgress />
          <Oreo />
        </>
      )}
    </main>
  )
}
