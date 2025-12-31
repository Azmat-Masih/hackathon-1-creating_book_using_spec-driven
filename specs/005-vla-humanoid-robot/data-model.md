# Data Model: Module 4 - Vision-Language-Action (VLA) for Humanoid Robots

**Branch**: `005-vla-humanoid-robot` | **Date**: December 30, 2025 | **Spec**: /specs/005-vla-humanoid-robot/spec.md

## 1. Key Entities and Their Attributes

### 1.1 Humanoid Robot

-   **Description**: Represents the physical or simulated robotic platform.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., `string`, `UUID`)
    -   `type`: Type of robot (e.g., `humanoid`, `quadruped`, `arm`, `simulated`, `physical`)
    -   `pose`: Current position and orientation (e.g., `geometry_msgs/Pose` in ROS 2)
    -   `joints`: Current joint states (e.g., `sensor_msgs/JointState` in ROS 2)
    -   `status`: Operational status (e.g., `idle`, `moving`, `executing_task`, `error`)
    -   `capabilities`: List of actions the robot can perform (e.g., `navigate`, `manipulate`, `perceive`)

### 1.2 Speech Command

-   **Description**: Raw audio input or its transcribed text.
-   **Attributes**:
    -   `audio_data`: Raw audio stream (e.g., `sensor_msgs/AudioData` or `byte array`)
    -   `transcription`: Text representation of the speech (e.g., `string`)
    -   `timestamp`: Time of command utterance (e.g., `builtin_interfaces/Time`)
    -   `source`: Origin of the command (e.g., `microphone`, `file`)

### 1.3 Natural Language Intent

-   **Description**: Structured interpretation of a speech command, representing the user's desired action.
-   **Attributes**:
    -   `command_text`: Original transcribed text (e.g., `string`)
    -   `action`: High-level action verb (e.g., `move`, `pick_up`, `go_to`, `identify`)
    -   `target_object`: Object of the action (e.g., `red_block`, `blue_ball`, `table`)
    -   `location`: Spatial target (e.g., `coordinates`, `named_location`)
    -   `parameters`: Additional details or modifiers (e.g., `distance=1.0m`, `speed=slow`)
    -   `confidence`: Confidence score of intent extraction (e.g., `float` 0.0-1.0)

### 1.4 LLM Planning Request

-   **Description**: Input provided to the LLM for cognitive planning.
-   **Attributes**:
    -   `high_level_goal`: Natural language goal (e.g., `string`)
    -   `current_robot_state`: Current pose, joint states, status.
    -   `environment_perception`: Objects detected, their locations (e.g., list of `DetectedObject`).
    -   `available_actions`: List of primitive actions the robot can execute.

### 1.5 LLM Generated Plan

-   **Description**: A sequence of executable, lower-level robot actions derived from an LLM.
-   **Attributes**:
    -   `plan_id`: Unique identifier for the plan.
    -   `timestamp`: Time of plan generation.
    -   `high_level_goal`: Original natural language goal.
    -   `steps`: Ordered list of `PlanStep` objects.
        -   `action_type`: Primitive action (e.g., `navigate_to`, `grasp`, `speak`).
        -   `action_parameters`: Parameters for the primitive action (e.g., `target_pose`, `object_id`).
        -   `expected_outcome`: Description of expected state after step completion.
    -   `status`: (e.g., `pending`, `executing`, `completed`, `failed`).

### 1.6 Detected Object

-   **Description**: Information about an object identified by the Vision System.
-   **Attributes**:
    -   `object_id`: Unique identifier (e.g., `string`).
    -   `name`: Recognized object name (e.g., `cup`, `block`, `table`).
    -   `class_label`: Object category (e.g., `household_item`, `toy`).
    -   `pose`: Position and orientation in the environment (e.g., `geometry_msgs/Pose`).
    -   `dimensions`: Size of the object (e.g., `geometry_msgs/Vector3`).
    -   `confidence`: Confidence score of detection (e.g., `float` 0.0-1.0).

### 1.7 Robot Action

-   **Description**: A low-level, executable command sent to the robot's action system.
-   **Attributes**:
    -   `action_id`: Unique identifier for the action.
    -   `type`: Type of action (e.g., `move_base`, `set_joint_positions`, `gripper_command`).
    -   `parameters`: Specific data for the action (e.g., `target_waypoint`, `joint_angles`, `grasp_force`).
    -   `status`: Execution status (e.g., `pending`, `executing`, `completed`, `failed`).
    -   `feedback`: Real-time feedback during execution.

## 2. Relationships

-   `Speech Command` is processed into `Natural Language Intent`.
-   `Natural Language Intent`, `Humanoid Robot` state, and `Detected Object` data inform `LLM Planning Request`.
-   `LLM Planning Request` results in an `LLM Generated Plan`.
-   `LLM Generated Plan` contains `Robot Action` sequences.
-   `Robot Action` directly controls the `Humanoid Robot`.
-   `Vision System` outputs `Detected Object` data.

---
