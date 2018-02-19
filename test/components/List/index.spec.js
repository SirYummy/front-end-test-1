import { shallow } from 'enzyme'
import { expect } from 'code'
import React from 'react'
import List from '../../../src/components/List'

describe('Given the `List` component',() => {
    describe('when it is passed in items via props as an array of strings', () => {
        let expectedItems
        let componentUnderTest
        let unorderedListElement
        let listChildren

        beforeEach(() => {
            expectedItems = ['foo', 'bar']
            componentUnderTest = shallow(<List items={expectedItems} />)
            unorderedListElement = componentUnderTest.find('ul')
            listChildren = unorderedListElement.children('li')
        })

        it('then should render the items as an unordered list', () => {    
            expect(unorderedListElement).to.exist()
        })

        it(`then should have the same number of child list items as the expected items`, () => {
            expect(listChildren).to.have.length(expectedItems.length)
        })
            
        it('then should render children all equal to the expected Items', () => {
            listChildren.forEach((child, index) => {
                expect(child.text()).to.equal(expectedItems[index])
            })
        })

    })
})