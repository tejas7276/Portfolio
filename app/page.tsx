import Hero from "@/components/cinematic-hero"
import Navigation from "@/components/navigation"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import Oreo from "@/components/oreo-chatbot"

export const metadata = {
  title: "Tejas Shinde – Full Stack Developer",
  description:
    "Portfolio of Tejas Shinde, Full Stack Developer. Explore projects, skills, experience, and contact info.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
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
    </main>
  )
}
