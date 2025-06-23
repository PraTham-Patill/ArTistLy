"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { mockSubmissions, categories, type ArtistSubmission } from "@/lib/data"
import { Search, Eye, Check, X, Users, Clock, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<ArtistSubmission[]>(mockSubmissions)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all") // Updated default value to "all"
  const { toast } = useToast()

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateSubmissionStatus = (id: string, status: "approved" | "rejected") => {
    setSubmissions((prev) => prev.map((submission) => (submission.id === id ? { ...submission, status } : submission)))

    toast({
      title: `Application ${status}`,
      description: `The artist application has been ${status}.`,
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const stats = {
    total: submissions.length,
    pending: submissions.filter((s) => s.status === "pending").length,
    approved: submissions.filter((s) => s.status === "approved").length,
    rejected: submissions.filter((s) => s.status === "rejected").length,
  }

  return (
    <div className="container py-8">
      <motion.div initial="initial" animate="animate" variants={fadeInUp} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Manager Dashboard</h1>
        <p className="text-muted-foreground text-lg">Review and manage artist applications</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[
          { title: "Total Applications", value: stats.total, icon: Users, color: "text-blue-500" },
          { title: "Pending Review", value: stats.pending, icon: Clock, color: "text-yellow-500" },
          { title: "Approved", value: stats.approved, icon: CheckCircle, color: "text-green-500" },
          { title: "Rejected", value: stats.rejected, icon: XCircle, color: "text-red-500" },
        ].map((stat, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div variants={fadeInUp}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem> // Updated value prop to "all"
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Applications Table */}
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle>Artist Applications</CardTitle>
            <CardDescription>
              {filteredSubmissions.length} application{filteredSubmissions.length !== 1 ? "s" : ""} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Fee Range</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {submission.category.map((cat) => {
                            const categoryInfo = categories.find((c) => c.id === cat)
                            return (
                              <Badge key={cat} variant="outline" className="text-xs">
                                {categoryInfo?.icon} {categoryInfo?.name}
                              </Badge>
                            )
                          })}
                        </div>
                      </TableCell>
                      <TableCell>{submission.city}</TableCell>
                      <TableCell>{submission.fee}</TableCell>
                      <TableCell>{new Date(submission.submittedAt).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {submission.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="default"
                                className="bg-green-500 hover:bg-green-600"
                                onClick={() => updateSubmissionStatus(submission.id, "approved")}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => updateSubmissionStatus(submission.id, "rejected")}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredSubmissions.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No applications found matching your criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
