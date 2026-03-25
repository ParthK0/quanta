# Quanta - Data Science Club Website

Quanta is a modern, multi-page club website built with Next.js App Router for a student data science community. It includes:

- A public-facing website (home, about, team, events, projects, resources, blog, gallery, contact)
- A protected admin area with mock session authentication
- Responsive navigation and animated UI built with Framer Motion

## Overview

This project showcases a complete front-end experience for a university/club website, including an executive dashboard-style admin panel.

The design language is:

- Dark UI with neon accents
- Bold heading typography (Syne)
- Mono support typography (DM Mono)
- Motion-driven transitions and section reveals

## Tech Stack

- Next.js 16.2.1 (App Router)
- React 19.2.4
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- clsx + tailwind-merge (via utility helper)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Route Map

### Public routes

- `/` - Home
- `/about` - Club mission, vision, domains
- `/team` - Core team cards
- `/events` - Event listing with status filter
- `/projects` - Projects page
- `/resources` - Learning/resources page
- `/blog` - Public blog page
- `/gallery` - Media gallery page
- `/contact` - Contact/join page

### Admin routes

- `/admin/login` - Login page
- `/admin` - Dashboard
- `/admin/events` - Event management table + modal
- `/admin/blog` - Blog management table
- `/admin/team` - Member management page

## Admin Authentication (Mock)

Admin protection is implemented using middleware and a cookie named `admin_session`.

- Protected area: all `/admin/*` routes except `/admin/login`
- On successful login: cookie `admin_session=authenticated` is set
- Unauthenticated users are redirected to `/admin/login`
- Logged-in users visiting `/admin/login` are redirected to `/admin`

Current demo password:

```text
admin123
```

Important: this is demo-only auth and is not secure for production use.

## Project Structure

```text
src/
	app/
		layout.tsx
		page.tsx
		globals.css
		about/page.tsx
		blog/page.tsx
		contact/page.tsx
		events/page.tsx
		gallery/page.tsx
		projects/page.tsx
		resources/page.tsx
		team/page.tsx
		admin/
			layout.tsx
			page.tsx
			login/page.tsx
			blog/page.tsx
			events/page.tsx
			team/page.tsx
	components/
		navbar.tsx
		footer.tsx
	lib/
		utils.ts
	middleware.ts
```

## Styling and UI Notes

- Global tokens and custom utilities are in `src/app/globals.css`
- Fonts are configured in root layout using `next/font/google`
- Navigation is responsive with desktop and mobile behavior
- Motion effects are implemented with Framer Motion on key sections and lists

## Current Limitations

The following links/routes are referenced by UI but not currently implemented as pages:

- `/join`
- `/privacy`
- `/terms`
- Dynamic event detail pages (for links like `/events/1`)

These should be added before production deployment.

## Recommended Next Improvements

- Replace mock admin authentication with a real auth provider
- Replace hardcoded mock data with API/database-backed content
- Add dynamic route handlers for event/blog detail pages
- Add form validation and backend integration for contact/admin actions
- Add unit/integration tests and CI checks

## License

This repository currently has no explicit license file.
Add a `LICENSE` file to define usage terms.
