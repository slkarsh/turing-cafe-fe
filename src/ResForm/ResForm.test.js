import React from 'react'
import { shallow } from 'enzyme'
import ResForm from './ResForm'


describe('ResForm', () => {
let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ResForm addReservation={jest.fn()}/>)
    })

it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

it('should update state when handleChange is called', () => {
    const mockEvent = {target: {name: 'name', value: 'Ollie'}}
    const expected = 'Ollie'

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual(expected)
})

it('should reset state when resetInputs is called', () => {
    const expected
})
})