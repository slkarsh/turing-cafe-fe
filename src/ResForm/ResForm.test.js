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
    const expectName = ''
    const expectDate = ''
    const expectTime = ''
    const expectGuest = 0

    wrapper.instance().setState({
        name: 'Aaron',
        date: '11/13',
        time: '8:00',
        guests: 1
    })

    wrapper.instance().resetInputs();

    expect(wrapper.state('name')).toEqual(expectName)
    expect(wrapper.state('date')).toEqual(expectDate)
    expect(wrapper.state('time')).toEqual(expectTime)
    expect(wrapper.state('guests')).toEqual(expectGuest)
})
})