import { UtensilsCrossed, ShoppingBasket } from "lucide-react"
import type { IndustryData } from "@/lib/types"

export const INDUSTRIES: IndustryData[] = [
  {
    id: "restaurants",
    title: "Restaurants",
    description:
      "From quick-service spots to family restaurants, we help you handle more customers with less stress.",
    painPoints: [
      "High call volume during peak hours",
      "Staffing shortages mean missed calls",
      "Lost reservations and orders",
      "No time to manage a website",
    ],
    Icon: UtensilsCrossed,
  },
  {
    id: "corner-stores",
    title: "Corner Stores & Local Shops",
    description:
      "Compete with big-box stores through better customer experience and smarter operations.",
    painPoints: [
      "Having to stop work to answer calls",
      "Customers can't find you online",
      "No system for repeat customer engagement",
      "Manual processes eating into your day",
    ],
    Icon: ShoppingBasket,
  },
]
