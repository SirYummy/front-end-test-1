import { expect } from 'code'
import sinon from 'sinon'
import { getPizzas } from '../../../src/services/getPizzas'
import 'isomorphic-fetch'

describe('Given the `getPizzas` service', () => {
    describe('when getting pizzas', () => {
        let sandbox
        let fetchStub
        let resolveSpy
        let rejectSpy

        const pizzaEndpoint = 'http://localhost:8080/pizzas.json'

        beforeEach(() => {
            sandbox = sinon.createSandbox()
            resolveSpy = sinon.spy()
            rejectSpy = sinon.spy()
            fetchStub = sandbox.stub(global, 'fetch')
                .resolves({json:resolveSpy})
                .rejects({json:rejectSpy})
        })

        afterEach(() => {
           sandbox.restore()
        })
        
        it('should return pizzas', () => {
        
            getPizzas()
            .then((pizzas) => {
                sinon.assert.calledOnce(fetchStub)
                sinon.assert.calledWithExactly(fetchStub, pizzaEndpoint)
            })
            .catch((error) => {
               
                it('should never get in here', () => {
                    sinon.assert.fail('`fetchPizzas` threw an error')
                })
            })
            
        })
    })
})