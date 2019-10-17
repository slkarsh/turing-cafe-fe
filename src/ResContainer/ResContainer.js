import React from 'react'
import ResCard from '../ResCard/ResCard'
import './ResContainer.css'

const ResContainer = ({ reservations }) => {
    console.log('reservations', reservations)
    const resCards = reservations.map(reservation => {
        return <ResCard
            key={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            id={reservation.id} 
        />
    })

    return (
        <section className='res-cont'>
            {resCards}
        </section>
    )
}

export default ResContainer;