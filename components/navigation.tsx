"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <section id="about" className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* ---------------------- SIDEBAR NAVIGATION ---------------------- */}
      <nav className="md:w-64 bg-card border-r border-border p-8 md:sticky md:top-0 md:h-screen">
        <h1 className="text-3xl font-bold mb-12 text-white">Tejas</h1>

        {/* Nav Items */}
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---------------------- DOWNLOAD CV BUTTON ---------------------- */}
        <a
          href="/Tejas-Shinde-Resume.pdf"
          download="Tejas-Shinde-Resume.pdf"
          className="
            mt-10 inline-block w-full text-center px-4 py-3 rounded-lg
            border border-accent text-accent
            hover:bg-accent hover:text-black
            transition-all duration-300
            hover:scale-105
            glass-btn backdrop-blur-md
          "
        >
          Download CV
        </a>

        {/* ---------------------- SOCIAL LINKS ---------------------- */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Connect</p>

          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/tejas7276"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tejas-shinde19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:tejasshinde7276@gmail.com"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
  Hey, I'm <span className="text-accent font-semibold">Tejas Shinde</span> — a dedicated 
  <span className="text-accent font-semibold"> Java Full Stack Developer</span> from Jalgaon, Maharashtra.  
  I specialize in building modern, scalable web applications using 
  <span className="font-semibold"> Java, React , Spring Boot, Hibernate, Angular, Django, Python, and MySQL</span>.  
  I love crafting clean, component-driven frontends and engineering secure, high-performance backends with 
  <span className="font-semibold">REST APIs, authentication, database optimization, and microservice-ready architecture</span>.  
  Passionate about solving real-world problems through elegant code, smooth UI/UX, and production-focused development.
</p>


        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition">
            <p className="text-sm text-muted-foreground mb-2">Education</p>
            <p className="text-white font-semibold">BCA Graduate</p>
            <p className="text-muted-foreground text-sm">Moolji Jaitha College, 2024</p>
            <p className="text-muted-foreground text-sm mt-2">CGPA: 7.85</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition">
            <p className="text-sm text-muted-foreground mb-2">Experience</p>
            <p className="text-white font-semibold">2+ Years</p>
            <p className="text-muted-foreground text-sm">Full Stack Development</p>
            <p className="text-muted-foreground text-sm mt-2">REST APIs & Web Apps</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition">
            <p className="text-sm text-muted-foreground mb-2">Fun Fact</p>
            <p className="text-white font-semibold">Coding for 2+ years</p>
            <p className="text-muted-foreground text-sm">Debugging since forever</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Technical Stack</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-accent font-semibold mb-3">Languages</p>
              <p className="text-muted-foreground">Java, Python, C++, TypeScript </p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-3">Frameworks</p>
              <p className="text-muted-foreground">Spring Boot, Angular, Hibernate, React, Django, Bootstrap</p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-3">Web Tech</p>
              <p className="text-muted-foreground">HTML5, CSS3, JavaScript, REST, JSON, AJAX</p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-3">Tools & Database</p>
              <p className="text-muted-foreground">Git, Github , Postman, IntelliJ IDEA, VS Code, Maven, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
