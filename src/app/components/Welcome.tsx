import React from 'react';

const Welcome: React.FC = () => {
  return (
    // Use standard Tailwind classes for Hero Section layout and styling
    <section id="welcome" className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-6xl font-extrabold mb-4 dark:text-gray-100">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" style={{ textAlign: "left" }}>
          As a Technical Architect, Automation Consultant, and Digital Specialist,  
          I craft robust, scalable solutions that enhance efficiency and spark innovation.
          <br /><br />
          With over 15 years’ experience across digital marketing, workflow automation,  
          and business development, I bring a multidisciplinary approach to solving complex challenges.
          <br /><br />
          My work translates technical systems into clear, measurable outcomes, empowering teams and driving actionable results.
          <br /><br />
          Explore my portfolio to see how I can add value to your team.
        </p>
        {/* Tailwind classes for a strong CTA button */}
        <a href="#projects" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.01]">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Welcome;