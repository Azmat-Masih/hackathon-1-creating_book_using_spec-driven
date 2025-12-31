# 14. VLA Integration for Humanoid Robots

- **Status:** Accepted
- **Date:** 2025-12-30
- **Feature:** 005-vla-humanoid-robot
- **Context:** Module 4 integrates voice, language, and action pipelines into humanoid robotics, building on Modules 1–3.

---

## Decision

Adopt a **Python-based, ROS 2 integrated pipeline** using:

1. **OpenAI Whisper** for speech-to-text recognition  
2. **LLM (GPT-based or local)** for cognitive planning and sequence generation  
3. **ROS 2 (`rclpy`) nodes and actions** to execute commands on simulated or physical robots  
4. **Perception modules** (RealSense RGB-D, optional LiDAR/IMU) for environmental understanding  
5. **Simulation** using Isaac Sim (primary) and Gazebo/Unity (reference)  
6. **Optional edge deployment** on Jetson Orin for sim-to-real transfer

This pipeline allows students to translate **natural language commands** into **robot actions**, completing a capstone project demonstrating embodied intelligence.

---

## Consequences

### Positive

* Provides a cohesive VLA pipeline integrating voice, language, perception, and action  
* Maintains continuity with Modules 1–3 (ROS 2, simulation, AI perception)  
* Supports both simulated and optional real-world deployment  
* Reduces cognitive overhead by using Python throughout  
* Optional edge deployment teaches resource-constrained inference principles  

### Negative

* Students without high-end hardware or edge kits cannot fully replicate real-world tests  
* Python-based pipeline may not cover performance-critical C++ applications  
* Cloud deployment introduces latency; local Jetson required for final validation  
* Complex integration may increase learning curve for beginners

---

## Alternatives Considered

1. **Alternative Speech Recognition**  
   - Use other models (e.g., Vosk, Coqui) instead of Whisper  
   - **Pros:** Open-source, offline execution  
   - **Cons:** May have lower accuracy, more setup complexity  

2. **Alternative LLM Planning**  
   - Use only cloud-based GPT API vs. local LLM  
   - **Pros (Cloud):** Easy setup, high-quality language understanding  
   - **Cons (Cloud):** Latency, cost, dependency on internet  
   - **Pros (Local):** Offline, reproducible, lower latency  
   - **Cons (Local):** Requires high VRAM and GPU resources  

3. **Edge Deployment**  
   - Mandatory vs optional deployment on Jetson  
   - **Pros (Mandatory):** Ensures sim-to-real skills  
   - **Cons (Mandatory):** High cost, hardware dependency  
   - **Pros (Optional):** Flexible for students without edge kits  
   - **Cons (Optional):** Less complete hands-on experience  

4. **Robot Type for Capstone**  
   - Full humanoid vs proxy (quadruped or robotic arm)  
   - **Pros (Humanoid):** Full sim-to-real embodiment, authentic experience  
   - **Cons (Humanoid):** Expensive, limited accessibility  
   - **Pros (Proxy):** Affordable, widely accessible  
   - **Cons (Proxy):** Partial embodiment, slightly reduced realism  

---

## References

- /specs/005-vla-humanoid-robot/plan.md
- /specs/005-vla-humanoid-robot/research.md
- Module 1–3 specifications (ROS 2, Gazebo, Isaac Sim)  
- OpenAI Whisper documentation  
- GPT/LLM integration guides  
- NVIDIA Isaac ROS SDK documentation  
- RealSense D435i/D455 sensor documentation