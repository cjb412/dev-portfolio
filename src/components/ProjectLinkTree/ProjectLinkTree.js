import styles from './ProjectLinkTree.module.scss'
import IconButton from '../IconButton/IconButton'

import linkIcon from '../../graphics/link_icon.png'
import gitLogo from '../../graphics/github_icon.png'

const ProjectLinkTree = ({ project, buttonFont }) => {
  return (
    <div className={styles["container"]}>
        <>
        {
        (project.gitUrl != null) ?
        <IconButton text="View On Github" dest={project.gitUrl} iconSrc={gitLogo} buttonFont={buttonFont} buttonHeight={'30px'}/>
        :
        <></>
        }
        {
        (project.siteUrl != null) ?
        <IconButton text="Visit Project Website" dest={project.siteUrl} iconSrc={linkIcon} buttonFont={buttonFont} buttonHeight={'30px'}/>
        :
        <></>
        }
        </>
    </div>
  )
}

export default ProjectLinkTree