import { expect } from 'code'
import sinon from 'sinon'
import fetch from 'isomorphic-fetch'
import fetchData from '../../../src/services/fetchData'

describe('Given the `fetchData` service', function() {
    describe('when it is called', function() {
        let requests
        let mockUrl
        let fetchSpy
        let systemUnderTest
        
        beforeEach(function() {
            this.server = sinon.createFakeServer()
            mockUrl = 'http://localhost/my/mock/url.json'
            this.server.respondWith(
                'GET', 
                mockUrl,
                [ 200,
                  {'Content-Type' : 'application/json' },
                  '[{ "foo" : "bar" }]'
                ]
            )
            fetchSpy = sinon.spy(fetch)
            systemUnderTest = fetchData(mockUrl)
            this.server.respond()
        })

        afterEach(function() {
           fetchSpy.reset()
           this.server.restore()
        })

        it('subsequently calls the `isomorphic-fetch` function with the supplied URL', function() {
            expect(
                fetchSpy.calledOnce && 
                fetchSpy.calledWithExactly(mockUrl)
            ).to.be.true()
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