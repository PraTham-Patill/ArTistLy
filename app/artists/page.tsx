"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, MapPin, Shield, Search, Filter } from "lucide-react"
import { mockArtists, categories, locations, feeRanges, type Artist } from "@/lib/data"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function ArtistsPage() {
  const searchParams = useSearchParams()
  const [artists, setArtists] = useState<Artist[]>(mockArtists)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [selectedFeeRange, setSelectedFeeRange] = useState<string>("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategories([categoryParam])
    }
  }, [searchParams])

  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      const matchesSearch =
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.some((cat) => artist.category.includes(cat))

      const matchesLocation = selectedLocation === "all" || artist.location === selectedLocation

      const matchesFeeRange = selectedFeeRange === "all" || artist.feeRange === selectedFeeRange

      return matchesSearch && matchesCategory && matchesLocation && matchesFeeRange
    })
  }, [searchTerm, selectedCategories, selectedLocation, selectedFeeRange])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, categoryId])
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId))
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setSelectedLocation("all")
    setSelectedFeeRange("all")
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search" className="text-sm font-medium mb-2 block">
          Search Artists
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search by name or bio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium mb-3 block">Categories</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id} className="text-sm font-normal">
                {category.icon} {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium mb-2 block">Location</Label>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium mb-2 block">Fee Range</Label>
        <Select value={selectedFeeRange} onValueChange={setSelectedFeeRange}>
          <SelectTrigger>
            <SelectValue placeholder="Select fee range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ranges</SelectItem>
            {feeRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="container py-8">
      <motion.div initial="initial" animate="animate" variants={fadeInUp} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Artists</h1>
        <p className="text-muted-foreground text-lg">Find the perfect performer for your next event</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-80 shrink-0">
          <Card className="sticky top-24">
            <CardHeader>
              <h3 className="font-semibold">Filters</h3>
            </CardHeader>
            <CardContent>
              <FilterContent />
            </CardContent>
          </Card>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full mb-6">
                <Filter className="mr-2 h-4 w-4" />
                Filters (
                {selectedCategories.length +
                  (selectedLocation !== "all" ? 1 : 0) +
                  (selectedFeeRange !== "all" ? 1 : 0)}
                )
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Artists Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
            {filteredArtists.map((artist) => (
              <motion.div key={artist.id} variants={fadeInUp}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          {artist.name}
                          {artist.verified && <Shield className="h-4 w-4 text-blue-500" />}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{artist.rating}</span>
                          <span>({artist.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artist.bio}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap gap-1">
                        {artist.category.map((cat) => {
                          const categoryInfo = categories.find((c) => c.id === cat)
                          return (
                            <Badge key={cat} variant="secondary" className="text-xs">
                              {categoryInfo?.icon} {categoryInfo?.name}
                            </Badge>
                          )
                        })}
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{artist.location}</span>
                      </div>

                      <div className="text-sm font-medium">{artist.feeRange}</div>
                    </div>

                    <Button className="w-full">Ask for Quote</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredArtists.length === 0 && (
            <motion.div className="text-center py-12" variants={fadeInUp}>
              <p className="text-muted-foreground text-lg mb-4">No artists found matching your criteria</p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
