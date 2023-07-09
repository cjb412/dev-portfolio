import styles from './ProjectGrid.module.scss'

const ClearFiltersButton = ({ clearFilters }) => {
    return (
        <div onClick={clearFilters} className={styles["clear-filter-button"]}>Clear Filters</div>
    )
}

export default ClearFiltersButton