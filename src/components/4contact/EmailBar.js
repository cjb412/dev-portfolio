import styles from '../../styles/EmailBar.module.scss'
import PropTypes from 'prop-types'

const EmailBar = ({barHeight, email, mailIcon, copyIcon}) => {
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

        <div className={styles["icon-container"]}>
            <a href={`mailto:${email}`}>
                <img className={styles["icon"]} alt='mailIcon' src={mailIcon}></img>
            </a>
        </div>

        <div className={styles["icon-container"]}>
            <img className={styles["icon"]} alt='copyIcon' src={copyIcon} onClick={writeEmailToClipboard}></img>
        </div>
    </div>
    )
}

EmailBar.defaultProps = {
    barHeight: 50,
    email: ''
}

EmailBar.propTypes = {
    barHeight: PropTypes.number,
    email: PropTypes.string
}

export default EmailBar