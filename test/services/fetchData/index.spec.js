import expect from 'code'
import sinon from 'sinon'
import fetchData from '../../../src/services/fetchData'

describe('Given the `fetchData` service', () => {
    describe('when it is called', () => {
        let mockUrl
        let fetch
        let systemUnderTest
        
        beforeEach(() => {
            mockUrl = 'http://localhost'
            fetch = sinon.spy()
            systemUnderTest = fetchData(mockUrl)
        })

        afterEach(() => {
           
        })

        xit('subsequently calls the `isomorphic-fetch` function with the supplied URL', () => {
            expect(fetch.calledOnce).to.be.true()
            expect(fetch.calledWithExactly(mockUrl)).to.be.true()
        })

        xit('immediately returns a Promise', () => {
            expect(systemUnderTest).to.be.an.instanceof(Promise)
        })

    })
    describe('when it receives a successful response from the server', () => {
        it('fulfills the promise')
        it('does not throw an error')
    })
    describe('when it receives an error response from the server', () => {
        it('rejects the promise')
        it('throws an error')
    })
})