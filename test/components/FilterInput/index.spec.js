import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import FilterInput from '../../../src/components/FilterInput'
import sinon from 'sinon'

describe('Given `FilterInput`', () => {
    let component,
        testProps,
        onChangeSpy

    beforeEach(() => {
        onChangeSpy = sinon.spy()
        testProps = {
            onChange: onChangeSpy,
            type: 'text',
            name: 'test-input',
            value: 'test-default-value'
        }
        component = shallow(<FilterInput {...testProps} />)
    })

    it('should render an `Input` component',() => {
        expect(component.is('Input')).to.be.true
    })

    describe('when the input changes', () => {

        const changedValue = 'test-new-value'

        it('should call `onChange`', () => {
            component.simulate('change', {
                target: {
                    name : testProps.name, 
                    value : changedValue
                }
            })
            expect(onChangeSpy.calledWith(changedValue)).to.be.true
        })
    })

})