import React, { Component } from 'react';
import './App.css';
import { getReservations, postRes } from '../apiCalls/apiCalls'
import ResContainer from '../ResContainer/ResContainer'
import ResForm from '../ResForm/ResForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(res => this.setState({ reservations: res}))
  }

  addReservation = newRes => {
    // console.log('new res', newRes)
    postRes(newRes)
      .then(reservation => this.setState({ reservations: [...this.state.reservations, reservation]}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
        <ResContainer reservations={this.state.reservations} />
        </div>
       
      </div>
    )
  }
}

export default App;
