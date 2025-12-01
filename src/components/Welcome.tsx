import React from 'react';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className={styles.welcome}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Welcome to My Portfolio</h1>
        <p className={styles.intro} style={{ textAlign: "left" }}>
          As a Technical Architect, Automation Consultant, and Digital Specialist,  
          I craft robust, scalable solutions that enhance efficiency and spark innovation.
          <br /><br />
          With over 15 years’ experience across digital marketing, workflow automation,  
          and business development, I bring a multidisciplinary approach to solving complex challenges.
          <br /><br />
          My work translates technical systems into clear, measurable outcomes,  
          empowering teams and driving actionable results.
          <br /><br />
          Explore my portfolio to see how I can add value to your team.
        </p>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Welcome;