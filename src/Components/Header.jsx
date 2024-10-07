import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';  // Import the arrow icon

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ fontSize: "1.3rem", fontWeight: "600" }}>Ansh Vohra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience & Education</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light" type="button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Contact Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> {/* Add the slant arrow here */}
                    </button>
                </div>
            </div>
        </nav>
    );
}
