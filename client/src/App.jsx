import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Lottie from 'react-lottie';
import BackgroundLottie from './assets/BackgroundAnimation.json';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BackgroundLottie, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
    <div className="background-lottie">
        <Lottie options={defaultOptions} />
      </div>
    <HomePage/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
