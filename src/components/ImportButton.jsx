import React, { Component } from 'react';
import UserLogin from './page-UserLogin.jsx';
import ActionScreen from './page-ActionScreen.jsx'
import ActionType from './page-ActionType.jsx'
import Submit from './page-Submit.jsx'

class ImportButton extends Component {
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
          currentPage: (this.state.currentPage = 3) ? 1 : this.state.currentPage + 1,
        });
    }

    render() {
        return (
            <button
                name={this.state.name} 
                id={this.state.id}>
                <button onClick={this._onButtonClick}>GO</button>
            </button>
        );
    }
}

export default ImportButton; 