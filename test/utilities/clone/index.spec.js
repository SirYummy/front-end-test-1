import { expect } from 'code'
import clone from '../../../src/utilities/clone'

describe('Given the `clone` utility', () => {
    describe('when called passing a Function as an argument', () => {
        describe('it then makes a clone of the function that was passed in', () => {
            let functionToBeCloned = function() {return 'cloning is fun!'}
            let functionClone = clone(functionToBeCloned)
            it('and their return values are equal', () => {
                expect(functionToBeCloned()).to.equal(functionClone())
            })
            it('and modifying the clone does not modify the original function')
            it('and vice versa')
        })
    })
    describe('when called passing an Object as an argument', () => {
        describe('it then makes a clone of the object that was passed in', () => {
            it('and their properties are the same')
            it('and the values of their properties are the same')
            it('and modifying the clone does not modify the original object')
            it('and vice versa')
        })
    })
})