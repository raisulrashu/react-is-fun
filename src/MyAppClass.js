// Raisul Rashu
// 2021 Oct 30

import React, { Component } from 'react';
import MyApp from './MyApp';

export default class MyAppClass extends Component {
    render(){
        console.log("MyAppClass");
        return (
            <div>
                <MyApp/>
                <h3>MyApp is running from MyAppClass</h3>
                <p>Thank you</p>
                <button type="submit">Submit</button>
                <br /><br />
                <textarea></textarea>
            </div>
        );
    }
}
