"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleProjects((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "SAMSTRACK",
      subtitle: "Student Attendance Management System",
      description:
        "A comprehensive attendance tracking system built with modern full-stack technologies. Features secure CRUD APIs, responsive UI, and optimized database queries for faster data retrieval.",
      stack: ["Spring Boot", "Angular", "MySQL", "REST API", "Hibernate"],
      features: [
        "Secure CRUD Operations",
        "Real-time Data Updates",
        "25% Performance Improvement",
        "Role-based Access Control",
        "Responsive Design",
      ],
      github: "https://github.com/tejas7276/SAMSTRACK",
      image: "/student-attendance-management-system-dashboard.png",
    },
    {
      title: "Drift Kicks",
      subtitle: "Online Shoe E-commerce Platform",
      description:
        "A fully functional online shoe store with modern UI/UX. Implements shopping cart functionality, checkout, role-based access control, and responsive design.",
      stack: ["Django", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Shopping Cart System",
        "Secure Checkout",
        "Product Filtering",
        "User Authentication",
        "Mobile Responsive",
      ],
      github: "https://github.com/tejas7276/Drift-Kicks",
      image: "/online-shoe-store-ecommerce-platform.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-8 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white scroll-fade-in in-view">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mb-16 text-lg scroll-fade-in in-view">
          A selection of projects showcasing full-stack development expertise
        </p>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el: HTMLDivElement | null) => {
                projectRefs.current[idx] = el
              }}
              className={`group grid md:grid-cols-2 gap-8 items-center scroll-fade-in ${
                visibleProjects.includes(idx) ? "in-view" : ""
              }`}
            >
              {/* Image Section */}
              <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-lg glass-effect-strong hover:glass-effect transition-all duration-500">

                  {/* PERFECT FITTED IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* NEW FIXED OVERLAY (no dimming) */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>

              {/* Project Details */}
              <div className={`${idx % 2 === 1 ? "md:order-1" : ""} space-y-6`}>
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-foreground leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/30 hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Key Features</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-accent/80 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="gap-2 border-accent text-accent hover:bg-accent/10 bg-transparent hover:scale-105 transition-transform duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </Button>
                  </a>

                  <Button className="gap-2 bg-accent hover:bg-accent/90 hover:scale-105 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
