import { useState, useEffect } from "react"

import ProjectBlock from "./ProjectBlock.js"
import styles from './ProjectGrid.module.scss'
import PropTypes from 'prop-types'

//todo: REMOVE THIS PLACEHOLDER
import p1 from "../../graphics/project_thumbnail/p1.png"
import ProjectFilter from "./ProjectFilter.js"

const ProjectGrid = ({projects, projectWidth, gridPadding, projectTitleFont, projectCategoryFont, projectTechnologiesFont}) => {
  const [categoryFilters, setCategoryFilters] = useState (GenerateCategoryFiltersFromProjectData())
  const [technologyFilters, setTechnologyFilters] = useState (GenerateTechnologyFiltersFromProjectData())

  function GenerateCategoryFiltersFromProjectData ()
  {
    var categories = new Map()
    projects.forEach(project =>
    (
        project.categories.forEach(category =>
        {
            if (!categories.has(category))
            {
              categories.set(category, [true, 1])
            } else {
              categories.set(category, [true, categories.get(category)[1] + 1])
            }
        })
    ))
    return categories
  }

  function GenerateTechnologyFiltersFromProjectData ()
  {
    var techs = new Map()
    projects.forEach(project =>
    (
        project.technologies.forEach(technology =>
        {
            if (!techs.has(technology[0]))
            {
              techs.set(technology[0], [true, 1])
            } else {
              techs.set(technology[0], [true, techs.get(technology[0])[1] + 1])
            }
        })
    ))
    return techs
  }

  function DoesProjectMeetFilterCriteria(project)
  {
    var meet = false
    project.categories.map((category) => {meet = meet || (categoryFilters.has(category) && categoryFilters.get(category))})
    project.technologies.map((technology) => {meet = meet || (technologyFilters.has(technology[0]) && technologyFilters.get(technology[0]))})
    return meet
  }

  return (
    <div className={styles["grid-container"]}>
      <ProjectFilter categoryFilters={categoryFilters} technologyFilters={technologyFilters} filterFont={projectCategoryFont} updateCategoryFilters={(e) => {setCategoryFilters(e)}} updateTechnologyFilters={(e) => {setTechnologyFilters(e)}}/>

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