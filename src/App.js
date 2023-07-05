//import { useEffect } from 'react'
import './App.css';
import HomeSection from './components/0home/HomeSection';
import AboutSection from './components/1about/AboutSection';
import ExperienceSection from './components/2experience/ExperienceSection';
import ProjectsSection from './components/3projects/ProjectsSection';
import ContactSection from './components/4contact/ContactSection';

const App = () => {
  return (
    <div className="App">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
