import ProjectBlock from "./ProjectBlock"
import p1 from "../../graphics/project_thumbnail/p1.png"
import styles from '../../styles/ProjectGrid.module.scss'
import PropTypes from 'prop-types'

const ProjectGrid = ({projects, projectWidth, gridPadding}) => {
  return (
    <div className={styles['project-grid']} style={{gridTemplateColumns: `repeat(auto-fit, ${projectWidth})`, columnGap: `${gridPadding}`, rowGap: `${gridPadding}`}}>
        {projects.map((project) => (
          <ProjectBlock key={project} projectID={project} thumbnailSrc={p1} width={`${projectWidth}`} height={`${projectWidth}`}/>
        ))}
    </div>
  )
}

ProjectGrid.defaultProps = {
  projects: [],
  projectWidth: '700px',
  gridPadding: '100px',
}

ProjectGrid.propTypes = {
  projects: PropTypes.array,
  projectWidth: PropTypes.string,
  gridPadding: PropTypes.string,
}


export default ProjectGrid