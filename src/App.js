import React, { Component } from 'react';
import './App.css';
import UserLogin from './components/page-UserLogin.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          <UserLogin/>
        </main>
      </div>
    );
  }
}

export default App;