import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {
        type: 'doc',
        id: 'module-1/index',
      },
      items: [
        'module-1/chapter-1-intro-ros2',
        'module-1/chapter-2-ros2-communication',
        'module-1/chapter-3-rclpy-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {
        type: 'doc',
        id: 'module-2/index',
      },
      items: [
        'module-2/chapter-1-digital-twins-for-physical-ai',
        'module-2/chapter-2-physics-simulation-with-gazebo',
        'module-2/chapter-3-sensor-simulation-hri',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      link: {
        type: 'doc',
        id: 'module-3/index',
      },
      items: [
        'module-3/chapter-1-intro-ai-humanoids',
        'module-3/chapter-2-photorealistic-simulation',
        'module-3/chapter-3-synthetic-data',
        'module-3/chapter-4-gpu-perception',
        'module-3/chapter-5-visual-slam',
        'module-3/chapter-6-navigation-nav2',
        'module-3/chapter-7-sim-to-real',
        'module-3/chapter-8-summary-validation',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA) for Humanoid Robots',
      link: {
        type: 'doc',
        id: 'module-4/index',
      },
      items: [
        'module-4/chapter-1-intro-vla',
        'module-4/chapter-2-ros2-integration',
        'module-4/chapter-3-voice-to-action',
        'module-4/chapter-4-llm-planning',
        'module-4/chapter-5-capstone-project',
        'module-4/chapter-6-validation-assessment',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
