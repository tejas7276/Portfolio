"use client"

import { useState, useEffect, useRef } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])
  const categoryRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCategories((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // UPDATED SKILL DATA 🔥 (More keywords + more relevant technologies)
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Python", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "SQL", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "C++", level: 70, color: "from-indigo-500 to-blue-600" },
        { name: "TypeScript", level: 75, color: "from-sky-500 to-blue-500" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 95, color: "from-green-500 to-emerald-500" },
        { name: "Hibernate", level: 90, color: "from-green-600 to-teal-500" },
        { name: "Angular", level: 85, color: "from-red-500 to-pink-500" },
        { name: "Django", level: 85, color: "from-green-700 to-lime-500" },
        { name: "React", level: 80, color: "from-cyan-500 to-blue-400" },
        { name: "Node.js", level: 70, color: "from-lime-500 to-green-600" },
      ],
    },
    {
      category: "Tools & Tech",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-red-600 to-orange-500" },
        { name: "MySQL", level: 90, color: "from-blue-600 to-cyan-500" },
        { name: "REST APIs", level: 95, color: "from-indigo-500 to-purple-500" },
        { name: "PostgreSQL", level: 85, color: "from-blue-800 to-blue-500" },
        { name: "Maven", level: 85, color: "from-red-700 to-red-500" },
        { name: "Linux / CLI", level: 80, color: "from-gray-600 to-gray-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white scroll-fade-in in-view">
          Technical Skills
        </h2>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              ref={(el) => {
                categoryRefs.current[idx] = el
              }}
              className={`space-y-8 scroll-scale-in ${
                visibleCategories.includes(idx) ? "in-view" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-accent border-b border-accent/30 pb-4 transition-colors duration-300">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => {
                  const key = `${category.category}-${skill.name}`
                  const isHovered = hoveredSkill === key

                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredSkill(key)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="space-y-2 cursor-default"
                    >
                      {/* Label + % */}
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground transition">
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm transition-all ${
                            isHovered ? "text-accent font-bold" : "text-muted-foreground"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500 rounded-full`}
                          style={{
                            width: isHovered ? "100%" : `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Lower Section */}
        <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-2 gap-8">

          {/* Core Competencies */}
          <div className="glass-effect p-6 rounded-lg scroll-slide-left in-view">
            <h4 className="text-lg font-semibold text-accent mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent">•</span> Full-stack application development</li>
              <li className="flex gap-2"><span className="text-accent">•</span> RESTful API design & backend integration</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Database modeling, queries & optimization</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Secure authentication, authorization & session handling</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Component-based frontend architecture (Angular / React)</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Version control, branching & Git workflows</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Debugging, API testing & performance checks</li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="glass-effect p-6 rounded-lg scroll-slide-right in-view">
            <h4 className="text-lg font-semibold text-accent mb-4">Specializations</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent">•</span> MVC & layered architecture</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Scalable backend design & microservice-ready structure</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Backend performance tuning & query optimization</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Clean code principles & reusable module patterns</li>
              <li className="flex gap-2"><span className="text-accent">•</span> End-to-end API integration & data-flow management</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Problem solving, debugging & production-oriented logic</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
