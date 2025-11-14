"use client";

import { useState } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isMusicOn, setIsMusicOn] = useState(false);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* ----------------- VIDEO BACKGROUND ----------------- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.15] animate-slow-zoom"
      >
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Subtle Fog Layer */}
      <img
        src="/fog.png"
        alt="fog"
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen animate-fog-move"
      />

      {/* ----------------- HERO CONTENT ----------------- */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">

        {/* Cinematic Text Stack */}
        <div className="text-center space-y-6 max-w-3xl px-4">

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Silence doesn't mean stillness...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4 }}
            className="text-lg md:text-xl text-gray-300"
          >
            It's where creation begins.
          </motion.p>

          {/* Name with Glow Sweep */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
            className="relative group text-5xl md:text-7xl font-bold text-white"
          >
            Tejas Shinde
            <span className="glow-sweep"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
            className="text-xl md:text-2xl text-accent"
          >
            Falling in silence, rising in code.
          </motion.p>
        </div>

        {/* ----------------- BUTTON ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <Button
            onClick={scrollToNext}
            className="gap-2 border-accent text-accent hover:bg-accent/10 hover:text-white 
                       bg-transparent border-2 hover:border-white hover:scale-110 
                       transition-all duration-300 animate-soft-pulse"
          >
            Start Experience
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Button>
        </motion.div>
      </div>

      {/* ----------------- MUSIC BUTTON ----------------- */}
      <button
        onClick={() => setIsMusicOn(!isMusicOn)}
        className="absolute top-8 right-8 z-20 p-3 rounded-full glass-btn 
                   transition-all duration-300 text-white hover:scale-110"
        aria-label={isMusicOn ? "Mute music" : "Play music"}
      >
        {isMusicOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>

      {/* ----------------- SCROLL DOWN INDICATOR ----------------- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1">
          <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
          <ChevronDown className="w-6 h-6 text-accent/60 animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    </div>
  );
}
