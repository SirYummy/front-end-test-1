import { expect } from 'code'
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import decorators from '../../../src/decorators'

class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDecorated : false
        } 
    }
    render() {
        return ( <div>This component {this.props.isDecorated ? 'is' : 'isn\'t'} decorated!</div>)
    }
}

TestComponent.defaultProps = {
    isDecorated : false
}

describe('Given the `filterable` decorator', () => {
    describe('when decorating a component that has a `data` prop', () => {
        let decoratedComponent
        let expectedData
        let hoc
        beforeEach(() => {
            hoc = decorators.filterable(TestComponent)
            decoratedComponent = shallow(<hoc />)
        })

        afterEach(() => {
            
        })

        it('changes the value of `props.isDecorated` to `true`', () => {

        })
    })
})

/*
xdescribe('Given the `FilterableList` component',() => {
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
*/