# Basketo Landing Page

A modern, responsive landing page for **Basketo** - a B2B shopping cart plugin service that enables e-commerce on any website without the complexity of platforms like WooCommerce or Shopify.

![Basketo](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## Overview

Basketo is a lightweight widget (< 50kb) that can be added to any website to enable full e-commerce functionality in under 15 minutes. This landing page showcases all the features, integration process, pricing, and provides links to the demo shop and admin dashboard.

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Features

### Landing Page Sections

1. **Hero Section** - Eye-catching introduction with value proposition and quick integration example
2. **How It Works** - 3-step process showing simplicity of integration
3. **Features** - 8 key features displayed in an attractive grid
4. **Integration** - Live code example with copy functionality
5. **Demo** - Links to live demo shop and admin dashboard
6. **Pricing** - 4-tier pricing structure (Free, Starter, Pro, Enterprise)
7. **FAQ** - 8 common questions with accordion interface
8. **Footer** - Links, social media, and company information

### Design Highlights

- Clean, modern design with blue (#3B82F6) as primary color
- Fully responsive (mobile-first approach)
- Smooth scrolling between sections
- Interactive hover effects on cards and buttons
- Animated FAQ accordion
- Code syntax highlighting in integration examples
- Gradient backgrounds for visual appeal

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd basketo-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The landing page will be available at `http://localhost:5174` (or another port if 5174 is in use).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
basketo-landing-page/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with headline and CTA
│   │   ├── HowItWorks.tsx     # 3-step process explanation
│   │   ├── Features.tsx       # Feature grid showcase
│   │   ├── Integration.tsx    # Code example with copy button
│   │   ├── Demo.tsx           # Live demo links
│   │   ├── Pricing.tsx        # Pricing tiers
│   │   ├── FAQ.tsx            # FAQ accordion
│   │   └── Footer.tsx         # Footer with links
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles with Tailwind import
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── package.json               # Dependencies and scripts
```

## Key Components

### Hero Component
- Main headline and value proposition
- Two CTA buttons (Get Started, View Documentation)
- Embedded code snippet preview
- Gradient background for visual impact

### Integration Component
- Full code example with syntax highlighting
- Copy-to-clipboard functionality
- Step-by-step breakdown
- Customization info card

### FAQ Component
- Interactive accordion with smooth animations
- 8 comprehensive questions and answers
- Support contact section
- State management for open/closed items

### Pricing Component
- 4 pricing tiers with feature lists
- Highlighted "Most Popular" plan
- Hover effects on cards
- Clear CTAs for each tier

## Customization

### Colors

The primary color is defined in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
    },
  },
}
```

You can change this to match your brand colors.

### Content

All content is hardcoded in the respective component files. To update:

1. Edit the text, links, or features in each component
2. Update pricing tiers in `Pricing.tsx`
3. Modify FAQ questions in `FAQ.tsx`
4. Change footer links in `Footer.tsx`

## Related Projects

This landing page is part of the Basketo ecosystem:

- **Demo Shop**: `http://localhost:5175` - Live demonstration of Basketo widget
- **Admin Dashboard**: `http://localhost:5173` - Order and product management
- **Widget**: The actual Basketo JavaScript plugin (referenced in code examples)

## SEO

The landing page includes:

- Semantic HTML5 structure
- Meta description in `index.html`
- Descriptive page title
- Fast loading times (< 50kb gzipped)
- Mobile-optimized responsive design
- Accessibility features

## Performance

- Lightweight bundle size
- Code splitting with Vite
- Optimized Tailwind CSS (unused styles purged in production)
- Fast Time to Interactive (TTI)
- Lazy loading where applicable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Notes

- Uses `import type` for TypeScript type imports (best practice)
- No complex state management needed (uses local `useState` where needed)
- Focus on visual appeal and marketing message
- Production-ready code with proper TypeScript typing

## License

Copyright © 2026 Basketo. All rights reserved.

## Support

For questions or support:
- Email: support@basketo.com
- Live Chat: Available on website
- Documentation: Linked in footer

---

**Built with React, TypeScript, and TailwindCSS** ⚡
