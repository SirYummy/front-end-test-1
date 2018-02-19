import { expect } from 'code'
import sinon from 'sinon'
import services from '../../../src/services'
import 'isomorphic-fetch'

describe('Given the `fetchData` service', () => {
    describe('when getting data', () => {
        let validEndpoint
        let invalidEndpoint
        let sandbox
        let fetchStub
        let expectedError
        let expectedResult

        beforeEach(() => {
            sandbox = sinon.createSandbox()
            validEndpoint = 'http://localhost:8080/pizza.json'
            invalidEndpoint = '!@#$'
            expectedError = new Error("Ain't gonna happen")
            expectedResult = {foo:'bar'}
            fetchStub = sinon.stub(global, 'fetch')
        })

        afterEach(() => {
            global.fetch.restore()
            sandbox.restore()
        })
        describe('and having a valid endpoint', () => {
            it('should return expected data when calling `fetch`', () => {
                fetchStub.resolves(expectedResult)

                services.fetchData(validEndpoint)
                    .then((value) => {
                        value.json().then((jsonPromiseReturnValue) => { 
                            sinon.assert.pass('fetchData succeeded in returning data')
                         })
                   
                    })
                   
                
            })
        })
        describe('and having an invalid endpoint', () => {
            it('should catch an error when calling `fetch`', () => {
                fetchStub.rejects(expectedError)
                
                services.fetchData(invalidEndpoint)
                .catch((error) => {
                    sinon.assert.pass('The error was successfully caught')
                  
                })
                
            })
        })

    })
    
})