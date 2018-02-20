import React, { component } from 'react'
import clone from '../../utilities/clone'

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

export default (ComponentToDecorate) => {
    let DecoratedComponent = clone(ComponentToDecorate)
    class extends Component {
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
            return (<DecoratedComponent {...props} />)
        }
    }
}