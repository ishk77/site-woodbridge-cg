import { Globe, Phone, Zap } from "lucide-react"
import type { ServiceData } from "@/lib/types"

export const SERVICES: ServiceData[] = [
  {
    id: "websites",
    title: "Custom Websites",
    description:
      "Personalized websites designed to improve customer engagement, online visibility, and ordering experiences.",
    capabilities: [
      "Online ordering",
      "Mobile optimization",
      "Local SEO",
      "Loyalty programs",
      "Menu systems",
      "Lead capture",
    ],
    Icon: Globe,
  },
  {
    id: "ai-phone",
    title: "AI Phone Voice Agents",
    description:
      "AI-powered phone systems that answer calls, handle customer interactions, and reduce missed opportunities — day or night.",
    capabilities: [
      "AI order-taking",
      "Reservation handling",
      "FAQ answering",
      "After-hours answering",
      "Multilingual support",
      "Missed-call recovery",
      "Dynamic call routing",
    ],
    Icon: Phone,
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description:
      "Practical technology systems that simplify day-to-day operations so you can focus on running your business.",
    capabilities: [
      "Process automation",
      "System integrations",
      "Digital workflows",
      "Operational dashboards",
      "Efficiency tools",
      "Staff coordination",
    ],
    Icon: Zap,
  },
]
