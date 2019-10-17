import React from 'react'
import './ResCard.css'


const ResCard = ({ id, name, date, time, number }) => {
    return (
        <div className='res-card' id={id}>
            <h3 className='guest-name'>{name}</h3>
            <h4 className='res-date'>{date}</h4>
            <h4 className='res-time'>{time}</h4>
            <p className='res-guest-num'>Number of guests: {number}</p>
        </div>
    )

}

export default ResCard