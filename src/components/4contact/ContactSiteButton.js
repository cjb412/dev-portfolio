import PropTypes from 'prop-types'

const ContactSiteButton = ({dest, iconSrc, alt, text}) => {
  return (
    <a href={dest} style={{textDecoration: 'none'}}>
        <div className='contact-site-button' style={{display:"flex"}}>
            <img src={iconSrc} alt={alt}></img>
            <p>{text}</p>
        </div>
    </a>
  )
}

ContactSiteButton.defaultProps = {
    dest: '',
    iconSrc: '',
    alt: 'alt text',
    text: 'target title'
}

ContactSiteButton.propTypes = {
    dest: PropTypes.string,
    iconSrc: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string
}

export default ContactSiteButton