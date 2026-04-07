# Quanta

The official website for *Quanta*, a premier student-led research cell dedicated to advancing Machine Learning, Artificial Intelligence, and Data Engineering. 

Built with Next.js, Tailwind CSS, and Framer Motion, the platform features a highly dynamic, brutalist dark-mode aesthetic with interactive micro-animations and neon accents.

## Project Structure & Features

The website is divided into five main sections, each serving a distinct purpose for the community:

### 1. Home (`/`)
- **Hero Banner:** A bold, high-contrast introduction featuring the community's primary taglines ("Architecting Intelligence").
- **Mission Statement:** Describes Quanta's focus on open-source architecture and rigorous deployment cycles, accompanied by a dynamic overlapping image composition.
- **Core Domains:** A 3-column brutalist hover-grid detailing the core focus areas: Machine Learning, Data Engineering, and Artificial Intelligence. 

### 2. Events (`/events`)
- **Filterable Dashboard:** Users can toggle between "ALL", "UPCOMING", and "PAST" events seamlessly.
- **Interactive Event Cards:** Brutalist list items displaying workshops, hackathons, and guest talks with their respective dates, times, locations, and styling. Hovering triggers a full background color inversion.

### 3. Resources (`/resources`)
- **Open-Source Initiatives:** Showcases Quanta's in-house projects (e.g., NeuroScan, Campus Analytics, QuantBot, Autograd.py).
- **Technical Metadata:** Each project card displays the core technologies used (Python, Next.js, TensorFlow, RL, etc.) alongside direct links to GitHub and Live Deployments via Lucide icons.
- **Build With Us Banner:** A call-to-action banner linking directly to the organization's GitHub to encourage open-source contributions.

### 4. Legacy & Gallery (`/gallery`)
- **Achievements Strip:** Accentuates major awards and institutional recognitions (e.g., 1st Place Global Datathon, Best Open Source) using clear iconography and mono subtext.
- **Visual Logs:** A highly structured 3-column grid of photography representing "The Workspace Flow". Images utilize CSS filters to transition from grayscale to full color upon hover alongside custom `LOG_000` badges.

### 5. Team (`/team`)
- **Dual-Squad Layout:** Organizes the club into two distinct divisions: **AI-Tech Force** (driving technical initiatives) and **Operations Squad** (managing infrastructure and outreach).
- **Responsive Member Cards:** Features a detailed desktop hover-reveal portrait card (masking team information until hovered), alongside a compact mobile-friendly horizontal layout showing roles and biographies.
- **Social Integration:** Scalable structural validation ensures that individual team member custom SVG links (GitHub, LinkedIn, and Instagram) only display if a valid tracking URL is present.

## Tech Stack
- **Framework:** Next.js (App Router, React)
- **Styling:** Tailwind CSS (Custom `#00E5FF` cyan and `#A78BFA` purple accents, complex brutalist borders, Syne & Mono typography combinations)
- **Animation:** Framer Motion (Scroll reveals, staggered loaders, and Layout animations for filtering)
- **Icons:** Lucide React & Custom SVG implementations

## Getting Started

First, run the development server locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your standard web browser to see the result. The application is meant to be highly responsive and performant across mobile, tablet, and desktop viewports.
