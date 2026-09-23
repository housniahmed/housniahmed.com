# Contribution & Project Workflow

This repository is primarily maintained as a personal project, but it follows an engineering workflow so the site's evolution remains traceable.

## Source of truth

The repository is the canonical source for:

- website code
- architecture decisions
- content drafts
- case-study structures
- roadmap
- project status
- design/system documentation

## Branching

Preferred branches:

- `main` — stable, deployable state.
- `feat/<name>` — new feature or page.
- `content/<name>` — content-only changes.
- `docs/<name>` — documentation and planning.
- `fix/<name>` — bug fixes.

Small documentation corrections may be committed directly to `main`.

## Commit convention

Use concise, imperative messages with a conventional prefix where useful:

- `feat:` new functionality
- `fix:` correction
- `content:` content changes
- `docs:` documentation
- `refactor:` structural change without intended behavior change
- `chore:` maintenance
- `perf:` performance
- `seo:` search optimization

Examples:

```text
feat: add homepage hero
content: define AI OS project narrative
docs: update information architecture
seo: add profile page structured data
```

## Evidence rule

Never add unsupported claims.

Examples of claims requiring verification before publication:

- quantitative business results
- project performance
- publication status
- client names
- technology used in a project
- production/deployment status
- certifications
- awards
- experimental results

When evidence is missing, label the information as planned, in progress, or unverified.

## Content lifecycle

```
Idea
  ↓
Draft
  ↓
Reviewed
  ↓
Published
  ↓
Measured
  ↓
Updated
```

## Change discipline

Large architectural changes should be documented in [DECISIONS.md](docs/DECISIONS.md).

Every meaningful milestone should update [project status](docs/07-project-status.md) and, when relevant, the roadmap.
