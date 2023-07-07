import styles from "../../styles/IndexBar.module.scss"
import cx from 'classnames'
import PropTypes from 'prop-types'

const IndexBarButton = ({ index, text, targetId }) => {
    return (
        <a href={`#${targetId}`} className={cx(styles['index-button'], styles['index-font'])}>
            <span><sup>{`${index}`}</sup></span>&nbsp;{`// ${text}`}
        </a>
    )
}

IndexBarButton.defaultProps = {
    text: 'DEFAULT',
    color: 'white',
    targetId: ''
}

IndexBarButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    targetId: PropTypes.string
}

export default IndexBarButton