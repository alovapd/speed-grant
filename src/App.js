import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clicked() {
    console.log('the go button was clicked');
  
  }
  render() {
    return (
      <div className="App">
        <main className="App-main">
          User Name <input className="fieldSpace" type="text" name="userName" id="userName"></input>
          Password <input className="fieldSpace" type="password" name="pward" id="pword"></input>
          Start Date <input className="fieldSpace" type="date" name="startDate" id="startDate"></input>
          Start Time <input className="fieldSpace" type="time" name="startTime" id="startTime"></input>
          End Time <input className="fieldSpace" type="time" name="endTime" id="endTime"></input>
          <button onClick={ this.clicked }>GO</button>
        </main>
      </div>
    );
  }
}

export default App;
