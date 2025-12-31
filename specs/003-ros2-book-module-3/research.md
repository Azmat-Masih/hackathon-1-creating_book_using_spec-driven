# Research for Module 3

This document details the research and decisions made to resolve open items from the implementation plan.

## 1. Mandatory vs. Optional Hands-on Exercises

-   **Decision:** All chapters will include mandatory hands-on, runnable code examples.
-   **Rationale:** This was clarified and confirmed. It ensures students gain practical, verifiable skills, aligning with the module's core learning objectives. The spec (`FR-008`) has been updated to reflect this.
-   **Alternatives considered:** A mix of conceptual and hands-on chapters was considered but rejected in favor of a fully practical approach.

## 2. Depth of SLAM and Nav2 Coverage

-   **Decision:** Coverage will focus on practical, applied walkthroughs. A brief conceptual overview will be provided for context, but the primary focus will be on getting a working implementation running. The content will not delve into deep algorithm theory or mathematical proofs.
-   **Rationale:** The target audience (software engineers and students) will benefit more from a practical understanding of how to use these tools than from a deep theoretical knowledge. This aligns with the "Reproducibility" principle of the constitution.
-   **Alternatives considered:** A theory-heavy approach was considered but deemed too academic for the practical goals of this book.

## 3. Level of Photorealism

-   **Decision:** The content will use minimal photorealistic examples. The focus is on the concepts, not on creating visually stunning scenes. Optional, high-quality screenshots will be used to illustrate key points without requiring students to spend significant time on rendering.
-   **Rationale:** This reduces the setup burden and hardware requirements for students, making the content more accessible. It aligns with the plan's decision to "reduce setup burden".
-   **Alternatives considered:** Requiring full fidelity photorealism was rejected due to the high hardware and time cost for students.

## 4. Performance Benchmarking Requirements

-   **Decision:** Performance benchmarking will be an optional activity. The content will explain the conceptual benefits of GPU acceleration, but students will not be required to produce and record specific performance metrics.
-   **Rationale:** Making this optional allows students with lower-end hardware to still complete the core learning objectives. The focus is on understanding the "why" of acceleration, not the specific "how much" on their particular hardware.
-   **Alternatives considered:** Mandatory benchmarking was rejected as it would create a barrier for some students and is not essential for understanding the core concepts.

## 5. Minimum Hardware Required Per Activity

-   **Decision:** The hardware requirements will be specified per chapter.
    -   **Chapters 1-3 (Intro, Simulation, Data Gen):** A mid-range RTX card (e.g., RTX 3060 with 12GB VRAM) is sufficient.
    -   **Chapters 4-6 (Perception, SLAM, Nav):** A higher-end RTX card (e.g., RTX 3080 or better with 16GB+ VRAM) is recommended for a smooth experience, especially with more complex scenes.
    -   **Chapter 7 (Deployment):** The NVIDIA Jetson Orin is optional and only for the conceptual deployment chapter. All core activities can be completed on a desktop/cloud GPU.
-   **Rationale:** Providing per-chapter guidance gives students a better understanding of what to expect and allows them to plan accordingly. It makes the content more accessible and manageable.
-   **Alternatives considered:** A single, high-end hardware requirement for the entire module was rejected as it would exclude many potential learners.
