const EmailBar = ({email, mailIcon, copyIcon}) => {
    const writeEmailToClipboard = () => {
        navigator.clipboard.writeText(`${email}`)
        console.log("Copied email to clipboard.")
    }

    return (
    <div className='email-bar subtle-font'>
        <div className='email-entry'>
            <p>{email}</p>
        </div>
        <div>
            <a href={`mailto:${email}`}>
                <img alt='mailIcon' src={mailIcon}></img>
            </a>
        </div>
        <div>
            <img alt='copyIcon' src={copyIcon} onClick={writeEmailToClipboard}></img>
        </div>
    </div>
    
  )
}

export default EmailBar