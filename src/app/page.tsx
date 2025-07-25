"use client"
import { NotificationButton } from "@/components/NotificationButton";

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  School,
  Users,
  Bell,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Search,
  Plus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Download,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Sun,
  BarChart3,
  Activity,
  Users2,
  BookMarked,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react"

type PageType = "dashboard" | "students" | "teachers" | "classes"

interface Student {
  id: string
  name: string
  class: string
  email: string
  phone: string
  status: "Active" | "Inactive" | "Suspended"
  gpa: string
  attendance: number
  avatar?: string
}

interface Teacher {
  id: string
  name: string
  subject: string
  email: string
  phone: string
  experience: string
  status: "Active" | "On Leave" | "Inactive"
  rating: number
  classes: number
}

interface Class {
  id: string
  name: string
  teacher: string
  subject: string
  students: number
  schedule: string
  room: string
  capacity: number
  status: "Active" | "Completed" | "Cancelled"
}

const navigationItems = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: LayoutDashboard,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Students",
    url: "students",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Teachers",
    url: "teachers",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Classes",
    url: "classes",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const statisticsData = [
  {
    title: "Total Students",
    value: "1,247",
    change: "+12%",
    description: "from last month",
    icon: GraduationCap,
    trend: "up",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    textColor: "text-green-600",
    progress: 85,
  },
  {
    title: "Total Teachers",
    value: "89",
    change: "+3",
    description: "new this month",
    icon: Users,
    trend: "up",
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    textColor: "text-purple-600",
    progress: 92,
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "-2.1%",
    description: "from last week",
    icon: Clock,
    trend: "down",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    textColor: "text-blue-600",
    progress: 94,
  },
  {
    title: "Revenue",
    value: "$87,450",
    change: "+18%",
    description: "this quarter",
    icon: DollarSign,
    trend: "up",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
    textColor: "text-orange-600",
    progress: 78,
  },
]

const studentsData: Student[] = [
  {
    id: "STU001",
    name: "Alice Johnson",
    class: "Grade 10A",
    email: "alice.johnson@school.edu",
    phone: "+1 234-567-8901",
    status: "Active",
    gpa: "3.8",
    attendance: 95,
  },
  {
    id: "STU002",
    name: "Bob Smith",
    class: "Grade 9B",
    email: "bob.smith@school.edu",
    phone: "+1 234-567-8902",
    status: "Active",
    gpa: "3.6",
    attendance: 88,
  },
  {
    id: "STU003",
    name: "Carol Davis",
    class: "Grade 11C",
    email: "carol.davis@school.edu",
    phone: "+1 234-567-8903",
    status: "Suspended",
    gpa: "3.9",
    attendance: 76,
  },
  {
    id: "STU004",
    name: "David Wilson",
    class: "Grade 8A",
    email: "david.wilson@school.edu",
    phone: "+1 234-567-8904",
    status: "Active",
    gpa: "3.4",
    attendance: 92,
  },
  {
    id: "STU005",
    name: "Emma Brown",
    class: "Grade 12B",
    email: "emma.brown@school.edu",
    phone: "+1 234-567-8905",
    status: "Active",
    gpa: "4.0",
    attendance: 98,
  },
]

const teachersData: Teacher[] = [
  {
    id: "TCH001",
    name: "Dr. Sarah Mitchell",
    subject: "Mathematics",
    email: "sarah.mitchell@school.edu",
    phone: "+1 234-567-9001",
    experience: "12 years",
    status: "Active",
    rating: 4.8,
    classes: 6,
  },
  {
    id: "TCH002",
    name: "Prof. John Anderson",
    subject: "Physics",
    email: "john.anderson@school.edu",
    phone: "+1 234-567-9002",
    experience: "8 years",
    status: "Active",
    rating: 4.6,
    classes: 4,
  },
  {
    id: "TCH003",
    name: "Ms. Emily Rodriguez",
    subject: "English Literature",
    email: "emily.rodriguez@school.edu",
    phone: "+1 234-567-9003",
    experience: "6 years",
    status: "On Leave",
    rating: 4.9,
    classes: 0,
  },
  {
    id: "TCH004",
    name: "Mr. Michael Chen",
    subject: "Computer Science",
    email: "michael.chen@school.edu",
    phone: "+1 234-567-9004",
    experience: "10 years",
    status: "Active",
    rating: 4.7,
    classes: 5,
  },
]

const classesData: Class[] = [
  {
    id: "CLS001",
    name: "Grade 10A",
    teacher: "Dr. Sarah Mitchell",
    subject: "Mathematics",
    students: 28,
    schedule: "Mon, Wed, Fri - 9:00 AM",
    room: "Room 101",
    capacity: 30,
    status: "Active",
  },
  {
    id: "CLS002",
    name: "Grade 9B",
    teacher: "Prof. John Anderson",
    subject: "Physics",
    students: 25,
    schedule: "Tue, Thu - 10:30 AM",
    room: "Lab 201",
    capacity: 30,
    status: "Active",
  },
  {
    id: "CLS003",
    name: "Grade 11C",
    teacher: "Ms. Emily Rodriguez",
    subject: "English Literature",
    students: 30,
    schedule: "Mon, Wed, Fri - 2:00 PM",
    room: "Room 305",
    capacity: 32,
    status: "Completed",
  },
  {
    id: "CLS004",
    name: "Grade 8A",
    teacher: "Mr. Michael Chen",
    subject: "Computer Science",
    students: 22,
    schedule: "Tue, Thu - 1:00 PM",
    room: "Computer Lab",
    capacity: 25,
    status: "Active",
  },
]

const recentActivity = [
  {
    studentName: "Alice Johnson",
    class: "Grade 10A",
    activity: "Submitted Math Assignment",
    timestamp: "2 hours ago",
    type: "assignment",
  },
  {
    studentName: "Bob Smith",
    class: "Grade 9B",
    activity: "Marked Present",
    timestamp: "3 hours ago",
    type: "attendance",
  },
  {
    studentName: "Carol Davis",
    class: "Grade 11C",
    activity: "Late Arrival",
    timestamp: "4 hours ago",
    type: "attendance",
  },
  {
    studentName: "David Wilson",
    class: "Grade 8A",
    activity: "Library Book Borrowed",
    timestamp: "5 hours ago",
    type: "library",
  },
  {
    studentName: "Emma Brown",
    class: "Grade 12B",
    activity: "Fee Payment Received",
    timestamp: "6 hours ago",
    type: "payment",
  },
]

function LoadingSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AppSidebar({
  activePage,
  setActivePage,
  darkMode,
  setDarkMode,
}: {
  activePage: PageType
  setActivePage: (page: PageType) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}) {
  return (
    <Sidebar
      className={`border-r transition-colors duration-300 ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}
    >
      <SidebarHeader
        className={`transition-colors duration-300 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-indigo-600 to-purple-600"} text-white`}
      >
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <School className="size-5 text-white" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-bold text-white text-lg">EduAdmin</span>
            <span className="text-xs text-white/80">School Management Pro</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className={`transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activePage === item.url}
                    className={`hover:shadow-md transition-all duration-300 transform hover:scale-105 ${activePage === item.url
                      ? `${item.bgColor} ${item.color} shadow-lg`
                      : darkMode
                        ? "hover:bg-gray-800 text-gray-300"
                        : "hover:bg-white text-gray-700"
                      }`}
                  >
                    <button
                      onClick={() => setActivePage(item.url as PageType)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg"
                    >
                      <item.icon
                        className={`size-5 ${activePage === item.url ? item.color : darkMode ? "text-gray-400" : "text-gray-600"}`}
                      />
                      <span className="font-semibold">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4">
          <div
            className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}
          >
            <div className="flex items-center gap-2">
              <Sun className={`size-4 ${darkMode ? "text-gray-400" : "text-yellow-500"}`} />
              <Label htmlFor="dark-mode" className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Dark Mode
              </Label>
            </div>
            <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}

function DashboardContent({ darkMode }: { darkMode: boolean }) {
  const [loading, setLoading] = useState(true)
  const [notifications, setNotifications] = useState(3)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingSkeleton />

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Quick Actions Bar */}
      <div
        className={`flex items-center justify-between p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg border ${darkMode ? "border-gray-700" : "border-gray-100"}`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
            <Activity className={`size-5 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
          </div>
          <div>
            <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Actions</h3>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Manage your school efficiently</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
            <Download className="size-4" />
            Export Data
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            <Plus className="size-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Enhanced Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statisticsData.map((stat, index) => (
          <Card
            key={stat.title}
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div>
                <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</span>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${stat.trend === "up"
                      ? "bg-green-100 text-green-800"
                      : stat.trend === "down"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {stat.trend === "up" && <TrendingUp className="size-3" />}
                    {stat.trend === "down" && <TrendingDown className="size-3" />}
                    {stat.change}
                  </div>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.color} shadow-lg`}>
                <stat.icon className="size-6 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mb-2`}>{stat.description}</p>
              <Progress value={stat.progress} className="h-2" />
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                {stat.progress}% of target
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className={`lg:col-span-2 border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <CardHeader
            className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-50 to-indigo-50"} rounded-t-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className={`${darkMode ? "text-white" : "text-blue-800"}`}>Performance Analytics</CardTitle>
                <CardDescription className={`${darkMode ? "text-gray-400" : "text-blue-600"}`}>
                  Student and teacher performance metrics
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <BarChart3 className="size-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div
                className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"} border ${darkMode ? "border-gray-600" : "border-green-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="size-4 text-green-600" />
                  <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Academic Excellence
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-600">87%</div>
                <Progress value={87} className="mt-2 h-2" />
              </div>
              <div
                className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-purple-50"} border ${darkMode ? "border-gray-600" : "border-purple-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users2 className="size-4 text-purple-600" />
                  <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Teacher Satisfaction
                  </span>
                </div>
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <Progress value={92} className="mt-2 h-2" />
              </div>
              <div
                className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-orange-50"} border ${darkMode ? "border-gray-600" : "border-orange-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <BookMarked className="size-4 text-orange-600" />
                  <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Course Completion
                  </span>
                </div>
                <div className="text-2xl font-bold text-orange-600">78%</div>
                <Progress value={78} className="mt-2 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <CardHeader
            className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-purple-50 to-pink-50"} rounded-t-lg`}
          >
            <CardTitle className={`${darkMode ? "text-white" : "text-purple-800"}`}>Quick Stats</CardTitle>
            <CardDescription className={`${darkMode ? "text-gray-400" : "text-purple-600"}`}>
              Today&apos;s overview
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Present Today</span>
                </div>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>1,156</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-4 text-yellow-500" />
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Late Arrivals</span>
                </div>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>23</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="size-4 text-red-500" />
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Absent</span>
                </div>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>68</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-blue-500" />
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Active Classes</span>
                </div>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Recent Activity Table */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-50 to-indigo-50"} rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className={`${darkMode ? "text-white" : "text-blue-800"}`}>Recent Student Activity</CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-blue-600"}`}>
                Latest activities from students across all classes
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <Filter className="size-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" variant="outline">
                <Eye className="size-4 mr-2" />
                View All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Student
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Class</TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Activity
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Type</TableHead>
                <TableHead className={`text-right font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity, index) => (
                <TableRow key={index} className={`hover:${darkMode ? "bg-gray-700" : "bg-blue-50"} transition-colors`}>
                  <TableCell className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                          {activity.studentName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {activity.studentName}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                    >
                      {activity.class}
                    </Badge>
                  </TableCell>
                  <TableCell className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {activity.activity}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`
                        ${activity.type === "assignment" ? (darkMode ? "bg-green-900 text-green-300 border-green-700" : "bg-green-100 text-green-800 border-green-200") : ""}
                        ${activity.type === "attendance" ? (darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200") : ""}
                        ${activity.type === "library" ? (darkMode ? "bg-purple-900 text-purple-300 border-purple-700" : "bg-purple-100 text-purple-800 border-purple-200") : ""}
                        ${activity.type === "payment" ? (darkMode ? "bg-orange-900 text-orange-300 border-orange-700" : "bg-orange-100 text-orange-800 border-orange-200") : ""}
                      `}
                    >
                      {activity.type}
                    </Badge>
                  </TableCell>
                  <TableCell className={`text-right ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {activity.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Enhanced Action Button */}
      <div className="flex justify-center">
        <NotificationButton />
      </div>
    </div>
  )
}

function StudentsContent({ darkMode }: { darkMode: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredStudents = studentsData
    .filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((student) => statusFilter === "all" || student.status.toLowerCase() === statusFilter)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "gpa") return Number.parseFloat(b.gpa) - Number.parseFloat(a.gpa)
      if (sortBy === "attendance") return b.attendance - a.attendance
      return 0
    })

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Students Management</h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
            Manage and view all student information
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Enhanced Filters */}
      <Card className={`border-0 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search students by name, class, or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="gpa">GPA</SelectItem>
                <SelectItem value="attendance">Attendance</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Students Table */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-green-50 to-emerald-50"} rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className={`${darkMode ? "text-white" : "text-green-800"}`}>
                All Students ({filteredStudents.length})
              </CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-green-600"}`}>
                Complete list of enrolled students
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <Filter className="size-4 mr-2" />
                Advanced Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Student
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Class</TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Contact
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Performance
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Status
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow
                  key={student.id}
                  className={`hover:${darkMode ? "bg-gray-700" : "bg-green-50"} transition-colors`}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{student.name}</div>
                        <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{student.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${darkMode ? "bg-green-900 text-green-300 border-green-700" : "bg-green-100 text-green-800 border-green-200"}`}
                    >
                      {student.class}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <Mail className="h-3 w-3" />
                        {student.email}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <Phone className="h-3 w-3" />
                        {student.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>GPA:</span>
                        <Badge
                          variant="outline"
                          className={`${darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                        >
                          {student.gpa}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Attendance:</span>
                        <div className="flex items-center gap-1">
                          <Progress value={student.attendance} className="w-16 h-2" />
                          <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {student.attendance}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={student.status === "Active" ? "default" : "secondary"}
                      className={
                        student.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300 border-green-700"
                            : "bg-green-100 text-green-800 border-green-200"
                          : student.status === "Suspended"
                            ? darkMode
                              ? "bg-red-900 text-red-300 border-red-700"
                              : "bg-red-100 text-red-800 border-red-200"
                            : darkMode
                              ? "bg-gray-700 text-gray-300 border-gray-600"
                              : "bg-gray-100 text-gray-800 border-gray-200"
                      }
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Student
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function TeachersContent({ darkMode }: { darkMode: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredTeachers = teachersData
    .filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((teacher) => statusFilter === "all" || teacher.status.toLowerCase().replace(" ", "") === statusFilter)

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Teachers Management</h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>Manage faculty and teaching staff</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-4 w-4" />
          Add Teacher
        </Button>
      </div>

      {/* Enhanced Filters */}
      <Card className={`border-0 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search teachers by name, subject, or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="onleave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Teachers Table */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-purple-50 to-violet-50"} rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className={`${darkMode ? "text-white" : "text-purple-800"}`}>
                All Teachers ({filteredTeachers.length})
              </CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-purple-600"}`}>
                Complete list of teaching staff
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Teacher
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Subject
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Contact
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Performance
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Status
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow
                  key={teacher.id}
                  className={`hover:${darkMode ? "bg-gray-700" : "bg-purple-50"} transition-colors`}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{teacher.name}</div>
                        <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{teacher.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${darkMode ? "bg-purple-900 text-purple-300 border-purple-700" : "bg-purple-100 text-purple-800 border-purple-200"}`}
                    >
                      {teacher.subject}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <Mail className="h-3 w-3" />
                        {teacher.email}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <Phone className="h-3 w-3" />
                        {teacher.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-yellow-500" />
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Rating:</span>
                        <Badge
                          variant="outline"
                          className={`${darkMode ? "bg-yellow-900 text-yellow-300 border-yellow-700" : "bg-yellow-100 text-yellow-800 border-yellow-200"}`}
                        >
                          {teacher.rating}/5.0
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3 w-3 text-blue-500" />
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Classes:</span>
                        <Badge
                          variant="outline"
                          className={`${darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                        >
                          {teacher.classes}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={teacher.status === "Active" ? "default" : "secondary"}
                      className={
                        teacher.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300 border-green-700"
                            : "bg-green-100 text-green-800 border-green-200"
                          : teacher.status === "On Leave"
                            ? darkMode
                              ? "bg-orange-900 text-orange-300 border-orange-700"
                              : "bg-orange-100 text-orange-800 border-orange-200"
                            : darkMode
                              ? "bg-gray-700 text-gray-300 border-gray-600"
                              : "bg-gray-100 text-gray-800 border-gray-200"
                      }
                    >
                      {teacher.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Teacher
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function ClassesContent({ darkMode }: { darkMode: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredClasses = classesData
    .filter(
      (classItem) =>
        classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.subject.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((classItem) => statusFilter === "all" || classItem.status.toLowerCase() === statusFilter)

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Classes Management</h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
            Manage class schedules and assignments
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-4 w-4" />
          Add Class
        </Button>
      </div>

      {/* Enhanced Filters */}
      <Card className={`border-0 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search classes by name, teacher, or subject..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Classes Table */}
      <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <CardHeader
          className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-orange-50 to-red-50"} rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className={`${darkMode ? "text-white" : "text-orange-800"}`}>
                All Classes ({filteredClasses.length})
              </CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-orange-600"}`}>
                Complete list of active classes
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Class</TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Teacher
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Subject
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Enrollment
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Schedule
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Status
                </TableHead>
                <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.map((classItem) => (
                <TableRow
                  key={classItem.id}
                  className={`hover:${darkMode ? "bg-gray-700" : "bg-orange-50"} transition-colors`}
                >
                  <TableCell>
                    <div>
                      <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{classItem.name}</div>
                      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{classItem.id}</div>
                    </div>
                  </TableCell>
                  <TableCell className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {classItem.teacher}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${darkMode ? "bg-orange-900 text-orange-300 border-orange-700" : "bg-orange-100 text-orange-800 border-orange-200"}`}
                    >
                      {classItem.subject}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-blue-500" />
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {classItem.students}/{classItem.capacity}
                        </span>
                      </div>
                      <Progress value={(classItem.students / classItem.capacity) * 100} className="w-16 h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <Calendar className="h-3 w-3" />
                        {classItem.schedule}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <MapPin className="h-3 w-3" />
                        {classItem.room}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={classItem.status === "Active" ? "default" : "secondary"}
                      className={
                        classItem.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300 border-green-700"
                            : "bg-green-100 text-green-800 border-green-200"
                          : classItem.status === "Completed"
                            ? darkMode
                              ? "bg-blue-900 text-blue-300 border-blue-700"
                              : "bg-blue-100 text-blue-800 border-blue-200"
                            : darkMode
                              ? "bg-red-900 text-red-300 border-red-700"
                              : "bg-red-100 text-red-800 border-red-200"
                      }
                    >
                      {classItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Class
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Cancel Class
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Dashboard() {
  const [activePage, setActivePage] = useState<PageType>("dashboard")
  const [darkMode, setDarkMode] = useState(false)

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardContent darkMode={darkMode} />
      case "students":
        return <StudentsContent darkMode={darkMode} />
      case "teachers":
        return <TeachersContent darkMode={darkMode} />
      case "classes":
        return <ClassesContent darkMode={darkMode} />
      default:
        return <DashboardContent darkMode={darkMode} />
    }
  }

  const getPageTitle = () => {
    switch (activePage) {
      case "dashboard":
        return "Dashboard"
      case "students":
        return "Students"
      case "teachers":
        return "Teachers"
      case "classes":
        return "Classes"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <SidebarProvider>
        <AppSidebar
          activePage={activePage}
          setActivePage={setActivePage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <SidebarInset>
          <header
            className={`flex h-16 shrink-0 items-center gap-2 border-b shadow-sm px-4 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
          >
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h1 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {getPageTitle()}
                </h1>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Welcome back, Admin</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                    3
                  </Badge>
                </Button>
                <Avatar className={`h-8 w-8 ring-2 ${darkMode ? "ring-gray-600" : "ring-indigo-100"}`}>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    A
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {renderContent()}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
