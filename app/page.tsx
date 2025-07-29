"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Cpu, Network, Download, Star, Quote, Code, Database, Wifi } from "lucide-react"

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-quantum-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                transform: `translateZ(${Math.random() * 100}px)`,
              }}
            />
          ))}
        </div>

        {/* Neural Network Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="url(#neuralGradient)"
                className="animate-pulse"
              />
              <line
                x1={Math.random() * 1000}
                y1={Math.random() * 1000}
                x2={Math.random() * 1000}
                y2={Math.random() * 1000}
                stroke="url(#neuralGradient)"
                strokeWidth="0.5"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}
        </svg>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* System Status */}
          <div className="mb-6 scroll-reveal">
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-400 font-mono text-xs tracking-wider px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              SYSTEM ONLINE • NEURAL INTERFACE ACTIVE
            </Badge>
          </div>

          {/* Main Title */}
          <div className="mb-8 scroll-reveal">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-neon-glow">
                HumanOS
              </span>
              <span className="block text-lg md:text-2xl font-mono text-cyan-400/80 tracking-wider">
                v2.0.24 NEURAL
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-light mb-6 relative">
              <span
                className="block text-white/90"
                style={{
                  transform: `translateX(${(mousePos.x - window.innerWidth / 2) * 0.01}px)`,
                }}
              >
                Reboot Your
              </span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-bold animate-hologram"
                style={{
                  transform: `translateX(${(mousePos.x - window.innerWidth / 2) * -0.01}px)`,
                }}
              >
                Inner Code
              </span>
            </div>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-mono">
              Advanced consciousness operating system for human transformation.
              <br />
              <span className="text-cyan-400">Unlock the Power Within.</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scroll-reveal">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-full text-base font-mono tracking-wide relative overflow-hidden group shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                INITIALIZE SYSTEM
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full text-base font-mono tracking-wide bg-black/50 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CORE
              </span>
              <div className="absolute inset-0 bg-cyan-400/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </Button>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto scroll-reveal">
            {[
              { label: "ACTIVE USERS", value: "10,847", icon: Network },
              { label: "TRANSFORMATIONS", value: "2.4M", icon: Brain },
              { label: "SUCCESS RATE", value: "97.3%", icon: Cpu },
              { label: "UPTIME", value: "99.9%", icon: Database },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-morph rounded-lg p-3 text-center group hover:bg-cyan-400/10 transition-all duration-300"
              >
                <stat.icon className="h-5 w-5 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Holographic HUD Elements */}
        <div className="absolute top-24 left-4 glass-morph rounded-lg p-3 font-mono text-xs text-cyan-400 opacity-60">
          <div>NEURAL_LINK: ACTIVE</div>
          <div>BANDWIDTH: 1.21 GW</div>
          <div>LATENCY: 0.003ms</div>
        </div>

        <div className="absolute bottom-24 right-4 glass-morph rounded-lg p-3 font-mono text-xs text-cyan-400 opacity-60">
          <div>CONSCIOUSNESS: EXPANDING</div>
          <div>AWARENESS: HEIGHTENED</div>
          <div>POTENTIAL: UNLIMITED</div>
        </div>
      </section>

      {/* Neural Thought Interface */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Neural Thought Interface
            </h2>
            <p className="text-lg text-slate-400 font-mono">Real-time consciousness synchronization</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-black/50 border-2 border-cyan-400/30 backdrop-blur-xl overflow-hidden scroll-reveal">
            <CardContent className="p-8 relative">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-500/20 animate-pulse"></div>

              <div className="relative z-10 text-center">
                <Quote className="h-10 w-10 text-cyan-400 mx-auto mb-6 animate-pulse" />
                <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6 font-mono">
                  "Life is not to be managed, but{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 animate-neon-glow">
                    understood and elevated
                  </span>
                  . Growth begins with awareness, not pressure."
                </blockquote>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:bg-cyan-400/10 font-mono border border-cyan-400/30 rounded-full px-4 py-2 text-sm"
                  >
                    <Wifi className="mr-2 h-4 w-4" />
                    SYNC TO NETWORK
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:bg-blue-400/10 font-mono border border-blue-400/30 rounded-full px-4 py-2 text-sm"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    SAVE TO CORE
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transformation Modules */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
              Transformation Modules
            </h2>
            <p className="text-lg text-slate-400 font-mono">Advanced consciousness algorithms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CURIOSITY.exe",
                description: "Neural pathways for wonder amplification",
                icon: Brain,
                color: "from-yellow-400 to-orange-500",
                status: "ACTIVE",
              },
              {
                title: "REVERENCE.dll",
                description: "Sacred pattern recognition system",
                icon: Star,
                color: "from-rose-400 to-pink-500",
                status: "OPTIMIZED",
              },
              {
                title: "CONFIDENCE.sys",
                description: "Self-assurance protocol enhancement",
                icon: Zap,
                color: "from-blue-400 to-indigo-500",
                status: "UPGRADED",
              },
              {
                title: "GRATITUDE.app",
                description: "Appreciation frequency modulator",
                icon: Network,
                color: "from-green-400 to-emerald-500",
                status: "RUNNING",
              },
              {
                title: "FORGIVENESS.core",
                description: "Emotional memory defragmentation",
                icon: Cpu,
                color: "from-purple-400 to-violet-500",
                status: "HEALING",
              },
              {
                title: "UNDERSTANDING.net",
                description: "Empathy network synchronization",
                icon: Database,
                color: "from-indigo-400 to-purple-500",
                status: "CONNECTED",
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="bg-black/50 border-2 border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 scroll-reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative">
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400">{module.status}</span>
                    </div>
                  </div>

                  {/* Module icon */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${module.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors duration-300">
                    {module.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed text-sm">{module.description}</p>

                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:bg-cyan-400/10 font-mono text-sm border border-cyan-400/30 rounded-full w-full group-hover:border-cyan-400/60 transition-all duration-300"
                  >
                    EXECUTE MODULE →
                  </Button>

                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Network Signup */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Join the Neural Network
          </h2>
          <p className="text-lg text-slate-400 mb-8 font-mono">
            Connect to the collective consciousness. Receive system updates and consciousness patches.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3 mb-4">
              <Input
                type="email"
                placeholder="neural.interface@consciousness.net"
                className="bg-black/50 border-2 border-cyan-400/30 text-white placeholder:text-slate-500 font-mono backdrop-blur-sm focus:border-cyan-400/60 transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono px-6 rounded-full">
                SYNC
              </Button>
            </div>
            <p className="text-sm text-slate-500 font-mono">
              Encrypted transmission • Quantum security • No spam protocols
            </p>
          </div>
        </div>
      </section>

      {/* System Footer */}
      <section className="py-12 px-4 bg-gradient-to-r from-slate-900 via-black to-slate-900 border-t border-cyan-400/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 scroll-reveal">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
              SYSTEM PHILOSOPHY
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="scroll-reveal">
              <h4 className="font-bold mb-3 text-cyan-400 font-mono">CORE BELIEFS</h4>
              <ul className="space-y-2 text-slate-300 font-mono text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                  Life is not to be managed, but understood and elevated
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  People carry emotional scripts—HumanOS rewrites them
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  Growth begins with awareness, not pressure
                </li>
              </ul>
            </div>

            <div className="scroll-reveal">
              <h4 className="font-bold mb-3 text-cyan-400 font-mono">SYSTEM VALUES</h4>
              <ul className="space-y-2 text-slate-300 font-mono text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  True power comes from curiosity and reverence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  Forgiveness and service transform lives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                  Reflection leads to authentic living
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
