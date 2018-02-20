import { shallow } from 'enzyme'
import { expect } from 'code'
import React from 'react'
import FilterableList from '../../../src/components/FilterableList'

describe('Given the `FilterableList` component',() => {
    describe('when it is passed in items via props as an array of strings', () => {
        let expectedItems
        let expectedFilteredItems
        let component
        let childListComponent

        beforeEach(() => {
            expectedItems = ['foo', 'bar']
            component = shallow(<FilterableList items={expectedItems} />)
            childListComponent = component.find('ul')
        })

        it('should exist', () => {
            expect(component.exists()).to.be.true()
        })

        it('has a state', () => {
            expect(component.state()).to.exist()
        })

        it('should have an `applyFilter` method that should correctly update `filteredItems` in state', () => {
            let testFilter = `fo`
            expectedFilteredItems = ['foo']
            component.instance().applyFilter(testFilter)
            expect(component.state().filteredItems).to.equal(expectedFilteredItems)
        })

        it('should not update `filteredItems in state if the filterValue does not meet the specified criteria', () => {
            let testFilter = ``
            expectedFilteredItems = expectedItems
            component.instance().applyFilter(testFilter)
            expect(component.state().filteredItems).to.equal(expectedFilteredItems)
        })

        it('then should render a `List` component', () => {    
            expect(childListComponent).to.exist()
        })

    })
})