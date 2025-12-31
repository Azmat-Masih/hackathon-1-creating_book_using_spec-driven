# ADR-011: AI Agent Interpretation Layer

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 introduces perception data flow which ultimately feeds into AI agents for robotic cognition. This decision clarifies the role of AI agents in the perception stack.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Explicitly introduce AI agents as perception consumers, not sensor drivers.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Establishes a clean and logical separation between sensing (data acquisition and initial processing) and cognition (AI agent interpretation and decision-making).
*   Prepares the reader for more advanced autonomy and decision-making modules by clearly defining the AI agent's input.
*   Reinforces the "nervous system" analogy where sensors provide input to the brain (AI agents).

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   Might require careful explanation to ensure readers understand how data transitions from raw sensor output to a format consumable by AI agents.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

*   **Treat AI as an external post-processing system**: View AI as a black box that takes raw sensor data and outputs decisions, without emphasizing its role within the data flow.
    *   **Pros**: Simpler initial conceptualization, avoids complex integration details at an early stage.
    *   **Cons**: Blurs the lines between perception and cognition, may lead to less integrated or less robust AI solutions in practice, less aligned with the "nervous system" metaphor of the book.

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
