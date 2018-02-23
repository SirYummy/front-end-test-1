import React, { Component } from 'react'

function applyFilter(newItems, newFilterValue) {
    this.setState((previousState) => {
        return {
            items : newItems,
            filterValue : newFilterValue,
            filteredItems : newItems.filter((item, itemIndex) => {
                if(newFilterValue !== '' && newFilterValue.length >= 2) {
                    return item.includes(newFilterValue)
                } else {
                    return true
                }
            })
        }
    })
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function handleItemsChange(nextProps) {
    if(nextProps.items !== this.state.items) {
        return nextProps.items
    } else {
        return this.state.items
    }
}

function handleFilterChange(nextProps) {
    if(nextProps.filterBy !== this.state.filterValue) {
        return nextProps.filterBy
    } else {
        return this.state.filterValue
    }
}

export default (ComponentToDecorate) => {
    
    class DecoratedComponent extends Component {
        constructor(props) {
            super(props)
            this.state = { 
                filteredItems : [...props.items], 
                items : [...props.items], 
                filterValue : props.filterBy, 
                filterOptions : { caseSensitive : false }  
            }
            this.applyFilter = applyFilter.bind(this)
            this.handleItemsChange = handleItemsChange.bind(this)
            this.handleFilterChange = handleFilterChange.bind(this)
        }

        componentWillReceiveProps(nextProps) {
            let newItems = this.handleItemsChange(nextProps)
            let newFilterValue = this.handleFilterChange(nextProps)
            this.applyFilter(newItems, newFilterValue)
        }
    
        render() {
            return (<ComponentToDecorate items={this.state.filteredItems} />)
        }
    }
    
    DecoratedComponent.displayName = `filterable(${getDisplayName(ComponentToDecorate)})`
    
    return (DecoratedComponent)
}