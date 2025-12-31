# 0013: Module 3 — AI-Robot Brain Architecture & Key Decisions

> **Scope**: Document architectural decisions for Module 3 that affect multiple chapters, phases, and instructional approaches. Includes decisions with alternatives and trade-offs that shape chapter content and structure.

- **Status:** Accepted
- **Date:** 2025-12-30
- **Feature:** 003-ros2-book-module-3
- **Context:** Module 3 introduces AI-driven humanoid robotics using NVIDIA Isaac Sim and Isaac ROS. Architectural decisions span programming language, simulation fidelity, perception pipelines, navigation strategies, and deployment options.

---

## Decisions

### 1. Programming Language
- **Decision**: Use Python (`rclpy`) for all ROS 2 examples.
- **Rationale**: Continuity from Module 1, easier for AI/ML students, lightweight examples.
- **Impact**: Affects all chapters with ROS 2 examples, perception pipelines, SLAM demonstrations, and navigation exercises.
- **Alternatives Considered**:  
  - C++ (`rclcpp`) — higher performance but higher learning curve.  
  - Mixed Python + C++ — increases maintenance and cognitive load.  
- **Chosen**: Python only.

### 2. Simulation Fidelity
- **Decision**: Use Isaac Sim for photorealistic simulation; minimal screenshots or conceptual explanations where high-fidelity rendering is not feasible.
- **Rationale**: Balance visual clarity with accessibility; reduce hardware dependency.
- **Impact**: Chapters 2, 3, 5, and 6 rely on simulation examples for teaching perception, SLAM, and navigation.
- **Alternatives Considered**:  
  - Full photorealistic fidelity — requires high-end GPUs, longer setup.  
  - Conceptual diagrams only — reduces realism but easier for low-spec systems.  
- **Chosen**: Minimal photoreal examples + conceptual explanations.

### 3. Synthetic Data Workflow
- **Decision**: Provide conceptual pipelines with optional small hands-on datasets; full dataset generation is not mandatory.
- **Rationale**: Avoid high GPU requirements while demonstrating dataset creation.
- **Impact**: Chapter 3; affects perception and SLAM exercises.
- **Alternatives Considered**:  
  - Full-scale datasets — resource-intensive.  
  - Pure conceptual explanation — less practical.
- **Chosen**: Conceptual + optional small hands-on dataset.

### 4. GPU-Accelerated Perception
- **Decision**: Focus on conceptual explanation and optional performance benchmarking; CPU comparison is optional.
- **Rationale**: Introduces GPU acceleration without mandating high-end hardware for all students.
- **Impact**: Chapter 4; affects hands-on pipeline exercises.
- **Alternatives Considered**:  
  - Mandatory performance benchmarks — increases setup complexity.  
  - CPU-only examples — simpler but less realistic.
- **Chosen**: Conceptual explanation + optional benchmarks.

### 5. Navigation & SLAM
- **Decision**: 
  - Include wheeled robot examples for simplicity.  
  - Provide bipedal-specific notes conceptually.  
  - Prioritize applied SLAM walkthroughs; theory summarized.
- **Rationale**: Balance between practical exercises and cognitive load.
- **Impact**: Chapters 5 and 6; affects applied exercises and learning outcomes.
- **Alternatives Considered**:  
  - Full bipedal implementation — complex for beginners.  
  - Theory-only coverage — lacks hands-on engagement.
- **Chosen**: Mixed approach with applied walkthroughs.

### 6. Jetson Deployment
- **Decision**: Optional; provide conceptual understanding without requiring physical hardware.
- **Rationale**: Avoid hardware dependency, focus on learning concepts.
- **Impact**: Chapter 7; optional extension for advanced students.
- **Alternatives Considered**:  
  - Mandatory Jetson deployment — hardware cost and availability issues.
- **Chosen**: Optional conceptual explanation only.

### 7. Chapter Structure
- **Decision**: Each chapter includes conceptual explanations, diagrams, hands-on examples (optional), and validation exercises.
- **Rationale**: Ensures consistent depth and learning outcomes.
- **Impact**: Affects all chapters; guides writing and instructional design.
- **Alternatives Considered**:  
  - Purely conceptual chapters — easier but less engaging.  
  - Fully hands-on chapters — may overwhelm students and require more resources.
- **Chosen**: Balanced mix of conceptual + optional hands-on exercises.

---

## Consequences

### Positive
- Consistent Python-based learning experience for students.  
- Clear scope boundaries reduce overlap with Modules 2 and 4.  
- Optional hands-on exercises and Jetson deployment lower hardware barriers.  
- Applied SLAM, navigation, and perception workflows reinforce practical understanding.

### Negative
- C++ learners may need to adapt Python examples.  
- Minimal photorealism may not satisfy advanced users needing full visual fidelity.  
- Optional performance benchmarking could result in uneven student exposure.

---

## References
- Module 3 Plan: specs/003-ros2-book-module-3/plan.md  
- Module 3 Spec: specs/003-ros2-book-module-3/spec.md  
- Related ADR: ADR-0010 (Module 2 Python examples)