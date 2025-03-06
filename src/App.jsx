// React Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Global Styles
import './App.css';
// Hero Section Component
import HeroSection from './components/HeroSection';
// Navbar Component
import NavBar from './components/NavBar';
// Skills Component
import Skills from './components/Skills';
import Contact from './components/Contact';
// Projects Component
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
