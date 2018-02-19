import React, { Component } from 'react'
import List from '../List'

function applyFilter(filterValue) {
    this.setState((previousState) => {
        return {
            filteredItems : previousState.items.filter((item, itemIndex) => {
                if(filterValue !== '' && filterValue.length >= 2) {
                    return item.includes(filterValue)
                } else {
                    return true
                }
            })
        }
    })
}

class FilterableList extends Component {
    constructor(props) {
        super(props)
        
        this.state = { 
            filteredItems : [...props.items], 
            items : [...props.items], 
            filterValue : '', 
            filterOptions : { caseSensitive : false }  
        }
        this.applyFilter = applyFilter.bind(this)
    }

    render() {
        return ( <List items={this.state.filteredItems} /> )
    }
}

export default FilterableList