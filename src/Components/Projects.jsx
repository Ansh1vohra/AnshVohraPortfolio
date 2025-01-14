import React from 'react';
import './Projects.css';
// import img1 from "./Images/4380-removebg-preview.png";
import showCraze from "./Images/Show-Craze.png";
import blogPlatform from "./Images/blog-new.png";
import deeen from "./Images/deeen.png";
import joboard from "./Images/joboard.png";
import { Parallax } from 'react-scroll-parallax';

function Projects() {
  const projects = [
    {
      name: 'JoBoard',
      description: 'A job board web application designed to connect job seekers with potential employers. Built using the MERN stack.',
      link: 'https://avjoboard.web.app',
      image: joboard, // Add image reference
    },
    {
      name: 'Show Craze',
      description: 'An efficient online movie ticket booking system using HTML, CSS, Bootstrap, JavaScript, and Firebase.',
      link: 'https://avmovieprj.web.app/',
      image: showCraze, // Add image reference
    },
    {
      name: 'Blog Platform',
      description: 'A Blog Website using MERN stack.',
      link: 'https://blog-platform-ansh-vohras-projects.vercel.app',
      image: blogPlatform, // Add image reference
    },
    {
      name: 'E-Commerce Website for Music Band',
      description: 'An e-commerce website tailored for a music band using WordPress and WooCommerce.',
      link: 'https://deeen.in',
      image: deeen, // Add image reference
    },
  ];
  

  return (
    <div className="projects-container container" id="projects">
      <Parallax speed={8}>
        <h3 className="projects-title">My Projects</h3>
      </Parallax>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Parallax key={index} speed={12} opacity={[1, 0.7]} scale={[0.9, 1]}>
            <div className="project-card">
              <img src={project.image} alt={project.name} /> {/* Use project-specific image */}
              <div className='p-4'>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
              </div>
            </div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default Projects;
