---
id: 0005
title: Generate Tasks for Module 3
stage: tasks
date: 2025-12-30
surface: agent
model: gemini-pro
feature: 003-ros2-book-module-3
branch: 003-ros2-book-module-3
user: "tonymark"
command: /sp.tasks
labels: ["task-generation", "planning"]
links:
  spec: specs/003-ros2-book-module-3/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/003-ros2-book-module-3/tasks.md
tests:
  - none
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
handoffs: 
  - label: Analyze For Consistency
    agent: sp.analyze
    prompt: Run a project analysis for consistency
    send: true
  - label: Implement Project
    agent: sp.implement
    prompt: Start the implementation in phases
    send: true
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/check-prerequisites.sh --json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & cross-cutting concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per story
   - Implementation strategy section (MVP first, incremental delivery)

5. **Report**: Output path to generated tasks.md and summary:
   - Total task count
   - Task count per user story
   - Parallel opportunities identified
   - Independent test criteria for each story
   - Suggested MVP scope (typically just User Story 1)
   - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

Context for task generation: # Module 3 — Tasks ## The AI-Robot Brain (NVIDIA Isaac™) --- ## 1. Chapter 1: Introduction to AI-Powered Humanoids - [ ] Draft architecture overview of humanoid AI brain - [ ] Explain cognitive core concepts and role in autonomous behavior - [ ] Include simple diagrams illustrating data flow - [ ] Review for continuity with Module 1 (ROS 2 concepts) --- ## 2. Chapter 2: Photorealistic Simulation with Isaac Sim - [ ] Install and configure Isaac Sim (reference instructions) - [ ] Demonstrate environment setup - [ ] Include robot models and materials - [ ] Capture minimal photorealistic screenshots or conceptual visuals - [ ] Write walkthrough for simple simulation examples --- ## 3. Chapter 3: Synthetic Data Generation - [ ] Describe synthetic data concepts and workflows - [ ] Provide optional small hands-on dataset example - [ ] Explain labeling formats (bounding boxes, segmentation, depth) - [ ] Include dataset export and integration instructions --- ## 4. Chapter 4: GPU-Accelerated Perception - [ ] Draft perception pipeline explanation - [ ] Provide optional GPU performance benchmarking example - [ ] Include ROS 2 integration instructions - [ ] Add conceptual notes for CPU-based alternatives --- ## 5. Chapter 5: Visual SLAM - [ ] Explain SLAM core concepts - [ ] Provide applied walkthroughs using Isaac Sim - [ ] Include sim-to-real transfer considerations - [ ] Optional: diagrams showing mapping and pose estimation --- ## 6. Chapter 6: Navigation and Nav2 - [ ] Draft path planning explanation - [ ] Include motion execution boundaries - [ ] Provide simple wheeled robot examples - [ ] Add bipedal-specific conceptual notes - [ ] Optional: screenshots of navigation execution in simulation --- ## 7. Chapter 7: Sim-to-Real Deployment Concepts - [ ] Explain hardware considerations (GPU, Jetson, etc.) - [ ] Provide optional conceptual Jetson deployment guide - [ ] Include performance/failure analysis examples - [ ] Highlight sim-to-real limitations and strategies --- ## 8. Chapter 8: Summary & Validation - [ ] Prepare hands-on validation exercises - [ ] Include conceptual quizzes to reinforce learning - [ ] Provide recommended readings and references - [ ] Review for consistency across chapters --- ## 9. Cross-Chapter Tasks - [ ] Ensure Python (`rclpy`) examples are consistent across all chapters - [ ] Verify diagrams and visuals match written explanations - [ ] Confirm minimal photorealistic screenshots where necessary - [ ] Validate that all hands-on exercises are optional but replicable - [ ] Review chapter flow to avoid overlap with Modules 2 and 4 --- ## 10. Review & QA - [ ] Check each chapter for clarity and minimum depth - [ ] Ensure APA-style citations are included - [ ] Verify all alternative approaches and optional exercises are clearly marked - [ ] Conduct internal testing of ROS 2 examples and simulation walkthroughs

The tasks.md should be immediately executable - each task must be specific enough that an LLM can complete it without additional context.

## Task Generation Rules

**CRITICAL**: Tasks MUST be organized by user story to enable independent implementation and testing.

**Tests are OPTIONAL**: Only generate test tasks if explicitly requested in the feature specification or if user requests TDD approach.

### Checklist Format (REQUIRED)

Every task MUST strictly follow this format:

```text
- [ ] [TaskID] [P?] [Story?] Description with file path
```

**Format Components**:

1. **Checkbox**: ALWAYS start with `- [ ]` (markdown checkbox)
2. **Task ID**: Sequential number (T001, T002, T003...) in execution order
3. **[P] marker**: Include ONLY if task is parallelizable (different files, no dependencies on incomplete tasks)
4. **[Story] label**: REQUIRED for user story phase tasks only
   - Format: [US1], [US2], [US3], etc. (maps to user stories from spec.md)
   - Setup phase: NO story label
   - Foundational phase: NO story label  
   - User Story phases: MUST have story label
   - Polish phase: NO story label
5. **Description**: Clear action with exact file path

**Examples**:

- ✅ CORRECT: `- [ ] T001 Create project structure per implementation plan`
- ✅ CORRECT: `- [ ] T005 [P] Implement authentication middleware in src/middleware/auth.py`
- ✅ CORRECT: `- [ ] T012 [P] [US1] Create User model in src/models/user.py`
- ✅ CORRECT: `- [ ] T014 [US1] Implement UserService in src/services/user_service.py`
- ❌ WRONG: `- [ ] T001 Create project structure per implementation plan` (missing ID and Story label)
- ❌ WRONG: `- [ ] Create User model` (missing checkbox)
- ❌ WRONG: `- [ ] [US1] Create User model` (missing Task ID)
- ❌ WRONG: `- [ ] T001 [US1] Create model` (missing file path)

### Task Organization

1. **From User Stories (spec.md)** - PRIMARY ORGANIZATION:
   - Each user story (P1, P2, P3...) gets its own phase
   - Map all related components to their story:
     - Models needed for that story
     - Services needed for that story
     - Endpoints/UI needed for that story
     - If tests requested: Tests specific to that story
   - Mark story dependencies (most stories should be independent)

2. **From Contracts**:
   - Map each contract/endpoint → to the user story it serves
   - If tests requested: Each contract → contract test task [P] before implementation in that story's phase

3. **From Data Model**:
   - Map each entity to the user story(ies) that need it
   - If entity serves multiple stories: Put in earliest story or Setup phase
   - Relationships → service layer tasks in appropriate story phase

4. **From Setup/Infrastructure**:
   - Shared infrastructure → Setup phase (Phase 1)
   - Foundational/blocking tasks → Foundational phase (Phase 2)
   - Story-specific setup → within that story's phase

### Phase Structure

- **Phase 1**: Setup (project initialization)
- **Phase 2**: Foundational (blocking prerequisites - MUST complete before user stories)
- **Phase 3+**: User Stories in priority order (P1, P2, P3...)
  - Within each story: Tests (if requested) → Models → Services → Endpoints → Integration
  - Each phase should be a complete, independently testable increment
- **Final Phase**: Polish & Cross-Cutting Concerns

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage: 
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.

## Response snapshot

Successfully generated a detailed `tasks.md` file, organized by user story, with 38 tasks. The tasks are formatted according to the project's standards and are ready for implementation.

## Outcome

- ✅ Impact: High. The `tasks.md` file provides a clear, actionable plan for implementing the module.
- 🧪 Tests: n/a
- 📁 Files: `specs/003-ros2-book-module-3/tasks.md` was created.
- 🔁 Next prompts: `/sp.implement`
- 🧠 Reflection: The agent correctly interpreted the user's high-level task list and re-structured it into the required user-story-centric format, demonstrating an understanding of the underlying methodology.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a