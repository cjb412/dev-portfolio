import styles from '../../styles/EmailBar.module.scss'
import PropTypes from 'prop-types'

const EmailBar = ({email, mailIcon, copyIcon, barHeight, buttonAspectRatio}) => {
    // COPY EMAIL ON BUTTON CLICK
    const writeEmailToClipboard = () => {
        navigator.clipboard.writeText(`${email}`)
        console.log("Copied email to clipboard.")
    }

    return (
    <div style={{height: `${barHeight}`}} className={styles["email-bar"]}>
        <div className={styles["text-field"]}>
            <p>{email}</p>
        </div>

        <div className={styles["icons"]}>
            <div className={styles["icon-container"]} style={{aspectRatio: Math.max(1, buttonAspectRatio)}}>
                <a href={`mailto:${email}`}>
                    <img className={styles["icon"]} alt='mailIcon' src={mailIcon}></img>
                </a>
            </div>

            <div className={styles["icon-container"]} style={{aspectRatio: Math.max(1, buttonAspectRatio)}}>
                <img className={styles["icon"]} alt='copyIcon' src={copyIcon} onClick={writeEmailToClipboard}></img>
            </div>
        </div>
    </div>
    )
}

EmailBar.defaultProps = {
    email: '',
    mailIcon: '',
    copyIcon: '',
    
    barHeight: '50px',
    buttonAspectRatio: 1,
}

EmailBar.propTypes = {
    email: PropTypes.string,
    mailIcon: PropTypes.string,
    copyIcon: PropTypes.string,
    
    barHeight: PropTypes.string,
    buttonAspectRatio: PropTypes.number,
}

export default EmailBar