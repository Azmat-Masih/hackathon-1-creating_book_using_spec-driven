import React from 'react';
import clsx from 'clsx';
import styles from './HomepageAudience.module.css';

const AudienceList = [
  {
    title: 'Students',
    description: 'Robotics students and those pursuing advanced degrees in AI and computer science.',
    icon: '🎓' // Placeholder
  },
  {
    title: 'Engineers',
    description: 'AI engineers transitioning into robotics, and experienced roboticists enhancing their AI skills.',
    icon: '⚙️' // Placeholder
  },
  {
    title: 'Researchers',
    description: 'Academics and industrial researchers exploring embodied intelligence and physical AI.',
    icon: '🔬' // Placeholder
  },
  {
    title: 'Builders',
    description: 'Anyone passionate about building advanced humanoid robot systems.',
    icon: '🛠️' // Placeholder
  },
];

function AudienceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
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

export default function HomepageAudience(): JSX.Element {
  return (
    <section className={styles.audience}>
      <div className="container">
        <h2 className="text--center">Who This Book Is For</h2>
        <div className="row">
          {AudienceList.map((props, idx) => (
            <AudienceCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
