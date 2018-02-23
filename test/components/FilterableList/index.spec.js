import { shallow } from 'enzyme'
import { expect } from 'code'
import React from 'react'
import sinon from 'sinon'
import decorators from '../../../src/decorators'
import List from '../../../src/components/List'
import FilterableList from '../../../src/components/FilterableList'

describe('Given the `FilterableList` component',() => {
    describe('when it is instantiated', () => {
        let component
        let expectedItems

        beforeEach(() => {
            expectedItems = ['foo', 'bar']
            sinon.spy(decorators, 'filterable')
            component = shallow(<FilterableList items={expectedItems} />)
        })

        afterEach(() => {
            decorators.filterable.restore()
        })

        it('should exist', () => {
            expect(component.exists()).to.be.true()
        })

        it('has a state', () => {
            expect(component.state()).to.exist()
        })

    })
})