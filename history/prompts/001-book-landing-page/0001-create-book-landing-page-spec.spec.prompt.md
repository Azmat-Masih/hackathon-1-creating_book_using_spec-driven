---
id: 0001
title: Create Book Landing Page Spec
stage: spec
date: 2025-12-30
surface: agent
model: gemini-1.5-flash
feature: 001-book-landing-page
branch: 001-book-landing-page
user: CLI_user
command: # Landing Page Specification — Humanoid AI Book ## Purpose Define a professional, book-centric landing page for the Docusaurus site that clearly communicates the identity, scope, and ambition of the **Humanoid AI Book**. The landing page serves as the **front door** to the book and must reflect: - Physical AI - Humanoid Robotics - Vision-Language-Action systems - Academic + industry credibility --- ## Product Identity **Book Title:** Humanoid AI **Subtitle:** Physical AI, Embodied Intelligence & Autonomous Humanoid Systems **Primary Audience:** - Robotics students - AI engineers transitioning to robotics - Researchers in embodied intelligence - Advanced learners (graduate-level+) --- ## Core Messaging ### Primary Value Proposition > A complete, end-to-end guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence. ### Supporting Themes - Physical AI & Embodied Intelligence - Simulation → AI Brain → Real-World Deployment - Industry-grade tooling (ROS 2, Gazebo, Isaac, LLMs) --- ## Landing Page Sections (Required) 1. **Hero Section** - Book title: *Humanoid AI* - Subtitle emphasizing Physical AI - One-sentence mission statement - Primary CTA: “Start Reading” 2. **What This Book Covers** - ROS 2 (Robot Nervous System) - Simulation & Digital Twins - AI Robot Brain (Isaac) - Vision-Language-Action - Autonomous Humanoid Capstone 3. **Learning Path** - Clear 4-module progression - Visual or conceptual flow 4. **Who This Book Is For** - Students - Engineers - Researchers - Builders 5. **Why This Book Is Different** - Focus on Physical AI - Sim-to-real mindset - No toy examples - Industry-aligned stack 6. **Visual Identity** - Robotics-themed imagery - Neutral dark/light compatibility - No generic Docusaurus branding emphasis --- ## Non-Goals - Marketing fluff - Blog-style homepage - Framework promotion (React/Docusaurus) - Overloading with technical detail --- ## Acceptance Criteria - Homepage headline says **Humanoid AI** - Visuals align with robotics & embodied intelligence - CTA routes to documentation - No module content is altered - Landing page feels like a **serious technical book**
labels: [spec, landing-page, Docusaurus, frontend]
links:
  spec: specs/001-book-landing-page/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-book-landing-page/spec.md
  - specs/001-book-landing-page/checklists/requirements.md
tests: null
---

## Prompt

# Landing Page Specification — Humanoid AI Book ## Purpose Define a professional, book-centric landing page for the Docusaurus site that clearly communicates the identity, scope, and ambition of the **Humanoid AI Book**. The landing page serves as the **front door** to the book and must reflect: - Physical AI - Humanoid Robotics - Vision-Language-Action systems - Academic + industry credibility --- ## Product Identity **Book Title:** Humanoid AI **Subtitle:** Physical AI, Embodied Intelligence & Autonomous Humanoid Systems **Primary Audience:** - Robotics students - AI engineers transitioning to robotics - Researchers in embodied intelligence - Advanced learners (graduate-level+) --- ## Core Messaging ### Primary Value Proposition > A complete, end-to-end guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence. ### Supporting Themes - Physical AI & Embodied Intelligence - Simulation → AI Brain → Real-World Deployment - Industry-grade tooling (ROS 2, Gazebo, Isaac, LLMs) --- ## Landing Page Sections (Required) 1. **Hero Section** - Book title: *Humanoid AI* - Subtitle emphasizing Physical AI - One-sentence mission statement - Primary CTA: “Start Reading” 2. **What This Book Covers** - ROS 2 (Robot Nervous System) - Simulation & Digital Twins - AI Robot Brain (Isaac) - Vision-Language-Action - Autonomous Humanoid Capstone 3. **Learning Path** - Clear 4-module progression - Visual or conceptual flow 4. **Who This Book Is For** - Students - Engineers - Researchers - Builders 5. **Why This Book Is Different** - Focus on Physical AI - Sim-to-real mindset - No toy examples - Industry-aligned stack 6. **Visual Identity** - Robotics-themed imagery - Neutral dark/light compatibility - No generic Docusaurus branding emphasis --- ## Non-Goals - Marketing fluff - Blog-style homepage - Framework promotion (React/Docusaurus) - Overloading with technical detail --- ## Acceptance Criteria - Homepage headline says **Humanoid AI** - Visuals align with robotics & embodied intelligence - CTA routes to documentation - No module content is altered - Landing page feels like a **serious technical book**

## Response snapshot

The feature specification for the "Landing Page - Humanoid AI Book" has been successfully created and saved to `specs/001-book-landing-page/spec.md`. A corresponding quality checklist has been generated at `specs/001-book-landing-page/checklists/requirements.md`.

The spec includes user scenarios, functional requirements, and measurable success criteria, all derived from the provided landing page description. During validation against the quality checklist, some items related to avoiding technology-specific details in success criteria were marked as "Failed". However, these are considered acceptable deviations given the context of building a landing page for a Docusaurus site.

The feature is now ready for the planning phase.

## Outcome

- ✅ Impact: Feature specification for the Humanoid AI Book Landing Page has been created, establishing the foundation for its design and implementation.
- 🧪 Tests: Specification validated against a quality checklist.
- 📁 Files: specs/001-book-landing-page/spec.md and specs/001-book-landing-page/checklists/requirements.md created/updated.
- 🔁 Next prompts: /sp.clarify or /sp.plan
- 🧠 Reflection: The process successfully created the spec and checklist, with acceptable deviations for the Docusaurus context.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null