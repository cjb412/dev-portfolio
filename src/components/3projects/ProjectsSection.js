import ProjectList from "./ProjectList"

const ProjectsSection = () => {
  return (
    <div id='projects-section'>
        <h2>Projects</h2>
        <div className="subtle-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
        </div>
        <ProjectList projects={['1', '2', '3', '5', '7']}/>
    </div>
  )
}

export default ProjectsSection