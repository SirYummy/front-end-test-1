import { shallow } from 'enzyme'
import { expect } from 'code'
import React from 'react'
import List from '../../../../src/components/shared/List'

describe('Given the `List` component',() => {
    describe('when it is passed in data via props as an array of strings', () => {
        let expectedData
        let componentUnderTest
        let unorderedListElement
        let listChildren

        beforeEach(() => {
            expectedData = ['foo', 'bar']
            componentUnderTest = shallow(<List data={expectedData} />)
            unorderedListElement = componentUnderTest.find('ul')
            listChildren = unorderedListElement.children('li')
        })

        it('then should render the data as an unordered list', () => {    
            expect(unorderedListElement).to.exist()
        })

        it(`then should have the same number of child list items as the expected data`, () => {
            expect(listChildren).to.have.length(expectedData.length)
        })
            
        it('then should render children all equal to the expected data', () => {
            listChildren.forEach((child, index) => {
                expect(child.text()).to.equal(expectedData[index])
            })
        })

    })
})