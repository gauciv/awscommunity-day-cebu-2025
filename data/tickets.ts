import type { LucideIcon } from "lucide-react"
import { Users, Zap, Star } from "lucide-react"

export interface TicketType {
  name: string
  price: string
  earlyBirdPrice: string
  description: string
  features: string[]
  badge: string
  badgeColor: string
  popular: boolean
  icon: LucideIcon
  glowColor: string
  soldOut: boolean
}

export const ticketTypes: TicketType[] = [
  {
    name: "General",
    price: "P500",
    earlyBirdPrice: "P400",
    description: "Get access to the Main Event on September 13, 1:00 PM-7:00 PM",
    features: [
      "Main Event access (1:00 PM-7:00 PM)",
      "General admission",
      "Official event merchandise",
      "Networking opportunities",
      "Access to all tech talks",
    ],
    badge: "Essential",
    badgeColor: "bg-gradient-to-r from-gray-500 to-gray-600",
    popular: false,
    icon: Users,
    glowColor: "gray",
    soldOut: true,
  },
  {
    name: "Builder+",
    price: "P1,000",
    earlyBirdPrice: "P800",
    description: "Level up with access to both Workshop and Main Event",
    features: [
      "Workshop access (9:00 AM-12:00 PM)",
      "Main Event access (1:00 PM-7:00 PM)",
      "General merchandise",
      "Hands-on learning experience",
      "Priority seating",
    ],
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
    popular: true,
    icon: Zap,
    glowColor: "orange",
    soldOut: true,
  },
  {
    name: "VIP",
    price: "P1,250",
    earlyBirdPrice: "P1,000",
    description: "Enjoy the full VIP experience with exclusive perks",
    features: [
      "Workshop access (9:00 AM-12:00 PM)",
      "Main Event access (1:00 PM-7:00 PM)",
      "Exclusive VIP Dinner invitation",
      "General merch + exclusive AWS Community Day Cebu polo",
      "Complete experience for professionals",
    ],
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    popular: false,
    icon: Star,
    glowColor: "purple",
    soldOut: true,
  },
]

export const EARLY_BIRD_END_DATE = new Date("2025-08-30T23:59:59")
export const TICKETS_URL = "https://ticketnation.ph/events/aws_community_day_cebu_2025/tickets"
