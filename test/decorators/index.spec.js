import { expect } from 'code'
import decorators from '../../src/decorators'

describe('Given the `decorators` module', () => {
    it('should export an object of decorators', () => {
        expect(decorators).to.be.an.object()
    })
})