# ADR-0002: Module–Chapter Structure

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 001-book-module-ros2
- **Context:** This ADR defines the consistent structure for organizing content within each module of the technical book, ensuring predictable content layout and navigation.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Each module is implemented as a top-level documentation section containing exactly three chapters, each mapped to a single Markdown file.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Constrains module scope
- Simplifies navigation and evaluation
- Establishes a repeatable pattern for future modules
- A fixed chapter count enforces consistency, predictable pacing, and uniform sidebar structure across the book.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

None identified

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

<h2>Alternatives Considered</h2>

- Single long-form module pages
- Variable chapter counts per module

<!-- Group alternatives by cluster:
     Alternative Stack A: Remix + styled-components + Cloudflare
     Alternative Stack B: Vite + vanilla CSS + AWS Amplify
     Why rejected: Less integrated, more setup complexity
-->

<h2>References</h2>

- Feature Spec: specs/001-book-module-ros2/spec.md
- Implementation Plan: specs/001-book-module-ros2/plan.md
- Related ADRs: null
- Evaluator Evidence: null