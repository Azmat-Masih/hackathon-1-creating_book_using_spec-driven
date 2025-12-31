# API Contracts (React Component Structure & Assets): Landing Page - Humanoid AI Book

**Branch**: `001-book-landing-page` | **Date**: December 30, 2025 | **Spec**: /specs/001-book-landing-page/spec.md

## Introduction

In the context of a Docusaurus custom landing page implemented as a React component, "API Contracts" refer to the expected structure of the React component itself, the props it accepts (if any), and the assets (e.g., images, text snippets) it consumes. This ensures that the landing page component is well-defined, maintainable, and integrates correctly within the Docusaurus environment.

## Key Contracts

### 1. Homepage Component Structure (`frontend/src/pages/index.tsx`)

-   **Purpose**: Defines the overall layout and sections of the landing page.
-   **Contract**: The `index.tsx` component will render a composition of smaller, reusable React components, each corresponding to a required section of the landing page.
-   **Example (Conceptual)**:
    ```typescript jsx
    // frontend/src/pages/index.tsx
    import React from 'react';
    import Layout from '@theme/Layout';
    import HomepageHero from '@site/src/components/HomepageHero';
    import HomepageBookCovers from '@site/src/components/HomepageBookCovers';
    // ... import other section components

    function Home(): JSX.Element {
      return (
        <Layout
          title="Humanoid AI"
          description="A complete guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence.">
          <HomepageHero />
          <main>
            <HomepageBookCovers />
            {/* ... other sections */}
          </main>
        </Layout>
      );
    }

    export default Home;
    ```
    *Note: The actual component names and structure will depend on detailed UI design.*

### 2. Homepage Section Components (e.g., `frontend/src/components/HomepageHero.tsx`)

-   **Purpose**: Individual reusable React components for each distinct section of the landing page (Hero, What This Book Covers, Learning Path, etc.).
-   **Contract**: Each section component will accept props for dynamic content (e.g., `title`, `subtitle`, `description`, `ctaText`, `ctaLink`) and will render its specific layout.
-   **Example (Conceptual - HomepageHero)**:
    ```typescript jsx
    // frontend/src/components/HomepageHero.tsx
    import React from 'react';
    import clsx from 'clsx';
    import Link from '@docusaurus/Link';
    import styles from './HomepageHero.module.css';

    type HomepageHeroProps = {
      title: string;
      subtitle: string;
      missionStatement: string;
      ctaText: string;
      ctaLink: string;
      backgroundImage: string; // Path to real humanoid robot imagery
    };

    export default function HomepageHero({ title, subtitle, missionStatement, ctaText, ctaLink, backgroundImage }: HomepageHeroProps): JSX.Element {
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
    ```

### 3. Asset Contracts (`frontend/static/img/`)

-   **Purpose**: Defines the types and locations of visual assets used on the landing page.
-   **Contract**: All custom images (especially "real humanoid robot imagery") will be located in `frontend/static/img/`. These assets should be optimized for web performance and compatible with dark/light modes.
-   **Example**: `frontend/static/img/humanoid-robot-hero.png`

## Validation

Adherence to these contracts will be validated through code reviews, Docusaurus build success, and visual verification of the rendered landing page, ensuring all required sections are present, correctly styled, and functional.
