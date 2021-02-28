import React,  {Component } from "react";
import {render} from "react-dom";
import HomePage from './HomePage';



export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        //must have only 1 parent element --> thats why the div
        return (
            <div> 
                <HomePage />
            </div>
            );
    }
}

const appDiv = document.getElementById("app");

render(<App/>, appDiv);