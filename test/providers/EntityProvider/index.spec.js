import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import services from '../../../src/services'
import { EntityProvider, EntityConsumer } from '../../../src/providers/EntityProvider'

describe('Given the `EntityProvider` and `EntityConsumer`', () => {
    let component
    let sandbox
    let fakeData
    let fetchDataStub
        
    beforeEach(() => {
        sandbox = sinon.createSandbox()
        fakeData = ['foo', 'bar', 'baz']
        fetchDataStub = sandbox.stub(services, 'fetchData').resolves(fakeData)
        component = shallow(
            <EntityProvider>
                <EntityConsumer>
                    {entityState => <div entities={entityState.entities}></div>}
                </EntityConsumer>
            </EntityProvider>
        )
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('when it mounts', () => {

        it('should exist', () => {
            expect(component.exists()).to.be.true()
        })

        it('calls `fetchData` and updates its state', () => {
            expect(fetchDataStub.calledOnce).to.be.true()
        })

        it('has a state', () => {
            expect(component.state()).to.exist()
        })

    })
   
})