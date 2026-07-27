# Nestly

Nestly is a short-term rental landing page — a single-page marketing site with a
full-screen video hero, floating search bar, featured listings, and everything else
needed to introduce a home-rental brand.

## Features

- **Full-screen video hero** — autoplaying, looping background video with no dimming
  overlay, a "liquid glass" navbar, and a character-by-character animated headline.
- **Floating search bar** — Location / Check-in / Check-out / Guests fields in a white
  card that overlaps the bottom edge of the hero, Airbnb-style.
- **Featured Stays** — responsive grid of listing cards (photo, title, location,
  rating, price per night).
- **How it works** — 3-step Search → Book → Stay overview with icon badges.
- **Testimonials** — guest reviews with star ratings.
- **Footer** — brand blurb, link columns (Company / Support / Legal), and social icons.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Tailwind CSS](https://tailwindcss.com/) (v3) for styling
- [lucide-react](https://lucide.dev/) for icons
- [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) as the global typeface

## Project structure

```
vex-hero/
├── index.html                  # Google Fonts link + root HTML shell
├── tailwind.config.js          # Tailwind theme (Inter font family)
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Page composition (Hero + sections)
│   ├── index.css               # Global styles, .liquid-glass utility class
│   └── components/
│       ├── Hero.tsx             # Video background, navbar, hero copy/buttons
│       ├── AnimatedHeading.tsx  # Character-by-character text entrance animation
│       ├── FadeIn.tsx           # Reusable delayed fade-in wrapper
│       ├── SearchBar.tsx        # Floating booking search card
│       ├── FeaturedListings.tsx # Listing cards grid
│       ├── HowItWorks.tsx       # 3-step process section
│       ├── Testimonials.tsx     # Guest review cards
│       └── Footer.tsx           # Site footer
└── package.json
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- The hero video is loaded from an external CDN URL (see `VIDEO_URL` in
  `src/components/Hero.tsx`) — swap this out for your own asset as needed.
- Featured listing photos are hotlinked from Unsplash for demo purposes.
