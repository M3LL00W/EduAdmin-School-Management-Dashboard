"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Calendar,
  Clock,
  Plus,
  Search,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  FileText,
  Users,
  Award,
  CheckCircle,
} from "lucide-react"

interface Exam {
  id: string
  title: string
  subject: string
  class: string
  date: string
  time: string
  duration: string
  totalMarks: number
  status: "Scheduled" | "Ongoing" | "Completed" | "Cancelled"
  studentsEnrolled: number
  room: string
  teacher: string
}

interface ExamResult {
  id: string
  examId: string
  examTitle: string
  studentName: string
  class: string
  marksObtained: number
  totalMarks: number
  percentage: number
  grade: string
  status: "Pass" | "Fail"
}

const examsData: Exam[] = [
  {
    id: "EXM001",
    title: "Mid-Term Mathematics",
    subject: "Mathematics",
    class: "Grade 10A",
    date: "2024-02-15",
    time: "09:00 AM",
    duration: "2 hours",
    totalMarks: 100,
    status: "Scheduled",
    studentsEnrolled: 28,
    room: "Room 101",
    teacher: "Dr. Sarah Mitchell",
  },
  {
    id: "EXM002",
    title: "Physics Practical",
    subject: "Physics",
    class: "Grade 11B",
    date: "2024-02-16",
    time: "10:30 AM",
    duration: "3 hours",
    totalMarks: 50,
    status: "Ongoing",
    studentsEnrolled: 25,
    room: "Lab 201",
    teacher: "Prof. John Anderson",
  },
  {
    id: "EXM003",
    title: "English Literature Essay",
    subject: "English",
    class: "Grade 12C",
    date: "2024-02-10",
    time: "02:00 PM",
    duration: "2.5 hours",
    totalMarks: 80,
    status: "Completed",
    studentsEnrolled: 30,
    room: "Room 305",
    teacher: "Ms. Emily Rodriguez",
  },
  {
    id: "EXM004",
    title: "Computer Science Theory",
    subject: "Computer Science",
    class: "Grade 9A",
    date: "2024-02-20",
    time: "01:00 PM",
    duration: "1.5 hours",
    totalMarks: 75,
    status: "Scheduled",
    studentsEnrolled: 22,
    room: "Computer Lab",
    teacher: "Mr. Michael Chen",
  },
]

const examResults: ExamResult[] = [
  {
    id: "RES001",
    examId: "EXM003",
    examTitle: "English Literature Essay",
    studentName: "Alice Johnson",
    class: "Grade 12C",
    marksObtained: 72,
    totalMarks: 80,
    percentage: 90,
    grade: "A",
    status: "Pass",
  },
  {
    id: "RES002",
    examId: "EXM003",
    examTitle: "English Literature Essay",
    studentName: "Bob Smith",
    class: "Grade 12C",
    marksObtained: 64,
    totalMarks: 80,
    percentage: 80,
    grade: "B+",
    status: "Pass",
  },
  {
    id: "RES003",
    examId: "EXM003",
    examTitle: "English Literature Essay",
    studentName: "Carol Davis",
    class: "Grade 12C",
    marksObtained: 76,
    totalMarks: 80,
    percentage: 95,
    grade: "A+",
    status: "Pass",
  },
  {
    id: "RES004",
    examId: "EXM003",
    examTitle: "English Literature Essay",
    studentName: "David Wilson",
    class: "Grade 12C",
    marksObtained: 45,
    totalMarks: 80,
    percentage: 56,
    grade: "C",
    status: "Pass",
  },
]

const examTimeTable = [
  {
    date: "2024-02-15",
    day: "Thursday",
    exams: [
      { time: "09:00 AM", subject: "Mathematics", class: "Grade 10A", room: "Room 101", duration: "2 hours" },
      { time: "02:00 PM", subject: "Chemistry", class: "Grade 11B", room: "Lab 102", duration: "2.5 hours" },
    ],
  },
  {
    date: "2024-02-16",
    day: "Friday",
    exams: [
      { time: "10:30 AM", subject: "Physics", class: "Grade 11B", room: "Lab 201", duration: "3 hours" },
      { time: "02:30 PM", subject: "Biology", class: "Grade 12A", room: "Lab 103", duration: "2 hours" },
    ],
  },
  {
    date: "2024-02-17",
    day: "Saturday",
    exams: [
      { time: "09:00 AM", subject: "History", class: "Grade 9C", room: "Room 205", duration: "2 hours" },
      { time: "01:00 PM", subject: "Geography", class: "Grade 10B", room: "Room 206", duration: "1.5 hours" },
    ],
  },
  {
    date: "2024-02-20",
    day: "Tuesday",
    exams: [
      { time: "01:00 PM", subject: "Computer Science", class: "Grade 9A", room: "Computer Lab", duration: "1.5 hours" },
      { time: "03:30 PM", subject: "Art", class: "Grade 8B", room: "Art Room", duration: "2 hours" },
    ],
  },
]

export function ExamsContent({ darkMode }: { darkMode: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("exams")

  const filteredExams = examsData
    .filter(
      (exam) =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.class.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((exam) => statusFilter === "all" || exam.status.toLowerCase() === statusFilter)

  const examStats = {
    total: examsData.length,
    scheduled: examsData.filter((e) => e.status === "Scheduled").length,
    ongoing: examsData.filter((e) => e.status === "Ongoing").length,
    completed: examsData.filter((e) => e.status === "Completed").length,
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Exam Management</h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>Manage exams, schedules, and results</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-4 w-4" />
          Schedule Exam
        </Button>
      </div>

      {/* Exam Statistics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Total Exams
              </CardTitle>
              <div className="text-2xl font-bold text-blue-600">{examStats.total}</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
              <FileText className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={100} className="h-2" />
          </CardContent>
        </Card>

        <Card
          className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Scheduled
              </CardTitle>
              <div className="text-2xl font-bold text-orange-600">{examStats.scheduled}</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
              <Calendar className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={(examStats.scheduled / examStats.total) * 100} className="h-2" />
          </CardContent>
        </Card>

        <Card
          className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Ongoing
              </CardTitle>
              <div className="text-2xl font-bold text-green-600">{examStats.ongoing}</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Clock className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={(examStats.ongoing / examStats.total) * 100} className="h-2" />
          </CardContent>
        </Card>

        <Card
          className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Completed
              </CardTitle>
              <div className="text-2xl font-bold text-purple-600">{examStats.completed}</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
              <CheckCircle className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={(examStats.completed / examStats.total) * 100} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different sections */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className={`grid w-full grid-cols-3 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
          <TabsTrigger value="exams" className="gap-2">
            <FileText className="h-4 w-4" />
            Exams
          </TabsTrigger>
          <TabsTrigger value="timetable" className="gap-2">
            <Calendar className="h-4 w-4" />
            Time Table
          </TabsTrigger>
          <TabsTrigger value="results" className="gap-2">
            <Award className="h-4 w-4" />
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="exams" className="space-y-6">
          {/* Filters */}
          <Card className={`border-0 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search exams by title, subject, or class..."
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
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
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

          {/* Exams Table */}
          <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <CardHeader
              className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-red-50 to-pink-50"} rounded-t-lg`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className={`${darkMode ? "text-white" : "text-red-800"}`}>
                    All Exams ({filteredExams.length})
                  </CardTitle>
                  <CardDescription className={`${darkMode ? "text-gray-400" : "text-red-600"}`}>
                    Manage and monitor all examinations
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Exam Details
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Schedule
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Class & Teacher
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Enrollment
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
                  {filteredExams.map((exam) => (
                    <TableRow
                      key={exam.id}
                      className={`hover:${darkMode ? "bg-gray-700" : "bg-red-50"} transition-colors`}
                    >
                      <TableCell>
                        <div>
                          <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{exam.title}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className={`${darkMode ? "bg-red-900 text-red-300 border-red-700" : "bg-red-100 text-red-800 border-red-200"}`}
                            >
                              {exam.subject}
                            </Badge>
                            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {exam.totalMarks} marks
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div
                            className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <Calendar className="h-3 w-3" />
                            {exam.date}
                          </div>
                          <div
                            className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <Clock className="h-3 w-3" />
                            {exam.time} ({exam.duration})
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className={`${darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                          >
                            {exam.class}
                          </Badge>
                          <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {exam.teacher}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-500" />
                          <span className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {exam.studentsEnrolled}
                          </span>
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>students</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={exam.status === "Completed" ? "default" : "secondary"}
                          className={
                            exam.status === "Scheduled"
                              ? darkMode
                                ? "bg-orange-900 text-orange-300 border-orange-700"
                                : "bg-orange-100 text-orange-800 border-orange-200"
                              : exam.status === "Ongoing"
                                ? darkMode
                                  ? "bg-green-900 text-green-300 border-green-700"
                                  : "bg-green-100 text-green-800 border-green-200"
                                : exam.status === "Completed"
                                  ? darkMode
                                    ? "bg-blue-900 text-blue-300 border-blue-700"
                                    : "bg-blue-100 text-blue-800 border-blue-200"
                                  : darkMode
                                    ? "bg-red-900 text-red-300 border-red-700"
                                    : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {exam.status}
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
                              Edit Exam
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Cancel Exam
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
        </TabsContent>

        <TabsContent value="timetable" className="space-y-6">
          <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <CardHeader
              className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-50 to-indigo-50"} rounded-t-lg`}
            >
              <CardTitle className={`${darkMode ? "text-white" : "text-blue-800"}`}>Exam Time Table</CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-blue-600"}`}>
                Weekly examination schedule
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {examTimeTable.map((day, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                        <Calendar className={`h-5 w-5 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {day.day}, {day.date}
                        </h3>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {day.exams.length} exam{day.exams.length !== 1 ? "s" : ""} scheduled
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {day.exams.map((exam, examIndex) => (
                        <div
                          key={examIndex}
                          className={`p-3 rounded-lg border ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"} hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant="outline"
                              className={`${darkMode ? "bg-green-900 text-green-300 border-green-700" : "bg-green-100 text-green-800 border-green-200"}`}
                            >
                              {exam.subject}
                            </Badge>
                            <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {exam.time}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Class: {exam.class}
                            </div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Room: {exam.room}
                            </div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Duration: {exam.duration}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <Card className={`border-0 shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <CardHeader
              className={`${darkMode ? "bg-gray-700" : "bg-gradient-to-r from-purple-50 to-pink-50"} rounded-t-lg`}
            >
              <CardTitle className={`${darkMode ? "text-white" : "text-purple-800"}`}>Exam Results</CardTitle>
              <CardDescription className={`${darkMode ? "text-gray-400" : "text-purple-600"}`}>
                Student performance and grades
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Student
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Exam
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Marks
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Percentage
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Grade
                    </TableHead>
                    <TableHead className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {examResults.map((result) => (
                    <TableRow
                      key={result.id}
                      className={`hover:${darkMode ? "bg-gray-700" : "bg-purple-50"} transition-colors`}
                    >
                      <TableCell>
                        <div>
                          <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {result.studentName}
                          </div>
                          <Badge
                            variant="outline"
                            className={`${darkMode ? "bg-blue-900 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mt-1`}
                          >
                            {result.class}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {result.examTitle}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {result.marksObtained}
                          </span>
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            / {result.totalMarks}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={result.percentage} className="w-16 h-2" />
                          <span className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {result.percentage}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            result.grade === "A+" || result.grade === "A"
                              ? darkMode
                                ? "bg-green-900 text-green-300 border-green-700"
                                : "bg-green-100 text-green-800 border-green-200"
                              : result.grade === "B+" || result.grade === "B"
                                ? darkMode
                                  ? "bg-blue-900 text-blue-300 border-blue-700"
                                  : "bg-blue-100 text-blue-800 border-blue-200"
                                : darkMode
                                  ? "bg-orange-900 text-orange-300 border-orange-700"
                                  : "bg-orange-100 text-orange-800 border-orange-200"
                          }
                        >
                          {result.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={result.status === "Pass" ? "default" : "secondary"}
                          className={
                            result.status === "Pass"
                              ? darkMode
                                ? "bg-green-900 text-green-300 border-green-700"
                                : "bg-green-100 text-green-800 border-green-200"
                              : darkMode
                                ? "bg-red-900 text-red-300 border-red-700"
                                : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {result.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
