import PropTypes from 'prop-types'

function Button( children, version, type, isDisabled) {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn${version}`}>
        {children}
    </div>
  )
}

Button.defaultProps = {
    verion: 'primary',
    type: 'button',
    isDisabled: false
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    vertion: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button