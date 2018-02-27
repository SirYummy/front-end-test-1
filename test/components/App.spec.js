import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'code'
import sinon from 'sinon'
import App from '../../src/components/App'

const overrideProps = (props) => {
    return {
        ...props
    }
}

const renderComponent = (ComponentToBeRendered, props = overrideProps()) => {
    return shallow(<ComponentToBeRendered {...props} />)
}

describe('Given `App`', () => {

    let component

    beforeEach(() => {

        component = shallow(<App />)
    })

    it('should exist', () => {

        expect(component.exists()).to.be.true()

    })

    it('has a state', () => {
        expect(component.state()).to.exist()
    })

    it('should call its `render` method when its state changes', () => {
        let renderSpy = sinon.spy(component.instance(), 'render')
        component.instance().setState((prevState) => { foo : 'bar' })
        sinon.assert.called(renderSpy)
    })

    it('is an `EntityProvider` component', () => {
        expect(component.is('EntityProvider')).to.be.true()
    })

    it('should contain an `EntityProvider`', () => {

        expect(component.find('EntityProvider').exists()).to.be.true()

    })

    it('has 1 child', () => {
        expect(component.find('EntityProvider').children()).to.have.length(1)
    })

    it('passes `entityState` to `EntityContainer` during render', () => {
        expect(component.find('EntityProvider').children().props().children().props.hasOwnProperty('entityState'))
            .to.be.true()
    })

})