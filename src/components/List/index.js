import React from 'react'

const renderListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item}</li>)
}

export default (props = {items : []}) => {
    return (
        <ul>
            {renderListItems(props.items)}
        </ul>
    )
}