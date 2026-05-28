import type { LucideIcon } from "lucide-react"

export interface NavItem {
  label: string
  href: string
}

export interface ServiceData {
  id: string
  title: string
  description: string
  capabilities: string[]
  Icon: LucideIcon
}

export interface IndustryData {
  id: string
  title: string
  description: string
  painPoints: string[]
  Icon: LucideIcon
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface StatData {
  label: string
  value: string
  description: string
}

export interface TestimonialData {
  id: string
  quote: string
  author: string
  business: string
  location: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageAlt: string
}

export interface TrustItem {
  label: string
  Icon: LucideIcon
}

export interface DemoScenario {
  id: string
  title: string
  description: string
  scenario: string
}
