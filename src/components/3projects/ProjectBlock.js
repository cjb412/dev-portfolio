import styles from '../../styles/ProjectBlock.module.scss'
import PropTypes from 'prop-types'

const ProjectBlock = ({title, thumbnailSrc, width, height, relativeX, relativeY}) => {
    return (
        <div className={styles['project-block']} style={{width: width, height: height}}>
            <div className={styles['thumbnail-area']}>
                <img src={thumbnailSrc} alt={`${title} - Thumbnail`}></img>
            </div>
            <div className={styles['caption-area']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['category']}>{title}</div>
            </div>
        </div>
    )
}


ProjectBlock.defaultProps = {
    title: 'Untitled Project',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnailSrc: '',
    width: 400,
    height: 400
}

ProjectBlock.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    thumbnailSrc: PropTypes.string
}

export default ProjectBlock