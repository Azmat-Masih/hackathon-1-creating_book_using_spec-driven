import React from 'react';
import clsx from 'clsx';
import styles from './HomepageBookCovers.module.css';

const FeatureList = [
  {
    title: 'ROS 2 (Robot Nervous System)',
    description: (
      <>
        Learn how ROS 2 provides the communication backbone for complex robotic systems, enabling modular and scalable development.
      </>
    ),
  },
  {
    title: 'Simulation & Digital Twins',
    description: (
      <>
        Dive into realistic simulation environments like Isaac Sim and Gazebo to test and validate robot behaviors before real-world deployment.
      </>
    ),
  },
  {
    title: 'AI Robot Brain (Isaac)',
    description: (
      <>
        Explore NVIDIA Isaac platform for developing advanced AI capabilities, including perception, navigation, and manipulation for humanoid robots.
      </>
    ),
  },
  {
    title: 'Vision-Language-Action (VLA)',
    description: (
      <>
        Integrate large language models (LLMs) with vision and action systems to create robots that understand and respond to natural language commands.
      </>
    ),
  },
  {
    title: 'Autonomous Humanoid Capstone',
    description: (
      <>
        Apply all learned concepts to build an autonomous humanoid robot that perceives, plans, navigates, and manipulates objects using voice commands.
      </>
    ),
  },
];

function Feature({ title, description }: { title: string; description: JSX.Element }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Placeholder for icon/image if needed */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageBookCovers(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">What This Book Covers</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
