import PropTypes from 'prop-types'
import styles from './EmailBar.module.scss'

import cx from 'classnames'

import emailIcon from './graphics/email_icon.png'
import copyIcon from './graphics/copy_icon.png'

const EmailBar = ({email, barHeight, buttonAspectRatio, fontClass}) => {
    // COPY EMAIL ON BUTTON CLICK
    const writeEmailToClipboard = () => {
        navigator.clipboard.writeText(`${email}`)
        console.log("Copied email to clipboard.")
    }

    return (
    <div style={{height: `${barHeight}`}} className={styles["email-bar"]}>
        <div className={cx(styles["text-field"], fontClass)}>
            <p>{email}</p>
        </div>

        <div className={styles["icons"]}>
            <a className={styles["icon-container"]} style={{aspectRatio: Math.max(1, buttonAspectRatio)}} href={`mailto:${email}`} >
                <img className={styles["icon"]} alt='mailIcon' src={emailIcon}></img>
            </a>

            <div className={styles["icon-container"]} style={{aspectRatio: Math.max(1, buttonAspectRatio)}}>
                <img className={styles["icon"]} alt='copyIcon' src={copyIcon} onClick={writeEmailToClipboard}></img>
            </div>
        </div>
    </div>
    )
}

EmailBar.defaultProps = {
    email: '',    
    barHeight: '0px',
    buttonAspectRatio: 1,
    fontClass: '',
}

EmailBar.propTypes = {
    email: PropTypes.string,    
    barHeight: PropTypes.string,
    buttonAspectRatio: PropTypes.number,
    fontClass: PropTypes.string,
}

export default EmailBar