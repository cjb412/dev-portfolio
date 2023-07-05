import PropTypes from 'prop-types'

const IndexBarButton = ({ text }) => {
    return (
        <div className='index-bar-button'>{text}</div>
    )
}

IndexBarButton.defaultProps = {
    color: 'white'
}

IndexBarButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default IndexBarButton