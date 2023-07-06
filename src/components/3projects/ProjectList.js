import { useState, useEffect } from "react"
import ProjectBlock from "./ProjectBlock"
import p1 from "../../graphics/project_thumbnail/p1.png"

const ProjectList = ({projects}) => {
  const [projectCollection, setProjects] = useState(projects)
  const [listingWidth, setListWidth] = useState(0)
  
  // UPDATE FOR NEW PROJECT COLLECTION
  useEffect(() => {
    console.log(`${projectCollection}` + '- Has changed')
    
    if(projectCollection.length > 2)
    {
        setListWidth(1200)
    }
    else
    {
        setListWidth(400*projectCollection.length)
    }
    
  },[projectCollection]) // <-- here put the parameter to listen

  return (
    <div className='project-list' style={{width: `${listingWidth}px`}}>
        {projectCollection.map((project) => (
            <ProjectBlock key={project} projectID={project} thumbnailSrc={p1}/>
        ))}
    </div>
  )
}



export default ProjectList