import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import FuturisticNavigation from "@/components/futuristic-navigation"
import ParticleSystem from "@/components/particle-system"
import MorphingBackground from "@/components/morphing-background"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "HumanOS v2.0 - Neural Interface",
  description:
    "Reboot Your Inner Code. Unlock the Power Within. Advanced consciousness operating system for human transformation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${jetbrainsMono.variable} bg-black text-white overflow-x-hidden`}>
        <MorphingBackground />
        <ParticleSystem />
        <FuturisticNavigation />
        <main className="relative z-10 pt-16">{children}</main>
      </body>
    </html>
  )
}
