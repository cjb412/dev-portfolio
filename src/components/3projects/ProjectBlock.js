import PropTypes from 'prop-types'

const ProjectBlock = ({projectID, title, desc, thumbnailSrc}) => {
  return (
    <div className='project-block'>
        <div className='project-block-picture'>
            <img src={thumbnailSrc} alt={`${title} - Thumbnail`}></img>
        </div>
        <div className='project-block-caption-area'>
            {title} {' - - - '} {projectID} {' - - - '} {desc}
        </div>
    </div>
  )
}


ProjectBlock.defaultProps = {
    projectID: 0,
    title: 'Untitled',
    desc: 'This project has no description.',
    thumbnailSrc: ''
}

ProjectBlock.propTypes = {
    projectID: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    thumbnailSrc: PropTypes.string
}

export default ProjectBlock