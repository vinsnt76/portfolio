# 🤖 Agent Instructions – Portfolio Project

## 🎯 Objective
Build a responsive, modular portfolio site for **Vinnie Baker** using **Next.js + TypeScript**.  
The site should showcase professional experience, projects, certifications, and contact info.

---

## 🛠 Tech Stack
- Framework: Next.js (latest)
- Language: TypeScript
- Styling: CSS Modules (or Tailwind if specified)
- Deployment: Vercel (preferred), GitHub Pages (static export)

---

## 📂 Directory Structure
src/ components/ # Reusable UI components pages/ # Next.js routes styles/ # Global + modular styles hooks/ # Custom React hooks types/ # Shared TypeScript interfaces public/assets/ # Static images, icons, downloads

---

## 🧩 Components
- `Header.tsx`: Sticky nav bar with anchor links, scrollspy, dark mode toggle, mobile menu
- `Hero.tsx`: Intro section with name, tagline, CTA
- `About.tsx`: Bio + skills summary
- `Experience.tsx`: Timeline of roles
- `Projects.tsx`: Showcase grid with links
- `Certifications.tsx`: Training + certifications
- `Education.tsx`: Academic background
- `Skills.tsx`: Technical proficiencies
- `Contact.tsx`: Email form or mailto link
- `Footer.tsx`: Social links + copyright

---

## 🧠 Rules for Gemini
- Always use **functional components** with TypeScript (`React.FC`).
- Use **interfaces** for props and data models.
- Apply **semantic HTML** (`<section>`, `<nav>`, `<header>`).
- Ensure **responsive design** (mobile-first).
- Use **CSS variables** for theming (`--bg`, `--text`).
- Implement **smooth scrolling** and `scroll-margin-top` for anchor navigation.
- Keep code modular and reusable.

---

## 🚀 Deployment Notes
- Ensure `next.config.js` supports image domains.
- Add `README.md` with setup instructions.
- Provide `npm run build && npm run start` compatibility.

## 📌 Example Prompt for Gemini
Generate a responsive Header.tsx component with sticky navigation, anchor links (#hero, #about, #experience, #skills, #projects, #contact), scrollspy highlighting, dark mode toggle using useTheme, and a mobile hamburger menu. Style with CSS Modules and semantic HTML.
