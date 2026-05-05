<div align="center">
  <img src="/quanta_logo.png" width="400" alt="QuantCraft Logo">
</div>

# QuantCraft_

**Pixel-Perfect Intelligence.**

The official digital platform for **QuantCraft**, a premier student-led research cell dedicated to advancing Machine Learning, Artificial Intelligence, and Data Engineering through open-source architecture and rigorous deployment cycles.

Built with Next.js, Tailwind CSS, and Framer Motion, the platform features a high-fidelity **Minecraft-themed** dashboard with wooden-textured navigation, pixelated UI elements, and interactive retro-gaming animations.

---

## ⚡ Functionality Overview

The QuantCraft platform is built as a multi-page, high-performance web application designed to serve both the public community and internal administration, all wrapped in a cohesive gaming aesthetic.

### Public Experience
- **Minecraft Landing (`/`)**: A high-impact hero section with a pixelated world aesthetic and domain-specific feature grids.
- **AI-Tech Force (`/team`)**: Interactive cards showcasing the team with pixelated hover effects and "Minecraft-style" portrait toggles.
- **Events Dashboard (`/events`)**: A filterable system for community workshops and hackathons, designed with retro UI components.
- **Open-Source Resources (`/resources`)**: A showcase of in-house projects with direct links to technical metadata.
- **Legacy Gallery (`/gallery`)**: A visual log of community milestones displayed in a curated "Inventory-style" grid.

### Admin Panel (Internal)
- **Protected Access**: Secure login interface protecting all `/admin/*` routes.
- **Event Management**: CRUD interface for maintaining the community event calendar.
- **Content Operations**: Tools for managing team profiles, blog posts, and site metadata.

---

## 🏗️ Architecture & Structure

The repository follows a modern, component-based architecture leveraging the power of **Next.js 16 (App Router)** and **React 19**.

### 1. HTML / JSX Structure
- **App Router Management**: Utilizing `layout.tsx` for global persistence (Minecraft Navbar, Footer, Fonts) and `page.tsx` for route-specific views.
- **Semantic Components**: Modular components ensure consistency (e.g., `PixelCard`, `WoodNavbar`, `InventoryGrid`).
- **Responsive Composition**: Fluid layouts across mobile, tablet, and ultra-wide displays.

### 2. JS / Logic Layer
- **Reactive State**: leveraging `useState` and `useEffect` for interactive UI states and Minecraft-themed motion triggers.
- **Motion Orchestration**: **Framer Motion** powers complex scroll reveals and staggered pixel-entrance animations.

---

## 🎨 UI & Design Definition

QuantCraft's aesthetic is defined as **"Pixel-Retro"**—a fusion of modern performance and classic game-inspired design.

### Design System Highlights
- **Typography Philosophy**:
  - **Syne**: Geometric sans-serif for high-impact gaming headings.
  - **DM Mono**: Technical monospace font used for "terminal style" text overlays.
- **Minecraft Color Palette**:
  - **Dirt/Wood**: Earthy browns and pixelated textures for structural elements.
  - **Grass/Emerald**: Vibrant greens for success states and active markers.
  - **Sky/Diamond**: Clear blues for primary accents and neon glows.
- **Styling with Tailwind CSS v4**:
  - **Wooden Theming**: Custom CSS patterns for realistic wooden navigation bars.
  - **Pixel Borders**: Hard, thick borders and text shadows to emulate 8-bit rendering.

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

### Deployment
This project is optimized for deployment on **Vercel**. Connect your repository for automatic production builds and edge delivery.

---

> [!TIP]
> Architecture by **QuantCraft Dev Team**. Designed for the next generation of data architects.
