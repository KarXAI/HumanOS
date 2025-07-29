"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Daily Thoughts", href: "/daily-thoughts" },
    { name: "Blog", href: "/blog" },
    { name: "Playbooks", href: "/playbooks" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: `scale(${isOpen ? 2 : 1})`,
        }}
      />

      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          scrolled
            ? "bg-black/20 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(6,182,212,0.1)_25%,rgba(6,182,212,0.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.1)_75%,rgba(6,182,212,0.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"
            style={{
              transform: `translateX(${scrolled ? -mousePos.x * 0.01 : 0}px)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex justify-between items-center h-16">
            {/* Futuristic Logo Space */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              {/* Logo Container with Perfect Fit */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 animate-spin-slow"></div>

                {/* Perfect image placeholder - your logo will fit here */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  {/* This is where your logo image will go */}
                  <div className="w-full h-full bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full flex items-center justify-center">
                    <div className="text-xs font-bold text-cyan-400 opacity-60">LOGO</div>
                  </div>
                </div>

                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>
                <div
                  className="absolute inset-0 rounded-full border border-blue-400/20 animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Text with glitch effect */}
              <div className="flex flex-col relative">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300 relative">
                  HumanOS
                  <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100 animate-glitch">
                    HumanOS
                  </span>
                </span>
                <span className="text-xs text-cyan-400/60 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  v2.0.24
                </span>
              </div>

              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-slate-300 hover:text-cyan-400 transition-all duration-500 font-medium group overflow-hidden text-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: `translateY(${scrolled ? 0 : -20}px)`,
                    opacity: scrolled ? 1 : 0.8,
                    transition: `all 0.5s ease ${index * 50}ms`,
                  }}
                >
                  <span className="relative z-10 font-mono tracking-wide">{item.name}</span>

                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Bottom line animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>

                  {/* Side glow */}
                  <div className="absolute inset-0 bg-cyan-400/10 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </Link>
              ))}

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 rounded-full px-6 py-2 font-mono text-sm tracking-wide relative overflow-hidden group shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 h-10">
                <span className="relative z-10">INITIALIZE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
              >
                <div className="relative w-5 h-5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`absolute block w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                        isOpen
                          ? i === 0
                            ? "rotate-45 top-2"
                            : i === 1
                              ? "opacity-0"
                              : "-rotate-45 top-2"
                          : `top-${i * 2 + 1}`
                      }`}
                      style={{
                        top: isOpen ? "10px" : `${i * 6 + 3}px`,
                      }}
                    />
                  ))}
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
              isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 border-t border-cyan-400/20 bg-slate-900/50 backdrop-blur-xl rounded-lg mt-4">
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 font-mono text-sm rounded-lg hover:bg-cyan-400/10 group"
                    onClick={() => setIsOpen(false)}
                    style={{
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: isOpen ? 1 : 0,
                      transition: `all 0.3s ease ${index * 100}ms`,
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-blue-500 group-hover:h-6 group-hover:top-3 transition-all duration-300 rounded-r"></div>
                  </Link>
                ))}
                <Button className="mx-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-mono text-sm">
                  INITIALIZE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
