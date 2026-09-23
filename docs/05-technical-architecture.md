# Technical Architecture

## Target architecture

The implementation target is deliberately simple and developer-friendly.

```
Browser
  ↓
Next.js
  ├── UI components
  ├── MDX content
  ├── metadata / structured data
  └── analytics
  ↓
Static / server-rendered pages
  ↓
Vercel
  ↓
Cloudflare DNS
```

## Proposed stack

| Layer | Target |
|---|---|
| Framework | Next.js + TypeScript |
| UI | Tailwind CSS |
| Components | shadcn/ui |
| Content | MDX |
| Version control | GitHub |
| Deployment | Vercel |
| Domain / DNS | Cloudflare |
| Search visibility | Google Search Console |
| Analytics | Lightweight privacy-conscious analytics |

## Principles

### Performance

Prefer:

- server-rendered / static content where practical
- optimized images
- minimal JavaScript
- progressive enhancement
- accessible components

### SEO

Every important page should have:

- unique title
- meta description
- canonical URL
- Open Graph metadata
- sitemap
- robots.txt
- appropriate structured data

Potential structured data:

- Person / ProfilePage
- WebSite
- Article
- BreadcrumbList

The exact schema used must match the actual page content.

### Accessibility

Target:

- semantic HTML
- keyboard navigation
- useful focus states
- sufficient contrast
- meaningful alt text
- reduced-motion support

### Security

Do not expose secrets in the repository.

Use environment variables for:

- API keys
- private endpoints
- analytics secrets
- external service credentials

## AI Portfolio Assistant

Planned for a later version.

Requirements:

- grounded only in approved portfolio content
- explicit source references
- no invented experience
- no unsupported claims
- clear fallback when information is unavailable

The assistant is a utility, not a substitute for well-structured content.

## Deployment model

Initial target:

```
GitHub
  ↓
Vercel
  ↓
housniahmed.com
```

Cloudflare remains the DNS / domain control layer.

## Important distinction

This document defines the **target architecture**. It does not claim that each component is implemented.
