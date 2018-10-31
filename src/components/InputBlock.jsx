import React, { Component } from 'react';

class InputBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.title || "",
            name : this.props.name || "",
            id : this.props.id || "",
            type : this.props.type || "text"
        }
    }
    render() {
        return (
            <div className="App">
                {this.state.title}
                <input className="fieldSpace" 
                    type={this.state.type} 
                    name={this.state.name} 
                    id={this.state.id}>
                </input>
            </div>
        );
    }
}

export default InputBlock; 