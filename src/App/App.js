import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls/apiCalls'
import ResContainer from '../ResContainer/ResContainer'

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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
        </div>
        <ResContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
