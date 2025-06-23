"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Calendar, Shield } from "lucide-react"
import { categories } from "@/lib/data"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200"
              >
                🎭 India's Premier Artist Booking Platform
              </Badge>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" variants={fadeInUp}>
              Connect with
              <span className="text-primary block">Talented Artists</span>
            </motion.h1>

            <motion.p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
              ArTistLy bridges the gap between event planners and performing artists. Discover, connect, and book the
              perfect talent for your next event.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/artists">
                  Explore Artists <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/onboarding">Join as Artist</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Users, label: "Active Artists", value: "500+" },
              { icon: Calendar, label: "Events Booked", value: "2,000+" },
              { icon: Star, label: "Average Rating", value: "4.8" },
              { icon: Shield, label: "Verified Artists", value: "95%" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Artists by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From soulful singers to energetic dancers, find the perfect performer for your event
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/artists?category=${category.id}`}>
                        View Artists <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Next Artist?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of event planners who trust ArTistLy for their entertainment needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/artists">Browse Artists</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/onboarding">Become an Artist</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
