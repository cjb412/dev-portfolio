import styles from './ProjectGrid.module.scss'

import cx from "classnames"

const ProjectFilterButton = ({ filterName, applied, toggleFilterFunc }) => {
    const toggleFilter = () => {
      toggleFilterFunc(filterName)
    }
  
  return (
    <div onClick={toggleFilter} className={styles[applied ? "project-filter-button-applied" : "project-filter-button"]}>{filterName}</div>
  )
}

export default ProjectFilterButton