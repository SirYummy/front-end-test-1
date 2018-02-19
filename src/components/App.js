import React, { Component } from 'react'

import FilterableList from './FilterableList'
import services from '../services'
import FilterInput from './FilterInput'
import config from '../config/test'

function handleFilterInputChange (event) {
  this.setState({
    filterInputValue : event.target.value
  })
}

class App extends Component {

  state = {
    entities: [],
    filterInputValue: ''
  }
  
 componentDidMount (){
    services.fetchData(config.entities[0].endpoint).then(data =>{
      this.setState({
        entities: data
      })
    })
 }

 render(){
   return (
     <div>
       <FilterInput 
        type='text' 
        name='app-test-input-name' 
        value={this.state.inputValue} 
        onChange={handleFilterInputChange.bind(this)}
        />
        <FilterableList 
          filterBy={this.state.filterInputValue} 
          items={this.state.entities} 
        />
     </div>
   )
  }
}

export default App
