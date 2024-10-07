import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import "./EducationExperience.css";

function EducationExperience() {
  return (
    <section className="experience-education p-4 text-white" id="experience">
      <div className="container">
        <h2>Experience and Education</h2>
        <div className="timeline">
          <Parallax speed={6}>

            {/* Experience Section */}
            <div className="timeline-item left">
              <Parallax opacity={[0.5,1]}>
              <div className="content">
                <h5>Frontend Developer Intern at Jurident</h5>
                <p><em>August 2024 - Present</em></p>
              </div>
              </Parallax>
            </div>

            <div className="timeline-item right">
            <Parallax opacity={[0.5,1]}>
              <div className="content">
                <h5>Web Development Intern at CodSoft</h5>
                <p><em>June 2024 - July 2024</em></p>
                <ul>
                  <li>Developed a Job Board website using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
                  <li>Implemented features like job posting, job search, and applicant tracking.</li>
                  <strong>Key Achievements:</strong>
                  <li>Launched a fully functional job board platform with user authentication and authorization.</li>
                  <li>Enhanced the platform’s search functionality, resulting in a 40% increase in user engagement.</li>
                </ul>
              </div>
              </Parallax>
            </div>

            <div className="timeline-item left">
            <Parallax opacity={[0.5,1]}>
              <div className="content">
                <h5>E-Commerce Website for Music Band Merchandise</h5>
                <p><em>April 2024 (Freelance)</em></p>
                <ul>
                  <li>Designed and developed an e-commerce website using WordPress and WooCommerce.</li>
                  <strong>Key Achievements:</strong>
                  <li>Achieved a 50% increase in sales within the first month of launch.</li>
                </ul>
              </div>
              </Parallax>
            </div>

            {/* Education Section */}
            <div className="timeline-item right">
            <Parallax opacity={[0.4,1.4]}>
              <div className="content">
                <h5>Integrated M.Tech in Software Engineering</h5>
                <p><em>VIT University, Vellore | 2022 - Present</em></p>
                <ul>
                  <li><strong>Relevant Coursework:</strong></li>
                  <li>Web Technologies: HTML, CSS, JavaScript, and responsive design.</li>
                  <li>Database Management Systems: SQL, NoSQL, and database optimization techniques.</li>
                  <li>Information System and Security: Cryptography, network security, and secure coding practices.</li>
                </ul>
              </div>
              </Parallax>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;
