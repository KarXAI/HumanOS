import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, Users, Clock, Star } from "lucide-react"

export default function PlaybooksPage() {
  const playbooks = [
    {
      title: "The Curiosity Playbook",
      subtitle: "Rediscover Wonder in Everyday Moments",
      description:
        "Transform routine into revelation through the power of curious questioning and mindful observation.",
      practices: 12,
      duration: "21 days",
      downloads: 1240,
      color: "bg-yellow-50 border-yellow-200",
      accent: "text-yellow-700",
      features: [
        "Daily curiosity prompts",
        "Wonder-walking exercises",
        "Question journaling templates",
        "Mindful observation practices",
      ],
    },
    {
      title: "The Reverence Playbook",
      subtitle: "Find the Sacred in the Ordinary",
      description: "Cultivate deep appreciation and respect for life's simple moments and profound connections.",
      practices: 15,
      duration: "30 days",
      downloads: 980,
      color: "bg-rose-50 border-rose-200",
      accent: "text-rose-700",
      features: [
        "Sacred pause practices",
        "Gratitude amplification",
        "Nature connection rituals",
        "Reverent listening exercises",
      ],
    },
    {
      title: "The Confidence Playbook",
      subtitle: "Build Unshakeable Inner Strength",
      description: "Develop authentic self-assurance rooted in self-awareness, not external validation.",
      practices: 18,
      duration: "28 days",
      downloads: 1560,
      color: "bg-blue-50 border-blue-200",
      accent: "text-blue-700",
      features: [
        "Inner voice strengthening",
        "Boundary setting practices",
        "Self-compassion exercises",
        "Courage building activities",
      ],
    },
    {
      title: "The Gratitude Playbook",
      subtitle: "Transform Perspective Through Appreciation",
      description: "Shift from scarcity to abundance through intentional gratitude practices and perspective work.",
      practices: 14,
      duration: "21 days",
      downloads: 2100,
      color: "bg-green-50 border-green-200",
      accent: "text-green-700",
      features: [
        "Daily appreciation rituals",
        "Gratitude letter writing",
        "Abundance mindset shifts",
        "Thankfulness meditation",
      ],
    },
    {
      title: "The Forgiveness Playbook",
      subtitle: "Release and Heal Emotional Wounds",
      description: "Learn to forgive yourself and others, not for their sake, but for your own freedom and peace.",
      practices: 16,
      duration: "35 days",
      downloads: 890,
      color: "bg-purple-50 border-purple-200",
      accent: "text-purple-700",
      features: [
        "Self-forgiveness practices",
        "Emotional release techniques",
        "Compassion cultivation",
        "Healing visualization",
      ],
    },
    {
      title: "The Understanding Playbook",
      subtitle: "Bridge Hearts Through Empathy",
      description: "Develop deeper empathy and communication skills to create meaningful connections with others.",
      practices: 20,
      duration: "42 days",
      downloads: 1340,
      color: "bg-indigo-50 border-indigo-200",
      accent: "text-indigo-700",
      features: [
        "Empathetic listening skills",
        "Perspective-taking exercises",
        "Conflict resolution tools",
        "Heart-centered communication",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Transformation Playbooks</h1>
          <p className="text-xl text-slate-600 mb-8">Practical guides for emotional depth and conscious living</p>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            6 Core Values • 95+ Practices • 10,000+ Downloads
          </Badge>
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {playbooks.map((playbook, index) => (
              <Card
                key={index}
                className={`border-2 ${playbook.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-medium text-slate-800 mb-2">{playbook.title}</h3>
                        <p className={`text-lg ${playbook.accent} font-medium mb-3`}>{playbook.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{playbook.description}</p>

                    <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {playbook.practices} practices
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {playbook.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {playbook.downloads.toLocaleString()} downloads
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-slate-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {playbook.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                      <Button variant="outline" className="border-slate-300 bg-transparent">
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">How Playbooks Work</h2>
            <p className="text-slate-600">A gentle, structured approach to inner transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Choose Your Focus</h3>
              <p className="text-slate-600">
                Select a playbook that resonates with your current growth area or life challenge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Practice Daily</h3>
              <p className="text-slate-600">
                Engage with micro-practices, journal prompts, and reflection exercises each day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Transform Gradually</h3>
              <p className="text-slate-600">
                Experience gentle shifts in perspective, emotional depth, and conscious living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Start Your Transformation Today</h2>
          <p className="text-xl opacity-90 mb-8">
            Download your first playbook and begin the journey toward deeper emotional intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 px-8">
              Download All Playbooks
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
