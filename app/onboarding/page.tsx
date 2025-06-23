"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { categories, languages, feeRanges } from "@/lib/data"
import { Upload, CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(50, "Bio must be at least 50 characters").max(500, "Bio must be less than 500 characters"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(1, "Please enter your location"),
  profileImage: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function OnboardingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      profileImage: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Artist Onboarding Data:", data)

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2-3 business days.",
    })
  }

  if (isSubmitted) {
    return (
      <div className="container py-8">
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="pt-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">Application Submitted!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for joining ArTistLy! We'll review your application and get back to you within 2-3 business
                days.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div initial="initial" animate="animate" variants={fadeInUp} className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join ArTistLy</h1>
          <p className="text-muted-foreground text-lg">Share your talent with event planners across India</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Artist Application</CardTitle>
            <CardDescription>Fill out this form to get started on your journey with ArTistLy</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself, your experience, and what makes you unique..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>{field.value?.length || 0}/500 characters (minimum 50)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance Categories</h3>
                  <FormField
                    control={form.control}
                    name="categories"
                    render={() => (
                      <FormItem>
                        <FormLabel>What type of performer are you? *</FormLabel>
                        <div className="grid grid-cols-2 gap-4">
                          {categories.map((category) => (
                            <FormField
                              key={category.id}
                              control={form.control}
                              name="categories"
                              render={({ field }) => {
                                return (
                                  <FormItem key={category.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(category.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, category.id])
                                            : field.onChange(field.value?.filter((value) => value !== category.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {category.icon} {category.name}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Languages */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <FormField
                    control={form.control}
                    name="languages"
                    render={() => (
                      <FormItem>
                        <FormLabel>Languages you can perform in *</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {languages.map((language) => (
                            <FormField
                              key={language}
                              control={form.control}
                              name="languages"
                              render={({ field }) => {
                                return (
                                  <FormItem key={language} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(language)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, language])
                                            : field.onChange(field.value?.filter((value) => value !== language))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">{language}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Fee Range */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pricing</h3>
                  <FormField
                    control={form.control}
                    name="feeRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fee Range *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your fee range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {feeRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>This helps event planners find artists within their budget</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Profile Image */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Profile Image</h3>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload a professional photo (optional)</p>
                    <Button type="button" variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
