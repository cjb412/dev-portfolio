import styles from './ContactSiteButton.module.scss'
import PropTypes from 'prop-types'

const ContactSiteButton = ({buttonHeight, dest, text, iconSrc, buttonFont}) => {
  return (
    <a href={dest} className={styles['link-container']}>
        <img src={iconSrc} alt={`${text} Logo`}></img>
        <p className={buttonFont}>{text}</p>
    </a>
  )
}

ContactSiteButton.defaultProps = {
    buttonHeight: '0',
    dest: '',
    iconSrc: '',
    text: 'UNTITLED LINK',
    buttonFont: '',
}

ContactSiteButton.propTypes = {
    buttonHeight: PropTypes.string,
    dest: PropTypes.string,
    iconSrc: PropTypes.string,
    text: PropTypes.string,
    buttonFont: ''
}

export default ContactSiteButton