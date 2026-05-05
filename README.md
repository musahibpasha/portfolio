# 🚀 Mohammad Musahib Pasha - Portfolio

A modern, interactive portfolio website showcasing expertise in **data analytics** and **web development**.

## 📖 About

This portfolio highlights a dual expertise journey:
- **Data Analytics & SQL** — disciplined data work with structured analysis and analytics simulations
- **Web Development** — shipping clean, modern interfaces with React and cutting-edge CSS
- **MCA Student** at St Claret University, Bengaluru
- **Junior Web Developer** at ThoughtBot

Certifications include Deloitte Analytics (Forage), AWS ML Specialty, and MongoDB Atlas expertise.

**Live Site:** [portfolio-beige-ten-10.vercel.app](https://portfolio-beige-ten-10.vercel.app/)

## 🛠️ Tech Stack

- **React 19** + TypeScript — Component-based UI
- **Vite** — Lightning-fast build tool with HMR
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations & effects
- **Supabase** — Backend for contact form submissions
- **Vercel** — Deployment

## ✨ Features

- ✅ **Animated Hero Section** — Marquee badges of tech stack
- ✅ **About & Experience** — Career highlights and technical journey
- ✅ **Skills Showcase** — SQL, Python, React, MongoDB, AWS, and more
- ✅ **Certifications** — Verified credentials with direct links
- ✅ **Project Gallery** — Curated portfolio work
- ✅ **GitHub Integration** — Live GitHub stats
- ✅ **Contact Form** — Supabase-powered submissions
- ✅ **Smooth Animations** — Mouse spotlight, scroll progress, section reveals
- ✅ **Responsive Design** — Works on all devices
- ✅ **Loading Screen** — Polished UX on page load

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact Form Setup

The contact form is integrated with Supabase. To enable submissions:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Add your credentials to `.env`:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Create `contact_submissions` table in Supabase (see setup docs)

## 📁 Project Structure

```
src/
├── components/
│   ├── effects/       # Animations (BadgeMarquee, MouseSpotlight)
│   ├── layout/        # Page layout (Navbar, Footer, LoadingScreen)
│   ├── sections/      # Content sections (Hero, About, Skills, Projects)
│   ├── icons/         # Social icons
│   └── ui/            # Reusable UI components
├── hooks/             # Custom hooks (useActiveSection)
├── lib/               # Utilities (Supabase, Motion)
├── config/            # Site configuration
└── App.tsx            # Main entry point
```

## 🔗 Links

- **Email:** musahibpasha4@gmail.com
- **GitHub:** [@MohammadMusahibPasha](https://github.com/musahibpashaa)
- **LinkedIn:** [Mohammad Musahib Pasha](https://www.linkedin.com/in/mohammad-musahib-pasha-04792425b/)

---

Built with ❤️ | Deployed on Vercel
