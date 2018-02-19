import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
    return (<input {...props} />)
}

Input.propTypes = {
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string
}

Input.defaultProps = {
    placeholder : 'Enter Text Here'
}

export default Input