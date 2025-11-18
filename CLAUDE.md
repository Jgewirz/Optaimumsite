# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OptAImum Consulting website - A high-performance Next.js 15 monorepo for AI consulting services. The site focuses on conversion optimization, performance (<200ms TTFB), and showcasing AI automation solutions for SMBs.

## Architecture

### Monorepo Structure
- **Root**: npm workspace configuration managing apps and packages
- **apps/web**: Main Next.js 15 application (App Router)
- **packages/**: Shared packages (future: cms, email-templates, config)

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS + shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Analytics**: PostHog + Google Analytics 4
- **Email**: Resend with React Email templates
- **Calendar**: Cal.com/Calendly integration
- **Deployment**: Vercel Edge Network

## Essential Commands

### Development
```bash
# Start development server (from root)
npm run dev

# Start from apps/web directory
cd apps/web && npm run dev

# Run with specific environment
npm run dev -- --port 3001
```

### Building & Production
```bash
# Build for production
npm run build

# Start production server
npm run start

# Analyze bundle size
cd apps/web && npm run analyze
```

### Testing & Quality
```bash
# Run linting across all workspaces
npm run lint

# TypeScript type checking
npm run type-check

# Run tests
cd apps/web && npm run test

# E2E tests with Playwright
cd apps/web && npm run test:e2e

# Format code with Prettier
cd apps/web && npm run format
```

### Deployment & Infrastructure
```bash
# Generate sitemap
cd apps/web && npm run sitemap

# Build and deploy to Vercel (automatic via GitHub)
vercel --prod
```

## Key Architectural Patterns

### Route Groups
The app uses Next.js route groups for organization:
- **(site)**: Public-facing pages (home, solutions, pricing)
- **(legal)**: Legal/compliance pages (terms, privacy, DPA)
- **api**: API routes for forms, webhooks, analytics

### Component Architecture
```
components/
├── ui/          # Base shadcn/ui components (Button, Card, Badge)
├── sections/    # Page sections (Hero, CTABand, ValueGrid)
├── navigation/  # Header, NavBar, mobile menu
├── metrics/     # Performance/impact visualizations
├── booking/     # Calendar integration components
└── analytics/   # Tracking providers (PostHog, GA4)
```

### Data Flow
1. **Content**: Static content in `content/*.ts` files
2. **Forms**: Client-side validation → API route → Resend email
3. **Analytics**: Event tracking via PostHog + GA4 providers
4. **Booking**: Embedded Cal.com/Calendly widgets

## Performance Optimizations

### Critical Rendering Path
- Font preloading with Next/Font
- Image optimization via Next/Image
- Route prefetching enabled
- Static generation for marketing pages
- Dynamic imports for below-fold components

### Security Headers
Configured in `next.config.js`:
- CSP with strict source allowlisting
- XSS, clickjacking, MIME type protections
- HTTPS enforcement via Vercel

## Environment Variables

### Required for Development
```bash
# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=OptAImum Consulting

# Analytics (optional for dev)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_XXXXXXXXXX

# Email (required for contact form)
RESEND_API_KEY=re_XXXXXXXXXX
FROM_EMAIL=hello@optaimum.com
NOTIFICATION_EMAIL=team@optaimum.com

# Calendar booking
NEXT_PUBLIC_CAL_LINK=optaimum/discovery-call
```

### Environment Files
- `.env`: Root environment variables
- `apps/web/.env.local`: Web app specific (preferred)

## API Routes

### Contact Form Handler
**Route**: `/api/contact`
- Validates input with Zod schema
- Sends notification email via Resend
- Tracks conversion event
- Rate limited to prevent abuse

## Deployment Considerations

### Vercel Configuration
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `apps/web/.next`
- **Install Command**: `npm install`

### Performance Targets
- TTFB: <200ms (p95)
- LCP: <2.5s
- Lighthouse Score: 95+

## Common Patterns

### Creating New Pages
1. Add route in `app/(site)/[page]/page.tsx`
2. Export metadata for SEO
3. Use sections from `components/sections/`
4. Track page views in analytics

### Adding UI Components
1. Check shadcn/ui registry first
2. Install via: `npx shadcn-ui@latest add [component]`
3. Customize in `components/ui/`
4. Use `cn()` utility for className merging

### Form Implementation
```typescript
// Use React Hook Form + Zod
const schema = z.object({
  email: z.string().email(),
  // ... fields
})

// In component
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema)
})
```

### Email Templates
Create in `emails/` using React Email components:
- Use `@react-email/components`
- Test with `npm run email:dev`
- Deploy via Resend API

## Code Organization Principles

### File Naming
- Components: PascalCase (`Hero.tsx`)
- Utilities: camelCase (`utils.ts`)
- API routes: lowercase (`route.ts`)
- Content: kebab-case (`pricing-tiers.ts`)

### Import Aliases
- `@/components` → `apps/web/components`
- `@/lib` → `apps/web/lib`
- `@/styles` → `apps/web/styles`

### TypeScript Conventions
- Strict mode enabled
- Interface over type for objects
- Explicit return types for functions
- Zod schemas for runtime validation