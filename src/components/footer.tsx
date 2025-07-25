"use client"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  School,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Heart,
  Code,
  Shield,
  Zap,
  Users,
  BookOpen,
  Award,
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Contact Support", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-500" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
]

const features = [
  { icon: Users, label: "Student Management" },
  { icon: BookOpen, label: "Class Scheduling" },
  { icon: Award, label: "Exam System" },
  { icon: Shield, label: "Secure & Private" },
]

export function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className={`mt-auto border-t ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
                <School className="size-5 text-white" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>EduAdmin</h3>
                <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>School Management Pro</p>
              </div>
            </div>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4 leading-relaxed`}>
              Empowering educational institutions with cutting-edge technology for streamlined operations and enhanced
              learning outcomes.
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className={`h-3 w-3 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className={`h-4 w-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>hello@eduadmin.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className={`h-4 w-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className={`h-4 w-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>Support</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Badge
                variant="outline"
                className={`${darkMode ? "bg-green-900 text-green-300 border-green-700" : "bg-green-100 text-green-800 border-green-200"}`}
              >
                All Systems Operational
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className={`my-8 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`} />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2024 EduAdmin. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>for education</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link, index) => (
                <div key={link.name} className="flex items-center gap-4">
                  <a
                    href={link.href}
                    className={`text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <div className={`w-1 h-1 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-400"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2">
              <Code className={`h-4 w-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Built with React & Next.js
              </span>
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-yellow-500" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3 text-blue-500" />
              <span>Global CDN</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 text-purple-500" />
              <span>500K+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
