import { expect } from 'code'
import sinon from 'sinon'
import config from '../../../src/config'
import services from '../../../src/services'
import 'isomorphic-fetch'
import { setTimeout } from 'timers';

describe('Given the `fetchData` service', () => {
    describe('when invoked', () => {
        let sandbox
        let fetchStub

        beforeEach(() => {
            sandbox = sinon.createSandbox()
            fetchStub = sinon.stub(global, 'fetch')
        })

        afterEach(() => {
            global.fetch.restore()
            sandbox.restore()
        })

        it('should call `fetch` with the value of the endpoint argument passed to it', () => {
            let endpoint = config.entities[0].endpoint
            fetchStub.resolves('MYSTERIOUSLY, I SOMETIMES VANISH!')
            services.fetchData(endpoint)
                .then((mysteryParameter) => { // TODO: follow up on sinon async bug
                    sinon.assert.calledWithExactly(fetchStub, endpoint)
                })
        })
        
        it('should return expected data when calling `fetch`') // TODO: follow up on sinon async bug
        it('should return expected error when calling `fetch`') // TODO: follow up on sinon async bug

    })
    
})