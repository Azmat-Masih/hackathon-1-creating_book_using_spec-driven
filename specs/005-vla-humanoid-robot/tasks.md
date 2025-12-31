# Tasks: Module 4 - Vision-Language-Action (VLA) for Humanoid Robots

**Branch**: `005-vla-humanoid-robot` | **Date**: December 30, 2025 | **Plan**: /specs/005-vla-humanoid-robot/plan.md

## Task Dependencies & Parallel Execution

This section outlines the recommended order of user story completion and identifies opportunities for parallel development.

### User Story Completion Order

1.  **User Story 1 (P1)**: Voice Command to Robot Action
2.  **User Story 2 (P1)**: LLM-Guided Cognitive Planning
3.  **User Story 3 (P2)**: ROS 2 Integration for VLA Components (Cross-cutting, foundational tasks are in Phase 2, specific examples within US phases)

*Note: User Story 3 is foundational and its tasks are distributed across Phase 2 and within specific user story phases where relevant.*

### Parallel Execution Examples

-   **Development of custom ROS 2 message/service/action definitions** (`vla_interfaces` package) can happen in parallel with setting up the base workspace.
-   **Implementing the speech recognition node** (`vla_speech_recognition`) can happen in parallel with **implementing the basic robot control interfaces** (`vla_robot_control`).
-   **Developing LLM planning logic** (`vla_llm_planner`) can start once basic intent parsing and robot action definitions are stable.

## Implementation Strategy

We will adopt an MVP-first approach, prioritizing User Story 1 (Voice Command to Robot Action) to establish an end-to-end basic VLA pipeline. Subsequent user stories will build upon this foundation, adding complexity (e.g., cognitive planning) and refining integration. Each user story will aim for independent testability to facilitate iterative development and validation.

---

## Phase 1: Setup

Goal: Initialize the project repository and ROS 2 workspace structure.

- [x] T001 Create module root directory structure for 005-vla-humanoid-robot/
- [ ] T002 Initialize ROS 2 workspace and src/ directory in 005-vla-humanoid-robot/
- [ ] T003 Create `vla_interfaces` ROS 2 package for custom messages, services, actions in 005-vla-humanoid-robot/src/vla_interfaces/
- [ ] T004 Define `SpeechToText.msg` in 005-vla-humanoid-robot/src/vla_interfaces/msg/
- [ ] T005 Define `NaturalLanguageIntent.msg` in 005-vla-humanoid-robot/src/vla_interfaces/msg/
- [ ] T006 Define `DetectedObject.msg` in 005-vla-humanoid-robot/src/vla_interfaces/msg/
- [ ] T007 Define `LLMPlanStep.msg` in 005-vla-humanoid-robot/src/vla_interfaces/msg/
- [ ] T008 Define `LLMPlan.msg` in 005-vla-humanoid-robot/src/vla_interfaces/msg/
- [ ] T009 Define `GenerateLLMPlan.srv` in 005-vla-humanoid-robot/src/vla_interfaces/srv/
- [ ] T010 Define `ParseSpeechIntent.srv` in 005-vla-humanoid-robot/src/vla_interfaces/srv/
- [ ] T011 Define `ExecuteLLMPlan.action` in 005-vla-humanoid-robot/src/vla_interfaces/action/
- [ ] T012 Define `PerformRobotAction.action` in 005-vla-humanoid-robot/src/vla_interfaces/action/
- [ ] T013 Update `CMakeLists.txt` and `package.xml` for `vla_interfaces` to build custom messages in 005-vla-humanoid-robot/src/vla_interfaces/
- [ ] T014 Build `vla_interfaces` package to generate Python bindings for custom messages

## Phase 2: Foundational Components

Goal: Implement core ROS 2 packages and generic functionalities.

- [ ] T015 Create `vla_speech_recognition` ROS 2 package in 005-vla-humanoid-robot/src/vla_speech_recognition/
- [ ] T016 Create `vla_robot_control` ROS 2 package in 005-vla-humanoid-robot/src/vla_robot_control/
- [ ] T017 Create `vla_llm_planner` ROS 2 package in 005-vla-humanoid-robot/src/vla_llm_planner/
- [ ] T018 Create `vla_perception` ROS 2 package for vision system integration in 005-vla-humanoid-robot/src/vla_perception/
- [ ] T019 Develop base `RobotActionExecutor` class for common robot commands in 005-vla-humanoid-robot/src/vla_robot_control/
- [ ] T020 Implement basic robot movement capabilities (e.g., `move_linear`, `rotate`) in 005-vla-humanoid-robot/src/vla_robot_control/
- [ ] T021 Set up `requirements.txt` for Python dependencies in 005-vla-humanoid-robot/requirements.txt
- [ ] T022 Implement a simple `object_detector_node.py` that publishes `DetectedObject` messages (mock/placeholder) in 005-vla-humanoid-robot/src/vla_perception/nodes/

## Phase 3: User Story 1 - Voice Command to Robot Action (P1)

Goal: Enable basic voice commands to trigger robot actions.
Independent Test: Issue a simple voice command (e.g., "Robot, move forward 1 meter") and observe the simulated robot executing the action.

- [ ] T023 [P] [US1] Implement `speech_to_text_node.py` using OpenAI Whisper to publish `SpeechToText.msg` in 005-vla-humanoid-robot/src/vla_speech_recognition/nodes/
- [ ] T024 [P] [US1] Implement `intent_parser_node.py` subscribing to `SpeechToText.msg` and publishing `NaturalLanguageIntent.msg` for simple commands in 005-vla-humanoid-robot/src/vla_speech_recognition/nodes/
- [ ] T025 [P] [US1] Implement an `action_executor_node.py` subscribing to `NaturalLanguageIntent.msg` and calling `PerformRobotAction.action` in 005-vla-humanoid-robot/src/vla_robot_control/nodes/
- [ ] T026 [P] [US1] Implement `PerformRobotAction.action` server in `vla_robot_control` for basic commands (e.g., move, rotate) in 005-vla-humanoid-robot/src/vla_robot_control/
- [ ] T027 [US1] Create `vla_demo.launch.py` to start US1 nodes in 005-vla-humanoid-robot/launch/
- [ ] T028 [US1] Test end-to-end voice command to robot action for basic commands in Isaac Sim

## Phase 4: User Story 2 - LLM-Guided Cognitive Planning (P1)

Goal: Robot translates high-level instructions into actionable steps using an LLM.
Independent Test: Provide a complex voice command (e.g., "Robot, go to the table and bring me the cup") and observe the LLM's generated plan and the robot's subsequent execution.

- [ ] T029 [P] [US2] Implement `cognitive_planner_node.py` providing `GenerateLLMPlan.srv` using LLM for planning in 005-vla-humanoid-robot/src/vla_llm_planner/nodes/
- [ ] T030 [P] [US2] Integrate object detection from `vla_perception` into `cognitive_planner_node.py`'s planning context in 005-vla-humanoid-robot/src/vla_llm_planner/nodes/
- [ ] T031 [P] [US2] Modify `intent_parser_node.py` to use `GenerateLLMPlan.srv` for complex commands in 005-vla-humanoid-robot/src/vla_speech_recognition/nodes/
- [ ] T032 [P] [US2] Implement `ExecuteLLMPlan.action` server in `vla_robot_control` that iterates through `LLMPlan.msg` steps in 005-vla-humanoid-robot/src/vla_robot_control/
- [ ] T033 [P] [US2] Modify `action_executor_node.py` to call `ExecuteLLMPlan.action` for complex plans in 005-vla-humanoid-robot/src/vla_robot_control/nodes/
- [ ] T034 [US2] Update `vla_demo.launch.py` to include US2 nodes in 005-vla-humanoid-robot/launch/
- [ ] T035 [US2] Test end-to-end complex voice command with LLM planning and robot execution in Isaac Sim

## Phase 5: User Story 3 - ROS 2 Integration for VLA Components (P2)

Goal: Ensure clear communication and management of VLA components within ROS 2. (Many tasks for this are already integrated into previous phases.)
Independent Test: Verify that all ROS 2 nodes for speech recognition, LLM inference, and robot control launch, communicate, and exchange data as expected.

- [ ] T036 [US3] Implement `vla_config_node.py` to manage LLM prompts and robot parameters in 005-vla-humanoid-robot/src/vla_config/nodes/
- [ ] T037 [P] [US3] Create `config/llm_config.yaml` for LLM parameters in 005-vla-humanoid-robot/config/
- [ ] T038 [US3] Refine ROS 2 launch files for robust node management and logging in 005-vla-humanoid-robot/launch/
- [ ] T039 [US3] Conduct comprehensive integration tests for all ROS 2 nodes and interfaces in 005-vla-humanoid-robot/tests/
- [ ] T040 [US3] Document ROS 2 topic, service, and action interfaces in 005-vla-humanoid-robot/src/vla_interfaces/README.md

## Phase 6: Polish & Cross-Cutting Concerns

Goal: Finalize documentation, testing, and deployment options.

- [ ] T041 Document all code examples with inline comments in 005-vla-humanoid-robot/src/
- [ ] T042 Provide clear step-by-step instructions for reproducibility in /docs/module-4/
- [ ] T043 Include diagrams for each pipeline stage (voice → LLM → ROS 2 → action) in /docs/module-4/
- [ ] T044 Implement optional edge deployment pipeline on Jetson Orin in 005-vla-humanoid-robot/scripts/
- [ ] T045 Conduct final end-to-end system validation and performance testing in Isaac Sim
- [ ] T046 Prepare conceptual quizzes and exercises for VLA principles in /docs/module-4/
- [ ] T047 Update quickstart.md with final instructions and troubleshooting in specs/005-vla-humanoid-robot/quickstart.md
