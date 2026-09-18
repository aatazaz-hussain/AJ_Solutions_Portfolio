# AJ Technology — AI Journey

A premium technology website for **AJ Technology**, a company focused on artificial intelligence, machine learning, software engineering, data and digital solutions.

The site presents the company's capabilities, portfolio, process and team through a cinematic, brand-driven design system built around the AJ Technology logo blue.

---

## Overview

AJ Technology — AI Journey is a modern, fully responsive corporate website built with Next.js 16, React 19, TypeScript and Framer Motion. It combines editorial typography, structured layouts and purposeful motion to communicate innovation, intelligence and progress.

The design system is built around one primary color — the AJ Technology brand blue (`#087cff`) — supported by deep navy, white and a controlled accent palette. Every page shares the same visual language: the same typography scale, the same border logic, the same motion behaviors and the same component patterns.

---

## Live Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, introduction, services preview, capabilities, featured work, process, final CTA |
| `/about` | About — company story, philosophy, approach, capabilities, technology stack, principles, AI Journey |
| `/services` | Services — six detailed service blocks, technical skills wall, end-to-end capability flow |
| `/projects` | Projects — full portfolio with category filter, project cards and case-study modals |
| `/process` | Process — six-stage journey, iteration loop, AI development flow, collaboration principles |
| `/team` | Team — leadership roster with editorial name typography |
| `/contact` | Contact — project inquiry form, direct channels and social links |

---

## Tech Stack

- **Next.js 16.3.5** — App Router, Turbopack
- **React 19.2.8** — Client components
- **TypeScript 5** — Full type safety
- **Framer Motion 13** — Scroll-triggered animations and transitions
- **Lucide React 1.46** — Icon system
- **Formspree** — Contact form delivery
- **Plain CSS** — No utility framework; organized per-page with a shared design token system

---

## Project Structure

```

aj-technologies/
│
├── app/
│   ├── layout.tsx               Root layout (includes Navbar and Footer)
│   ├── globals.css              Global design system and shared styles
│   ├── page.tsx                 Home page
│   ├── home.css
│   │
│   ├── about/
│   │   ├── page.tsx
│   │   └── about.css
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   └── services.css
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── projects.css
│   │
│   ├── process/
│   │   ├── page.tsx
│   │   └── process.css
│   │
│   ├── team/
│   │   ├── page.tsx
│   │   └── team.css
│   │
│   └── contact/
│       ├── page.tsx
│       └── contact.css
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   │
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.css
│
├── public/
│   ├── logo/
│   │   └── aj-technologies-logo.png
│   └── images/
│       ├── hero-tech.png
│       ├── about-hero.png
│       ├── services-hero.png
│       ├── projects-hero.png
│       ├── process-hero.png
│       ├── team-hero.png
│       └── contact-hero.png
│
├── package.json
└── README.md

```

---

## Design System

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| Brand Blue | `#087cff` | Primary CTAs, active states, key accents |
| Brand Blue Light | `#1684ff` | Hover states, secondary accents, icons |
| Deep Navy | `#030b18` | Base background |
| Elevated Navy | `#071223` | Alternate section backgrounds |
| White | `#ffffff` | Primary text, featured elements |
| Text Muted | `#a5b3c8` | Body copy |
| Text Dim | `#8292a9` | Secondary text |
| Border | `rgba(255, 255, 255, 0.075)` | Subtle section and card borders |
| Border Accent | `rgba(22, 132, 255, 0.48)` | Hover borders |

### Typography

- Hero headings: `clamp(44px, 5vw, 76px)` with tight letter spacing
- Section headings: `clamp(36px, 4vw, 56px)`
- Body copy: `15.5px` with `1.75` line height
- Labels and kickers: `11.5px`, uppercase, `0.22em` letter spacing

### Spacing and Layout

- Container width: `min(1240px, calc(100% - 64px))`
- Section padding: `60–90px` vertical
- Card radius: `12–18px`
- Button radius: `9px`

### Motion Language

All animations use Framer Motion with a shared easing curve `[0.22, 1, 0.36, 1]`:

- Scroll-triggered reveals using `whileInView` with `viewport={{ once: true }}`
- Mask-based line reveals for headings
- Staggered child entrances for card grids
- Persistent ambient loops: orbit spins, glow floats, scan lines, pulse dots
- Micro-interactions: arrow nudges, card lifts, icon rotations

Reduced motion is respected across every page via `prefers-reduced-motion`.

---

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm (or pnpm / yarn)

### Installation

```bash
git clone https://github.com/aqsatanoli/aj-technologies.git
cd aj-technologies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Contact Form Setup

The contact form is powered by Formspree.

1. Create a form at [https://formspree.io](https://formspree.io)
2. Set the recipient email to `ajtechnologies.ai@gmail.com`
3. Copy the Form ID from the endpoint URL (e.g. `xyzabcde`)
4. Open `app/contact/page.tsx`
5. Replace `YOUR_FORM_ID_HERE` inside `useForm("YOUR_FORM_ID_HERE")` with your Form ID

Submissions are delivered automatically to the configured inbox with spam filtering.

---

## Content Guidelines

The project follows strict content rules:

- No fabricated clients, statistics, users, revenue or results
- Every technology, capability and project listed reflects real work
- Where detailed information is unavailable, structure is provided without invented data
- All external links point to real AJ Technology channels

---

## Links

| Channel | URL |
| --- | --- |
| GitHub | [https://github.com/aqsatanoli](https://github.com/aqsatanoli?tab=repositories&type=source) |
| LinkedIn | [https://www.linkedin.com/company/aj-technologies-official/](https://www.linkedin.com/company/aj-technologies-official/) |
| Instagram | [https://www.instagram.com/ajtechnologies45](https://www.instagram.com/ajtechnologies45?igsi=eDc1dmYwa2Z3ZGkw) |
| Facebook | [https://www.facebook.com/share/1Dh5k1Lqa4/](https://www.facebook.com/share/1Dh5k1Lqa4/) |
| Email | ajtechnologies.ai@gmail.com |
| WhatsApp | +92 326 0666521 |

---

## Author

**AJ Technology — AI Journey**
Founder and Lead: Aqsa Fayyaz
Company: AJ Technology

---

## License

© 2026 AJ Technology. All rights reserved.
```

