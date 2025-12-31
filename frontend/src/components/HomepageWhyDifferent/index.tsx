import React from 'react';
import clsx from 'clsx';
import styles from './HomepageWhyDifferent.module.css';

const DifferentiatorList = [
  {
    title: 'Focus on Physical AI',
    description: 'We emphasize AI systems that interact directly with the physical world, going beyond theoretical concepts.',
    icon: '🌍' // Placeholder
  },
  {
    title: 'Sim-to-Real Mindset',
    description: 'Our approach integrates simulation with real-world deployment, preparing you for practical robotics challenges.',
    icon: '↔️' // Placeholder
  },
  {
    title: 'No Toy Examples',
    description: 'All examples and projects are designed for industry relevance and complex robotic applications.',
    icon: '⚙️' // Placeholder
  },
  {
    title: 'Industry-Aligned Stack',
    description: 'Leverage professional-grade tools like ROS 2, Isaac Sim, and modern LLM frameworks.',
    icon: '🛠️' // Placeholder
  },
];

function DifferentiatorCard({ title, description, icon }: { title: string; description: string; icon: string }) {
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

export default function HomepageWhyDifferent(): JSX.Element {
  return (
    <section className={styles.whyDifferent}>
      <div className="container">
        <h2 className="text--center">Why This Book Is Different</h2>
        <div className="row">
          {DifferentiatorList.map((props, idx) => (
            <DifferentiatorCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
