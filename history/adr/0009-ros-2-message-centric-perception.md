# ADR-0009: ROS 2 Message-Centric Perception

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 focuses on perception systems within the ROS 2 framework. This decision defines the primary lens through which perception will be presented.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Frame perception systems around ROS 2 messages and topics, not algorithms.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Reinforces the importance of ROS 2 as the central communication backbone.
*   Positions perception as the transport and interpretation of signals within ROS 2.
*   Keeps the focus on the system architecture rather than deep algorithmic details.
*   Allows for descriptive references to algorithms without requiring implementation.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   Readers seeking in-depth algorithmic explanations might find this approach less satisfying.
*   Might require supplementary resources for a deeper understanding of specific perception algorithms.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

*   **Algorithm-first approach (SLAM, CV pipelines, filtering)**: Focus on the underlying algorithms for processing sensor data.
    *   **Pros**: Deep dive into the "how" of perception, appeals to readers interested in computer vision/machine learning.
    *   **Cons**: Can quickly become mathematically complex, shifts focus from ROS 2's role, might require extensive prerequisite knowledge, making the module less accessible.

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
