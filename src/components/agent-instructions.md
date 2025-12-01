# Agent Instructions: Personal Portfolio

This document provides instructions for maintaining and developing the personal portfolio website for Vinnie Baker. The goal is to ensure consistency and adherence to the project's architecture.

---

## 1. Project Overview

- **Purpose**: A responsive, modular personal portfolio website.
- **Tech Stack**: Next.js, TypeScript, CSS Modules.
- **Key Features**:
  - Single-page architecture (`/profile`).
  - Responsive design with a mobile-friendly navigation.
  - Light/dark mode theme toggle.
  - Scrollspy for active navigation link highlighting.

---

## 2. Development Workflow

### Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Adding a New Project

Project data is managed locally within the `Projects.tsx` component.

1.  **Navigate** to `src/components/Projects.tsx`.
2.  **Locate** the `projectList` array.
3.  **Add** a new object to the array, adhering to the `Project` interface defined in `src/types/Project.ts`.

**Example Project Object:**
```typescript
{
  title: 'New Awesome Project',
  description: 'A brief but compelling description of the work.',
  tags: ['TypeScript', 'Next.js', 'Vercel'],
  repoUrl: 'https://github.com/yourusername/repo-name', // Optional
  liveUrl: 'https://project-live-url.com' // Optional
}
```

### Updating Content Sections

All content is organized into modular React components. To update a section, edit the corresponding file in `src/components/`:

- **About Me**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Certifications**: `src/components/Certifications.tsx`
- **Education**: `src/components/Education.tsx`

### Modifying Styles

- **Global Styles**: For sitewide styles (e.g., typography, theme variables), edit `src/styles/globals.css`. The light and dark mode colors are defined here using CSS variables.
- **Component Styles**: For component-specific styles, use the corresponding CSS Module file (e.g., `src/styles/Header.module.css`). This keeps styles scoped and prevents conflicts.

---

## 3. Deployment

The project is configured for deployment on Vercel.
- Connect the GitHub repository to a new Vercel project.
- Vercel will automatically build and deploy the site upon pushes to the main branch.