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
