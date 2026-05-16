<div align="center">

<img src="public/logo.png" alt="DevPulse Logo" width="120" />

<br/>

```
██████╗ ███████╗██╗   ██╗██████╗ ██╗   ██╗██╗     ███████╗███████╗
██╔══██╗██╔════╝██║   ██║██╔══██╗██║   ██║██║     ██╔════╝██╔════╝
██║  ██║█████╗  ██║   ██║██████╔╝██║   ██║██║     ███████╗█████╗
██║  ██║██╔══╝  ╚██╗ ██╔╝██╔═══╝ ██║   ██║██║     ╚════██║██╔══╝
██████╔╝███████╗ ╚████╔╝ ██║     ╚██████╔╝███████╗███████║███████╗
╚═════╝ ╚══════╝  ╚═══╝  ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝
```

### *Enterprise-Grade Agile. Zero Compromise.* 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-7c3aed?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0d0d0d)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=0d0d0d)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-a855f7?style=for-the-badge&logo=vite&logoColor=white&labelColor=0d0d0d)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-7c3aed?style=for-the-badge&labelColor=0d0d0d)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a855f7?style=for-the-badge&labelColor=0d0d0d)](CONTRIBUTING.md)

<br/>

> **DevPulse** is an enterprise-grade agile project management dashboard built with **React** and **strict TypeScript**.
> Featuring a sleek **Cyberpunk theme** — Matte Black & Electric Purple — with real-time sprint velocity metrics,
> repository tracking, and a **zero-lag HTML5 drag-and-drop Kanban** workspace.

<br/>

![DevPulse Dashboard Preview](public/preview.png)

</div>

---

## ⚡ Overview

Modern engineering teams move fast. **DevPulse** keeps up. Built from the ground up as an enterprise tool, it combines the aesthetic power of a Cyberpunk UI with the robust architecture your team demands — strict TypeScript, clean component boundaries, and performance-first design choices throughout.

No bloat. No compromise. Just signal.

---

## 🖥️ Screenshots

| Dashboard | Kanban Board | Sprint Metrics |
|---|---|---|
|<img width="1350" height="634" alt="Screenshot 2026-05-16 201618" src="https://github.com/user-attachments/assets/8f344e0b-217e-436d-bb57-b5695b52bdd4" />
<img width="1347" height="622" alt="Screenshot 2026-05-16 201543" src="https://github.com/user-attachments/assets/b18fe174-c55a-4930-82cb-91c1b5da09ec" />
<img width="1354" height="638" alt="Screenshot 2026-05-16 201459" src="https://github.com/user-attachments/assets/18eaf4d1-f7ac-4187-8cc6-60df0584e08f" />


---

## ✨ Core Features

### 🎯 Interactive Kanban Workspace
- **Native HTML5 drag-and-drop** — no third-party DnD library, zero lag
- **Multi-column boards** — Backlog → In Progress → Review → Done
- **Card management** — create, edit, assign, prioritize, and archive tickets
- **Swimlane support** — organize by team member or epic
- **Real-time column counters** — always know your WIP limits

### 📈 Sprint Velocity Metrics
- **Live velocity charts** — track story points delivered per sprint
- **Burndown visualization** — monitor sprint health in real-time
- **Throughput tracking** — measure team output trends over time
- **Forecast engine** — project future sprint capacity from historical data
- **Custom date ranges** — analyze any sprint window instantly

### 🗂️ Repository Tracking
- **Multi-repo dashboard** — monitor all your repositories in one view
- **Commit activity graphs** — visualize contribution patterns
- **Branch status overview** — track open PRs, stale branches, and merge conflicts
- **CI/CD status indicators** — see build health at a glance
- **Issue linkage** — connect tickets directly to repo issues

### 🎨 Cyberpunk UI — Matte Black & Electric Purple
- **Dark-first design** — `#0d0d0d` base with `#7c3aed` / `#a855f7` accents
- **Glassmorphism panels** — frosted-glass cards with subtle purple glows
- **Neon micro-animations** — hover states, loading pulses, drag shadows
- **Responsive layout** — pixel-perfect from 1080p ultrawide to 768px tablet
- **Custom scrollbars** — themed to match the brand throughout

### 🔒 Type-Safe Architecture
- **Strict TypeScript** — `"strict": true` across the entire codebase
- **Full type coverage** — every prop, state, API response, and event typed
- **Zero `any` tolerance** — enforced via ESLint rules
- **Interface-driven design** — clean contracts between all components

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Framework** | React 18 | UI rendering & component model |
| **Language** | TypeScript (strict) | Type safety across the entire codebase |
| **Build Tool** | Vite | Lightning-fast dev server & bundler |
| **Drag & Drop** | HTML5 DnD API | Native, zero-dependency Kanban interaction |
| **Charts** | Recharts / D3 | Sprint velocity & burndown visualizations |
| **Styling** | CSS Modules + Custom Props | Scoped styles with Cyberpunk design tokens |
| **State** | React Context + useReducer | Predictable, scalable global state |
| **Routing** | React Router v6 | Client-side navigation |
| **Linting** | ESLint + TypeScript rules | Code quality enforcement |
| **Deployment** | Vercel | Zero-config CI/CD |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool | Version |
|---|---|
| [Node.js](https://nodejs.org/) | v18+ |
| [npm](https://www.npmjs.com/) | v9+ |
| [Git](https://git-scm.com/) | Latest |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/devpulse.git

# 2. Navigate into the project
cd devpulse

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **http://localhost:5173** — the dashboard loads instantly. 🎉

### Available Scripts

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript check + production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint across all TypeScript files
npm run type-check # Run tsc --noEmit for strict type validation
```

---

## 📁 Project Structure

```
devpulse/
├── public/
│   ├── logo.png                    # DevPulse brand logo
│   └── screenshots/                # Dashboard preview images
├── src/
│   ├── @types/                     # Global TypeScript declarations
│   │   └── index.d.ts
│   ├── components/                 # Reusable UI components
│   │   ├── Kanban/
│   │   │   ├── KanbanBoard.tsx     # Root board with DnD context
│   │   │   ├── KanbanColumn.tsx    # Drop zone column
│   │   │   ├── KanbanCard.tsx      # Draggable ticket card
│   │   │   └── KanbanCard.types.ts # Card interface definitions
│   │   ├── Charts/
│   │   │   ├── VelocityChart.tsx   # Sprint velocity line chart
│   │   │   ├── BurndownChart.tsx   # Sprint burndown visualization
│   │   │   └── ThroughputBar.tsx   # Team throughput bar chart
│   │   ├── RepoTracker/
│   │   │   ├── RepoCard.tsx        # Single repository card
│   │   │   └── RepoList.tsx        # Repository grid view
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatusBadge.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx           # Main overview page
│   │   ├── KanbanPage.tsx          # Full-screen Kanban view
│   │   ├── SprintPage.tsx          # Sprint metrics & analytics
│   │   └── RepositoriesPage.tsx    # Repo tracking hub
│   ├── context/
│   │   ├── BoardContext.tsx        # Kanban state & DnD handlers
│   │   └── SprintContext.tsx       # Sprint data & velocity state
│   ├── hooks/
│   │   ├── useDragAndDrop.ts       # Native HTML5 DnD hook
│   │   ├── useVelocity.ts          # Sprint velocity calculations
│   │   └── useLocalStorage.ts      # Typed localStorage hook
│   ├── types/
│   │   ├── kanban.types.ts         # Ticket, Column, Board types
│   │   ├── sprint.types.ts         # Sprint, Story, Velocity types
│   │   └── repo.types.ts           # Repository, Branch, PR types
│   ├── styles/
│   │   ├── globals.css             # CSS custom properties (design tokens)
│   │   ├── cyberpunk.css           # Neon glow & glass effects
│   │   └── components/             # Per-component CSS modules
│   ├── utils/
│   │   ├── velocity.ts             # Velocity & forecast calculations
│   │   └── dates.ts                # Sprint date utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.json
├── tsconfig.json                   # Strict TypeScript config
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🎨 Design System — Cyberpunk Theme

### Color Tokens

```css
:root {
  /* Background */
  --color-base:       #0d0d0d;   /* Matte Black — main background */
  --color-surface:    #111118;   /* Elevated cards & panels */
  --color-surface-2:  #18181f;   /* Hover & active states */

  /* Electric Purple Accents */
  --color-primary:    #7c3aed;   /* Primary accent — Electric Purple */
  --color-primary-lt: #a855f7;   /* Light variant — glow & highlights */
  --color-primary-glow: rgba(124, 58, 237, 0.3); /* Neon glow shadow */

  /* Text */
  --color-text:       #f0ede8;   /* Primary text */
  --color-muted:      rgba(240, 237, 232, 0.45); /* Secondary text */

  /* Status */
  --color-success:    #22c55e;   /* Done / Passing */
  --color-warning:    #f59e0b;   /* At risk */
  --color-danger:     #ef4444;   /* Blocked / Failed */
  --color-info:       #38bdf8;   /* Info / In Review */
}
```

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | `Syne` | 700, 800 |
| Body / UI | `DM Sans` | 300, 400, 500 |
| Code / Monospace | `JetBrains Mono` | 400, 600 |

---

## ⚙️ TypeScript Configuration

DevPulse enforces **maximum type safety** across the entire codebase:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
```

---

## 🌍 Deployment

DevPulse is deployed on **[Vercel](https://vercel.com)** with automatic production deployments on every push to `main`.

### Deploy your own instance

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts — live in under 60 seconds ✅
```

Or import directly on [vercel.com](https://vercel.com) → **New Project** → Import GitHub repo → Deploy.

---

## 🗺️ Roadmap

- [x] 🎯 Drag-and-drop Kanban board
- [x] 📈 Sprint velocity charts
- [x] 🗂️ Repository tracking
- [x] 🎨 Cyberpunk UI — Matte Black & Electric Purple
- [x] 🔒 Strict TypeScript throughout
- [ ] 🔗 GitHub API integration — live repo data
- [ ] 🔔 Real-time notifications via WebSockets
- [ ] 👥 Multi-user collaboration & role-based access
- [ ] 📤 Export reports to PDF / CSV
- [ ] 📱 PWA support — offline dashboard access
- [ ] 🤖 AI sprint planning suggestions

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. **Fork** this repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes — ensure `npm run type-check` and `npm run lint` pass
4. Commit: `git commit -m "feat: add your feature description"`
5. Push: `git push origin feature/your-feature-name`
6. Open a **Pull Request** with a clear title and description

Please follow the existing TypeScript conventions and zero-`any` rule.

---

## 📄 License

This project is open source under the **[MIT License](LICENSE)**.

---

<div align="center">

<br/>

Built with 🟣 and strict TypeScript — from **Kigali, Rwanda** 🇷🇼

<br/>

**DevPulse** — *Enterprise-Grade Agile. Zero Compromise.* ⚡

<br/>

[![Stars](https://img.shields.io/github/stars/ByteFlow-Ltd/devpulse?style=social)](https://github.com/ByteFlow-Ltd/devpulse)
[![Forks](https://img.shields.io/github/forks/ByteFlow-Ltd/devpulse?style=social)](https://github.com/ByteFlow-Ltd/devpulse)
[![Watchers](https://img.shields.io/github/watchers/ByteFlow-Ltd/devpulse?style=social)](https://github.com/ByteFlow-Ltd/devpulse)

</div>
