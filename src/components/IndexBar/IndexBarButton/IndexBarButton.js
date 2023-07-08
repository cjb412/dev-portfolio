import PropTypes from 'prop-types'
import styles from "./IndexBarButton.module.scss"

const IndexBarButton = ({ index, text, targetId, fontClass}) => {
    return (
        <a href={`#${targetId}`} className={styles['index-button']}>
            <span className={fontClass}>
                <sup>{`${index}`}</sup>
                &nbsp;
                {`// ${text}`}
            </span>
        </a>
    )
}

IndexBarButton.defaultProps = {
    text: 'DEFAULT',
    color: 'white',
    targetId: '',
    fontClass: '',
}

IndexBarButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    targetId: PropTypes.string,
    fontClass: PropTypes.string,
}

export default IndexBarButton