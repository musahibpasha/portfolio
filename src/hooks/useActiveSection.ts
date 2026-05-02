import { useEffect, useState } from 'react'

/** Highlight nav when section occupies ~middle of viewport */
export function useActiveSection(sectionIds: string[]): string | null {
  const [active, setActive] = useState<string | null>(sectionIds[0] ?? null)

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    for (const el of els) observer.observe(el)
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
