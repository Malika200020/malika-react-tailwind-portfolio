# Portfolio of Malika Degaldoruwa

A personal portfolio website built with React and Tailwind CSS, showcasing projects, research, skills, and experience.

## Tech Stack

- **React 18** with React Router v7
- **Tailwind CSS v4** for styling
- **Vite** for bundling and development
- **Radix UI** for accessible toast notifications
- **Lucide React** & **React Icons** for icons
- **react-slick** for project image carousels

## Features

- Light/dark mode toggle with localStorage persistence
- Animated star and meteor background
- Sections: Hero, About, Skills, Experience, Projects, Research, Education, Beyond the Code, Contact
- Project cards with multi-image carousels and modal gallery viewer
- Responsive layout for mobile, tablet, and desktop
- Contact form with toast notification feedback

## Getting Started

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── components/    # All section and UI components
├── pages/         # Home and NotFound pages
├── hooks/         # Custom hooks (use-toast)
├── lib/           # Utility functions (cn helper)
└── index.css      # Tailwind config, theme variables, custom animations
public/            # Static assets (images per section)
```
