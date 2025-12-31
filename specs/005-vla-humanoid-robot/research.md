# Research Findings: Module 4 - Vision-Language-Action (VLA) for Humanoid Robots

**Branch**: `005-vla-humanoid-robot` | **Date**: December 30, 2025 | **Plan**: /specs/005-vla-humanoid-robot/plan.md

## 1. Core Technologies Selection

### 1.1 Language & Framework

- **Decision**: Python 3.10+ with ROS 2 (`rclpy`)
- **Rationale**: The module explicitly targets students with Python and ROS 2 background. `rclpy` is the standard Python client library for ROS 2, enabling seamless integration with the robotic ecosystem. Python is also the dominant language for AI/ML development, making it ideal for LLM and perception integrations.
- **Alternatives Considered**: C++ (`rclcpp`) - Rejected due to the module's target audience and emphasis on Python-based AI integration.

### 1.2 Speech Recognition

- **Decision**: OpenAI Whisper (or equivalent)
- **Rationale**: Whisper is a leading open-source model providing high accuracy and multilingual support, suitable for educational examples. The "or equivalent" clause allows flexibility for local models or other APIs.
- **Alternatives Considered**: Google Speech-to-Text API, proprietary solutions - Rejected to maintain accessibility and focus on open-source/local deployment options.

### 1.3 Large Language Models (LLMs) for Planning

- **Decision**: GPT-based APIs (e.g., OpenAI GPT) or local LLM models
- **Rationale**: GPT models offer powerful natural language understanding and planning capabilities. Including local LLM options provides flexibility for students without API access and aligns with edge deployment considerations.
- **Alternatives Considered**: Custom rule-based planning - Rejected as the module's intent is to showcase LLM-guided cognitive planning.

### 1.4 Simulation Environment

- **Decision**: NVIDIA Isaac Sim and Gazebo (with optional Unity)
- **Rationale**: Isaac Sim is explicitly mentioned in the module prerequisites and provides advanced physics simulation and GPU-accelerated perception necessary for humanoid robotics. Gazebo is a widely used open-source simulator in ROS 2. Unity provides an optional alternative for visualization.
- **Alternatives Considered**: Webots, MuJoCo - Rejected due to the explicit mention and prior module usage of Isaac Sim and Gazebo.

### 1.5 Edge Deployment Platform

- **Decision**: NVIDIA Jetson Orin Nano/NX
- **Rationale**: Jetson platforms are standard for edge AI inference in robotics, aligning with the module's goal of deploying LLM-guided decision-making pipelines on edge devices.
- **Alternatives Considered**: Raspberry Pi, Google Coral - Rejected due to performance requirements for LLM inference and integration with NVIDIA's robotics ecosystem (Isaac ROS).

### 1.6 Testing Framework

- **Decision**: `pytest` for Python components, ROS 2 launch tests for system integration.
- **Rationale**: `pytest` is the de facto standard for Python testing, offering flexibility and a rich ecosystem. ROS 2's built-in testing mechanisms will be used for node and system-level validation.
- **Alternatives Considered**: `unittest` - Rejected for `pytest` due to its more modern features and wider community adoption.

## 2. Unresolved Clarifications from Plan.md

No explicit `NEEDS CLARIFICATION` markers were identified in the `plan.md` in this iteration. Technical choices were made based on direct mentions in the feature specification and common, well-established practices in the ROS 2 and AI robotics domains.

---
