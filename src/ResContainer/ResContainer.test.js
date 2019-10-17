import React from 'react'
import { shallow } from 'enzyme'
import ResContainer from './ResContainer'

describe('ResContainer', () => {

    it('should match the snapshot when rendered correctly', () => {
        const mockResArray = [
            {
                name: 'Sara',
                date: '12/22',
                time: '7:00',
                number: 2,
                id: 2
            },
            {
                name: 'Oliver',
                date: '11/11',
                time: '8:00',
                number: 1,
                id: 4
            }
        ]
    
        const wrapper = shallow(<ResContainer
                reservations={mockResArray}
             />)
        
    
    expect(wrapper).toMatchSnapshot();
    })
})