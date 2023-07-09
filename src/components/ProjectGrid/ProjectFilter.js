import ClearFiltersButton from "./ClearFiltersButton";
import ProjectFilterButton from "./ProjectFilterButton";

import styles from "./ProjectGrid.module.scss"

import cx from "classnames"

const ProjectFilter = ({technologyFilters, filterBarFont, filterTagFont, toggleTechnologyFilter, clearFiltersFunc}) => {
    return (
        <div className={styles["project-filter-bar"]}>
            <div className={cx(filterBarFont, styles["project-filter-bar-header"])}>
                <div>Filter by Tag:</div>
                <ClearFiltersButton clearFilters={clearFiltersFunc}/>
            </div>
            <div className={cx(filterTagFont, styles["project-filter-tag-list"])}>
                {
                    Array.from(technologyFilters.keys()).sort().map(
                        (k, i) => (
                            <ProjectFilterButton key={i} filterName={k} filterCount={technologyFilters.get(k)[1]} applied={technologyFilters.get(k)[0]} toggleFilterFunc={(filterKey) => toggleTechnologyFilter(filterKey)}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProjectFilter