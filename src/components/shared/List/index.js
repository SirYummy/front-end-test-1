import React from 'react'

const renderListItems = (data) => {
    return data.map((item, index) => <li key={index}>{item}</li>)
}

export default (props) => {
    return (
        <ul>
            {renderListItems(props.data)}
        </ul>
    )
}