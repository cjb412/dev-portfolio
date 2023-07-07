import ProjectGrid from "./ProjectGrid"

const ProjectsSection = () => {
  return (
    <div id='projects-section'>
        <h2>Projects</h2>
        <div className="subtle-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
        </div>
        <ProjectGrid projects={['1', '2', '3', '5', '7']} projectWidth={'min(max(32vw, 400px), 600px)'} gridPadding={'min(max(8vw, 100px), 150px)'}/>
    </div>
  )
}

export default ProjectsSection