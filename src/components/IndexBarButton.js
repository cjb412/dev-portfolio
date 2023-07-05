import PropTypes from 'prop-types'

const IndexBarButton = ({ index, text, targetId }) => {
    return (
        <a href={`#${targetId}`} className='index-bar-button'>
            <span>
                <sup>{`${index}`}</sup>
            </span>
            &nbsp;
            {`// ${text}`}
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