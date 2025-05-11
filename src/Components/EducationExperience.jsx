import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import "./EducationExperience.css";

function EducationExperience() {
  return (
    <section className="experience-education py-12 text-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center relative">
          <span className="relative z-10 px-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Experience & Education
          </span>
          <span className="absolute h-1 w-24 bg-cyan-400 bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        
        <div className="timeline relative">
          {/* Experience Section */}
          <div className="timeline-item left">
            <div className="content">
              <div className="timeline-header">
                <h5 className="text-xl font-semibold mb-2">Front-End Development Intern at Civilytix (VIT-TBI)</h5>
                <span className="timeline-date bg-blue-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Feb 2025 - March 2025</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Developed a Job Board website using the MERN stack (MongoDB, Express.js, React, Node.js)
                </li>
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Implemented features like job posting, job search, and applicant tracking
                </li>
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Launched a fully functional job board platform with user authentication
                </li>
              </ul>
              <div className="tech-tags mt-4 flex flex-wrap gap-2">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Express</span>
              </div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="content">
              <div className="timeline-header">
                <h5 className="text-xl font-semibold mb-2">Frontend Developer Intern at Jurident (VALSCO TECHNOLOGY)</h5>
                <span className="timeline-date bg-blue-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Aug 2024 - Oct 2024</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Designed responsive web applications using React.js and Tailwind CSS
                </li>
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Implemented interactive features and parallax scrolling effects
                </li>
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Collaborated on user-centric designs and seamless functionality
                </li>
              </ul>
              <div className="tech-tags mt-4 flex flex-wrap gap-2">
                <span className="tag">React</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <div className="timeline-header">
                <h5 className="text-xl font-semibold mb-2">E-Commerce Website for Music Band Merchandise</h5>
                <span className="timeline-date bg-blue-900 text-cyan-300 px-3 py-1 rounded-full text-sm">April 2024 (Freelance)</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bullet mr-2 mt-1">•</span>
                  Designed and developed an e-commerce website using WordPress and WooCommerce
                </li>
              </ul>
              <div className="tech-tags mt-4 flex flex-wrap gap-2">
                <span className="tag">WordPress</span>
                <span className="tag">WooCommerce</span>
                <span className="tag">PHP</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="timeline-item right">
            <div className="content">
              <div className="timeline-header">
                <h5 className="text-xl font-semibold mb-2">Integrated M.Tech in Software Engineering</h5>
                <span className="timeline-date bg-blue-900 text-cyan-300 px-3 py-1 rounded-full text-sm">2022 - Present</span>
              </div>
              <p className="text-blue-200 mb-3">VIT University, Vellore</p>
              <div className="mt-2">
                <h6 className="font-medium text-cyan-300 mb-2">Relevant Coursework:</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bullet mr-2 mt-1">•</span>
                    Web Technologies: HTML, CSS, JavaScript, and responsive design
                  </li>
                  <li className="flex items-start">
                    <span className="bullet mr-2 mt-1">•</span>
                    Database Management Systems: SQL, NoSQL, and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="bullet mr-2 mt-1">•</span>
                    Information System and Security: Cryptography, network security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;