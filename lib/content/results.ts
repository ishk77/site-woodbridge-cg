import { PhoneCall, Clock, BellOff, MessageSquare } from "lucide-react"
import type { ResultOutcome } from "@/lib/types"

export const RESULTS: ResultOutcome[] = [
  {
    id: "missed-calls",
    headline: "Fewer Missed Calls",
    detail:
      "Every inbound call gets answered — even during lunch rush, weekends, or after hours.",
    Icon: PhoneCall,
  },
  {
    id: "response-times",
    headline: "Faster Customer Response",
    detail:
      "Customers get immediate answers instead of waiting hours for a callback or reply.",
    Icon: Clock,
  },
  {
    id: "less-interruption",
    headline: "Less Interruption During Busy Hours",
    detail:
      "Your team can focus on the work in front of them without constant phone distractions.",
    Icon: BellOff,
  },
  {
    id: "consistent-comms",
    headline: "More Consistent Communication",
    detail:
      "Every customer receives the same clear, professional experience — regardless of volume or time of day.",
    Icon: MessageSquare,
  },
]
