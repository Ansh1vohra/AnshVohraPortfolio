import './App.css';
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Contact from './Components/Contact';
import ExperienceEducation from './Components/EducationExperience';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <a href="https://wa.me/7015150092" class="whatsapp-button" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
        </a>
    <div className="App">
        <Header />
        <Home />
        <Projects />
        <ExperienceEducation />
        <Contact />
        <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default App;
