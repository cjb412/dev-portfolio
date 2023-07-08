import ProjectBlock from "./ProjectBlock.js"
import styles from './ProjectGrid.module.scss'
import PropTypes from 'prop-types'

//todo: REMOVE THIS PLACEHOLDER
import p1 from "../../graphics/project_thumbnail/p1.png"

const ProjectGrid = ({projects, projectWidth, gridPadding, projectTitleFont, projectCategoryFont}) => {
  return (
    <div className={styles['project-grid']} style={{gridTemplateColumns: `repeat(auto-fit, ${projectWidth})`, columnGap: `${gridPadding}`, rowGap: `${gridPadding}`}}>
        {projects.map((project) => (
          <ProjectBlock key={project} projectID={project} thumbnailSrc={p1} width={`${projectWidth}`} height={`${projectWidth}`} titleFont={projectTitleFont} categoryFont={projectCategoryFont}/>
        ))}
    </div>
  )
}

ProjectGrid.defaultProps = {
  projects: [],
  projectWidth: '700px',
  gridPadding: '100px',
  projectTitleFont: '',
  projectCategoryFont: '',
}

ProjectGrid.propTypes = {
  projects: PropTypes.array,
  projectWidth: PropTypes.string,
  gridPadding: PropTypes.string,
  projectTitleFont: PropTypes.string,
  projectCategoryFont: PropTypes.string,
}


export default ProjectGrid