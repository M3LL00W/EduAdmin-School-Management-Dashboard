"use client"

import { useState, useEffect } from "react"
import { School, BookOpen, GraduationCap } from "lucide-react"

export function AnimatedLogo() {
  const [currentIcon, setCurrentIcon] = useState(0)
  const icons = [School, BookOpen, GraduationCap]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [icons.length])

  const CurrentIcon = icons[currentIcon]

  return (
    <div className="relative flex aspect-square size-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl animate-pulse" />
      <CurrentIcon
        className="size-5 text-white transition-all duration-500 transform hover:scale-110 animate-bounce"
        style={{
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
          animation: "bounce 2s infinite, glow 2s ease-in-out infinite alternate",
        }}
      />
      <style jsx>{`
        @keyframes glow {
          from {
            filter: drop-shadow(0 0 8px rgba(255,255,255,0.3));
          }
          to {
            filter: drop-shadow(0 0 16px rgba(255,255,255,0.6));
          }
        }
      `}</style>
    </div>
  )
}
