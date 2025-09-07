import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Speakers } from "@/components/speakers"
import { Tickets } from "@/components/tickets"
import { Sponsors } from "@/components/sponsors"
import { Partners } from "@/components/partners"
import { Volunteers } from "@/components/volunteers"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <Tickets />
        <Sponsors />
        <Partners />
        <Volunteers />
      </main>
      <Footer />
    </>
  )
}
