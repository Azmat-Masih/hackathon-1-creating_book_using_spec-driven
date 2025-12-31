# Tasks: Landing Page - Humanoid AI Book

**Branch**: `001-book-landing-page` | **Date**: December 30, 2025 | **Plan**: /specs/001-book-landing-page/plan.md

## Task Dependencies & Parallel Execution

This section outlines the recommended order of user story completion and identifies opportunities for parallel development.

### User Story Completion Order

1.  **User Story 1 (P1)**: Discovering Book's Identity
2.  **User Story 2 (P1)**: Understanding Book's Content and Learning Path
3.  **User Story 3 (P2)**: Engaging with the Book

### Parallel Execution Examples

-   **Development of individual section components** (e.g., HomepageHero, HomepageBookCovers) can happen in parallel, provided their API contracts (props) are well-defined.
-   **Sourcing and optimizing imagery assets** can be done in parallel with component development.
-   **Drafting content text** for various sections can happen in parallel with UI development.

## Implementation Strategy

We will adopt an iterative development approach, focusing on implementing the core identity (Hero Section) first as part of US1. Subsequent user stories will build upon this foundation, adding more content sections and ensuring navigability. Each user story will aim for independent testability to facilitate iterative development and validation.

---

## Phase 1: Setup & Initial Research

Goal: Prepare the Docusaurus environment and understand the homepage override mechanism.

- [x] T001 Navigate to the Docusaurus frontend directory (frontend/)
- [x] T002 Install Docusaurus project dependencies (npm install or yarn install) in frontend/
- [x] T003 [P] Start Docusaurus development server (npm run start or yarn start) in frontend/
- [x] T004 [P] Verify current sidebar state (Module 4 should be missing or incorrectly rendered)
- [x] T005 Research best practices for custom Docusaurus homepage implementation.

## Phase 2: Foundational Components & Assets

Goal: Create the main landing page component and prepare initial assets.

- [x] T006 Create or modify `frontend/src/pages/index.tsx` to serve as the custom landing page.
- [x] T007 Design and implement base `Layout` for the landing page, inheriting from `@theme/Layout` in `frontend/src/pages/index.tsx`.
- [x] T008 Source "real humanoid robot imagery" for the Hero Section and place it in `frontend/static/img/humanoid-hero-image.[png/jpg/svg]`.
- [x] T009 Optimize the sourced image for web performance in `frontend/static/img/humanoid-hero-image.[png/jpg/svg]`.
- [x] T010 Create `frontend/src/components/HomepageHero/index.tsx` component for the Hero Section.
- [x] T011 Implement basic styling for `HomepageHero` in `frontend/src/components/HomepageHero/HomepageHero.module.css`.

## Phase 3: User Story 1 - Discovering Book's Identity (P1)

Goal: Implement the Hero Section to clearly communicate the book's identity.
Independent Test: Verify the Hero Section visually displays the book title, subtitle, and mission statement with correct imagery.

- [x] T012 [US1] Implement Hero Section content in `HomepageHero` component: Book title "Humanoid AI", subtitle, and one-sentence mission statement in `frontend/src/components/HomepageHero/index.tsx`.
- [x] T013 [US1] Integrate the sourced "real humanoid robot imagery" into the `HomepageHero` component in `frontend/src/components/HomepageHero/index.tsx`.
- [x] T014 [US1] Implement a primary "Start Reading" CTA within the `HomepageHero` component in `frontend/src/components/HomepageHero/index.tsx`.
- [x] T015 [US1] Test `HomepageHero` component rendering and initial visual identity locally in `frontend/src/pages/index.tsx`.

## Phase 4: User Story 2 - Understanding Book's Content and Learning Path (P1)

Goal: Implement sections providing an overview of the book's content and learning progression.
Independent Test: Verify "What This Book Covers" and "Learning Path" sections are displayed with accurate information.

- [x] T016 [P] [US2] Create `frontend/src/components/HomepageBookCovers/index.tsx` for "What This Book Covers" section.
- [x] T017 [P] [US2] Implement content for "What This Book Covers" (ROS 2, Simulation, AI Robot Brain, VLA, Capstone) in `frontend/src/components/HomepageBookCovers/index.tsx`.
- [x] T018 [P] [US2] Create `frontend/src/components/HomepageLearningPath/index.tsx` for "Learning Path" section.
- [x] T019 [P] [US2] Implement content for "Learning Path" (clear 4-module progression) in `frontend/src/components/HomepageLearningPath/index.tsx`.
- [x] T020 [US2] Integrate `HomepageBookCovers` and `HomepageLearningPath` into `frontend/src/pages/index.tsx`.

## Phase 5: User Story 3 - Engaging with the Book (P2)

Goal: Ensure the "Start Reading" CTA correctly routes and additional audience/differentiation sections are present.
Independent Test: Click the "Start Reading" CTA and verify redirection to `/docs/`, and visually confirm other sections.

- [x] T021 [US3] Configure "Start Reading" CTA to route to `/docs/` in `frontend/src/components/HomepageHero/index.tsx`.
- [x] T022 [P] [US3] Create `frontend/src/components/HomepageAudience/index.tsx` for "Who This Book Is For" section.
- [x] T023 [P] [US3] Implement content for "Who This Book Is For" (Students, Engineers, Researchers, Builders) in `frontend/src/components/HomepageAudience/index.tsx`.
- [x] T024 [P] [US3] Create `frontend/src/components/HomepageWhyDifferent/index.tsx` for "Why This Book Is Different" section.
- [x] T025 [P] [US3] Implement content for "Why This Book Is Different" (Physical AI, Sim-to-real, no toy examples, industry stack) in `frontend/src/components/HomepageWhyDifferent/index.tsx`.
- [x] T026 [US3] Integrate `HomepageAudience` and `HomepageWhyDifferent` into `frontend/src/pages/index.tsx`.
- [x] T027 [US3] Test CTA routing to `/docs/` and overall navigation locally.

## Phase 6: Polish & Cross-Cutting Concerns

Goal: Final validation, visual refinement, responsiveness, and documentation.

- [x] T028 Ensure all components support neutral dark/light mode compatibility by adjusting CSS in `frontend/src/components/*/styles.module.css`.
- [x] T029 Minimize generic Docusaurus branding emphasis through styling adjustments in `frontend/src/pages/index.tsx` or global CSS in `frontend/src/css/custom.css`.
- [x] T030 Perform responsiveness testing across various screen sizes for `frontend/src/pages/index.tsx`.
- [x] T031 Run full Docusaurus build (`npm run build` or `yarn build`) in frontend/ and verify zero warnings or errors.
- [ ] T032 Update `quickstart.md` with final instructions and troubleshooting tips for the landing page in specs/001-book-landing-page/quickstart.md
```