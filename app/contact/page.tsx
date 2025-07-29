import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for general inquiries",
      contact: "hello@humanos.com",
      response: "Within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Connect with our community team",
      contact: "community@humanos.com",
      response: "Within 48 hours",
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "Book a consultation session",
      contact: "Book online",
      response: "Same day scheduling",
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Serving communities worldwide",
      contact: "50+ countries",
      response: "Local time zones",
    },
  ]

  const faqs = [
    {
      question: "How do I get started with HumanOS?",
      answer:
        "Begin by downloading one of our free playbooks or exploring our daily thoughts. We recommend starting with the Curiosity Playbook as it opens the door to all other transformations.",
    },
    {
      question: "Are the programs suitable for beginners?",
      answer:
        "All our content is designed to meet you where you are. Whether you're new to personal development or have years of experience, our gentle approach works for everyone.",
    },
    {
      question: "Can I access content if I'm not tech-savvy?",
      answer:
        "Yes! Our platform is designed to be simple and intuitive. All content is easily accessible, and our community support team is always ready to help.",
    },
    {
      question: "Do you offer group programs or workshops?",
      answer:
        "We offer both individual programs and group experiences. Check our Programs page for current offerings, or contact us about bringing HumanOS to your organization.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Connect With Us</h1>
          <p className="text-xl text-slate-600 mb-8">
            We're here to support your journey toward conscious living and emotional intelligence
          </p>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            Usually respond within 24 hours
          </Badge>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                  <p className="font-medium text-blue-600 mb-2">{method.contact}</p>
                  <p className="text-xs text-slate-500">{method.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-medium text-slate-800 mb-6">Send Us a Message</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" className="border-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-slate-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">I'm interested in...</label>
                    <select className="w-full p-3 border border-slate-200 rounded-md bg-white">
                      <option>General inquiry</option>
                      <option>Playbooks and resources</option>
                      <option>Programs and courses</option>
                      <option>Community support</option>
                      <option>Partnership opportunities</option>
                      <option>Media and press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help you on your transformation journey..."
                      rows={5}
                      className="border-slate-200"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="font-medium text-slate-800 mb-3">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-blue-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-slate-800 mb-2">Still have questions?</h3>
                  <p className="text-slate-600 mb-4">
                    Our community support team is here to help you find the answers you need.
                  </p>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent">
                    Browse Help Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-medium text-slate-800">Support Hours</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-medium text-slate-800 mb-2">Email Support</h3>
              <p className="text-slate-600">24/7 - We respond within 24 hours</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-2">Community Forum</h3>
              <p className="text-slate-600">Always open - Peer support available</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-2">Live Consultations</h3>
              <p className="text-slate-600">Mon-Fri, 9AM-5PM (Your timezone)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Stay Connected</h2>
          <p className="text-xl opacity-90 mb-8">
            Receive weekly insights, new resources, and gentle reminders for conscious living
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-blue-600 hover:bg-white/90">Subscribe</Button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              Join 10,000+ souls on their transformation journey. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
