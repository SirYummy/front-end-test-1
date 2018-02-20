import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'code'
import App from '../../src/components/App'

describe('Given `App`', () => {

    let component

    beforeEach(() => {
        component = shallow(<App />)
    })

    it('should exist', () => {

        expect(component.exists()).to.be.true()

    })

    it('should contain an `EntityProvider`', () => {

        expect(component.find('EntityProvider').exists()).to.be.true()

    })

})