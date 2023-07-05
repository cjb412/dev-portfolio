const EmailBar = ({email, mailIcon, copyIcon}) => {
    const writeEmailToClipboard = () => {
        navigator.clipboard.writeText(`${email}`)
        console.log("Copied email to clipboard.")
    }

    return (
    <div className='email-bar'>
        <p>{email}</p>
        <a href={`mailto:${email}`}>
            <div>
                <img alt='mailIcon' src={mailIcon}></img>
            </div>
        </a>
        <div>
            <img alt='copyIcon' src={copyIcon} onClick={writeEmailToClipboard}></img>
        </div>
    </div>
    
  )
}

export default EmailBar