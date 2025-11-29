import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: '#'
        }
    ];

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;