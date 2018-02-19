import { expect } from 'code'
import React from 'react'
import { shallow } from 'enzyme'
import filterable from '../../../src/decorators/filterable'

const TestComponent = (props = {isDecorated : false, data : []}) => {
    return ( <div>This component {props.isDecorated ? 'is' : 'isn\'t'} decorated!</div>)
}

describe('Given the `filterable` decorator', () => {
    describe('when decorating a component that has a `data` prop', () => {
        let decoratedComponent
        let expectedData
        beforeEach(() => {
            decoratedComponent = shallow(filterable(<TestComponent />))
        })
        it('changes the value of `props.isDecorated` to `true`', () => {

        })
    })
})