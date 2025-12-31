import React from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageBookCovers from '@site/src/components/HomepageBookCovers';
import HomepageLearningPath from '@site/src/components/HomepageLearningPath';
import HomepageAudience from '@site/src/components/HomepageAudience'; // Import
import HomepageWhyDifferent from '@site/src/components/HomepageWhyDifferent'; // Import

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Humanoid AI"
      description="A complete guide to building humanoid robots — from ROS 2 foundations to Vision-Language-Action intelligence."
    >
      <HomepageHero />
      <main>
        <HomepageBookCovers />
        <HomepageLearningPath />
        <HomepageAudience /> {/* Render */}
        <HomepageWhyDifferent /> {/* Render */}
      </main>
    </Layout>
  );
}