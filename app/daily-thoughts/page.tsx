import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Share, Heart, BookmarkPlus } from "lucide-react"

export default function DailyThoughtsPage() {
  const thoughts = [
    {
      id: 1,
      text: "Curiosity is the gentle rebellion against the ordinary.",
      value: "Curiosity",
      date: "Today",
      likes: 24,
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      id: 2,
      text: "In reverence, we find the sacred hiding in plain sight.",
      value: "Reverence",
      date: "Yesterday",
      likes: 31,
      color: "bg-rose-50 border-rose-200",
    },
    {
      id: 3,
      text: "Confidence blooms when we stop performing and start being.",
      value: "Confidence",
      date: "2 days ago",
      likes: 18,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: 4,
      text: "Gratitude transforms what we have into enough.",
      value: "Gratitude",
      date: "3 days ago",
      likes: 42,
      color: "bg-green-50 border-green-200",
    },
    {
      id: 5,
      text: "Forgiveness is not forgetting; it's choosing freedom over resentment.",
      value: "Forgiveness",
      date: "4 days ago",
      likes: 27,
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: 6,
      text: "Understanding begins when we listen with our hearts, not our judgments.",
      value: "Understanding",
      date: "5 days ago",
      likes: 35,
      color: "bg-indigo-50 border-indigo-200",
    },
  ]

  const values = ["All", "Curiosity", "Reverence", "Confidence", "Gratitude", "Forgiveness", "Understanding"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Daily Thoughts</h1>
          <p className="text-xl text-slate-600 mb-8">Gentle wisdom for conscious living, one thought at a time</p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search thoughts by keyword..." className="pl-10 py-3 text-lg border-slate-200" />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {values.map((value) => (
                <Badge
                  key={value}
                  variant={value === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 px-4 py-2"
                >
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thoughts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thoughts.map((thought) => (
              <Card
                key={thought.id}
                className={`border-2 ${thought.color} hover:shadow-lg transition-all duration-300 group`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {thought.value}
                    </Badge>
                    <span className="text-xs text-slate-500">{thought.date}</span>
                  </div>

                  <blockquote className="text-lg font-medium text-slate-700 leading-relaxed mb-6">
                    "{thought.text}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-rose-600">
                        <Heart className="h-4 w-4 mr-1" />
                        {thought.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-600">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-600">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Thoughts
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-4">Never Miss a Moment of Wisdom</h2>
          <p className="text-slate-600 mb-8">Get daily thoughts delivered to your inbox every morning</p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input type="email" placeholder="Enter your email" className="bg-white border-slate-200" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
            <p className="text-sm text-slate-500 mt-3">Join 1,000+ souls on their transformation journey</p>
          </div>
        </div>
      </section>
    </div>
  )
}
