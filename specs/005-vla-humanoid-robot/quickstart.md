# Quickstart Guide: Module 4 - Vision-Language-Action (VLA) for Humanoid Robots

**Branch**: `005-vla-humanoid-robot` | **Date**: December 30, 2025 | **Spec**: /specs/005-vla-humanoid-robot/spec.md

This quickstart guide provides instructions to set up your environment and run the core VLA demonstration for Module 4.

## 1. Prerequisites

Ensure you have met the following prerequisites as outlined in the module specification:

-   **Operating System**: Ubuntu 22.04 LTS
-   **ROS 2 Distribution**: Humble or Iron
-   **NVIDIA Isaac Sim**: Installed and configured (from Module 3)
-   **Python**: Version 3.10+
-   **Hardware**: High-performance workstation with NVIDIA RTX GPU (12–24 GB VRAM)

## 2. Environment Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd <repository_name>/005-vla-humanoid-robot/
    ```

2.  **ROS 2 Workspace Setup**:
    Create a ROS 2 workspace, if you don't have one, and symlink the module's code:
    ```bash
    mkdir -p ~/ros2_ws/src
    cd ~/ros2_ws/src
    ln -s /path/to/your/cloned/repo/005-vla-humanoid-robot .
    cd ~/ros2_ws
    rosdep install --from-paths src --ignore-src -r -y
    colcon build --packages-select vla_speech_recognition vla_llm_planner vla_robot_control vla_interfaces
    source install/setup.bash
    ```
    *Note: Replace `/path/to/your/cloned/repo/` with the actual path to your cloned repository.*

3.  **Python Dependencies**:
    Install Python dependencies required for LLM integration and speech recognition. It is recommended to use a Python virtual environment.
    ```bash
    cd /path/to/your/cloned/repo/005-vla-humanoid-robot/
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt # (assuming a requirements.txt will be created)
    ```

## 3. Running the VLA Demonstration

1.  **Launch Isaac Sim**:
    Start NVIDIA Isaac Sim and ensure your simulated humanoid robot environment is loaded.

2.  **Start the VLA System (ROS 2 Launch)**:
    In a new terminal, with your ROS 2 workspace sourced:
    ```bash
    ros2 launch 005-vla-humanoid-robot vla_demo.launch.py
    ```
    This launch file will typically start:
    -   `speech_to_text_node` (using OpenAI Whisper)
    -   `cognitive_planner_node` (LLM integration)
    -   `action_executor_node` (robot control)
    -   Necessary robot interfaces

3.  **Issue Voice Commands**:
    Using your microphone, speak commands such as:
    -   "Robot, move forward 1 meter."
    -   "Robot, pick up the red cube."
    -   "Robot, go to the charging station."

4.  **Observe Robot Behavior**:
    Monitor the simulated humanoid robot in Isaac Sim as it responds to your voice commands. Check the terminal outputs for logs from the ROS 2 nodes.

## 4. Next Steps

-   Refer to the individual ROS 2 package documentation within `005-vla-humanoid-robot/src/` for detailed usage of each component.
-   Explore the chapter content for in-depth explanations of VLA concepts and implementation details.
