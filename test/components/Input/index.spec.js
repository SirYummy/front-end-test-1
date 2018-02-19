import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import Input from '../../../src/components/Input'
import sinon from 'sinon'

describe('Given `Input`', () => {
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
        component = shallow(<Input {...testProps} />)
    })

    it('should be an `input`',() => {
        expect(component.is('input')).to.be.true
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