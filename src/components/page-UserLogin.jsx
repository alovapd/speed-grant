import React, { Component } from 'react';
import InputBlock from './InputBlock.jsx';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
		}
		
    render() { 
        return (
            <div>
                <InputBlock title="User Name" name="userName" id="userName" type="text"/>
                <InputBlock title="Password" type="password" name="pword" id="pword"/>
                <InputBlock title="Start Date" type="date" name="startDate" id="startDate"/>
                <InputBlock title="Start Time" type="time" name="startTime" id="startTime"/>
                <InputBlock title="End Time" type="time" name="endTime" id="endTime"/>
            </div>
				  );
    }
}
 
export default UserLogin;