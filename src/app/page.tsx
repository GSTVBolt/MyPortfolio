import { GstvSection } from "./components/gstvSection"
import { Navbar } from "./components/navbar"
import { AboutSection } from "./components/aboutSection"
import { ProjectsSection } from "./components/projectsSection"
import Skill from "./components/skills"
import { Footer } from "./components/footer"
import { EmailJsSection } from "./components/emailjsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-gradient-to-b from-zinc-900 via-slate-900 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <GstvSection />
        {/* <AboutSection /> */}
        <div className="pt-28">
          <Skill />
        </div>
        <div className="pt-28">
          <ProjectsSection />
        </div>
        <div>
          <EmailJsSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
