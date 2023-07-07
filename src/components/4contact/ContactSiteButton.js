import styles from '../../styles/ContactSiteButton.module.scss'
import PropTypes from 'prop-types'

const ContactSiteButton = ({dest, text, iconSrc}) => {
  return (
    <a href={dest} className={styles['link-container']}>
        <img src={iconSrc} alt={`${text} Logo`}></img>
        <p className={styles['site-button-font']}>{text}</p>
    </a>
  )
}

ContactSiteButton.defaultProps = {
    buttonHeight: 50,
    dest: '',
    iconSrc: '',
    text: 'UNTITLED LINK'
}

ContactSiteButton.propTypes = {
    buttonHeight: PropTypes.number,
    dest: PropTypes.string,
    iconSrc: PropTypes.string,
    text: PropTypes.string
}

export default ContactSiteButton