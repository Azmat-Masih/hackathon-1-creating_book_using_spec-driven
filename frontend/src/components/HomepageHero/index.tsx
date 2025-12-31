import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageHero.module.css';

// This will be populated with props and content in later tasks (US1)
export default function HomepageHero(): JSX.Element {
  const title = "Humanoid AI";
  const subtitle = "Physical AI, Embodied Intelligence & Autonomous Humanoid Systems";
  const missionStatement = "A complete, end-to-end guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence.";
  const ctaText = "Start Reading";
  const ctaLink = "/docs/module-1/"; // Updated from /docs/ to a valid module entry point

  // This will be handled in T013
  const backgroundImage = "/img/humanoid-hero-image.png";

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <p className={styles.missionStatement}>{missionStatement}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={ctaLink}>
            {ctaText}
          </Link>
        </div>
      </div>
    </header>
  );
}
