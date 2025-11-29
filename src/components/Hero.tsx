import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my projects, skills, and experiences.</p>
                <a href="#projects" className="btn">View Projects</a>
            </div>
        </section>
    );
};

export default Hero;