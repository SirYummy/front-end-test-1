import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

const FilterInput = (props) => {
    return (<Input {...props} />)
}

FilterInput.propTypes = {
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string
}

FilterInput.defaultProps = {
    placeholder : 'Filter Names (case-sensitive)'
}

export default FilterInput