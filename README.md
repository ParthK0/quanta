<div align="center">
  <img src="C:\Users\Dell\.gemini\antigravity\brain\1b09ac8f-123e-4b7a-922f-eef7a1088f87\quanta_logo.png" width="400" alt="Quanta Logo">
</div>

# QUANTA_

**Architecting Intelligence.**

The official digital platform for **Quanta**, a premier student-led research cell dedicated to advancing Machine Learning, Artificial Intelligence, and Data Engineering through open-source architecture and rigorous deployment cycles.

Built with Next.js, Tailwind CSS, and Framer Motion, the platform features a highly dynamic, brutalist dark-mode aesthetic with interactive micro-animations and neon accents.

![Quanta UI Preview](C:\Users\Dell\.gemini\antigravity\brain\1b09ac8f-123e-4b7a-922f-eef7a1088f87\quanta_ui_preview_1775497732173.png)

---

## ⚡ Functionality Overview

The Quanta platform is built as a multi-page, high-performance web application designed to serve both the public community and internal administration.

### Public Experience
- **Dynamic Landing (`/`)**: A high-impact hero section with animated backgrounds and domain-specific feature grids.
- **Team Hub (`/team`)**: Interactive cards showcasing the **AI-Tech Force** and **Operations Squad** with hover-reveal portraits and social integrations.
- **Events Dashboard (`/events`)**: A filterable system for "All", "Upcoming", and "Past" workshops, hackathons, and guest talks.
- **Open-Source Resources (`/resources`)**: A showcase of in-house projects (e.g., NeuroScan, QuantBot) with direct links to technical metadata and GitHub repositories.
- **Legacy Gallery (`/gallery`)**: A visual log of community milestones, achievements, and "The Workspace Flow" through a curated image grid.

### Admin Panel (Internal)
- **Protected Access**: Cookie-based authentication middleware protects all `/admin/*` routes.
- **Event Management**: CRUD (Create, Read, Update, Delete) interface for maintaining the community event calendar.
- **Content Operations**: Internal tools for managing team profiles, blog posts, and site metadata.
- **Dashboard Metrics**: Quick-view cards for site activity and community growth.

---

## 🏗️ Architecture & Structure

The repository follows a modern, component-based architecture leveraging the power of **Next.js 16 (App Router)** and **React 19**.

### 1. HTML / JSX Structure
- **App Router Management**: Utilizing `layout.tsx` for global persistence (Navbar, Footer, Fonts) and `page.tsx` for route-specific views.
- **Semantic Components**: Modular components in `@/components` ensure consistency across the site (e.g., `AnimatedBackground`, `Navbar`, `EventCard`).
- **Responsive Composition**: Flexbox and CSS Grid are used exclusively for fluid layouts across mobile, tablet, and ultra-wide displays.

### 2. JS / Logic Layer
- **Reactive State**: leveraging `useState` and `useEffect` for client-side filtering, interactive UI states, and motion triggers.
- **Dynamic Routing**: Next.js `Link` and `usePathname` for seamless, single-page application (SPA) transitions.
- **Motion Orchestration**: **Framer Motion** powers complex scroll reveals, staggered entrance animations, and layout transitions.
- **Iconography**: **Lucide React** provides a consistent, scalable set of technical icons.

---

## 🎨 UI & Design Definition

Quanta's aesthetic is defined as **"Cyber-Brutalist"**—a fusion of high-tech precision and raw, high-contrast structural elements.

### Design System Highlights
- **Typography Philosophy**:
  - **Syne**: A wide, geometric sans-serif used for high-impact headings and brand identity.
  - **DM Mono**: A clean, technical monospace font used for secondary data, metadata, and "terminal style" text.
- **Color Palette**:
  - **Background**: `hsl(222, 47%, 7%)` — A deep, "midnight" navy for maximum depth.
  - **Primary Accent**: `#00E5FF` (Neon Cyan) — Used for pulses, glows, and active states.
  - **Secondary Accent**: `#A78BFA` (Soft Purple) — Used for subtle highlights and link transitions.
- **Styling with Tailwind CSS v4**:
  - **Layered Theming**: Utilizes `@theme` blocks for custom CSS variables and HSL-based color tokens.
  - **Utility Extensions**: Custom utilities like `text-glow` and `bg-grid-white` for futuristic atmospheric effects.
  - **Brutalist Borders**: Heavy, high-contrast borders (`border-white/10`) and backdrop blurs for a "layered glass" aesthetic.

---

## 🚀 Getting Started

### Local Development
1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```
3. **Admin Access**:
   Navigate to `/admin/login`. Use the demo password: `admin123`.

### Deployment
This project is optimized for deployment on **Vercel**. Connect your repository for automatic production builds and edge delivery.

---

> [!TIP]
> Architecture by **Quanta Dev Team**. Designed for the next generation of data architects.
