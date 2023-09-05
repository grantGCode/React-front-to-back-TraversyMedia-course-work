import PropTypes from 'prop-types'

function Button( array, version, type, isDisabled) {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn${version}`}>
        {array}
    </div>
  )
}

Button.defaultProps = {
    verion: 'primary',
    type: 'button',
    isDisabled: false
}

Button.PropType = {
    array: PropTypes.node.isRequired,
    vertion: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button