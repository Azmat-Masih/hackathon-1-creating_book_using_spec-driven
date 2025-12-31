# ADR-0010: Python-Oriented Perception Examples

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 uses ROS 2 for perception. This decision specifies the programming language for examples.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Use Python-based examples (`rclpy`) to illustrate perception data handling.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Aligns with AI-agent workflows and the broader AI/ML ecosystem.
*   Maintains continuity from Module 1, where `rclpy` was introduced.
*   Results in lightweight and explanatory code examples, reducing cognitive overhead for learners.
*   Lower barrier to entry for many AI/ML engineers and advanced students.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   C++ users might find the examples less directly applicable to their primary language.
*   Performance-critical applications, often written in C++, are not directly addressed by these examples.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

*   **C++ pipelines**: Use C++ examples (`rclcpp`) for perception data handling.
    *   **Pros**: Performance-critical applications often use C++, might appeal to systems-level robotics engineers.
    *   **Cons**: Higher barrier to entry for many AI/ML engineers, more verbose code for examples, breaks continuity with Module 1's Python focus.
*   **Mixed-language examples**: Provide examples in both Python and C++.
    *   **Pros**: Caters to a wider audience, offers insights into both ecosystems.
    *   **Cons**: Doubles content and increases maintenance burden, could cause cognitive load by switching between languages for the same concept.

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
