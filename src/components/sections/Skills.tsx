import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Atom,
  Binary,
  Brain,
  Braces,
  ChartColumnIncreasing,
  CodeXml,
  Cylinder,
  Database,
  FolderGit,
  Palette,
  Wind,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

type Skill = {
  name: string
  icon: LucideIcon
  level: number
}

/** LinkedIn + stated goals: data/SQL/analytics paired with proven web delivery */
const skills: Skill[] = [
  { name: 'SQL', icon: Database, level: 90 },
  { name: 'Data analytics', icon: ChartColumnIncreasing, level: 86 },
  { name: 'Python', icon: Binary, level: 84 },
  { name: 'MongoDB', icon: Cylinder, level: 82 },
  { name: 'React', icon: Atom, level: 88 },
  { name: 'JavaScript', icon: Braces, level: 86 },
  { name: 'HTML', icon: CodeXml, level: 90 },
  { name: 'CSS', icon: Palette, level: 87 },
  { name: 'Tailwind CSS', icon: Wind, level: 88 },
  { name: 'GitHub', icon: FolderGit, level: 86 },
  { name: 'Problem solving', icon: Brain, level: 88 },
]

function AnimatedBar({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionVal = useMotionValue(0)
  const sprung = useSpring(motionVal, { stiffness: 120, damping: 22 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          motionVal.set(value)
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [motionVal, value])

  const width = useTransform(sprung, (v) => `${Math.min(Math.max(v, 0), 100)}%`)

  return (
    <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 shadow-[0_0_20px_-4px_rgba(52,211,153,0.5)]"
        style={{ width }}
      />
    </div>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon
  return (
    <SectionReveal delay={index * 0.035}>
      <motion.div
        className="glass-card glass-card-hover relative overflow-hidden p-6"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-emerald-300/90">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-[15px] font-semibold text-white">
                {skill.name}
              </h3>
              <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                Proficiency
              </p>
            </div>
          </div>
          <span className="font-mono text-sm font-medium text-zinc-400">{skill.level}%</span>
        </div>
        <div className="mt-5">
          <AnimatedBar value={skill.level} />
        </div>
      </motion.div>
    </SectionReveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <SectionHeading
            kicker="Skills"
            title="Analytics, databases & interfaces"
          />
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
