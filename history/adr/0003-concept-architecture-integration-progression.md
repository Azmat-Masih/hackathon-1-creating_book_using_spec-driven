# ADR-0003: Concept → Architecture → Integration Progression

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 001-book-module-ros2
- **Context:** This ADR establishes the pedagogical flow for Module 1, guiding readers from foundational concepts through architectural understanding to practical integration, optimizing the learning experience.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Chapters within Module 1 must follow a strict progression:
1. Conceptual foundations
2. ROS 2 communication architecture
3. Practical AI-to-robot integration

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Dictates chapter ordering
- Influences depth and placement of technical details
- Prevents premature exposure to advanced topics
- This progression minimizes cognitive load for readers new to ROS 2 and Physical AI while building durable conceptual understanding.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

None identified

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

<h2>Alternatives Considered</h2>

- Code-first learning approach
- Hardware-first or simulation-first ordering

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