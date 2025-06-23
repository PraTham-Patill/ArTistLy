"use client"

import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
  className?: string
}

export function Logo({ size = "md", showTagline = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-base",
    md: "h-10 w-10 text-lg",
    lg: "h-12 w-12 text-xl",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div
          className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg`}
        >
          <div className="text-white font-bold">A</div>
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">🎭</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-bold ${textSizeClasses[size]} bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}
        >
          ArTistLy
        </span>
        {showTagline && <span className="text-xs text-muted-foreground -mt-1">Connect • Perform • Inspire</span>}
      </div>
    </Link>
  )
}
