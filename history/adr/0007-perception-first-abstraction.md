# ADR-0007: Perception-First Abstraction

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 introduces how robots perceive and interpret the physical world. This decision guides the approach to explaining perception concepts.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Introduce perception concepts through logical data flow rather than physical sensor wiring.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Maintains platform independence.
*   Allows learners to reason about perception as an information system.
*   Focuses on data semantics, message flow, and interpretation layers.
*   Reduces cognitive load by separating conceptual understanding from hardware specifics.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   Readers seeking immediate visual demos or hardware integration must wait for later modules.
*   May require additional context in later modules when physical hardware is introduced.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

*   **Hardware-first sensor setup**: Focus on wiring, drivers, and physical integration.
    *   **Pros**: Practical, immediate hardware relevance.
    *   **Cons**: Platform-dependent, steeper learning curve, distracts from core perception concepts.
*   **Vendor-specific sensor walkthroughs**: Focus on specific sensor models (e.g., Intel RealSense, Hokuyo LiDAR).
    *   **Pros**: Concrete examples.
    *   **Cons**: Limited applicability, quickly outdated, ties learning to specific products.

<!-- Group alternatives by cluster:
     Alternative Stack A: Remix + styled-components + Cloudflare
     Alternative Stack B: Vite + vanilla CSS + AWS Amplify
     Why rejected: Less integrated, more setup complexity
-->

## References

- Feature Spec: specs/002-ros2-book-module-2/spec.md
- Implementation Plan: specs/002-ros2-book-module-2/plan.md
- Related ADRs: None
- Evaluator Evidence: None
