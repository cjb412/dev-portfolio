import styles from './ProjectBlock.module.scss'
import PropTypes from 'prop-types'

import cx from 'classnames'

const ProjectBlock = ({title, category, technologies, thumbnailSrc, width, height, padding, titleFont, categoryFont, technologiesFont}) => {
    return (
        
        <div className={styles['project-block']} style={{width: width, height: height}}>
            <div className={styles['thumbnail-area']}>
                <img src={thumbnailSrc} alt={`${title} - Thumbnail`}></img>
            </div>
            <div className={styles['caption-area']}>
                <div className={cx(styles['title'], titleFont)} >{title}</div>
                <div className={cx(styles['category'], categoryFont)}>{category}</div>
                <div className={cx(styles['technologies'], technologiesFont)}>
                    {technologies.map((tech) => (
                        <span className={styles[tech[1]]}>{tech[0]}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

ProjectBlock.defaultProps = {
    title: 'Untitled Project but the title is really long',
    category: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [['Tech A', 'techA'], ['Tech B', 'techB']],
    thumbnailSrc: '',

    width: '0px',
    height:'0px',

    titleFont: '',
    categoryFont: '',
    technologiesFont: '',
}

ProjectBlock.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    technologies: PropTypes.array,
    thumbnailSrc: PropTypes.string,

    width: PropTypes.string,
    height: PropTypes.string,

    titleFont: PropTypes.string,
    categoryFont: PropTypes.string,
    technologiesFont: PropTypes.string,
}

export default ProjectBlock