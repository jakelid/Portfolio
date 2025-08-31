# CS Portfolio — React + Vite (GitHub Pages)

A unique, multi‑section portfolio template built with **React + Vite** and designed to deploy on **GitHub Pages** using **GitHub Actions**. It’s opinionated, fast, and easy to customize.

## ✨ Features
- One‑page layout with sticky nav and smooth scroll (no router headaches on Pages)
- Sections: Hero, About, Skills, Projects, Experience, Coursework, Achievements, Contact
- Componentized cards, badges, and theme toggle (dark/light, saved in localStorage)
- Clean CSS with CSS variables; no UI framework required
- GitHub Pages deploy workflow included (works for any repo name automatically)

## 🧱 Structure
```
.
├─ public/
├─ src/
│  ├─ components/
│  ├─ sections/
│  ├─ data/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .github/workflows/deploy.yml
├─ index.html
├─ package.json
└─ vite.config.js
```

## 🛠️ Local dev
```bash
npm install
npm run dev
```

## 🚀 Deploy to GitHub Pages
1. Create a new GitHub repository and push this project.
2. Ensure the default branch is `main`.
3. The included workflow **.github/workflows/deploy.yml** will build and deploy automatically on every push to `main`.
4. In the repo settings → **Pages**, ensure the **Source** is set to **GitHub Actions** (usually automatic after first deploy).

> The workflow sets `REPO_NAME` from the repository name and Vite uses it for the correct base path — no manual edits required.

## 🧩 Customize
- Update `src/data/site.js` and `src/data/projects.js`
- Replace profile links in `src/components/Navbar.jsx` and email in `src/sections/Contact.jsx`
- Drop your `resume.pdf` into the project root (or change the link in Hero)

## 🔒 Notes
- Contact form uses a `mailto:` fallback to avoid a backend. For production, wire up EmailJS or Formspree.
- If you want a multipage site, prefer hash‑based routing or add a `404.html` redirect for Pages.

MIT License
