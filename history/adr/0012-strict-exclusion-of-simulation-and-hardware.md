# ADR-012: Strict Exclusion of Simulation and Hardware

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-24
- **Feature:** 002-ros2-book-module-2
- **Context:** Module 2 focuses on fundamental perception concepts and data flow within ROS 2. This decision clarifies what will *not* be covered to maintain module purity and avoid premature complexity.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Exclude Gazebo, Isaac Sim, OpenCV pipelines, and real sensor setup.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

*   Preserves the module's purity, focusing solely on perception concepts and ROS 2 data flow.
*   Avoids premature complexity and potential overwhelm for learners by deferring simulation and hardware specifics.
*   Ensures that later modules (e.g., Module 3+) remain necessary and meaningful for covering these topics in detail.
*   Allows the module to be platform-agnostic for perception fundamentals.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

*   Readers seeking immediate hands-on experience with simulation or real hardware will need to wait for subsequent modules.
*   Might require careful explanation to manage expectations, especially for those eager to dive into practical simulation setups.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

<h2>Alternatives Considered</h2>

*   **Early simulation-based perception demos**: Introduce simulation tools like Gazebo or Isaac Sim to demonstrate perception in a virtual environment.
    *   **Pros**: Provides immediate visual feedback and a more "complete" experience, can be engaging for visual learners.
    *   **Cons**: Adds significant setup overhead, shifts focus from core perception concepts to tool usage, introduces complexity that might overwhelm early learners, requires dedicated computational resources.

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
