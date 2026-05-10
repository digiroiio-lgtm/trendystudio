# TRENDY STUDIO

A premium workspace & productivity lifestyle brand website built with Next.js 14, TailwindCSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **TailwindCSS** — utility-first styling
- **Framer Motion** — smooth animations
- **lucide-react** — minimal icon set

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage (8 sections)
│   ├── layout.tsx            # Root layout (Navbar, Footer, SEO)
│   ├── about/page.tsx        # About page
│   ├── collections/page.tsx  # Collections with filter/sort
│   ├── contact/page.tsx      # Contact form
│   ├── products/[slug]/      # Product detail page
│   ├── search/page.tsx       # Search
│   └── wishlist/page.tsx     # Saved items
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  # Rotating announcements
│   │   ├── Navbar.tsx           # Sticky navbar with blur
│   │   ├── Footer.tsx           # Dark minimal footer
│   │   ├── MobileMenu.tsx       # Slide-in mobile nav
│   │   └── CartDrawer.tsx       # Right slide-in cart
│   └── ui/
│       └── ProductCard.tsx      # Hover image swap, quick-add
└── lib/
    └── constants.ts             # Products, categories, nav links
```

## Design System

- **Background**: `#FAFAFA` (soft off-white)
- **Primary text**: `#0F0F0F`
- **Muted text**: `#6B7280`
- **Accent**: `#7C3AED` (purple)
- **Cards**: white, `rounded-2xl`/`rounded-3xl`, subtle shadow
- **Typography**: Inter, bold editorial headings
- **Spacing**: Generous — `py-16` to `py-24`

## Brand Positioning

TRENDY STUDIO is a **premium workspace & productivity lifestyle brand** — not a gaming store.

Target audience: creators, developers, designers, remote workers, keyboard enthusiasts, aesthetic desk setup community.
