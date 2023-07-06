import EmailBar from './EmailBar'
import emailIcon from '../../graphics/email_icon.png'
import copyIcon from '../../graphics/copy_icon.png'

import ContactSiteButton from './ContactSiteButton'
import liLogo from '../../graphics/linkedin_icon.png'
import gitLogo from '../../graphics/github_icon.png'

const ContactSection = () => {
  return (
    <div id="contact-section">
        <h2>Contact</h2>
        <div className="subtle-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Quam vulputate dignissim suspendisse in. Nisi lacus sed viverra tellus in hac habitasse.
        </div>
        <EmailBar email='cdfcblank@gmail.com' mailIcon={emailIcon} copyIcon={copyIcon}/>
        <div className="social-media-section">
          <p className="subtle-font">
              You can also visit me on social media:
          </p>
          < ContactSiteButton dest="" iconSrc={liLogo} alt="LinkedIn Logo" text="LinkedIn" />
          < ContactSiteButton dest="" iconSrc={gitLogo} alt="GitHub Logo" text="GitHub" />
        </div>
    </div>
  )
}

export default ContactSection