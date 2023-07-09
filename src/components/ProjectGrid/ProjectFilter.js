import ProjectFilterButton from "./ProjectFilterButton";

import styles from "./ProjectGrid.module.scss"

import cx from "classnames"

const ProjectFilter = ({technologyFilters, filterFont, updateTechnologyFilters}) => {
    const toggleTechnologyFilter = (filterKey) => {
        var newFilters = new Map()

        technologyFilters.forEach(function(value, key) {
            filterKey == key ? newFilters.set(key, [!value[0], value[1]]) : newFilters.set(key, value)
        })

        updateTechnologyFilters(newFilters)
    }

    return (
        <div className={cx(filterFont, styles["project-filter-bar"])}>
            {
                Array.from(technologyFilters.keys()).sort().map(
                    (k, i) => (
                        <ProjectFilterButton key={i} filterName={k} applied={technologyFilters.get(k)[0]} toggleFilterFunc={(filterKey) => toggleTechnologyFilter(filterKey)}/>
                    )
                )
            }
        </div>
    )
}

export default ProjectFilter