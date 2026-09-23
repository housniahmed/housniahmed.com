# housniahmed.com

> **Personal AI Engineering Hub** — portfolio, professional brand, case studies, research, AI systems, and opportunity engine for Ahmed El-Housni.

**Live domain:** https://housniahmed.com

## Vision

This repository is the **source of truth** for the design, content, architecture, development, deployment, and continuous evolution of [housniahmed.com](https://housniahmed.com).

The website is intentionally designed as more than a traditional portfolio. It is a personal professional hub that connects:

- **Career:** AI engineering positioning, resume, selected work, and recruiter-facing proof.
- **Business:** AI engineering, AI automation, and AI prototyping opportunities.
- **Authority:** technical writing, applied research, open-source work, and public proof of work.
- **Projects:** AHMED AI OS, digital products, AI applications, and selected engineering/research work.

## Core positioning

> **AI Engineer building intelligent systems, automations and digital products.**

Supporting narrative:

> I combine engineering, AI and entrepreneurship to build practical systems that solve real-world problems.

## Primary audiences

1. **Recruiters / hiring managers** — evidence of AI engineering capability and relevant experience.
2. **Founders / businesses** — AI engineering, automation, and prototyping opportunities.
3. **Technical peers / CTOs** — architecture, implementation, evaluation, GitHub projects, and AI OS work.
4. **Researchers / engineering peers** — doctoral research, experimental work, and technical publications.
5. **Potential collaborators** — projects, ventures, open-source work, and professional contact.

## Product principles

- **Proof over claims:** projects and case studies should demonstrate capability.
- **Clarity over decoration:** avoid visual effects that do not improve comprehension.
- **Truth over marketing:** never invent metrics, results, technologies, publications, or experience.
- **Focused positioning:** present the future professional direction clearly while using past experience as supporting evidence.
- **Versioned evolution:** significant decisions, content, architecture, and milestones remain traceable through Git history.
- **International first:** English is the primary public language for the initial version.

## Planned information architecture

```
/
├── /work
│   ├── /work/ahmed-ai-os
│   ├── /work/storykids
│   ├── /work/ai-engineering
│   └── /work/research
├── /ai-os
├── /research
├── /writing
├── /about
├── /services
├── /resume
├── /contact
└── /now
```

## Core website funnel

```
LinkedIn ─┐
GitHub   ─┼──> housniahmed.com ──> relevant proof ──> conversation ──> opportunity
SEO      ─┘
```

The site is therefore optimized for **qualified opportunities generated**, not vanity traffic.

## Signature project

**AHMED AI OS** is planned as the site's flagship technical project.

It should document, where implemented and verified:

- memory
- knowledge / knowledge graph
- agent orchestration
- planning
- workflow automation
- tool execution
- evaluation
- observability
- security
- deployment

No architecture component will be presented as implemented until it actually exists and is documented.

## Technology direction

The initial implementation direction is:

- **Next.js + TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **MDX** for content
- **GitHub** for source control and project evidence
- **Cloudflare** for domain / DNS
- **Vercel** as the preferred deployment target
- **Google Search Console** for search monitoring
- lightweight privacy-conscious analytics

This is a target architecture, not a claim that all components are already implemented.

## Repository documentation

- [Project vision](docs/01-project-vision.md)
- [Information architecture](docs/02-information-architecture.md)
- [Content strategy](docs/03-content-strategy.md)
- [Opportunity funnels](docs/04-opportunity-funnels.md)
- [Technical architecture](docs/05-technical-architecture.md)
- [Roadmap](docs/06-roadmap.md)
- [Project status](docs/07-project-status.md)
- [Decision log](docs/DECISIONS.md)
- [Content inventory](docs/CONTENT-INVENTORY.md)
- [Contributing / workflow](CONTRIBUTING.md)

## Status

**Phase 0 — Strategy & architecture**

The strategic blueprint has been defined. The repository is now the canonical versioned workspace for implementation.

Next milestone: create the production-ready site foundation and implement the first public homepage.
