import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'; // Consolidated and correct import
import About from '@/components/About'; // Assuming this component exists or will be created
import Experience from '@/components/Experience'; // Assuming this component exists or will be created

export default function Home() {
  return (
    <Layout>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-5xl font-extrabold">Welcome</h1>
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <About />
      </section>
      <section id="experience" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-blue-500 text-white">
        <Contact />
      </section>
    </Layout>
  );
}