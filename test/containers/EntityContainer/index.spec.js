import React, { Component } from 'react'
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

        it('has a filterInputValue in state', () => {
            expect(component.state('filterInputValue')).to.be.a.string()
            expect(component.state('filterInputValue')).to.equal('')
        })

        it('renders a `FilterInput` and a `filterable(List)`', () => {
            expect(component.find('FilterInput').length).to.equal(1)
            expect(component.find('filterable(List)').length).to.equal(1)
        })

        it('sets the value prop on the `FilterInput` to the value of `state.filterInputValue`', () => {
            expect(component.find('FilterInput').props().value)
            .to.equal(component.state('filterInputValue'))
        })
    })
    describe('when handleFilterInputChange is called', () => {
        it('updates `state.filterInputValue`', () => {
            let testEvent = { target : { value : 'testValue' } }
            component.find('FilterInput').simulate('change', testEvent)
            expect(component.state().filterInputValue).to.equal(testEvent.target.value)
        })
    })
})