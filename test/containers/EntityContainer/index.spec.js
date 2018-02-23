import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import EntityContainer from '../../../src/containers/EntityContainer'

describe('Given the `EntityContainer`', () => {
    let component
    let props
        
    beforeEach(() => {
        props = { entityState : { entities : ['foo', 'bar', 'baz'] } }
        component = shallow(<EntityContainer {...props} />)
    })

    describe('when it mounts', () => {

        it('should exist', () => {

            expect(component.exists()).to.be.true()
    
        })

        it('renders 3 divs', () => {
            expect(component.type('div').length).to.equal(3)
        })

        it('has a `handleFilterInputChange` method', () => {
            expect(component.instance().handleFilterInputChange).to.be.a.function()
        })

        it('has a filterInputValue in state', () => {
            expect(component.state().filterInputValue).to.be.a.string()
        })

        it('renders a `FilterInput` and a `filterable(List)`', () => {
            expect(component.find('FilterInput').length).to.equal(1)
            expect(component.find('filterable(List)').length).to.equal(1)
        })
    })
    describe('when handleFilterInputChange is called', () => {
        it('updates `state.filterInputValue`', () => {
            let testEvent = { target : { value : 'testValue' } }
            component.instance().handleFilterInputChange(testEvent)
            expect(component.state().filterInputValue).to.equal(testEvent.target.value)
        })
    })
})