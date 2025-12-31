# Feature Specification: Landing Page - Humanoid AI Book

**Feature Branch**: `001-book-landing-page`
**Created**: December 30, 2025
**Status**: Draft
**Input**: User description: "# Landing Page Specification — Humanoid AI Book ## Purpose Define a professional, book-centric landing page for the Docusaurus site that clearly communicates the identity, scope, and ambition of the **Humanoid AI Book**. The landing page serves as the **front door** to the book and must reflect: - Physical AI - Humanoid Robotics - Vision-Language-Action systems - Academic + industry credibility --- ## Product Identity **Book Title:** Humanoid AI **Subtitle:** Physical AI, Embodied Intelligence & Autonomous Humanoid Systems **Primary Audience:** - Robotics students - AI engineers transitioning to robotics - Researchers in embodied intelligence - Advanced learners (graduate-level+) --- ## Core Messaging ### Primary Value Proposition > A complete, end-to-end guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence. ### Supporting Themes - Physical AI & Embodied Intelligence - Simulation → AI Brain → Real-World Deployment - Industry-grade tooling (ROS 2, Gazebo, Isaac, LLMs) --- ## Landing Page Sections (Required) 1. **Hero Section** - Book title: *Humanoid AI* - Subtitle emphasizing Physical AI - One-sentence mission statement - Primary CTA: “Start Reading” 2. **What This Book Covers** - ROS 2 (Robot Nervous System) - Simulation & Digital Twins - AI Robot Brain (Isaac) - Vision-Language-Action - Autonomous Humanoid Capstone 3. **Learning Path** - Clear 4-module progression - Visual or conceptual flow 4. **Who This Book Is For** - Students - Engineers - Researchers - Builders 5. **Why This Book Is Different** - Focus on Physical AI - Sim-to-real mindset - No toy examples - Industry-aligned stack 6. **Visual Identity** - Robotics-themed imagery - Neutral dark/light compatibility - No generic Docusaurus branding emphasis --- ## Non-Goals - Marketing fluff - Blog-style homepage - Framework promotion (React/Docusaurus) - Overloading with technical detail --- ## Acceptance Criteria - Homepage headline says **Humanoid AI** - Visuals align with robotics & embodied intelligence - CTA routes to documentation - No module content is altered - Landing page feels like a **serious technical book**"

## User Scenarios & Testing

### User Story 1 - Discovering Book's Identity (Priority: P1)

As a potential reader, I want to land on the homepage and quickly understand that it's about a serious technical book on Humanoid AI, so that I can decide if it's relevant to my interests.

**Why this priority**: The homepage's primary purpose is to clearly communicate the book's identity and scope as the "front door."

**Independent Test**: Can be fully tested by opening the homepage in a browser and verifying that the "Hero Section" clearly presents the book title and subtitle, conveying a professional and technical tone.

**Acceptance Scenarios**:

1.  **Given** I navigate to the homepage, **When** the page loads, **Then** the book title "Humanoid AI" is prominently displayed in the Hero Section.
2.  **Given** the Hero Section is visible, **When** I read the subtitle and mission statement, **Then** I understand the book covers Physical AI, Embodied Intelligence, and Autonomous Humanoid Systems.

---

### User Story 2 - Understanding Book's Content and Learning Path (Priority: P1)

As a potential reader, I want to see a clear overview of what the book covers and its learning progression, so that I can assess the curriculum and scope.

**Why this priority**: Understanding content and structure helps readers decide if the book meets their learning objectives.

**Independent Test**: Can be fully tested by scrolling down the homepage and verifying the presence and clarity of "What This Book Covers" and "Learning Path" sections, including a clear 4-module progression.

**Acceptance Scenarios**:

1.  **Given** I am on the homepage, **When** I scroll down, **Then** the "What This Book Covers" section lists key topics like ROS 2, Simulation, AI Robot Brain, VLA, and Capstone.
2.  **Given** I am on the homepage, **When** I view the "Learning Path" section, **Then** a clear 4-module progression is visually presented.

---

### User Story 3 - Engaging with the Book (Priority: P2)

As a potential reader, I want to easily start reading the book from the homepage, so that I can immediately dive into the content.

**Why this priority**: A clear Call-to-Action (CTA) is essential for converting visitors into readers.

**Independent Test**: Can be fully tested by clicking the primary "Start Reading" CTA and confirming it redirects to the main documentation section (e.g., Module 1 index).

**Acceptance Scenarios**:

1.  **Given** I am on the homepage, **When** I see the Hero Section, **Then** a prominent "Start Reading" Call-to-Action is present.
2.  **Given** a "Start Reading" CTA is available, **When** I click it, **Then** I am navigated to the main documentation index (e.g., the introduction to Module 1).

---

### Edge Cases

-   What happens if no primary CTA is provided?
-   How does the page respond to different screen sizes (mobile responsiveness)?
-   What if the imagery doesn't load?
-   What if the Docusaurus styling conflicts with the desired visual identity?

## Requirements

### Functional Requirements

-   **FR-001**: The homepage MUST include a Hero Section with the book title "Humanoid AI", a subtitle emphasizing Physical AI, a one-sentence mission statement, and a primary "Start Reading" Call-to-Action.
-   **FR-002**: The homepage MUST feature a "What This Book Covers" section listing key topics: ROS 2, Simulation & Digital Twins, AI Robot Brain, Vision-Language-Action, and Autonomous Humanoid Capstone.
-   **FR-003**: The homepage MUST present a "Learning Path" section clearly outlining a 4-module progression (visual or conceptual flow).
-   **FR-004**: The homepage MUST include a "Who This Book Is For" section targeting Students, Engineers, Researchers, and Builders.
-   **FR-005**: The homepage MUST include a "Why This Book Is Different" section highlighting focus on Physical AI, Sim-to-real mindset, no toy examples, and industry-aligned stack.
-   **FR-006**: The homepage MUST incorporate **real humanoid robot imagery**, support neutral dark/light mode compatibility, and minimize generic Docusaurus branding emphasis.
-   **FR-007**: The "Start Reading" Call-to-Action MUST correctly route to the main Docusaurus documentation index (e.g., `/docs/`).
-   **FR-008**: The homepage headline (H1) MUST explicitly display "Humanoid AI".

### Key Entities

N/A (This feature focuses on a static landing page, not data entities.)

## Success Criteria

### Measurable Outcomes

-   **SC-001**: The homepage loads successfully and displays all 6 required sections as specified.
-   **SC-002**: The Hero Section prominently features "Humanoid AI" as the main headline.
-   **SC-003**: All imagery on the landing page is clearly robotics-themed and compatible with both dark and light modes.
-   **SC-004**: Clicking the "Start Reading" CTA successfully redirects to the Docusaurus documentation index (e.g., `/docs/`).
-   **SC-005**: User feedback (e.g., via survey) indicates the landing page clearly communicates the book's purpose and target audience, achieving a clarity score of 8/10 or higher.

## Clarifications
### Session 2025-12-30
- Q: Visual Identity - Imagery Type → A: Real humanoid robots
- Q: CTA Behavior → A: Docs index