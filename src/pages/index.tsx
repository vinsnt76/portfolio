import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Welcome from '@/components/Welcome';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Welcome />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}