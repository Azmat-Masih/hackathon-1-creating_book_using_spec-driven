# ADR-0005: Strict Scope Isolation

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 001-book-module-ros2
- **Context:** This ADR defines explicit boundaries for the content of Module 1, preventing the introduction of topics reserved for later modules and ensuring a focused learning experience on fundamentals.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Explicitly exclude the following from Module 1:
- Gazebo or Unity simulations
- NVIDIA Isaac Sim or Isaac ROS
- Hardware setup or purchasing guidance

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Ensures later modules retain clear purpose
- Prevents redundancy and scope creep
- Keeps Module 1 focused on fundamentals
- Strict scope isolation prevents content overlap and preserves clean boundaries between conceptual foundations and later applied modules.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

None identified

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

<h2>Alternatives Considered</h2>

- Early simulation previews
- Introductory hardware walkthroughs

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