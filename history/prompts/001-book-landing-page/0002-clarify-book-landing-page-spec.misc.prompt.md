---
id: 0002
title: Clarify Book Landing Page Spec
stage: misc
date: 2025-12-30
surface: agent
model: gemini-1.5-flash
feature: 001-book-landing-page
branch: 001-book-landing-page
user: CLI_user
command: /sp.clarify # Landing Page Clarifications — Humanoid AI Book ## Purpose Identify ambiguities and decisions that must be clarified before implementing the new landing page. --- ## 1. Terminology Clarifications ### 1.1 “Humanoid AI” - Refers to AI systems embodied in humanoid or humanoid-like robots - Not limited to LLMs or chat-based agents ### 1.2 “Physical AI” - AI systems that understand physics, embodiment, and actuation - Distinct from purely digital AI --- ## 2. Visual Style Ambiguities - Should imagery be: - Abstract robotics illustrations? - Real humanoid robots? - Simulation renders? - Dark theme vs light theme priority - Minimalist vs cinematic presentation --- ## 3. Content Depth - Homepage is **conceptual**, not instructional - No code snippets - No installation steps - No weekly breakdowns --- ## 4. Image Usage Questions - Use existing `/static/img` assets or introduce new humanoid visuals? - Preference for SVG illustrations vs PNG renders? - Consistent hero image across themes or adaptive? --- ## 5. CTA Behavior - “Start Reading” should route to: - Docs index? - Module 1 entry? - Secondary CTA optional or excluded? --- ## 6. Tone & Voice - Academic-professional (default) - Not startup marketing - Not beginner tutorial tone --- ## Outcome Clarifying these points ensures the landing page: - Matches the seriousness of the book - Avoids rework - Aligns visuals, tone, and structure
labels: [clarify, frontend, Docusaurus, landing-page]
links:
  spec: specs/001-book-landing-page/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-book-landing-page/spec.md
tests: null
---

## Prompt

/sp.clarify # Landing Page Clarifications — Humanoid AI Book ## Purpose Identify ambiguities and decisions that must be clarified before implementing the new landing page. --- ## 1. Terminology Clarifications ### 1.1 “Humanoid AI” - Refers to AI systems embodied in humanoid or humanoid-like robots - Not limited to LLMs or chat-based agents ### 1.2 “Physical AI” - AI systems that understand physics, embodiment, and actuation - Distinct from purely digital AI --- ## 2. Visual Style Ambiguities - Should imagery be: - Abstract robotics illustrations? - Real humanoid robots? - Simulation renders? - Dark theme vs light theme priority - Minimalist vs cinematic presentation --- ## 3. Content Depth - Homepage is **conceptual**, not instructional - No code snippets - No installation steps - No weekly breakdowns --- ## 4. Image Usage Questions - Use existing `/static/img` assets or introduce new humanoid visuals? - Preference for SVG illustrations vs PNG renders? - Consistent hero image across themes or adaptive? --- ## 5. CTA Behavior - “Start Reading” should route to: - Docs index? - Module 1 entry? - Secondary CTA optional or excluded? --- ## 6. Tone & Voice - Academic-professional (default) - Not startup marketing - Not beginner tutorial tone --- ## Outcome Clarifying these points ensures the landing page: - Matches the seriousness of the book - Avoids rework - Aligns visuals, tone, and structure

## Response snapshot

The feature specification for the "Landing Page - Humanoid AI Book" has been clarified based on user input.

Two key ambiguities were resolved:
1.  **Visual Identity - Imagery Type**: The landing page will use "Real humanoid robot imagery".
2.  **CTA Behavior**: The "Start Reading" Call-to-Action will route to the "main Docusaurus documentation index (e.g., `/docs/`)".

The updated specification is located at `specs/001-book-landing-page/spec.md`.

The spec is now ready for the planning phase.

## Outcome

- ✅ Impact: The specification for the Humanoid AI Book Landing Page was clarified regarding visual imagery (real humanoid robots) and CTA routing (main Docusaurus documentation index), resolving key ambiguities.
- 🧪 Tests: None (clarification step).
- 📁 Files: `specs/001-book-landing-page/spec.md` updated.
- 🔁 Next prompts: `/sp.plan`
- 🧠 Reflection: Successfully guided the user through targeted clarification questions to refine ambiguous aspects of the specification, improving its completeness and reducing future rework.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null