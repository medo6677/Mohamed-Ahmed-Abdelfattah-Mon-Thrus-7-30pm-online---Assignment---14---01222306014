<div align="center">

  <img src="public/logo.png" alt="Adasa Logo" width="100" />

# 📸 Adasa | The World of Photography

### A Modern Photography Blog & Learning Platform

  <p align="center">
    A photography blog platform providing insightful guides, professional tips, and techniques with a modern aesthetic and seamless user experience.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  </p>

</div>

---

## 🌟 Key Features

- **🎨 Modern Dark Aesthetic:** Sleek dark-mode interface built with modern web design standards, featuring glassmorphism backdrops, smooth transitions, and warm accent gradients.
- **🌐 Full RTL Support:** Native Right-to-Left (RTL) layout with tailored typography designed for seamless Arabic reading.
- **🔍 Advanced Search & Filter System:**
  - Real-time search across article titles and excerpts.
  - Multi-category filtering (Lighting, Portrait, Landscape, Gear, etc.).
  - Instant one-click filter reset with dynamic counts.
- **📄 Custom Pagination:**
  - Client-side pagination (6 articles per page).
  - Dynamic page calculation with previous/next controls and numbered navigation.
  - Conditional rendering (automatically hides when single page).
- **🔀 Display View Modes:** Instant toggle between **Grid View** and **List View** layouts.
- **🔗 SEO-Friendly Slug Routing:**
  - Dynamic clean URLs using article slugs (e.g., `/blog/mastering-golden-hour-photography`).
  - Graceful fallback for non-existent articles.
- **🔝 Automatic Scroll Restoration:** Seamless page transitions with automatic scroll-to-top on route changes and related article navigation.
- **🧩 Clean & Modular Architecture:** Decomposed into focused single-responsibility components (`FilterBar`, `BlogCard`, `Pagination`, `EmptyPosts`).

---

## 🧭 Pages & Routes

| Path          | Page              | Description                                                                                   |
| :------------ | :---------------- | :-------------------------------------------------------------------------------------------- |
| `/`           | **Home**          | Hero section, featured articles, topic exploration, latest posts, and newsletter subscription |
| `/blog`       | **Blog**          | Article directory with search, category filtering, view toggles, and pagination               |
| `/blog/:slug` | **Blog Details**  | Comprehensive article reader, author biography, table of contents, and related articles       |
| `/about`      | **About Us**      | Mission statement, core values, editorial team showcase, and contact information              |
| `*`           | **404 Not Found** | Interactive error page with quick links back to the main sections                             |

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [FontAwesome 6 / Free](https://fontawesome.com/)
- **Typography:** Google Fonts (Tajawal & Inter)
- **Data Source:** Local structured JSON dataset

---

## 📁 Project Structure

```text
myApp/
├── public/
│   ├── logo.png             # Application logo
│   └── favicon.svg          # Favicon asset
├── src/
│   ├── assets/              # Static assets and images
│   ├── data/
│   │   ├── posts.json       # Articles and categories data
│   │   └── postsService.js  # Data retrieval, filtering, and pagination helpers
│   ├── features/
│   │   ├── about/           # About page feature components (Hero, OurValues, Team, Contact)
│   │   ├── blog/            # Blog components (Filter, FilterBar, BlogCard, Pagination, EmptyPosts)
│   │   ├── home/            # Homepage feature components (Hero, Articles, Explore, New, Subscribe)
│   │   └── Post/            # Article reading view & related posts
│   ├── layout/
│   │   ├── Navbar.jsx       # Global responsive header navigation
│   │   ├── Footer.jsx       # Global footer and social channels
│   │   └── Layout.jsx       # Base layout wrapper with ScrollRestoration
│   ├── pages/               # Route entry pages (Home, Blog, BlogDetails, About, NotFound)
│   ├── App.jsx              # Router configuration and routing definitions
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind configuration & global CSS rules
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation

Clone the repository and install project dependencies:

```bash
npm install
```

### 3. Development Server

Run the local Vite development server:

```bash
npm run dev
```

### 4. Production Build

Create an optimized production bundle:

```bash
npm run build
```
