import React from 'react';
import clsx from 'clsx';
import styles from './HomepageLearningPath.module.css';

const LearningPathModules = [
  {
    title: 'Module 1: ROS 2 Foundations',
    description: 'Establish core understanding of ROS 2 concepts and development tools.',
    icon: '💡' // Placeholder
  },
  {
    title: 'Module 2: Simulation & Digital Twins',
    description: 'Explore physics-based simulation with Gazebo and Unity for realistic robot environments.',
    icon: '🎮' // Placeholder
  },
  {
    title: 'Module 3: AI-Robot Brain (Perception & Navigation)',
    description: 'Develop AI perception and navigation pipelines using NVIDIA Isaac tools.',
    icon: '🧠' // Placeholder
  },
  {
    title: 'Module 4: VLA for Humanoid Robots (Capstone)',
    description: 'Integrate Vision-Language-Action systems for autonomous humanoid control.',
    icon: '🤖' // Placeholder
  },
];

function LearningModule({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <h3>{icon} {title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageLearningPath(): JSX.Element {
  return (
    <section className={styles.learningPath}>
      <div className="container">
        <h2 className="text--center">Our Learning Path</h2>
        <div className="row">
          {LearningPathModules.map((props, idx) => (
            <LearningModule key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
