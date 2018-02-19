import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'code'
import App from '../../src/components/App'
import sinon from 'sinon'
import services from '../../src/services'
const mockData = ['foo', 'bar', 'baz']

describe('Given `App`', () => {

    let component,
    sandbox,
    fetchDataStub,
    testProps

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        
        fetchDataStub = sandbox.stub(services,'fetchData').resolves(mockData)

        component = shallow(<App />)
    })

    afterEach(() => {

        sandbox.restore()
    })

    it('should exist', () => {

        expect(component.exists()).to.be.true()

    })

    it('should be a `div`', () => {

        expect(component.type()).to.equal('div')

    })

    it('should contain a `FilterInput`', () => {

        expect(component.find('FilterInput').exists()).to.be.true()

    })

    it('should contain a `FilterableList`', () => {
        
        expect(component.find('FilterableList').exists()).to.be.true()
    })

    describe('When the `App` mounts', () => {

        it('should start with some entities', () => {
    
            expect(component.state().entities).to.equal(mockData)

            sinon.assert.calledOnce(fetchDataStub)
    
        })

        it('should start with a default initial value for the `filterInputValue` in `state`', () => {
            const defaultFilterInputValue = ''
            expect(component.state().filterInputValue).to.equal(defaultFilterInputValue)
        })
    
    })

    describe('when the `FilterInput` is changed', () => {
        
        const testEvent = {
            target: {
                name : 'app-test-filter-input-name', 
                value : 'app-test-changed-filter-input-value'
            }
        }

        let filterInputComponentInstance = null

        beforeEach(() => {
            filterInputComponentInstance = component.find('FilterInput')
            expect(filterInputComponentInstance.length).to.equal(1)
            filterInputComponentInstance.simulate('change', testEvent)
        })

        it('should update the `filterInputValue` in state', () => {
            expect(component.state().filterInputValue).to.equal(testEvent.target.value)
        })
    })

})