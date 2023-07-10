import { useParams } from "react-router-dom"

import projectData from '../projects.json'

const ProjectPage = () => {
    const { urlKey } = useParams();
  
    return (
        <div>
        {
            projectData.projects.filter(project => project.urlKey === urlKey).map((project) => (<div>{project.title}</div>))
        }
        </div>
    )
}

export default ProjectPage