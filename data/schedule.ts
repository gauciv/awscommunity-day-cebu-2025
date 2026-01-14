export interface ScheduleEvent {
  startTime: string
  endTime: string
  title: string
  speaker?: string
  description?: string
  type: EventType
}

export type EventType =
  | "keynote"
  | "talk"
  | "workshop"
  | "break"
  | "networking"
  | "activity"
  | "qa"
  | "sponsor"
  | "opening"
  | "closing"
  | "recognition"
  | "transition"
  | "setup"

export const mainVenueEvents: ScheduleEvent[] = [
  { startTime: "07:00", endTime: "08:30", title: "Calltime for volunteers/organizers", type: "setup" },
  { startTime: "08:30", endTime: "11:00", title: "Ingress and dry run for PAH", type: "setup" },
  { startTime: "11:00", endTime: "12:00", title: "Volunteers and organizers' lunch time", type: "break" },
  { startTime: "12:00", endTime: "13:00", title: "Registration opens and networking starts", description: "Human bingo given on registration. Chance to explore booth", type: "networking" },
  { startTime: "13:00", endTime: "13:10", title: "Introduction (Opening Remarks) and Energy check", speaker: "James", type: "opening" },
  { startTime: "13:10", endTime: "13:11", title: "Speaker introduction", type: "transition" },
  { startTime: "13:11", endTime: "13:46", title: "Keynote Speaker & Panel", speaker: "Raphael Francis Quisumbing", description: "w/ Nhyl, Arlou, Trixie", type: "keynote" },
  { startTime: "13:46", endTime: "13:51", title: "Q&A", type: "qa" },
  { startTime: "13:51", endTime: "14:00", title: "Announcement of the next part as breakout rooms/opening of breakout rooms", description: "Chance to explore booths", type: "transition" },
  { startTime: "14:00", endTime: "14:01", title: "Speaker Introduction", type: "transition" },
  { startTime: "14:01", endTime: "14:31", title: "P0 to MVP: AWS Free-Tier Startup Hacks for Students & Pros", speaker: "Cyrus Pastelero", type: "talk" },
  { startTime: "14:31", endTime: "14:36", title: "Q&A", type: "qa" },
  { startTime: "14:37", endTime: "14:38", title: "Speaker Introduction", type: "transition" },
  { startTime: "14:38", endTime: "15:08", title: "Stateless vs Stateful", speaker: "Rodrick Alcantara", type: "talk" },
  { startTime: "15:08", endTime: "15:13", title: "Q&A", type: "qa" },
  { startTime: "15:13", endTime: "15:18", title: "Announcement of snacks/networking session and chance to explore booths", type: "transition" },
  { startTime: "15:18", endTime: "15:28", title: "Snacks/networking session and chance to explore booths", type: "break" },
  { startTime: "15:28", endTime: "15:58", title: "Game: Builder Cards Trial and Exhibit", speaker: "Ace & Aki", type: "activity" },
  { startTime: "15:58", endTime: "16:05", title: "Announcement of the start of another set of speaking sessions", type: "transition" },
  { startTime: "16:05", endTime: "16:06", title: "Speaker Introduction", type: "transition" },
  { startTime: "16:06", endTime: "16:36", title: "Basement to Cloud: Server Usage Evolution and Server Cost Engineering Decisions", speaker: "Ron Michael Khu", type: "talk" },
  { startTime: "16:36", endTime: "16:41", title: "Q&A", type: "qa" },
  { startTime: "16:41", endTime: "17:11", title: "From Localhost to the Cloud: Integrating AWS into Your Django Project", speaker: "Andrew Matheu", type: "talk" },
  { startTime: "17:11", endTime: "17:16", title: "Q&A", type: "qa" },
  { startTime: "17:16", endTime: "17:17", title: "Speaker Introduction", type: "transition" },
  { startTime: "17:17", endTime: "17:37", title: "AWS Lambda Web Adapters: Improve Portability and Developer Productivity", speaker: "Louie Miguel", type: "talk" },
  { startTime: "17:37", endTime: "17:42", title: "Q&A", type: "qa" },
  { startTime: "17:42", endTime: "17:50", title: "Closing of break out rooms/chance to network", description: "Chance to explore booths", type: "networking" },
  { startTime: "17:50", endTime: "18:15", title: "Sponsorial talk", type: "sponsor" },
  { startTime: "18:15", endTime: "18:20", title: "Community partners recognition", type: "recognition" },
  { startTime: "18:20", endTime: "18:45", title: "Raffle", type: "activity" },
  { startTime: "18:45", endTime: "19:00", title: "Closing Remarks and Photo Opp", type: "closing" },
  { startTime: "19:00", endTime: "19:30", title: "Egress", type: "setup" },
]

export const breakoutVenueEvents: ScheduleEvent[] = [
  { startTime: "07:00", endTime: "08:30", title: "Ingress and dry run for AVR1", type: "setup" },
  { startTime: "08:30", endTime: "09:00", title: "Registration", type: "networking" },
  { startTime: "09:00", endTime: "11:00", title: "Workshop proper", type: "workshop" },
  { startTime: "11:45", endTime: "12:00", title: "Closing Remarks & Photo Op", type: "closing" },
  { startTime: "13:00", endTime: "13:10", title: "Room preparation", type: "setup" },
  { startTime: "13:51", endTime: "14:00", title: "Opening of breakout room", type: "opening" },
  { startTime: "14:00", endTime: "14:01", title: "Speaker introduction", type: "transition" },
  { startTime: "14:01", endTime: "14:31", title: "Evaluation Generative Models", speaker: "Joshua Arvin Lat", type: "talk" },
  { startTime: "14:31", endTime: "14:36", title: "Q&A", type: "qa" },
  { startTime: "14:37", endTime: "14:38", title: "Speaker Introduction", type: "transition" },
  { startTime: "14:38", endTime: "15:08", title: "Getting Started with Amazon ECS", speaker: "Trixie", type: "talk" },
  { startTime: "15:08", endTime: "15:13", title: "Q&A", type: "qa" },
  { startTime: "15:13", endTime: "15:18", title: "Announcement of snacks/networking session and chance to explore booths", type: "transition" },
  { startTime: "15:18", endTime: "15:28", title: "Snacks/networking session and chance to explore booths", type: "break" },
  { startTime: "15:58", endTime: "16:05", title: "Announcement of the start of another set of speaking sessions", type: "transition" },
  { startTime: "16:05", endTime: "16:06", title: "Speaker Introduction", type: "transition" },
  { startTime: "16:06", endTime: "16:36", title: "Kubernetes or Not Bust: How Companies are Rethinking to move away from Kubernetes", speaker: "Aldwyn Cabarrubias", type: "talk" },
  { startTime: "16:36", endTime: "16:41", title: "Q&A", type: "qa" },
  { startTime: "16:41", endTime: "17:11", title: "AWS Landing Zones", speaker: "Cleo Credo", type: "talk" },
  { startTime: "17:11", endTime: "17:16", title: "Q&A", type: "qa" },
  { startTime: "17:16", endTime: "17:17", title: "Speaker Introduction", type: "transition" },
  { startTime: "17:17", endTime: "17:37", title: "Cloud architecture: multi-region setup leveraging global databases, serverless and containers", speaker: "Romar Cablao", type: "talk" },
  { startTime: "17:37", endTime: "17:42", title: "Q&A", type: "qa" },
  { startTime: "17:42", endTime: "17:50", title: "Closing of break out rooms/chance to network", description: "Chance to explore booths", type: "networking" },
]

export function getTypeColor(type: EventType): string {
  const colors: Record<EventType, string> = {
    keynote: "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-l-orange-500",
    talk: "bg-blue-600 text-white border-l-blue-600",
    workshop: "bg-violet-600 text-white border-l-violet-600",
    break: "bg-emerald-600 text-white border-l-emerald-600",
    networking: "bg-purple-600 text-white border-l-purple-600",
    activity: "bg-cyan-600 text-white border-l-cyan-600",
    qa: "bg-slate-500 text-white border-l-slate-500",
    sponsor: "bg-indigo-600 text-white border-l-indigo-600",
    opening: "bg-orange-600 text-white border-l-orange-600",
    closing: "bg-red-600 text-white border-l-red-600",
    recognition: "bg-amber-600 text-white border-l-amber-600",
    transition: "bg-gray-500 text-white border-l-gray-500",
    setup: "bg-neutral-600 text-white border-l-neutral-600",
  }
  return colors[type] || "bg-gray-600 text-white border-l-gray-600"
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":")
  const hour24 = parseInt(hours)
  const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
  const ampm = hour24 >= 12 ? "PM" : "AM"
  return `${hour12}:${minutes} ${ampm}`
}

export function getDuration(startTime: string, endTime: string): number {
  const [startHour, startMin] = startTime.split(":").map(Number)
  const [endHour, endMin] = endTime.split(":").map(Number)
  const start = startHour * 60 + startMin
  const end = endHour * 60 + endMin
  return end - start
}
