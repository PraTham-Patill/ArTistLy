"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground max-w-xs">
              India's premier platform connecting event planners with talented performing artists. Discover, connect,
              and create memorable experiences.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="text-muted-foreground hover:text-foreground transition-colors">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Manager Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Artist Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/artists?category=singers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  🎤 Singers
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=dancers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  💃 Dancers
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=speakers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  🎙️ Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=djs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  🎧 DJs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>patilpratham241@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8080956467</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter email" className="h-8" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 ArTistLy. All rights reserved. Built with ❤️ by Pratham Patil
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
