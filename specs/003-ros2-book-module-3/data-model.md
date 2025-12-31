# Module 3 - Data Model

This document defines the key entities for the AI-Robot Brain module.

## 1. Humanoid Robot

-   **Description**: Represents the primary subject of simulation and control. It is a digital asset that can be manipulated in the simulation environment.
-   **Fields**:
    -   `urdf` (string): Path to the URDF file describing the robot's physical structure, joints, and links.
    -   `sensors` (list): A list of sensor entities attached to the robot.
    -   `actuators` (list): A list of actuator entities that control the robot's joints.
-   **Relationships**:
    -   Contained within a `Simulation Environment`.
    -   Publishes data via its `sensors`.
    -   Subscribes to commands for its `actuators`.

## 2. Simulation Environment (Isaac Sim)

-   **Description**: The virtual space where robots operate. It is responsible for rendering, physics, and generating synthetic data.
-   **Fields**:
    -   `scene` (string): Description of the 3D scene, including lighting, materials, and static objects.
    -   `physics_engine` (string): The physics engine used for simulation (e.g., PhysX).
    -   `robots` (list): A list of `Humanoid Robot` entities within the environment.
-   **Relationships**:
    -   Contains one or more `Humanoid Robot` entities.

## 3. Perception Pipeline (Isaac ROS)

-   **Description**: A modular system for processing sensor data using GPU-accelerated algorithms. It takes raw sensor data and produces meaningful information.
-   **Fields**:
    -   `input_topic` (string): The ROS 2 topic for incoming sensor data (e.g., `/camera/image_raw`).
    -   `output_topic` (string): The ROS 2 topic for publishing the processed information (e.g., `/detections`).
    -   `algorithm` (string): The perception algorithm being used (e.g., 'object_detection', 'pose_estimation').
-   **Relationships**:
    -   Subscribes to topics published by a `Humanoid Robot`'s sensors.
    -   Publishes processed data that can be used by the `Navigation Stack`.

## 4. Navigation Stack (Nav2)

-   **Description**: A software framework for autonomous robot movement. It is responsible for mapping, localization, and path planning.
-   **Fields**:
    -   `map` (string): Path to the map file of the environment.
    -   `localization_algorithm` (string): The algorithm used for localization (e.g., 'AMCL').
    -   `path_planner` (string): The global and local path planning algorithms.
-   **Relationships**:
    -   Subscribes to topics from the `Perception Pipeline` and other robot sensors.
    -   Publishes velocity commands to the `Humanoid Robot`'s actuators.
