import { useState, useEffect } from "react"

import ProjectBlock from "./ProjectBlock.js"
import styles from './ProjectGrid.module.scss'
import PropTypes from 'prop-types'

//todo: REMOVE THIS PLACEHOLDER
import p1 from "../../graphics/project_thumbnail/p1.png"
import ProjectFilter from "./ProjectFilter.js"

const ProjectGrid = ({projects, projectWidth, gridPadding, projectTitleFont, projectCategoryFont, projectTechnologiesFont}) => {
  const [technologyFilters, setTechnologyFilters] = useState (GenerateTechnologyFiltersFromProjectData())

  function GenerateTechnologyFiltersFromProjectData ()
  {
    var techs = new Map()
    projects.forEach(project =>
    (
        project.technologies.forEach(technology =>
        {
            if (!techs.has(technology[0]))
            {
              techs.set(technology[0], [false, 1])
            } else {
              techs.set(technology[0], [false, techs.get(technology[0])[1] + 1])
            }
        })
    ))
    return techs
  }

  function DoesProjectMeetFilterCriteria(project)
  {
    var filterNotClear = false
    Array.from(technologyFilters.keys()).map(
      (k) => {
          if (technologyFilters.get(k)[0])
          {
            filterNotClear = true
          }
      }
    )

    if(!filterNotClear) return true

    var meet = false
    project.technologies.map((technology) => {meet = meet || (technologyFilters.has(technology[0]) && technologyFilters.get(technology[0])[0])})
    return meet
  }

  return (
    <div className={styles["grid-container"]}>
      <ProjectFilter technologyFilters={technologyFilters} filterFont={projectCategoryFont} updateTechnologyFilters={(e) => {setTechnologyFilters(e)}}/>

      <div className={styles['project-grid']} style={{gridTemplateColumns: `repeat(auto-fit, ${projectWidth})`, columnGap: `${gridPadding}`, rowGap: `${gridPadding}`}}>
          {projects.map((project) => (
            DoesProjectMeetFilterCriteria(project) ?
            <ProjectBlock key={project.id} project={project} thumbnailSrc={p1} width={`${projectWidth}`} height={`${projectWidth}`} titleFont={projectTitleFont} categoryFont={projectCategoryFont} technologiesFont={projectTechnologiesFont}/>
            :
            ''
          ))}
      </div>
    </div>
    
  )
}

ProjectGrid.defaultProps = {
  projects: [],
  projectWidth: '0px',
  gridPadding: '0px',
  projectTitleFont: '',
  projectCategoryFont: '',
  projectTechnologiesFont: '',
}

ProjectGrid.propTypes = {
  projects: PropTypes.array,
  projectWidth: PropTypes.string,
  gridPadding: PropTypes.string,
  projectTitleFont: PropTypes.string,
  projectCategoryFont: PropTypes.string,
  projectTechnologiesFont: PropTypes.string,
}


export default ProjectGrid