import styles from './ProjectBlock.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import cx from 'classnames'

const ProjectBlock = ({project, thumbnailSrc, width, height, titleFont, descriptionFont, technologiesFont}) => {
    return (
        <Link style={{textDecoration: 'none'}} to={`/dev-portfolio/projects/${project.urlKey}`}>
            <div className={styles['project-block']} style={{width: width, height: height}}>
                <div className={styles['thumbnail-area']}>
                    <img src={thumbnailSrc} alt={`${project.title} - Thumbnail`}></img>
                </div>
                <div className={styles['caption-area']}>
                    <div className={cx(styles['title'], titleFont)} >{project.title}</div>

                    <div className={cx(styles['description'], descriptionFont)}>
                        {project.description}
                    </div>

                    <div className={cx(styles['technologies'], technologiesFont)}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={styles[tech[1]]}>{tech[0]}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

ProjectBlock.defaultProps = {
    project: {},

    thumbnailSrc: '',

    width: '0px',
    height:'0px',

    titleFont: '',
    categoryFont: '',
    technologiesFont: '',
}

ProjectBlock.propTypes = {
    project: PropTypes.object,
    
    thumbnailSrc: PropTypes.string,

    width: PropTypes.string,
    height: PropTypes.string,

    titleFont: PropTypes.string,
    categoryFont: PropTypes.string,
    technologiesFont: PropTypes.string,
}

export default ProjectBlock