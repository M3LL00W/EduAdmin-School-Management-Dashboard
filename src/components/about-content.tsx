"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  School,
  Users,
  BookOpen,
  Award,
  Target,
  Zap,
  Shield,
  Globe,
  Heart,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket,
  Code,
  Cloud,
  BarChart3,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student profiles, enrollment tracking, and academic progress monitoring.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: BookOpen,
    title: "Class Management",
    description: "Organize classes, schedules, and curriculum with intelligent timetable management.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Award,
    title: "Exam System",
    description: "Complete examination management with scheduling, results, and performance analytics.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights and comprehensive reports for data-driven decision making.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Enterprise-grade security with role-based access control and data encryption.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud storage and backup with 99.9% uptime guarantee.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
]

const technologies = [
  { name: "React", progress: 95, color: "bg-blue-500" },
  { name: "TypeScript", progress: 90, color: "bg-blue-600" },
  { name: "Next.js", progress: 88, color: "bg-gray-800" },
  { name: "Tailwind CSS", progress: 92, color: "bg-cyan-500" },
  { name: "Node.js", progress: 85, color: "bg-green-600" },
  { name: "PostgreSQL", progress: 80, color: "bg-blue-700" },
]

const stats = [
  { label: "Schools Using EduAdmin", value: "2,500+", icon: School, color: "text-blue-600" },
  { label: "Students Managed", value: "500K+", icon: Users, color: "text-green-600" },
  { label: "Teachers Empowered", value: "25K+", icon: Award, color: "text-purple-600" },
  { label: "Uptime Guarantee", value: "99.9%", icon: Zap, color: "text-orange-600" },
]

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    expertise: "Full-Stack Development",
    avatar: "SJ",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    expertise: "User Experience",
    avatar: "MC",
    color: "from-green-500 to-blue-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    expertise: "Strategy & Planning",
    avatar: "ER",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "David Wilson",
    role: "DevOps Engineer",
    expertise: "Infrastructure",
    avatar: "DW",
    color: "from-orange-500 to-red-500",
  },
]

export function AboutContent({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
              <School className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>About EduAdmin</h1>
        <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto leading-relaxed`}>
          Revolutionizing education management with cutting-edge technology, intuitive design, and powerful analytics.
          Built for modern schools to streamline operations and enhance learning outcomes.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg">
            <Rocket className="h-4 w-4 mr-2" />
            Get Started
          </Button>
          <Button variant="outline" className="border-2 bg-transparent">
            <Heart className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <CardContent className="p-6 text-center">
              <div
                className={`inline-flex p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 ${darkMode ? "from-gray-700 to-gray-600" : ""} mb-4`}
              >
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <CardHeader
            className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-50 to-indigo-50"} rounded-t-lg`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                <Target className={`h-6 w-6 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
              </div>
              <CardTitle className={`${darkMode ? "text-white" : "text-blue-800"}`}>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              To empower educational institutions with innovative technology solutions that simplify administration,
              enhance teaching effectiveness, and improve student outcomes. We believe in making education management
              accessible, efficient, and data-driven.
            </p>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <CardHeader
            className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-purple-50 to-pink-50"} rounded-t-lg`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${darkMode ? "bg-purple-900" : "bg-purple-100"}`}>
                <Lightbulb className={`h-6 w-6 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
              </div>
              <CardTitle className={`${darkMode ? "text-white" : "text-purple-800"}`}>Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              To become the global leader in education technology, creating a world where every school has access to
              powerful, intuitive tools that foster learning, growth, and success. We envision a future where technology
              seamlessly integrates with education.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-green-50 to-emerald-50"} rounded-t-lg`}
        >
          <CardTitle className={`${darkMode ? "text-white" : "text-green-800"} text-2xl`}>Key Features</CardTitle>
          <CardDescription className={`${darkMode ? "text-gray-400" : "text-green-600"}`}>
            Comprehensive tools designed for modern educational institutions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"} hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${darkMode ? "bg-gray-600" : feature.bgColor}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-orange-50 to-red-50"} rounded-t-lg`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${darkMode ? "bg-orange-900" : "bg-orange-100"}`}>
              <Code className={`h-6 w-6 ${darkMode ? "text-orange-400" : "text-orange-600"}`} />
            </div>
            <div>
              <CardTitle className={`${darkMode ? "text-white" : "text-orange-800"}`}>Technology Stack</CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-orange-600"}`}>
                Built with modern, scalable technologies
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{tech.name}</span>
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{tech.progress}%</span>
                </div>
                <Progress value={tech.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-indigo-50 to-purple-50"} rounded-t-lg`}
        >
          <CardTitle className={`${darkMode ? "text-white" : "text-indigo-800"} text-2xl`}>Meet Our Team</CardTitle>
          <CardDescription className={`${darkMode ? "text-gray-400" : "text-indigo-600"}`}>
            Passionate professionals dedicated to educational excellence
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"} hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {member.avatar}
                </div>
                <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>{member.name}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>{member.role}</p>
                <Badge
                  variant="outline"
                  className={`${darkMode ? "bg-gray-600 text-gray-300 border-gray-500" : "bg-white text-gray-700 border-gray-300"}`}
                >
                  {member.expertise}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card
        className={`border-0 shadow-xl ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-indigo-600 to-purple-600"} text-white`}
      >
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Star className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your School?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of schools worldwide who trust EduAdmin to streamline their operations and enhance
            educational outcomes.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg">
              <CheckCircle className="h-4 w-4 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Globe className="h-4 w-4 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
