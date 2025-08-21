import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Prizes from "@/components/prizes"
import Partners from "@/components/partners"
import Leaderboard from "@/components/leaderboard"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Prizes />
      <Partners />
      <Leaderboard />
      <Footer />
    </main>
  )
}
