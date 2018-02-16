import { expect } from 'code'
import sinon from 'sinon'
import { fetchData } from '../../../src/services/fetchData'
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
            xit('should return expected data when calling `fetch`', () => {
                fetchStub.resolves(expectedResult)

                fetchData(validEndpoint)
                    .then((value) => {
                        expect(value).to.equal(expectedResult)
                        sinon.assert.calledOnce(fetchStub)
                        sinon.assert.calledWithExactly(fetchStub, validEndpoint)
                    })
                    .catch(e => {
                        sinon.assert.fail('this should not be caught')
                    })
                
            })
        })
        describe('and having an invalid endpoint', () => {
            xit('should catch an error when calling `fetch`', () => {
                fetchStub.rejects(expectedError)
                
                fetchData(invalidEndpoint)
                .then((success) => {
                    sinon.assert.fail('`fetchData` mistakenly sent back a successful response')
                })
                .catch((error) => {
                    expect(error).to.equal(expectedError)
                    sinon.assert.calledOnce(fetchStub)
                    sinon.assert.calledWithExactly(fetchStub, invalidEndpoint)
                })
                
            })
        })

    })
    
})