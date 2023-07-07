import HomeSection from './0home/HomeSection';
import AboutSection from './1about/AboutSection';
import ExperienceSection from './2experience/ExperienceSection';
import ProjectsSection from './3projects/ProjectsSection';
import ContactSection from './4contact/ContactSection';

const SectionContainer = () => {
  return (
    <div className='section-container'>
        <HomeSection />
        {/*<AboutSection />
        <ExperienceSection /> */}
        <ProjectsSection setProjectSectionWidth={() => {}}/>
        <ContactSection />
    </div>
  )
}

export default SectionContainer