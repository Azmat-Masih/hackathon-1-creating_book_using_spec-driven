# API Contracts (ROS 2 Interfaces): Module 4 - Vision-Language-Action (VLA) for Humanoid Robots

**Branch**: `005-vla-humanoid-robot` | **Date**: December 30, 2025 | **Spec**: /specs/005-vla-humanoid-robot/spec.md

## Introduction

In the context of ROS 2 applications, "API Contracts" are primarily defined by the ROS 2 message types, service definitions, and action specifications used for inter-node communication. These contracts dictate the data structures and communication protocols between different components of the Vision-Language-Action (VLA) system.

This module will define and utilize custom ROS 2 interfaces where standard interfaces are insufficient, particularly for structured natural language intent, LLM planning requests/responses, and high-level robot action commands.

## Key ROS 2 Interface Categories

### 1. Messages (`.msg`)

-   **Purpose**: Asynchronous, one-way communication of data streams.
-   **Examples (Custom)**:
    -   `SpeechToText.msg`: Contains `string transcription`, `builtin_interfaces/Time timestamp`, `string source_id`.
    -   `NaturalLanguageIntent.msg`: Contains `string command_text`, `string action`, `string target_object`, `geometry_msgs/Point location`, `string[] parameters`, `float32 confidence`.
    -   `DetectedObject.msg`: Contains `string object_id`, `string name`, `string class_label`, `geometry_msgs/Pose pose`, `geometry_msgs/Vector3 dimensions`, `float32 confidence`.
    -   `LLMPlanStep.msg`: Contains `string action_type`, `string[] action_parameters`, `string expected_outcome`.
    -   `LLMPlan.msg`: Contains `string plan_id`, `builtin_interfaces/Time timestamp`, `string high_level_goal`, `LLMPlanStep[] steps`, `string status`.
-   **Examples (Standard ROS 2)**:
    -   `sensor_msgs/AudioData`: For raw audio streams from microphones.
    -   `sensor_msgs/JointState`: For robot joint positions, velocities, and efforts.
    -   `geometry_msgs/PoseStamped`: For robot poses or object locations.

### 2. Services (`.srv`)

-   **Purpose**: Synchronous, request-response communication for specific operations.
-   **Examples (Custom)**:
    -   `GenerateLLMPlan.srv`:
        -   **Request**: `string high_level_goal`, `sensor_msgs/JointState current_robot_state`, `DetectedObject[] environment_perception`, `string[] available_actions`.
        -   **Response**: `LLMPlan plan`, `bool success`, `string message`.
    -   `ParseSpeechIntent.srv`:
        -   **Request**: `string speech_text`.
        -   **Response**: `NaturalLanguageIntent intent`, `bool success`, `string message`.
-   **Examples (Standard ROS 2)**:
    -   Services for robot configuration, specific query operations.

### 3. Actions (`.action`)

-   **Purpose**: Long-running, preemptable tasks with periodic feedback.
-   **Examples (Custom)**:
    -   `ExecuteLLMPlan.action`:
        -   **Goal**: `LLMPlan plan`.
        -   **Result**: `bool success`, `string final_status_message`.
        -   **Feedback**: `string current_step_id`, `float32 progress_percentage`, `string current_feedback_message`.
    -   `PerformRobotAction.action`:
        -   **Goal**: `string action_type`, `string[] action_parameters`.
        -   **Result**: `bool success`, `string message`.
        -   **Feedback**: `float32 progress`.
-   **Examples (Standard ROS 2)**:
    -   `nav2_msgs/NavigateToPose.action`: For robot navigation tasks.
    -   `control_msgs/FollowJointTrajectory.action`: For executing joint trajectories.

## Contract Definition Workflow

1.  **Define `.msg`, `.srv`, `.action` files**: These files will be placed in `msg/`, `srv/`, and `action/` directories within custom ROS 2 packages (e.g., `vla_interfaces`).
2.  **Generate Language-Specific Bindings**: ROS 2 build system (ament_cmake, colcon) automatically generates Python (and C++) bindings from these definitions.
3.  **Utilize in Nodes**: ROS 2 nodes in `rclpy` will then import and use these generated types for publishing, subscribing, calling services, and interacting with actions.

This document serves as a high-level overview. Specific `.msg`, `.srv`, and `.action` files will be detailed within the relevant ROS 2 package documentation.
