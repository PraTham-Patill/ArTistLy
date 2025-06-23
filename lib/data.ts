export interface Artist {
  id: string
  name: string
  bio: string
  category: string[]
  languages: string[]
  feeRange: string
  location: string
  image: string
  rating: number
  reviewCount: number
  verified: boolean
}

export interface ArtistSubmission {
  id: string
  name: string
  category: string[]
  city: string
  fee: string
  submittedAt: string
  status: "pending" | "approved" | "rejected"
}

export const categories = [
  {
    id: "singers",
    name: "Singers",
    icon: "🎤",
    description: "Vocal performers for all genres",
    count: 150,
  },
  {
    id: "dancers",
    name: "Dancers",
    icon: "💃",
    description: "Professional dance performers",
    count: 120,
  },
  {
    id: "speakers",
    name: "Speakers",
    icon: "🎙️",
    description: "Motivational and keynote speakers",
    count: 80,
  },
  {
    id: "djs",
    name: "DJs",
    icon: "🎧",
    description: "Music mixers and party entertainers",
    count: 95,
  },
]

export const locations = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"]

export const feeRanges = [
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
]

export const languages = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
]

// Add more comprehensive artist data
export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Priya Sharma",
    bio: "Classical and Bollywood singer with 10+ years of experience performing at weddings, corporate events, and cultural festivals across India.",
    category: ["singers"],
    languages: ["Hindi", "English", "Punjabi"],
    feeRange: "₹30,000 - ₹50,000",
    location: "Mumbai",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 124,
    verified: true,
  },
  {
    id: "2",
    name: "Rahul Dance Crew",
    bio: "Contemporary and hip-hop dance group specializing in corporate events, product launches, and entertainment shows with high-energy performances.",
    category: ["dancers"],
    languages: ["Hindi", "English"],
    feeRange: "₹50,000 - ₹1,00,000",
    location: "Delhi",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviewCount: 89,
    verified: true,
  },
  {
    id: "3",
    name: "Dr. Anjali Mehta",
    bio: "Motivational speaker and life coach with expertise in leadership development, women empowerment, and corporate training programs.",
    category: ["speakers"],
    languages: ["Hindi", "English", "Gujarati"],
    feeRange: "₹15,000 - ₹30,000",
    location: "Ahmedabad",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 156,
    verified: true,
  },
  {
    id: "4",
    name: "DJ Arjun",
    bio: "Electronic music producer and DJ specializing in weddings, parties, and nightclub events with a vast collection of Bollywood and international hits.",
    category: ["djs"],
    languages: ["Hindi", "English", "Tamil"],
    feeRange: "₹25,000 - ₹40,000",
    location: "Bangalore",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviewCount: 203,
    verified: false,
  },
  {
    id: "5",
    name: "Kavya Classical",
    bio: "Carnatic music vocalist and classical dance performer with expertise in traditional South Indian arts and fusion performances.",
    category: ["singers", "dancers"],
    languages: ["Tamil", "Telugu", "English"],
    feeRange: "₹20,000 - ₹35,000",
    location: "Chennai",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviewCount: 78,
    verified: true,
  },
  {
    id: "6",
    name: "Stand-up Sameer",
    bio: "Comedy performer and corporate entertainment specialist known for clean humor and audience engagement at corporate events and private parties.",
    category: ["speakers"],
    languages: ["Hindi", "English", "Marathi"],
    feeRange: "₹15,000 - ₹30,000",
    location: "Pune",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviewCount: 167,
    verified: true,
  },
  {
    id: "7",
    name: "Fusion Folk Band",
    bio: "Traditional folk music band with modern fusion elements, perfect for cultural events, festivals, and themed celebrations.",
    category: ["singers"],
    languages: ["Hindi", "Rajasthani", "Punjabi"],
    feeRange: "₹40,000 - ₹60,000",
    location: "Jaipur",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 92,
    verified: true,
  },
  {
    id: "8",
    name: "Bollywood Beats",
    bio: "High-energy Bollywood dance troupe specializing in choreographed performances for weddings, sangeet ceremonies, and corporate events.",
    category: ["dancers"],
    languages: ["Hindi", "English", "Bengali"],
    feeRange: "₹35,000 - ₹55,000",
    location: "Kolkata",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 134,
    verified: true,
  },
]

export const mockSubmissions: ArtistSubmission[] = [
  {
    id: "1",
    name: "Neha Kapoor",
    category: ["singers"],
    city: "Mumbai",
    fee: "₹25,000 - ₹40,000",
    submittedAt: "2024-01-15",
    status: "pending",
  },
  {
    id: "2",
    name: "Bollywood Beats",
    category: ["dancers"],
    city: "Delhi",
    fee: "₹45,000 - ₹60,000",
    submittedAt: "2024-01-14",
    status: "approved",
  },
  {
    id: "3",
    name: "Tech Speaker Pro",
    category: ["speakers"],
    city: "Bangalore",
    fee: "₹30,000 - ₹50,000",
    submittedAt: "2024-01-13",
    status: "rejected",
  },
]
