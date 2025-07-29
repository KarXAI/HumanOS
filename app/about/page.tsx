import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Lightbulb, Target, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Curiosity",
      description:
        "We believe in questioning everything with wonder, not judgment. Curiosity opens doors to understanding.",
    },
    {
      icon: Heart,
      title: "Reverence",
      description:
        "Finding the sacred in ordinary moments. Every interaction, every breath, every experience holds meaning.",
    },
    {
      icon: Target,
      title: "Confidence",
      description:
        "True confidence comes from self-awareness and authenticity, not external validation or performance.",
    },
    {
      icon: Heart,
      title: "Gratitude",
      description:
        "Appreciation transforms our perspective, shifting us from scarcity to abundance in all areas of life.",
    },
    {
      icon: Heart,
      title: "Forgiveness",
      description: "Forgiveness is not about forgetting—it's about choosing freedom over resentment for our own peace.",
    },
    {
      icon: Users,
      title: "Understanding",
      description: "Deep empathy and genuine listening create bridges between hearts and heal divisions.",
    },
  ]

  const principles = [
    "Life is not to be managed, but understood and elevated",
    "People carry emotional scripts—HumanOS rewrites them",
    "Growth begins with awareness, not pressure",
    "True power comes from curiosity, reverence, forgiveness, service, and reflection",
  ]

  const stats = [
    { number: "10,000+", label: "Lives Transformed" },
    { number: "50+", label: "Countries Reached" },
    { number: "95%", label: "Report Positive Change" },
    { number: "2M+", label: "Content Downloads" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 mb-6">
            From Survival to Soulfulness
          </Badge>

          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">Rewriting the Human Experience</h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            HumanOS is more than a platform—it's a movement to help individuals realign with their higher purpose
            through emotional depth, value-based living, and inner transformation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide practical tools and wisdom that help individuals—parents, teachers, students, and
                  professionals—reconnect with their authentic selves and live with greater emotional intelligence,
                  purpose, and joy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  A world where every person operates from their highest self—where curiosity replaces judgment,
                  reverence replaces indifference, and understanding replaces division. A world upgraded from survival
                  to soulfulness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-8">Our Core Philosophy</h2>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0 shadow-sm">
                <CardContent className="p-6 text-left">
                  <p className="text-lg text-slate-700 leading-relaxed">{principle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Our Six Core Values</h2>
            <p className="text-slate-600">The foundation of all HumanOS content and practices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">The HumanOS Story</h2>
            <p className="text-slate-600">How a simple idea became a global movement</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
            <p>
              HumanOS began with a simple observation: in our rush to optimize everything around us— our devices, our
              workflows, our productivity—we had forgotten to upgrade the most important system of all: ourselves.
            </p>

            <p>
              We noticed that people everywhere were struggling with the same fundamental challenges: feeling
              disconnected from their purpose, overwhelmed by emotions they didn't understand, and trapped in patterns
              that no longer served them.
            </p>

            <p>
              The solution wasn't another productivity hack or quick fix. It was a return to timeless wisdom, presented
              in a way that speaks to modern hearts. It was about creating space for curiosity instead of judgment,
              reverence instead of rushing, and understanding instead of assumption.
            </p>

            <p>
              Today, HumanOS serves thousands of individuals across the globe—mothers seeking deeper connection with
              their children, teachers wanting to create more meaningful learning environments, students searching for
              authentic confidence, and professionals longing to align their work with their values.
            </p>

            <p className="text-center font-medium text-slate-800">
              We're not just changing lives—we're upgrading the human experience, one heart at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Global Impact</h2>
            <p className="text-xl opacity-90">Creating ripples of positive change across communities worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-medium mb-2">Educational Impact</h3>
              <p className="opacity-90">
                Teachers in 30+ countries using HumanOS principles to create more empathetic classrooms
              </p>
            </div>

            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-medium mb-2">Family Transformation</h3>
              <p className="opacity-90">
                Thousands of families reporting deeper connections and improved communication
              </p>
            </div>

            <div>
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-medium mb-2">Community Building</h3>
              <p className="opacity-90">Local HumanOS groups forming in cities worldwide, creating support networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-4">Join the Movement</h2>
          <p className="text-xl text-slate-600 mb-8">
            Be part of a global community committed to conscious living and emotional intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 bg-transparent">
              Connect With Community
            </Button>
          </div>

          <p className="text-sm text-slate-500 mt-6">Join 10,000+ individuals who are upgrading their inner software</p>
        </div>
      </section>
    </div>
  )
}
