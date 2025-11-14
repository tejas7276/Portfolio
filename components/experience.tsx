"use client"

import { useState, useEffect, useRef } from "react"

export default function Experience() {
  const experiences = [
    {
      company: "KPMG",
      role: "Data Analyst",
      period: "2025",
      description:
        "Automated data-processing workflows using SQL scripts and automation logic, improving accuracy by 15%. Built validated data pipelines and generated KPI insights to support data-driven decisions.",
      highlights: [
        "SQL",
        "Data Pipelines",
        "Automation",
        "Data Cleaning",
        "KPIs",
        "Reporting Automation",
        "Process Optimization",
      ],
    },
    {
      company: "The Kiran Academy",
      role: "Java Full Stack Trainee",
      period: "2024–2025",
      description:
        "Developed full-stack modules using Spring Boot, Hibernate, and Angular with secure authentication workflows. Built REST APIs and applied MVC architecture for clean and maintainable backend logic.",
      highlights: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Angular",
        "MVC Architecture",
        "REST APIs",
        "Authentication",
        "Full Stack Development",
      ],
    },
    {
      company: "Heuristic Technopark",
      role: "Web Development Intern",
      period: "2024",
      description:
        "Developed Django REST APIs and backend CRUD functionalities. Optimized database queries and models, improving data retrieval performance by 20%.",
      highlights: [
        "Python",
        "Django",
        "REST APIs",
        "PostgreSQL",
        "Query Optimization",
        "Backend Development",
        "API Performance",
      ],
    },
  ]

  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white scroll-fade-in in-view">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[idx] = el
              }}
              className={`group relative pl-8 pb-12 border-l-2 border-accent/50 hover:border-accent transition-all duration-500 scroll-slide-left ${
                visibleItems.includes(idx) ? "in-view" : ""
              }`}
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background group-hover:scale-125 group-hover:animate-neon-pulse transition-transform duration-300" />

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-bold text-accent">{exp.role}</h3>
                  <span className="text-muted-foreground text-sm md:text-base">{exp.period}</span>
                </div>

                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/30 hover:scale-105 hover:bg-accent/20 transition-all duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
