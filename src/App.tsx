import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { navLinks } from './config/site'
import { useActiveSection } from './hooks/useActiveSection'
import { BackgroundBlobs } from './components/layout/BackgroundBlobs'
import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { MouseSpotlight } from './components/effects/MouseSpotlight'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
// import { GitHubStats } from './components/sections/GitHubStats'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function App() {
  const [loading, setLoading] = useState(true)
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 1100)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      <ScrollProgress />
      <BackgroundBlobs />
      <div className="relative min-h-svh text-zinc-200">
        <Navbar activeSection={activeSection} />
        <MouseSpotlight className="relative min-h-svh">
          <motion.div
            className="relative mx-auto min-h-svh max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
            animate={{
              opacity: loading ? 0 : 1,
              y: loading ? 12 : 0,
              filter: loading ? 'blur(10px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: loading ? 'none' : 'auto' }}
          >
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              {/* <GitHubStats /> */}
              <Contact />
              <Footer />
            </main>
          </motion.div>
        </MouseSpotlight>
      </div>
    </>
  )
}

export default App
