"use client"

import { useEffect, useRef } from "react"

export default function MorphingBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const path = svg.querySelector("path")
    if (!path) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      const d = `
        M 0,${100 + Math.sin(time) * 20} 
        C ${150 + Math.cos(time * 0.8) * 30},${80 + Math.sin(time * 1.2) * 25} 
          ${350 + Math.sin(time * 0.6) * 40},${120 + Math.cos(time * 0.9) * 30} 
          500,${100 + Math.sin(time * 1.1) * 20}
        L 500,0 
        L 0,0 
        Z
      `

      path.setAttribute("d", d)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 via-transparent to-emerald-900/10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Morphing SVG shapes */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M 0,100 C 150,80 350,120 500,100 L 500,0 L 0,0 Z" fill="url(#morphGradient)" />
      </svg>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-full h-full animate-ping rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />
    </div>
  )
}
