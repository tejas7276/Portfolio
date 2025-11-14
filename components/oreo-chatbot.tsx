"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "oreo"
}

// SUPERCHARGED KNOWLEDGE BASE (Resume + Projects + Tech + Contact)
const knowledgeBase: Record<string, string> = {
  // Projects
  "samstrack":
    "SAMSTRACK is a full-stack Student Attendance Management System built using Spring Boot, Angular, Hibernate, and MySQL. It includes analytics dashboards, secure roles, CRUD operations, and improved reporting by 25%.",
  "drift kicks":
    "Drift Kicks is an e-commerce shoe platform built using Django, HTML, CSS, JS, and Bootstrap. Features include filtering, cart, checkout, authentication, and responsive UI.",
  "portfolio":
    "My AI-powered portfolio is built using Next.js, TailwindCSS, and custom animations. It includes an AI chatbot, scroll tracker, advanced UI components, and glass-morphism design.",

  "best project":
    "My strongest projects are SAMSTRACK (Spring Boot + Angular) and Drift Kicks (Django). Both show full-stack skills, authentication, performance tuning, and UI engineering.",

  // Stack
  "tech stack":
    "I work with Java, Spring Boot, Hibernate, Angular, Django, Python, MySQL, TypeScript, JavaScript, REST APIs, and modern frontend tools.",
  "skills":
    "Key skills include Java, Spring Boot, Angular, Django, REST APIs, SQL, Python, Data Analysis, and building full-stack web applications.",
  "languages":
    "I use Java, Python, JavaScript, TypeScript, C++, SQL, HTML, and CSS.",

  // Experience
  "experience":
    "I’ve gained experience from: The Kiran Academy (Java Full Stack Trainee), Heuristic Technopark (Web Dev Intern), and KPMG (Data Analyst Intern).",
  "kiran academy":
    "At The Kiran Academy, I built full-stack apps using Spring Boot + Angular, implemented authentication, optimized APIs, and improved backend performance.",
  "heuristic technopark":
    "At Heuristic Technopark, I built Django REST APIs, optimized queries (20% faster), and improved UI responsiveness.",
  "kpmg":
    "At KPMG, I automated reporting workflows, improved data accuracy by 15%, and supported BI dashboards and process improvement.",

  // Contact
  "contact":
    "Here are the contact details: Email — tejasshinde7276@gmail.com, LinkedIn — linkedin.com/in/tejas-shinde19, GitHub — github.com/tejas7276.",

  // Education
  "education":
    "I completed BCA from Moolji Jaitha College with 7.85 CGPA and also completed Java Full Stack Certification from The Kiran Academy.",

  // Achievements
  "achievements":
    "Key achievements: Improved reporting speed by 40%, optimized backend APIs, automated workflows, and delivered 5+ production-ready full-stack applications.",

  // Funnels
  "api":
    "I build REST APIs using Spring Boot, Django REST Framework, and Node/Nest.js. I focus on clean architecture, performance, and secure authentication.",
  "frontend":
    "I work with Angular, Next.js, TailwindCSS, Bootstrap, and component-based UI design.",
  "backend":
    "Backend experience includes Spring Boot, Hibernate, Django, JWT auth, caching, SQL, and microservice-ready architecture.",
  "database":
    "I use MySQL, PostgreSQL, and SQLite. Strong skills in modeling, indexing, joins, and query optimization.",

  // Default fallback
  "default":
    "I'm Oreo — Tejas’s AI assistant! Ask me about his projects, skills, tech stack, internships, achievements, or contact info."
}

export default function Oreo() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Oreo, Tejas's AI assistant. Ask me anything about his skills, projects, or experience!",
      sender: "oreo",
    },
  ])
  const [input, setInput] = useState("")
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()

    // Smart keyword matching
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (key !== "default" && lower.includes(key)) {
        return value
      }
    }

    return knowledgeBase.default
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // AI thinking delay
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: "oreo",
      }
      setMessages((prev) => [...prev, response])
    }, 450)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-80 h-96 bg-card border border-border rounded-lg shadow-xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-accent/20 border-b border-border p-4">
            <h3 className="font-semibold text-foreground">Oreo</h3>
            <p className="text-xs text-muted-foreground">Tejas's AI Assistant</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 bg-background flex gap-2">
            <input
              className="flex-1 bg-input border border-border rounded px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button className="bg-accent hover:bg-accent/90" size="sm" onClick={handleSendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
