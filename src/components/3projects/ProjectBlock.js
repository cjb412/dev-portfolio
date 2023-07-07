import styles from '../../styles/ProjectBlock.module.scss'
import PropTypes from 'prop-types'

const ProjectBlock = ({title, category, thumbnailSrc, width, height, padding}) => {
    return (
        
        <div className={styles['project-block']} style={{width: width, height: height}}>
            <div className={styles['thumbnail-area']}>
                <img src={thumbnailSrc} alt={`${title} - Thumbnail`}></img>
            </div>
            <div className={styles['caption-area']} style={{padding: `${padding}`}}>
                <div className={styles['title']} >{title}</div>
                <div className={styles['category']}>{category}</div>
            </div>
        </div>
    )
}


ProjectBlock.defaultProps = {
    title: 'Untitled Project but the title is really long',
    category: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnailSrc: '',

    width: '400px',
    height:'400px',
    padding: '20px',
}

ProjectBlock.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    thumbnailSrc: PropTypes.string,

    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
}

export default ProjectBlock