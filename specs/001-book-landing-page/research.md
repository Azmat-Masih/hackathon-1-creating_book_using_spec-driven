# Research Findings: Landing Page - Humanoid AI Book

**Branch**: `001-book-landing-page` | **Date**: December 30, 2025 | **Plan**: /specs/001-book-landing-page/plan.md

## 1. Docusaurus Custom Homepage Implementation

### 1.1 Decision on Homepage Component

-   **Decision**: The landing page will be implemented as a custom React component, typically located at `frontend/src/pages/index.tsx`. This allows full control over the layout, content, and integration of various sections as required by the specification.
-   **Rationale**: Docusaurus allows overriding the default homepage with a custom React component, providing the flexibility needed to meet the specific design and content requirements for a professional, book-centric landing page, including multiple sections and custom visual identity.
-   **Alternatives Considered**: Modifying existing Docusaurus theme components - Rejected as this could introduce unwanted dependencies on theme updates and make maintaining the specific layout challenging. Using a standard Markdown page - Rejected as it offers insufficient control over complex layouts and interactive elements.

### 1.2 Asset Management for Visuals

-   **Decision**: New robotics-themed imagery will be placed in `frontend/static/img/` and referenced within the React components. The clarification specifies "real humanoid robot imagery."
-   **Rationale**: The `static` directory is the standard location in Docusaurus for assets that are served directly. This ensures proper loading and management of images.
-   **Alternatives Considered**: Embedding base64 images directly in components - Rejected due to increased file size and reduced readability. Hot-linking external images - Rejected for performance, reliability, and ownership reasons.

### 1.3 CSS Styling Approach

-   **Decision**: Styling for the custom homepage will primarily use CSS Modules (e.g., `*.module.css`) for component-specific styling, consistent with existing Docusaurus component patterns. Global styles can be adjusted in `frontend/src/css/custom.css` if necessary, but sparingly.
-   **Rationale**: CSS Modules provide scoped styling, preventing conflicts and promoting maintainability. This aligns with modern React development practices and Docusaurus's default setup.
-   **Alternatives Considered**: Inline styles, global CSS without modules - Rejected for maintainability, potential for conflicts, and lack of component encapsulation.

## 2. Unresolved Clarifications from Plan.md

No explicit `NEEDS_CLARIFICATION` markers were identified in the `plan.md` in this iteration. Technical choices were made based on direct mentions in the feature specification and common, well-established practices in the Docusaurus framework, and further refined by the clarifications received during the `/sp.clarify` phase.

---
