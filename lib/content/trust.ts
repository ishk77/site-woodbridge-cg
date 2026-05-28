import {
  MapPin,
  Users,
  CalendarCheck,
  Headphones,
  Cpu,
  GitMerge,
} from "lucide-react"
import type { TrustItem } from "@/lib/types"

export const TRUST_ITEMS: TrustItem[] = [
  { label: "Local Business Focused", Icon: MapPin },
  { label: "Personalized Support", Icon: Users },
  { label: "In-Person Consultations", Icon: CalendarCheck },
  { label: "Real Human Support", Icon: Headphones },
  { label: "Practical AI Solutions", Icon: Cpu },
  { label: "Workflow Simplification", Icon: GitMerge },
]
