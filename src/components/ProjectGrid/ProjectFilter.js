import ProjectFilterButton from "./ProjectFilterButton";

import styles from "./ProjectGrid.module.scss"

import cx from "classnames"

const ProjectFilter = ({categoryFilters, technologyFilters, filterFont, updateCategoryFilters, updateTechnologyFilters}) => {
    const toggleCategoryFilter = (filterKey) => {
        var newFilters = new Map()

        categoryFilters.forEach(function(value, key) {
            filterKey == key ? newFilters.set(key, !value) : newFilters.set(key, value)
        })

        updateCategoryFilters(newFilters)
    }

    const toggleTechnologyFilter = (filterKey) => {
        var newFilters = new Map()

        technologyFilters.forEach(function(value, key) {
            filterKey == key ? newFilters.set(key, !value) : newFilters.set(key, value)
        })

        updateTechnologyFilters(newFilters)
    }

    return (
        <div className={cx(filterFont, styles["project-filter-bar"])}>
            <div>
            {
                Array.from(categoryFilters.keys()).map(
                    (k, i) => (
                        <ProjectFilterButton key={i} filterName={k} applied={categoryFilters.get(k)} toggleFilterFunc={(filterKey) => toggleCategoryFilter(filterKey)}/>
                    )
                )
            }
            </div>
            <div>
            {
                Array.from(technologyFilters.keys()).map(
                    (k, i) => (
                        <ProjectFilterButton key={i} filterName={k} applied={technologyFilters.get(k)} toggleFilterFunc={(filterKey) => toggleTechnologyFilter(filterKey)}/>
                    )
                )
            }
            </div>
        </div>
    )
}

export default ProjectFilter