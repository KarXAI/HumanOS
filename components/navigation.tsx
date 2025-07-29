"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Animated Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                <Image
                  src="/images/humanos-logo.png"
                  alt="HumanOS Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                HumanOS
              </span>
              <span className="text-xs text-slate-500 -mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Reboot Your Inner Code
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-slate-600 hover:text-green-600 transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative">Join Movement</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-300"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "top-2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-2" : "top-3"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 border-t border-slate-200/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-3 text-slate-600 hover:text-green-600 transition-all duration-300 font-medium rounded-lg hover:bg-green-50 group"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isOpen ? 1 : 0,
                    transition: `all 0.3s ease ${index * 50}ms`,
                  }}
                >
                  {item.name}
                  <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-green-400 to-emerald-500 group-hover:h-6 group-hover:top-3 transition-all duration-300 rounded-r"></div>
                </Link>
              ))}
              <Button
                size="sm"
                className="mx-4 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Movement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
