import Spline from '@splinetool/react-spline';
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Parallax } from 'react-scroll-parallax';
import MERN from './Images/MERN-new.png'


export default function App() {
  return (
    <Parallax speed={3}>

    <div className='Scene'>
      <Spline className='spline' scene="https://prod.spline.design/y-9TqNOIBv4CDcd4/scene.splinecode" />
      <div className='empty'></div>
      <Parallax speed={10}>
        <div className='IntroContent'>
          <div className='d-flex'>
            <span>HELLO I AM A</span> 
            <hr />
          </div>
          <h1>WEB DEVELOPER</h1>
          <p>Hi, I'm <b>Ansh Vohra</b>, a web developer driven by a passion for turning concepts into reality, crafting websites that are visually stunning and technically robust.</p>
          <img src={MERN} alt="MERN"></img>
          <div className='my-4 icons'> 
            <ul className="list-unstyled d-flex">
              <li className="mx-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://x.com/Ansh1Vohra" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Parallax>
    </div>
    </Parallax>
  );
}
