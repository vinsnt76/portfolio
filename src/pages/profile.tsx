import Head from 'next/head';
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile – Vince Baker</title>
        <meta name="description" content="Portfolio profile page for Vince Baker" />
      </Head>
      <Header />
      <Welcome />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}