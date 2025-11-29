// src/pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vinnie Baker | Portfolio</title>
        <meta name="description" content="Vinnie Baker's personal portfolio" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section id="home" className={styles.section}>
            <h1>Welcome to My Portfolio</h1>
            <p>Showcasing technical architecture, automation, and design.</p>
          </section>

          <section id="about" className={styles.section}>
            <h2>About Me</h2>
          </section>

          <section id="projects" className={styles.section}>
            <h2>Projects</h2>
          </section>

          <section id="contact" className={styles.section}>
            <h2>Contact</h2>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;