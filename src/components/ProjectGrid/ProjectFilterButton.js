import styles from './ProjectGrid.module.scss'

import cx from "classnames"

const ProjectFilterButton = ({ filterName, filterCount, applied, toggleFilterFunc }) => {
  const toggleFilter = () => {
    toggleFilterFunc(filterName)
  }
  
  return (
    <div onClick={toggleFilter} className={cx(styles["project-filter-button"], applied ? styles["applied"] : "" )}><span>{filterName}<sup> ({filterCount})</sup></span></div>
  )
}

export default ProjectFilterButton