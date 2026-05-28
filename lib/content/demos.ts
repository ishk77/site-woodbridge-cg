import type { DemoScenario } from "@/lib/types"

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "lunch-rush",
    title: "Handling Lunch Rush Calls",
    description:
      "The AI answers incoming calls during peak hours, takes orders, and confirms details — so your staff can focus on the kitchen.",
    scenario: "Restaurant · Order-Taking",
  },
  {
    id: "after-hours",
    title: "After-Hours Voicemail Replacement",
    description:
      "Instead of a voicemail box, the AI greets callers, answers common questions, and captures contact info for follow-up.",
    scenario: "Any Business · After Hours",
  },
  {
    id: "reservations",
    title: "Reservation Handling",
    description:
      "The AI confirms availability, takes party size and time preferences, and logs reservations directly to your system.",
    scenario: "Restaurant · Reservations",
  },
  {
    id: "bilingual",
    title: "Bilingual Customer Support",
    description:
      "Automatically detects the caller's preferred language and responds accordingly — no extra staff required.",
    scenario: "Any Business · Multilingual",
  },
]
