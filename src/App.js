import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Skills from './components/skills';
import Education from './components/education';
import Project from './components/project';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
  return (
    <div> 
      <Nav />
      <Intro />
      <Skills/>
      <Education/>
      <Project/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
