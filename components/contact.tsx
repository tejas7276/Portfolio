"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/mblqdzrd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Have a project in mind? Let's collaborate and build something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-8">Connect With Me</h3>
              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:tejasshinde7276@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent transition">Email</p>
                    <p className="text-muted-foreground">tejasshinde7276@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/tejas-shinde19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent transition">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/tejas-shinde19</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/tejas7276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent transition">GitHub</p>
                    <p className="text-muted-foreground">github.com/tejas7276</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-background/50 p-6 rounded-lg border border-border">
              <p className="text-accent font-semibold mb-4">Response Time</p>
              <p className="text-foreground">
                I typically respond to emails within <span className="font-semibold">24 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tejas Shinde"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tejas@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitted && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-400 text-sm">Message sent successfully!</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-400 text-sm">{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 py-6 font-semibold transition disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you as soon as possible. Looking forward to our conversation!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
