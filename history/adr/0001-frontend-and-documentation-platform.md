# ADR-0001: Frontend and Documentation Platform

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 001-book-module-ros2
- **Context:** The user needs to set up the documentation platform for a technical book built with Docusaurus for Module 1. This decision outlines the core platform choices and structure to ensure consistency and future extensibility.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Use Docusaurus as the documentation platform, with Markdown (`.md`) files only, and place the entire documentation site inside a single top-level `frontend/` directory.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Defines the global file and folder structure
- Standardizes content format across all modules
- Simplifies future frontend expansion
- Docusaurus provides structured navigation, sidebar control, and scalable module organization while remaining Markdown-native.
- A single `frontend/` directory enforces a unified frontend boundary for the book and future modules.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

None identified

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

- Plain Markdown repository without a site generator
- MkDocs
- PDF-first or LaTeX-based workflow

<!-- Group alternatives by cluster:
     Alternative Stack A: Remix + styled-components + Cloudflare
     Alternative Stack B: Vite + vanilla CSS + AWS Amplify
     Why rejected: Less integrated, more setup complexity
-->

## References

- Feature Spec: specs/001-book-module-ros2/spec.md
- Implementation Plan: specs/001-book-module-ros2/plan.md
- Related ADRs: null
- Evaluator Evidence: null