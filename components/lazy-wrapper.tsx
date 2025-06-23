"use client"

import type React from "react"

import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LazyWrapper({ children, fallback }: LazyWrapperProps) {
  const defaultFallback = (
    <div className="space-y-4">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
}
