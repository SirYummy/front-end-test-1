import React, { Component } from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import FilterableList from '../../components/FilterableList'
import FilterInput from '../../components/FilterInput'

function handleFilterInputChange (event) {
    this.setState({
      filterInputValue : event.target.value
    })
}

class EntityContainer extends Component {
    state = {
        filterInputValue : ''
    }
    
    render() {
        const { props, state } = this
        return (
            <div>
                <FilterInput 
                    type='text' 
                    name='app-test-input-name' 
                    value={state.filterInputValue}
                    onChange={handleFilterInputChange.bind(this)}
                />
                <FilterableList 
                    filterBy={state.filterInputValue} 
                    items={props.entityState.entities} 
                />
            </div>
        )
    }
}

export default EntityContainer