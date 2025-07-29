import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const categories = [
    "All",
    "Parenting",
    "Self-awareness",
    "Courage",
    "Forgiveness",
    "Life Skills",
    "Educator Wisdom",
    "Emotional Intelligence",
  ]

  const featuredPost = {
    title: "The Art of Conscious Parenting: Beyond Rules and Rewards",
    excerpt:
      "Discover how to parent from a place of awareness rather than reactivity, creating deeper connections with your children while fostering their emotional intelligence.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Parenting",
    image: "/placeholder.svg?height=400&width=600",
  }

  const blogPosts = [
    {
      title: "Building Emotional Resilience in Uncertain Times",
      excerpt:
        "Learn practical strategies to navigate life's challenges with grace and maintain inner stability when everything feels chaotic.",
      author: "Dr. Michael Torres",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Self-awareness",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Courage to Be Vulnerable: Strength in Authenticity",
      excerpt:
        "Exploring how vulnerability becomes a superpower when we learn to embrace our imperfections and share our truth.",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Courage",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Forgiveness as Self-Liberation: A Teacher's Journey",
      excerpt:
        "A veteran educator shares how learning to forgive transformed not only her classroom but her entire approach to life.",
      author: "Jennifer Walsh",
      date: "March 8, 2024",
      readTime: "9 min read",
      category: "Forgiveness",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Teaching Emotional Intelligence to Gen Z",
      excerpt:
        "Practical approaches for educators to help students develop emotional awareness and regulation skills in the digital age.",
      author: "Prof. David Kim",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Educator Wisdom",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Power of Pause: Mindful Decision Making",
      excerpt: "How creating space between stimulus and response can transform your relationships and life outcomes.",
      author: "Lisa Thompson",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Life Skills",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "From Perfectionism to Progress: A Mother's Story",
      excerpt:
        "One mother's journey from the exhausting pursuit of perfection to embracing growth and self-compassion.",
      author: "Maria Santos",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Parenting",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Wisdom for Daily Living</h1>
          <p className="text-xl text-slate-600 mb-8">
            Insights, stories, and practical guidance for emotional literacy and conscious living
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search articles by topic or keyword..."
                className="pl-10 py-3 text-lg border-slate-200"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Featured Article
            </Badge>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>

                <h2 className="text-3xl font-medium text-slate-800 mb-4 leading-tight">{featuredPost.title}</h2>

                <p className="text-slate-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Latest Articles</h2>
            <p className="text-slate-600">Fresh insights for your transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent text-black">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Never Miss New Wisdom</h2>
          <p className="text-xl opacity-90 mb-8">Get our latest articles and insights delivered to your inbox weekly</p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-green-600 hover:bg-white/90">Subscribe</Button>
            </div>
            <p className="text-sm opacity-75 mt-3">Join our community of conscious learners. No spam, just wisdom.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
