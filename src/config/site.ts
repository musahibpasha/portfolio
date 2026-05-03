/** Update email before deploying publicly · Copy aligned with public LinkedIn */
export const site = {
  name: 'Mohammad Musahib Pasha',

  shortBrand: 'MMP',

  /** Matches LinkedIn + current studies */
  badge: ' MCA @ St Claret · Bengaluru',

  /** Data analytics & web — dual thread per LinkedIn & goals */
  heroSubtitle:
    'Data Analytics & SQL | Junior Web Developer @ ThoughtBot | Computer Science Student',

  heroIntro:
    'I split my focus between disciplined data work—SQL, structured analysis, and analytics simulations—and shipping clean web interfaces with React and modern CSS. MCA studies and certifications (Deloitte Analytics on Forage, AWS ML Specialty, MongoDB paths) sharpen how I validate insights and pair them with usable UI.',

  /** Hero marquee chips */
  stackBadges: [
    'SQL',
    'Data Analytics',
    'Python',
    'MongoDB',
    'React',
    'JavaScript',
    'Tailwind',
    'GitHub',
    'AWS ML',
    'Framer Motion',
  ] as const,

  aboutLead:
    'Aspiring analytics- and delivery-minded technologist with a Computer Science backbone: BCA foundations, MCA at St Claret, and ongoing web work at ThoughtBot.',

  aboutBody:
    'On LinkedIn I describe curiosity across C & Python programming, web development, and design—so I can own both clarity of analysis and polish of presentation. Recent wins include Deloitte Australia’s Data Analytics job simulation on Forage, MongoDB Atlas & data modeling coursework, AWS Certified Machine Learning – Specialty, and hands-on internships that mix research-style data stewardship with production front-end routines.',

  email: 'musahibpasha4@gmail.com',
  github: 'https://github.com/musahibpashaa',
  githubUsername: 'MohammadMusahibPasha',

  linkedin:
    'https://www.linkedin.com/in/mohammad-musahib-pasha-04792425b/',

  /** Public Forage completion PDF (also linked from LinkedIn certifications) */
  deloitteForageCertificateUrl:
    'https://theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ki3cp855nizqwGNam_1766216336103_completion_certificate.pdf',

  /** AWS MLS exam overview + Skill Builder ML hub (“facility”) + official verification */
  // awsMachineLearningCertificationUrl:
  //   'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
  // awsTrainingCredentialVerificationUrl:
  //   'https://aws.amazon.com/verification',
  // awsSkillBuilderMachineLearningUrl:
  //   'https://skillbuilder.aws/learn?search=machine%20learning',
} as const

export type CertificationEntry = {
  title: string
  issuer: string
  issued: string
  /** Primary link: certificate PDF, course, or issuer page */
  href: string
  /** Opens in new tab unless false */
  external?: boolean
  /** Short tag for pills */
  tag?: string
}

/** Mirrors public LinkedIn “Licenses & certifications” (AWS MLS is featured separately in UI) */
export const certificationsList: readonly CertificationEntry[] = [
  {
    title: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Forage',
    issued: 'Dec 2025',
    href: site.deloitteForageCertificateUrl,
    tag: 'Analytics',
  },
  {
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB',
    issued: 'Mar 2025',
    href: 'https://learn.mongodb.com/c/kGwDcu9WT9eZG7i-kLbPJA',
    tag: 'MongoDB',
  },
  {
    title: 'Delegate – Global Virtual Summit 2024',
    issuer: 'GELP',
    issued: 'Aug 2024',
    href: 'https://app.gelp.ca/badge?id=D802WAGDSXNUKEJJ',
    tag: 'Leadership',
  },
  {
    title: 'Data Analyst course',
    issuer: 'Edupinnacle',
    issued: 'Sep 2024',
    href: 'https://edupinnacle.com/certificate-verification/',
    tag: 'Analytics',
  },
  {
    title: 'Springboard Program',
    issuer: 'Infosys',
    issued: 'Oct 2023',
    href: 'https://infyspringboard.infosys.com/',
    tag: 'Foundation',
  },
] as const

export type PortfolioProject = {
  title: string
  description: string
  tech: readonly string[]
  accent: string
  /** Public GitHub repo URL, or "#" if not published yet */
  github: string
  /** Live demo, credential PDF, or "#" */
  live: string
  initials: string
  /** When set, replaces "Live Demo" label (e.g. credential link) */
  liveLabel?: string
  /** If false, hide GitHub button (simulations / non-repo work) */
  showGithub?: boolean
}

/** Projects section mirrors what you showcase on LinkedIn + this site + Forage credential */
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    title: 'NEWSAPP',
    description:
      'Real-time data fetching so readers get the newest stories as they publish. Breaking alerts and trending feeds are surfaced first to keep users informed on global and local events. Built with React functional components, modular hooks, and predictable state/side-effect handling.',
    tech: ['React', 'Hooks', 'APIs', 'Real-time UX'],
    accent: 'from-sky-500/40 to-blue-600/20',
    github: '#',
    live: '#',
    initials: 'NW',
  },
  {
    title: 'Text Analyzer',
    description:
      'React SPA focused on clarity and performance: memoization and conditional rendering to avoid unnecessary re-renders while users paste and analyze text—component boundaries stay small and testable.',
    tech: ['React', 'Performance', 'Memoization'],
    accent: 'from-emerald-500/40 to-teal-600/20',
    github: '#',
    live: '#',
    initials: 'TA',
  },
  {
    title: 'Portfolio Website',
    description:
      'This single-page portfolio: dark theme, glassmorphism, Framer Motion reveals, and sections aligned with LinkedIn (experience, skills, GitHub stats, contact).',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    accent: 'from-violet-500/40 to-purple-600/20',
    github: site.github,
    live: '#',
    initials: 'PF',
  },
  {
    title: 'Health Care SQL Database',
    description:
      'Comprehensive SQL healthcare analytics dashboard showcasing data modeling, complex queries, and interactive visualizations. Built with SQL database design patterns and responsive charts for healthcare metrics analysis and reporting.',
    tech: ['SQL', 'Database Design', 'Charts', 'Analytics'],
    accent: 'from-red-500/40 to-pink-600/20',
    github: 'https://github.com/musahibpasha/Health-Care-SQL-',
    live: 'https://v0-resume-database-charts.vercel.app/',
    initials: 'HC',
    liveLabel: 'View Demo',
  },
  {
    title: 'Deloitte Australia — Data Analytics (Forage)',
    description:
      'Job simulation completed via Forage (also posted on LinkedIn): structured analytics workflow, stakeholder-ready outputs, and practice aligned with professional services-style data delivery.',
    tech: ['Data analytics', 'Forage', 'Structured analysis'],
    accent: 'from-amber-500/35 to-rose-600/20',
    github: '#',
    live: site.deloitteForageCertificateUrl,
    initials: 'DA',
    liveLabel: 'View credential',
    showGithub: false,
  },
] as const

export type NavLink = { label: string; href: string; id: string }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'GitHub', href: '#github', id: 'github' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]
