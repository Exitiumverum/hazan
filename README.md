# Team Hazan - Landing Page

A modern, premium single-page landing site for Team Hazan fitness and bodybuilding coaching, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ RTL (Right-to-Left) layout for Hebrew content
- ✅ Smooth scroll navigation
- ✅ Sticky header with mobile burger menu
- ✅ Floating WhatsApp button
- ✅ All 9 sections as specified:
  - Hero
  - Results/Transformations
  - How It Works (with accordion)
  - About Me
  - Posing Lessons
  - Not For Everyone
  - Testimonials
  - FAQ (with accordion)
  - Contact Form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update WhatsApp Number

Replace the placeholder WhatsApp number (`0000000000`) in:
- `components/WhatsAppButton.tsx` (line with `https://wa.me/0000000000`)
- `app/page.tsx` (in the Hero section button handler)

### Add Real Images

Replace placeholder image divs with actual `<Image>` components from Next.js:
- Hero section team image
- Results/Transformations section
- About Me profile image
- Posing section student images

### Update Content

All content is organized in data arrays at the top of `app/page.tsx`:
- `transformationData` - Results section
- `howItWorksData` - How It Works accordion
- `testimonialsData` - Testimonials section
- `faqData` - FAQ accordion

Simply update these arrays to modify content.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with RTL support
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Sticky navigation header
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── SectionWrapper.tsx # Reusable section wrapper
│   └── Accordion.tsx     # Accordion component
└── ...
```

## License

Private project for Team Hazan.
