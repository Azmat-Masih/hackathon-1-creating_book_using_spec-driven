# ADR-0008: Sensor Modalities Scope

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 introduces perception concepts. This decision defines the initial set of sensors and depth of coverage to be included.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Cover vision, depth, IMU, and lidar at a conceptual and message-structure level only.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Prevents information overload for learners.
*   Establishes a common perception vocabulary without deep dives into hardware.
*   Focuses on data semantics and ROS 2 message structures.
*   Prepares readers for later modules which might cover advanced sensor modeling.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   Readers requiring full mathematical models or calibration procedures will need external resources or later modules.
*   May leave some readers wanting more detail on specific sensor implementations.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

*   **Full mathematical models**: Include detailed mathematical descriptions of sensor physics and data processing.
    *   **Pros**: Comprehensive theoretical understanding.
    *   **Cons**: High cognitive load, distracts from ROS 2 data flow, requires strong math background.
*   **Calibration procedures**: Describe steps for calibrating various sensors.
    *   **Pros**: Practical skill development.
    *   **Cons**: Hardware-dependent, adds complexity unrelated to data flow concepts.
*   **Driver-level details**: Explain how sensor drivers interface with hardware.
    *   **Pros**: Deep understanding of sensor integration.
    *   **Cons**: Highly hardware-specific, distracts from ROS 2 messaging.

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
