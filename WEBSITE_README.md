# Quanta Website Guide

This document explains everything currently available on the Quanta website, including pages, UI features, admin behavior, and known limitations.

## What This Website Is

Quanta is a multi-page club website for a student data science and AI community.

It has two major parts:
- Public website for visitors and members
- Admin panel for internal content and operations (mock/demo behavior)

## Technology Used

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## Public Website Pages

These pages are available for all users:

- `/` Home
  - Hero section
  - Club positioning and CTA buttons
  - Feature highlight cards
  - CTA for joining

- `/about`
  - Mission and vision
  - Why join section
  - Domain list (AI, ML, Data, Cloud)

- `/team`
  - Core team cards
  - Role, short bio, social/contact icons

- `/events`
  - Event list with image cards
  - Filter tabs: all, upcoming, past
  - Event metadata: date, time, location, type

- `/projects`
  - Projects section/page scaffold

- `/resources`
  - Learning resources section/page scaffold

- `/blog`
  - Public blog section/page scaffold

- `/gallery`
  - Gallery section/page scaffold

- `/contact`
  - Contact/join section/page scaffold

## Shared Layout Features

These run across the site:

- Sticky top navigation bar
  - Desktop nav links
  - Mobile menu toggle
  - Admin button link

- Global footer
  - Quick links
  - Contact info
  - Social icon buttons
  - Privacy/Terms links

- Global visual style
  - Dark theme
  - Neon-accent color tokens
  - Grid and glow utility effects
  - Custom typography using Syne and DM Mono

## Admin Panel

### Admin routes

- `/admin/login`
  - Password form for admin access

- `/admin`
  - Dashboard with cards and recent activity

- `/admin/events`
  - Event table
  - Delete action
  - New event modal UI

- `/admin/blog`
  - Blog post table
  - Delete action
  - New post button UI

- `/admin/team`
  - Team/member management page scaffold

### Admin functionality (current)

- Auth is cookie-based demo auth
- Middleware protects `/admin/*` except `/admin/login`
- Successful login sets `admin_session=authenticated`
- Logout clears session cookie and redirects to login

### Demo credentials

- Password: admin123

## Current Functional Behaviors

- Navbar highlights active route
- Mobile menu opens/closes with animation
- Multiple sections animate on load/in-view
- Events page filters data in-memory on the client
- Admin event/blog delete actions update UI state in-memory
- No persistent backend storage is connected yet

## Known Gaps / Not Yet Implemented

These links are referenced but pages are not present yet:

- `/join`
- `/privacy`
- `/terms`
- Dynamic event detail pages such as `/events/1`

## Folder Map (Important Website Files)

- `src/app/layout.tsx` Root layout, fonts, and global shell
- `src/app/page.tsx` Home page
- `src/app/about/page.tsx` About page
- `src/app/team/page.tsx` Team page
- `src/app/events/page.tsx` Events page
- `src/app/projects/page.tsx` Projects page
- `src/app/resources/page.tsx` Resources page
- `src/app/blog/page.tsx` Blog page
- `src/app/gallery/page.tsx` Gallery page
- `src/app/contact/page.tsx` Contact page
- `src/components/navbar.tsx` Site navbar
- `src/components/footer.tsx` Site footer
- `src/app/admin/layout.tsx` Admin shell/sidebar and logout behavior
- `src/app/admin/login/page.tsx` Admin login page
- `src/app/admin/page.tsx` Admin dashboard
- `src/app/admin/events/page.tsx` Admin events management
- `src/app/admin/blog/page.tsx` Admin blog management
- `src/app/admin/team/page.tsx` Admin team page
- `src/middleware.ts` Route protection middleware
- `src/app/globals.css` Global theme tokens and utility styles

## How To Run

1. Install packages:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Suggested Next Enhancements

- Replace demo auth with production authentication
- Add backend/database for events, blog, and team data
- Create missing routes (`/join`, `/privacy`, `/terms`)
- Add dynamic event detail pages
- Add form validation and API integration
- Add tests and CI checks
