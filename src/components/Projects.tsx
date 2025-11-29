import React from 'react';
import { Project } from '../types/Project';

const Projects: React.FC = () => {
    const projectList: Project[] = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            tags: ['React', 'Next.js'],
            liveUrl: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            tags: ['TypeScript', 'CSS Modules'],
            liveUrl: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            tags: ['Automation', 'n8n'],
            liveUrl: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.liveUrl}>View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;