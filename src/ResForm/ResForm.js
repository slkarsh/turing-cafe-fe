import React, { Component } from 'react'

class ResForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            guests: 0,
        }
    }

    handleChange = e => {
        if ([e.target.name] === 'guests') {
            parseInt([e.target.value])
        }
        this.setState({ [e.target.name] : e.target.value})
    }

    createReservation = (event) => {
        event.preventDefault();
        const newResy = {
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: parseInt(this.state.guests)
        }
        this.props.addReservation(newResy)
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            guests: 0
        })
    }


    render() {
        return (
            <form className='res-form'>
            <input
                className='name-input'
                type='text'
                placeholder='Name'
                value={this.state.name}
                name='name'
                onChange={(e) => this.handleChange(e)}
            />
            <input
                className='date-input'
                type='text'
                placeholder='Date (MM/DD)'
                value={this.state.date}
                name='date'
                onChange={(e) => this.handleChange(e)}
             />
             <input
                className='time-input'
                type='text'
                placeholder='Time'
                value={this.state.time}
                name='time'
                onChange={(e) => this.handleChange(e)}
             />
             <input
                className='guests-input'
                type='number'
                placeholder='Number of guests'
                value={this.state.guests}
                name='guests'
                onChange={(e) => this.handleChange(e)}
             />
             <button onClick={(event) => this.createReservation(event)}>Make Reservation</button>
            </form>
        )   
    }
}

export default ResForm;