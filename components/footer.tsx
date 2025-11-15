"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Credit */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Designed & Built by{" "}
              <span className="text-accent font-semibold">Tejas Shinde</span> with{" "}
              <span className="text-accent">🪽</span>
            </p>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/tejas7276"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 
                  0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                  -.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 
                  1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                  3.495.998.108-.776.418-1.305.76-1.604-2.665-.305-5.467-1.335-5.467-5.93 
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
                  1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 
                  3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                  5.922.42.36.81 1.096.81 2.21 0 1.595-.015 
                  2.88-.015 3.27 0 .315.21.694.825.576C20.565 
                  22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tejas-shinde19"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.12 2.5-2.5 
                  2.5S0 4.881 0 3.5 1.12 1 2.5 1s2.5 
                  1.119 2.5 2.5zM0 24h5V7H0v17zm7.5 
                  0h5V14.5c0-2.5 3-2.71 3 0V24h5v-9.5c0-6.708-7.5-6.452-8 
                  -3.162V7H7.5v17z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:tejasshinde7276@gmail.com"
              title="Email"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition text-foreground hover:text-accent"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 
                  2v12c0 1.1.9 2 2 2h16c1.1 0 
                  2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                  4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Footer bottom text */}
          <p className="text-muted-foreground text-sm text-center md:text-right w-full md:w-auto">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
