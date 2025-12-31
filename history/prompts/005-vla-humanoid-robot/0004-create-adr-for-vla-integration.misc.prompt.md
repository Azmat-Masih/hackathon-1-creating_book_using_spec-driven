---
id: 0004
title: Create ADR for VLA Integration
stage: misc
date: 2025-12-30
surface: agent
model: gemini-1.5-flash
feature: 005-vla-humanoid-robot
branch: 005-vla-humanoid-robot
user: CLI_user
command: /sp.adr # ADR-0020: VLA Integration for Humanoid Robots

> **Scope**: Document decision clusters for the Vision-Language-Action module, covering the integration of speech recognition, LLM-based planning, ROS 2 middleware, perception, and optional edge deployment.

- **Status:** Accepted
- **Date:** 2025-12-30
- **Feature:** 004-ros2-book-module-4
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
   - **Pros (Local)::** Offline, reproducible, lower latency  
   - **Cons (Local):** Requires high VRAM and GPU resources  

3. **Edge Deployment**  
   - Mandatory vs optional deployment on Jetson  
   - **Pros (Mandatory):** Ensures sim-to-real skills  
   - **Cons (Mandatory)::** High cost, hardware dependency  
   - **Pros (Optional)::** Flexible for students without edge kits  
   - **Cons (Optional)::** Less complete hands-on experience  

4. **Robot Type for Capstone**  
   - Full humanoid vs proxy (quadruped or robotic arm)  
   - **Pros (Humanoid):** Full sim-to-real embodiment, authentic experience  
   - **Cons (Humanoid):** Expensive, limited accessibility  
   - **Pros (Proxy):** Affordable, widely accessible  
   - **Cons (Proxy):** Partial embodiment, slightly reduced realism  

---

## References

- Module 1–3 specifications (ROS 2, Gazebo, Isaac Sim)  
- OpenAI Whisper documentation  
- GPT/LLM integration guides  
- NVIDIA Isaac ROS SDK documentation  
- RealSense D435i/D455 sensor documentation
labels: [adr, vla, humanoid, robotics, module4]
links:
  spec: specs/005-vla-humanoid-robot/spec.md
  ticket: null
  adr: history/adr/0014-vla-integration-for-humanoid-robots.md
  pr: null
files:
  - history/adr/0014-vla-integration-for-humanoid-robots.md
tests: null
---

## Prompt

/sp.adr # ADR-0020: VLA Integration for Humanoid Robots

> **Scope**: Document decision clusters for the Vision-Language-Action module, covering the integration of speech recognition, LLM-based planning, ROS 2 middleware, perception, and optional edge deployment.

- **Status:** Accepted
- **Date:** 2025-12-30
- **Feature:** 004-ros2-book-module-4
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
   - **Pros (Local)::** Offline, reproducible, lower latency  
   - **Cons (Local):** Requires high VRAM and GPU resources  

3. **Edge Deployment**  
   - Mandatory vs optional deployment on Jetson  
   - **Pros (Mandatory):** Ensures sim-to-real skills  
   - **Cons (Mandatory)::** High cost, hardware dependency  
   - **Pros (Optional)::** Flexible for students without edge kits  
   - **Cons (Optional)::** Less complete hands-on experience  

4. **Robot Type for Capstone**  
   - Full humanoid vs proxy (quadruped or robotic arm)  
   - **Pros (Humanoid):** Full sim-to-real embodiment, authentic experience  
   - **Cons (Humanoid)::** Expensive, limited accessibility  
   - **Pros (Proxy):** Affordable, widely accessible  
   - **Cons (Proxy):** Partial embodiment, slightly reduced realism  

---

## References

- Module 1–3 specifications (ROS 2, Gazebo, Isaac Sim)  
- OpenAI Whisper documentation  
- GPT/LLM integration guides  
- NVIDIA Isaac ROS SDK documentation  
- RealSense D435i/D455 sensor documentation

## Response snapshot

✅ ADR Review Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Created ADRs: 1
   - ADR-0014: VLA Integration for Humanoid Robots

📚 Referenced Existing: 0

⚠️  Conflicts Detected: 0

Next Steps:
→ Review created ADRs with team
→ Update plan.md if needed

Acceptance Criteria (PASS only if all true)
- Decisions are clustered (not atomic), with explicit alternatives and tradeoffs
- Consequences cover both positive and negative outcomes
- References link back to plan and related docs

## Outcome

- ✅ Impact: An Architecture Decision Record (ADR) for VLA Integration for Humanoid Robots was created, documenting key architectural decisions, consequences, and alternatives.
- 🧪 Tests: None (documentation step).
- 📁 Files: history/adr/0014-vla-integration-for-humanoid-robots.md created/updated.
- 🔁 Next prompts: /sp.tasks or /sp.implement
- 🧠 Reflection: Successfully documented a significant architectural decision, ensuring clarity and traceability for future development.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null