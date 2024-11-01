import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-white mt-5 p-4 text-center">
        <hr style={{color:"white",marginBottom:'2rem'}} />
        <div >
            <h5>About Me</h5>
            <p>
              I'm a Software Engineering student passionate about web development, particularly in the MERN stack. Check out my projects and feel free to get in touch!
            </p>
          </div>
      <div className="p-3">
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
          <div>
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex align-items-center gap-3">
              <li><a href="#projects" className="text-white">Projects</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#about" className="text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h5>Follow Me</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="mx-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li className="mx-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} Ansh Vohra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
