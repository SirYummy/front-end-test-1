import React, { Component } from 'react'
import PropTypes from 'prop-types'
import services from '../../services'
import config from '../../config'
import EntityContext from '../../contexts/EntityContext'

class EntityProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : true,
            entities : [],
            error : undefined
        }
    }

    componentDidMount() {
        services.fetchData(config.entities[0].endpoint)
        .then(response => {
            if(typeof response.json === 'undefined') {
                return response
            } else {
                return response.json()
            }
        })
        .then(
            response => {
                let entities = response[config.entities[0].plural]
                this.setState({loading:false,entities})
            },
            error => {
                console.log('ERROR: ', error)
                this.setState({loading:false, error})
            }
        )
    }

    componentDidCatch(error, info) {
        console.log('ERROR: ', error)
        console.log('INFO: ', info)
      }

    render() {
        return (
            <EntityContext.Provider value={this.state}>
                {this.props.children}
            </EntityContext.Provider>
        )
    }
}

const EntityConsumer = EntityContext.Consumer

export { EntityProvider, EntityConsumer }