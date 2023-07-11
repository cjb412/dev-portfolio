import { useParams } from "react-router-dom"

import projectData from '../projects.json'

import styles from './ProjectPage.module.scss'

import ProjectLinkTree from "../components/ProjectLinkTree/ProjectLinkTree";
import backIcon from "../graphics/back_icon.png";
import IconButton from "../components/IconButton/IconButton";

import cx from 'classnames'

const ProjectPage = () => {
    const { urlKey } = useParams();
    const filteredProjects = projectData.projects.filter(project => project.urlKey === urlKey);
    const project = (filteredProjects === 0) ? undefined : filteredProjects[0]
  
    return (
        <div className={styles["outer-content"]}>
            <div className={styles["return-button-container"]}>
                <IconButton text="Return To Projects List" dest={'../dev-portfolio#projects-section'} iconSrc={backIcon} buttonFont={'project-page-link-font'} buttonHeight={'30px'}/>
            </div>
            
            <div className={styles["inner-content"]}>
                {
                (project === undefined) ?
                <div>
                    <div className="header-font">Oops! There's nothing here.</div>
                    <div className="body-font">The URL you are trying to access doesn't lead to any valid project. Please return to the projects list and select a new project to view.</div>
                </div>
                :
                <div>
                    <div className={styles["header"]}>
                        <div className="header-font">{project.title}</div>
                        <ProjectLinkTree project={project} buttonFont='project-page-link-font'/>
                    </div>
                    <div className={cx(styles["description"], "body-font")}>{project.longDescription}</div>
                </div>
                }
            </div>
        </div>
    )
}

export default ProjectPage