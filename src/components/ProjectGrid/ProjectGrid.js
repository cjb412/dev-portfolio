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

  const ToggleTechnologyFilter = (filterKey) => {
    var newFilters = new Map()

    technologyFilters.forEach(function(value, key) {
        filterKey == key ? newFilters.set(key, [!value[0], value[1]]) : newFilters.set(key, value)
    })

    setTechnologyFilters(newFilters)
  }

  const ClearFilters = () =>
  {
    var newFilters = new Map()
    
    technologyFilters.forEach(function(value, key) {
      newFilters.set(key, [false, value[1]])
    })

    setTechnologyFilters(newFilters)
  }

  function DoesProjectMeetFilterCriteria(project)
  {
    var metCriteria = true
    Array.from(technologyFilters.keys()).map(
      (k) => {
          if (technologyFilters.get(k)[0] && !project.technologies.map((techPair) => ( techPair[0] )).includes(k))
          {
            metCriteria = false
          }
      }
    )
    return metCriteria
  }

  return (
    <div className={styles["grid-container"]}>
      <ProjectFilter technologyFilters={technologyFilters} filterBarFont={projectCategoryFont} filterTagFont={projectCategoryFont} toggleTechnologyFilter={(e) => {ToggleTechnologyFilter(e)}} clearFiltersFunc={() => {ClearFilters()}}/>

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