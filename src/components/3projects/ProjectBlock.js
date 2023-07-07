import styles from '../../styles/ProjectBlock.module.scss'
import PropTypes from 'prop-types'

const ProjectBlock = ({projectID, title, desc, thumbnailSrc, columnCount, rowCount}) => {
    return (
        <div className={styles['project-block']} style={{width: `${100.0/columnCount}%`}}>
            <div className={styles['project-block-padding']}>
                <div className={styles['project-block-picture']}>
                    <div className={styles['project-block-picture-shadow']}>
                        <img src={thumbnailSrc} alt={`${title} - Thumbnail`}></img>
                    </div>
                </div>
                <div className={styles['project-block-caption-area']}>
                    <div className={styles['project-block-title project-title-font']}>{title}</div>
                    <div className={styles['project-block-category project-category-font']}>{title}</div>
                </div>
            </div>
        </div>
    )
}


ProjectBlock.defaultProps = {
    projectID: 0,
    title: 'Untitled Project',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnailSrc: '',
    columnCount: 3,
    rowCount: 2
}

ProjectBlock.propTypes = {
    projectID: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    thumbnailSrc: PropTypes.string,
    columnCount: PropTypes.number,
    rowCount: PropTypes.number
}

export default ProjectBlock