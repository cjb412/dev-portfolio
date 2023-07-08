import IndexBar from './components/IndexBar/IndexBar';
// import AboutSection from './components/1about/AboutSection';
// import ExperienceSection from './components/2experience/ExperienceSection';
import ProjectGrid from "./components/ProjectGrid/ProjectGrid"

import EmailBar from './components/EmailBar/EmailBar'

import ContactSiteButton from './components/ContactSiteButton/ContactSiteButton'
import liLogo from './graphics/linkedin_icon.png'
import gitLogo from './graphics/github_icon.png'

const App = () => {
  return (
    <div className="App">
      <div className='section-container'>
        {/* --------------------------- HOME SECTION --------------------------- */}
        <div id='home-section'>

          <div className='text-container'>

            <h1 className='home-name name-font'>Chris</h1>
            <h1 className='home-name name-font'>Blank</h1>
            <p className='home-subtitle subtitle-font'>Software Engineer, Full Stack Developer, Game Dev Hobbyist</p>

          </div>

        </div>
        
        {/* --------------------------- ABOUT SECTION --------------------------- */}
        {/*
        <div id='about-section'>
          <h2 className='header-font'>About Me</h2>
          <div className='body-font'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
          </div>
        </div>
        */}
        {/* --------------------------- EXPERIENCE SECTION --------------------------- */}
        {/*
        <div id='experience-section'>
          <h2 className='header-font'>Experience</h2>
          <div className='body-font'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
          </div>
        </div>
        */}
        {/* --------------------------- PROJECT SECTION --------------------------- */}
        <div id='projects-section'>

          <h2 className='header-font'>Projects</h2>
          <div className="body-font" style={{height: `200px`}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
          </div>

          <ProjectGrid projects={['1', '2', '3', '5', '7']} projectWidth={'min(90lvw, 600px)'} gridPadding={'min(22.5lvw, 150px)'} projectTitleFont={'project-title-font'} projectCategoryFont={'project-category-font'} projectTechnologiesFont={'project-technologies-font'}/>

        </div>

        {/* --------------------------- CONTACT SECTION --------------------------- */}
        <div id="contact-section">

          <h2 className='header-font'>Contact</h2>
          <div className="body-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
          </div>

          <EmailBar email='cdfcblank@gmail.com' barHeight={'50px'} buttonAspectRatio={2} fontClass={'email-font'}/>

          <div className="social-media-subsection">

            <p className="body-font"> You can also visit me on social media: </p>

            <ContactSiteButton dest="" iconSrc={liLogo} alt='LinkedIn Logo' text='LinkedIn' buttonFont='site-button-font'/>
            <ContactSiteButton dest="" iconSrc={gitLogo} alt='GitHub Logo' text='GitHub' buttonFont='site-button-font'/>

          </div>
        </div>
      </div>
      <IndexBar fontClass={'index-font'}/>
    </div>
  );
}

export default App;
