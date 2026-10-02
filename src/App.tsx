import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { About } from './components/sections/About'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Explorations } from './components/sections/Explorations'
import { GitHub } from './components/sections/GitHub'
import { Hero } from './components/sections/Hero'
import { Journal } from './components/sections/Journal'
import { Work } from './components/sections/Work'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const done = useCallback(() => setIsLoading(false), [])

  return (
    <>
      <AnimatePresence>{isLoading && <Loading onComplete={done} />}</AnimatePresence>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.6 }}>
        <Navbar />
        <Hero ready={!isLoading} />
        <About />
        <Explorations />
        <Work />
        <Experience />
        <Education />
        <Achievements />
        <Journal />
        <GitHub />
        <Contact />
      </motion.main>
    </>
  )
}
