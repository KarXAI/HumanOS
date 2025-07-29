import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, BookOpen, Users, Calendar, Clock, Star, CheckCircle } from "lucide-react"

export default function ProgramsPage() {
  const featuredPrograms = [
    {
      title: "Voices of Change",
      subtitle: "Weekly Changemaker Video Series",
      description:
        "Inspiring stories from individuals who've transformed their lives through HumanOS principles. Every Wednesday, discover how ordinary people create extraordinary change.",
      type: "Video Series",
      schedule: "Every Wednesday",
      duration: "15-20 min episodes",
      participants: "2,400+ viewers",
      color: "bg-blue-50 border-blue-200",
      accent: "text-blue-700",
      features: [
        "Real transformation stories",
        "Practical implementation tips",
        "Community discussion threads",
        "Monthly live Q&A sessions",
      ],
    },
    {
      title: "Goodness in Everyday Life",
      subtitle: "Monthly Reflective Journal",
      description:
        "A guided monthly practice to discover and cultivate goodness in your daily experiences. Transform ordinary moments into profound insights.",
      type: "Journal Program",
      schedule: "Monthly themes",
      duration: "Daily 10-min practice",
      participants: "1,800+ journalers",
      color: "bg-green-50 border-green-200",
      accent: "text-green-700",
      features: [
        "Monthly themed prompts",
        "Daily reflection exercises",
        "Community sharing circles",
        "Personal growth tracking",
      ],
    },
  ]

  const courses = [
    {
      category: "For Mothers",
      description: "Navigate motherhood with emotional wisdom and strength",
      courses: [
        {
          title: "Conscious Parenting Foundations",
          description: "Build emotional intelligence in your parenting approach",
          duration: "6 weeks",
          lessons: 18,
        },
        {
          title: "Self-Care for Mothers",
          description: "Prioritize your wellbeing without guilt",
          duration: "4 weeks",
          lessons: 12,
        },
        {
          title: "Raising Emotionally Intelligent Children",
          description: "Foster emotional depth in your children",
          duration: "8 weeks",
          lessons: 24,
        },
      ],
      color: "bg-rose-50 border-rose-200",
      accent: "text-rose-700",
    },
    {
      category: "For Teachers",
      description: "Create meaningful connections in educational spaces",
      courses: [
        {
          title: "Classroom Emotional Intelligence",
          description: "Build empathy and understanding in learning environments",
          duration: "5 weeks",
          lessons: 15,
        },
        {
          title: "Mindful Teaching Practices",
          description: "Integrate mindfulness into your teaching approach",
          duration: "6 weeks",
          lessons: 18,
        },
        {
          title: "Student Connection Strategies",
          description: "Foster deeper relationships with students",
          duration: "4 weeks",
          lessons: 12,
        },
      ],
      color: "bg-blue-50 border-blue-200",
      accent: "text-blue-700",
    },
    {
      category: "For Students",
      description: "Build confidence and find your authentic voice",
      courses: [
        {
          title: "Authentic Self-Discovery",
          description: "Uncover your true values and purpose",
          duration: "7 weeks",
          lessons: 21,
        },
        {
          title: "Confidence Building Essentials",
          description: "Develop unshakeable inner strength",
          duration: "5 weeks",
          lessons: 15,
        },
        {
          title: "Emotional Resilience for Students",
          description: "Navigate academic and social pressures with grace",
          duration: "6 weeks",
          lessons: 18,
        },
      ],
      color: "bg-green-50 border-green-200",
      accent: "text-green-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Transformation Programs</h1>
          <p className="text-xl text-slate-600 mb-8">
            Structured journeys for deep personal growth and conscious living
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Video Series
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
              Journal Programs
            </Badge>
            <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
              Structured Courses
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Featured Programs</h2>
            <p className="text-slate-600">Our most popular transformation experiences</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className={`border-2 ${program.color} hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="mb-4">
                      {program.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium text-slate-800 mb-2">{program.title}</h3>
                  <p className={`text-lg ${program.accent} font-medium mb-4`}>{program.subtitle}</p>

                  <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {program.schedule}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Users className="h-4 w-4" />
                      {program.participants}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-800 mb-3">Program Includes:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      {program.type === "Video Series" ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Watch Latest
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Start Journaling
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="border-slate-300 bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Courses */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Structured Courses</h2>
            <p className="text-slate-600">Deep-dive programs tailored for your life context</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((category, index) => (
              <Card key={index} className={`border-2 ${category.color} hover:shadow-lg transition-all`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium text-slate-800 mb-3">{category.category}</h3>
                  <p className="text-slate-600 mb-6">{category.description}</p>

                  <div className="space-y-4 mb-6">
                    {category.courses.map((course, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white">
                        <h4 className="font-medium text-slate-800 mb-2">{course.title}</h4>
                        <p className="text-sm text-slate-600 mb-3">{course.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            {course.lessons} lessons
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore Courses</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Ready to Begin Your Transformation?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of individuals who are living more consciously through HumanOS programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 px-8">
              Browse All Programs
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            All programs include community support and lifetime access to materials
          </p>
        </div>
      </section>
    </div>
  )
}
