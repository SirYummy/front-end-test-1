import React, { Component } from 'react'
import { EntityProvider, EntityConsumer } from '../providers/EntityProvider'
import EntityContainer from '../containers/EntityContainer'

class App extends Component {
 render(){
   return (
   
     <EntityProvider>
       <EntityConsumer>
        {entityState => <EntityContainer  entityState={entityState} />}
      </EntityConsumer>
     </EntityProvider>
    
   )
  }
}

export default App