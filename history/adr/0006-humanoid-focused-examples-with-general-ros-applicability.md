# ADR-0006: Humanoid-Focused Examples with General ROS Applicability

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 001-book-module-ros2
- **Context:** This ADR outlines the choice of robotic examples for Module 1, balancing engaging narrative context with the need to present universally applicable ROS 2 concepts.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Use humanoid robots as the primary narrative context while keeping all ROS 2 concepts applicable to general robotic systems.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Influences examples and terminology
- Avoids over-specialization
- Maintains reusability of concepts
- Humanoids provide a compelling Physical AI context without sacrificing ROS 2 generality.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

None identified

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

<h2>Alternatives Considered</h2>

- Generic robot-only framing
- Humanoid-exclusive technical depth

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