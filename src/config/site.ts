
export const site = {
  name: 'Mohammad Musahib Pasha',
  shortBrand: 'MP',
  badge: 'MCA Student • Full-Stack Web Developer',
  heroSubtitle:
    'I build responsive, interactive and practical web applications using modern frontend and backend technologies, with a growing focus on AI-powered products.',
  heroIntro:
    'I am an MCA student and developer focused on full-stack web development, building modern applications with React, TypeScript, Node.js, APIs, Supabase, databases, and AI integrations.',
  stackBadges: [
    'Full-Stack',
    'React',
    'TypeScript',
    'Node.js',
    'Supabase',
    'AI APIs',
    'REST APIs',
    'MongoDB',
    'SQL',
    'GitHub',
  ] as const,
  aboutLead:
    'I’m an MCA student and full-stack web developer building modern web apps, AI-powered tools, and practical digital products.',
  aboutBody:
    'My focus is on full-stack web development—frontend engineering with React and TypeScript, backend/API work with Node.js and Express, database design with Supabase and MongoDB, and product thinking around real user workflows. I enjoy turning ideas into working products and learning through building, shipping, and iterating.',
  email: 'musahibpasha4@gmail.com',
  github: 'https://github.com/musahibpasha',
  githubUsername: 'musahibpasha',
  linkedin: 'https://www.linkedin.com/in/mohammad-musahib-pasha-04792425b/',
  resume: '/Mohammad_Musahib_Pasha_Resume.pdf',
  deloitteForageCertificateUrl:
    'https://theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ki3cp855nizqwGNam_1766216336103_completion_certificate.pdf',
  pythonBasicsPdfPath: '/python%20basics.pdf',
} as const

export type CertificationEntry = {
  title: string
  issuer: string
  issued: string
  href: string
  external?: boolean
  tag?: string
  path?: string
  imgSrc?: string
}

export const certificationsList: readonly CertificationEntry[] = [
  {
    title: 'Front-End Web Development & Python Basics',
    issuer: 'Infosys',
    issued: '2023',
    href: site.pythonBasicsPdfPath,
    path: site.pythonBasicsPdfPath,
    external: false,
    tag: 'Frontend',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    issued: '2025',
    href: site.deloitteForageCertificateUrl,
    tag: 'Analytics',
  },
  {
    title: 'Data Analytics',
    issuer: 'Edu-Pinnacle',
    issued: '2024',
    href: '/data analyst course.png',
    tag: 'Analytics',
    imgSrc: '/data analyst course.png',
  },
  {
    title: 'Generative AI',
    issuer: 'AWS',
    issued: '2024',
    href: 'https://aws.amazon.com/training/',
    tag: 'AI',
  },
] as const

export type PortfolioProject = {
  title: string
  category: string
  description: string
  tech: readonly string[]
  features: readonly string[]
  github: string
  live?: string
  liveLabel?: string
  accent: string
  initials: string
  render?: 'mockup' | 'dashboard'
}

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    title: 'WebGuard',
    category: 'AI-Powered Website Testing Platform',
    description:
      'An AI-guided website-testing assistant that crawls pages, detects functional and UI issues, and turns findings into developer-ready bug reports with optional AI explanations.',
    tech: ['React', 'Vite', 'Express', 'Puppeteer', 'Groq / OpenRouter / Gemini'],
    features: [
      'Website crawling',
      'Automated testing',
      'Functional bug detection',
      'UI issue detection',
      'Real-time testing status',
      'Developer-ready bug reports',
      'Optional AI explanations',
    ],
    github: 'https://github.com/musahibpasha',
    live: 'https://testing-site-for-websites.vercel.app/',
    accent: 'from-sky-500/30 to-cyan-500/15',
    initials: 'WG',
    render: 'dashboard',
  },
  {
    title: 'NewsHub',
    category: 'Multi-Category News Platform',
    description:
      'A news website for browsing stories across general news, business, technology, sports, entertainment, health, and science.',
    tech: ['News', 'Category Browsing', 'Web App'],
    features: [
      'General news',
      'Business',
      'Technology',
      'Sports',
      'Entertainment',
      'Health and science',
    ],
    github: 'https://github.com/musahibpasha',
    live: 'https://musahibnews.netlify.app/',
    liveLabel: 'Visit News Site',
    accent: 'from-amber-500/25 to-orange-500/15',
    initials: 'NH',
    render: 'dashboard',
  },
  // {
  //   title: 'Portfolio Website',
  //   category: 'Personal Developer Portfolio',
  //   description:
  //     'A product-style portfolio experience designed to communicate engineering depth, project work, and professional positioning through responsive UI and motion-driven storytelling.',
  //   tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
  //   features: [
  //     'Responsive interface',
  //     'Interactive motion',
  //     'GitHub integration',
  //     'Supabase contact form',
  //     'Vercel deployment',
  //     'Recruiter-focused content',
  //   ],
  //   github: 'https://github.com/musahibpasha/portfolio',
  //   live: 'https://portfolio-beige-ten-10.vercel.app/',
  //   accent: 'from-amber-500/25 to-orange-500/15',
  //   initials: 'PW',
  //   render: 'mockup',
  // },
] as const

export type NavLink = { label: string; href: string; id: string }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]
