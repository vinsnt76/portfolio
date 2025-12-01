// src/pages/profile.tsx
import Layout from '@/components/Layout';

export default function Profile() {
  return (
    <Layout title="Profile | Vincent Baker" description="Professional profile of Vincent Baker">
      <section id="profile" className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            Vincent Baker
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Technical Architect, Digital Strategist & Automation Consultant.
            I specialize in building scalable systems, optimising workflows, and designing
            recruiter‑friendly portfolio experiences.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Core Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              ✅ Next.js, React, TypeScript
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              ✅ Tailwind CSS, Modular UI Design
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              ✅ Workflow Automation (PowerShell, CI/CD, Playwright)
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              ✅ Branding & Asset Generation (OG images, favicons, manifests)
            </li>
          </ul>

          {/* Experience Section */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Experience</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Workflow Lead</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed and implemented modular automation pipelines, ensuring clarity, maintainability,
                and recruiter‑friendly documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Freelance AI Consultant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Delivered hands‑on campaigns for BabyBento and optimized cross‑platform scripting solutions.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
