import React, { Component } from 'react'
import EntityProvider from '../providers/EntityProvider'
import EntityContainer from '../containers/EntityContainer'

class App extends Component {
 render(){
   return (
     <EntityProvider>
       <EntityContainer />
     </EntityProvider>
   )
  }
}

export default App