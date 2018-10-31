import React, { Component } from 'react';
import './App.css';
import UserLogin from './components/page-UserLogin.jsx';
import ActionScreen from './components/page-ActionScreen.jsx'
import ActionType from './components/page-ActionType.jsx'
import Submit from './components/page-Submit.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: true,
      currentPage:  0,
      pages: [<UserLogin/>, <ActionScreen/>, <ActionType/>, <Submit/>]
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      currentPage: (this.state.currentPage == 3) ? 1 : this.state.currentPage + 1,
    });
  }
  
  render() {
    return (
      <div className="App">
        <main className="App-main">
          {this.state.pages[this.state.currentPage]}
          <button onClick={this._onButtonClick}>GO</button>
        </main>
      </div>
    );
  }
}

export default App;