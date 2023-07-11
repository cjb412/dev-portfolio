import { HashLink as Link } from 'react-router-hash-link'

import styles from './IconButton.module.scss'
import PropTypes from 'prop-types'

import cx from 'classnames'

const IconButton = ({buttonHeight, dest, text, iconSrc, buttonFont}) => {
  return (
    <Link to={dest} className={styles['link-container']} style={{height: `${buttonHeight}`}}>
        <img src={iconSrc} alt={`${text} Logo`}></img>
        {
          (text != '') ?
          <p className={cx(buttonFont, styles["link-text"])}>{text}</p>
          :
          <></>
        }
    </Link>
  )
}

IconButton.defaultProps = {
    buttonHeight: '50px',
    dest: '',
    iconSrc: '',
    text: 'UNTITLED LINK',
    buttonFont: '',
}

IconButton.propTypes = {
    buttonHeight: PropTypes.string,
    dest: PropTypes.string,
    iconSrc: PropTypes.string,
    text: PropTypes.string,
    buttonFont: PropTypes.string,
}

export default IconButton