import React, { Component } from 'react'
import PropTypes from 'prop-types'
import services from '../../services'
import config from '../../config'

const contextTypes = {
    loading : PropTypes.bool,
    error : PropTypes.object,
    entities : PropTypes.arrayOf(PropTypes.string)
}

class EntityProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : true
        }
    }

    getChildContext() {
        return { entities : this.state.entities }
    }

    componentDidMount() {
        services.fetchData(config.entities[0].endpoint)
        .then(response => response[config.entities[0].plural].json())
        .then(
            entities => this.setState({loading:false,entities}),
            error => this.setState({loading:false, error})
        )
    }

    render() {
        return this.props.children
    }
}

EntityProvider.childContextTypes = contextTypes

export default EntityProvider