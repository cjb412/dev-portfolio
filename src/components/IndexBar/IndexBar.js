import PropTypes from 'prop-types'
import styles from "./IndexBar.module.scss"

import cx from 'classnames'

import IndexBarButton from "./IndexBarButton/IndexBarButton.js"

const IndexBar = ({ fontClass }) => {
  return (
    <div className={cx(styles['index-bar'], fontClass)}>
        <IndexBarButton index='00' text="Home" targetId="home-section" fontClass={fontClass}/>
        <IndexBarButton index='01' text="About" targetId="about-section" fontClass={fontClass}/>
        <IndexBarButton index='02' text="Experience" targetId="experience-section" fontClass={fontClass}/>
        <IndexBarButton index='03' text="Projects" targetId="projects-section" fontClass={fontClass}/>
        <IndexBarButton index='04' text="Contact" targetId="contact-section" fontClass={fontClass}/>
    </div>
  )
}

IndexBar.defaultProps = {
  fontClass: PropTypes.string,
}

IndexBar.propTypes = {
  fontClass: PropTypes.string,
}

export default IndexBar