/sp.plan # /sp.plan — Module 2

## Context
This plan defines the execution strategy for **Module 2**, building directly on the conceptual foundation established in **Module 1: The Robotic Nervous System (ROS 2)**.  
Module 2 advances the reader from understanding ROS 2 concepts to **structured robot behavior, coordination, and execution logic**.

All content is written as **Markdown (`.md`)**, rendered using **Docusaurus**, and follows a strict scope boundary defined by `sp.adr`.

---

## Objectives

Module 2 aims to:

- Introduce structured robot behavior beyond raw communication
- Explain how robots reason about *state*, *time*, and *execution flow*
- Establish deterministic behavior patterns used in real robots
- Prepare readers for simulation, planning, and autonomy in later modules

---

## Scope Definition

### Included in Module 2
- ROS 2 execution model
- Node lifecycle management
- Parameters and configuration
- Timers and callback execution
- Finite State Machines (FSM)
- Behavior Trees (conceptual, not tool-heavy)

### Explicitly Excluded
- Gazebo or simulation tools
- Navigation stack
- SLAM
- MoveIt
- Hardware drivers
- Advanced autonomy or planning algorithms

---

## Module Structure

Module 2 consists of **exactly three chapters**, following a progressive learning flow:

1. **Execution & Lifecycle**
2. **Configuration & Time**
3. **Behavior Modeling**

Each chapter expands in depth while maintaining conceptual continuity.

---

## Chapter Breakdown

### Chapter 1 — ROS 2 Execution Model & Node Lifecycle
**Purpose:**  
Explain how ROS 2 nodes start, run, transition, and shut down.

**Focus Areas:**
- Executors and callbacks
- Single-threaded vs multi-threaded execution (conceptual)
- Node lifecycle states
- Managed vs unmanaged nodes
- Deterministic startup and shutdown

**Outcome:**  
Reader understands how ROS 2 controls *when* and *how* robot logic executes.

---

### Chapter 2 — Parameters, Configuration, and Time
**Purpose:**  
Explain how robots adapt behavior through configuration instead of code changes.

**Focus Areas:**
- ROS 2 parameters
- Dynamic vs static configuration
- Launch-time configuration
- Clocks, time sources, and timers
- Why time consistency matters in robotics

**Outcome:**  
Reader understands how robots manage configuration and operate in time-aware systems.

---

### Chapter 3 — Modeling Robot Behavior (FSM & Behavior Trees)
**Purpose:**  
Introduce structured behavior logic used in real robotic systems.

**Focus Areas:**
- Why ad-hoc logic fails in robotics
- Finite State Machines
- Behavior Trees
- Comparison: FSM vs Behavior Trees
- Mapping behaviors to ROS 2 nodes

**Outcome:**  
Reader can mentally model robot behavior in a structured, scalable way.

---

## Pedagogical Strategy

- Concept-first, system-level explanations
- Minimal code, used only for illustration
- Human–robot analogies for cognition and control
- Progressive abstraction (from execution → behavior)

---

## Constraints

- No simulation tools
- No external frameworks
- No hardware dependencies
- No executable-heavy examples
- No scope overlap with Module 3

---

## Dependencies

- Completion of Module 1
- Basic Python familiarity
- Conceptual understanding of ROS 2 nodes and communication

---

## Completion Criteria

Module 2 is considered complete when:

- Exactly three chapters exist
- All content is fully written (not placeholders)
- Concepts align with `sp.adr`
- No forbidden topics appear
- Reader is prepared for Module 3

---

## Status
Planned

---
## Constitution Check

### Spec-Driven Development
- [x] All design decisions are traceable to the feature specification (specs/002-ros2-book-module-2/spec.md).

### Accuracy & Verifiability
- [x] Technical claims within the plan are accurate and align with established ROS 2 concepts.

### Clarity for Developers
- [x] The plan uses precise language suitable for software/AI engineers.

### Reproducibility
- [x] The plan outlines concepts that lead to reproducible examples (though examples are minimal code).

### AI-Native Thinking
- [ ] This module focuses on foundational robot behavior; AI-Native Thinking will be more prominent in later modules (e.g., Module 3 & 4). (Justification: Foundational module, focus on core robotics concepts first).

### Security & Privacy Awareness
- [x] This module does not involve user data or external systems, so security/privacy considerations are currently minimal and addressed by avoiding external dependencies.

## Gates Evaluation

### Pre-Design Gates
- [x] Feature Specification complete and validated.
- [x] No critical unaddressed issues in `spec.md`.

### Post-Design Gates
- [x] All "NEEDS CLARIFICATION" resolved in research.md.
- [x] Data model defined (if applicable).
- [x] API contracts defined (if applicable).